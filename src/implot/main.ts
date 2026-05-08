import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

interface CimPlotArg {
    name: string;
    type: string;
}

interface CimPlotDefinition {
    argsT?: CimPlotArg[];
    constructor?: boolean;
    defaults?: Record<string, string>;
    funcname: string;
    isvararg?: string;
    location?: string;
    namespace?: string;
    ov_cimguiname: string;
    ret?: string;
    stname?: string;
}

type CimPlotDefinitions = Record<string, CimPlotDefinition[]>;
type CimPlotEnums = Record<string, { name: string; calc_value: number }[]>;
type CimPlotTypedefs = Record<string, string>;

const CALLBACK_TYPES = new Set([
    "ImPlotFormatter",
    "ImPlotGetter",
    "ImPlotLocator",
    "ImPlotPoint_getter",
    "ImPlotTransform",
    "va_list",
]);

const UNSUPPORTED_VALUE_TYPES = new Set(["ImTextureRef"]);

const VALUE_STRUCTS = new Set([
    "ImPlotDateTimeSpec",
    "ImPlotPoint",
    "ImPlotRange",
    "ImPlotRect",
    "ImPlotTime",
]);

const RAW_POINTER_TYPES = new Set([
    "ImGuiContext",
    "ImPlotContext",
    "ImPlotDateTimeSpec",
    "ImPlotInputMap",
    "ImPlotPoint",
    "ImPlotRange",
    "ImPlotRect",
    "ImPlotSpec",
    "ImPlotStyle",
    "ImPlotTime",
]);

const NUMERIC_ARRAY_TYPES = new Map<string, string>([
    ["double", "double"],
    ["float", "float"],
    ["ImS8", "ImS8"],
    ["ImS16", "ImS16"],
    ["ImS32", "ImS32"],
    ["ImS64", "ImS64"],
    ["ImU8", "ImU8"],
    ["ImU16", "ImU16"],
    ["ImU32", "ImU32"],
    ["ImU64", "ImU64"],
    ["int", "int"],
]);

const CLEAN_METHOD_NAMES = new Map<string, string>([
    ["ImPlot_PlotBarGroups_doublePtr", "PlotBarGroups"],
    ["ImPlot_PlotBars_doublePtrInt", "PlotBars"],
    ["ImPlot_PlotBars_doublePtrdoublePtr", "PlotBarsXY"],
    ["ImPlot_PlotBubbles_doublePtrdoublePtrInt", "PlotBubbles"],
    ["ImPlot_PlotBubbles_doublePtrdoublePtrdoublePtr", "PlotBubblesXY"],
    ["ImPlot_PlotDigital_doublePtr", "PlotDigital"],
    ["ImPlot_PlotErrorBars_doublePtrdoublePtrdoublePtrInt", "PlotErrorBars"],
    ["ImPlot_PlotErrorBars_doublePtrdoublePtrdoublePtrdoublePtr", "PlotErrorBarsRange"],
    ["ImPlot_PlotHeatmap_doublePtr", "PlotHeatmap"],
    ["ImPlot_PlotHistogram_doublePtr", "PlotHistogram"],
    ["ImPlot_PlotHistogram2D_doublePtr", "PlotHistogram2D"],
    ["ImPlot_PlotInfLines_doublePtr", "PlotInfLines"],
    ["ImPlot_PlotLine_doublePtrInt", "PlotLine"],
    ["ImPlot_PlotLine_doublePtrdoublePtr", "PlotLineXY"],
    ["ImPlot_PlotPieChart_doublePtrStr", "PlotPieChart"],
    ["ImPlot_PlotPolygon_doublePtr", "PlotPolygon"],
    ["ImPlot_PixelsToPlot_Float", "PixelsToPlot"],
    ["ImPlot_PixelsToPlot_Vec2", "PixelsToPlotVec2"],
    ["ImPlot_PlotScatter_doublePtrInt", "PlotScatter"],
    ["ImPlot_PlotScatter_doublePtrdoublePtr", "PlotScatterXY"],
    ["ImPlot_PlotShaded_doublePtrInt", "PlotShaded"],
    ["ImPlot_PlotShaded_doublePtrdoublePtrInt", "PlotShadedXY"],
    ["ImPlot_PlotShaded_doublePtrdoublePtrdoublePtr", "PlotShadedBand"],
    ["ImPlot_PlotStairs_doublePtrInt", "PlotStairs"],
    ["ImPlot_PlotStairs_doublePtrdoublePtr", "PlotStairsXY"],
    ["ImPlot_PlotStems_doublePtrInt", "PlotStems"],
    ["ImPlot_PlotStems_doublePtrdoublePtr", "PlotStemsXY"],
    ["ImPlot_PlotToPixels_double", "PlotToPixels"],
    ["ImPlot_PlotToPixels_PlotPoint", "PlotToPixelsPoint"],
    ["ImPlot_SetupAxisTicks_doublePtr", "SetupAxisTicks"],
    ["ImPlot_SetupAxisTicks_double", "SetupAxisTicksRange"],
]);

