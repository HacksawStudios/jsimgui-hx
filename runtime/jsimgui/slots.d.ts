import { type AccessorRef } from "./core.js";
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
 * Copies a pointer argument (array or AccessorRef) into its slots and the snapshot after them.
 * Returns how many elements were passed: 0 for null, other values, empty ones and ones longer
 * than `count`, which the native side receives as a null pointer. Missing elements are zero.
 */
export declare function slotsIn<T>(view: SlotView, offset: number, count: number, v: ArrayLike<T> | AccessorRef<T> | null): number;
/**
 * Writes back the slots the native call changed, so unchanged values keep their full JS precision
 * and setters only see real edits. Arrays also get the elements they did not have; an AccessorRef
 * has no setter for those.
 */
export declare function slotsOut(view: SlotView, offset: number, count: number, v: number[] | AccessorRef<number> | null, length: number): void;
/** slotsOut for bool slots. */
export declare function slotsOutBool(view: Uint8Array, offset: number, count: number, v: boolean[] | AccessorRef<boolean> | null, length: number): void;
export {};
