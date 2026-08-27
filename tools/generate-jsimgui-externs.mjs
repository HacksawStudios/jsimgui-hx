import fs from 'node:fs/promises'
import { createRequire } from 'node:module'
import path from 'node:path'
import process from 'node:process'
import { pathToFileURL } from 'node:url'

const repoRoot = path.resolve(import.meta.dirname, '..')
const runtimeRoot = 'globalThis.__imguiHxJsImGui'
const require = createRequire(import.meta.url)
const jsimguiBuildRoot = path.resolve(repoRoot, 'runtime', 'jsimgui')
const requiredSplitDtsPaths = [
	path.resolve(jsimguiBuildRoot, 'core.d.ts'),
	path.resolve(jsimguiBuildRoot, 'imgui.d.ts'),
	path.resolve(jsimguiBuildRoot, 'impl', 'web.d.ts'),
]
const optionalSplitDtsPaths = [
	path.resolve(jsimguiBuildRoot, 'implot.d.ts'),
]
const bundledDtsPaths = [path.resolve(jsimguiBuildRoot, 'mod.d.ts')]
const tsPath = require.resolve('typescript/lib/typescript.js')
const imguiOutputPath = path.resolve(repoRoot, 'src', 'imguijs', 'ImGui.hx')
const implotOutputPath = path.resolve(repoRoot, 'src', 'imguijs', 'ImPlot.hx')
const imguiImplOutputPath = path.resolve(repoRoot, 'src', 'imguijs', 'ImGuiImplWeb.hx')
const moduleOutputPath = path.resolve(repoRoot, 'src', 'imguijs', 'Module.hx')
const rootAliasPath = path.resolve(repoRoot, 'src', 'imgui', 'ImGui.hx')
const rootImPlotAliasPath = path.resolve(repoRoot, 'src', 'imgui', 'ImPlot.hx')

const tsModule = await import(pathToFileURL(tsPath).href)
const ts = tsModule.default ?? tsModule

const reservedNames = new Set([
	'abstract',
	'array',
	'auto',
	'break',
	'case',
	'cast',
	'catch',
	'class',
	'continue',
	'default',
	'do',
	'dynamic',
	'else',
	'enum',
	'extends',
	'extern',
	'false',
	'final',
	'for',
	'from',
	'function',
	'if',
	'implements',
	'import',
	'in',
	'inline',
	'interface',
	'macro',
	'new',
	'null',
	'operator',
	'overload',
	'override',
	'package',
	'private',
	'public',
	'return',
	'static',
	'super',
	'switch',
	'this',
	'throw',
	'to',
	'true',
	'try',
	'typedef',
	'untyped',
	'using',
	'var',
	'while',
])

const referenceStructConstructableNames = new Set([
	'ImColor',
	'ImDrawListSplitter',
	'ImFontConfig',
	'ImGuiListClipper',
	'ImGuiWindowClass',
])

const skipStructNames = [
	'ImVec2',
	'ImVec4',
]

const domTypeMap = new Map([
	['HTMLCanvasElement', 'js.html.CanvasElement'],
	['HTMLImageElement', 'js.html.ImageElement'],
	['Uint8Array', 'js.lib.Uint8Array'],
])

const integerFunctionPattern = /^(?:CheckboxFlagsIntPtr|RadioButtonIntPtr|PushIDInt|GetIDInt|DragInt(?:[2-4]|Range2)?|SliderInt[2-4]?|VSliderInt|InputInt[2-4]?|PushStyleVar_Int)$/

function fail(message) {
	console.error(`[jsimgui] ${message}`)
	process.exit(1)
}

async function readSourceFiles() {
	for (const filePaths of [requiredSplitDtsPaths, bundledDtsPaths]) {
		const files = []
		let missingPath = null

		for (const filePath of filePaths) {
			try {
				files.push({
					filePath,
					sourceText: await fs.readFile(filePath, 'utf8'),
				})
			} catch {
				missingPath = filePath
				break
			}
		}

		if (missingPath == null) {
			for (const filePath of optionalSplitDtsPaths) {
				try {
					files.push({
						filePath,
						sourceText: await fs.readFile(filePath, 'utf8'),
					})
				} catch {
					// Extension declarations are optional for non-extension runtime builds.
				}
			}
			return files
		}
	}

	fail('Missing jsimgui declaration files in runtime/jsimgui! run "bun build-jsimgui-and-bindings.sh" to generate them.')
}

async function readValueSourceFiles(dtsFilePaths) {
	const files = []
	for (const dtsFilePath of dtsFilePaths) {
		const jsFilePath = dtsFilePath.replace(/\.d\.ts$/, '.js')
		try {
			files.push({
				filePath: jsFilePath,
				sourceText: await fs.readFile(jsFilePath, 'utf8'),
			})
		} catch {
			fail(`Missing sibling runtime module ${path.relative(repoRoot, jsFilePath)} for ${path.relative(repoRoot, dtsFilePath)}; run "bun build-jsimgui-and-bindings.sh" to regenerate runtime/jsimgui.`)
		}
	}
	return files
}

