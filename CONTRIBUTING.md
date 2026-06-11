# Contributing

## Repo Setup

Install dependencies:

```bash
bun install
```

That installs the TypeScript compiler used by the extern generator. The `jsimgui` runtime source is built from the `lib/jsimgui` submodule, which points at the Assar/Hacksaw-maintained `assarbergh-hacksaw/jsimgui` fork.

## Build Runtime and Externs

Build the upstream runtime and regenerate Haxe externs:

```bash
bun run build
```

That command initializes the submodule, builds the upstream Emscripten/WASM runtime in Docker, copies `lib/jsimgui/build/` to `runtime/jsimgui/`, and regenerates `src/imguijs/` from the runtime declaration files.

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

Publish a new version (npm publishing is handled automagically through github action under workflow npm-publish.yml):

```bash
npm version patch && git push --follow-tags
```

## Haxelib Release

Build the curated Haxelib zip:

```bash
bun run pack:haxelib
```

The pack step syncs `haxelib.json` metadata from `package.json` before creating the zip.

That writes `build/haxelib/jsimgui-hx-<version>.zip` and includes only:

- `src/`
- `runtime/`
- `haxelib.json`
- `README.md`
- `LICENSE`

Test the zip locally:

```bash
haxelib install build/haxelib/jsimgui-hx-<version>.zip
```

Submit it:

```bash
haxelib submit build/haxelib/jsimgui-hx-<version>.zip
```
