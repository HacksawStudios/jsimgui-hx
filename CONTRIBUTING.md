# Contributing

## Repo Setup

Install dependencies:

```bash
bun install
```

That installs the TypeScript compiler used by the extern generator. The `jsimgui` runtime source is bundled in `lib/jsimgui/`; see [Bundled jsimgui](README.md#bundled-jsimgui).

## Build Runtime and Externs

Build the upstream runtime and regenerate Haxe externs:

```bash
bun run build
```

That command initializes the `lib/jsimgui/third_party` submodules, builds the upstream Emscripten/WASM runtime in Docker, copies `lib/jsimgui/build/` to `runtime/jsimgui/`, writes `runtime/jsimgui/THIRD_PARTY_NOTICES.txt`, and regenerates `src/imguijs/` from the runtime declaration files.

If `runtime/jsimgui/` is already fresh and you only need to regenerate externs:

```bash
bun tools/generate-jsimgui-externs.mjs
```

## Demo

Compile the browser demo:

```bash
haxe test/js/build.hxml
```

Then serve the repository root and open `test/js/index.html`. See [test/js/README.md](test/js/README.md) for details.

## Release

Inspect the package contents before publishing:

```bash
bun run pack:dry
```

Merging to `master` publishes. `.github/workflows/npm-publish.yml` runs `npm version patch` (which also syncs `haxelib.json`), pushes the commit and tag, and runs `npm publish`. Don't bump the version yourself.
