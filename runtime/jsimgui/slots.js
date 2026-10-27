import { Mod } from "./core.js";
let views = null;
/** Returns the slot views, refetched once wasm memory growth has detached them. */
export function slots() {
    if (views === null || views.double.buffer.byteLength === 0) {
        views = Mod.export.ImGui_Slots();
    }
    return views;
}
/**
 * Copies a JS pointer array into its slots and the snapshot after them. Returns how many elements
 * were passed: 0 for null, non-arrays, empty arrays and arrays longer than `count`, which the
 * native side receives as a null pointer. Elements the array does not have are zero.
 */
export function slotsIn(view, offset, count, v) {
    if (!Array.isArray(v) || v.length === 0 || v.length > count) {
        return 0;
    }
    const length = v.length;
    for (let i = 0; i < count; i++) {
        const value = i < length ? Number(v[i]) : 0;
        view[offset + i] = value;
        view[offset + count + i] = value;
    }
    return length;
}
/**
 * Writes back the slots the native call changed, plus those `v` did not have, so unchanged values
 * keep their full JS precision and JS-side setters only see real edits.
 */
export function slotsOut(view, offset, count, v, length) {
    if (v === null || length === 0) {
        return;
    }
    for (let i = 0; i < count; i++) {
        const value = view[offset + i];
        if (i >= length || value !== view[offset + count + i]) {
            v[i] = value;
        }
    }
}
/** slotsOut for bool slots. */
export function slotsOutBool(view, offset, count, v, length) {
    if (v === null || length === 0) {
        return;
    }
    for (let i = 0; i < count; i++) {
        const value = view[offset + i];
        if (i >= length || value !== view[offset + count + i]) {
            v[i] = value !== 0;
        }
    }
}
