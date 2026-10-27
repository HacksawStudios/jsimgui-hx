package imguijs;

import haxe.macro.Expr;

/**
	A pointer argument (`float* v`, `float v[3]`, `bool* p_open`, ...): a plain array, or accessors
	from `Ref.of` that the bindings read before the native call and write after it when changed.
	At runtime it is either an `Array<T>` or a jsimgui `AccessorRef` (`{getters, setters}`).
**/
abstract Ref<T>(Dynamic) from Array<T> {
	#if !macro
	/**
		Number of elements.
	**/
	public var length(get, never):Int;

	/**
		Element 0.
	**/
	public var value(get, set):T;

	inline function get_length():Int {
		return isArray() ? this.length : this.getters.length;
	}

	inline function get_value():T {
		return get(0);
	}

	inline function set_value(newValue:T):T {
		return set(0, newValue);
	}

	@:arrayAccess inline function get(index:Int):T {
		return isArray() ? this[index] : this.getters[index]();
	}

	@:arrayAccess inline function set(index:Int, newValue:T):T {
		if (isArray()) {
			this[index] = newValue;
		} else {
			this.setters[index](newValue);
		}
		return newValue;
	}

	inline function isArray():Bool {
		return js.Syntax.code('Array.isArray({0})', this);
	}

	/**
		Builds a ref from one getter and setter per element.
	**/
	public static inline function make<T>(getters:Array<() -> T>, setters:Array<(newValue:T) -> Void>):Ref<T> {
		return cast {getters: getters, setters: setters};
	}
	#end

	/**
		Refers to assignable `values` as consecutive elements, e.g.
		`ImGui.dragFloat3('Position', Ref.of(pos.x, pos.y, pos.z))`.
	**/
	public static macro function of(...values:Expr):Expr {
		if (values.length == 0) {
			haxe.macro.Context.error('Ref.of needs at least one value', haxe.macro.Context.currentPos());
		}
		final getters = values.toArray().map(value -> macro @:pos(value.pos) () -> $value);
		final setters = values.toArray().map(value -> macro @:pos(value.pos) newValue -> $value = newValue);
		return macro imguijs.Ref.make([$a{getters}], [$a{setters}]);
	}
}

/**
	A `Ref` to 2 elements, e.g. `float v[2]`. The count is documentation only.
**/
typedef Ref2<T> = Ref<T>;

/**
	A `Ref` to 3 elements, e.g. `float v[3]`. The count is documentation only.
**/
typedef Ref3<T> = Ref<T>;

/**
	A `Ref` to 4 elements, e.g. `float v[4]`. The count is documentation only.
**/
typedef Ref4<T> = Ref<T>;