let enumDefaultValues = new Map<string, number>();

function readJson<T>(path: string): T {
    return JSON.parse(readFileSync(path, "utf-8")) as T;
}

function normalizeType(type: string | undefined): string {
    return (type ?? "void").replaceAll(/\s+/g, " ").trim();
}

function stripConst(type: string): string {
    return type.replace(/^const /, "");
}

function stripPointer(type: string): string {
    return stripConst(type).replace(/\s*\*$/, "");
}

function isPointer(type: string): boolean {
    return normalizeType(type).endsWith("*");
}

function pointerBase(type: string): string {
    return stripPointer(normalizeType(type));
}

function isNumericPointer(type: string): boolean {
    return isPointer(type) && NUMERIC_ARRAY_TYPES.has(pointerBase(type));
}

function getNumericPointerTypes(definition: CimPlotDefinition): string[] {
    return (definition.argsT ?? [])
        .map((arg) => normalizeType(arg.type))
        .filter(isNumericPointer)
        .map(pointerBase);
}

function isTypedPlotOverload(definition: CimPlotDefinition): boolean {
    return (
        definition.ov_cimguiname.startsWith("ImPlot_Plot") &&
        getNumericPointerTypes(definition).length > 0
    );
}

function hasOnlyDoubleNumericPointers(definition: CimPlotDefinition): boolean {
    const types = getNumericPointerTypes(definition);
    return types.length > 0 && types.every((type) => type === "double");
}

function isGeneratedValueStructFunction(definition: CimPlotDefinition): boolean {
    return [...VALUE_STRUCTS, "ImPlotSpec"].some((name) =>
        definition.ov_cimguiname.startsWith(`${name}_`),
    );
}

function isStringArray(type: string): boolean {
    const normalized = normalizeType(type);
    return normalized === "const char* const[]" || normalized === "const char* const*";
}

function isRawPointer(type: string): boolean {
    if (!isPointer(type)) return false;
    if (isNumericPointer(type)) return false;
    return RAW_POINTER_TYPES.has(pointerBase(type));
}

function getReturnType(definition: CimPlotDefinition): string {
    if (definition.ret) return normalizeType(definition.ret);
    if (definition.constructor && definition.stname) return `${definition.stname}*`;
    return "void";
}

function getUnsupportedReason(definition: CimPlotDefinition): string | undefined {
    if (!definition.location?.startsWith("implot:")) return "internal";
    if (definition.isvararg) return "vararg";

    const types = [
        getReturnType(definition),
        ...(definition.argsT ?? []).map((arg) => arg.type),
    ].map(normalizeType);

    for (const arg of definition.argsT ?? []) {
        if (arg.name === "..." || normalizeType(arg.type) === "...") return "vararg";
    }

    const returnType = getReturnType(definition);
    if (isPointer(returnType) && !isRawPointer(returnType)) {
        return `raw-pointer-return:${returnType}`;
    }

    for (const type of types) {
        const cleanType = stripConst(type);
        if (CALLBACK_TYPES.has(cleanType)) return `callback:${cleanType}`;
        if (cleanType === "void*" || cleanType === "const void*") return "void-pointer";
        if (UNSUPPORTED_VALUE_TYPES.has(stripPointer(cleanType))) return `unsupported:${cleanType}`;
        if (isPointer(cleanType) && !isRawPointer(cleanType) && !isNumericPointer(cleanType)) {
            const base = pointerBase(cleanType);
            if (base === "char" || base === "ImVec4") continue;
            return `raw-pointer:${cleanType}`;
        }
    }

    return undefined;
}

function collectFunctions(definitions: CimPlotDefinitions): CimPlotDefinition[] {
    return Object.values(definitions)
        .flat()
        .filter((definition) => getUnsupportedReason(definition) === undefined)
        .filter((definition) => !isGeneratedValueStructFunction(definition))
        .filter(
            (definition) =>
                !isTypedPlotOverload(definition) || hasOnlyDoubleNumericPointers(definition),
        )
        .sort((left, right) => left.ov_cimguiname.localeCompare(right.ov_cimguiname));
}

