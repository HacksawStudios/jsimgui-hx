# jsimgui-hx

JS-only Haxe bindings for [Dear ImGui](https://github.com/ocornut/imgui), backed by the `jsimgui` JavaScript and WebAssembly runtime.

The public Haxe API lives under `imgui.*`. The generated externs under `imguijs.*` mirror the upstream `jsimgui` runtime shape, and `imgui.*` provides the import path for Haxe projects.

## Install

Install from Haxelib:

```bash
haxelib install jsimgui-hx
```

Or install from npm/Bun:

```bash
bun add jsimgui-hx
```

## Runtime Assets

`jsimgui-hx` ships prebuilt runtime assets in `runtime/jsimgui/`. Copy the whole directory into your app's public assets, for example `/vendor/jsimgui/`, then load the served `mod.js` file before using ImGui:

```haxe
await JsRuntime.load("/vendor/jsimgui/mod.js");
```

Typical copy source paths:

- npm/Bun install: `node_modules/jsimgui-hx/runtime/jsimgui/`
- Haxelib install: `<haxelib libpath jsimgui-hx>/runtime/jsimgui/`
- local checkout: `/path/to/jsimgui-hx/runtime/jsimgui/`

Copy the directory, not only `mod.js`. The runtime tree contains the JS entrypoint, TypeScript declarations used by the extern generator, backend helpers, and the Emscripten loader under `wasm/`.

Important checked-in runtime files:

```text
runtime/jsimgui/
  mod.js / mod.d.ts
  core.js / core.d.ts
  imgui.js / imgui.d.ts
  slots.js / slots.d.ts
  impl/
    web.js / web.d.ts
    webgl.js / webgl.d.ts
    wgpu.js / wgpu.d.ts
  wasm/
    loader.em.js
```

`loader.em.js` is the current WebAssembly loader artifact produced by the upstream build. Today it is a single Emscripten JS file with the WASM bytes embedded, but consumers should still serve the complete `runtime/jsimgui/` directory so future builds can add separate `.wasm` or extra loader files without app-side changes.

## Usage

```haxe
import imgui.Helpers.*;
import imgui.ImGui;
import imgui.ImGuiImplWeb;
import imgui.JsRuntime;

await JsRuntime.load("/vendor/jsimgui/mod.js");
await ImGuiImplWeb.init({ canvas: canvasElement });

var someFloatValue = boxFloat(0.0);

ImGui.begin("Hello");
ImGui.sliderFloat("Some slider", someFloatValue, 0.0, 1.0);

if (someFloatValue[0] == 1.0) {
    ImGui.text("Float value is at MAX (1.0)");
}

ImGui.end();
```

### Pointer Arguments and `Ref`

Pointer parameters (`float* v`, `float v[3]`, `bool* p_open`, `char* buf`) are typed `imgui.Ref<T>`, or `Ref2<T>`/`Ref3<T>`/`Ref4<T>` for fixed-size arrays. The count in `RefN` is documentation only. A `Ref` is either a plain array, as above, or accessors from `Ref.of`, which read and write your variables directly:

```haxe
import imgui.Ref;

ImGui.dragFloat("Alpha", Ref.of(alpha));
ImGui.dragFloat3("Position", Ref.of(pos.x, pos.y, pos.z));
ImGui.inputText("Name", Ref.of(name), 64);
```

Values are only written back when the widget changes them, so setters only see real edits. A `Ref` reads its first element with `ref.value`, any element with `ref[i]`, and its size with `ref.length`.


## Building From Source

Prerequisites:

- Bun for package scripts and the extern generator.
- Docker for the upstream `jsimgui` Emscripten build environment.
- Git submodule support for `lib/jsimgui`.
- Haxe if you want to compile the demo or test a Haxelib install.

Install dependencies:

```bash
bun install
```

Build the runtime and regenerate Haxe externs:

```bash
bun run build
```

That command runs `tools/build-jsimgui-and-bindings.sh`, which:

1. Updates `lib/jsimgui` with `git submodule update --init --recursive`.
2. Builds the upstream Docker image from `lib/jsimgui/.github/Dockerfile`.
3. Runs the upstream runtime build inside Docker with `npm install && node build.ts`.
4. Replaces `runtime/jsimgui/` with `lib/jsimgui/build/`.
5. Runs `tools/generate-jsimgui-externs.mjs` to refresh generated Haxe externs from the runtime `.d.ts` files.

If you already have a fresh runtime in `runtime/jsimgui/` and only need to regenerate externs:

```bash
bun tools/generate-jsimgui-externs.mjs
```

Do not hand-edit generated runtime files or generated externs as the long-term source of truth. Make runtime changes in the `lib/jsimgui` submodule, rebuild, then commit the updated submodule pointer plus generated `runtime/`, `src/imguijs/`, and public alias outputs.

## jsimgui Submodule

The WebAssembly runtime source comes from the `lib/jsimgui` Git submodule:

```text
https://github.com/assarbergh-hacksaw/jsimgui.git
```

The assar-hacksaw maintained fork is the contributor source for the JS runtime, backend glue, TypeScript declarations, and Emscripten/WASM build. This package wraps those outputs for Haxe; it does not reimplement Dear ImGui or the C++/WASM layer in Haxe.

When updating the submodule:

1. Move `lib/jsimgui` to the intended upstream commit.
2. Run `bun run build`.
3. Review changes in `runtime/jsimgui/`, generated `src/imguijs/`, and generated public aliases together.
4. Compile the demo before publishing or consuming the update downstream.

## Demo

Compile the browser demo:

```bash
haxe test/js/build.hxml
```

Serve the repository root:

```bash
python3 -m http.server 8126
```

Open:

```text
http://127.0.0.1:8126/test/js/index.html
```

The demo loads `/runtime/jsimgui/mod.js`, initializes `imgui.ImGuiImplWeb`, and renders a small Dear ImGui window plus the upstream demo window.

## Packaging

Inspect the npm package contents:

```bash
bun run pack:dry
```

Build the curated Haxelib archive:

```bash
bun run pack:haxelib
```

The Haxelib package includes `src/`, `runtime/`, `haxelib.json`, `README.md`, and `LICENSE`.

For more contributor and release notes, see [CONTRIBUTING.md](CONTRIBUTING.md).
