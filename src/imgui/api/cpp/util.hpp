#pragma once

#include <emscripten/bind.h>
#include <emscripten/val.h>
#include <emscripten/wire.h>

#include <array>
#include <cstddef>
#include <numbers>
#include <stdexcept>
#include <ranges>
#include <string>
#include <type_traits>
#include <utility>
#include <vector>

using js_val = emscripten::val;
using allow_raw_ptrs = emscripten::allow_raw_pointers;
using rvp_ref = emscripten::return_value_policy::reference;

template <typename... Ts>
consteval auto unused(Ts&&...) -> void {};

template <typename Fn>
 requires std::is_invocable_v<Fn> && std::is_same_v<std::invoke_result_t<Fn>, void>
struct bindings : emscripten::internal::InitFunc {
    explicit bindings(Fn&& fn) : InitFunc(std::forward<Fn>(std::move(fn))) {}
};

template <typename Fn>
constexpr auto override(Fn&& fn) {
    return emscripten::optional_override(std::forward<Fn>(fn));
}

template <typename Fn, typename... Policies>
constexpr auto bind_fn(const char* name, Fn&& fn, Policies&&... policies) -> void {
    return emscripten::function(
        name,
        emscripten::optional_override(std::forward<Fn>(fn)),
        std::forward<Policies>(policies)...
    );
}

template <typename T>
constexpr auto bind_struct(const char* name) -> emscripten::class_<T> {
    return emscripten::class_<T>(name);
}

// C callback that calls the JS function passed as its `UserData`, handing it the callback data.
// The JS function must outlive the native call, so only use it for callbacks fired before that
// call returns (e.g. ImGuiInputTextCallback).
template <typename Data>
auto call_js_user_data(Data* data) -> int {
    auto const& fn = *static_cast<js_val const*>(data->UserData);
    return fn(data, allow_raw_ptrs{}).template as<int>();
}

template <typename T, size_t N>
struct array_param {
    std::array<T, N> arr = {};
    std::array<T, N> original = {};
    size_t len = 0;
    T* ptr = nullptr;
};

template <typename T, size_t N>
inline auto get_array_param(js_val const& v) -> array_param<T, N> {
    array_param<T, N> out{};

    if (v.isNull() || v.isUndefined() || !v.isArray())
        return out;

    auto const len = v["length"].as<size_t>();
    if (len <= 0 || len > N)
        return out;

    for (auto const i : std::views::iota(0uz, len)) {
        out.arr[i] = v[i].as<T>();
    }

    out.original = out.arr;
    out.len = len;
    out.ptr = out.arr.data();
    return out;
}

// Only writes slots the native call changed (or that the JS array did not have), so unchanged
// values keep their full JS precision and JS-side setters only see real edits.
template <typename T, size_t N>
inline auto write_back_array_param(array_param<T, N> const& out, js_val& v) -> void {
    if (!out.ptr)
        return;

    for (auto const i : std::views::iota(0uz, N)) {
        if (i >= out.len || out.arr[i] != out.original[i]) {
            v.set(i, out.arr[i]);
        }
    }
}

template <typename T>
struct vector_param {
    std::vector<T> vec = {};
    std::vector<T> original = {};
    T* ptr = nullptr;
};

template <typename T>
inline auto get_vector_param(js_val const& v) -> vector_param<T> {
    vector_param<T> out{};

    if (v.isNull() || v.isUndefined() || !v.isArray())
        return out;

    auto const len = v["length"].as<size_t>();
    if (len <= 0)
        return out;

    out.vec.reserve(len);
    for (auto const i : std::views::iota(0uz, len)) {
        out.vec.emplace_back(v[i].as<T>());
    }

    out.original = out.vec;
    out.ptr = out.vec.data();
    return out;
}

template <typename T>
inline auto get_vector_param(
    js_val const& v,
    size_t expected,
    const char* name,
    bool required = true
) -> vector_param<T> {
    vector_param<T> out{};

    if (v.isNull() || v.isUndefined()) {
        if (required) {
            throw std::invalid_argument(std::string(name) + " must be an array");
        }

        return out;
    }

    if (!v.isArray()) {
        throw std::invalid_argument(std::string(name) + " must be an array");
    }

    auto const len = v["length"].as<size_t>();
    if (len < expected) {
        throw std::invalid_argument(std::string(name) + " length is smaller than its count");
    }

    out.vec.reserve(len);
    for (auto const i : std::views::iota(0uz, len)) {
        out.vec.emplace_back(v[i].as<T>());
    }

    out.original = out.vec;
    out.ptr = out.vec.data();
    return out;
}

// Only writes slots the native call changed, see write_back_array_param.
template <typename T>
inline auto write_back_vector_param(vector_param<T> const& out, js_val& v) -> void {
    if (!out.ptr)
        return;

    for (auto const i : std::views::iota(0uz, out.vec.size())) {
        if (out.vec[i] != out.original[i]) {
            v.set(i, out.vec[i]);
        }
    }
}

struct string_array_param {
    std::vector<std::string> strings = {};
    std::vector<const char*> ptrs = {};
    const char* const* ptr = nullptr;
};

inline auto get_string_array_param(
    js_val const& v,
    size_t expected,
    const char* name,
    bool required = true
) -> string_array_param {
    string_array_param out{};

    if (v.isNull() || v.isUndefined()) {
        if (required) {
            throw std::invalid_argument(std::string(name) + " must be an array");
        }

        return out;
    }

    if (!v.isArray()) {
        throw std::invalid_argument(std::string(name) + " must be an array");
    }

    auto const len = v["length"].as<size_t>();
    if (len < expected) {
        throw std::invalid_argument(std::string(name) + " length is smaller than its count");
    }

    out.strings.reserve(len);
    out.ptrs.reserve(len);
    for (auto const i : std::views::iota(0uz, len)) {
        out.strings.emplace_back(v[i].as<std::string>());
        out.ptrs.emplace_back(out.strings.back().c_str());
    }

    out.ptr = out.ptrs.data();
    return out;
}
