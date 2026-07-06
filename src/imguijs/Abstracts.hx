package imguijs;

class ImVec2Backing {
	public var x:Float;
	public var y:Float;

	public function new(x:Float, y:Float) {
		this.x = x;
		this.y = y;
	}
}

class ImVec4Backing {
	public var x:Float;
	public var y:Float;
	public var z:Float;
	public var w:Float;

	public function new(x:Float, y:Float, z:Float, w:Float) {
		this.x = x;
		this.y = y;
		this.z = z;
		this.w = w;
	}
}

@:forward
abstract ImVec2(ImVec2Backing) from ImVec2Backing to ImVec2Backing {
	public static final Zero:ImVec2 = new ImVec2(0.0, 0.0);

	public extern inline overload function new(v:ImVec2Backing) {
		this = v;
	}

	public extern inline overload function new(x:Float, y:Float) {
		this = new ImVec2Backing(x, y);
	}

	/**
		Uniform lerp, interpolates from a to b using t.
	**/
	public static extern inline overload function lerp(a:ImVec2, b:ImVec2, t:Float):ImVec2 {
		return new ImVec2(a.x + (b.x - a.x) * t, a.y + (b.y - a.y) * t);
	}

	/**
		Component-wise lerp, interpolates from a.x to b.x using t.x, etc.
	**/
	public static extern inline overload function lerp(a:ImVec2, b:ImVec2, t:ImVec2):ImVec2 {
		return new ImVec2(a.x + (b.x - a.x) * t.x, a.y + (b.y - a.y) * t.y);
	}

	@:op(A + B)
	public static function add(lhs:ImVec2, rhs:ImVec2):ImVec2 {
		return new ImVec2(lhs.x + rhs.x, lhs.y + rhs.y);
	}

	@:op(A - B)
	public static function subtract(lhs:ImVec2, rhs:ImVec2):ImVec2 {
		return new ImVec2(lhs.x - rhs.x, lhs.y - rhs.y);
	}

	@:op(A * B)
	public static function multiply(lhs:ImVec2, rhs:Float):ImVec2 {
		return new ImVec2(lhs.x * rhs, lhs.y * rhs);
	}
}

@:forward
abstract ImVec4(ImVec4Backing) from ImVec4Backing to ImVec4Backing {
	public static final Zero:ImVec4 = new ImVec4(0.0, 0.0, 0.0, 0.0);

	public extern inline overload function new(v:ImVec4) {
		this = v;
	}

	public extern inline overload function new(x:Float, y:Float, z:Float, w:Float) {
		this = new ImVec4Backing(x, y, z, w);
	}

	/**
		Uniform lerp, interpolates from a to b using t.

	**/
	public static extern inline overload function lerp(a:ImVec4, b:ImVec4, t:Float):ImVec4 {
		return new ImVec4(a.x + (b.x - a.x) * t, a.y + (b.y - a.y) * t, a.z + (b.z - a.z) * t, a.w + (b.w - a.w) * t);
	}

	/**
		Component-wise lerp, interpolates from a.x to b.x using t.x, etc.
	**/
	public static extern inline overload function lerp(a:ImVec4, b:ImVec4, t:ImVec4):ImVec4 {
		return new ImVec4(a.x + (b.x - a.x) * t.x, a.y + (b.y - a.y) * t.y, a.z + (b.z - a.z) * t.z, a.w + (b.w - a.w) * t.w);
	}

	@:op(A + B)
	public static function add(lhs:ImVec4, rhs:ImVec4):ImVec4 {
		return new ImVec4(lhs.x + rhs.x, lhs.y + rhs.y, lhs.z + rhs.z, lhs.w + rhs.w);
	}

	@:op(A - B)
	public static function subtract(lhs:ImVec4, rhs:ImVec4):ImVec4 {
		return new ImVec4(lhs.x - rhs.x, lhs.y - rhs.y, lhs.z - rhs.z, lhs.w - rhs.w);
	}

	@:op(A * B)
	public static function multiply(lhs:ImVec4, rhs:Float):ImVec4 {
		return new ImVec4(lhs.x * rhs, lhs.y * rhs, lhs.z * rhs, lhs.w * rhs);
	}

	@:from
	public static function fromHex(hex:Int):ImVec4 {
		final a = hex >>> 24;
		final b = hex << 8 >>> 24;
		final g = hex << 16 >>> 24;
		final r = hex << 24 >>> 24;
		return new ImVec4(r / 255, g / 255, b / 255, a / 255);
	}

	public function toFloatArray():Array<Float> {
		return [this.x, this.y, this.z, this.w];
	}
}

@:forward
abstract ImU32CompatLayer(Float) to Float {
	public extern inline overload function new(v:Int) {
		this = v >>> 0;
	}

	public extern inline overload function new(v:Float) {
		this = Std.int(v) >>> 0;
	}

	@:from
	public static function fromInt(v:Int):ImU32CompatLayer {
		// Swap colors from Haxe's AARRGGBB format to ImGui's AABBGGRR
		final a:Int = v & 0xFF000000;
		final r:Int = (v & 0x00FF0000) >> 16;
		final g:Int = v & 0x0000FF00;
		final b:Int = (v & 0x000000FF) << 16;
		return new ImU32CompatLayer(a | b | g | r);
	}

	inline static function clampToByte(value:Float):Int {
		return Math.floor(Math.max(Math.min(value, 255), 0));
	}

	@:from
	public static function fromImVec4(v:ImVec4):ImU32CompatLayer {
		final r:Int = clampToByte(v.x * 255);
		final g:Int = clampToByte(v.y * 255);
		final b:Int = clampToByte(v.z * 255);
		final a:Int = clampToByte(v.w * 255);

		return ImU32CompatLayer.fromInt((a << 24) | (r << 16) | (g << 8) | (b << 0));
	}

	@:to
	public function toImVec4():ImVec4 {
		final hex:Int = cast this;
		// >>> performs a logical bitwise right shift, needed to avoid the sign bit being preserved when shifting.
		final a = hex >>> 24;
		final b = hex << 8 >>> 24;
		final g = hex << 16 >>> 24;
		final r = hex << 24 >>> 24;
		return new ImVec4(r / 255, g / 255, b / 255, a / 255);
	}

	public function toFloatArray():Array<Float> {
		final hex:Int = cast this;
		// >>> performs a logical bitwise right shift, needed to avoid the sign bit being preserved when shifting.
		final a = hex >>> 24;
		final b = hex << 8 >>> 24;
		final g = hex << 16 >>> 24;
		final r = hex << 24 >>> 24;

		return [r / 255, g / 255, b / 255, a / 255];
	}

	public static function fromFloatArray(arr:Array<Float>):ImU32CompatLayer {
		final r:Int = clampToByte(arr[0] * 255);
		final g:Int = clampToByte(arr[1] * 255);
		final b:Int = clampToByte(arr[2] * 255);
		final a:Int = clampToByte(arr[3] * 255);

		return ImU32CompatLayer.fromInt((a << 24) | (r << 16) | (g << 8) | (b << 0));
	}
}
