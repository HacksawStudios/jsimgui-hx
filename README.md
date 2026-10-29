# jsimgui-hx

JS-only Haxe bindings for [Dear ImGui](https://github.com/ocornut/imgui), backed by a modified `jsimgui` JavaScript and WebAssembly runtime.

The public Haxe API lives under `imgui.*`. The generated externs under `imguijs.*` mirror the upstream `jsimgui` runtime shape, and `imgui.*` provides the import path for Haxe projects.

## Install

```bash
bun add jsimgui-hx
```

Its `postinstall` script links the package into the project's `.haxelib/jsimgui-hx/<version>/`, so `-lib jsimgui-hx` works. Bun only runs it when `jsimgui-hx` is in `trustedDependencies`.

## Runtime Assets

`jsimgui-hx` ships prebuilt runtime assets in `runtime/jsimgui/`. Copy the whole directory into your app's public assets, for example `/vendor/jsimgui/`, then load the served `mod.js` file before using ImGui:

```haxe
JsRuntime.load("/vendor/jsimgui/mod.js").then(_ -> ImGuiImplWeb.init({canvas: canvas}));
```

Typical copy source paths:

- npm/Bun install: `node_modules/jsimgui-hx/runtime/jsimgui/`
- local checkout: `/path/to/jsimgui-hx/runtime/jsimgui/`

Copy the directory, not only `mod.js`. The runtime tree contains the JS entrypoint, TypeScript declarations used by the extern generator, backend helpers, and the Emscripten loader under `wasm/`.

`THIRD_PARTY_NOTICES.txt` holds the license notices for the code compiled into the runtime (jsimgui, Dear ImGui, ImPlot, FreeType, Emscripten, and others). Ship it wherever the runtime goes.

Important checked-in runtime files:

```text
runtime/jsimgui/
  THIRD_PARTY_NOTICES.txt
  mod.js / mod.d.ts
  core.js / core.d.ts
  imgui.js / imgui.d.ts
  implot.js / implot.d.ts
  slots.js / slots.d.ts
  enums.json
  impl/
    web.js / web.d.ts
    webgl.js / webgl.d.ts
    wgpu.js / wgpu.d.ts
  wasm/
    loader.em.js
    loader-freetype-extensions.em.js
```

`ImGuiImplWeb.init` picks the loader from its options: `loader.em.js` by default, `loader-freetype-extensions.em.js` with `fontLoader: "freetype", extensions: true`. Other combinations fail, because their loaders aren't built. Each loader is a single Emscripten JS file with the WASM embedded, but serve the whole `runtime/jsimgui/` directory so future builds can add files without app-side changes.

## Usage

```haxe
import imgui.ImGui;
import imgui.ImGuiImplWeb;
import imgui.JsRuntime;
import imgui.Ref;
import js.Browser;
import js.html.CanvasElement;

class Main {
    static var value = 0.0;

    static function main() {
        final canvas:CanvasElement = cast Browser.document.getElementById("canvas");
        JsRuntime.load("/vendor/jsimgui/mod.js")
            .then(_ -> ImGuiImplWeb.init({canvas: canvas}))
            .then(_ -> Browser.window.requestAnimationFrame(render));
    }

    static function render(_) {
        ImGuiImplWeb.beginRender();
        if (ImGui.begin("Hello")) {
            ImGui.sliderFloat("Value", Ref.of(value), 0.0, 1.0);
            if (value == 1.0) {
                ImGui.text("At max");
            }
        }
        ImGui.end();
        ImGuiImplWeb.endRender();
        Browser.window.requestAnimationFrame(render);
    }
}
```

ImPlot and the other extensions need `ImGuiImplWeb.init({canvas: canvas, fontLoader: "freetype", extensions: true})`; the runtime only ships that loader and the default one.

### Pointer Arguments and `Ref`

Pointer parameters (`float* v`, `float v[3]`, `bool* p_open`, `char* buf`) are typed `imgui.Ref<T>`, or `Ref2<T>`/`Ref3<T>`/`Ref4<T>` for fixed-size arrays. The count in `RefN` is documentation only. A `Ref` is either accessors from `Ref.of`, as above, which read and write your variables directly, or a plain array such as `[0.0]`:

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
- Git submodule support for `lib/jsimgui/third_party`.
- Haxe to compile the demo.

Install dependencies:

```bash
bun install
```

Build the runtime and regenerate Haxe externs:

```bash
bun run build
```

That command runs `tools/build-jsimgui-and-bindings.sh`, which:

1. Updates `lib/jsimgui/third_party` with `git submodule update --init --recursive`.
2. Builds the upstream Docker image from `lib/jsimgui/.github/Dockerfile`.
3. Runs the upstream runtime build inside Docker with `npm install && node build.ts`.
4. Replaces `runtime/jsimgui/` with `lib/jsimgui/build/`.
5. Runs `tools/generate-third-party-notices.mjs` to write `runtime/jsimgui/THIRD_PARTY_NOTICES.txt` from the license files under `lib/jsimgui/` and the texts in `tools/licenses/`.
6. Runs `tools/generate-jsimgui-externs.mjs` to refresh generated Haxe externs from the runtime `.d.ts` files.

If you already have a fresh runtime in `runtime/jsimgui/` and only need to regenerate externs:

```bash
bun tools/generate-jsimgui-externs.mjs
```

Do not hand-edit generated runtime files or generated externs as the long-term source of truth.

## Bundled jsimgui

`lib/jsimgui/` holds the runtime source: JS runtime, backend glue, TypeScript declarations and the Emscripten/WASM build. It began as [mori2003/jsimgui](https://github.com/mori2003/jsimgui) (MIT, see `lib/jsimgui/LICENSE`) and has diverged from it; edit and commit it like any other code here. Its `third_party/` dependencies stay submodules, registered in the root `.gitmodules`. This package wraps the runtime for Haxe; it does not reimplement Dear ImGui or the C++/WASM layer.

After changing `lib/jsimgui`:

1. If `lib/jsimgui/.github/Dockerfile` now uses a different emsdk, refresh `tools/licenses/` and the version pins in `tools/generate-third-party-notices.mjs` (its doc comment lists the sources); the notices generator refuses to run until they match.
2. Run `bun run build`.
3. Review `runtime/jsimgui/` (including `THIRD_PARTY_NOTICES.txt`), `src/imguijs/` and the public aliases together.
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

For more contributor and release notes, see [CONTRIBUTING.md](CONTRIBUTING.md).