function toEnumGroupName(enumName: string): string {
    const trimmed = enumName.endsWith("_") ? enumName.slice(0, -1) : enumName;
    if (trimmed === "ImAxis") return "Axis";
    return trimmed.startsWith("ImPlot") ? trimmed.slice("ImPlot".length) : trimmed;
}

function trimEnumFieldName(fieldName: string, enumName: string): string {
    const prefix = enumName.endsWith("_") ? enumName : `${enumName}_`;
    if (fieldName.startsWith(prefix)) return fieldName.slice(prefix.length);
    return fieldName.replace(/^ImPlot/, "").replace(/^ImAxis_/, "");
}

function getEnumCodeTs(enums: CimPlotEnums): string {
    return Object.entries(enums)
        .map(([enumName, fields]) => {
            const seenFields = new Set<string>();
            const members = fields
                .map((field) => ({
                    name: trimEnumFieldName(field.name, enumName),
                    value: field.calc_value,
                }))
                .filter((field) => {
                    if (seenFields.has(field.name)) return false;
                    seenFields.add(field.name);
                    return true;
                })
                .map((field) => `${field.name}: ${field.value},\n`)
                .join("");

            return `${toEnumGroupName(enumName)}: {\n${members}},\n`;
        })
        .join("");
}

function getTypedefCodeTs(typedefs: CimPlotTypedefs): string {
    const aliases = Object.entries(typedefs)
        .filter(([name, declaration]) => {
            if (!(name === "ImAxis" || name.startsWith("ImPlot"))) return false;
            if (VALUE_STRUCTS.has(name) || name === "ImPlotSpec") return false;
            return declaration === "int" || declaration.startsWith("struct ");
        })
        .map(([name, declaration]) => {
            if (declaration.startsWith("struct ") && !RAW_POINTER_TYPES.has(name)) return "";
            return `export type ${name} = number;\n`;
        })
        .filter((line) => line !== "")
        .sort();

    return Array.from(new Set(aliases)).join("");
}

function getValueStructsTs(): string {
    return [
        "export class ImPlotDateTimeSpec extends ValueStruct {",
        "Date: number;",
        "Time: number;",
        "UseISO8601: boolean;",
        "Use24HourClock: boolean;",
        "constructor(Date = 0, Time = 0, UseISO8601 = false, Use24HourClock = false) {",
        "    super();",
        "    this.Date = Date;",
        "    this.Time = Time;",
        "    this.UseISO8601 = UseISO8601;",
        "    this.Use24HourClock = Use24HourClock;",
        "}",
        "static From(obj: ImPlotDateTimeSpec): ImPlotDateTimeSpec {",
        "    return new ImPlotDateTimeSpec(obj.Date, obj.Time, obj.UseISO8601, obj.Use24HourClock);",
        "}",
        "}",
        "export class ImPlotPoint extends ValueStruct {",
        "x: number;",
        "y: number;",
        "constructor(x = 0, y = 0) {",
        "    super();",
        "    this.x = x;",
        "    this.y = y;",
        "}",
        "static From(obj: ImPlotPoint): ImPlotPoint {",
        "    return new ImPlotPoint(obj.x, obj.y);",
        "}",
        "}",
        "export class ImPlotRange extends ValueStruct {",
        "Min: number;",
        "Max: number;",
        "constructor(Min = 0, Max = 0) {",
        "    super();",
        "    this.Min = Min;",
        "    this.Max = Max;",
        "}",
        "static From(obj: ImPlotRange): ImPlotRange {",
        "    return new ImPlotRange(obj.Min, obj.Max);",
        "}",
        "}",
        "export class ImPlotRect extends ValueStruct {",
        "X: ImPlotRange;",
        "Y: ImPlotRange;",
        "constructor(X = new ImPlotRange(), Y = new ImPlotRange()) {",
        "    super();",
        "    this.X = X;",
        "    this.Y = Y;",
        "}",
        "static From(obj: ImPlotRect): ImPlotRect {",
        "    return new ImPlotRect(ImPlotRange.From(obj.X), ImPlotRange.From(obj.Y));",
        "}",
        "}",
        "export class ImPlotTime extends ValueStruct {",
        "S: number;",
        "Us: number;",
        "constructor(S = 0, Us = 0) {",
        "    super();",
        "    this.S = S;",
        "    this.Us = Us;",
        "}",
        "static From(obj: ImPlotTime): ImPlotTime {",
        "    return new ImPlotTime(obj.S, obj.Us);",
        "}",
        "}",
        "export class ImPlotSpec extends ValueStruct {",
        "LineColor: ImVec4;",
        "LineWeight: number;",
        "FillColor: ImVec4;",
        "FillAlpha: number;",
        "Marker: number;",
        "MarkerSize: number;",
        "MarkerLineColor: ImVec4;",
        "MarkerFillColor: ImVec4;",
        "Size: number;",
        "Offset: number;",
        "Stride: number;",
        "Flags: number;",
        "constructor(",
        "    LineColor = new ImVec4(0.0, 0.0, 0.0, -1.0),",
        "    LineWeight = 1.0,",
        "    FillColor = new ImVec4(0.0, 0.0, 0.0, -1.0),",
        "    FillAlpha = 1.0,",
        "    Marker = 0,",
        "    MarkerSize = 4.0,",
        "    MarkerLineColor = new ImVec4(0.0, 0.0, 0.0, -1.0),",
        "    MarkerFillColor = new ImVec4(0.0, 0.0, 0.0, -1.0),",
        "    Size = 4.0,",
        "    Offset = 0,",
        "    Stride = -1,",
        "    Flags = 0,",
        ") {",
        "    super();",
        "    this.LineColor = LineColor;",
        "    this.LineWeight = LineWeight;",
        "    this.FillColor = FillColor;",
        "    this.FillAlpha = FillAlpha;",
        "    this.Marker = Marker;",
        "    this.MarkerSize = MarkerSize;",
        "    this.MarkerLineColor = MarkerLineColor;",
        "    this.MarkerFillColor = MarkerFillColor;",
        "    this.Size = Size;",
        "    this.Offset = Offset;",
        "    this.Stride = Stride;",
        "    this.Flags = Flags;",
        "}",
        "static From(obj: ImPlotSpec): ImPlotSpec {",
        "    return new ImPlotSpec(",
        "        ImVec4.From(obj.LineColor),",
        "        obj.LineWeight,",
        "        ImVec4.From(obj.FillColor),",
        "        obj.FillAlpha,",
        "        obj.Marker,",
        "        obj.MarkerSize,",
        "        ImVec4.From(obj.MarkerLineColor),",
        "        ImVec4.From(obj.MarkerFillColor),",
        "        obj.Size,",
        "        obj.Offset,",
        "        obj.Stride,",
        "        obj.Flags,",
        "    );",
        "}",
        "}",
    ].join("\n");
}