function isExported(node) {
	return (ts.getCombinedModifierFlags(node) & ts.ModifierFlags.Export) !== 0
}

function createIndent(level) {
	return '\t'.repeat(level)
}

function maybeQuoteMetadata(name) {
	return JSON.stringify(name)
}

function shouldEmitNative(haxeName, nativeName) {
	return haxeName !== nativeName
}

function lowerCamel(name) {
	if (!name || name.startsWith('_')) {
		return name
	}
	const prefixMatch = name.match(/^[A-Z]+(?=[A-Z][a-z]|[a-z]|$)/)
	if (!prefixMatch) {
		return name
	}
	const prefix = prefixMatch[0]
	const lowered = prefix.length === name.length ? name.toLowerCase() : prefix.toLowerCase() + name.slice(prefix.length)
	return reservedNames.has(lowered) ? name : lowered
}

function getNodeText(node) {
	return node.getText(node.getSourceFile())
}

function collectDeclarations(sourceFiles) {
	const typeAliases = new Map()
	const interfaces = new Set()
	const classes = new Map()
	const constObjects = new Map()

	for (const sourceFile of sourceFiles) {
		for (const statement of sourceFile.statements) {
			if (!isExported(statement)) {
				continue
			}
			if (ts.isTypeAliasDeclaration(statement)) {
				typeAliases.set(statement.name.text, statement)
				continue
			}
			if (ts.isInterfaceDeclaration(statement)) {
				interfaces.add(statement.name.text)
				continue
			}
			if (ts.isClassDeclaration(statement) && statement.name) {
				classes.set(statement.name.text, statement)
				continue
			}
			if (ts.isVariableStatement(statement)) {
				for (const declaration of statement.declarationList.declarations) {
					if (!ts.isIdentifier(declaration.name) || declaration.type == null) {
						continue
					}
					constObjects.set(declaration.name.text, declaration)
				}
			}
		}
	}

	return {
		typeAliases,
		interfaces,
		classes,
		constObjects,
	}
}

function resolveGroupTypeName(groupName, aliasNames, rootName) {
	if (aliasNames.has(groupName)) {
		return groupName
	}
	if (rootName === 'ImPlot' && aliasNames.has(`ImPlot${groupName}`)) {
		return `ImPlot${groupName}`
	}
	if (groupName.startsWith('Im')) {
		return groupName
	}
	if (aliasNames.has(`ImGui${groupName}`)) {
		return `ImGui${groupName}`
	}
	if (aliasNames.has(`Im${groupName}`)) {
		return `Im${groupName}`
	}
	return `ImGui${groupName}`
}

function isNumericLikeNode(typeNode) {
	if (typeNode == null) {
		return false
	}
	if (ts.isLiteralTypeNode(typeNode)) {
		return ts.isNumericLiteral(typeNode.literal)
	}
	return typeNode.kind === ts.SyntaxKind.NumberKeyword
}

function isNullishTypeNode(typeNode) {
	if (typeNode == null) {
		return false
	}
	if (typeNode.kind === ts.SyntaxKind.NullKeyword || typeNode.kind === ts.SyntaxKind.UndefinedKeyword) {
		return true
	}
	if (ts.isLiteralTypeNode(typeNode)) {
		return typeNode.literal.kind === ts.SyntaxKind.NullKeyword
	}
	return false
}

function collectConstObjectGroups(constDeclaration, aliasNames, rootName) {
	const groups = new Map()
	if (constDeclaration == null || !ts.isTypeLiteralNode(constDeclaration.type)) {
		return groups
	}
	for (const member of constDeclaration.type.members) {
		if (!ts.isPropertySignature(member) || member.type == null || member.name == null || !ts.isIdentifier(member.name)) {
			continue
		}
		if (!ts.isTypeLiteralNode(member.type)) {
			continue
		}
		const groupMembers = []
		let valid = true
		for (const nested of member.type.members) {
			if (!ts.isPropertySignature(nested) || nested.type == null || nested.name == null || !ts.isIdentifier(nested.name)) {
				valid = false
				break
			}
			if (!isNumericLikeNode(nested.type)) {
				valid = false
				break
			}
			groupMembers.push({
				name: nested.name.text,
			})
		}
		if (!valid || groupMembers.length === 0) {
			continue
		}
		const typeName = resolveGroupTypeName(member.name.text, aliasNames, rootName)
		groups.set(typeName, {
			rootName,
			groupName: member.name.text,
			typeName,
			members: groupMembers,
		})
	}
	return groups
}

