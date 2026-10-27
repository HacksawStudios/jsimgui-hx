import type { GeneratorContext } from "./config.ts";
import type { FunctionBinding } from "./function.ts";

/**
 * Pointer arguments of free functions travel through static native storage ("slots") instead of
 * `emscripten::val` arrays: the TS wrapper copies the JS array into the slots through typed array
 * views, the native function works on them in place, and the wrapper writes changed values back.
 * Every pointer argument of every function gets its own slots, so JS running during a native call
 * (e.g. an InputText callback) cannot clobber them. Each slot is followed by a snapshot of the
 * passed values that the wrapper compares against.
 */

/** Element type per declared C++ pointer argument type. */
const POINTER_TYPES = new Map<string, string>([
    ["bool*", "bool"],
    ["size_t*", "size_t"],
    ["float*", "float"],
    ["const float*", "float"],
    ["float[2]", "float"],
    ["float[3]", "float"],
    ["float[4]", "float"],
    ["double*", "double"],
    ["double[2]", "double"],
    ["double[3]", "double"],
    ["double[4]", "double"],
    ["int*", "int"],
    ["int[2]", "int"],
    ["int[3]", "int"],
    ["int[4]", "int"],
    ["unsigned int*", "unsigned int"],
]);

/** Storage per element type: the JS view name and the data handed to `typed_memory_view`. */
const STORAGE: Record<string, { view: string; data: string }> = {
    bool: { view: "bool", data: "reinterpret_cast<unsigned char*>(slots_bool)" },
    int: { view: "int", data: "slots_int" },
    "unsigned int": { view: "uint", data: "slots_uint" },
    size_t: { view: "size", data: "slots_size" },
    float: { view: "float", data: "slots_float" },
    double: { view: "double", data: "slots_double" },
};

export type Slot = {
    /** Name of the storage array suffix and the JS view. */
    view: string;
    /** C++ element type. */
    element: string;
    /** Index of the first element; the snapshot follows at `offset + count`. */
    offset: number;
    count: number;
    /** Pointer to const: never written back. */
    readOnly: boolean;
};

export type SlotLayout = {
    functions: Map<string, Map<string, Slot>>;
    /** Elements per view, snapshots included. */
    sizes: Map<string, number>;
};

export function isPointerArgument(type: string): boolean {
    return POINTER_TYPES.has(type);
}

export function getSlotLayout(context: GeneratorContext, functions: FunctionBinding[]): SlotLayout {
    const sizes = new Map(Object.values(STORAGE).map((storage) => [storage.view, 0]));
    const layout = new Map<string, Map<string, Slot>>();

    for (const function_ of functions) {
        const config = context.config.functions?.[function_.name];
        const pointers = function_.arguments.filter((arg) => isPointerArgument(arg.type));

        for (const name of Object.keys(config?.pointerTypes ?? {})) {
            if (!pointers.some((arg) => arg.name === name)) {
                throw new Error(
                    `${function_.name}: pointerTypes names "${name}", which is not a pointer argument`,
                );
            }
        }

        if (config?.exclude || pointers.length === 0) {
            continue;
        }

        if (config?.override) {
            if (config.override.ts && config.override.cpp) {
                continue;
            }
            throw new Error(
                `${function_.name}: functions with pointer arguments must override both ts and cpp`,
            );
        }

        const slots = new Map<string, Slot>();
        for (const arg of pointers) {
            const element = config?.pointerTypes?.[arg.name] ?? POINTER_TYPES.get(arg.type) ?? "";
            const storage = STORAGE[element];
            if (!storage) {
                throw new Error(
                    `${function_.name}: unsupported pointer storage "${element}" for "${arg.name}"`,
                );
            }

            const count = arg.arrayBounds ?? 1;
            const offset = sizes.get(storage.view) ?? 0;
            sizes.set(storage.view, offset + count * 2);
            slots.set(arg.name, {
                view: storage.view,
                element,
                offset,
                count,
                readOnly: arg.type.startsWith("const "),
            });
        }
        layout.set(function_.name, slots);
    }

    return { functions: layout, sizes };
}

function getSize(layout: SlotLayout, view: string): number {
    return Math.max(layout.sizes.get(view) ?? 0, 1);
}

export function getSlotStorageCpp(layout: SlotLayout): string {
    return [
        "// Native storage for pointer arguments of free functions, see ImGui_Slots.\n",
        'static_assert(sizeof(bool) == 1, "slots_bool is exposed as a Uint8Array");\n',
        ...Object.entries(STORAGE).map(
            ([element, storage]) =>
                `static ${element} slots_${storage.view}[${getSize(layout, storage.view)}] = {};\n`,
        ),
        "\n",
    ].join("");
}

export function getSlotViewsCpp(layout: SlotLayout): string {
    return [
        'bind_fn("ImGui_Slots", []() -> js_val {\n',
        "    auto views = js_val::object();\n",
        ...Object.values(STORAGE).map(
            (storage) =>
                `    views.set("${storage.view}", js_val(emscripten::typed_memory_view(${getSize(layout, storage.view)}, ${storage.data})));\n`,
        ),
        "    return views;\n",
        "});\n",
        "\n",
    ].join("");
}