function mapTsType(type: string): string {
    const normalized = normalizeType(type);
    const base = stripConst(normalized).replace(/_c$/, "");

    if (normalized === "void") return "void";
    if (normalized === "bool") return "boolean";
    if (normalized === "const char*" || normalized === "char*") return "string";
    if (isStringArray(normalized)) return "string[] | null";
    if (isNumericPointer(normalized)) {
        if (pointerBase(normalized) === "bool") return "[boolean] | null";
        return "number[]";
    }
    if (normalized === "const ImVec4*" || normalized === "ImVec4*") return "ImVec4[]";
    if (normalized === "const ImPlotSpec" || normalized === "ImPlotSpec") {
        return "ImPlotSpec | null";
    }
    if (
        isRawPointer(normalized) ||
        (isPointer(normalized) && RAW_POINTER_TYPES.has(pointerBase(normalized)))
    ) {
        return "number";
    }
    if (base === "ImVec2" || base === "ImVec4" || VALUE_STRUCTS.has(base)) return base;
    if (
        [
            "double",
            "float",
            "int",
            "ImAxis",
            "ImGuiCond",
            "ImGuiDragDropFlags",
            "ImGuiID",
            "ImGuiMouseButton",
            "ImPlotAxisFlags",
            "ImPlotBarGroupsFlags",
            "ImPlotBarsFlags",
            "ImPlotBin",
            "ImPlotCol",
            "ImPlotColormap",
            "ImPlotColormapScaleFlags",
            "ImPlotCond",
            "ImPlotDragToolFlags",
            "ImPlotFlags",
            "ImPlotHeatmapFlags",
            "ImPlotHistogramFlags",
            "ImPlotImageFlags",
            "ImPlotInfLinesFlags",
            "ImPlotItemFlags",
            "ImPlotLegendFlags",
            "ImPlotLineFlags",
            "ImPlotLocation",
            "ImPlotMarker",
            "ImPlotMouseTextFlags",
            "ImPlotPieChartFlags",
            "ImPlotProp",
            "ImPlotScale",
            "ImPlotStyleVar",
            "ImPlotSubplotFlags",
            "ImPlotTextFlags",
            "size_t",
            ...NUMERIC_ARRAY_TYPES.keys(),
        ].includes(base)
    ) {
        return "number";
    }

    return "number";
}