function mapType(typeNode, context = {}) {
	if (typeNode == null) {
		return 'Dynamic'
	}
	if (ts.isParenthesizedTypeNode(typeNode)) {
		return mapType(typeNode.type, context)
	}
	if (ts.isLiteralTypeNode(typeNode)) {
		if (ts.isStringLiteral(typeNode.literal)) {
			return 'String'
		}
		if (ts.isNumericLiteral(typeNode.literal)) {
			return context.numberType ?? 'Float'
		}
		if (typeNode.literal.kind === ts.SyntaxKind.TrueKeyword || typeNode.literal.kind === ts.SyntaxKind.FalseKeyword) {
			return 'Bool'
		}
		return 'Dynamic'
	}
	if (ts.isTupleTypeNode(typeNode)) {
		const elementTypes = typeNode.elements.map(element => mapType(element, context))
		const elementType = new Set(elementTypes).size === 1 ? elementTypes[0] : 'Dynamic'
		return `Array<${elementType}>`
	}
	if (ts.isNamedTupleMember(typeNode)) {
		return mapType(typeNode.type, context)
	}
	if (ts.isArrayTypeNode(typeNode)) {
		return `Array<${mapType(typeNode.elementType, context)}>`
	}
	if (ts.isUnionTypeNode(typeNode)) {
		const nonNullTypes = typeNode.types.filter(candidate => !isNullishTypeNode(candidate))
		const hadNullableBranch = nonNullTypes.length !== typeNode.types.length
		if (nonNullTypes.length === 1) {
			const innerType = mapType(nonNullTypes[0], context)
			return hadNullableBranch ? `Null<${innerType}>` : innerType
		}
		return 'Dynamic'
	}
	if (ts.isTypeReferenceNode(typeNode)) {
		const typeName = getNodeText(typeNode.typeName)
		const typeArguments = typeNode.typeArguments?.map(argument => mapType(argument, context)) ?? []
		if (typeName === 'Promise') {
			const innerType = typeArguments[0] ?? 'Void'
			return `js.lib.Promise<${innerType}>`
		}
		if (typeName === 'Array' || typeName === 'ReadonlyArray') {
			const innerType = typeArguments[0] ?? 'Dynamic'
			return `Array<${innerType}>`
		}
		if (typeName === 'Record' || typeName === 'Partial' || typeName === 'Pick' || typeName === 'Omit') {
			return 'Dynamic'
		}
		if (domTypeMap.has(typeName)) {
			return domTypeMap.get(typeName)
		}
		if (context.interfaceNames?.has(typeName)) {
			return 'Dynamic'
		}
		if (context.typeOverrides?.has(typeName)) {
			return context.typeOverrides.get(typeName)
		}
		if (context.knownTypes?.has(typeName)) {
			const qualifiedTypeName = context.localTypePrefix != null && typeName !== 'ImGui'
				? `${context.localTypePrefix}${typeName}`
				: typeName
			if (typeArguments.length > 0) {
				return `${qualifiedTypeName}<${typeArguments.join(', ')}>`
			}
			return qualifiedTypeName
		}
		return 'Dynamic'
	}
	if (ts.isTypeLiteralNode(typeNode) || ts.isFunctionTypeNode(typeNode) || ts.isConstructorTypeNode(typeNode) || ts.isIndexedAccessTypeNode(typeNode)) {
		return 'Dynamic'
	}
	if (ts.isTypeOperatorNode(typeNode)) {
		return mapType(typeNode.type, context)
	}
	if (typeNode.kind === ts.SyntaxKind.ThisType) {
		return context.currentClassName ?? 'Dynamic'
	}
	switch (typeNode.kind) {
		case ts.SyntaxKind.StringKeyword:
			return 'String'
		case ts.SyntaxKind.NumberKeyword:
			return context.numberType ?? 'Float'
		case ts.SyntaxKind.BooleanKeyword:
			return 'Bool'
		case ts.SyntaxKind.VoidKeyword:
			return 'Void'
		case ts.SyntaxKind.AnyKeyword:
		case ts.SyntaxKind.UnknownKeyword:
		case ts.SyntaxKind.ObjectKeyword:
		case ts.SyntaxKind.NeverKeyword:
		case ts.SyntaxKind.SymbolKeyword:
			return 'Dynamic'
		case ts.SyntaxKind.BigIntKeyword:
			return 'Dynamic'
		case ts.SyntaxKind.NullKeyword:
			return 'Dynamic'
		default:
			return 'Dynamic'
	}
}

