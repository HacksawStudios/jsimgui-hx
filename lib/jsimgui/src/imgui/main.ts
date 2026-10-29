import { cpSync, mkdirSync, readFileSync, rmSync, writeFileSync } from "node:fs";
import type { GeneratorConfig, GeneratorContext } from "../generator/config.ts";
import { getEnumCodeTs } from "../generator/enum.ts";
import { getFunctionCodeTs } from "../generator/function.ts";
import { getFunctionCodeCpp } from "../generator/function-cpp.ts";
import {
    type DearBindingsData,
    mapEnums,
    mapFunctions,
    mapStructs,
    mapTypedefs,
} from "../generator/provider/dear-bindings.ts";
import { getSlotLayout, getSlotStorageCpp, getSlotViewsCpp } from "../generator/slots.ts";
import { getStructCodeTs } from "../generator/struct.ts";
import { getStructCodeCpp } from "../generator/struct-cpp.ts";
import { getTypedefCodeTs } from "../generator/typedef.ts";
import { generateImPlotBindings } from "../implot/main.ts";
import { filterData } from "./filter.ts";

export interface GenerateImGuiBindingsOptions {
    extensions?: boolean;
}

function getFreeTypeEnumTs(): string {
    return (
        // NOTE: Extra FreeTypeLoaderFlags added manually since they are not in dear_bindings data.
        // See: https://github.com/ocornut/imgui/blob/master/misc/freetype/imgui_freetype.h#L29
        "FreeTypeLoaderFlags: {\n" +
        "NoHinting: 1,\n" +
        "NoAutoHint: 2,\n" +
        "ForceAutoHint: 4,\n" +
        "LightHinting: 8,\n" +
        "MonoHinting: 16,\n" +
        "Bold: 32,\n" +
        "Oblique: 64,\n" +
        "Monochrome: 128,\n" +
        "LoadColor: 256,\n" +
        "Bitmap: 512,\n" +
        "},\n"
    );
}

function getValueStructsTs(): string {
    return [
        "export class ImVec2 extends ValueStruct {",
        "x: number;",
        "y: number;",
        "constructor(x: number, y: number) {",
        "    super();",
        "    this.x = x;",
        "    this.y = y;",
        "}",
        "static From(obj: { x: number; y: number; }): ImVec2 {",
        "    return new ImVec2(obj.x, obj.y);",
        "}",
        "}",
        "/**",
        " * ImVec4: 4D vector used to store clipping rectangles, colors etc. [Compile-time configurable type]",
        " */",
        "export class ImVec4 extends ValueStruct {",
        "x: number;",
        "y: number;",
        "z: number;",
        "w: number;",
        "constructor(x: number, y: number, z: number, w: number) {",
        "    super();",
        "    this.x = x;",
        "    this.y = y;",
        "    this.z = z;",
        "    this.w = w;",
        "}",
        "static From(obj: { x: number; y: number; z: number; w: number; }): ImVec4 {",
        "    return new ImVec4(obj.x, obj.y, obj.z, obj.w);",
        "}",
        "}",
        "export class ImTextureRef extends ValueStruct {",
        "_TexID: ImTextureID;",
        "constructor(_TexID: ImTextureID) {",
        "    super();",
        "    this._TexID = _TexID;",
        "}",
        "static From(obj: { _TexID: ImTextureID; }): ImTextureRef {",
        "    return new ImTextureRef(obj._TexID);",
        "}",
        "}",
    ].join("\n");
}

function getInputTextCallbackTs(): string {
    return [
        "/**",
        " * Makes an InputText*() native call with `callback` wrapped for the native side, which passes it",
        " * a raw ImGuiInputTextCallbackData. An error thrown by `callback` is rethrown once the native",
        " * call has returned, as unwinding through it would leave ImGui halfway through the widget.",
        " * An AccessorRef `buf` is boxed for the native call and its setter called if the text changed.",
        " */",
        "function callInputText(",
        "    buf: [string] | AccessorRef<string>,",
        "    flags: ImGuiInputTextFlags,",
        "    callback: ImGuiInputTextCallback | null,",
        "    call: (buf: [string], native: ((data: unknown) => number) | null) => boolean,",
        "): boolean {",
        "    if (flags & ImGui.InputTextFlags.CallbackResize) {",
        '        throw new Error("ImGuiInputTextFlags.CallbackResize is not supported: buf_size is fixed");',
        "    }",
        "",
        "    const box: [string] = Array.isArray(buf) ? buf : [buf.getters[0]()];",
        "    const text = box[0];",
        "    let failed = false;",
        "    let error: unknown;",
        "    const native = callback",
        "        ? (data: unknown) => {",
        "              if (failed) return 0;",
        "              try {",
        "                  // `| 0`: a callback without a return value (e.g. a Haxe Void function) returns 0",
        "                  return callback(ImGuiInputTextCallbackData.From(data)) | 0;",
        "              } catch (e) {",
        "                  failed = true;",
        "                  error = e;",
        "                  return 0;",
        "              }",
        "          }",
        "        : null;",
        "    const ret = call(box, native);",
        "    if (!Array.isArray(buf) && box[0] !== text) {",
        "        buf.setters[0](box[0]);",
        "    }",
        "    if (failed) throw error;",
        "    return ret;",
        "}",
        "",
    ].join("\n");
}