function getDefaultValue(definition: CimPlotDefinition, arg: CimPlotArg): string {
    const defaultValue = definition.defaults?.[arg.name];
    if (!defaultValue) return "";
    if (defaultValue === "NULL" || defaultValue === "nullptr") {
        if (normalizeType(arg.type) === "const char*") return '""';
        if (isRawPointer(arg.type)) return "0";
        return "null";
    }
    if (enumDefaultValues.has(defaultValue)) return `${enumDefaultValues.get(defaultValue)}`;
    if (defaultValue === "true" || defaultValue === "false") return defaultValue;
    if (defaultValue === "IMPLOT_AUTO") return "-1";
    if (defaultValue === "ImPlotSpec()") return "null";
    if (defaultValue.startsWith("ImVec2(")) return `new ${defaultValue}`;
    if (defaultValue.startsWith("ImVec4(")) return `new ${defaultValue}`;
    if (defaultValue === "ImPlotRange()") return "new ImPlotRange()";
    if (defaultValue === "ImPlotRect()") return "new ImPlotRect()";
    if (defaultValue.startsWith("ImPlotPoint(")) return `new ${defaultValue}`;
    if (defaultValue.startsWith("ImPlotRange(")) return `new ${defaultValue}`;
    if (defaultValue.startsWith("ImPlotRect(")) return `new ${defaultValue}`;
    if (/^-?[\d.]+f?$/.test(defaultValue)) return defaultValue.replace(/f$/, "");
    return defaultValue;
}

function getObjectMethodName(cimguiName: string): string {
    const cleanName = CLEAN_METHOD_NAMES.get(cimguiName);
    if (cleanName) return cleanName;
    if (cimguiName.startsWith("ImPlot_")) return cimguiName.slice("ImPlot_".length);
    if (cimguiName.startsWith("ImPlot")) return cimguiName.slice("ImPlot".length);
    return cimguiName;
}

function getFunctionCodeTs(definition: CimPlotDefinition): string {
    const parameters = (definition.argsT ?? [])
        .map((arg) => {
            const name = arg.name === "in" ? "in_" : arg.name;
            const defaultValue = getDefaultValue(definition, arg);
            const mappedType = mapTsType(arg.type);
            const type =
                defaultValue === "null" && !mappedType.includes("null")
                    ? `${mappedType} | null`
                    : mappedType;
            const defaultPart = defaultValue ? ` = ${defaultValue}` : "";
            return `${name}: ${type}${defaultPart}`;
        })
        .join(", ");
    const args = (definition.argsT ?? [])
        .map((arg) => (arg.name === "in" ? "in_" : arg.name))
        .join(", ");
    const returnType = mapTsType(getReturnType(definition));
    const name = getObjectMethodName(definition.ov_cimguiname);
    const call = `Mod.export.${definition.ov_cimguiname}(${args})`;

    if (returnType === "void") {
        return `${name}(${parameters}): void {\n        ${call};\n},\n`;
    }

    const valueStruct = stripConst(getReturnType(definition)).replace(/_c$/, "");
    if (valueStruct === "ImVec2" || valueStruct === "ImVec4" || VALUE_STRUCTS.has(valueStruct)) {
        return `${name}(${parameters}): ${returnType} {\n        return ${returnType}.From(${call});\n},\n`;
    }

    return `${name}(${parameters}): ${returnType} {\n        return ${call};\n},\n`;
}

function getValueStructsCpp(): string {
    return [
        `emscripten::value_object<ImPlotDateTimeSpec_c>("ImPlotDateTimeSpec")`,
        `.field("Date", &ImPlotDateTimeSpec_c::Date)`,
        `.field("Time", &ImPlotDateTimeSpec_c::Time)`,
        `.field("UseISO8601", &ImPlotDateTimeSpec_c::UseISO8601)`,
        `.field("Use24HourClock", &ImPlotDateTimeSpec_c::Use24HourClock)`,
        `;`,
        `emscripten::value_object<ImPlotPoint_c>("ImPlotPoint")`,
        `.field("x", &ImPlotPoint_c::x)`,
        `.field("y", &ImPlotPoint_c::y)`,
        `;`,
        `emscripten::value_object<ImPlotRange_c>("ImPlotRange")`,
        `.field("Min", &ImPlotRange_c::Min)`,
        `.field("Max", &ImPlotRange_c::Max)`,
        `;`,
        `emscripten::value_object<ImPlotRect_c>("ImPlotRect")`,
        `.field("X", &ImPlotRect_c::X)`,
        `.field("Y", &ImPlotRect_c::Y)`,
        `;`,
        `emscripten::value_object<ImPlotTime_c>("ImPlotTime")`,
        `.field("S", &ImPlotTime_c::S)`,
        `.field("Us", &ImPlotTime_c::Us)`,
        `;`,
    ].join("\n");
}

