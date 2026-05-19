
echo "Updating git submodules..."
git submodule update --init --recursive

echo "Building docker container and compiling wasm..."
cd lib/jsimgui
docker build -t jsimgui -f .github/Dockerfile .
docker run -v "$PWD:/workspace" jsimgui bash -c "\
	npm ci && \
	node build.ts && \
	mkdir -p /tmp/jsimgui-default && \
	cp -r build/. /tmp/jsimgui-default/ && \
	node build.ts --font-loader=freetype --extensions && \
	cp /tmp/jsimgui-default/wasm/loader.em.js build/wasm/loader.em.js"

echo "Copying output to runtime directory..."
cd ../../
rm -rf runtime/jsimgui
cp -r lib/jsimgui/build/ runtime/jsimgui

echo "Generating jsimgui externs..."
bun tools/generate-jsimgui-externs.mjs

echo "All done :) You're welcome!"
