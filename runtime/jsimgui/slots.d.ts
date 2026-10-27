/** Typed array views over the native storage that pointer arguments of free functions travel through. */
type SlotViews = {
    bool: Uint8Array;
    int: Int32Array;
    uint: Uint32Array;
    size: Uint32Array;
    float: Float32Array;
    double: Float64Array;
};
type SlotView = SlotViews[keyof SlotViews];
/** Returns the slot views, refetched once wasm memory growth has detached them. */
export declare function slots(): SlotViews;
/**
 * Copies a JS pointer array into its slots and the snapshot after them. Returns how many elements
 * were passed: 0 for null, non-arrays, empty arrays and arrays longer than `count`, which the
 * native side receives as a null pointer. Elements the array does not have are zero.
 */
export declare function slotsIn(view: SlotView, offset: number, count: number, v: ArrayLike<unknown> | null): number;
/**
 * Writes back the slots the native call changed, plus those `v` did not have, so unchanged values
 * keep their full JS precision and JS-side setters only see real edits.
 */
export declare function slotsOut(view: SlotView, offset: number, count: number, v: number[] | null, length: number): void;
/** slotsOut for bool slots. */
export declare function slotsOutBool(view: Uint8Array, offset: number, count: number, v: boolean[] | null, length: number): void;
export {};