function isNullableArg(definition: CimPlotDefinition, arg: CimPlotArg): boolean {
    const defaultValue = definition.defaults?.[arg.name];
    return defaultValue === "NULL" || defaultValue === "nullptr";
}

function getCountExpression(definition: CimPlotDefinition, arg: CimPlotArg): string {
    const args = definition.argsT ?? [];
    const hasArg = (name: string) => args.some((candidate) => candidate.name === name);

    if (arg.name === "row_ratios" && hasArg("rows")) return "static_cast<size_t>(rows)";
    if (arg.name === "col_ratios" && hasArg("cols")) return "static_cast<size_t>(cols)";
    if (arg.name === "labels" && hasArg("n_ticks")) return "static_cast<size_t>(n_ticks)";
    if (arg.name === "label_ids" && hasArg("item_count")) return "static_cast<size_t>(item_count)";
    if (arg.name === "cols" && hasArg("size")) return "static_cast<size_t>(size)";
    if (arg.name === "values" && hasArg("item_count") && hasArg("group_count")) {
        return "static_cast<size_t>(item_count * group_count)";
    }
    if (hasArg("count")) return "static_cast<size_t>(count)";
    if (hasArg("n_ticks")) return "static_cast<size_t>(n_ticks)";
    if (arg.name.endsWith("_min") || arg.name.endsWith("_max")) return "1";
    if (pointerBase(arg.type) === "bool") return "1";
    return "0";
}

function toCppParamType(arg: CimPlotArg): string {
    const type = normalizeType(arg.type);
    const base = stripConst(type).replace(/_c$/, "");
    if (type === "const char*" || type === "char*") return "std::string";
    if (
        isStringArray(type) ||
        isNumericPointer(type) ||
        type === "const ImVec4*" ||
        type === "ImVec4*"
    ) {
        return "js_val";
    }
    if (type === "const ImPlotSpec" || type === "ImPlotSpec") return "js_val";
    if (isRawPointer(type)) return "uintptr_t";
    if (base === "ImVec2" || base === "ImVec4") return "js_val";
    if (VALUE_STRUCTS.has(base)) return `${base}_c`;
    return type.replace(/_c$/, "");
}

function getPreprocessCode(definition: CimPlotDefinition): string {
    return (definition.argsT ?? [])
        .map((arg) => {
            const type = normalizeType(arg.type);
            const countExpression = getCountExpression(definition, arg);
            const required = isNullableArg(definition, arg) ? "false" : "true";

            if (isStringArray(type)) {
                return `    auto param_${arg.name} = get_string_array_param(${arg.name}, ${countExpression}, "${arg.name}", ${required});\n`;
            }

            if (type === "const ImVec4*" || type === "ImVec4*") {
                return `    auto param_${arg.name} = get_imvec4_array_param(${arg.name}, ${countExpression}, "${arg.name}", ${required});\n`;
            }

            if (isNumericPointer(type)) {
                return `    auto param_${arg.name} = get_vector_param<${NUMERIC_ARRAY_TYPES.get(pointerBase(type))}>(${arg.name}, ${countExpression}, "${arg.name}", ${required});\n`;
            }

            if (type === "const ImPlotSpec" || type === "ImPlotSpec") {
                return `    auto param_${arg.name} = get_implot_spec_param(${arg.name});\n`;
            }

            if (stripConst(type) === "ImVec2") {
                return `    auto param_${arg.name} = to_c_vec2(${arg.name});\n`;
            }

            if (stripConst(type) === "ImVec4") {
                return `    auto param_${arg.name} = to_c_vec4(${arg.name});\n`;
            }

            return "";
        })
        .join("");
}

function getCallArgument(arg: CimPlotArg): string {
    const type = normalizeType(arg.type);
    if (type === "const char*" || type === "char*") return `${arg.name}.c_str()`;
    if (
        isStringArray(type) ||
        isNumericPointer(type) ||
        type === "const ImVec4*" ||
        type === "ImVec4*"
    ) {
        return `param_${arg.name}.ptr`;
    }
    if (type === "const ImPlotSpec" || type === "ImPlotSpec") return `param_${arg.name}.spec`;
    if (stripConst(type) === "ImVec2" || stripConst(type) === "ImVec4") return `param_${arg.name}`;
    if (isRawPointer(type)) return `reinterpret_cast<${stripPointer(type)}*>(${arg.name})`;
    return arg.name === "in" ? "in_" : arg.name;
}

