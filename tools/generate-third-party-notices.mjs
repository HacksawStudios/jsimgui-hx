import { execFileSync } from 'node:child_process'
import fs from 'node:fs/promises'
import path from 'node:path'
import process from 'node:process'

const repoRoot = path.resolve(import.meta.dirname, '..')
const jsimguiRoot = path.resolve(repoRoot, 'lib', 'jsimgui')
const thirdPartyRoot = path.resolve(jsimguiRoot, 'third_party')
const vendoredRoot = path.resolve(import.meta.dirname, 'licenses')
const dockerfilePath = path.resolve(jsimguiRoot, '.github', 'Dockerfile')
const outputPath = path.resolve(repoRoot, 'runtime', 'jsimgui', 'THIRD_PARTY_NOTICES.txt')

/**
 * Everything compiled into runtime/jsimgui must ship with its license notice. The submodules
 * carry their own license files; tools/licenses/ holds the texts for what the emsdk image
 * compiles in: Emscripten's LICENSE and musl's COPYRIGHT from emscripten-core/emscripten at
 * the emsdk tag below, and the FreeType and zlib licenses from the sources its
 * tools/ports/freetype.py and tools/ports/zlib.py fetch. When the Dockerfile moves to another
 * emsdk, refresh those texts and these pins; until then this script refuses to run.
 */
const emsdkVersion = '4.0.22'
const freetypeVersion = '2.13.3'
const freetypeYear = 2024 // FreeType copyright year of that release, for the FTL credit line
const zlibVersion = '1.3.1'

function fail(message) {
	console.error(`[jsimgui] ${message}`)
	process.exit(1)
}

function capture(text, pattern, source) {
	const found = text.match(pattern)
	if (found == null) {
		fail(`Found no ${pattern} in ${source}`)
	}
	return found[1]
}

async function readText(filePath) {
	try {
		return (await fs.readFile(filePath, 'utf8')).replace(/\r\n/g, '\n').trimEnd()
	} catch (error) {
		const hint = filePath.startsWith(jsimguiRoot) ? '; run "bun run build" to populate the submodules' : ''
		fail(`Cannot read ${path.relative(repoRoot, filePath)} (${error.code})${hint}.`)
	}
}

const dockerEmsdk = capture(await readText(dockerfilePath), /emscripten\/emsdk:([\d.]+)/, 'lib/jsimgui/.github/Dockerfile')
if (dockerEmsdk !== emsdkVersion) {
	fail(`lib/jsimgui/.github/Dockerfile uses emsdk ${dockerEmsdk}, but tools/licenses/ matches emsdk ${emsdkVersion}. Refresh the texts and pins in tools/generate-third-party-notices.mjs.`)
}

