import { Mod } from "./core.js";
let views = null;
/** Returns the slot views, refetched once wasm memory growth has detached them. */
export function slots() {
    if (views === null || views.double.buffer.byteLength === 0) {
        views = Mod.export.ImGui_Slots();
    }
    return views;
}
function isAccessorRef(v) {
    return typeof v === "object" && v !== null && Array.isArray(v.getters);
}
function fill(view, offset, count, i, element) {
    const value = Number(element);
    view[offset + i] = value;
    view[offset + count + i] = value;
}
/**
 * Copies a pointer argument (array or AccessorRef) into its slots and the snapshot after them.
 * Returns how many elements were passed: 0 for null, other values, empty ones and ones longer
 * than `count`, which the native side receives as a null pointer. Missing elements are zero.
 */
export function slotsIn(view, offset, count, v) {
    if (Array.isArray(v)) {
        const length = v.length;
        if (length === 0 || length > count) {
            return 0;
        }
        for (let i = 0; i < count; i++) {
            fill(view, offset, count, i, i < length ? v[i] : 0);
        }
        return length;
    }
    if (isAccessorRef(v)) {
        const getters = v.getters;
        const length = getters.length;
        if (length === 0 || length > count) {
            return 0;
        }
        for (let i = 0; i < count; i++) {
            fill(view, offset, count, i, i < length ? getters[i]() : 0);
        }
        return length;
    }
    return 0;
}
/**
 * Writes back the slots the native call changed, so unchanged values keep their full JS precision
 * and setters only see real edits. Arrays also get the elements they did not have; an AccessorRef
 * has no setter for those.
 */
export function slotsOut(view, offset, count, v, length) {
    if (v === null || length === 0) {
        return;
    }
    for (let i = 0; i < count; i++) {
        const value = view[offset + i];
        if (i < length && value === view[offset + count + i]) {
            continue;
        }
        if (Array.isArray(v)) {
            v[i] = value;
        }
        else if (i < length) {
            v.setters[i](value);
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
        if (i < length && value === view[offset + count + i]) {
            continue;
        }
        if (Array.isArray(v)) {
            v[i] = value !== 0;
        }
        else if (i < length) {
            v.setters[i](value !== 0);
        }
    }
}
