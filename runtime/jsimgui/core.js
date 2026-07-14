export const Mod = {
    // biome-ignore lint/suspicious/noExplicitAny: _
    export: null,
    async init(enableFreeType, extensions, loaderPath) {
        // biome-ignore lint/suspicious/noExplicitAny: _
        let MainExport;
        if (loaderPath) {
            MainExport = await import(loaderPath);
        }
        else if (enableFreeType) {
            MainExport = extensions
                ? // @ts-expect-error
                    await import("./wasm/loader-freetype-extensions.em.js")
                : // @ts-expect-error
                    await import("./wasm/loader-freetype.em.js");
        }
        else {
            MainExport = extensions
                ? // @ts-expect-error
                    await import("./wasm/loader-extensions.em.js")
                : // @ts-expect-error
                    await import("./wasm/loader.em.js");
        }
        Mod.export = await MainExport.default();
    },
};
/**
 * Base class for value structs (passed by value, no native pointer).
 */
export class ValueStruct {
}
/**
 * Base class for reference structs (carry native pointer/reference).
 * These structs manage native memory and require explicit cleanup.
 */
export class ReferenceStruct {
    /**
     * The native pointer to the struct.
     */
    // biome-ignore lint/suspicious/noExplicitAny: _
    ptr = null;
    constructor() {
        this.ptr = new Mod.export[this.constructor.name]();
    }
    /**
     * Construct a new JavaScript class instance and allocate native memory.
     */
    // biome-ignore lint/suspicious/noExplicitAny: _
    static New() {
        // biome-ignore lint/complexity/noThisInStatic: ...
        return new this();
    }
    /**
     * Create a JavaScript class instance from a native pointer.
     */
    // biome-ignore lint/suspicious/noExplicitAny: _
    static From(ptr) {
        // biome-ignore lint/complexity/noThisInStatic: ...
        const obj = Object.create(this.prototype);
        obj.ptr = ptr;
        return obj;
    }
    /**
     * Free the struct's native allocated memory.
     */
    Drop() {
        this.ptr?.delete();
    }
}