function renderParameters(parameters, context, forceOptional = false) {
	const rendered = []
	let optionalStarted = false
	if (context.parameterDefaults != null && context.parameterDefaults.length !== parameters.length) {
		fail(`Parameter count drift for ${context.currentClassName ?? context.currentObjectName}.${context.currentFunctionName}.`)
	}
	for (let index = 0; index < parameters.length; index += 1) {
		const parameter = parameters[index]
		const rawName = ts.isIdentifier(parameter.name) ? parameter.name.text : `arg${index}`
		const haxeName = reservedNames.has(rawName) ? `${rawName}Value` : rawName
		const defaultParameter = context.parameterDefaults?.[index]
		if (defaultParameter != null && defaultParameter.name !== rawName) {
			fail(`Parameter drift for ${context.currentClassName ?? context.currentObjectName}.${context.currentFunctionName}: expected ${defaultParameter.name}, found ${rawName}.`)
		}
		// ponytail: TypeScript erases int vs float; extend runtime metadata if integer APIs grow beyond these explicit wrapper families.
		const numberType = integerFunctionPattern.test(context.currentFunctionName) && rawName !== 'v_speed' ? 'Int' : 'Float'
		let typeName = mapType(parameter.type, {
			...context,
			numberType,
		})
		const defaultValue = defaultParameter?.value
		const isOptional = forceOptional || parameter.questionToken != null || parameter.initializer != null || defaultValue != null
		const haxeDefault = typeName === 'Float' && /^-?\d+$/.test(defaultValue?.haxeValue) ? `${defaultValue.haxeValue}.0` : defaultValue?.haxeValue
		// ponytail: Haxe defaults must be constants; preserve constructor/object defaults inline until Haxe can represent them.
		const defaultSuffix = defaultValue == null
			? ''
			: haxeDefault == null
				? ` /* JS default: ${defaultValue.jsValue.replaceAll('*/', '* /')} */`
				: ` = ${haxeDefault}`
		if (isOptional || optionalStarted) {
			optionalStarted = true
			typeName = typeName.replace(/^Null<(.+)>$/, '$1')
			rendered.push(`?${haxeName}:${typeName}${defaultSuffix}`)
		} else {
			rendered.push(`${haxeName}:${typeName}${defaultSuffix}`)
		}
	}
	return rendered.join(', ')
}

function renderNativeMember(prefix, nativeName, haxeName, level) {
	const lines = []
	if (shouldEmitNative(haxeName, nativeName)) {
		lines.push(`${createIndent(level)}@:native(${maybeQuoteMetadata(nativeName)})`)
	}
	lines.push(`${createIndent(level)}${prefix}${haxeName}`)
	return lines
}

function renderAbstract(group) {
	const lines = []
	lines.push(`abstract ${group.typeName}(Int) from Int to Int {`)
	for (const member of group.members) {
		lines.push(`${createIndent(1)}public static inline final ${member.name}:${group.typeName} = ${member.value};`)
	}
	lines.push('}')
	return lines.join('\n')
}

function isLiteralValueGroupNode(objectLiteral) {
	return objectLiteral.properties.every(member =>
		ts.isPropertyAssignment(member) && (
			ts.isNumericLiteral(member.initializer) ||
			(ts.isPrefixUnaryExpression(member.initializer) && ts.isNumericLiteral(member.initializer.operand))
		),
	)
}

function collectConstObjectLiteralValues(sourceFiles) {
	const valuesByRoot = new Map()
	for (const sourceFile of sourceFiles) {
		for (const statement of sourceFile.statements) {
			if (!isExported(statement) || !ts.isVariableStatement(statement)) {
				continue
			}
			for (const declaration of statement.declarationList.declarations) {
				if (!ts.isIdentifier(declaration.name) || declaration.initializer == null || !ts.isObjectLiteralExpression(declaration.initializer)) {
					continue
				}
				const rootName = declaration.name.text
				const groups = valuesByRoot.get(rootName) ?? new Map()
				for (const member of declaration.initializer.properties) {
					if (!ts.isPropertyAssignment(member) || !ts.isIdentifier(member.name) || !ts.isObjectLiteralExpression(member.initializer)) {
						continue
					}
					if (!isLiteralValueGroupNode(member.initializer)) {
						continue
					}
					const memberValues = new Map()
					for (const nested of member.initializer.properties) {
						if (!ts.isPropertyAssignment(nested) || !ts.isIdentifier(nested.name)) {
							continue
						}
						memberValues.set(nested.name.text, getNodeText(nested.initializer))
					}
					groups.set(member.name.text, memberValues)
				}
				valuesByRoot.set(rootName, groups)
			}
		}
	}
	return valuesByRoot
}

function renderConstantDefault(initializer) {
	if (ts.isStringLiteral(initializer)) {
		return JSON.stringify(initializer.text)
	}
	if (
		ts.isNumericLiteral(initializer) ||
		initializer.kind === ts.SyntaxKind.TrueKeyword ||
		initializer.kind === ts.SyntaxKind.FalseKeyword ||
		initializer.kind === ts.SyntaxKind.NullKeyword
	) {
		return getNodeText(initializer)
	}
	if (
		ts.isPrefixUnaryExpression(initializer) &&
		(initializer.operator === ts.SyntaxKind.PlusToken || initializer.operator === ts.SyntaxKind.MinusToken) &&
		ts.isNumericLiteral(initializer.operand)
	) {
		return initializer.operator === ts.SyntaxKind.PlusToken ? getNodeText(initializer.operand) : getNodeText(initializer)
	}
	if (ts.isPropertyAccessExpression(initializer) && getNodeText(initializer) === 'Number.MAX_VALUE') {
		return '1.7976931348623157e+308'
	}
	return null
}