function getReturnExpression(definition: CimPlotDefinition, call: string): string {
    const returnType = getReturnType(definition);
    if (returnType === "void") return `    ${call};\n`;
    if (returnType === "const char*") {
        return `    auto const ret = ${call};\n    return ret ? std::string(ret) : std::string();\n`;
    }
    if (returnType === "ImVec2_c") return `    return from_c(${call});\n`;
    if (returnType === "ImVec4_c") return `    return from_c(${call});\n`;
    if (isPointer(returnType)) return `    return reinterpret_cast<uintptr_t>(${call});\n`;
    return `    return ${call};\n`;
}

function toCppReturnType(definition: CimPlotDefinition): string {
    const returnType = getReturnType(definition);
    if (returnType === "const char*") return "std::string";
    if (returnType === "ImVec2_c") return "js_val";
    if (returnType === "ImVec4_c") return "js_val";
    if (isPointer(returnType)) return "uintptr_t";
    return returnType;
}

function getPolicies(definition: CimPlotDefinition): string {
    if ((definition.argsT ?? []).some((arg) => isRawPointer(arg.type))) return ", allow_raw_ptrs{}";
    return "";
}

function getFunctionCodeCpp(definition: CimPlotDefinition): string {
    const parameters = (definition.argsT ?? [])
        .map((arg) => `${toCppParamType(arg)} ${arg.name === "in" ? "in_" : arg.name}`)
        .join(", ");
    const preProcess = getPreprocessCode(definition);
    const args = (definition.argsT ?? []).map((arg) => getCallArgument(arg)).join(", ");
    const call = `${definition.ov_cimguiname}(${args})`;
    const returnType = toCppReturnType(definition);
    const policies = getPolicies(definition);

    return (
        `bind_fn("${definition.ov_cimguiname}", [](${parameters}) -> ${returnType} {\n` +
        preProcess +
        getReturnExpression(definition, call) +
        `}${policies});\n\n`
    );
}

