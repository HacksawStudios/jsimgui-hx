#!/usr/bin/env node
const fs = require('node:fs');
const path = require('node:path');
const os = require('node:os');
const cp = require('node:child_process');

const packageRoot = process.cwd();
const packageJsonPath = path.join(packageRoot, 'package.json');

if (!fs.existsSync(packageJsonPath)) {
	process.exit(0);
}

const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
const packageName = packageJson.name;
const packageVersion = packageJson.version;
const haxeModuleName = packageName.slice(packageName.lastIndexOf('/') + 1);

if (!packageName || !packageVersion || !haxeModuleName) {
	console.log('[jsimgui-hx] Missing package name or version; skipping haxelib install.');
	process.exit(0);
}

const packagePathParts = packageName.split('/');
const parentNodeModules = path.resolve(packageRoot, ...packagePathParts.map(() => '..'));
const consumerRoot = path.dirname(parentNodeModules);
const installedModulePath = path.join(parentNodeModules, ...packagePathParts);

if (!fs.existsSync(installedModulePath)) {
	console.log('[jsimgui-hx] No parent module root found; skipping haxelib install.');
	process.exit(0);
}

const haxelibRoot = path.join(consumerRoot, '.haxelib');
const moduleRoot = path.join(haxelibRoot, haxeModuleName.replaceAll('.', ','));
const versionDirName = packageVersion.split('.').join(',');
const versionDir = path.join(moduleRoot, versionDirName);

fs.mkdirSync(moduleRoot, { recursive: true });
fs.rmSync(versionDir, { recursive: true, force: true });
fs.mkdirSync(versionDir, { recursive: true });

if (os.platform() === 'win32') {
	copyTree(installedModulePath, versionDir);
} else {
	cp.execFileSync('sh', ['-lc', `ln -sfn "${installedModulePath}"/* "${versionDir}"`], {
		stdio: 'inherit',
	});
}

fs.writeFileSync(path.join(moduleRoot, '.current'), packageVersion, 'utf8');
console.log(`[jsimgui-hx] Installed Haxelib ${haxeModuleName} ${packageVersion} into ${path.relative(consumerRoot, versionDir)}`);

function copyTree(sourceDir, destinationDir) {
	for (const entry of fs.readdirSync(sourceDir, { withFileTypes: true })) {
		const sourcePath = path.join(sourceDir, entry.name);
		const destinationPath = path.join(destinationDir, entry.name);
		if (entry.isDirectory()) {
			fs.mkdirSync(destinationPath, { recursive: true });
			copyTree(sourcePath, destinationPath);
			continue;
		}
		fs.copyFileSync(sourcePath, destinationPath);
	}
}