function collectParameterDefaults(sourceFiles) {
	const defaults = new Map()

	for (const sourceFile of sourceFiles) {
		const collect = (ownerName, functionName, parameters) => {
			if (!parameters.some(parameter => parameter.initializer != null)) {
				return
			}
			const key = `${ownerName}.${functionName}`
			if (defaults.has(key)) {
				fail(`Duplicate runtime function ${key} while collecting parameter defaults.`)
			}
			defaults.set(key, parameters.map((parameter, index) => ({
				name: ts.isIdentifier(parameter.name) ? parameter.name.text : `arg${index}`,
				value: parameter.initializer == null ? null : {
					haxeValue: renderConstantDefault(parameter.initializer),
					jsValue: getNodeText(parameter.initializer),
				},
			})))
		}

		for (const statement of sourceFile.statements) {
			if (!isExported(statement)) {
				continue
			}
			if (ts.isClassDeclaration(statement) && statement.name != null) {
				for (const member of statement.members) {
					if (ts.isConstructorDeclaration(member)) {
						collect(statement.name.text, 'constructor', member.parameters)
					} else if (ts.isMethodDeclaration(member) && member.name != null && ts.isIdentifier(member.name)) {
						collect(statement.name.text, member.name.text, member.parameters)
					}
				}
				continue
			}
			if (!ts.isVariableStatement(statement)) {
				continue
			}
			for (const declaration of statement.declarationList.declarations) {
				if (!ts.isIdentifier(declaration.name) || declaration.initializer == null || !ts.isObjectLiteralExpression(declaration.initializer)) {
					continue
				}
				for (const member of declaration.initializer.properties) {
					if (ts.isMethodDeclaration(member) && member.name != null && ts.isIdentifier(member.name)) {
						collect(declaration.name.text, member.name.text, member.parameters)
					}
				}
			}
		}
	}

	return defaults
}

function attachLiteralValues(groups, literalValuesByRoot) {
	for (const group of groups.values()) {
		const groupValues = literalValuesByRoot.get(group.rootName)?.get(group.groupName)
		for (const member of group.members) {
			const value = groupValues?.get(member.name)
			if (value == null) {
				fail(`Missing literal value for ${group.rootName}.${group.groupName}.${member.name}; runtime/jsimgui's .d.ts and .js have drifted, regenerate via "bun build-jsimgui-and-bindings.sh".`)
			}
			member.value = value
		}
	}
}

function renderTypeAlias(name, declaration, context) {
	if (name == 'ImU32') {
		return `typedef ImU32 = ImU32CompatLayer;`;
	}
	return `typedef ${name} = ${mapType(declaration.type, context)};`
}

function collectClassFields(classDeclaration, context) {
	const fields = []
	const accessors = new Map()

	for (const member of classDeclaration.members) {
		if (ts.isPropertyDeclaration(member)) {
			const nativeName = ts.isIdentifier(member.name) ? member.name.text : getNodeText(member.name)
			const haxeName = lowerCamel(nativeName)
			fields.push({
				kind: 'var',
				nativeName,
				haxeName,
				isStatic: (ts.getCombinedModifierFlags(member) & ts.ModifierFlags.Static) !== 0,
				typeName: mapType(member.type, context),
			})
			continue
		}
		if (ts.isGetAccessorDeclaration(member) || ts.isSetAccessorDeclaration(member)) {
			const nativeName = ts.isIdentifier(member.name) ? member.name.text : getNodeText(member.name)
			const isStatic = (ts.getCombinedModifierFlags(member) & ts.ModifierFlags.Static) !== 0
			const entryKey = `${isStatic ? 'static:' : 'instance:'}${nativeName}`
			if (!accessors.has(entryKey)) {
				accessors.set(entryKey, {
					kind: 'var',
					nativeName,
					haxeName: lowerCamel(nativeName),
					isStatic,
					typeName: 'Dynamic',
				})
			}
			const entry = accessors.get(entryKey)
			if (ts.isGetAccessorDeclaration(member)) {
				entry.typeName = mapType(member.type, context)
			} else if (member.parameters.length > 0) {
				entry.typeName = mapType(member.parameters[0].type, context)
			}
			continue
		}
	}

	for (const entry of accessors.values()) {
		fields.push(entry)
	}

	return fields
}

function collectClassMethods(classDeclaration, context) {
	const methods = []
	let constructorDeclaration = null
	for (const member of classDeclaration.members) {
		if (ts.isConstructorDeclaration(member)) {
			constructorDeclaration = member
			continue
		}
		if (!ts.isMethodDeclaration(member)) {
			continue
		}
		if (member.name == null || !ts.isIdentifier(member.name)) {
			continue
		}
		const nativeName = member.name.text
		const haxeName = lowerCamel(nativeName)
		methods.push({
			nativeName,
			haxeName,
			isStatic: (ts.getCombinedModifierFlags(member) & ts.ModifierFlags.Static) !== 0,
			params: renderParameters(member.parameters, {
				...context,
				currentFunctionName: nativeName,
				parameterDefaults: context.defaultsByFunction?.get(`${context.currentClassName}.${nativeName}`),
			}),
			returnType: mapType(member.type, context),
		})
	}
	return {
		constructorDeclaration,
		methods,
	}
}

