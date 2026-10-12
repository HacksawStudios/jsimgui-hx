import fs from 'node:fs/promises'
import path from 'node:path'
import process from 'node:process'

const repoRoot = path.resolve(import.meta.dirname, '..')
const outputPath = path.resolve(repoRoot, 'runtime', 'jsimgui', 'enums.json')
const dearBindingsPath = path.resolve(repoRoot, 'lib', 'jsimgui', 'third_party', 'dear_bindings', 'dcimgui.json')
const cimplotPath = path.resolve(repoRoot, 'lib', 'jsimgui', 'third_party', 'cimplot', 'generator', 'output', 'structs_and_enums.json')

/**
 * jsimgui resolves every enum member down to a plain number before it reaches
 * runtime/jsimgui, so `1 << 2` and `FlagA | FlagB` are lost. Both upstream
 * metadata dumps still carry the original C expression; this trims them down to
 * the few fields the extern generator needs (dcimgui.json alone is 2.8MB, which
 * has no business being shipped in the package).
 */

async function readJson(filePath) {
	try {
		return JSON.parse(await fs.readFile(filePath, 'utf8'))
	} catch {
		return null
	}
}

function addElement(elements, name, value, expression) {
	if (name == null || !Number.isFinite(value)) {
		return
	}
	const trimmed = expression?.trim()
	elements[name] = trimmed == null || trimmed === String(value) ? { value } : { value, expression: trimmed }
}

const elements = {}

const dearBindings = await readJson(dearBindingsPath)
for (const enumeration of dearBindings?.enums ?? []) {
	for (const element of enumeration.elements ?? []) {
		addElement(elements, element.name, element.value, element.value_expression)
	}
}

const cimplot = await readJson(cimplotPath)
for (const enumeration of Object.values(cimplot?.enums ?? {})) {
	for (const element of enumeration) {
		addElement(elements, element.name, element.calc_value, element.value)
	}
}

if (Object.keys(elements).length === 0) {
	console.error('[jsimgui] Found no enum metadata in lib/jsimgui/third_party; run "bun build-jsimgui-and-bindings.sh" to populate the submodules.')
	process.exit(1)
}

await fs.writeFile(outputPath, `${JSON.stringify(elements, null, '\t')}\n`)

const withExpression = Object.values(elements).filter(element => element.expression != null).length
console.log(`[jsimgui] Wrote ${path.relative(repoRoot, outputPath)}: ${Object.keys(elements).length} members, ${withExpression} with a value expression.`)
