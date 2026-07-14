export declare const Mod: {
    export: any;
    init(enableFreeType: boolean, extensions: boolean, loaderPath?: string): Promise<void>;
};
/**
 * Base class for value structs (passed by value, no native pointer).
 */
export declare class ValueStruct {
}
/**
 * Base class for reference structs (carry native pointer/reference).
 * These structs manage native memory and require explicit cleanup.
 */
export declare class ReferenceStruct {
    /**
     * The native pointer to the struct.
     */
    ptr: any;
    constructor();
    /**
     * Construct a new JavaScript class instance and allocate native memory.
     */
    static New(): any;
    /**
     * Create a JavaScript class instance from a native pointer.
     */
    static From(ptr: any): any;
    /**
     * Free the struct's native allocated memory.
     */
    Drop(): void;
}