function renderClass(name, declaration, context) {
	const lines = []
	const appendBacking = name == 'ImVec2' || name == 'ImVec4'
	const possiblyBackingName = appendBacking ? `${name}Backing` : name
	if (skipStructNames.find(n => n == name) != null) {
		return '';
	}


	lines.push(`@:keep @:native(${maybeQuoteMetadata(`${runtimeRoot}.${name}`)}) extern class ${possiblyBackingName}${renderHeritage(declaration, context)} {`)

	const heritageClause = declaration.heritageClauses?.find(clause => clause.token === ts.SyntaxKind.ExtendsKeyword)
	const baseTypeName = heritageClause?.types[0] != null && ts.isExpressionWithTypeArguments(heritageClause.types[0])
		? getNodeText(heritageClause.types[0].expression)
		: null
	if (baseTypeName === 'ReferenceStruct') {
		lines.push(`${createIndent(1)}static function New():${name};`)
		lines.push(`${createIndent(1)}static function From(ptr:Dynamic):${name};`)
		if (referenceStructConstructableNames.has(name)) {
			lines.push(`${createIndent(1)}function new();`)
		}
	}

	const fields = collectClassFields(declaration, {
		...context,
		currentClassName: name,
	})
	for (const field of fields) {
		const prefix = `${field.isStatic ? 'static ' : ''}var `
		const memberLines = renderNativeMember(prefix, field.nativeName, field.haxeName, 1)
		memberLines[memberLines.length - 1] += `:${field.typeName};`
		lines.push(...memberLines)
	}

	const { constructorDeclaration, methods } = collectClassMethods(declaration, {
		...context,
		currentClassName: name,
	})
	if (constructorDeclaration != null) {
		const params = renderParameters(constructorDeclaration.parameters, {
			...context,
			currentClassName: name,
			currentFunctionName: 'constructor',
			parameterDefaults: context.defaultsByFunction?.get(`${name}.constructor`),
		})
		lines.push(`${createIndent(1)}function new(${params});`)
	}
	for (const method of methods) {
		const prefix = `${method.isStatic ? 'static ' : ''}function `
		const memberLines = renderNativeMember(prefix, method.nativeName, method.haxeName, 1)
		memberLines[memberLines.length - 1] += `(${method.params}):${method.returnType};`
		lines.push(...memberLines)
	}

	lines.push('}')
	return lines.join('\n')
}

function renderHeritage(declaration, context) {
	const heritage = declaration.heritageClauses?.find(clause => clause.token === ts.SyntaxKind.ExtendsKeyword)
	if (heritage == null || heritage.types.length === 0) {
		return ''
	}
	const baseType = heritage.types[0]
	if (!ts.isExpressionWithTypeArguments(baseType)) {
		return ''
	}
	const baseName = getNodeText(baseType.expression)
	if (context.typeOverrides?.has(baseName)) {
		return ` extends ${context.typeOverrides.get(baseName)}`
	}
	if (context.manualClassNames?.has(baseName) || context.knownTypes?.has(baseName)) {
		return ` extends ${baseName}`
	}
	return ''
}

function renderConstObjectClass(name, declaration, context, groupsToSkip = new Set()) {
	if (!ts.isTypeLiteralNode(declaration.type)) {
		return ''
	}
	const lines = []
	lines.push(`@:keep @:native(${maybeQuoteMetadata(`${runtimeRoot}.${name}`)}) extern class ${name} {`)
	for (const member of declaration.type.members) {
		if (member.name == null || !ts.isIdentifier(member.name)) {
			continue
		}
		const nativeName = member.name.text
		if (groupsToSkip.has(nativeName)) {
			continue
		}
		if (ts.isMethodSignature(member) || ts.isMethodDeclaration(member)) {
			const haxeName = lowerCamel(nativeName)
			const params = renderParameters(member.parameters, {
				...context,
				currentObjectName: name,
				currentFunctionName: nativeName,
				parameterDefaults: context.defaultsByFunction?.get(`${name}.${nativeName}`),
			})
			const returnType = mapType(member.type, context)
			const memberLines = renderNativeMember('static function ', nativeName, haxeName, 1)
			memberLines[memberLines.length - 1] += `(${params}):${returnType};`
			lines.push(...memberLines)
			continue
		}
		if (ts.isPropertySignature(member)) {
			if (ts.isTypeLiteralNode(member.type)) {
				continue
			}
			const haxeName = lowerCamel(nativeName)
			const memberLines = renderNativeMember('static var ', nativeName, haxeName, 1)
			memberLines[memberLines.length - 1] += `:${mapType(member.type, context)};`
			lines.push(...memberLines)
		}
	}
	lines.push('}')
	return lines.join('\n')
}