function getValueStructsCpp(): string {
    return [
        `emscripten::value_object<ImVec2>("ImVec2")`,
        `.field("x", &ImVec2::x)`,
        `.field("y", &ImVec2::y)`,
        `;`,
        `emscripten::value_object<ImVec4>("ImVec4")`,
        `.field("x", &ImVec4::x)`,
        `.field("y", &ImVec4::y)`,
        `.field("z", &ImVec4::z)`,
        `.field("w", &ImVec4::w)`,
        `;`,
        `emscripten::value_object<ImTextureRef>("ImTextureRef")`,
        `.field("_TexID", &ImTextureRef::_TexID)`,
        `;`,
    ].join("\n");
}

export function generateImGuiBindings(options: GenerateImGuiBindingsOptions = {}): void {
    const configFile = readFileSync("./src/imgui/config.json", "utf-8");
    const dataFile = readFileSync("./third_party/dear_bindings/dcimgui.json", "utf-8");

    const config = JSON.parse(configFile) as GeneratorConfig;
    const data = filterData(JSON.parse(dataFile), true, true) as DearBindingsData;

    const context: GeneratorContext = { config };

    const typedefs = mapTypedefs(data.typedefs);
    const enums = mapEnums(data.enums);
    const structs = mapStructs(data.structs, data.functions);
    const functions = mapFunctions(data.functions).filter((function_) =>
        function_.name.startsWith("ImGui_"),
    );

    // Computed once so the TS and C++ sides agree on every slot offset.
    context.slots = getSlotLayout(context, functions);

    const typedefCodeTs = typedefs.map((typedef) => getTypedefCodeTs(context, typedef)).join("");
    const enumsCodeTs = enums.map((enum_) => getEnumCodeTs(context, enum_, "ImGui")).join("");
    const structsCodeTs = structs.map((struct) => getStructCodeTs(context, struct)).join("");
    const functionsCodeTs = functions
        .map((function_) => getFunctionCodeTs(context, function_, "ImGui_", false))
        .join("");

    const ts = [
        "import { type AccessorRef, Mod, ValueStruct, ReferenceStruct } from './core.js';\n",
        "import { slots, slotsIn, slotsOut, slotsOutBool } from './slots.js';\n",
        typedefCodeTs,
        "export type ImWchar = number;\n",
        "const IM_COL32_WHITE = 0xFFFFFFFF;\n",
        "\n",
        getValueStructsTs(),
        structsCodeTs,
        getInputTextCallbackTs(),
        "export const ImGui = {\n",
        enumsCodeTs,
        getFreeTypeEnumTs(),
        functionsCodeTs,
        "};\n",
    ].join("");

    const structsCodeCpp = structs.map((struct) => getStructCodeCpp(context, struct)).join("");
    const functionsCodeCpp = functions
        .map((function_) => getFunctionCodeCpp(context, function_, false))
        .join("");

    const cpp = [
        "#include <util.hpp>\n",
        "\n",
        "#include <dcimgui.h>\n",
        "#include <dcimgui_internal.h>\n",
        "\n",
        getSlotStorageCpp(context.slots),
        "static auto const IMGUI = bindings([]() {\n",
        getValueStructsCpp(),
        "\n",
        structsCodeCpp,
        "\n",
        getSlotViewsCpp(context.slots),
        functionsCodeCpp,
        "});\n",
        "\n",
    ].join("");

    rmSync("./bindgen", { recursive: true, force: true });
    cpSync("./src/imgui/api/ts", "./bindgen/ts", { recursive: true });
    mkdirSync("./bindgen/ts", { recursive: true });
    mkdirSync("./bindgen/cpp", { recursive: true });
    writeFileSync("./bindgen/ts/imgui.ts", ts);
    writeFileSync("./bindgen/cpp/imgui.cpp", cpp);

    if (options.extensions) {
        generateImPlotBindings();
        const modPath = "./bindgen/ts/mod.ts";
        const modTs = readFileSync(modPath, "utf-8");
        writeFileSync(modPath, `${modTs}export * from "./implot.js";\n`);
    }
}
