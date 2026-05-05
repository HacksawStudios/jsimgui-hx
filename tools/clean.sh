#!/usr/bin/env bash
set -euo pipefail

SUDO=""
if [ "$(id -u)" != "0" ] && command -v sudo >/dev/null 2>&1; then
	SUDO="sudo"
fi

$SUDO rm -rf \
	./build \
	./node_modules \
	./lib/jsimgui/build \
	./lib/jsimgui/bindgen \
	./lib/jsimgui/node_modules \
	./lib/jsimgui/.cache \
	./lib/jsimgui/.em_cache \
	./lib/jsimgui/compile_commands.json \
	./lib/jsimgui/third_party/dear_bindings/dcimgui*