function renderModule(exportNames) {
	const lines = []
	lines.push('package imguijs;')
	lines.push('')
	lines.push('/**')
	lines.push('\tGenerated by `tools/generate-jsimgui-externs.mjs` from')
	lines.push('\t`runtime/jsimgui/*.d.ts`.')
	lines.push('**/')
	lines.push(`@:native(${maybeQuoteMetadata(runtimeRoot)})`)
	lines.push('extern class Module {')
	for (const name of exportNames) {
		lines.push(`${createIndent(1)}static var ${name}:Dynamic;`)
	}
	lines.push('}')
	lines.push('')
	return lines.join('\n')
}

function renderConstObjectFile(data) {
	const lines = []
	lines.push('package imguijs;')
	lines.push('')
	lines.push('import imguijs.Abstracts;')
	lines.push('')
	lines.push('/**')
	lines.push('\tGenerated by `tools/generate-jsimgui-externs.mjs` from')
	lines.push('\t`runtime/jsimgui/*.d.ts`.')
	lines.push('**/')
	lines.push('')

	for (const [name, declaration] of data.typeAliases) {
		if (data.groupTypeNames.has(name)) {
			continue
		}
		lines.push(renderTypeAlias(name, declaration, data.context))
	}

	lines.push('')

	for (const group of data.groups.values()) {
		lines.push(renderAbstract(group))
		lines.push('')
	}

	for (const [name, declaration] of data.classes) {
		const classLines = renderClass(name, declaration, data.context);
		if (classLines) {
			lines.push(classLines)
			lines.push('')
		}
	}

	lines.push(renderConstObjectClass(data.objectName, data.constDeclaration, data.context, data.groupNames))
	lines.push('')
	return lines.join('\n')
}

function renderImGuiImplWebFile(data) {
	const lines = []
	lines.push('package imguijs;')
	lines.push('')
	lines.push('/**')
	lines.push('\tGenerated by `tools/generate-jsimgui-externs.mjs` from')
	lines.push('\t`runtime/jsimgui/*.d.ts`.')
	lines.push('**/')
	lines.push('')
	lines.push(renderConstObjectClass('ImGuiImplWeb', data.implDeclaration, data.context))
	lines.push('')
	return lines.join('\n')
}

function updateRootAliasFile(aliasNames) {
	const raw = ts.sys.readFile(rootAliasPath)
	if (raw == null) {
		fail(`Missing ${path.relative(repoRoot, rootAliasPath)}.`)
	}
	const aliasLines = ['package imgui;', '', 'typedef ImGui = imguijs.ImGui;']
	for (const aliasName of aliasNames) {
		if (aliasName === 'ImGui' || aliasName === 'ImGuiImplWeb' || aliasName === 'Module' || aliasName === 'Runtime' || aliasName === 'State') {
			continue
		}
		if (aliasName === 'ImVec2' || aliasName === 'ImVec4') {
			aliasLines.push(`typedef ${aliasName} = imguijs.Abstracts.${aliasName};`)
			continue
		}
		aliasLines.push(`typedef ${aliasName} = imguijs.ImGui.${aliasName};`)
	}
	aliasLines.push('')
	return fs.writeFile(rootAliasPath, aliasLines.join('\n'))
}

function renderRootAliasFile(rootName, aliasNames) {
	const lines = ['package imgui;', '', `typedef ${rootName} = imguijs.${rootName};`]
	for (const aliasName of aliasNames) {
		if (aliasName === rootName || aliasName === 'Module' || aliasName === 'Runtime' || aliasName === 'State') {
			continue
		}
		lines.push(`typedef ${aliasName} = imguijs.${rootName}.${aliasName};`)
	}
	lines.push('')
	return lines.join('\n')
}

function isImPlotName(name) {
	return name === 'ImAxis' || name.startsWith('ImPlot')
}

function filterMapEntries(map, predicate) {
	return new Map(Array.from(map.entries()).filter(([name]) => predicate(name)))
}