const imguiHeader = await readText(path.resolve(thirdPartyRoot, 'imgui', 'imgui.h'))
const imguiVersion = capture(imguiHeader, /#define IMGUI_VERSION\s+"([^"]+)"/, 'imgui.h')
const imguiBranch = imguiHeader.includes('#define IMGUI_HAS_DOCK') ? ' docking' : ''
const implotVersion = capture(await readText(path.resolve(thirdPartyRoot, 'cimplot', 'implot', 'implot.h')), /#define IMPLOT_VERSION\s+"([^"]+)"/, 'implot.h')
const dearBindingsVersion = capture(await readText(path.resolve(thirdPartyRoot, 'dear_bindings', 'dear_bindings.py')), /^version = "([^"]+)"/m, 'dear_bindings.py')
const jsimguiVersion = JSON.parse(await readText(path.resolve(jsimguiRoot, 'package.json'))).version
const cimplotCommit = execFileSync('git', ['-C', jsimguiRoot, 'rev-parse', '--short', 'HEAD:./third_party/cimplot'], { encoding: 'utf8' }).trim()

const allLoaders = 'wasm/*.em.js'
const extensionLoaders = 'wasm/*-extensions.em.js'
const freetypeLoaders = 'wasm/loader-freetype*.em.js'
const components = [
	{ name: 'jsimgui', version: `${jsimguiVersion} (modified)`, license: 'MIT', usedIn: `*.js, ${allLoaders}`, url: 'https://github.com/mori2003/jsimgui', textPath: path.resolve(jsimguiRoot, 'LICENSE') },
	{ name: 'Dear ImGui', version: `${imguiVersion}${imguiBranch}`, license: 'MIT', usedIn: allLoaders, url: 'https://github.com/ocornut/imgui', textPath: path.resolve(thirdPartyRoot, 'imgui', 'LICENSE.txt') },
	{ name: 'Dear Bindings', version: dearBindingsVersion, license: 'MIT', usedIn: allLoaders, url: 'https://github.com/dearimgui/dear_bindings', textPath: path.resolve(thirdPartyRoot, 'dear_bindings', 'LICENSE.txt') },
	{ name: 'ImPlot', version: implotVersion, license: 'MIT', usedIn: extensionLoaders, url: 'https://github.com/epezent/implot', textPath: path.resolve(thirdPartyRoot, 'cimplot', 'implot', 'LICENSE') },
	{ name: 'cimplot', version: `commit ${cimplotCommit}`, license: 'MIT', usedIn: extensionLoaders, url: 'https://github.com/cimgui/cimplot', textPath: path.resolve(thirdPartyRoot, 'cimplot', 'LICENSE') },
	{ name: 'FreeType', version: freetypeVersion, license: 'FreeType License (FTL)', usedIn: freetypeLoaders, url: 'https://freetype.org', textPath: path.resolve(vendoredRoot, 'freetype.txt') },
	{ name: 'FreeType BDF driver', version: freetypeVersion, license: 'MIT (X11-style)', usedIn: freetypeLoaders, url: 'https://freetype.org', textPath: path.resolve(vendoredRoot, 'freetype-bdf.txt') },
	{ name: 'FreeType PCF driver', version: freetypeVersion, license: 'MIT (X11-style)', usedIn: freetypeLoaders, url: 'https://freetype.org', textPath: path.resolve(vendoredRoot, 'freetype-pcf.txt') },
	{ name: 'zlib', version: zlibVersion, license: 'zlib', usedIn: freetypeLoaders, url: 'https://zlib.net', textPath: path.resolve(vendoredRoot, 'zlib.txt') },
	{ name: 'Emscripten', version: emsdkVersion, license: 'MIT (or UIUC/NCSA)', usedIn: allLoaders, url: 'https://github.com/emscripten-core/emscripten', textPath: path.resolve(vendoredRoot, 'emscripten.txt') },
	{ name: 'musl libc', version: `via Emscripten ${emsdkVersion}`, license: 'MIT', usedIn: allLoaders, url: 'https://musl.libc.org', textPath: path.resolve(vendoredRoot, 'musl.txt') },
]

const rows = [['Component', 'Version', 'License', 'Used in'], ...components.map(c => [c.name, c.version, c.license, c.usedIn])]
const widths = rows[0].map((_, column) => Math.max(...rows.map(row => row[column].length)))
const formatRow = row => `  ${row.map((cell, column) => cell.padEnd(widths[column])).join('  ').trimEnd()}`
const table = [formatRow(rows[0]), formatRow(widths.map(width => '-'.repeat(width))), ...rows.slice(1).map(formatRow)].join('\n')

const header = `THIRD-PARTY SOFTWARE NOTICES
jsimgui-hx runtime (runtime/jsimgui/)

The JavaScript and WebAssembly files in this directory are built from the
projects listed below; "Used in" paths are relative to this directory. Their
copyright notices and license texts follow in full.

FreeType acknowledgement (required by the FreeType License):

    Portions of this software are copyright © ${freetypeYear} The FreeType
    Project (www.freetype.org).  All rights reserved.

    This software is based in part on the work of the FreeType Team.


Summary
-------

${table}

FreeType is offered under the FreeType License or GPLv2; it is used here under
the FreeType License (FTL).

Also compiled in, but their license requires no notice for compiled
(object-form) use: LLVM libc++, libc++abi and compiler-rt, under
Apache-2.0 WITH LLVM-exception.`

const sections = await Promise.all(components.map(async c => `${'='.repeat(80)}
${c.name} ${c.version}
${c.url}
Used in: ${c.usedIn}
License: ${c.license}
${'-'.repeat(80)}

${await readText(c.textPath)}`))

await fs.writeFile(outputPath, `${[header, ...sections].join('\n\n\n')}\n`)
console.log(`[jsimgui] Wrote ${path.relative(repoRoot, outputPath)}: ${components.length} components.`)
