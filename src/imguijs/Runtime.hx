package imguijs;

import js.Syntax;
import js.lib.Promise;

class Runtime {
	public static function load(modulePath:String):Promise<Void> {
		return cast Syntax.code('import({0}).then(function(module) { globalThis.__imguiHxJsImGui = module; })', modulePath);
	}
}