async function main() {
	const sourceFiles = (await readSourceFiles()).map(({ filePath, sourceText }) =>
		ts.createSourceFile(filePath, sourceText, ts.ScriptTarget.Latest, true, ts.ScriptKind.TS),
	)
	const declarations = collectDeclarations(sourceFiles)
	const aliasNames = new Set(declarations.typeAliases.keys())
	const imguiDeclaration = declarations.constObjects.get('ImGui')
	const implotDeclaration = declarations.constObjects.get('ImPlot')
	const implDeclaration = declarations.constObjects.get('ImGuiImplWeb')

	if (imguiDeclaration == null) {
		fail('Unable to find exported const ImGui in the jsimgui build declarations.')
	}
	if (implDeclaration == null) {
		fail('Unable to find exported const ImGuiImplWeb in the jsimgui build declarations.')
	}

	const imguiGroups = collectConstObjectGroups(imguiDeclaration, aliasNames, 'ImGui')
	const implotGroups = collectConstObjectGroups(implotDeclaration, aliasNames, 'ImPlot')

	const valueSourceFiles = (await readValueSourceFiles(sourceFiles.map(sourceFile => sourceFile.fileName)))
		.map(({ filePath, sourceText }) => ts.createSourceFile(filePath, sourceText, ts.ScriptTarget.Latest, true, ts.ScriptKind.JS))
	const literalValues = collectConstObjectLiteralValues(valueSourceFiles)
	const defaultsByFunction = collectParameterDefaults(valueSourceFiles)
	attachLiteralValues(imguiGroups, literalValues)
	attachLiteralValues(implotGroups, literalValues)

	const imguiGroupTypeNames = new Set(imguiGroups.keys())
	const implotGroupTypeNames = new Set(implotGroups.keys())
	const allGroupTypeNames = new Set([...imguiGroups.keys(), ...implotGroups.keys()])
	const imguiGroupNames = new Set(Array.from(imguiGroups.values(), group => group.groupName))
	const implotGroupNames = new Set(Array.from(implotGroups.values(), group => group.groupName))
	const manualClassNames = new Set(['ValueStruct', 'ReferenceStruct'])
	const imguiTypeAliases = filterMapEntries(declarations.typeAliases, name => !isImPlotName(name))
	const implotTypeAliases = filterMapEntries(declarations.typeAliases, isImPlotName)
	const imguiClasses = filterMapEntries(declarations.classes, name => !isImPlotName(name))
	const implotClasses = filterMapEntries(declarations.classes, isImPlotName)
	const knownTypes = new Set([
		...declarations.typeAliases.keys(),
		...imguiGroups.keys(),
		...implotGroups.keys(),
		...declarations.classes.keys(),
		...manualClassNames,
	])
	const context = {
		interfaceNames: declarations.interfaces,
		knownTypes,
		manualClassNames,
		defaultsByFunction,
	}
	const implotContext = {
		...context,
		typeOverrides: new Map([
			['ImVec2', 'imguijs.Abstracts.ImVec2'],
			['ImVec4', 'imguijs.Abstracts.ImVec4'],
			['ReferenceStruct', 'imguijs.ImGui.ReferenceStruct'],
			['ValueStruct', 'imguijs.ImGui.ValueStruct'],
		]),
	}

	const imguiFile = renderConstObjectFile({
		objectName: 'ImGui',
		typeAliases: imguiTypeAliases,
		groups: imguiGroups,
		groupTypeNames: imguiGroupTypeNames,
		classes: imguiClasses,
		constDeclaration: imguiDeclaration,
		groupNames: imguiGroupNames,
		context,
	})
	const implotFile = implotDeclaration == null ? null : renderConstObjectFile({
		objectName: 'ImPlot',
		typeAliases: implotTypeAliases,
		groups: implotGroups,
		groupTypeNames: implotGroupTypeNames,
		classes: implotClasses,
		constDeclaration: implotDeclaration,
		groupNames: implotGroupNames,
		context: implotContext,
	})
	const imguiImplFile = renderImGuiImplWebFile({
		implDeclaration,
		context: {
			...context,
			localTypePrefix: 'ImGui.',
		},
	})
	const moduleFile = renderModule(
		[
			...declarations.classes.keys(),
			...declarations.constObjects.keys(),
		].sort((left, right) => left.localeCompare(right)),
	)

	await fs.mkdir(path.dirname(imguiOutputPath), { recursive: true })
	await fs.writeFile(imguiOutputPath, imguiFile)
	if (implotFile != null) {
		await fs.writeFile(implotOutputPath, implotFile)
	}
	await fs.writeFile(imguiImplOutputPath, imguiImplFile)
	await fs.writeFile(moduleOutputPath, moduleFile)

	const aliasNamesForRoot = Array.from(
		new Set([
			...Array.from(imguiTypeAliases.keys()).filter(name => !allGroupTypeNames.has(name)),
			...imguiGroups.keys(),
			...imguiClasses.keys(),
			...manualClassNames,
		]),
	).sort((left, right) => left.localeCompare(right))
	await updateRootAliasFile(aliasNamesForRoot)
	if (implotFile != null) {
		const implotAliasNames = Array.from(
			new Set([
				...Array.from(implotTypeAliases.keys()).filter(name => !allGroupTypeNames.has(name)),
				...implotGroups.keys(),
				...implotClasses.keys(),
			]),
		).sort((left, right) => left.localeCompare(right))
		await fs.writeFile(rootImPlotAliasPath, renderRootAliasFile('ImPlot', implotAliasNames))
	}

	console.info(`[jsimgui] Wrote ${path.relative(repoRoot, imguiOutputPath)}`)
	if (implotFile != null) {
		console.info(`[jsimgui] Wrote ${path.relative(repoRoot, implotOutputPath)}`)
	}
	console.info(`[jsimgui] Wrote ${path.relative(repoRoot, imguiImplOutputPath)}`)
	console.info(`[jsimgui] Wrote ${path.relative(repoRoot, moduleOutputPath)}`)
	console.info(`[jsimgui] Updated ${path.relative(repoRoot, rootAliasPath)}`)
	if (implotFile != null) {
		console.info(`[jsimgui] Updated ${path.relative(repoRoot, rootImPlotAliasPath)}`)
	}
}

main().catch(error => {
	console.error(error instanceof Error ? error.stack ?? error.message : String(error))
	process.exit(1)
})