function getHelpersCpp(): string {
    return [
        "static auto to_c_vec2(js_val const& src) -> ImVec2_c {",
        '    return {src["x"].as<float>(), src["y"].as<float>()};',
        "}",
        "static auto to_c_vec4(js_val const& src) -> ImVec4_c {",
        '    return {src["x"].as<float>(), src["y"].as<float>(), src["z"].as<float>(), src["w"].as<float>()};',
        "}",
        "static auto from_c(ImVec2_c const& src) -> js_val {",
        "    auto out = js_val::object();",
        '    out.set("x", src.x);',
        '    out.set("y", src.y);',
        "    return out;",
        "}",
        "static auto from_c(ImVec4_c const& src) -> js_val {",
        "    auto out = js_val::object();",
        '    out.set("x", src.x);',
        '    out.set("y", src.y);',
        '    out.set("z", src.z);',
        '    out.set("w", src.w);',
        "    return out;",
        "}",
        "static auto has_property(js_val const& value, char const* name) -> bool {",
        "    return !value.isNull() && !value.isUndefined() && !value[name].isUndefined();",
        "}",
        "static auto read_vec4(js_val const& value, char const* name, ImVec4_c fallback) -> ImVec4_c {",
        "    if (!has_property(value, name)) return fallback;",
        "    return to_c_vec4(value[name]);",
        "}",
        "struct imvec4_array_param {",
        "    std::vector<ImVec4> vec = {};",
        "    ImVec4* ptr = nullptr;",
        "};",
        "static auto get_imvec4_array_param(js_val const& value, size_t expected, const char* name, bool required) -> imvec4_array_param {",
        "    imvec4_array_param out{};",
        "    if (value.isNull() || value.isUndefined()) {",
        '        if (required) throw std::invalid_argument(std::string(name) + " must be an array");',
        "        return out;",
        "    }",
        '    if (!value.isArray()) throw std::invalid_argument(std::string(name) + " must be an array");',
        '    auto const len = value["length"].as<size_t>();',
        '    if (len < expected) throw std::invalid_argument(std::string(name) + " length is smaller than its count");',
        "    out.vec.reserve(len);",
        "    for (auto const i : std::views::iota(0uz, len)) {",
        "        auto const raw = to_c_vec4(value[i]);",
        "        out.vec.emplace_back(ImVec4{raw.x, raw.y, raw.z, raw.w});",
        "    }",
        "    out.ptr = out.vec.data();",
        "    return out;",
        "}",
        "template <typename T>",
        "static auto read_field(js_val const& value, char const* name, T fallback) -> T {",
        "    return has_property(value, name) ? value[name].as<T>() : fallback;",
        "}",
        "struct implot_spec_param {",
        "    ImPlotSpec_c spec;",
        "};",
        "static auto get_implot_spec_param(js_val const& value) -> implot_spec_param {",
        "    auto const auto_col = ImVec4_c{0.0f, 0.0f, 0.0f, -1.0f};",
        "    implot_spec_param out{ImPlotSpec_c{",
        "        auto_col,",
        "        nullptr,",
        "        1.0f,",
        "        auto_col,",
        "        nullptr,",
        "        1.0f,",
        "        ImPlotMarker_None,",
        "        4.0f,",
        "        nullptr,",
        "        auto_col,",
        "        nullptr,",
        "        auto_col,",
        "        nullptr,",
        "        4.0f,",
        "        0,",
        "        IMPLOT_AUTO,",
        "        ImPlotItemFlags_None,",
        "    }};",
        "    if (value.isNull() || value.isUndefined()) return out;",
        '    out.spec.LineColor = read_vec4(value, "LineColor", out.spec.LineColor);',
        '    out.spec.LineWeight = read_field<float>(value, "LineWeight", out.spec.LineWeight);',
        '    out.spec.FillColor = read_vec4(value, "FillColor", out.spec.FillColor);',
        '    out.spec.FillAlpha = read_field<float>(value, "FillAlpha", out.spec.FillAlpha);',
        '    out.spec.Marker = read_field<ImPlotMarker>(value, "Marker", out.spec.Marker);',
        '    out.spec.MarkerSize = read_field<float>(value, "MarkerSize", out.spec.MarkerSize);',
        '    out.spec.MarkerLineColor = read_vec4(value, "MarkerLineColor", out.spec.MarkerLineColor);',
        '    out.spec.MarkerFillColor = read_vec4(value, "MarkerFillColor", out.spec.MarkerFillColor);',
        '    out.spec.Size = read_field<float>(value, "Size", out.spec.Size);',
        '    out.spec.Offset = read_field<int>(value, "Offset", out.spec.Offset);',
        '    out.spec.Stride = read_field<int>(value, "Stride", out.spec.Stride);',
        '    out.spec.Flags = read_field<ImPlotItemFlags>(value, "Flags", out.spec.Flags);',
        "    return out;",
        "}",
    ].join("\n");
}

export function generateImPlotBindings(): void {
    const definitions = readJson<CimPlotDefinitions>(
        "./third_party/cimplot/generator/output/definitions.json",
    );
    const structsAndEnums = readJson<{ enums: CimPlotEnums }>(
        "./third_party/cimplot/generator/output/structs_and_enums.json",
    );
    const typedefs = readJson<CimPlotTypedefs>(
        "./third_party/cimplot/generator/output/typedefs_dict.json",
    );
    const functions = collectFunctions(definitions);
    enumDefaultValues = new Map(
        Object.values(structsAndEnums.enums)
            .flat()
            .map((field) => [field.name, field.calc_value]),
    );

    const ts = [
        "import { Mod, ValueStruct } from './core.js';\n",
        "import { ImVec2, ImVec4 } from './imgui.js';\n",
        getTypedefCodeTs(typedefs),
        getValueStructsTs(),
        "export const ImPlot = {\n",
        "Auto: -1,\n",
        getEnumCodeTs(structsAndEnums.enums),
        functions.map(getFunctionCodeTs).join(""),
        "};\n",
    ].join("");

    const cpp = [
        "#include <util.hpp>\n",
        "\n",
        "#include <cstdint>\n",
        "#include <string>\n",
        "\n",
        "#include <implot.h>\n",
        "#include <implot_internal.h>\n",
        "#include <cimplot.h>\n",
        "\n",
        getHelpersCpp(),
        "\n",
        "static auto const IMPLOT = bindings([]() {\n",
        getValueStructsCpp(),
        "\n",
        functions.map(getFunctionCodeCpp).join(""),
        "});\n",
        "\n",
    ].join("");

    mkdirSync("./bindgen/ts", { recursive: true });
    mkdirSync("./bindgen/cpp", { recursive: true });
    writeFileSync("./bindgen/ts/implot.ts", ts);
    writeFileSync("./bindgen/cpp/implot.cpp", cpp);
}
