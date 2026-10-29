import type { GeneratorContext } from "./config.ts";
import type { FunctionBinding } from "./function.ts";
import { isPointerArgument, type Slot } from "./slots.ts";

function getSlotPointers(slots: Map<string, Slot>): string {
    return [...slots]
        .map(
            ([name, slot]) =>
                `    auto* const ${name} = has_${name} ? &slots_${slot.view}[${slot.offset}] : nullptr;\n`,
        )
        .join("");
}

function getArguments(function_: FunctionBinding): string {
    return function_.arguments
        .map((arg) => {
            if (arg.type === "const char*") {
                if (arg.defaultValue === "NULL") {
                    return `(${arg.name}.empty() ? nullptr : ${arg.name}.c_str())`;
                }
                return `${arg.name}.c_str()`;
            }

            return arg.name;
        })
        .join(", ");
}

function getParameters(
    function_: FunctionBinding,
    slots: Map<string, Slot> | undefined,
    parameterTypes: Record<string, string>,
): string {
    return function_.arguments
        .map((arg) => {
            if (slots?.has(arg.name)) {
                return `bool has_${arg.name}`;
            }

            if (arg.type === "const char*") {
                return `std::string ${arg.name}`;
            }

            return `${parameterTypes[arg.name] ?? arg.type} ${arg.name}`;
        })
        .join(", ");
}

export function getFunctionCodeCpp(
    context: GeneratorContext,
    function_: FunctionBinding,
    isMethod: boolean,
): string {
    const config = context.config.functions?.[function_.name];
    if (config?.exclude) return "";
    if (config?.override?.cpp) return config.override.cpp.join("");

    if (isMethod && function_.arguments.some((arg) => isPointerArgument(arg.type))) {
        throw new Error(
            `${function_.name}: pointer arguments are only supported on free functions`,
        );
    }

    const parameterTypes = config?.parameterTypes ?? {};
    for (const name of Object.keys(parameterTypes)) {
        if (!function_.arguments.some((arg) => arg.name === name)) {
            throw new Error(`${function_.name}: parameterTypes names unknown argument "${name}"`);
        }
    }

    const slots = isMethod ? undefined : context.slots?.functions.get(function_.name);
    const name = function_.name;
    const parameters = getParameters(function_, slots, parameterTypes);
    const args = getArguments(function_);
    const pointers = slots ? getSlotPointers(slots) : "";

    let returnType = function_.returnType;
    if (returnType === "const char*") {
        returnType = "std::string";
    }

    const call = (() => {
        if (config?.body) {
            return config.body.map((line) => `    ${line}\n`).join("");
        }

        if (returnType === "void") {
            return `    ${name}(${args});\n`;
        }

        return `    return ${name}(${args});\n`;
    })();

    const policies = (() => {
        if (returnType.includes("*")) {
            return ", rvp_ref{}, allow_raw_ptrs{}";
        }

        if (function_.arguments.some((arg) => arg.type?.includes("*"))) {
            return ", allow_raw_ptrs{}";
        }

        return "";
    })();

    if (isMethod) {
        return (
            `.function("${name}", override([](${parameters}) -> ${returnType} {\n` +
            call +
            `}), allow_raw_ptrs{})\n` +
            "\n"
        );
    }

    return (
        `bind_fn("${name}", [](${parameters}) -> ${returnType} {\n` +
        pointers +
        call +
        `}${policies});\n` +
        "\n"
    );
}
