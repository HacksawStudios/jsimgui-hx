package imguijs;

#if js
import imguijs.ImGui.ImVec2Backing;
import imguijs.ImGui.ImVec4Backing;

@:forward
abstract ImVec2(ImVec2Backing) from ImVec2Backing to ImVec2Backing {
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
		final a:Int = (hex & 0xFF000000) >> 24;
		final r:Int = (hex & 0xFF0000) >> 16;
		final g:Int = (hex & 0xFF00) >> 8;
		final b:Int = (hex & 0xFF);

		return new ImVec4(r / 255, g / 255, b / 255, (a <= 0) ? 1.0 : (a / 255));
	}
}

@:forward
abstract ImU32CompatLayer(Float) to Float {
	public extern inline overload function new(v:Int) {
		this = v;
	}

	public extern inline overload function new(v:Float) {
		this = v;
	}

	@:from
	public static function fromInt(v:Int):ImU32CompatLayer {
		#if !no_reorder_imu32_channels
		v = (v & 0xFF00FF00) | ((v & 0xFF0000) >> 16) | ((v & 0xFF) << 16);
		#end

		var p:Float = v & 0x7FFFFFFF;
		if (v & 0x80000000 != 0) {
			p += 0x7FFFFFFF + 1;
		}

		return new ImU32CompatLayer(p);
	}

	@:from
	public static function fromImVec4(v:ImVec4):ImU32CompatLayer {
		final r:Int = Math.floor(Math.max(Math.min(v.x * 255, 255), 0));
		final g:Int = Math.floor(Math.max(Math.min(v.y * 255, 255), 0));
		final b:Int = Math.floor(Math.max(Math.min(v.z * 255, 255), 0));
		final a:Int = Math.floor(Math.max(Math.min(v.w * 255, 255), 0));

		return ImU32CompatLayer.fromInt((a << 24) | (r << 16) | (g << 8) | (b << 0));
	}
}
#end
