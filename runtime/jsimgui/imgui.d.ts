import { ValueStruct, ReferenceStruct } from './core.js';
/**
 * \/\/ Default: 16-bit (for maximum compatibility with renderer backends)
 */
export type ImDrawIdx = number;
/**
 * \/\/ A unique ID used by widgets (typically the result of hashing a stack of string)
 */
export type ImGuiID = number;
/**
 * \/\/ 8-bit signed integer
 */
export type ImS8 = number;
/**
 * \/\/ 8-bit unsigned integer
 */
export type ImU8 = number;
/**
 * \/\/ 16-bit signed integer
 */
export type ImS16 = number;
/**
 * \/\/ 16-bit unsigned integer
 */
export type ImU16 = number;
/**
 * \/\/ 32-bit signed integer == int
 */
export type ImS32 = number;
/**
 * \/\/ 32-bit unsigned integer (often used to store packed colors)
 */
export type ImU32 = number;
/**
 * \/\/ 64-bit signed integer
 */
export type ImS64 = bigint;
/**
 * \/\/ 64-bit unsigned integer
 */
export type ImU64 = bigint;
/**
 * \/\/ -> enum ImGuiDir              \/\/ Enum: A cardinal direction (Left, Right, Up, Down)
 */
export type ImGuiDir = number;
/**
 * \/\/ -> enum ImGuiKey              \/\/ Enum: A key identifier (ImGuiKey_XXX or ImGuiMod_XXX value)
 */
export type ImGuiKey = number;
/**
 * \/\/ -> enum ImGuiMouseSource      \/\/ Enum; A mouse input source identifier (Mouse, TouchScreen, Pen)
 */
export type ImGuiMouseSource = number;
/**
 * \/\/ -> enum ImGuiSortDirection    \/\/ Enum: A sorting direction (ascending or descending)
 */
export type ImGuiSortDirection = ImU8;
/**
 * \/\/ -> enum ImGuiCol_             \/\/ Enum: A color identifier for styling
 */
export type ImGuiCol = number;
/**
 * \/\/ -> enum ImGuiCond_            \/\/ Enum: A condition for many Set*() functions
 */
export type ImGuiCond = number;
/**
 * \/\/ -> enum ImGuiDataType_        \/\/ Enum: A primary data type
 */
export type ImGuiDataType = number;
/**
 * \/\/ -> enum ImGuiMouseButton_     \/\/ Enum: A mouse button identifier (0=left, 1=right, 2=middle)
 */
export type ImGuiMouseButton = number;
/**
 * \/\/ -> enum ImGuiMouseCursor_     \/\/ Enum: A mouse cursor shape
 */
export type ImGuiMouseCursor = number;
/**
 * \/\/ -> enum ImGuiStyleVar_        \/\/ Enum: A variable identifier for styling
 */
export type ImGuiStyleVar = number;
/**
 * \/\/ -> enum ImGuiTableBgTarget_   \/\/ Enum: A color target for TableSetBgColor()
 */
export type ImGuiTableBgTarget = number;
/**
 * \/\/ -> enum ImDrawFlags_          \/\/ Flags: for ImDrawList functions
 */
export type ImDrawFlags = number;
/**
 * \/\/ -> enum ImDrawListFlags_      \/\/ Flags: for ImDrawList instance
 */
export type ImDrawListFlags = number;
/**
 * \/\/ -> enum ImDrawTextFlags_      \/\/ Internal, do not use!
 */
export type ImDrawTextFlags = number;
/**
 * \/\/ -> enum ImFontFlags_          \/\/ Flags: for ImFont
 */
export type ImFontFlags = number;
/**
 * \/\/ -> enum ImFontAtlasFlags_     \/\/ Flags: for ImFontAtlas
 */
export type ImFontAtlasFlags = number;
/**
 * \/\/ -> enum ImGuiBackendFlags_    \/\/ Flags: for io.BackendFlags
 */
export type ImGuiBackendFlags = number;
/**
 * \/\/ -> enum ImGuiButtonFlags_     \/\/ Flags: for InvisibleButton()
 */
export type ImGuiButtonFlags = number;
/**
 * \/\/ -> enum ImGuiChildFlags_      \/\/ Flags: for BeginChild()
 */
export type ImGuiChildFlags = number;
/**
 * \/\/ -> enum ImGuiColorEditFlags_  \/\/ Flags: for ColorEdit4(), ColorPicker4() etc.
 */
export type ImGuiColorEditFlags = number;
/**
 * \/\/ -> enum ImGuiConfigFlags_     \/\/ Flags: for io.ConfigFlags
 */
export type ImGuiConfigFlags = number;
/**
 * \/\/ -> enum ImGuiComboFlags_      \/\/ Flags: for BeginCombo()
 */
export type ImGuiComboFlags = number;
/**
 * \/\/ -> enum ImGuiDockNodeFlags_   \/\/ Flags: for DockSpace()
 */
export type ImGuiDockNodeFlags = number;
/**
 * \/\/ -> enum ImGuiDragDropFlags_   \/\/ Flags: for BeginDragDropSource(), AcceptDragDropPayload()
 */
export type ImGuiDragDropFlags = number;
/**
 * \/\/ -> enum ImGuiFocusedFlags_    \/\/ Flags: for IsWindowFocused()
 */
export type ImGuiFocusedFlags = number;
/**
 * \/\/ -> enum ImGuiHoveredFlags_    \/\/ Flags: for IsItemHovered(), IsWindowHovered() etc.
 */
export type ImGuiHoveredFlags = number;
/**
 * \/\/ -> enum ImGuiInputFlags_      \/\/ Flags: for Shortcut(), SetNextItemShortcut()
 */
export type ImGuiInputFlags = number;
/**
 * \/\/ -> enum ImGuiInputTextFlags_  \/\/ Flags: for InputText(), InputTextMultiline()
 */
export type ImGuiInputTextFlags = number;
/**
 * \/\/ -> enum ImGuiItemFlags_       \/\/ Flags: for PushItemFlag(), shared by all items
 */
export type ImGuiItemFlags = number;
/**
 * \/\/ -> ImGuiKey | ImGuiMod_XXX    \/\/ Flags: for IsKeyChordPressed(), Shortcut() etc. an ImGuiKey optionally OR-ed with one or more ImGuiMod_XXX values.
 */
export type ImGuiKeyChord = number;
/**
 * \/\/ -> enum ImGuiListClipperFlags_\/\/ Flags: for ImGuiListClipper
 */
export type ImGuiListClipperFlags = number;
/**
 * \/\/ -> enum ImGuiPopupFlags_      \/\/ Flags: for OpenPopup*(), BeginPopupContext*(), IsPopupOpen()
 */
export type ImGuiPopupFlags = number;
/**
 * \/\/ -> enum ImGuiMultiSelectFlags_\/\/ Flags: for BeginMultiSelect()
 */
export type ImGuiMultiSelectFlags = number;
/**
 * \/\/ -> enum ImGuiSelectableFlags_ \/\/ Flags: for Selectable()
 */
export type ImGuiSelectableFlags = number;
/**
 * \/\/ -> enum ImGuiSliderFlags_     \/\/ Flags: for DragFloat(), DragInt(), SliderFloat(), SliderInt() etc.
 */
export type ImGuiSliderFlags = number;
/**
 * \/\/ -> enum ImGuiTabBarFlags_     \/\/ Flags: for BeginTabBar()
 */
export type ImGuiTabBarFlags = number;
/**
 * \/\/ -> enum ImGuiTabItemFlags_    \/\/ Flags: for BeginTabItem()
 */
export type ImGuiTabItemFlags = number;
/**
 * \/\/ -> enum ImGuiTableFlags_      \/\/ Flags: For BeginTable()
 */
export type ImGuiTableFlags = number;
/**
 * \/\/ -> enum ImGuiTableColumnFlags_\/\/ Flags: For TableSetupColumn()
 */
export type ImGuiTableColumnFlags = number;
/**
 * \/\/ -> enum ImGuiTableRowFlags_   \/\/ Flags: For TableNextRow()
 */
export type ImGuiTableRowFlags = number;
/**
 * \/\/ -> enum ImGuiTreeNodeFlags_   \/\/ Flags: for TreeNode(), TreeNodeEx(), CollapsingHeader()
 */
export type ImGuiTreeNodeFlags = number;
/**
 * \/\/ -> enum ImGuiViewportFlags_   \/\/ Flags: for ImGuiViewport
 */
export type ImGuiViewportFlags = number;
/**
 * \/\/ -> enum ImGuiWindowFlags_     \/\/ Flags: for Begin(), BeginChild()
 */
export type ImGuiWindowFlags = number;
/**
 * \/\/ A single decoded U32 character\/code point. We encode them as multi bytes UTF-8 when used in strings.
 */
export type ImWchar32 = number;
/**
 * \/\/ A single decoded U16 character\/code point. We encode them as multi bytes UTF-8 when used in strings.
 */
export type ImWchar16 = number;
/**
 * \/\/ Multi-Selection item index or identifier when using BeginMultiSelect()
 * \/\/ - Used by SetNextItemSelectionUserData() + and inside ImGuiMultiSelectIO structure.
 * \/\/ - Most users are likely to use this store an item INDEX but this may be used to store a POINTER\/ID as well. Read comments near ImGuiMultiSelectIO for details.
 */
export type ImGuiSelectionUserData = ImS64;
export type ImGuiInputTextCallback = (data: ImGuiInputTextCallbackData) => number;
export type ImGuiSizeCallback = (data: ImGuiSizeCallbackData) => void;
/**
 * \/\/ Default: store up to 64-bits (any pointer or integer). A majority of backends are ok with that.
 */
export type ImTextureID = ImU64;
export type ImDrawCallback = (parent_list: ImDrawList, cmd: ImDrawCmd) => void;
/**
 * \/\/ An opaque identifier to a rectangle in the atlas. -1 when invalid.
 * \/\/ The rectangle may move and UV may be invalidated, use GetCustomRect() to retrieve it.
 */
export type ImFontAtlasRectId = number;
export type ImWchar = number;
export declare class ImVec2 extends ValueStruct {
    x: number;
    y: number;
    constructor(x: number, y: number);
    static From(obj: {
        x: number;
        y: number;
    }): ImVec2;
}
/**
 * ImVec4: 4D vector used to store clipping rectangles, colors etc. [Compile-time configurable type]
 */
export declare class ImVec4 extends ValueStruct {
    x: number;
    y: number;
    z: number;
    w: number;
    constructor(x: number, y: number, z: number, w: number);
    static From(obj: {
        x: number;
        y: number;
        z: number;
        w: number;
    }): ImVec4;
}
export declare class ImTextureRef extends ValueStruct {
    _TexID: ImTextureID;
    constructor(_TexID: ImTextureID);
    static From(obj: {
        _TexID: ImTextureID;
    }): ImTextureRef;
} /**
 * \/\/ Data shared among multiple draw lists (typically owned by parent ImGui context, but you may create one yourself)
 */
export declare class ImDrawListSharedData extends ReferenceStruct {
}
/**
 * \/\/ Opaque storage for building a ImFontAtlas
 */
export declare class ImFontAtlasBuilder extends ReferenceStruct {
}
/**
 * \/\/ Opaque interface to a font loading backend (stb_truetype, FreeType etc.).
 */
export declare class ImFontLoader extends ReferenceStruct {
}
/**
 * \/\/ Dear ImGui context (opaque structure, unless including imgui_internal.h)
 */
export declare class ImGuiContext extends ReferenceStruct {
}
/**
 * \/\/ Sorting specifications for a table (often handling sort specs for a single column, occasionally more)
 * \/\/ Obtained by calling TableGetSortSpecs().
 * \/\/ When 'SpecsDirty == true' you can sort your data. It will be true with sorting specs have changed since last call, or the first time.
 * \/\/ Make sure to set 'SpecsDirty = false' after sorting, else you may wastefully sort your data every frame!
 */
export declare class ImGuiTableSortSpecs extends ReferenceStruct {
    /**
     * \/\/ Pointer to sort spec array.
     */
    get Specs(): ImGuiTableColumnSortSpecs;
    set Specs(v: ImGuiTableColumnSortSpecs);
    /**
     * \/\/ Sort spec count. Most often 1. May be > 1 when ImGuiTableFlags_SortMulti is enabled. May be == 0 when ImGuiTableFlags_SortTristate is enabled.
     */
    get SpecsCount(): number;
    set SpecsCount(v: number);
    /**
     * \/\/ Set to true when specs have changed since last time! Use this to sort again, then clear the flag.
     */
    get SpecsDirty(): boolean;
    set SpecsDirty(v: boolean);
}
/**
 * \/\/ Sorting specification for one column of a table (sizeof == 12 bytes)
 */
export declare class ImGuiTableColumnSortSpecs extends ReferenceStruct {
    /**
     * \/\/ User id of the column (if specified by a TableSetupColumn() call)
     */
    get ColumnUserID(): ImGuiID;
    set ColumnUserID(v: ImGuiID);
    /**
     * \/\/ Index of the column
     */
    get ColumnIndex(): ImS16;
    set ColumnIndex(v: ImS16);
    /**
     * \/\/ Index within parent ImGuiTableSortSpecs (always stored in order starting from 0, tables sorted on a single criteria will always have a 0 here)
     */
    get SortOrder(): ImS16;
    set SortOrder(v: ImS16);
    /**
     * \/\/ ImGuiSortDirection_Ascending or ImGuiSortDirection_Descending
     */
    get SortDirection(): ImGuiSortDirection;
    set SortDirection(v: ImGuiSortDirection);
}
export declare class ImGuiStyle extends ReferenceStruct {
    /**
     * \/\/ Current base font size before external global factors are applied. Use PushFont(NULL, size) to modify. Use ImGui::GetFontSize() to obtain scaled value.
     */
    get FontSizeBase(): number;
    set FontSizeBase(v: number);
    /**
     * \/\/ Main global scale factor. May be set by application once, or exposed to end-user.
     */
    get FontScaleMain(): number;
    set FontScaleMain(v: number);
    /**
     * \/\/ Additional global scale factor from viewport\/monitor contents scale. In docking branch: when io.ConfigDpiScaleFonts is enabled, this is automatically overwritten when changing monitor DPI.
     */
    get FontScaleDpi(): number;
    set FontScaleDpi(v: number);
    /**
     * \/\/ Global alpha applies to everything in Dear ImGui.
     */
    get Alpha(): number;
    set Alpha(v: number);
    /**
     * \/\/ Additional alpha multiplier applied by BeginDisabled(). Multiply over current value of Alpha.
     */
    get DisabledAlpha(): number;
    set DisabledAlpha(v: number);
    /**
     * \/\/ Padding within a window.
     */
    get WindowPadding(): ImVec2;
    set WindowPadding(v: ImVec2);
    /**
     * \/\/ Radius of window corners rounding. Set to 0.0f to have rectangular windows. Large values tend to lead to variety of artifacts and are not recommended.
     */
    get WindowRounding(): number;
    set WindowRounding(v: number);
    /**
     * \/\/ Thickness of border around windows. Generally set to 0.0f or 1.0f. (Other values are not well tested and more CPU\/GPU costly).
     */
    get WindowBorderSize(): number;
    set WindowBorderSize(v: number);
    /**
     * \/\/ Hit-testing extent outside\/inside resizing border. Also extend determination of hovered window. Generally meaningfully larger than WindowBorderSize to make it easy to reach borders.
     */
    get WindowBorderHoverPadding(): number;
    set WindowBorderHoverPadding(v: number);
    /**
     * \/\/ Minimum window size. This is a global setting. If you want to constrain individual windows, use SetNextWindowSizeConstraints().
     */
    get WindowMinSize(): ImVec2;
    set WindowMinSize(v: ImVec2);
    /**
     * \/\/ Alignment for title bar text. Defaults to (0.0f,0.5f) for left-aligned,vertically centered.
     */
    get WindowTitleAlign(): ImVec2;
    set WindowTitleAlign(v: ImVec2);
    /**
     * \/\/ Side of the collapsing\/docking button in the title bar (None\/Left\/Right). Defaults to ImGuiDir_Left.
     */
    get WindowMenuButtonPosition(): ImGuiDir;
    set WindowMenuButtonPosition(v: ImGuiDir);
    /**
     * \/\/ Radius of child window corners rounding. Set to 0.0f to have rectangular windows.
     */
    get ChildRounding(): number;
    set ChildRounding(v: number);
    /**
     * \/\/ Thickness of border around child windows. Generally set to 0.0f or 1.0f. (Other values are not well tested and more CPU\/GPU costly).
     */
    get ChildBorderSize(): number;
    set ChildBorderSize(v: number);
    /**
     * \/\/ Radius of popup window corners rounding. (Note that tooltip windows use WindowRounding)
     */
    get PopupRounding(): number;
    set PopupRounding(v: number);
    /**
     * \/\/ Thickness of border around popup\/tooltip windows. Generally set to 0.0f or 1.0f. (Other values are not well tested and more CPU\/GPU costly).
     */
    get PopupBorderSize(): number;
    set PopupBorderSize(v: number);
    /**
     * \/\/ Padding within a framed rectangle (used by most widgets).
     */
    get FramePadding(): ImVec2;
    set FramePadding(v: ImVec2);
    /**
     * \/\/ Radius of frame corners rounding. Set to 0.0f to have rectangular frame (used by most widgets).
     */
    get FrameRounding(): number;
    set FrameRounding(v: number);
    /**
     * \/\/ Thickness of border around frames. Generally set to 0.0f or 1.0f. (Other values are not well tested and more CPU\/GPU costly).
     */
    get FrameBorderSize(): number;
    set FrameBorderSize(v: number);
    /**
     * \/\/ Horizontal and vertical spacing between widgets\/lines.
     */
    get ItemSpacing(): ImVec2;
    set ItemSpacing(v: ImVec2);
    /**
     * \/\/ Horizontal and vertical spacing between within elements of a composed widget (e.g. a slider and its label).
     */
    get ItemInnerSpacing(): ImVec2;
    set ItemInnerSpacing(v: ImVec2);
    /**
     * \/\/ Padding within a table cell. Cellpadding.x is locked for entire table. CellPadding.y may be altered between different rows.
     */
    get CellPadding(): ImVec2;
    set CellPadding(v: ImVec2);
    /**
     * \/\/ Expand reactive bounding box for touch-based system where touch position is not accurate enough. Unfortunately we don't sort widgets so priority on overlap will always be given to the first widget. So don't grow this too much!
     */
    get TouchExtraPadding(): ImVec2;
    set TouchExtraPadding(v: ImVec2);
    /**
     * \/\/ Horizontal indentation when e.g. entering a tree node. Generally == (FontSize + FramePadding.x*2).
     */
    get IndentSpacing(): number;
    set IndentSpacing(v: number);
    /**
     * \/\/ Minimum horizontal spacing between two columns. Preferably > (FramePadding.x + 1).
     */
    get ColumnsMinSpacing(): number;
    set ColumnsMinSpacing(v: number);
    /**
     * \/\/ Width of the vertical scrollbar, Height of the horizontal scrollbar.
     */
    get ScrollbarSize(): number;
    set ScrollbarSize(v: number);
    /**
     * \/\/ Radius of grab corners for scrollbar.
     */
    get ScrollbarRounding(): number;
    set ScrollbarRounding(v: number);
    /**
     * \/\/ Padding of scrollbar grab within its frame (same for both axes).
     */
    get ScrollbarPadding(): number;
    set ScrollbarPadding(v: number);
    /**
     * \/\/ Minimum width\/height of a grab box for slider\/scrollbar.
     */
    get GrabMinSize(): number;
    set GrabMinSize(v: number);
    /**
     * \/\/ Radius of grabs corners rounding. Set to 0.0f to have rectangular slider grabs.
     */
    get GrabRounding(): number;
    set GrabRounding(v: number);
    /**
     * \/\/ The size in pixels of the dead-zone around zero on logarithmic sliders that cross zero.
     */
    get LogSliderDeadzone(): number;
    set LogSliderDeadzone(v: number);
    /**
     * \/\/ Rounding of Image() calls.
     */
    get ImageRounding(): number;
    set ImageRounding(v: number);
    /**
     * \/\/ Thickness of border around Image() calls.
     */
    get ImageBorderSize(): number;
    set ImageBorderSize(v: number);
    /**
     * \/\/ Radius of upper corners of a tab. Set to 0.0f to have rectangular tabs.
     */
    get TabRounding(): number;
    set TabRounding(v: number);
    /**
     * \/\/ Thickness of border around tabs.
     */
    get TabBorderSize(): number;
    set TabBorderSize(v: number);
    /**
     * \/\/ Minimum tab width, to make tabs larger than their contents. TabBar buttons are not affected.
     */
    get TabMinWidthBase(): number;
    set TabMinWidthBase(v: number);
    /**
     * \/\/ Minimum tab width after shrinking, when using ImGuiTabBarFlags_FittingPolicyMixed policy.
     */
    get TabMinWidthShrink(): number;
    set TabMinWidthShrink(v: number);
    /**
     * \/\/ -1: always visible. 0.0f: visible when hovered. >0.0f: visible when hovered if minimum width.
     */
    get TabCloseButtonMinWidthSelected(): number;
    set TabCloseButtonMinWidthSelected(v: number);
    /**
     * \/\/ -1: always visible. 0.0f: visible when hovered. >0.0f: visible when hovered if minimum width. FLT_MAX: never show close button when unselected.
     */
    get TabCloseButtonMinWidthUnselected(): number;
    set TabCloseButtonMinWidthUnselected(v: number);
    /**
     * \/\/ Thickness of tab-bar separator, which takes on the tab active color to denote focus.
     */
    get TabBarBorderSize(): number;
    set TabBarBorderSize(v: number);
    /**
     * \/\/ Thickness of tab-bar overline, which highlights the selected tab-bar.
     */
    get TabBarOverlineSize(): number;
    set TabBarOverlineSize(v: number);
    /**
     * \/\/ Angle of angled headers (supported values range from -50.0f degrees to +50.0f degrees).
     */
    get TableAngledHeadersAngle(): number;
    set TableAngledHeadersAngle(v: number);
    /**
     * \/\/ Alignment of angled headers within the cell
     */
    get TableAngledHeadersTextAlign(): ImVec2;
    set TableAngledHeadersTextAlign(v: ImVec2);
    /**
     * \/\/ Default way to draw lines connecting TreeNode hierarchy. ImGuiTreeNodeFlags_DrawLinesNone or ImGuiTreeNodeFlags_DrawLinesFull or ImGuiTreeNodeFlags_DrawLinesToNodes.
     */
    get TreeLinesFlags(): ImGuiTreeNodeFlags;
    set TreeLinesFlags(v: ImGuiTreeNodeFlags);
    /**
     * \/\/ Thickness of outlines when using ImGuiTreeNodeFlags_DrawLines.
     */
    get TreeLinesSize(): number;
    set TreeLinesSize(v: number);
    /**
     * \/\/ Radius of lines connecting child nodes to the vertical line.
     */
    get TreeLinesRounding(): number;
    set TreeLinesRounding(v: number);
    /**
     * \/\/ Radius of the drag and drop target frame.
     */
    get DragDropTargetRounding(): number;
    set DragDropTargetRounding(v: number);
    /**
     * \/\/ Thickness of the drag and drop target border.
     */
    get DragDropTargetBorderSize(): number;
    set DragDropTargetBorderSize(v: number);
    /**
     * \/\/ Size to expand the drag and drop target from actual target item size.
     */
    get DragDropTargetPadding(): number;
    set DragDropTargetPadding(v: number);
    /**
     * \/\/ Size of R\/G\/B\/A color markers for ColorEdit4() and for Drags\/Sliders when using ImGuiSliderFlags_ColorMarkers.
     */
    get ColorMarkerSize(): number;
    set ColorMarkerSize(v: number);
    /**
     * \/\/ Side of the color button in the ColorEdit4 widget (left\/right). Defaults to ImGuiDir_Right.
     */
    get ColorButtonPosition(): ImGuiDir;
    set ColorButtonPosition(v: ImGuiDir);
    /**
     * \/\/ Alignment of button text when button is larger than text. Defaults to (0.5f, 0.5f) (centered).
     */
    get ButtonTextAlign(): ImVec2;
    set ButtonTextAlign(v: ImVec2);
    /**
     * \/\/ Alignment of selectable text. Defaults to (0.0f, 0.0f) (top-left aligned). It's generally important to keep this left-aligned if you want to lay multiple items on a same line.
     */
    get SelectableTextAlign(): ImVec2;
    set SelectableTextAlign(v: ImVec2);
    /**
     * \/\/ Thickness of border in Separator()
     */
    get SeparatorSize(): number;
    set SeparatorSize(v: number);
    /**
     * \/\/ Thickness of border in SeparatorText()
     */
    get SeparatorTextBorderSize(): number;
    set SeparatorTextBorderSize(v: number);
    /**
     * \/\/ Alignment of text within the separator. Defaults to (0.0f, 0.5f) (left aligned, center).
     */
    get SeparatorTextAlign(): ImVec2;
    set SeparatorTextAlign(v: ImVec2);
    /**
     * \/\/ Horizontal offset of text from each edge of the separator + spacing on other axis. Generally small values. .y is recommended to be == FramePadding.y.
     */
    get SeparatorTextPadding(): ImVec2;
    set SeparatorTextPadding(v: ImVec2);
    /**
     * \/\/ Apply to regular windows: amount which we enforce to keep visible when moving near edges of your screen.
     */
    get DisplayWindowPadding(): ImVec2;
    set DisplayWindowPadding(v: ImVec2);
    /**
     * \/\/ Apply to every windows, menus, popups, tooltips: amount where we avoid displaying contents. Adjust if you cannot see the edges of your screen (e.g. on a TV where scaling has not been configured).
     */
    get DisplaySafeAreaPadding(): ImVec2;
    set DisplaySafeAreaPadding(v: ImVec2);
    /**
     * \/\/ Docking node has their own CloseButton() to close all docked windows.
     */
    get DockingNodeHasCloseButton(): boolean;
    set DockingNodeHasCloseButton(v: boolean);
    /**
     * \/\/ Thickness of resizing border between docked windows
     */
    get DockingSeparatorSize(): number;
    set DockingSeparatorSize(v: number);
    /**
     * \/\/ Scale software rendered mouse cursor (when io.MouseDrawCursor is enabled). We apply per-monitor DPI scaling over this scale. May be removed later.
     */
    get MouseCursorScale(): number;
    set MouseCursorScale(v: number);
    /**
     * \/\/ Enable anti-aliased lines\/borders. Disable if you are really tight on CPU\/GPU. Latched at the beginning of the frame (copied to ImDrawList).
     */
    get AntiAliasedLines(): boolean;
    set AntiAliasedLines(v: boolean);
    /**
     * \/\/ Enable anti-aliased lines\/borders using textures where possible. Require backend to render with bilinear filtering (NOT point\/nearest filtering). Latched at the beginning of the frame (copied to ImDrawList).
     */
    get AntiAliasedLinesUseTex(): boolean;
    set AntiAliasedLinesUseTex(v: boolean);
    /**
     * \/\/ Enable anti-aliased edges around filled shapes (rounded rectangles, circles, etc.). Disable if you are really tight on CPU\/GPU. Latched at the beginning of the frame (copied to ImDrawList).
     */
    get AntiAliasedFill(): boolean;
    set AntiAliasedFill(v: boolean);
    /**
     * \/\/ Tessellation tolerance when using PathBezierCurveTo() without a specific number of segments. Decrease for highly tessellated curves (higher quality, more polygons), increase to reduce quality.
     */
    get CurveTessellationTol(): number;
    set CurveTessellationTol(v: number);
    /**
     * \/\/ Maximum error (in pixels) allowed when using AddCircle()\/AddCircleFilled() or drawing rounded corner rectangles with no explicit segment count specified. Decrease for higher quality but more geometry.
     */
    get CircleTessellationMaxError(): number;
    set CircleTessellationMaxError(v: number);
    get Colors(): ImVec4[];
    set Colors(v: ImVec4[]);
    /**
     * \/\/ Delay for IsItemHovered(ImGuiHoveredFlags_Stationary). Time required to consider mouse stationary.
     */
    get HoverStationaryDelay(): number;
    set HoverStationaryDelay(v: number);
    /**
     * \/\/ Delay for IsItemHovered(ImGuiHoveredFlags_DelayShort). Usually used along with HoverStationaryDelay.
     */
    get HoverDelayShort(): number;
    set HoverDelayShort(v: number);
    /**
     * \/\/ Delay for IsItemHovered(ImGuiHoveredFlags_DelayNormal). "
     */
    get HoverDelayNormal(): number;
    set HoverDelayNormal(v: number);
    /**
     * \/\/ Default flags when using IsItemHovered(ImGuiHoveredFlags_ForTooltip) or BeginItemTooltip()\/SetItemTooltip() while using mouse.
     */
    get HoverFlagsForTooltipMouse(): ImGuiHoveredFlags;
    set HoverFlagsForTooltipMouse(v: ImGuiHoveredFlags);
    /**
     * \/\/ Default flags when using IsItemHovered(ImGuiHoveredFlags_ForTooltip) or BeginItemTooltip()\/SetItemTooltip() while using keyboard\/gamepad.
     */
    get HoverFlagsForTooltipNav(): ImGuiHoveredFlags;
    set HoverFlagsForTooltipNav(v: ImGuiHoveredFlags);
    /**
     * \/\/ Scale all spacing\/padding\/thickness values. Do not scale fonts.
     */
    ScaleAllSizes(scale_factor: number): void;
}
export declare class ImGuiIO extends ReferenceStruct {
    /**
     * \/\/ = 0              \/\/ See ImGuiConfigFlags_ enum. Set by user\/application. Keyboard\/Gamepad navigation options, etc.
     */
    get ConfigFlags(): ImGuiConfigFlags;
    set ConfigFlags(v: ImGuiConfigFlags);
    /**
     * \/\/ = 0              \/\/ See ImGuiBackendFlags_ enum. Set by backend (imgui_impl_xxx files or custom backend) to communicate features supported by the backend.
     */
    get BackendFlags(): ImGuiBackendFlags;
    set BackendFlags(v: ImGuiBackendFlags);
    /**
     * \/\/ <unset>          \/\/ Main display size, in pixels (== GetMainViewport()->Size). May change every frame.
     */
    get DisplaySize(): ImVec2;
    set DisplaySize(v: ImVec2);
    /**
     * \/\/ = (1, 1)         \/\/ Main display density. For retina display where window coordinates are different from framebuffer coordinates. This will affect font density + will end up in ImDrawData::FramebufferScale.
     */
    get DisplayFramebufferScale(): ImVec2;
    set DisplayFramebufferScale(v: ImVec2);
    /**
     * \/\/ = 1.0f\/60.0f     \/\/ Time elapsed since last frame, in seconds. May change every frame.
     */
    get DeltaTime(): number;
    set DeltaTime(v: number);
    /**
     * \/\/ = 5.0f           \/\/ Minimum time between saving positions\/sizes to .ini file, in seconds.
     */
    get IniSavingRate(): number;
    set IniSavingRate(v: number);
    /**
     * \/\/ = "imgui.ini"    \/\/ Path to .ini file (important: default "imgui.ini" is relative to current working dir!). Set NULL to disable automatic .ini loading\/saving or if you want to manually call LoadIniSettingsXXX() \/ SaveIniSettingsXXX() functions.
     */
    get IniFilename(): string;
    set IniFilename(v: string);
    /**
     * \/\/ = "imgui_log.txt"\/\/ Path to .log file (default parameter to ImGui::LogToFile when no file is specified).
     */
    get LogFilename(): string;
    set LogFilename(v: string);
    /**
     * \/\/ = NULL           \/\/ Store your own data.
     */
    get UserData(): any;
    set UserData(v: any);
    /**
     * \/\/ <auto>           \/\/ Font atlas: load, rasterize and pack one or more fonts into a single texture.
     */
    get Fonts(): ImFontAtlas;
    set Fonts(v: ImFontAtlas);
    /**
     * \/\/ = NULL           \/\/ Font to use on NewFrame(). Use NULL to uses Fonts->Fonts[0].
     */
    get FontDefault(): ImFont;
    set FontDefault(v: ImFont);
    /**
     * \/\/ = false          \/\/ Allow user scaling text of individual window with Ctrl+Wheel.
     */
    get FontAllowUserScaling(): boolean;
    set FontAllowUserScaling(v: boolean);
    /**
     * \/\/ = false          \/\/ Swap Activate<>Cancel (A<>B) buttons, matching typical "Nintendo\/Japanese style" gamepad layout.
     */
    get ConfigNavSwapGamepadButtons(): boolean;
    set ConfigNavSwapGamepadButtons(v: boolean);
    /**
     * \/\/ = false          \/\/ Directional\/tabbing navigation teleports the mouse cursor. May be useful on TV\/console systems where moving a virtual mouse is difficult. Will update io.MousePos and set io.WantSetMousePos=true.
     */
    get ConfigNavMoveSetMousePos(): boolean;
    set ConfigNavMoveSetMousePos(v: boolean);
    /**
     * \/\/ = true           \/\/ Sets io.WantCaptureKeyboard when io.NavActive is set.
     */
    get ConfigNavCaptureKeyboard(): boolean;
    set ConfigNavCaptureKeyboard(v: boolean);
    /**
     * \/\/ = true           \/\/ Pressing Escape can clear focused item + navigation id\/highlight. Set to false if you want to always keep highlight on.
     */
    get ConfigNavEscapeClearFocusItem(): boolean;
    set ConfigNavEscapeClearFocusItem(v: boolean);
    /**
     * \/\/ = false          \/\/ Pressing Escape can clear focused window as well (super set of io.ConfigNavEscapeClearFocusItem).
     */
    get ConfigNavEscapeClearFocusWindow(): boolean;
    set ConfigNavEscapeClearFocusWindow(v: boolean);
    /**
     * \/\/ = true           \/\/ Using directional navigation key makes the cursor visible. Mouse click hides the cursor.
     */
    get ConfigNavCursorVisibleAuto(): boolean;
    set ConfigNavCursorVisibleAuto(v: boolean);
    /**
     * \/\/ = false          \/\/ Navigation cursor is always visible.
     */
    get ConfigNavCursorVisibleAlways(): boolean;
    set ConfigNavCursorVisibleAlways(v: boolean);
    /**
     * \/\/ = false          \/\/ Simplified docking mode: disable window splitting, so docking is limited to merging multiple windows together into tab-bars.
     */
    get ConfigDockingNoSplit(): boolean;
    set ConfigDockingNoSplit(v: boolean);
    /**
     * \/\/ = false          \/\/ Simplified docking mode: disable window merging into a same tab-bar, so docking is limited to splitting windows.
     */
    get ConfigDockingNoDockingOver(): boolean;
    set ConfigDockingNoDockingOver(v: boolean);
    /**
     * \/\/ = false          \/\/ Enable docking with holding Shift key (reduce visual noise, allows dropping in wider space)
     */
    get ConfigDockingWithShift(): boolean;
    set ConfigDockingWithShift(v: boolean);
    /**
     * \/\/ = false          \/\/ [BETA] [FIXME: This currently creates regression with auto-sizing and general overhead] Make every single floating window display within a docking node.
     */
    get ConfigDockingAlwaysTabBar(): boolean;
    set ConfigDockingAlwaysTabBar(v: boolean);
    /**
     * \/\/ = false          \/\/ [BETA] Make window or viewport transparent when docking and only display docking boxes on the target viewport. Useful if rendering of multiple viewport cannot be synced. Best used with ConfigViewportsNoAutoMerge.
     */
    get ConfigDockingTransparentPayload(): boolean;
    set ConfigDockingTransparentPayload(v: boolean);
    /**
     * \/\/ = false;         \/\/ Set to make all floating imgui windows always create their own viewport. Otherwise, they are merged into the main host viewports when overlapping it. May also set ImGuiViewportFlags_NoAutoMerge on individual viewport.
     */
    get ConfigViewportsNoAutoMerge(): boolean;
    set ConfigViewportsNoAutoMerge(v: boolean);
    /**
     * \/\/ = false          \/\/ Disable default OS task bar icon flag for secondary viewports. When a viewport doesn't want a task bar icon, ImGuiViewportFlags_NoTaskBarIcon will be set on it.
     */
    get ConfigViewportsNoTaskBarIcon(): boolean;
    set ConfigViewportsNoTaskBarIcon(v: boolean);
    /**
     * \/\/ = true           \/\/ Disable default OS window decoration flag for secondary viewports. When a viewport doesn't want window decorations, ImGuiViewportFlags_NoDecoration will be set on it. Enabling decoration can create subsequent issues at OS levels (e.g. minimum window size).
     */
    get ConfigViewportsNoDecoration(): boolean;
    set ConfigViewportsNoDecoration(v: boolean);
    /**
     * \/\/ = true           \/\/ When false: set secondary viewports' ParentViewportId to main viewport ID by default. Expects the platform backend to setup a parent\/child relationship between the OS windows based on this value. Some backend may ignore this. Set to true if you want viewports to automatically be parent of main viewport, otherwise all viewports will be top-level OS windows.
     */
    get ConfigViewportsNoDefaultParent(): boolean;
    set ConfigViewportsNoDefaultParent(v: boolean);
    /**
     * \/\/= true \/\/ When a platform window is focused (e.g. using Alt+Tab, clicking Platform Title Bar), apply corresponding focus on imgui windows (may clear focus\/active id from imgui windows location in other platform windows). In principle this is better enabled but we provide an opt-out, because some Linux window managers tend to eagerly focus windows (e.g. on mouse hover, or even a simple window pos\/size change).
     */
    get ConfigViewportsPlatformFocusSetsImGuiFocus(): boolean;
    set ConfigViewportsPlatformFocusSetsImGuiFocus(v: boolean);
    /**
     * \/\/ = false          \/\/ [EXPERIMENTAL] Automatically overwrite style.FontScaleDpi when Monitor DPI changes. This will scale fonts but _NOT_ scale sizes\/padding for now.
     */
    get ConfigDpiScaleFonts(): boolean;
    set ConfigDpiScaleFonts(v: boolean);
    /**
     * \/\/ = false          \/\/ [EXPERIMENTAL] Scale Dear ImGui and Platform Windows when Monitor DPI changes.
     */
    get ConfigDpiScaleViewports(): boolean;
    set ConfigDpiScaleViewports(v: boolean);
    /**
     * \/\/ = false          \/\/ Request ImGui to draw a mouse cursor for you (if you are on a platform without a mouse cursor). Cannot be easily renamed to 'io.ConfigXXX' because this is frequently used by backend implementations.
     */
    get MouseDrawCursor(): boolean;
    set MouseDrawCursor(v: boolean);
    /**
     * \/\/ = defined(__APPLE__) \/\/ Swap Cmd<>Ctrl keys + OS X style text editing cursor movement using Alt instead of Ctrl, Shortcuts using Cmd\/Super instead of Ctrl, Line\/Text Start and End using Cmd+Arrows instead of Home\/End, Double click selects by word instead of selecting whole text, Multi-selection in lists uses Cmd\/Super instead of Ctrl.
     */
    get ConfigMacOSXBehaviors(): boolean;
    set ConfigMacOSXBehaviors(v: boolean);
    /**
     * \/\/ = true           \/\/ Enable input queue trickling: some types of events submitted during the same frame (e.g. button down + up) will be spread over multiple frames, improving interactions with low framerates.
     */
    get ConfigInputTrickleEventQueue(): boolean;
    set ConfigInputTrickleEventQueue(v: boolean);
    /**
     * \/\/ = true           \/\/ Enable blinking cursor (optional as some users consider it to be distracting).
     */
    get ConfigInputTextCursorBlink(): boolean;
    set ConfigInputTextCursorBlink(v: boolean);
    /**
     * \/\/ = false          \/\/ [BETA] Pressing Enter will reactivate item and select all text (single-line only).
     */
    get ConfigInputTextEnterKeepActive(): boolean;
    set ConfigInputTextEnterKeepActive(v: boolean);
    /**
     * \/\/ = false          \/\/ [BETA] Enable turning DragXXX widgets into text input with a simple mouse click-release (without moving). Not desirable on devices without a keyboard.
     */
    get ConfigDragClickToInputText(): boolean;
    set ConfigDragClickToInputText(v: boolean);
    /**
     * \/\/ = true           \/\/ Enable resizing of windows from their edges and from the lower-left corner. This requires ImGuiBackendFlags_HasMouseCursors for better mouse cursor feedback. (This used to be a per-window ImGuiWindowFlags_ResizeFromAnySide flag)
     */
    get ConfigWindowsResizeFromEdges(): boolean;
    set ConfigWindowsResizeFromEdges(v: boolean);
    /**
     * \/\/ = false      \/\/ Enable allowing to move windows only when clicking on their title bar. Does not apply to windows without a title bar.
     */
    get ConfigWindowsMoveFromTitleBarOnly(): boolean;
    set ConfigWindowsMoveFromTitleBarOnly(v: boolean);
    /**
     * \/\/ = false      \/\/ [EXPERIMENTAL] Ctrl+C copy the contents of focused window into the clipboard. Experimental because: (1) has known issues with nested Begin\/End pairs (2) text output quality varies (3) text output is in submission order rather than spatial order.
     */
    get ConfigWindowsCopyContentsWithCtrlC(): boolean;
    set ConfigWindowsCopyContentsWithCtrlC(v: boolean);
    /**
     * \/\/ = true           \/\/ Enable scrolling page by page when clicking outside the scrollbar grab. When disabled, always scroll to clicked location. When enabled, Shift+Click scrolls to clicked location.
     */
    get ConfigScrollbarScrollByPage(): boolean;
    set ConfigScrollbarScrollByPage(v: boolean);
    /**
     * \/\/ = 60.0f          \/\/ Timer (in seconds) to free transient windows\/tables memory buffers when unused. Set to -1.0f to disable.
     */
    get ConfigMemoryCompactTimer(): number;
    set ConfigMemoryCompactTimer(v: number);
    /**
     * \/\/ = 0.30f          \/\/ Time for a double-click, in seconds.
     */
    get MouseDoubleClickTime(): number;
    set MouseDoubleClickTime(v: number);
    /**
     * \/\/ = 6.0f           \/\/ Distance threshold to stay in to validate a double-click, in pixels.
     */
    get MouseDoubleClickMaxDist(): number;
    set MouseDoubleClickMaxDist(v: number);
    /**
     * \/\/ = 6.0f           \/\/ Distance threshold before considering we are dragging.
     */
    get MouseDragThreshold(): number;
    set MouseDragThreshold(v: number);
    /**
     * \/\/ = 0.275f         \/\/ When holding a key\/button, time before it starts repeating, in seconds (for buttons in Repeat mode, etc.).
     */
    get KeyRepeatDelay(): number;
    set KeyRepeatDelay(v: number);
    /**
     * \/\/ = 0.050f         \/\/ When holding a key\/button, rate at which it repeats, in seconds.
     */
    get KeyRepeatRate(): number;
    set KeyRepeatRate(v: number);
    /**
     * \/\/ = true       \/\/ Enable error recovery support. Some errors won't be detected and lead to direct crashes if recovery is disabled.
     */
    get ConfigErrorRecovery(): boolean;
    set ConfigErrorRecovery(v: boolean);
    /**
     * \/\/ = true       \/\/ Enable asserts on recoverable error. By default call IM_ASSERT() when returning from a failing IM_ASSERT_USER_ERROR()
     */
    get ConfigErrorRecoveryEnableAssert(): boolean;
    set ConfigErrorRecoveryEnableAssert(v: boolean);
    /**
     * \/\/ = true       \/\/ Enable debug log output on recoverable errors.
     */
    get ConfigErrorRecoveryEnableDebugLog(): boolean;
    set ConfigErrorRecoveryEnableDebugLog(v: boolean);
    /**
     * \/\/ = true       \/\/ Enable tooltip on recoverable errors. The tooltip include a way to enable asserts if they were disabled.
     */
    get ConfigErrorRecoveryEnableTooltip(): boolean;
    set ConfigErrorRecoveryEnableTooltip(v: boolean);
    /**
     * \/\/ = false          \/\/ Enable various tools calling IM_DEBUG_BREAK().
     */
    get ConfigDebugIsDebuggerPresent(): boolean;
    set ConfigDebugIsDebuggerPresent(v: boolean);
    /**
     * \/\/ = true           \/\/ Highlight and show an error message popup when multiple items have conflicting identifiers.
     */
    get ConfigDebugHighlightIdConflicts(): boolean;
    set ConfigDebugHighlightIdConflicts(v: boolean);
    /**
     * \/\/=true \/\/ Show "Item Picker" button in aforementioned popup.
     */
    get ConfigDebugHighlightIdConflictsShowItemPicker(): boolean;
    set ConfigDebugHighlightIdConflictsShowItemPicker(v: boolean);
    /**
     * \/\/ = false          \/\/ First-time calls to Begin()\/BeginChild() will return false. NEEDS TO BE SET AT APPLICATION BOOT TIME if you don't want to miss windows.
     */
    get ConfigDebugBeginReturnValueOnce(): boolean;
    set ConfigDebugBeginReturnValueOnce(v: boolean);
    /**
     * \/\/ = false          \/\/ Some calls to Begin()\/BeginChild() will return false. Will cycle through window depths then repeat. Suggested use: add "io.ConfigDebugBeginReturnValue = io.KeyShift" in your main loop then occasionally press SHIFT. Windows should be flickering while running.
     */
    get ConfigDebugBeginReturnValueLoop(): boolean;
    set ConfigDebugBeginReturnValueLoop(v: boolean);
    /**
     * \/\/ = false          \/\/ Ignore io.AddFocusEvent(false), consequently not calling io.ClearInputKeys()\/io.ClearInputMouse() in input processing.
     */
    get ConfigDebugIgnoreFocusLoss(): boolean;
    set ConfigDebugIgnoreFocusLoss(v: boolean);
    /**
     * \/\/ = false          \/\/ Save .ini data with extra comments (particularly helpful for Docking, but makes saving slower)
     */
    get ConfigDebugIniSettings(): boolean;
    set ConfigDebugIniSettings(v: boolean);
    /**
     * \/\/ = NULL
     */
    get BackendPlatformName(): string;
    set BackendPlatformName(v: string);
    /**
     * \/\/ = NULL
     */
    get BackendRendererName(): string;
    set BackendRendererName(v: string);
    /**
     * \/\/ = NULL           \/\/ User data for platform backend
     */
    get BackendPlatformUserData(): any;
    set BackendPlatformUserData(v: any);
    /**
     * \/\/ = NULL           \/\/ User data for renderer backend
     */
    get BackendRendererUserData(): any;
    set BackendRendererUserData(v: any);
    /**
     * \/\/ = NULL           \/\/ User data for non C++ programming language backend
     */
    get BackendLanguageUserData(): any;
    set BackendLanguageUserData(v: any);
    /**
     * \/\/ Set when Dear ImGui will use mouse inputs, in this case do not dispatch them to your main game\/application (either way, always pass on mouse inputs to imgui). (e.g. unclicked mouse is hovering over an imgui window, widget is active, mouse was clicked over an imgui window, etc.).
     */
    get WantCaptureMouse(): boolean;
    set WantCaptureMouse(v: boolean);
    /**
     * \/\/ Set when Dear ImGui will use keyboard inputs, in this case do not dispatch them to your main game\/application (either way, always pass keyboard inputs to imgui). (e.g. InputText active, or an imgui window is focused and navigation is enabled, etc.).
     */
    get WantCaptureKeyboard(): boolean;
    set WantCaptureKeyboard(v: boolean);
    /**
     * \/\/ Mobile\/console: when set, you may display an on-screen keyboard. This is set by Dear ImGui when it wants textual keyboard input to happen (e.g. when a InputText widget is active).
     */
    get WantTextInput(): boolean;
    set WantTextInput(v: boolean);
    /**
     * \/\/ MousePos has been altered, backend should reposition mouse on next frame. Rarely used! Set only when io.ConfigNavMoveSetMousePos is enabled.
     */
    get WantSetMousePos(): boolean;
    set WantSetMousePos(v: boolean);
    /**
     * \/\/ When manual .ini load\/save is active (io.IniFilename == NULL), this will be set to notify your application that you can call SaveIniSettingsToMemory() and save yourself. Important: clear io.WantSaveIniSettings yourself after saving!
     */
    get WantSaveIniSettings(): boolean;
    set WantSaveIniSettings(v: boolean);
    /**
     * \/\/ Keyboard\/Gamepad navigation is currently allowed (will handle ImGuiKey_NavXXX events) = a window is focused and it doesn't use the ImGuiWindowFlags_NoNavInputs flag.
     */
    get NavActive(): boolean;
    set NavActive(v: boolean);
    /**
     * \/\/ Keyboard\/Gamepad navigation highlight is visible and allowed (will handle ImGuiKey_NavXXX events).
     */
    get NavVisible(): boolean;
    set NavVisible(v: boolean);
    /**
     * \/\/ Estimate of application framerate (rolling average over 60 frames, based on io.DeltaTime), in frame per second. Solely for convenience. Slow applications may not want to use a moving average or may want to reset underlying buffers occasionally.
     */
    get Framerate(): number;
    set Framerate(v: number);
    /**
     * \/\/ Vertices output during last call to Render()
     */
    get MetricsRenderVertices(): number;
    set MetricsRenderVertices(v: number);
    /**
     * \/\/ Indices output during last call to Render() = number of triangles * 3
     */
    get MetricsRenderIndices(): number;
    set MetricsRenderIndices(v: number);
    /**
     * \/\/ Number of visible windows
     */
    get MetricsRenderWindows(): number;
    set MetricsRenderWindows(v: number);
    /**
     * \/\/ Number of active windows
     */
    get MetricsActiveWindows(): number;
    set MetricsActiveWindows(v: number);
    /**
     * \/\/ Mouse delta. Note that this is zero if either current or previous position are invalid (-FLT_MAX,-FLT_MAX), so a disappearing\/reappearing mouse won't have a huge delta.
     */
    get MouseDelta(): ImVec2;
    set MouseDelta(v: ImVec2);
    /**
     * \/\/ Parent UI context (needs to be set explicitly by parent).
     */
    get Ctx(): ImGuiContext;
    set Ctx(v: ImGuiContext);
    /**
     * \/\/ Mouse position, in pixels. Set to ImVec2(-FLT_MAX, -FLT_MAX) if mouse is unavailable (on another screen, etc.)
     */
    get MousePos(): ImVec2;
    set MousePos(v: ImVec2);
    /**
     * \/\/ Mouse wheel Vertical: 1 unit scrolls about 5 lines text. >0 scrolls Up, <0 scrolls Down. Hold Shift to turn vertical scroll into horizontal scroll.
     */
    get MouseWheel(): number;
    set MouseWheel(v: number);
    /**
     * \/\/ Mouse wheel Horizontal. >0 scrolls Left, <0 scrolls Right. Most users don't have a mouse with a horizontal wheel, may not be filled by all backends.
     */
    get MouseWheelH(): number;
    set MouseWheelH(v: number);
    /**
     * \/\/ Mouse actual input peripheral (Mouse\/TouchScreen\/Pen).
     */
    get MouseSource(): ImGuiMouseSource;
    set MouseSource(v: ImGuiMouseSource);
    /**
     * \/\/ (Optional) Modify using io.AddMouseViewportEvent(). With multi-viewports: viewport the OS mouse is hovering. If possible _IGNORING_ viewports with the ImGuiViewportFlags_NoInputs flag is much better (few backends can handle that). Set io.BackendFlags |= ImGuiBackendFlags_HasMouseHoveredViewport if you can provide this info. If you don't imgui will infer the value using the rectangles and last focused time of the viewports it knows about (ignoring other OS windows).
     */
    get MouseHoveredViewport(): ImGuiID;
    set MouseHoveredViewport(v: ImGuiID);
    /**
     * \/\/ Keyboard modifier down: Ctrl (non-macOS), Cmd (macOS)
     */
    get KeyCtrl(): boolean;
    set KeyCtrl(v: boolean);
    /**
     * \/\/ Keyboard modifier down: Shift
     */
    get KeyShift(): boolean;
    set KeyShift(v: boolean);
    /**
     * \/\/ Keyboard modifier down: Alt
     */
    get KeyAlt(): boolean;
    set KeyAlt(v: boolean);
    /**
     * \/\/ Keyboard modifier down: Windows\/Super (non-macOS), Ctrl (macOS)
     */
    get KeySuper(): boolean;
    set KeySuper(v: boolean);
    /**
     * \/\/ Key mods flags (any of ImGuiMod_Ctrl\/ImGuiMod_Shift\/ImGuiMod_Alt\/ImGuiMod_Super flags, same as io.KeyCtrl\/KeyShift\/KeyAlt\/KeySuper but merged into flags). Read-only, updated by NewFrame()
     */
    get KeyMods(): ImGuiKeyChord;
    set KeyMods(v: ImGuiKeyChord);
    /**
     * \/\/ Alternative to WantCaptureMouse: (WantCaptureMouse == true && WantCaptureMouseUnlessPopupClose == false) when a click over void is expected to close a popup.
     */
    get WantCaptureMouseUnlessPopupClose(): boolean;
    set WantCaptureMouseUnlessPopupClose(v: boolean);
    /**
     * \/\/ Previous mouse position (note that MouseDelta is not necessary == MousePos-MousePosPrev, in case either position is invalid)
     */
    get MousePosPrev(): ImVec2;
    set MousePosPrev(v: ImVec2);
    /**
     * \/\/ On a non-Mac system, holding Shift requests WheelY to perform the equivalent of a WheelX event. On a Mac system this is already enforced by the system.
     */
    get MouseWheelRequestAxisSwap(): boolean;
    set MouseWheelRequestAxisSwap(v: boolean);
    /**
     * \/\/ (OSX) Set to true when the current click was a Ctrl+Click that spawned a simulated right click
     */
    get MouseCtrlLeftAsRightClick(): boolean;
    set MouseCtrlLeftAsRightClick(v: boolean);
    /**
     * \/\/ Touch\/Pen pressure (0.0f to 1.0f, should be >0.0f only when MouseDown[0] == true). Helper storage currently unused by Dear ImGui.
     */
    get PenPressure(): number;
    set PenPressure(v: number);
    /**
     * \/\/ Only modify via AddFocusEvent()
     */
    get AppFocusLost(): boolean;
    set AppFocusLost(v: boolean);
    /**
     * \/\/ Only modify via SetAppAcceptingEvents()
     */
    get AppAcceptingEvents(): boolean;
    set AppAcceptingEvents(v: boolean);
    /**
     * \/\/ For AddInputCharacterUTF16()
     */
    get InputQueueSurrogate(): ImWchar16;
    set InputQueueSurrogate(v: ImWchar16);
    /**
     * \/\/ Queue a new key down\/up event. Key should be "translated" (as in, generally ImGuiKey_A matches the key end-user would use to emit an 'A' character)
     */
    AddKeyEvent(key: ImGuiKey, down: boolean): void;
    /**
     * \/\/ Queue a new key down\/up event for analog values (e.g. ImGuiKey_Gamepad_ values). Dead-zones should be handled by the backend.
     */
    AddKeyAnalogEvent(key: ImGuiKey, down: boolean, v: number): void;
    /**
     * \/\/ Queue a mouse position update. Use -FLT_MAX,-FLT_MAX to signify no mouse (e.g. app not focused and not hovered)
     */
    AddMousePosEvent(x: number, y: number): void;
    /**
     * \/\/ Queue a mouse button change
     */
    AddMouseButtonEvent(button: number, down: boolean): void;
    /**
     * \/\/ Queue a mouse wheel update. wheel_y<0: scroll down, wheel_y>0: scroll up, wheel_x<0: scroll right, wheel_x>0: scroll left.
     */
    AddMouseWheelEvent(wheel_x: number, wheel_y: number): void;
    /**
     * \/\/ Queue a mouse source change (Mouse\/TouchScreen\/Pen)
     */
    AddMouseSourceEvent(source: ImGuiMouseSource): void;
    /**
     * \/\/ Queue a mouse hovered viewport. Requires backend to set ImGuiBackendFlags_HasMouseHoveredViewport to call this (for multi-viewport support).
     */
    AddMouseViewportEvent(id: ImGuiID): void;
    /**
     * \/\/ Queue a gain\/loss of focus for the application (generally based on OS\/platform focus of your window)
     */
    AddFocusEvent(focused: boolean): void;
    /**
     * \/\/ Queue a new character input
     */
    AddInputCharacter(c: number): void;
    /**
     * \/\/ Queue a new character input from a UTF-16 character, it can be a surrogate
     */
    AddInputCharacterUTF16(c: ImWchar16): void;
    /**
     * \/\/ Queue a new characters input from a UTF-8 string
     */
    AddInputCharactersUTF8(str: string): void;
    /**
     * \/\/ [Optional] Specify index for legacy <1.87 IsKeyXXX() functions with native indices + specify native keycode, scancode.
     */
    SetKeyEventNativeData(key: ImGuiKey, native_keycode: number, native_scancode: number, native_legacy_index?: number): void;
    /**
     * \/\/ Set master flag for accepting key\/mouse\/text events (default to true). Useful if you have native dialog boxes that are interrupting your application loop\/refresh, and you want to disable events being queued while your app is frozen.
     */
    SetAppAcceptingEvents(accepting_events: boolean): void;
    /**
     * \/\/ Clear all incoming events.
     */
    ClearEventsQueue(): void;
    /**
     * \/\/ Clear current keyboard\/gamepad state + current frame text input buffer. Equivalent to releasing all keys\/buttons.
     */
    ClearInputKeys(): void;
    /**
     * \/\/ Clear current mouse state.
     */
    ClearInputMouse(): void;
}
/**
 * \/\/ Shared state of InputText(), passed as an argument to your callback when a ImGuiInputTextFlags_Callback* flag is used.
 * \/\/ The callback function should return 0 by default.
 * \/\/ Callbacks (follow a flag name and see comments in ImGuiInputTextFlags_ declarations for more details)
 * \/\/ - ImGuiInputTextFlags_CallbackEdit:        Callback on buffer edit. Note that InputText() already returns true on edit + you can always use IsItemEdited(). The callback is useful to manipulate the underlying buffer while focus is active.
 * \/\/ - ImGuiInputTextFlags_CallbackAlways:      Callback on each iteration
 * \/\/ - ImGuiInputTextFlags_CallbackCompletion:  Callback on pressing TAB
 * \/\/ - ImGuiInputTextFlags_CallbackHistory:     Callback on pressing Up\/Down arrows
 * \/\/ - ImGuiInputTextFlags_CallbackCharFilter:  Callback on character inputs to replace or discard them. Modify 'EventChar' to replace or discard, or return 1 in callback to discard.
 * \/\/ - ImGuiInputTextFlags_CallbackResize:      Callback on buffer capacity changes request (beyond 'buf_size' parameter value), allowing the string to grow.
 */
export declare class ImGuiInputTextCallbackData extends ReferenceStruct {
    /**
     * \/\/ Parent UI context
     */
    get Ctx(): ImGuiContext;
    set Ctx(v: ImGuiContext);
    /**
     * \/\/ One ImGuiInputTextFlags_Callback*    \/\/ Read-only
     */
    get EventFlag(): ImGuiInputTextFlags;
    set EventFlag(v: ImGuiInputTextFlags);
    /**
     * \/\/ What user passed to InputText()      \/\/ Read-only
     */
    get Flags(): ImGuiInputTextFlags;
    set Flags(v: ImGuiInputTextFlags);
    /**
     * \/\/ What user passed to InputText()      \/\/ Read-only
     */
    get UserData(): any;
    set UserData(v: any);
    /**
     * \/\/ Widget ID                             \/\/ Read-only
     */
    get ID(): ImGuiID;
    set ID(v: ImGuiID);
    /**
     * \/\/ Key pressed (Up\/Down\/TAB)            \/\/ Read-only    \/\/ [Completion,History]
     */
    get EventKey(): ImGuiKey;
    set EventKey(v: ImGuiKey);
    /**
     * \/\/ Character input                      \/\/ Read-write   \/\/ [CharFilter] Replace character with another one, or set to zero to drop. return 1 is equivalent to setting EventChar=0;
     */
    get EventChar(): ImWchar;
    set EventChar(v: ImWchar);
    /**
     * \/\/ Input field just got activated       \/\/ Read-only    \/\/ [Always]
     */
    get EventActivated(): boolean;
    set EventActivated(v: boolean);
    /**
     * \/\/ Set if you modify Buf\/BufTextLen!    \/\/ Write        \/\/ [Completion,History,Always]
     */
    get BufDirty(): boolean;
    set BufDirty(v: boolean);
    /**
     * \/\/ Text buffer                          \/\/ Read-write   \/\/ [Resize] Can replace pointer \/ [Completion,History,Always] Only write to pointed data, don't replace the actual pointer!
     */
    get Buf(): string;
    set Buf(v: string);
    /**
     * \/\/ Text length (in bytes)               \/\/ Read-write   \/\/ [Resize,Completion,History,Always] Exclude zero-terminator storage. In C land: == strlen(some_text), in C++ land: string.length()
     */
    get BufTextLen(): number;
    set BufTextLen(v: number);
    /**
     * \/\/ Buffer size (in bytes) = capacity+1  \/\/ Read-only    \/\/ [Resize,Completion,History,Always] Include zero-terminator storage. In C land: == ARRAYSIZE(my_char_array), in C++ land: string.capacity()+1
     */
    get BufSize(): number;
    set BufSize(v: number);
    /**
     * \/\/                                      \/\/ Read-write   \/\/ [Completion,History,Always]
     */
    get CursorPos(): number;
    set CursorPos(v: number);
    /**
     * \/\/                                      \/\/ Read-write   \/\/ [Completion,History,Always] == to SelectionEnd when no selection
     */
    get SelectionStart(): number;
    set SelectionStart(v: number);
    /**
     * \/\/                                      \/\/ Read-write   \/\/ [Completion,History,Always]
     */
    get SelectionEnd(): number;
    set SelectionEnd(v: number);
    DeleteChars(pos: number, bytes_count: number): void;
    InsertChars(pos: number, text: string, text_end?: string): void;
    SelectAll(): void;
    SetSelection(s: number, e: number): void;
    ClearSelection(): void;
    HasSelection(): boolean;
}
/**
 * \/\/ Resizing callback data to apply custom constraint. As enabled by SetNextWindowSizeConstraints(). Callback is called during the next Begin().
 * \/\/ NB: For basic min\/max size constraint on each axis you don't need to use the callback! The SetNextWindowSizeConstraints() parameters are enough.
 */
export declare class ImGuiSizeCallbackData extends ReferenceStruct {
    /**
     * \/\/ Read-only.   What user passed to SetNextWindowSizeConstraints(). Generally store an integer or float in here (need reinterpret_cast<>).
     */
    get UserData(): any;
    set UserData(v: any);
    /**
     * \/\/ Read-only.   Window position, for reference.
     */
    get Pos(): ImVec2;
    set Pos(v: ImVec2);
    /**
     * \/\/ Read-only.   Current window size.
     */
    get CurrentSize(): ImVec2;
    set CurrentSize(v: ImVec2);
    /**
     * \/\/ Read-write.  Desired size, based on user's mouse position. Write to this field to restrain resizing.
     */
    get DesiredSize(): ImVec2;
    set DesiredSize(v: ImVec2);
}
/**
 * \/\/ [ALPHA] Rarely used \/ very advanced uses only. Use with SetNextWindowClass() and DockSpace() functions.
 * \/\/ Important: the content of this class is still highly WIP and likely to change and be refactored
 * \/\/ before we stabilize Docking features. Please be mindful if using this.
 * \/\/ Provide hints:
 * \/\/ - To the platform backend via altered viewport flags (enable\/disable OS decoration, OS task bar icons, etc.)
 * \/\/ - To the platform backend for OS level parent\/child relationships of viewport.
 * \/\/ - To the docking system for various options and filtering.
 */
export declare class ImGuiWindowClass extends ReferenceStruct {
    /**
     * \/\/ User data. 0 = Default class (unclassed). Windows of different classes cannot be docked with each others.
     */
    get ClassId(): ImGuiID;
    set ClassId(v: ImGuiID);
    /**
     * \/\/ Hint for the platform backend. -1: use default. 0: request platform backend to not parent the platform. != 0: request platform backend to create a parent<>child relationship between the platform windows. Not conforming backends are free to e.g. parent every viewport to the main viewport or not.
     */
    get ParentViewportId(): ImGuiID;
    set ParentViewportId(v: ImGuiID);
    /**
     * \/\/ ID of parent window for shortcut focus route evaluation, e.g. Shortcut() call from Parent Window will succeed when this window is focused.
     */
    get FocusRouteParentWindowId(): ImGuiID;
    set FocusRouteParentWindowId(v: ImGuiID);
    /**
     * \/\/ Viewport flags to set when a window of this class owns a viewport. This allows you to enforce OS decoration or task bar icon, override the defaults on a per-window basis.
     */
    get ViewportFlagsOverrideSet(): ImGuiViewportFlags;
    set ViewportFlagsOverrideSet(v: ImGuiViewportFlags);
    /**
     * \/\/ Viewport flags to clear when a window of this class owns a viewport. This allows you to enforce OS decoration or task bar icon, override the defaults on a per-window basis.
     */
    get ViewportFlagsOverrideClear(): ImGuiViewportFlags;
    set ViewportFlagsOverrideClear(v: ImGuiViewportFlags);
    /**
     * \/\/ [EXPERIMENTAL] TabItem flags to set when a window of this class gets submitted into a dock node tab bar. May use with ImGuiTabItemFlags_Leading or ImGuiTabItemFlags_Trailing.
     */
    get TabItemFlagsOverrideSet(): ImGuiTabItemFlags;
    set TabItemFlagsOverrideSet(v: ImGuiTabItemFlags);
    /**
     * \/\/ [EXPERIMENTAL] Dock node flags to set when a window of this class is hosted by a dock node (it doesn't have to be selected!)
     */
    get DockNodeFlagsOverrideSet(): ImGuiDockNodeFlags;
    set DockNodeFlagsOverrideSet(v: ImGuiDockNodeFlags);
    /**
     * \/\/ Set to true to enforce single floating windows of this class always having their own docking node (equivalent of setting the global io.ConfigDockingAlwaysTabBar)
     */
    get DockingAlwaysTabBar(): boolean;
    set DockingAlwaysTabBar(v: boolean);
    /**
     * \/\/ Set to true to allow windows of this class to be docked\/merged with an unclassed window. \/\/ FIXME-DOCK: Move to DockNodeFlags override?
     */
    get DockingAllowUnclassed(): boolean;
    set DockingAllowUnclassed(v: boolean);
}
/**
 * \/\/ Data payload for Drag and Drop operations: AcceptDragDropPayload(), GetDragDropPayload()
 */
export declare class ImGuiPayload extends ReferenceStruct {
    get Data(): string;
    get DataSize(): number;
    Clear(): void;
    IsDataType(type: string): boolean;
    IsPreview(): boolean;
    IsDelivery(): boolean;
}
/**
 * \/\/ Helper: Manually clip large list of items.
 * \/\/ If you have lots evenly spaced items and you have random access to the list, you can perform coarse
 * \/\/ clipping based on visibility to only submit items that are in view.
 * \/\/ The clipper calculates the range of visible items and advance the cursor to compensate for the non-visible items we have skipped.
 * \/\/ (Dear ImGui already clip items based on their bounds but: it needs to first layout the item to do so, and generally
 * \/\/  fetching\/submitting your own data incurs additional cost. Coarse clipping using ImGuiListClipper allows you to easily
 * \/\/  scale using lists with tens of thousands of items without a problem)
 * \/\/ Usage:
 * \/\/   ImGuiListClipper clipper;
 * \/\/   clipper.Begin(1000);         \/\/ We have 1000 elements, evenly spaced.
 * \/\/   while (clipper.Step())
 * \/\/       for (int i = clipper.DisplayStart; i < clipper.DisplayEnd; i++)
 * \/\/           ImGui::Text("line number %d", i);
 * \/\/ Generally what happens is:
 * \/\/ - Clipper lets you process the first element (DisplayStart = 0, DisplayEnd = 1) regardless of it being visible or not.
 * \/\/ - User code submit that one element.
 * \/\/ - Clipper can measure the height of the first element
 * \/\/ - Clipper calculate the actual range of elements to display based on the current clipping rectangle, position the cursor before the first visible element.
 * \/\/ - User code submit visible elements.
 * \/\/ - The clipper also handles various subtleties related to keyboard\/gamepad navigation, wrapping etc.
 */
export declare class ImGuiListClipper extends ReferenceStruct {
    /**
     * \/\/ First item to display, updated by each call to Step()
     */
    get DisplayStart(): number;
    set DisplayStart(v: number);
    /**
     * \/\/ End of items to display (exclusive)
     */
    get DisplayEnd(): number;
    set DisplayEnd(v: number);
    /**
     * \/\/ Helper storage for user convenience\/code. Optional, and otherwise unused if you don't use it.
     */
    get UserIndex(): number;
    set UserIndex(v: number);
    /**
     * \/\/ [Internal] Number of items
     */
    get ItemsCount(): number;
    set ItemsCount(v: number);
    /**
     * \/\/ [Internal] Height of item after a first step and item submission can calculate it
     */
    get ItemsHeight(): number;
    set ItemsHeight(v: number);
    /**
     * \/\/ [Internal] Flags, currently not yet well exposed.
     */
    get Flags(): ImGuiListClipperFlags;
    set Flags(v: ImGuiListClipperFlags);
    /**
     * \/\/ [Internal] Cursor position at the time of Begin() or after table frozen rows are all processed
     */
    get StartPosY(): number;
    set StartPosY(v: number);
    /**
     * \/\/ [Internal] Account for frozen rows in a table and initial loss of precision in very large windows.
     */
    get StartSeekOffsetY(): number;
    set StartSeekOffsetY(v: number);
    /**
     * \/\/ [Internal] Parent UI context
     */
    get Ctx(): ImGuiContext;
    set Ctx(v: ImGuiContext);
    /**
     * \/\/ [Internal] Internal data
     */
    get TempData(): any;
    set TempData(v: any);
    Begin(items_count: number, items_height?: number): void;
    /**
     * \/\/ Automatically called on the last call of Step() that returns false.
     */
    End(): void;
    /**
     * \/\/ Call until it returns false. The DisplayStart\/DisplayEnd fields will be set and you can process\/draw those items.
     */
    Step(): boolean;
    /**
     * \/\/ Call IncludeItemByIndex() or IncludeItemsByIndex() *BEFORE* first call to Step() if you need a range of items to not be clipped, regardless of their visibility.
     * \/\/ (Due to alignment \/ padding of certain items it is possible that an extra item may be included on either end of the display range).
     */
    IncludeItemByIndex(item_index: number): void;
    /**
     * \/\/ item_end is exclusive e.g. use (42, 42+1) to make item 42 never clipped.
     */
    IncludeItemsByIndex(item_begin: number, item_end: number): void;
    /**
     * \/\/ Seek cursor toward given item. This is automatically called while stepping.
     * \/\/ - The only reason to call this is: you can use ImGuiListClipper::Begin(INT_MAX) if you don't know item count ahead of time.
     * \/\/ - In this case, after all steps are done, you'll want to call SeekCursorForItem(item_count).
     */
    SeekCursorForItem(item_index: number): void;
}
/**
 * \/\/ Helper: ImColor() implicitly converts colors to either ImU32 (packed 4x1 byte) or ImVec4 (4x1 float)
 * \/\/ Prefer using IM_COL32() macros if you want a guaranteed compile-time ImU32 for usage with ImDrawList API.
 * \/\/ **Avoid storing ImColor! Store either u32 of ImVec4. This is not a full-featured color class. MAY OBSOLETE.
 * \/\/ **None of the ImGui API are using ImColor directly but you can use it as a convenience to pass colors in either ImU32 or ImVec4 formats. Explicitly cast to ImU32 or ImVec4 if needed.
 */
export declare class ImColor extends ReferenceStruct {
    get Value(): ImVec4;
    set Value(v: ImVec4);
    /**
     * \/\/ FIXME-OBSOLETE: May need to obsolete\/cleanup those helpers.
     */
    SetHSV(h: number, s: number, v: number, a?: number): void;
    HSV(h: number, s: number, v: number, a?: number): ImColor;
}
/**
 * \/\/ Main IO structure returned by BeginMultiSelect()\/EndMultiSelect().
 * \/\/ This mainly contains a list of selection requests.
 * \/\/ - Use 'Demo->Tools->Debug Log->Selection' to see requests as they happen.
 * \/\/ - Some fields are only useful if your list is dynamic and allows deletion (getting post-deletion focus\/state right is shown in the demo)
 * \/\/ - Below: who reads\/writes each fields? 'r'=read, 'w'=write, 'ms'=multi-select code, 'app'=application\/user code.
 */
export declare class ImGuiMultiSelectIO extends ReferenceStruct {
}
/**
 * \/\/ Typically, 1 command = 1 GPU draw call (unless command is a callback)
 * \/\/ - VtxOffset: When 'io.BackendFlags & ImGuiBackendFlags_RendererHasVtxOffset' is enabled,
 * \/\/   this fields allow us to render meshes larger than 64K vertices while keeping 16-bit indices.
 * \/\/   Backends made for <1.71. will typically ignore the VtxOffset fields.
 * \/\/ - The ClipRect\/TexRef\/VtxOffset fields must be contiguous as we memcmp() them together (this is asserted for).
 */
export declare class ImDrawCmd extends ReferenceStruct {
    /**
     * \/\/ 4*4  \/\/ Clipping rectangle (x1, y1, x2, y2). Subtract ImDrawData->DisplayPos to get clipping rectangle in "viewport" coordinates
     */
    get ClipRect(): ImVec4;
    set ClipRect(v: ImVec4);
    /**
     * \/\/ 16   \/\/ Reference to a font\/texture atlas (where backend called ImTextureData::SetTexID()) or to a user-provided texture ID (via e.g. ImGui::Image() calls). Both will lead to a ImTextureID value.
     */
    get TexRef(): ImTextureRef;
    set TexRef(v: ImTextureRef);
    /**
     * \/\/ 4    \/\/ Start offset in vertex buffer. ImGuiBackendFlags_RendererHasVtxOffset: always 0, otherwise may be >0 to support meshes larger than 64K vertices with 16-bit indices.
     */
    get VtxOffset(): number;
    set VtxOffset(v: number);
    /**
     * \/\/ 4    \/\/ Start offset in index buffer.
     */
    get IdxOffset(): number;
    set IdxOffset(v: number);
    /**
     * \/\/ 4    \/\/ Number of indices (multiple of 3) to be rendered as triangles. Vertices are stored in the callee ImDrawList's vtx_buffer[] array, indices in idx_buffer[].
     */
    get ElemCount(): number;
    set ElemCount(v: number);
    /**
     * \/\/ 4-8  \/\/ If != NULL, call the function instead of rendering the vertices. clip_rect and texture_id will be set normally.
     */
    get UserCallback(): ImDrawCallback;
    set UserCallback(v: ImDrawCallback);
    /**
     * \/\/ 4-8  \/\/ Callback user data (when UserCallback != NULL). If called AddCallback() with size == 0, this is a copy of the AddCallback() argument. If called AddCallback() with size > 0, this is pointing to a buffer where data is stored.
     */
    get UserCallbackData(): any;
    set UserCallbackData(v: any);
    /**
     * \/\/ 4 \/\/ Size of callback user data when using storage, otherwise 0.
     */
    get UserCallbackDataSize(): number;
    set UserCallbackDataSize(v: number);
    /**
     * \/\/ 4 \/\/ [Internal] Offset of callback user data when using storage, otherwise -1.
     */
    get UserCallbackDataOffset(): number;
    set UserCallbackDataOffset(v: number);
    /**
     * \/\/ == (TexRef._TexData ? TexRef._TexData->TexID : TexRef._TexID)
     */
    GetTexID(): ImTextureID;
}
/**
 * \/\/ Split\/Merge functions are used to split the draw list into different layers which can be drawn into out of order.
 * \/\/ This is used by the Columns\/Tables API, so items of each column can be batched together in a same draw call.
 */
export declare class ImDrawListSplitter extends ReferenceStruct {
    /**
     * \/\/ Current channel number (0)
     */
    get _Current(): number;
    set _Current(v: number);
    /**
     * \/\/ Number of active channels (1+)
     */
    get _Count(): number;
    set _Count(v: number);
    /**
     * \/\/ Do not clear Channels[] so our allocations are reused next frame
     */
    Clear(): void;
    ClearFreeMemory(): void;
    Split(draw_list: ImDrawList, count: number): void;
    Merge(draw_list: ImDrawList): void;
    SetCurrentChannel(draw_list: ImDrawList, channel_idx: number): void;
}
/**
 * \/\/ Draw command list
 * \/\/ This is the low-level list of polygons that ImGui:: functions are filling. At the end of the frame,
 * \/\/ all command lists are passed to your ImGuiIO::RenderDrawListFn function for rendering.
 * \/\/ Each dear imgui window contains its own ImDrawList. You can use ImGui::GetWindowDrawList() to
 * \/\/ access the current window draw list and draw custom primitives.
 * \/\/ You can interleave normal ImGui:: calls and adding primitives to the current draw list.
 * \/\/ In single viewport mode, top-left is == GetMainViewport()->Pos (generally 0,0), bottom-right is == GetMainViewport()->Pos+Size (generally io.DisplaySize).
 * \/\/ You are totally free to apply whatever transformation matrix you want to the data (depending on the use of the transformation you may want to apply it to ClipRect as well!)
 * \/\/ Important: Primitives are always added to the list and not culled (culling is done at higher-level by ImGui:: functions), if you use this API a lot consider coarse culling your drawn objects.
 */
export declare class ImDrawList extends ReferenceStruct {
    /**
     * \/\/ Flags, you may poke into these to adjust anti-aliasing settings per-primitive.
     */
    get Flags(): ImDrawListFlags;
    set Flags(v: ImDrawListFlags);
    /**
     * \/\/ Render-level scissoring. This is passed down to your render function but not used for CPU-side coarse clipping. Prefer using higher-level ImGui::PushClipRect() to affect logic (hit-testing and widget culling)
     */
    PushClipRect(clip_rect_min: ImVec2, clip_rect_max: ImVec2, intersect_with_current_clip_rect?: boolean): void;
    PushClipRectFullScreen(): void;
    PopClipRect(): void;
    PushTexture(tex_ref: ImTextureRef): void;
    PopTexture(): void;
    GetClipRectMin(): ImVec2;
    GetClipRectMax(): ImVec2;
    /**
     * \/\/ Primitives
     * \/\/ - Filled shapes must always use clockwise winding order. The anti-aliasing fringe depends on it. Counter-clockwise shapes will have "inward" anti-aliasing.
     * \/\/ - For rectangular primitives, "p_min" and "p_max" represent the upper-left and lower-right corners.
     * \/\/ - For circle primitives, use "num_segments == 0" to automatically calculate tessellation (preferred).
     * \/\/   In older versions (until Dear ImGui 1.77) the AddCircle functions defaulted to num_segments == 12.
     * \/\/   In future versions we will use textures to provide cheaper and higher-quality circles.
     * \/\/   Use AddNgon() and AddNgonFilled() functions if you need to guarantee a specific number of sides.
     */
    AddLine(p1: ImVec2, p2: ImVec2, col: ImU32, thickness?: number): void;
    /**
     * \/\/ a: upper-left, b: lower-right (== upper-left + size)
     */
    AddRect(p_min: ImVec2, p_max: ImVec2, col: ImU32, rounding?: number, flags?: ImDrawFlags, thickness?: number): void;
    /**
     * \/\/ a: upper-left, b: lower-right (== upper-left + size)
     */
    AddRectFilled(p_min: ImVec2, p_max: ImVec2, col: ImU32, rounding?: number, flags?: ImDrawFlags): void;
    AddRectFilledMultiColor(p_min: ImVec2, p_max: ImVec2, col_upr_left: ImU32, col_upr_right: ImU32, col_bot_right: ImU32, col_bot_left: ImU32): void;
    AddQuad(p1: ImVec2, p2: ImVec2, p3: ImVec2, p4: ImVec2, col: ImU32, thickness?: number): void;
    AddQuadFilled(p1: ImVec2, p2: ImVec2, p3: ImVec2, p4: ImVec2, col: ImU32): void;
    AddTriangle(p1: ImVec2, p2: ImVec2, p3: ImVec2, col: ImU32, thickness?: number): void;
    AddTriangleFilled(p1: ImVec2, p2: ImVec2, p3: ImVec2, col: ImU32): void;
    AddCircle(center: ImVec2, radius: number, col: ImU32, num_segments?: number, thickness?: number): void;
    AddCircleFilled(center: ImVec2, radius: number, col: ImU32, num_segments?: number): void;
    AddNgon(center: ImVec2, radius: number, col: ImU32, num_segments: number, thickness?: number): void;
    AddNgonFilled(center: ImVec2, radius: number, col: ImU32, num_segments: number): void;
    AddEllipse(center: ImVec2, radius: ImVec2, col: ImU32, rot?: number, num_segments?: number, thickness?: number): void;
    AddEllipseFilled(center: ImVec2, radius: ImVec2, col: ImU32, rot?: number, num_segments?: number): void;
    AddText(pos: ImVec2, col: ImU32, text_begin: string, text_end?: string): void;
    AddTextImFontPtr(font: ImFont, font_size: number, pos: ImVec2, col: ImU32, text_begin: string, text_end?: string, wrap_width?: number, cpu_fine_clip_rect?: ImVec4 | null): void;
    /**
     * \/\/ Cubic Bezier (4 control points)
     */
    AddBezierCubic(p1: ImVec2, p2: ImVec2, p3: ImVec2, p4: ImVec2, col: ImU32, thickness: number, num_segments?: number): void;
    /**
     * \/\/ Quadratic Bezier (3 control points)
     */
    AddBezierQuadratic(p1: ImVec2, p2: ImVec2, p3: ImVec2, col: ImU32, thickness: number, num_segments?: number): void;
    /**
     * \/\/ General polygon
     * \/\/ - Only simple polygons are supported by filling functions (no self-intersections, no holes).
     * \/\/ - Concave polygon fill is more expensive than convex one: it has O(N^2) complexity. Provided as a convenience for the user but not used by the main library.
     */
    AddPolyline(points: ImVec2, num_points: number, col: ImU32, flags: ImDrawFlags, thickness: number): void;
    AddConvexPolyFilled(points: ImVec2, num_points: number, col: ImU32): void;
    AddConcavePolyFilled(points: ImVec2, num_points: number, col: ImU32): void;
    /**
     * \/\/ Image primitives
     * \/\/ - Read FAQ to understand what ImTextureID\/ImTextureRef are.
     * \/\/ - "p_min" and "p_max" represent the upper-left and lower-right corners of the rectangle.
     * \/\/ - "uv_min" and "uv_max" represent the normalized texture coordinates to use for those corners. Using (0,0)->(1,1) texture coordinates will generally display the entire texture.
     */
    AddImage(tex_ref: ImTextureRef, p_min: ImVec2, p_max: ImVec2, uv_min?: ImVec2, uv_max?: ImVec2, col?: ImU32): void;
    AddImageQuad(tex_ref: ImTextureRef, p1: ImVec2, p2: ImVec2, p3: ImVec2, p4: ImVec2, uv1?: ImVec2, uv2?: ImVec2, uv3?: ImVec2, uv4?: ImVec2, col?: ImU32): void;
    AddImageRounded(tex_ref: ImTextureRef, p_min: ImVec2, p_max: ImVec2, uv_min: ImVec2, uv_max: ImVec2, col: ImU32, rounding: number, flags?: ImDrawFlags): void;
    /**
     * \/\/ Stateful path API, add points then finish with PathFillConvex() or PathStroke()
     * \/\/ - Important: filled shapes must always use clockwise winding order! The anti-aliasing fringe depends on it. Counter-clockwise shapes will have "inward" anti-aliasing.
     * \/\/   so e.g. 'PathArcTo(center, radius, PI * -0.5f, PI)' is ok, whereas 'PathArcTo(center, radius, PI, PI * -0.5f)' won't have correct anti-aliasing when followed by PathFillConvex().
     */
    PathClear(): void;
    PathLineTo(pos: ImVec2): void;
    PathLineToMergeDuplicate(pos: ImVec2): void;
    PathFillConvex(col: ImU32): void;
    PathFillConcave(col: ImU32): void;
    PathStroke(col: ImU32, flags?: ImDrawFlags, thickness?: number): void;
    PathArcTo(center: ImVec2, radius: number, a_min: number, a_max: number, num_segments?: number): void;
    /**
     * \/\/ Use precomputed angles for a 12 steps circle
     */
    PathArcToFast(center: ImVec2, radius: number, a_min_of_12: number, a_max_of_12: number): void;
    /**
     * \/\/ Ellipse
     */
    PathEllipticalArcTo(center: ImVec2, radius: ImVec2, rot: number, a_min: number, a_max: number, num_segments?: number): void;
    /**
     * \/\/ Cubic Bezier (4 control points)
     */
    PathBezierCubicCurveTo(p2: ImVec2, p3: ImVec2, p4: ImVec2, num_segments?: number): void;
    /**
     * \/\/ Quadratic Bezier (3 control points)
     */
    PathBezierQuadraticCurveTo(p2: ImVec2, p3: ImVec2, num_segments?: number): void;
    PathRect(rect_min: ImVec2, rect_max: ImVec2, rounding?: number, flags?: ImDrawFlags): void;
    /**
     * \/\/ Advanced: Draw Callbacks
     * \/\/ - May be used to alter render state (change sampler, blending, current shader). May be used to emit custom rendering commands (difficult to do correctly, but possible).
     * \/\/ - Use special ImDrawCallback_ResetRenderState callback to instruct backend to reset its render state to the default.
     * \/\/ - Your rendering loop must check for 'UserCallback' in ImDrawCmd and call the function instead of rendering triangles. All standard backends are honoring this.
     * \/\/ - For some backends, the callback may access selected render-states exposed by the backend in a ImGui_ImplXXXX_RenderState structure pointed to by platform_io.Renderer_RenderState.
     * \/\/ - IMPORTANT: please be mindful of the different level of indirection between using size==0 (copying argument) and using size>0 (copying pointed data into a buffer).
     * \/\/   - If userdata_size == 0: we copy\/store the 'userdata' argument as-is. It will be available unmodified in ImDrawCmd::UserCallbackData during render.
     * \/\/   - If userdata_size > 0,  we copy\/store 'userdata_size' bytes pointed to by 'userdata'. We store them in a buffer stored inside the drawlist. ImDrawCmd::UserCallbackData will point inside that buffer so you have to retrieve data from there. Your callback may need to use ImDrawCmd::UserCallbackDataSize if you expect dynamically-sized data.
     * \/\/   - Support for userdata_size > 0 was added in v1.91.4, October 2024. So earlier code always only allowed to copy\/store a simple void*.
     */
    AddCallback(callback: ImDrawCallback, userdata: any, userdata_size?: number): void;
    /**
     * \/\/ This is useful if you need to forcefully create a new draw call (to allow for dependent rendering \/ blending). Otherwise primitives are merged into the same draw-call as much as possible
     */
    AddDrawCmd(): void;
    /**
     * \/\/ Create a clone of the CmdBuffer\/IdxBuffer\/VtxBuffer. For multi-threaded rendering, consider using `imgui_threaded_rendering` from https:\/\/github.com\/ocornut\/imgui_club instead.
     */
    CloneOutput(): ImDrawList;
    /**
     * \/\/ Advanced: Channels
     * \/\/ - Use to split render into layers. By switching channels to can render out-of-order (e.g. submit FG primitives before BG primitives)
     * \/\/ - Use to minimize draw calls (e.g. if going back-and-forth between multiple clipping rectangles, prefer to append into separate channels then merge at the end)
     * \/\/ - This API shouldn't have been in ImDrawList in the first place!
     * \/\/   Prefer using your own persistent instance of ImDrawListSplitter as you can stack them.
     * \/\/   Using the ImDrawList::ChannelsXXXX you cannot stack a split over another.
     */
    ChannelsSplit(count: number): void;
    ChannelsMerge(): void;
    ChannelsSetCurrent(n: number): void;
    /**
     * \/\/ Advanced: Primitives allocations
     * \/\/ - We render triangles (three vertices)
     * \/\/ - All primitives needs to be reserved via PrimReserve() beforehand.
     */
    PrimReserve(idx_count: number, vtx_count: number): void;
    PrimUnreserve(idx_count: number, vtx_count: number): void;
    /**
     * \/\/ Axis aligned rectangle (composed of two triangles)
     */
    PrimRect(a: ImVec2, b: ImVec2, col: ImU32): void;
    PrimRectUV(a: ImVec2, b: ImVec2, uv_a: ImVec2, uv_b: ImVec2, col: ImU32): void;
    PrimQuadUV(a: ImVec2, b: ImVec2, c: ImVec2, d: ImVec2, uv_a: ImVec2, uv_b: ImVec2, uv_c: ImVec2, uv_d: ImVec2, col: ImU32): void;
    PrimWriteVtx(pos: ImVec2, uv: ImVec2, col: ImU32): void;
    PrimWriteIdx(idx: ImDrawIdx): void;
    /**
     * \/\/ Write vertex with unique index
     */
    PrimVtx(pos: ImVec2, uv: ImVec2, col: ImU32): void;
    /**
     * \/\/ [Internal helpers]
     */
    _SetDrawListSharedData(data: ImDrawListSharedData): void;
    _ResetForNewFrame(): void;
    _ClearFreeMemory(): void;
    _PopUnusedDrawCmd(): void;
    _TryMergeDrawCmds(): void;
    _OnChangedClipRect(): void;
    _OnChangedTexture(): void;
    _OnChangedVtxOffset(): void;
    _SetTexture(tex_ref: ImTextureRef): void;
    _CalcCircleAutoSegmentCount(radius: number): number;
    _PathArcToFastEx(center: ImVec2, radius: number, a_min_sample: number, a_max_sample: number, a_step: number): void;
    _PathArcToN(center: ImVec2, radius: number, a_min: number, a_max: number, num_segments: number): void;
}
/**
 * \/\/ All draw data to render a Dear ImGui frame
 * \/\/ (NB: the style and the naming convention here is a little inconsistent, we currently preserve them for backward compatibility purpose,
 * \/\/ as this is one of the oldest structure exposed by the library! Basically, ImDrawList == CmdList)
 */
export declare class ImDrawData extends ReferenceStruct {
}
/**
 * \/\/ A font input\/source (we may rename this to ImFontSource in the future)
 */
export declare class ImFontConfig extends ReferenceStruct {
    /**
     * \/\/          \/\/ TTF\/OTF data
     */
    get FontData(): any;
    set FontData(v: any);
    /**
     * \/\/          \/\/ TTF\/OTF data size
     */
    get FontDataSize(): number;
    set FontDataSize(v: number);
    /**
     * \/\/ true     \/\/ TTF\/OTF data ownership taken by the owner ImFontAtlas (will delete memory itself). SINCE 1.92, THE DATA NEEDS TO PERSIST FOR WHOLE DURATION OF ATLAS.
     */
    get FontDataOwnedByAtlas(): boolean;
    set FontDataOwnedByAtlas(v: boolean);
    /**
     * \/\/ false    \/\/ Merge into previous ImFont, so you can combine multiple inputs font into one ImFont (e.g. ASCII font + icons + Japanese glyphs). You may want to use GlyphOffset.y when merge font of different heights.
     */
    get MergeMode(): boolean;
    set MergeMode(v: boolean);
    /**
     * \/\/ false    \/\/ Align every glyph AdvanceX to pixel boundaries. Prevents fractional font size from working correctly! Useful e.g. if you are merging a non-pixel aligned font with the default font. If enabled, OversampleH\/V will default to 1.
     */
    get PixelSnapH(): boolean;
    set PixelSnapH(v: boolean);
    /**
     * \/\/ 0 (2)    \/\/ Rasterize at higher quality for sub-pixel positioning. 0 == auto == 1 or 2 depending on size. Note the difference between 2 and 3 is minimal. You can reduce this to 1 for large glyphs save memory. Read https:\/\/github.com\/nothings\/stb\/blob\/master\/tests\/oversample\/README.md for details.
     */
    get OversampleH(): ImS8;
    set OversampleH(v: ImS8);
    /**
     * \/\/ 0 (1)    \/\/ Rasterize at higher quality for sub-pixel positioning. 0 == auto == 1. This is not really useful as we don't use sub-pixel positions on the Y axis.
     */
    get OversampleV(): ImS8;
    set OversampleV(v: ImS8);
    /**
     * \/\/ 0        \/\/ Explicitly specify Unicode codepoint of ellipsis character. When fonts are being merged first specified ellipsis will be used.
     */
    get EllipsisChar(): ImWchar;
    set EllipsisChar(v: ImWchar);
    /**
     * \/\/          \/\/ Output size in pixels for rasterizer (more or less maps to the resulting font height).
     */
    get SizePixels(): number;
    set SizePixels(v: number);
    /**
     * \/\/ NULL     \/\/ *LEGACY* THE ARRAY DATA NEEDS TO PERSIST AS LONG AS THE FONT IS ALIVE. Pointer to a user-provided list of Unicode range (2 value per range, values are inclusive, zero-terminated list).
     */
    get GlyphRanges(): ImWchar;
    set GlyphRanges(v: ImWchar);
    /**
     * \/\/ NULL     \/\/ Pointer to a small user-provided list of Unicode ranges (2 value per range, values are inclusive, zero-terminated list). This is very close to GlyphRanges[] but designed to exclude ranges from a font source, when merging fonts with overlapping glyphs. Use "Input Glyphs Overlap Detection Tool" to find about your overlapping ranges.
     */
    get GlyphExcludeRanges(): ImWchar;
    set GlyphExcludeRanges(v: ImWchar);
    /**
     * \/\/ 0, 0     \/\/ Offset (in pixels) all glyphs from this font input. Absolute value for default size, other sizes will scale this value.
     */
    get GlyphOffset(): ImVec2;
    set GlyphOffset(v: ImVec2);
    /**
     * \/\/ 0        \/\/ Minimum AdvanceX for glyphs, set Min to align font icons, set both Min\/Max to enforce mono-space font. Absolute value for default size, other sizes will scale this value.
     */
    get GlyphMinAdvanceX(): number;
    set GlyphMinAdvanceX(v: number);
    /**
     * \/\/ FLT_MAX  \/\/ Maximum AdvanceX for glyphs
     */
    get GlyphMaxAdvanceX(): number;
    set GlyphMaxAdvanceX(v: number);
    /**
     * \/\/ 0        \/\/ Extra spacing (in pixels) between glyphs. Please contact us if you are using this. \/\/ FIXME-NEWATLAS: Intentionally unscaled
     */
    get GlyphExtraAdvanceX(): number;
    set GlyphExtraAdvanceX(v: number);
    /**
     * \/\/ 0        \/\/ Index of font within TTF\/OTF file
     */
    get FontNo(): ImU32;
    set FontNo(v: ImU32);
    /**
     * \/\/ 0        \/\/ Settings for custom font builder. THIS IS BUILDER IMPLEMENTATION DEPENDENT. Leave as zero if unsure.
     */
    get FontLoaderFlags(): number;
    set FontLoaderFlags(v: number);
    /**
     * \/\/ 1.0f     \/\/ Linearly brighten (>1.0f) or darken (<1.0f) font output. Brightening small fonts may be a good workaround to make them more readable. This is a silly thing we may remove in the future.
     */
    get RasterizerMultiply(): number;
    set RasterizerMultiply(v: number);
    /**
     * \/\/ 1.0f     \/\/ [LEGACY: this only makes sense when ImGuiBackendFlags_RendererHasTextures is not supported] DPI scale multiplier for rasterization. Not altering other font metrics: makes it easy to swap between e.g. a 100% and a 400% fonts for a zooming display, or handle Retina screen. IMPORTANT: If you change this it is expected that you increase\/decrease font scale roughly to the inverse of this, otherwise quality may look lowered.
     */
    get RasterizerDensity(): number;
    set RasterizerDensity(v: number);
    /**
     * \/\/ 1.0f     \/\/ Extra rasterizer scale over SizePixels.
     */
    get ExtraSizeScale(): number;
    set ExtraSizeScale(v: number);
}
/**
 * \/\/ Output of ImFontAtlas::GetCustomRect() when using custom rectangles.
 * \/\/ Those values may not be cached\/stored as they are only valid for the current value of atlas->TexRef
 * \/\/ (this is in theory derived from ImTextureRect but we use separate structures for reasons)
 */
export declare class ImFontAtlasRect extends ReferenceStruct {
    /**
     * \/\/ Position (in current texture)
     */
    get x(): number;
    set x(v: number);
    /**
     * \/\/ Position (in current texture)
     */
    get y(): number;
    set y(v: number);
    /**
     * \/\/ Size
     */
    get w(): number;
    set w(v: number);
    /**
     * \/\/ Size
     */
    get h(): number;
    set h(v: number);
    /**
     * \/\/ UV coordinates (in current texture)
     */
    get uv0(): ImVec2;
    set uv0(v: ImVec2);
    /**
     * \/\/ UV coordinates (in current texture)
     */
    get uv1(): ImVec2;
    set uv1(v: ImVec2);
}
/**
 * \/\/ Load and rasterize multiple TTF\/OTF fonts into a same texture. The font atlas will build a single texture holding:
 * \/\/  - One or more fonts.
 * \/\/  - Custom graphics data needed to render the shapes needed by Dear ImGui.
 * \/\/  - Mouse cursor shapes for software cursor rendering (unless setting 'Flags |= ImFontAtlasFlags_NoMouseCursors' in the font atlas).
 * \/\/  - If you don't call any AddFont*** functions, the default font embedded in the code will be loaded for you.
 * \/\/ It is the rendering backend responsibility to upload texture into your graphics API:
 * \/\/  - ImGui_ImplXXXX_RenderDrawData() functions generally iterate platform_io->Textures[] to create\/update\/destroy each ImTextureData instance.
 * \/\/  - Backend then set ImTextureData's TexID and BackendUserData.
 * \/\/  - Texture id are passed back to you during rendering to identify the texture. Read FAQ entry about ImTextureID\/ImTextureRef for more details.
 * \/\/ Legacy path:
 * \/\/  - Call Build() + GetTexDataAsAlpha8() or GetTexDataAsRGBA32() to build and retrieve pixels data.
 * \/\/  - Call SetTexID(my_tex_id); and pass the pointer\/identifier to your texture in a format natural to your graphics API.
 * \/\/ Common pitfalls:
 * \/\/ - If you pass a 'glyph_ranges' array to AddFont*** functions, you need to make sure that your array persists up until the
 * \/\/   atlas is build (when calling GetTexData*** or Build()). We only copy the pointer, not the data.
 * \/\/ - Important: By default, AddFontFromMemoryTTF() takes ownership of the data. Even though we are not writing to it, we will free the pointer on destruction.
 * \/\/   You can set font_cfg->FontDataOwnedByAtlas=false to keep ownership of your data and it won't be freed,
 * \/\/ - Even though many functions are suffixed with "TTF", OTF data is supported just as well.
 * \/\/ - This is an old API and it is currently awkward for those and various other reasons! We will address them in the future!
 */
export declare class ImFontAtlas extends ReferenceStruct {
    /**
     * \/\/ Build flags (see ImFontAtlasFlags_)
     */
    get Flags(): ImFontAtlasFlags;
    set Flags(v: ImFontAtlasFlags);
    /**
     * \/\/ FIXME: Should be called "TexPackPadding". Padding between glyphs within texture in pixels. Defaults to 1. If your rendering method doesn't rely on bilinear filtering you may set this to 0 (will also need to set AntiAliasedLinesUseTex = false).
     */
    get TexGlyphPadding(): number;
    set TexGlyphPadding(v: number);
    /**
     * \/\/ Minimum desired texture width. Must be a power of two. Default to 512.
     */
    get TexMinWidth(): number;
    set TexMinWidth(v: number);
    /**
     * \/\/ Minimum desired texture height. Must be a power of two. Default to 128.
     */
    get TexMinHeight(): number;
    set TexMinHeight(v: number);
    /**
     * \/\/ Maximum desired texture width. Must be a power of two. Default to 8192.
     */
    get TexMaxWidth(): number;
    set TexMaxWidth(v: number);
    /**
     * \/\/ Maximum desired texture height. Must be a power of two. Default to 8192.
     */
    get TexMaxHeight(): number;
    set TexMaxHeight(v: number);
    /**
     * \/\/ Store your own atlas related user-data (if e.g. you have multiple font atlas).
     */
    get UserData(): any;
    set UserData(v: any);
    /**
     * \/\/ Latest texture identifier == TexData->GetTexRef().
     */
    get TexRef(): ImTextureRef;
    set TexRef(v: ImTextureRef);
    AddFont(font_cfg: ImFontConfig): ImFont;
    /**
     * \/\/ Selects between AddFontDefaultVector() and AddFontDefaultBitmap().
     */
    AddFontDefault(font_cfg?: ImFontConfig | null): ImFont;
    /**
     * \/\/ Embedded scalable font. Recommended at any higher size.
     */
    AddFontDefaultVector(font_cfg?: ImFontConfig | null): ImFont;
    /**
     * \/\/ Embedded classic pixel-clean font. Recommended at Size 13px with no scaling.
     */
    AddFontDefaultBitmap(font_cfg?: ImFontConfig | null): ImFont;
    AddFontFromFileTTF(filename: string, size_pixels?: number, font_cfg?: ImFontConfig | null, glyph_ranges?: ImWchar[] | null): ImFont;
    RemoveFont(font: ImFont): void;
    /**
     * \/\/ Clear everything (input fonts, output glyphs\/textures).
     */
    Clear(): void;
    /**
     * \/\/ Compact cached glyphs and texture.
     */
    CompactCache(): void;
    /**
     * \/\/ Change font loader at runtime.
     */
    SetFontLoader(font_loader: ImFontLoader): void;
    /**
     * \/\/ [OBSOLETE] Clear input data (all ImFontConfig structures including sizes, TTF data, glyph ranges, etc.) = all the data used to build the texture and fonts.
     */
    ClearInputData(): void;
    /**
     * \/\/ [OBSOLETE] Clear input+output font data (same as ClearInputData() + glyphs storage, UV coordinates).
     */
    ClearFonts(): void;
    /**
     * \/\/ [OBSOLETE] Clear CPU-side copy of the texture data. Saves RAM once the texture has been copied to graphics memory.
     */
    ClearTexData(): void;
    /**
     * \/\/ Basic Latin, Extended Latin
     */
    GetGlyphRangesDefault(): ImWchar;
    /**
     * \/\/ Register a rectangle. Return -1 (ImFontAtlasRectId_Invalid) on error.
     */
    AddCustomRect(width: number, height: number, out_r?: ImFontAtlasRect | null): ImFontAtlasRectId;
    /**
     * \/\/ Unregister a rectangle. Existing pixels will stay in texture until resized \/ garbage collected.
     */
    RemoveCustomRect(id: ImFontAtlasRectId): void;
    /**
     * \/\/ Get rectangle coordinates for current texture. Valid immediately, never store this (read above)!
     */
    GetCustomRect(id: ImFontAtlasRectId, out_r: ImFontAtlasRect): boolean;
}
/**
 * \/\/ Font runtime data for a given size
 * \/\/ Important: pointers to ImFontBaked are only valid for the current frame.
 */
export declare class ImFontBaked extends ReferenceStruct {
}
/**
 * \/\/ Font runtime data and rendering
 * \/\/ - ImFontAtlas automatically loads a default embedded font for you if you didn't load one manually.
 * \/\/ - Since 1.92.0 a font may be rendered as any size! Therefore a font doesn't have one specific size.
 * \/\/ - Use 'font->GetFontBaked(size)' to retrieve the ImFontBaked* corresponding to a given size.
 * \/\/ - If you used g.Font + g.FontSize (which is frequent from the ImGui layer), you can use g.FontBaked as a shortcut, as g.FontBaked == g.Font->GetFontBaked(g.FontSize).
 */
export declare class ImFont extends ReferenceStruct {
}
/**
 * \/\/ - Currently represents the Platform Window created by the application which is hosting our Dear ImGui windows.
 * \/\/ - With multi-viewport enabled, we extend this concept to have multiple active viewports.
 * \/\/ - In the future we will extend this concept further to also represent Platform Monitor and support a "no main platform window" operation mode.
 * \/\/ - About Main Area vs Work Area:
 * \/\/   - Main Area = entire viewport.
 * \/\/   - Work Area = entire viewport minus sections used by main menu bars (for platform windows), or by task bar (for platform monitor).
 * \/\/   - Windows are generally trying to stay within the Work Area of their host viewport.
 */
export declare class ImGuiViewport extends ReferenceStruct {
    /**
     * \/\/ Unique identifier for the viewport
     */
    get ID(): ImGuiID;
    set ID(v: ImGuiID);
    /**
     * \/\/ See ImGuiViewportFlags_
     */
    get Flags(): ImGuiViewportFlags;
    set Flags(v: ImGuiViewportFlags);
    /**
     * \/\/ Main Area: Position of the viewport (Dear ImGui coordinates are the same as OS desktop\/native coordinates)
     */
    get Pos(): ImVec2;
    set Pos(v: ImVec2);
    /**
     * \/\/ Main Area: Size of the viewport.
     */
    get Size(): ImVec2;
    set Size(v: ImVec2);
    /**
     * \/\/ Density of the viewport for Retina display (always 1,1 on Windows, may be 2,2 etc on macOS\/iOS). This will affect font rasterizer density.
     */
    get FramebufferScale(): ImVec2;
    set FramebufferScale(v: ImVec2);
    /**
     * \/\/ Work Area: Position of the viewport minus task bars, menus bars, status bars (>= Pos)
     */
    get WorkPos(): ImVec2;
    set WorkPos(v: ImVec2);
    /**
     * \/\/ Work Area: Size of the viewport minus task bars, menu bars, status bars (<= Size)
     */
    get WorkSize(): ImVec2;
    set WorkSize(v: ImVec2);
    /**
     * \/\/ 1.0f = 96 DPI = No extra scale.
     */
    get DpiScale(): number;
    set DpiScale(v: number);
    /**
     * \/\/ (Advanced) 0: no parent. Instruct the platform backend to setup a parent\/child relationship between platform windows.
     */
    get ParentViewportId(): ImGuiID;
    set ParentViewportId(v: ImGuiID);
    /**
     * \/\/ (Advanced) Direct shortcut to ImGui::FindViewportByID(ParentViewportId). NULL: no parent.
     */
    get ParentViewport(): ImGuiViewport;
    set ParentViewport(v: ImGuiViewport);
    /**
     * \/\/ The ImDrawData corresponding to this viewport. Valid after Render() and until the next call to NewFrame().
     */
    get DrawData(): ImDrawData;
    set DrawData(v: ImDrawData);
    /**
     * \/\/ void* to hold custom data structure for the renderer (e.g. swap chain, framebuffers etc.). generally set by your Renderer_CreateWindow function.
     */
    get RendererUserData(): any;
    set RendererUserData(v: any);
    /**
     * \/\/ void* to hold custom data structure for the OS \/ platform (e.g. windowing info, render context). generally set by your Platform_CreateWindow function.
     */
    get PlatformUserData(): any;
    set PlatformUserData(v: any);
    /**
     * \/\/ void* to hold higher-level, platform window handle (e.g. HWND for Win32 backend, Uint32 WindowID for SDL, GLFWWindow* for GLFW), for FindViewportByPlatformHandle().
     */
    get PlatformHandle(): any;
    set PlatformHandle(v: any);
    /**
     * \/\/ void* to hold lower-level, platform-native window handle (always HWND on Win32 platform, unused for other platforms).
     */
    get PlatformHandleRaw(): any;
    set PlatformHandleRaw(v: any);
    /**
     * \/\/ Platform window has been created (Platform_CreateWindow() has been called). This is false during the first frame where a viewport is being created.
     */
    get PlatformWindowCreated(): boolean;
    set PlatformWindowCreated(v: boolean);
    /**
     * \/\/ Platform window requested move (e.g. window was moved by the OS \/ host window manager, authoritative position will be OS window position)
     */
    get PlatformRequestMove(): boolean;
    set PlatformRequestMove(v: boolean);
    /**
     * \/\/ Platform window requested resize (e.g. window was resized by the OS \/ host window manager, authoritative size will be OS window size)
     */
    get PlatformRequestResize(): boolean;
    set PlatformRequestResize(v: boolean);
    /**
     * \/\/ Platform window requested closure (e.g. window was moved by the OS \/ host window manager, e.g. pressing ALT-F4)
     */
    get PlatformRequestClose(): boolean;
    set PlatformRequestClose(v: boolean);
    /**
     * \/\/ Helpers
     */
    GetCenter(): ImVec2;
    GetWorkCenter(): ImVec2;
    GetDebugName(): string;
}
/**
 * \/\/ Access via ImGui::GetPlatformIO()
 */
export declare class ImGuiPlatformIO extends ReferenceStruct {
}
export declare const ImGui: {
    /**
     * \/\/ Flags for ImGui::Begin()
     * \/\/ (Those are per-window flags. There are shared flags in ImGuiIO: io.ConfigWindowsResizeFromEdges and io.ConfigWindowsMoveFromTitleBarOnly)
     */
    WindowFlags: {
        None: number;
        /**
         * \/\/ Disable title-bar
         */
        NoTitleBar: number;
        /**
         * \/\/ Disable user resizing with the lower-right grip
         */
        NoResize: number;
        /**
         * \/\/ Disable user moving the window
         */
        NoMove: number;
        /**
         * \/\/ Disable scrollbars (window can still scroll with mouse or programmatically)
         */
        NoScrollbar: number;
        /**
         * \/\/ Disable user vertically scrolling with mouse wheel. On child window, mouse wheel will be forwarded to the parent unless NoScrollbar is also set.
         */
        NoScrollWithMouse: number;
        /**
         * \/\/ Disable user collapsing window by double-clicking on it. Also referred to as Window Menu Button (e.g. within a docking node).
         */
        NoCollapse: number;
        /**
         * \/\/ Resize every window to its content every frame
         */
        AlwaysAutoResize: number;
        /**
         * \/\/ Disable drawing background color (WindowBg, etc.) and outside border. Similar as using SetNextWindowBgAlpha(0.0f).
         */
        NoBackground: number;
        /**
         * \/\/ Never load\/save settings in .ini file
         */
        NoSavedSettings: number;
        /**
         * \/\/ Disable catching mouse, hovering test with pass through.
         */
        NoMouseInputs: number;
        /**
         * \/\/ Has a menu-bar
         */
        MenuBar: number;
        /**
         * \/\/ Allow horizontal scrollbar to appear (off by default). You may use SetNextWindowContentSize(ImVec2(width,0.0f)); prior to calling Begin() to specify width. Read code in imgui_demo in the "Horizontal Scrolling" section.
         */
        HorizontalScrollbar: number;
        /**
         * \/\/ Disable taking focus when transitioning from hidden to visible state
         */
        NoFocusOnAppearing: number;
        /**
         * \/\/ Disable bringing window to front when taking focus (e.g. clicking on it or programmatically giving it focus)
         */
        NoBringToFrontOnFocus: number;
        /**
         * \/\/ Always show vertical scrollbar (even if ContentSize.y < Size.y)
         */
        AlwaysVerticalScrollbar: number;
        /**
         * \/\/ Always show horizontal scrollbar (even if ContentSize.x < Size.x)
         */
        AlwaysHorizontalScrollbar: number;
        /**
         * \/\/ No keyboard\/gamepad navigation within the window
         */
        NoNavInputs: number;
        /**
         * \/\/ No focusing toward this window with keyboard\/gamepad navigation (e.g. skipped by Ctrl+Tab)
         */
        NoNavFocus: number;
        /**
         * \/\/ Display a dot next to the title. When used in a tab\/docking context, tab is selected when clicking the X + closure is not assumed (will wait for user to stop submitting the tab). Otherwise closure is assumed when pressing the X, so if you keep submitting the tab may reappear at end of tab bar.
         */
        UnsavedDocument: number;
        /**
         * \/\/ Disable docking of this window
         */
        NoDocking: number;
        NoNav: number;
        NoDecoration: number;
        NoInputs: number;
    };
    /**
     * \/\/ Flags for ImGui::BeginChild()
     * \/\/ (Legacy: bit 0 must always correspond to ImGuiChildFlags_Borders to be backward compatible with old API using 'bool border = false'.)
     * \/\/ About using AutoResizeX\/AutoResizeY flags:
     * \/\/ - May be combined with SetNextWindowSizeConstraints() to set a min\/max size for each axis (see "Demo->Child->Auto-resize with Constraints").
     * \/\/ - Size measurement for a given axis is only performed when the child window is within visible boundaries, or is just appearing.
     * \/\/   - This allows BeginChild() to return false when not within boundaries (e.g. when scrolling), which is more optimal. BUT it won't update its auto-size while clipped.
     * \/\/     While not perfect, it is a better default behavior as the always-on performance gain is more valuable than the occasional "resizing after becoming visible again" glitch.
     * \/\/   - You may also use ImGuiChildFlags_AlwaysAutoResize to force an update even when child window is not in view.
     * \/\/     HOWEVER PLEASE UNDERSTAND THAT DOING SO WILL PREVENT BeginChild() FROM EVER RETURNING FALSE, disabling benefits of coarse clipping.
     */
    ChildFlags: {
        None: number;
        /**
         * \/\/ Show an outer border and enable WindowPadding. (IMPORTANT: this is always == 1 == true for legacy reason)
         */
        Borders: number;
        /**
         * \/\/ Pad with style.WindowPadding even if no border are drawn (no padding by default for non-bordered child windows because it makes more sense)
         */
        AlwaysUseWindowPadding: number;
        /**
         * \/\/ Allow resize from right border (layout direction). Enable .ini saving (unless ImGuiWindowFlags_NoSavedSettings passed to window flags)
         */
        ResizeX: number;
        /**
         * \/\/ Allow resize from bottom border (layout direction). "
         */
        ResizeY: number;
        /**
         * \/\/ Enable auto-resizing width. Read "IMPORTANT: Size measurement" details above.
         */
        AutoResizeX: number;
        /**
         * \/\/ Enable auto-resizing height. Read "IMPORTANT: Size measurement" details above.
         */
        AutoResizeY: number;
        /**
         * \/\/ Combined with AutoResizeX\/AutoResizeY. Always measure size even when child is hidden, always return true, always disable clipping optimization! NOT RECOMMENDED.
         */
        AlwaysAutoResize: number;
        /**
         * \/\/ Style the child window like a framed item: use FrameBg, FrameRounding, FrameBorderSize, FramePadding instead of ChildBg, ChildRounding, ChildBorderSize, WindowPadding.
         */
        FrameStyle: number;
        /**
         * \/\/ [BETA] Share focus scope, allow keyboard\/gamepad navigation to cross over parent border to this child or between sibling child windows.
         */
        NavFlattened: number;
    };
    /**
     * \/\/ Flags for ImGui::PushItemFlag()
     * \/\/ (Those are shared by all submitted items)
     */
    ItemFlags: {
        /**
         * \/\/ (Default)
         */
        None: number;
        /**
         * \/\/ false    \/\/ Disable keyboard tabbing. This is a "lighter" version of ImGuiItemFlags_NoNav.
         */
        NoTabStop: number;
        /**
         * \/\/ false    \/\/ Disable any form of focusing (keyboard\/gamepad directional navigation and SetKeyboardFocusHere() calls).
         */
        NoNav: number;
        /**
         * \/\/ false    \/\/ Disable item being a candidate for default focus (e.g. used by title bar items).
         */
        NoNavDefaultFocus: number;
        /**
         * \/\/ false    \/\/ Any button-like behavior will have repeat mode enabled (based on io.KeyRepeatDelay and io.KeyRepeatRate values). Note that you can also call IsItemActive() after any button to tell if it is being held.
         */
        ButtonRepeat: number;
        /**
         * \/\/ true     \/\/ MenuItem()\/Selectable() automatically close their parent popup window.
         */
        AutoClosePopups: number;
        /**
         * \/\/ false    \/\/ Allow submitting an item with the same identifier as an item already submitted this frame without triggering a warning tooltip if io.ConfigDebugHighlightIdConflicts is set.
         */
        AllowDuplicateId: number;
        /**
         * \/\/ false    \/\/ [Internal] Disable interactions. DOES NOT affect visuals. This is used by BeginDisabled()\/EndDisabled() and only provided here so you can read back via GetItemFlags().
         */
        Disabled: number;
    };
    /**
     * \/\/ Flags for ImGui::InputText()
     * \/\/ (Those are per-item flags. There are shared flags in ImGuiIO: io.ConfigInputTextCursorBlink and io.ConfigInputTextEnterKeepActive)
     */
    InputTextFlags: {
        /**
         * \/\/ Basic filters (also see ImGuiInputTextFlags_CallbackCharFilter)
         */
        None: number;
        /**
         * \/\/ Allow 0123456789.+-*\/
         */
        CharsDecimal: number;
        /**
         * \/\/ Allow 0123456789ABCDEFabcdef
         */
        CharsHexadecimal: number;
        /**
         * \/\/ Allow 0123456789.+-*\/eE (Scientific notation input)
         */
        CharsScientific: number;
        /**
         * \/\/ Turn a..z into A..Z
         */
        CharsUppercase: number;
        /**
         * \/\/ Filter out spaces, tabs
         */
        CharsNoBlank: number;
        /**
         * \/\/ Pressing TAB input a '\t' character into the text field
         */
        AllowTabInput: number;
        /**
         * \/\/ Return 'true' when Enter is pressed (as opposed to every time the value was modified). Consider using IsItemDeactivatedAfterEdit() instead!
         */
        EnterReturnsTrue: number;
        /**
         * \/\/ Escape key clears content if not empty, and deactivate otherwise (contrast to default behavior of Escape to revert)
         */
        EscapeClearsAll: number;
        /**
         * \/\/ In multi-line mode: validate with Enter, add new line with Ctrl+Enter (default is opposite: validate with Ctrl+Enter, add line with Enter). Note that Shift+Enter always enter a new line either way.
         */
        CtrlEnterForNewLine: number;
        /**
         * \/\/ Read-only mode
         */
        ReadOnly: number;
        /**
         * \/\/ Password mode, display all characters as '*', disable copy
         */
        Password: number;
        /**
         * \/\/ Overwrite mode
         */
        AlwaysOverwrite: number;
        /**
         * \/\/ Select entire text when first taking mouse focus
         */
        AutoSelectAll: number;
        /**
         * \/\/ InputFloat(), InputInt(), InputScalar() etc. only: parse empty string as zero value.
         */
        ParseEmptyRefVal: number;
        /**
         * \/\/ InputFloat(), InputInt(), InputScalar() etc. only: when value is zero, do not display it. Generally used with ImGuiInputTextFlags_ParseEmptyRefVal.
         */
        DisplayEmptyRefVal: number;
        /**
         * \/\/ Disable following the cursor horizontally
         */
        NoHorizontalScroll: number;
        /**
         * \/\/ Disable undo\/redo. Note that input text owns the text data while active, if you want to provide your own undo\/redo stack you need e.g. to call ClearActiveID().
         */
        NoUndoRedo: number;
        /**
         * \/\/ When text doesn't fit, elide left side to ensure right side stays visible. Useful for path\/filenames. Single-line only!
         */
        ElideLeft: number;
        /**
         * \/\/ Callback on pressing TAB (for completion handling)
         */
        CallbackCompletion: number;
        /**
         * \/\/ Callback on pressing Up\/Down arrows (for history handling)
         */
        CallbackHistory: number;
        /**
         * \/\/ Callback on each iteration. User code may query cursor position, modify text buffer.
         */
        CallbackAlways: number;
        /**
         * \/\/ Callback on character inputs to replace or discard them. Modify 'EventChar' to replace or discard, or return 1 in callback to discard.
         */
        CallbackCharFilter: number;
        /**
         * \/\/ Callback on buffer capacity changes request (beyond 'buf_size' parameter value), allowing the string to grow. Notify when the string wants to be resized (for string types which hold a cache of their Size). You will be provided a new BufSize in the callback and NEED to honor it. (see misc\/cpp\/imgui_stdlib.h for an example of using this)
         */
        CallbackResize: number;
        /**
         * \/\/ Callback on any edit. Note that InputText() already returns true on edit + you can always use IsItemEdited(). The callback is useful to manipulate the underlying buffer while focus is active.
         */
        CallbackEdit: number;
        /**
         * \/\/ InputTextMultiline(): word-wrap lines that are too long.
         */
        WordWrap: number;
    };
    /**
     * \/\/ Flags for ImGui::TreeNodeEx(), ImGui::CollapsingHeader*()
     */
    TreeNodeFlags: {
        None: number;
        /**
         * \/\/ Draw as selected
         */
        Selected: number;
        /**
         * \/\/ Draw frame with background (e.g. for CollapsingHeader)
         */
        Framed: number;
        /**
         * \/\/ Hit testing will allow subsequent widgets to overlap this one. Require previous frame HoveredId to match before being usable. Shortcut to calling SetNextItemAllowOverlap().
         */
        AllowOverlap: number;
        /**
         * \/\/ Don't do a TreePush() when open (e.g. for CollapsingHeader) = no extra indent nor pushing on ID stack
         */
        NoTreePushOnOpen: number;
        /**
         * \/\/ Don't automatically and temporarily open node when Logging is active (by default logging will automatically open tree nodes)
         */
        NoAutoOpenOnLog: number;
        /**
         * \/\/ Default node to be open
         */
        DefaultOpen: number;
        /**
         * \/\/ Open on double-click instead of simple click (default for multi-select unless any _OpenOnXXX behavior is set explicitly). Both behaviors may be combined.
         */
        OpenOnDoubleClick: number;
        /**
         * \/\/ Open when clicking on the arrow part (default for multi-select unless any _OpenOnXXX behavior is set explicitly). Both behaviors may be combined.
         */
        OpenOnArrow: number;
        /**
         * \/\/ No collapsing, no arrow (use as a convenience for leaf nodes). Note: will always open a tree\/id scope and return true. If you never use that scope, add ImGuiTreeNodeFlags_NoTreePushOnOpen.
         */
        Leaf: number;
        /**
         * \/\/ Display a bullet instead of arrow. IMPORTANT: node can still be marked open\/close if you don't set the _Leaf flag!
         */
        Bullet: number;
        /**
         * \/\/ Use FramePadding (even for an unframed text node) to vertically align text baseline to regular widget height. Equivalent to calling AlignTextToFramePadding() before the node.
         */
        FramePadding: number;
        /**
         * \/\/ Extend hit box to the right-most edge, even if not framed. This is not the default in order to allow adding other items on the same line without using AllowOverlap mode.
         */
        SpanAvailWidth: number;
        /**
         * \/\/ Extend hit box to the left-most and right-most edges (cover the indent area).
         */
        SpanFullWidth: number;
        /**
         * \/\/ Narrow hit box + narrow hovering highlight, will only cover the label text.
         */
        SpanLabelWidth: number;
        /**
         * \/\/ Frame will span all columns of its container table (label will still fit in current column)
         */
        SpanAllColumns: number;
        /**
         * \/\/ Label will span all columns of its container table
         */
        LabelSpanAllColumns: number;
        /**
         * \/\/ Nav: left arrow moves back to parent. This is processed in TreePop() when there's an unfulfilled Left nav request remaining.
         */
        NavLeftJumpsToParent: number;
        CollapsingHeader: number;
        /**
         * \/\/ No lines drawn
         */
        DrawLinesNone: number;
        /**
         * \/\/ Horizontal lines to child nodes. Vertical line drawn down to TreePop() position: cover full contents. Faster (for large trees).
         */
        DrawLinesFull: number;
        /**
         * \/\/ Horizontal lines to child nodes. Vertical line drawn down to bottom-most child node. Slower (for large trees).
         */
        DrawLinesToNodes: number;
    };
    /**
     * \/\/ Flags for OpenPopup*(), BeginPopupContext*(), IsPopupOpen() functions.
     * \/\/ - IMPORTANT: If you ever used the left mouse button with BeginPopupContextXXX() helpers before 1.92.6: Read "API BREAKING CHANGES" 2026\/01\/07 (1.92.6) entry in imgui.cpp or GitHub topic #9157.
     * \/\/ - Multiple buttons currently cannot be combined\/or-ed in those functions (we could allow it later).
     */
    PopupFlags: {
        None: number;
        /**
         * \/\/ For BeginPopupContext*(): open on Left Mouse release. Only one button allowed!
         */
        MouseButtonLeft: number;
        /**
         * \/\/ For BeginPopupContext*(): open on Right Mouse release. Only one button allowed! (default)
         */
        MouseButtonRight: number;
        /**
         * \/\/ For BeginPopupContext*(): open on Middle Mouse release. Only one button allowed!
         */
        MouseButtonMiddle: number;
        /**
         * \/\/ For OpenPopup*(), BeginPopupContext*(): don't reopen same popup if already open (won't reposition, won't reinitialize navigation)
         */
        NoReopen: number;
        /**
         * \/\/ For OpenPopup*(), BeginPopupContext*(): don't open if there's already a popup at the same level of the popup stack
         */
        NoOpenOverExistingPopup: number;
        /**
         * \/\/ For BeginPopupContextWindow(): don't return true when hovering items, only when hovering empty space
         */
        NoOpenOverItems: number;
        /**
         * \/\/ For IsPopupOpen(): ignore the ImGuiID parameter and test for any popup.
         */
        AnyPopupId: number;
        /**
         * \/\/ For IsPopupOpen(): search\/test at any level of the popup stack (default test in the current level)
         */
        AnyPopupLevel: number;
        AnyPopup: number;
    };
    /**
     * \/\/ Flags for ImGui::Selectable()
     */
    SelectableFlags: {
        None: number;
        /**
         * \/\/ Clicking this doesn't close parent popup window (overrides ImGuiItemFlags_AutoClosePopups)
         */
        NoAutoClosePopups: number;
        /**
         * \/\/ Frame will span all columns of its container table (text will still fit in current column)
         */
        SpanAllColumns: number;
        /**
         * \/\/ Generate press events on double clicks too
         */
        AllowDoubleClick: number;
        /**
         * \/\/ Cannot be selected, display grayed out text
         */
        Disabled: number;
        /**
         * \/\/ Hit testing will allow subsequent widgets to overlap this one. Require previous frame HoveredId to match before being usable. Shortcut to calling SetNextItemAllowOverlap().
         */
        AllowOverlap: number;
        /**
         * \/\/ Make the item be displayed as if it is hovered
         */
        Highlight: number;
        /**
         * \/\/ Auto-select when moved into, unless Ctrl is held. Automatic when in a BeginMultiSelect() block.
         */
        SelectOnNav: number;
    };
    /**
     * \/\/ Flags for ImGui::BeginCombo()
     */
    ComboFlags: {
        None: number;
        /**
         * \/\/ Align the popup toward the left by default
         */
        PopupAlignLeft: number;
        /**
         * \/\/ Max ~4 items visible. Tip: If you want your combo popup to be a specific size you can use SetNextWindowSizeConstraints() prior to calling BeginCombo()
         */
        HeightSmall: number;
        /**
         * \/\/ Max ~8 items visible (default)
         */
        HeightRegular: number;
        /**
         * \/\/ Max ~20 items visible
         */
        HeightLarge: number;
        /**
         * \/\/ As many fitting items as possible
         */
        HeightLargest: number;
        /**
         * \/\/ Display on the preview box without the square arrow button
         */
        NoArrowButton: number;
        /**
         * \/\/ Display only a square arrow button
         */
        NoPreview: number;
        /**
         * \/\/ Width dynamically calculated from preview contents
         */
        WidthFitPreview: number;
    };
    /**
     * \/\/ Flags for ImGui::BeginTabBar()
     */
    TabBarFlags: {
        None: number;
        /**
         * \/\/ Allow manually dragging tabs to re-order them + New tabs are appended at the end of list
         */
        Reorderable: number;
        /**
         * \/\/ Automatically select new tabs when they appear
         */
        AutoSelectNewTabs: number;
        /**
         * \/\/ Disable buttons to open the tab list popup
         */
        TabListPopupButton: number;
        /**
         * \/\/ Disable behavior of closing tabs (that are submitted with p_open != NULL) with middle mouse button. You may handle this behavior manually on user's side with if (IsItemHovered() && IsMouseClicked(2)) *p_open = false.
         */
        NoCloseWithMiddleMouseButton: number;
        /**
         * \/\/ Disable scrolling buttons (apply when fitting policy is ImGuiTabBarFlags_FittingPolicyScroll)
         */
        NoTabListScrollingButtons: number;
        /**
         * \/\/ Disable tooltips when hovering a tab
         */
        NoTooltip: number;
        /**
         * \/\/ Draw selected overline markers over selected tab
         */
        DrawSelectedOverline: number;
        /**
         * \/\/ Shrink down tabs when they don't fit, until width is style.TabMinWidthShrink, then enable scrolling buttons.
         */
        FittingPolicyMixed: number;
        /**
         * \/\/ Shrink down tabs when they don't fit
         */
        FittingPolicyShrink: number;
        /**
         * \/\/ Enable scrolling buttons when tabs don't fit
         */
        FittingPolicyScroll: number;
    };
    /**
     * \/\/ Flags for ImGui::BeginTabItem()
     */
    TabItemFlags: {
        None: number;
        /**
         * \/\/ Display a dot next to the title + set ImGuiTabItemFlags_NoAssumedClosure.
         */
        UnsavedDocument: number;
        /**
         * \/\/ Trigger flag to programmatically make the tab selected when calling BeginTabItem()
         */
        SetSelected: number;
        /**
         * \/\/ Disable behavior of closing tabs (that are submitted with p_open != NULL) with middle mouse button. You may handle this behavior manually on user's side with if (IsItemHovered() && IsMouseClicked(2)) *p_open = false.
         */
        NoCloseWithMiddleMouseButton: number;
        /**
         * \/\/ Don't call PushID()\/PopID() on BeginTabItem()\/EndTabItem()
         */
        NoPushId: number;
        /**
         * \/\/ Disable tooltip for the given tab
         */
        NoTooltip: number;
        /**
         * \/\/ Disable reordering this tab or having another tab cross over this tab
         */
        NoReorder: number;
        /**
         * \/\/ Enforce the tab position to the left of the tab bar (after the tab list popup button)
         */
        Leading: number;
        /**
         * \/\/ Enforce the tab position to the right of the tab bar (before the scrolling buttons)
         */
        Trailing: number;
        /**
         * \/\/ Tab is selected when trying to close + closure is not immediately assumed (will wait for user to stop submitting the tab). Otherwise closure is assumed when pressing the X, so if you keep submitting the tab may reappear at end of tab bar.
         */
        NoAssumedClosure: number;
    };
    /**
     * \/\/ Flags for ImGui::IsWindowFocused()
     */
    FocusedFlags: {
        None: number;
        /**
         * \/\/ Return true if any children of the window is focused
         */
        ChildWindows: number;
        /**
         * \/\/ Test from root window (top most parent of the current hierarchy)
         */
        RootWindow: number;
        /**
         * \/\/ Return true if any window is focused. Important: If you are trying to tell how to dispatch your low-level inputs, do NOT use this. Use 'io.WantCaptureMouse' instead! Please read the FAQ!
         */
        AnyWindow: number;
        /**
         * \/\/ Do not consider popup hierarchy (do not treat popup emitter as parent of popup) (when used with _ChildWindows or _RootWindow)
         */
        NoPopupHierarchy: number;
        /**
         * \/\/ Consider docking hierarchy (treat dockspace host as parent of docked window) (when used with _ChildWindows or _RootWindow)
         */
        DockHierarchy: number;
        RootAndChildWindows: number;
    };
    /**
     * \/\/ Flags for ImGui::IsItemHovered(), ImGui::IsWindowHovered()
     * \/\/ Note: if you are trying to check whether your mouse should be dispatched to Dear ImGui or to your app, you should use 'io.WantCaptureMouse' instead! Please read the FAQ!
     * \/\/ Note: windows with the ImGuiWindowFlags_NoInputs flag are ignored by IsWindowHovered() calls.
     */
    HoveredFlags: {
        /**
         * \/\/ Return true if directly over the item\/window, not obstructed by another window, not obstructed by an active popup or modal blocking inputs under them.
         */
        None: number;
        /**
         * \/\/ IsWindowHovered() only: Return true if any children of the window is hovered
         */
        ChildWindows: number;
        /**
         * \/\/ IsWindowHovered() only: Test from root window (top most parent of the current hierarchy)
         */
        RootWindow: number;
        /**
         * \/\/ IsWindowHovered() only: Return true if any window is hovered
         */
        AnyWindow: number;
        /**
         * \/\/ IsWindowHovered() only: Do not consider popup hierarchy (do not treat popup emitter as parent of popup) (when used with _ChildWindows or _RootWindow)
         */
        NoPopupHierarchy: number;
        /**
         * \/\/ IsWindowHovered() only: Consider docking hierarchy (treat dockspace host as parent of docked window) (when used with _ChildWindows or _RootWindow)
         */
        DockHierarchy: number;
        /**
         * \/\/ Return true even if a popup window is normally blocking access to this item\/window
         */
        AllowWhenBlockedByPopup: number;
        /**
         * \/\/ Return true even if an active item is blocking access to this item\/window. Useful for Drag and Drop patterns.
         */
        AllowWhenBlockedByActiveItem: number;
        /**
         * \/\/ IsItemHovered() only: Return true even if the item uses AllowOverlap mode and is overlapped by another hoverable item.
         */
        AllowWhenOverlappedByItem: number;
        /**
         * \/\/ IsItemHovered() only: Return true even if the position is obstructed or overlapped by another window.
         */
        AllowWhenOverlappedByWindow: number;
        /**
         * \/\/ IsItemHovered() only: Return true even if the item is disabled
         */
        AllowWhenDisabled: number;
        /**
         * \/\/ IsItemHovered() only: Disable using keyboard\/gamepad navigation state when active, always query mouse
         */
        NoNavOverride: number;
        AllowWhenOverlapped: number;
        RectOnly: number;
        RootAndChildWindows: number;
        /**
         * \/\/ Shortcut for standard flags when using IsItemHovered() + SetTooltip() sequence.
         */
        ForTooltip: number;
        /**
         * \/\/ Require mouse to be stationary for style.HoverStationaryDelay (~0.15 sec) _at least one time_. After this, can move on same item\/window. Using the stationary test tends to reduces the need for a long delay.
         */
        Stationary: number;
        /**
         * \/\/ IsItemHovered() only: Return true immediately (default). As this is the default you generally ignore this.
         */
        DelayNone: number;
        /**
         * \/\/ IsItemHovered() only: Return true after style.HoverDelayShort elapsed (~0.15 sec) (shared between items) + requires mouse to be stationary for style.HoverStationaryDelay (once per item).
         */
        DelayShort: number;
        /**
         * \/\/ IsItemHovered() only: Return true after style.HoverDelayNormal elapsed (~0.40 sec) (shared between items) + requires mouse to be stationary for style.HoverStationaryDelay (once per item).
         */
        DelayNormal: number;
        /**
         * \/\/ IsItemHovered() only: Disable shared delay system where moving from one item to the next keeps the previous timer for a short time (standard for tooltips with long delays)
         */
        NoSharedDelay: number;
    };
    /**
     * \/\/ Flags for ImGui::DockSpace(), shared\/inherited by child nodes.
     * \/\/ (Some flags can be applied to individual nodes directly)
     * \/\/ FIXME-DOCK: Also see ImGuiDockNodeFlagsPrivate_ which may involve using the WIP and internal DockBuilder api.
     */
    DockNodeFlags: {
        None: number;
        /**
         * \/\/       \/\/ Don't display the dockspace node but keep it alive. Windows docked into this dockspace node won't be undocked.
         */
        KeepAliveOnly: number;
        /**
         * \/\/       \/\/ Disable docking over the Central Node, which will be always kept empty.
         */
        NoDockingOverCentralNode: number;
        /**
         * \/\/       \/\/ Enable passthru dockspace: 1) DockSpace() will render a ImGuiCol_WindowBg background covering everything excepted the Central Node when empty. Meaning the host window should probably use SetNextWindowBgAlpha(0.0f) prior to Begin() when using this. 2) When Central Node is empty: let inputs pass-through + won't display a DockingEmptyBg background. See demo for details.
         */
        PassthruCentralNode: number;
        /**
         * \/\/       \/\/ Disable other windows\/nodes from splitting this node.
         */
        NoDockingSplit: number;
        /**
         * \/\/ Saved \/\/ Disable resizing node using the splitter\/separators. Useful with programmatically setup dockspaces.
         */
        NoResize: number;
        /**
         * \/\/       \/\/ Tab bar will automatically hide when there is a single window in the dock node.
         */
        AutoHideTabBar: number;
        /**
         * \/\/       \/\/ Disable undocking this node.
         */
        NoUndocking: number;
    };
    /**
     * \/\/ Flags for ImGui::BeginDragDropSource(), ImGui::AcceptDragDropPayload()
     */
    DragDropFlags: {
        None: number;
        /**
         * \/\/ Disable preview tooltip. By default, a successful call to BeginDragDropSource opens a tooltip so you can display a preview or description of the source contents. This flag disables this behavior.
         */
        SourceNoPreviewTooltip: number;
        /**
         * \/\/ By default, when dragging we clear data so that IsItemHovered() will return false, to avoid subsequent user code submitting tooltips. This flag disables this behavior so you can still call IsItemHovered() on the source item.
         */
        SourceNoDisableHover: number;
        /**
         * \/\/ Disable the behavior that allows to open tree nodes and collapsing header by holding over them while dragging a source item.
         */
        SourceNoHoldToOpenOthers: number;
        /**
         * \/\/ Allow items such as Text(), Image() that have no unique identifier to be used as drag source, by manufacturing a temporary identifier based on their window-relative position. This is extremely unusual within the dear imgui ecosystem and so we made it explicit.
         */
        SourceAllowNullID: number;
        /**
         * \/\/ External source (from outside of dear imgui), won't attempt to read current item\/window info. Will always return true. Only one Extern source can be active simultaneously.
         */
        SourceExtern: number;
        /**
         * \/\/ Automatically expire the payload if the source cease to be submitted (otherwise payloads are persisting while being dragged)
         */
        PayloadAutoExpire: number;
        /**
         * \/\/ Hint to specify that the payload may not be copied outside current dear imgui context.
         */
        PayloadNoCrossContext: number;
        /**
         * \/\/ Hint to specify that the payload may not be copied outside current process.
         */
        PayloadNoCrossProcess: number;
        /**
         * \/\/ AcceptDragDropPayload() will returns true even before the mouse button is released. You can then call IsDelivery() to test if the payload needs to be delivered.
         */
        AcceptBeforeDelivery: number;
        /**
         * \/\/ Do not draw the default highlight rectangle when hovering over target.
         */
        AcceptNoDrawDefaultRect: number;
        /**
         * \/\/ Request hiding the BeginDragDropSource tooltip from the BeginDragDropTarget site.
         */
        AcceptNoPreviewTooltip: number;
        /**
         * \/\/ Accepting item will render as if hovered. Useful for e.g. a Button() used as a drop target.
         */
        AcceptDrawAsHovered: number;
        /**
         * \/\/ For peeking ahead and inspecting the payload before delivery.
         */
        AcceptPeekOnly: number;
    };
    /**
     * \/\/ A primary data type
     */
    DataType: {
        /**
         * \/\/ signed char \/ char (with sensible compilers)
         */
        S8: number;
        /**
         * \/\/ unsigned char
         */
        U8: number;
        /**
         * \/\/ short
         */
        S16: number;
        /**
         * \/\/ unsigned short
         */
        U16: number;
        /**
         * \/\/ int
         */
        S32: number;
        /**
         * \/\/ unsigned int
         */
        U32: number;
        /**
         * \/\/ long long \/ __int64
         */
        S64: number;
        /**
         * \/\/ unsigned long long \/ unsigned __int64
         */
        U64: number;
        /**
         * \/\/ float
         */
        Float: number;
        /**
         * \/\/ double
         */
        Double: number;
        /**
         * \/\/ bool (provided for user convenience, not supported by scalar widgets)
         */
        Bool: number;
        /**
         * \/\/ char* (provided for user convenience, not supported by scalar widgets)
         */
        String: number;
        COUNT: number;
    };
    /**
     * \/\/ Forward declared enum type ImGuiDir
     */
    Dir: {
        _None: number;
        _Left: number;
        _Right: number;
        _Up: number;
        _Down: number;
        _COUNT: number;
    };
    /**
     * \/\/ Forward declared enum type ImGuiSortDirection
     */
    SortDirection: {
        _None: number;
        /**
         * \/\/ Ascending = 0->9, A->Z etc.
         */
        _Ascending: number;
        /**
         * \/\/ Descending = 9->0, Z->A etc.
         */
        _Descending: number;
    };
    /**
     * \/\/ Forward declared enum type ImGuiKey
     */
    Key: {
        /**
         * \/\/ Keyboard
         */
        _None: number;
        /**
         * \/\/ First valid key value (other than 0)
         */
        _NamedKey_BEGIN: number;
        /**
         * \/\/ == ImGuiKey_NamedKey_BEGIN
         */
        _Tab: number;
        _LeftArrow: number;
        _RightArrow: number;
        _UpArrow: number;
        _DownArrow: number;
        _PageUp: number;
        _PageDown: number;
        _Home: number;
        _End: number;
        _Insert: number;
        _Delete: number;
        _Backspace: number;
        _Space: number;
        _Enter: number;
        _Escape: number;
        _LeftCtrl: number;
        _LeftShift: number;
        _LeftAlt: number;
        /**
         * \/\/ Also see ImGuiMod_Ctrl, ImGuiMod_Shift, ImGuiMod_Alt, ImGuiMod_Super below!
         */
        _LeftSuper: number;
        _RightCtrl: number;
        _RightShift: number;
        _RightAlt: number;
        _RightSuper: number;
        _Menu: number;
        _0: number;
        _1: number;
        _2: number;
        _3: number;
        _4: number;
        _5: number;
        _6: number;
        _7: number;
        _8: number;
        _9: number;
        _A: number;
        _B: number;
        _C: number;
        _D: number;
        _E: number;
        _F: number;
        _G: number;
        _H: number;
        _I: number;
        _J: number;
        _K: number;
        _L: number;
        _M: number;
        _N: number;
        _O: number;
        _P: number;
        _Q: number;
        _R: number;
        _S: number;
        _T: number;
        _U: number;
        _V: number;
        _W: number;
        _X: number;
        _Y: number;
        _Z: number;
        _F1: number;
        _F2: number;
        _F3: number;
        _F4: number;
        _F5: number;
        _F6: number;
        _F7: number;
        _F8: number;
        _F9: number;
        _F10: number;
        _F11: number;
        _F12: number;
        _F13: number;
        _F14: number;
        _F15: number;
        _F16: number;
        _F17: number;
        _F18: number;
        _F19: number;
        _F20: number;
        _F21: number;
        _F22: number;
        _F23: number;
        _F24: number;
        /**
         * \/\/ '
         */
        _Apostrophe: number;
        /**
         * \/\/ ,
         */
        _Comma: number;
        /**
         * \/\/ -
         */
        _Minus: number;
        /**
         * \/\/ .
         */
        _Period: number;
        /**
         * \/\/ \/
         */
        _Slash: number;
        /**
         * \/\/ ;
         */
        _Semicolon: number;
        /**
         * \/\/ =
         */
        _Equal: number;
        /**
         * \/\/ [
         */
        _LeftBracket: number;
        /**
         * \/\/ \ (this text inhibit multiline comment caused by backslash)
         */
        _Backslash: number;
        /**
         * \/\/ ]
         */
        _RightBracket: number;
        /**
         * \/\/ `
         */
        _GraveAccent: number;
        _CapsLock: number;
        _ScrollLock: number;
        _NumLock: number;
        _PrintScreen: number;
        _Pause: number;
        _Keypad0: number;
        _Keypad1: number;
        _Keypad2: number;
        _Keypad3: number;
        _Keypad4: number;
        _Keypad5: number;
        _Keypad6: number;
        _Keypad7: number;
        _Keypad8: number;
        _Keypad9: number;
        _KeypadDecimal: number;
        _KeypadDivide: number;
        _KeypadMultiply: number;
        _KeypadSubtract: number;
        _KeypadAdd: number;
        _KeypadEnter: number;
        _KeypadEqual: number;
        /**
         * \/\/ Available on some keyboard\/mouses. Often referred as "Browser Back"
         */
        _AppBack: number;
        _AppForward: number;
        /**
         * \/\/ Non-US backslash.
         */
        _Oem102: number;
        /**
         * \/\/ Menu        | +       | Options  |
         */
        _GamepadStart: number;
        /**
         * \/\/ View        | -       | Share    |
         */
        _GamepadBack: number;
        /**
         * \/\/ X           | Y       | Square   | Toggle Menu. Hold for Windowing mode (Focus\/Move\/Resize windows)
         */
        _GamepadFaceLeft: number;
        /**
         * \/\/ B           | A       | Circle   | Cancel \/ Close \/ Exit
         */
        _GamepadFaceRight: number;
        /**
         * \/\/ Y           | X       | Triangle | Open Context Menu
         */
        _GamepadFaceUp: number;
        /**
         * \/\/ A           | B       | Cross    | Activate \/ Open \/ Toggle. Hold for 0.60f to Activate in Text Input mode (e.g. wired to an on-screen keyboard).
         */
        _GamepadFaceDown: number;
        /**
         * \/\/ D-pad Left  | "       | "        | Move \/ Tweak \/ Resize Window (in Windowing mode)
         */
        _GamepadDpadLeft: number;
        /**
         * \/\/ D-pad Right | "       | "        | Move \/ Tweak \/ Resize Window (in Windowing mode)
         */
        _GamepadDpadRight: number;
        /**
         * \/\/ D-pad Up    | "       | "        | Move \/ Tweak \/ Resize Window (in Windowing mode)
         */
        _GamepadDpadUp: number;
        /**
         * \/\/ D-pad Down  | "       | "        | Move \/ Tweak \/ Resize Window (in Windowing mode)
         */
        _GamepadDpadDown: number;
        /**
         * \/\/ L Bumper    | L       | L1       | Tweak Slower \/ Focus Previous (in Windowing mode)
         */
        _GamepadL1: number;
        /**
         * \/\/ R Bumper    | R       | R1       | Tweak Faster \/ Focus Next (in Windowing mode)
         */
        _GamepadR1: number;
        /**
         * \/\/ L Trigger   | ZL      | L2       | [Analog]
         */
        _GamepadL2: number;
        /**
         * \/\/ R Trigger   | ZR      | R2       | [Analog]
         */
        _GamepadR2: number;
        /**
         * \/\/ L Stick     | L3      | L3       |
         */
        _GamepadL3: number;
        /**
         * \/\/ R Stick     | R3      | R3       |
         */
        _GamepadR3: number;
        /**
         * \/\/             |         |          | [Analog] Move Window (in Windowing mode)
         */
        _GamepadLStickLeft: number;
        /**
         * \/\/             |         |          | [Analog] Move Window (in Windowing mode)
         */
        _GamepadLStickRight: number;
        /**
         * \/\/             |         |          | [Analog] Move Window (in Windowing mode)
         */
        _GamepadLStickUp: number;
        /**
         * \/\/             |         |          | [Analog] Move Window (in Windowing mode)
         */
        _GamepadLStickDown: number;
        /**
         * \/\/             |         |          | [Analog]
         */
        _GamepadRStickLeft: number;
        /**
         * \/\/             |         |          | [Analog]
         */
        _GamepadRStickRight: number;
        /**
         * \/\/             |         |          | [Analog]
         */
        _GamepadRStickUp: number;
        /**
         * \/\/             |         |          | [Analog]
         */
        _GamepadRStickDown: number;
        /**
         * \/\/ Aliases: Mouse Buttons (auto-submitted from AddMouseButtonEvent() calls)
         * \/\/ - This is mirroring the data also written to io.MouseDown[], io.MouseWheel, in a format allowing them to be accessed via standard key API.
         */
        _MouseLeft: number;
        _MouseRight: number;
        _MouseMiddle: number;
        _MouseX1: number;
        _MouseX2: number;
        _MouseWheelX: number;
        _MouseWheelY: number;
        /**
         * \/\/ Keyboard Modifiers (explicitly submitted by backend via AddKeyEvent() calls)
         * \/\/ - Any functions taking a ImGuiKeyChord parameter can binary-or those with regular keys, e.g. Shortcut(ImGuiMod_Ctrl | ImGuiKey_S).
         * \/\/ - Those are written back into io.KeyCtrl, io.KeyShift, io.KeyAlt, io.KeySuper for convenience,
         * \/\/   but may be accessed via standard key API such as IsKeyPressed(), IsKeyReleased(), querying duration etc.
         * \/\/ - Code polling every key (e.g. an interface to detect a key press for input mapping) might want to ignore those
         * \/\/   and prefer using the real keys (e.g. ImGuiKey_LeftCtrl, ImGuiKey_RightCtrl instead of ImGuiMod_Ctrl).
         * \/\/ - In theory the value of keyboard modifiers should be roughly equivalent to a logical or of the equivalent left\/right keys.
         * \/\/   In practice: it's complicated; mods are often provided from different sources. Keyboard layout, IME, sticky keys and
         * \/\/   backends tend to interfere and break that equivalence. The safer decision is to relay that ambiguity down to the end-user...
         * \/\/ - On macOS, we swap Cmd(Super) and Ctrl keys at the time of the io.AddKeyEvent() call.
         */
        ImGuiMod_None: number;
        /**
         * \/\/ Ctrl (non-macOS), Cmd (macOS)
         */
        ImGuiMod_Ctrl: number;
        /**
         * \/\/ Shift
         */
        ImGuiMod_Shift: number;
        /**
         * \/\/ Option\/Menu
         */
        ImGuiMod_Alt: number;
        /**
         * \/\/ Windows\/Super (non-macOS), Ctrl (macOS)
         */
        ImGuiMod_Super: number;
    };
    /**
     * \/\/ Flags for Shortcut(), SetNextItemShortcut(),
     * \/\/ (and for upcoming extended versions of IsKeyPressed(), IsMouseClicked(), Shortcut(), SetKeyOwner(), SetItemKeyOwner() that are still in imgui_internal.h)
     * \/\/ Don't mistake with ImGuiInputTextFlags! (which is for ImGui::InputText() function)
     */
    InputFlags: {
        None: number;
        /**
         * \/\/ Enable repeat. Return true on successive repeats. Default for legacy IsKeyPressed(). NOT Default for legacy IsMouseClicked(). MUST BE == 1.
         */
        Repeat: number;
        /**
         * \/\/ Route to active item only.
         */
        RouteActive: number;
        /**
         * \/\/ Route to windows in the focus stack (DEFAULT). Deep-most focused window takes inputs. Active item takes inputs over deep-most focused window.
         */
        RouteFocused: number;
        /**
         * \/\/ Global route (unless a focused window or active item registered the route).
         */
        RouteGlobal: number;
        /**
         * \/\/ Do not register route, poll keys directly.
         */
        RouteAlways: number;
        /**
         * \/\/ Option: global route: higher priority than focused route (unless active item in focused route).
         */
        RouteOverFocused: number;
        /**
         * \/\/ Option: global route: higher priority than active item. Unlikely you need to use that: will interfere with every active items, e.g. Ctrl+A registered by InputText will be overridden by this. May not be fully honored as user\/internal code is likely to always assume they can access keys when active.
         */
        RouteOverActive: number;
        /**
         * \/\/ Option: global route: will not be applied if underlying background\/void is focused (== no Dear ImGui windows are focused). Useful for overlay applications.
         */
        RouteUnlessBgFocused: number;
        /**
         * \/\/ Option: route evaluated from the point of view of root window rather than current window.
         */
        RouteFromRootWindow: number;
        /**
         * \/\/ Automatically display a tooltip when hovering item [BETA] Unsure of right api (opt-in\/opt-out)
         */
        Tooltip: number;
    };
    /**
     * \/\/ Configuration flags stored in io.ConfigFlags. Set by user\/application.
     * \/\/ Note that nowadays most of our configuration options are in other ImGuiIO fields, e.g. io.ConfigWindowsMoveFromTitleBarOnly.
     */
    ConfigFlags: {
        None: number;
        /**
         * \/\/ Master keyboard navigation enable flag. Enable full Tabbing + directional arrows + Space\/Enter to activate. Note: some features such as basic Tabbing and CtrL+Tab are enabled by regardless of this flag (and may be disabled via other means, see #4828, #9218).
         */
        NavEnableKeyboard: number;
        /**
         * \/\/ Master gamepad navigation enable flag. Backend also needs to set ImGuiBackendFlags_HasGamepad.
         */
        NavEnableGamepad: number;
        /**
         * \/\/ Instruct dear imgui to disable mouse inputs and interactions.
         */
        NoMouse: number;
        /**
         * \/\/ Instruct backend to not alter mouse cursor shape and visibility. Use if the backend cursor changes are interfering with yours and you don't want to use SetMouseCursor() to change mouse cursor. You may want to honor requests from imgui by reading GetMouseCursor() yourself instead.
         */
        NoMouseCursorChange: number;
        /**
         * \/\/ Instruct dear imgui to disable keyboard inputs and interactions. This is done by ignoring keyboard events and clearing existing states.
         */
        NoKeyboard: number;
        /**
         * \/\/ Docking enable flags.
         */
        DockingEnable: number;
        /**
         * \/\/ Viewport enable flags (require both ImGuiBackendFlags_PlatformHasViewports + ImGuiBackendFlags_RendererHasViewports set by the respective backends)
         */
        ViewportsEnable: number;
        /**
         * \/\/ Application is SRGB-aware.
         */
        IsSRGB: number;
        /**
         * \/\/ Application is using a touch screen instead of a mouse.
         */
        IsTouchScreen: number;
    };
    /**
     * \/\/ Backend capabilities flags stored in io.BackendFlags. Set by imgui_impl_xxx or custom backend.
     */
    BackendFlags: {
        None: number;
        /**
         * \/\/ Backend Platform supports gamepad and currently has one connected.
         */
        HasGamepad: number;
        /**
         * \/\/ Backend Platform supports honoring GetMouseCursor() value to change the OS cursor shape.
         */
        HasMouseCursors: number;
        /**
         * \/\/ Backend Platform supports io.WantSetMousePos requests to reposition the OS mouse position (only used if io.ConfigNavMoveSetMousePos is set).
         */
        HasSetMousePos: number;
        /**
         * \/\/ Backend Renderer supports ImDrawCmd::VtxOffset. This enables output of large meshes (64K+ vertices) while still using 16-bit indices.
         */
        RendererHasVtxOffset: number;
        /**
         * \/\/ Backend Renderer supports ImTextureData requests to create\/update\/destroy textures. This enables incremental texture updates and texture reloads. See https:\/\/github.com\/ocornut\/imgui\/blob\/master\/docs\/BACKENDS.md for instructions on how to upgrade your custom backend.
         */
        RendererHasTextures: number;
        /**
         * \/\/ Backend Renderer supports multiple viewports.
         */
        RendererHasViewports: number;
        /**
         * \/\/ Backend Platform supports multiple viewports.
         */
        PlatformHasViewports: number;
        /**
         * \/\/ Backend Platform supports calling io.AddMouseViewportEvent() with the viewport under the mouse. IF POSSIBLE, ignore viewports with the ImGuiViewportFlags_NoInputs flag (Win32 backend, GLFW 3.30+ backend can do this, SDL backend cannot). If this cannot be done, Dear ImGui needs to use a flawed heuristic to find the viewport under.
         */
        HasMouseHoveredViewport: number;
        /**
         * \/\/ Backend Platform supports honoring viewport->ParentViewport\/ParentViewportId value, by applying the corresponding parent\/child relation at the Platform level.
         */
        HasParentViewport: number;
    };
    /**
     * \/\/ Enumeration for PushStyleColor() \/ PopStyleColor()
     */
    Col: {
        Text: number;
        TextDisabled: number;
        /**
         * \/\/ Background of normal windows
         */
        WindowBg: number;
        /**
         * \/\/ Background of child windows
         */
        ChildBg: number;
        /**
         * \/\/ Background of popups, menus, tooltips windows
         */
        PopupBg: number;
        Border: number;
        BorderShadow: number;
        /**
         * \/\/ Background of checkbox, radio button, plot, slider, text input
         */
        FrameBg: number;
        FrameBgHovered: number;
        FrameBgActive: number;
        /**
         * \/\/ Title bar
         */
        TitleBg: number;
        /**
         * \/\/ Title bar when focused
         */
        TitleBgActive: number;
        /**
         * \/\/ Title bar when collapsed
         */
        TitleBgCollapsed: number;
        MenuBarBg: number;
        ScrollbarBg: number;
        ScrollbarGrab: number;
        ScrollbarGrabHovered: number;
        ScrollbarGrabActive: number;
        /**
         * \/\/ Checkbox tick and RadioButton circle
         */
        CheckMark: number;
        SliderGrab: number;
        SliderGrabActive: number;
        Button: number;
        ButtonHovered: number;
        ButtonActive: number;
        /**
         * \/\/ Header* colors are used for CollapsingHeader, TreeNode, Selectable, MenuItem
         */
        Header: number;
        HeaderHovered: number;
        HeaderActive: number;
        Separator: number;
        SeparatorHovered: number;
        SeparatorActive: number;
        /**
         * \/\/ Resize grip in lower-right and lower-left corners of windows.
         */
        ResizeGrip: number;
        ResizeGripHovered: number;
        ResizeGripActive: number;
        /**
         * \/\/ InputText cursor\/caret
         */
        InputTextCursor: number;
        /**
         * \/\/ Tab background, when hovered
         */
        TabHovered: number;
        /**
         * \/\/ Tab background, when tab-bar is focused & tab is unselected
         */
        Tab: number;
        /**
         * \/\/ Tab background, when tab-bar is focused & tab is selected
         */
        TabSelected: number;
        /**
         * \/\/ Tab horizontal overline, when tab-bar is focused & tab is selected
         */
        TabSelectedOverline: number;
        /**
         * \/\/ Tab background, when tab-bar is unfocused & tab is unselected
         */
        TabDimmed: number;
        /**
         * \/\/ Tab background, when tab-bar is unfocused & tab is selected
         */
        TabDimmedSelected: number;
        /**
         * \/\/..horizontal overline, when tab-bar is unfocused & tab is selected
         */
        TabDimmedSelectedOverline: number;
        /**
         * \/\/ Preview overlay color when about to docking something
         */
        DockingPreview: number;
        /**
         * \/\/ Background color for empty node (e.g. CentralNode with no window docked into it)
         */
        DockingEmptyBg: number;
        PlotLines: number;
        PlotLinesHovered: number;
        PlotHistogram: number;
        PlotHistogramHovered: number;
        /**
         * \/\/ Table header background
         */
        TableHeaderBg: number;
        /**
         * \/\/ Table outer and header borders (prefer using Alpha=1.0 here)
         */
        TableBorderStrong: number;
        /**
         * \/\/ Table inner borders (prefer using Alpha=1.0 here)
         */
        TableBorderLight: number;
        /**
         * \/\/ Table row background (even rows)
         */
        TableRowBg: number;
        /**
         * \/\/ Table row background (odd rows)
         */
        TableRowBgAlt: number;
        /**
         * \/\/ Hyperlink color
         */
        TextLink: number;
        /**
         * \/\/ Selected text inside an InputText
         */
        TextSelectedBg: number;
        /**
         * \/\/ Tree node hierarchy outlines when using ImGuiTreeNodeFlags_DrawLines
         */
        TreeLines: number;
        /**
         * \/\/ Rectangle border highlighting a drop target
         */
        DragDropTarget: number;
        /**
         * \/\/ Rectangle background highlighting a drop target
         */
        DragDropTargetBg: number;
        /**
         * \/\/ Unsaved Document marker (in window title and tabs)
         */
        UnsavedMarker: number;
        /**
         * \/\/ Color of keyboard\/gamepad navigation cursor\/rectangle, when visible
         */
        NavCursor: number;
        /**
         * \/\/ Highlight window when using Ctrl+Tab
         */
        NavWindowingHighlight: number;
        /**
         * \/\/ Darken\/colorize entire screen behind the Ctrl+Tab window list, when active
         */
        NavWindowingDimBg: number;
        /**
         * \/\/ Darken\/colorize entire screen behind a modal window, when one is active
         */
        ModalWindowDimBg: number;
        COUNT: number;
    };
    /**
     * \/\/ Enumeration for PushStyleVar() \/ PopStyleVar() to temporarily modify the ImGuiStyle structure.
     * \/\/ - The enum only refers to fields of ImGuiStyle which makes sense to be pushed\/popped inside UI code.
     * \/\/   During initialization or between frames, feel free to just poke into ImGuiStyle directly.
     * \/\/ - Tip: Use your programming IDE navigation facilities on the names in the _second column_ below to find the actual members and their description.
     * \/\/   - In Visual Studio: Ctrl+Comma ("Edit.GoToAll") can follow symbols inside comments, whereas Ctrl+F12 ("Edit.GoToImplementation") cannot.
     * \/\/   - In Visual Studio w\/ Visual Assist installed: Alt+G ("VAssistX.GoToImplementation") can also follow symbols inside comments.
     * \/\/   - In VS Code, CLion, etc.: Ctrl+Click can follow symbols inside comments.
     * \/\/ - When changing this enum, you need to update the associated internal table GStyleVarInfo[] accordingly. This is where we link enum values to members offset\/type.
     */
    StyleVar: {
        /**
         * \/\/ float     Alpha
         */
        Alpha: number;
        /**
         * \/\/ float     DisabledAlpha
         */
        DisabledAlpha: number;
        /**
         * \/\/ ImVec2    WindowPadding
         */
        WindowPadding: number;
        /**
         * \/\/ float     WindowRounding
         */
        WindowRounding: number;
        /**
         * \/\/ float     WindowBorderSize
         */
        WindowBorderSize: number;
        /**
         * \/\/ ImVec2    WindowMinSize
         */
        WindowMinSize: number;
        /**
         * \/\/ ImVec2    WindowTitleAlign
         */
        WindowTitleAlign: number;
        /**
         * \/\/ float     ChildRounding
         */
        ChildRounding: number;
        /**
         * \/\/ float     ChildBorderSize
         */
        ChildBorderSize: number;
        /**
         * \/\/ float     PopupRounding
         */
        PopupRounding: number;
        /**
         * \/\/ float     PopupBorderSize
         */
        PopupBorderSize: number;
        /**
         * \/\/ ImVec2    FramePadding
         */
        FramePadding: number;
        /**
         * \/\/ float     FrameRounding
         */
        FrameRounding: number;
        /**
         * \/\/ float     FrameBorderSize
         */
        FrameBorderSize: number;
        /**
         * \/\/ ImVec2    ItemSpacing
         */
        ItemSpacing: number;
        /**
         * \/\/ ImVec2    ItemInnerSpacing
         */
        ItemInnerSpacing: number;
        /**
         * \/\/ float     IndentSpacing
         */
        IndentSpacing: number;
        /**
         * \/\/ ImVec2    CellPadding
         */
        CellPadding: number;
        /**
         * \/\/ float     ScrollbarSize
         */
        ScrollbarSize: number;
        /**
         * \/\/ float     ScrollbarRounding
         */
        ScrollbarRounding: number;
        /**
         * \/\/ float     ScrollbarPadding
         */
        ScrollbarPadding: number;
        /**
         * \/\/ float     GrabMinSize
         */
        GrabMinSize: number;
        /**
         * \/\/ float     GrabRounding
         */
        GrabRounding: number;
        /**
         * \/\/ float     ImageRounding
         */
        ImageRounding: number;
        /**
         * \/\/ float     ImageBorderSize
         */
        ImageBorderSize: number;
        /**
         * \/\/ float     TabRounding
         */
        TabRounding: number;
        /**
         * \/\/ float     TabBorderSize
         */
        TabBorderSize: number;
        /**
         * \/\/ float     TabMinWidthBase
         */
        TabMinWidthBase: number;
        /**
         * \/\/ float     TabMinWidthShrink
         */
        TabMinWidthShrink: number;
        /**
         * \/\/ float     TabBarBorderSize
         */
        TabBarBorderSize: number;
        /**
         * \/\/ float     TabBarOverlineSize
         */
        TabBarOverlineSize: number;
        /**
         * \/\/ float     TableAngledHeadersAngle
         */
        TableAngledHeadersAngle: number;
        /**
         * \/\/ ImVec2  TableAngledHeadersTextAlign
         */
        TableAngledHeadersTextAlign: number;
        /**
         * \/\/ float     TreeLinesSize
         */
        TreeLinesSize: number;
        /**
         * \/\/ float     TreeLinesRounding
         */
        TreeLinesRounding: number;
        /**
         * \/\/ ImVec2    ButtonTextAlign
         */
        ButtonTextAlign: number;
        /**
         * \/\/ ImVec2    SelectableTextAlign
         */
        SelectableTextAlign: number;
        /**
         * \/\/ float     SeparatorSize
         */
        SeparatorSize: number;
        /**
         * \/\/ float     SeparatorTextBorderSize
         */
        SeparatorTextBorderSize: number;
        /**
         * \/\/ ImVec2    SeparatorTextAlign
         */
        SeparatorTextAlign: number;
        /**
         * \/\/ ImVec2    SeparatorTextPadding
         */
        SeparatorTextPadding: number;
        /**
         * \/\/ float     DockingSeparatorSize
         */
        DockingSeparatorSize: number;
        COUNT: number;
    };
    /**
     * \/\/ Flags for InvisibleButton() [extended in imgui_internal.h]
     */
    ButtonFlags: {
        None: number;
        /**
         * \/\/ React on left mouse button (default)
         */
        MouseButtonLeft: number;
        /**
         * \/\/ React on right mouse button
         */
        MouseButtonRight: number;
        /**
         * \/\/ React on center mouse button
         */
        MouseButtonMiddle: number;
        /**
         * \/\/ InvisibleButton(): do not disable navigation\/tabbing. Otherwise disabled by default.
         */
        EnableNav: number;
        /**
         * \/\/ Hit testing will allow subsequent widgets to overlap this one. Require previous frame HoveredId to match before being usable. Shortcut to calling SetNextItemAllowOverlap().
         */
        AllowOverlap: number;
    };
    /**
     * \/\/ Flags for ColorEdit3() \/ ColorEdit4() \/ ColorPicker3() \/ ColorPicker4() \/ ColorButton()
     */
    ColorEditFlags: {
        None: number;
        /**
         * \/\/              \/\/ ColorEdit, ColorPicker, ColorButton: ignore Alpha component (will only read 3 components from the input pointer).
         */
        NoAlpha: number;
        /**
         * \/\/              \/\/ ColorEdit: disable picker when clicking on color square.
         */
        NoPicker: number;
        /**
         * \/\/              \/\/ ColorEdit: disable toggling options menu when right-clicking on inputs\/small preview.
         */
        NoOptions: number;
        /**
         * \/\/              \/\/ ColorEdit, ColorPicker: disable color square preview next to the inputs. (e.g. to show only the inputs)
         */
        NoSmallPreview: number;
        /**
         * \/\/              \/\/ ColorEdit, ColorPicker: disable inputs sliders\/text widgets (e.g. to show only the small preview color square).
         */
        NoInputs: number;
        /**
         * \/\/              \/\/ ColorEdit, ColorPicker, ColorButton: disable tooltip when hovering the preview.
         */
        NoTooltip: number;
        /**
         * \/\/              \/\/ ColorEdit, ColorPicker: disable display of inline text label (the label is still forwarded to the tooltip and picker).
         */
        NoLabel: number;
        /**
         * \/\/              \/\/ ColorPicker: disable bigger color preview on right side of the picker, use small color square preview instead.
         */
        NoSidePreview: number;
        /**
         * \/\/              \/\/ ColorEdit: disable drag and drop target\/source. ColorButton: disable drag and drop source.
         */
        NoDragDrop: number;
        /**
         * \/\/              \/\/ ColorButton: disable border (which is enforced by default)
         */
        NoBorder: number;
        /**
         * \/\/              \/\/ ColorEdit: disable rendering R\/G\/B\/A color marker. May also be disabled globally by setting style.ColorMarkerSize = 0.
         */
        NoColorMarkers: number;
        /**
         * \/\/              \/\/ ColorEdit, ColorPicker, ColorButton: disable alpha in the preview,. Contrary to _NoAlpha it may still be edited when calling ColorEdit4()\/ColorPicker4(). For ColorButton() this does the same as _NoAlpha.
         */
        AlphaOpaque: number;
        /**
         * \/\/              \/\/ ColorEdit, ColorPicker, ColorButton: disable rendering a checkerboard background behind transparent color.
         */
        AlphaNoBg: number;
        /**
         * \/\/              \/\/ ColorEdit, ColorPicker, ColorButton: display half opaque \/ half transparent preview.
         */
        AlphaPreviewHalf: number;
        /**
         * \/\/              \/\/ ColorEdit, ColorPicker: show vertical alpha bar\/gradient in picker.
         */
        AlphaBar: number;
        /**
         * \/\/              \/\/ (WIP) ColorEdit: Currently only disable 0.0f..1.0f limits in RGBA edition (note: you probably want to use ImGuiColorEditFlags_Float flag as well).
         */
        HDR: number;
        /**
         * \/\/ [Display]    \/\/ ColorEdit: override _display_ type among RGB\/HSV\/Hex. ColorPicker: select any combination using one or more of RGB\/HSV\/Hex.
         */
        DisplayRGB: number;
        /**
         * \/\/ [Display]    \/\/ "
         */
        DisplayHSV: number;
        /**
         * \/\/ [Display]    \/\/ "
         */
        DisplayHex: number;
        /**
         * \/\/ [DataType]   \/\/ ColorEdit, ColorPicker, ColorButton: _display_ values formatted as 0..255.
         */
        Uint8: number;
        /**
         * \/\/ [DataType]   \/\/ ColorEdit, ColorPicker, ColorButton: _display_ values formatted as 0.0f..1.0f floats instead of 0..255 integers. No round-trip of value via integers.
         */
        Float: number;
        /**
         * \/\/ [Picker]     \/\/ ColorPicker: bar for Hue, rectangle for Sat\/Value.
         */
        PickerHueBar: number;
        /**
         * \/\/ [Picker]     \/\/ ColorPicker: wheel for Hue, triangle for Sat\/Value.
         */
        PickerHueWheel: number;
        /**
         * \/\/ [Input]      \/\/ ColorEdit, ColorPicker: input and output data in RGB format.
         */
        InputRGB: number;
        /**
         * \/\/ [Input]      \/\/ ColorEdit, ColorPicker: input and output data in HSV format.
         */
        InputHSV: number;
    };
    /**
     * \/\/ Flags for DragFloat(), DragInt(), SliderFloat(), SliderInt() etc.
     * \/\/ We use the same sets of flags for DragXXX() and SliderXXX() functions as the features are the same and it makes it easier to swap them.
     * \/\/ (Those are per-item flags. There is shared behavior flag too: ImGuiIO: io.ConfigDragClickToInputText)
     */
    SliderFlags: {
        None: number;
        /**
         * \/\/ Make the widget logarithmic (linear otherwise). Consider using ImGuiSliderFlags_NoRoundToFormat with this if using a format-string with small amount of digits.
         */
        Logarithmic: number;
        /**
         * \/\/ Disable rounding underlying value to match precision of the display format string (e.g. %.3f values are rounded to those 3 digits).
         */
        NoRoundToFormat: number;
        /**
         * \/\/ Disable Ctrl+Click or Enter key allowing to input text directly into the widget.
         */
        NoInput: number;
        /**
         * \/\/ Enable wrapping around from max to min and from min to max. Only supported by DragXXX() functions for now.
         */
        WrapAround: number;
        /**
         * \/\/ Clamp value to min\/max bounds when input manually with Ctrl+Click. By default Ctrl+Click allows going out of bounds.
         */
        ClampOnInput: number;
        /**
         * \/\/ Clamp even if min==max==0.0f. Otherwise due to legacy reason DragXXX functions don't clamp with those values. When your clamping limits are dynamic you almost always want to use it.
         */
        ClampZeroRange: number;
        /**
         * \/\/ Disable keyboard modifiers altering tweak speed. Useful if you want to alter tweak speed yourself based on your own logic.
         */
        NoSpeedTweaks: number;
        /**
         * \/\/ DragScalarN(), SliderScalarN(): Draw R\/G\/B\/A color markers on each component.
         */
        ColorMarkers: number;
        AlwaysClamp: number;
    };
    /**
     * \/\/ Identify a mouse button.
     * \/\/ Those values are guaranteed to be stable and we frequently use 0\/1 directly. Named enums provided for convenience.
     */
    MouseButton: {
        Left: number;
        Right: number;
        Middle: number;
        COUNT: number;
    };
    /**
     * \/\/ Enumeration for GetMouseCursor()
     * \/\/ User code may request backend to display given cursor by calling SetMouseCursor(), which is why we have some cursors that are marked unused here
     */
    MouseCursor: {
        None: number;
        Arrow: number;
        /**
         * \/\/ When hovering over InputText, etc.
         */
        TextInput: number;
        /**
         * \/\/ (Unused by Dear ImGui functions)
         */
        ResizeAll: number;
        /**
         * \/\/ When hovering over a horizontal border
         */
        ResizeNS: number;
        /**
         * \/\/ When hovering over a vertical border or a column
         */
        ResizeEW: number;
        /**
         * \/\/ When hovering over the bottom-left corner of a window
         */
        ResizeNESW: number;
        /**
         * \/\/ When hovering over the bottom-right corner of a window
         */
        ResizeNWSE: number;
        /**
         * \/\/ (Unused by Dear ImGui functions. Use for e.g. hyperlinks)
         */
        Hand: number;
        /**
         * \/\/ When waiting for something to process\/load.
         */
        Wait: number;
        /**
         * \/\/ When waiting for something to process\/load, but application is still interactive.
         */
        Progress: number;
        /**
         * \/\/ When hovering something with disallowed interaction. Usually a crossed circle.
         */
        NotAllowed: number;
        COUNT: number;
    };
    /**
     * \/\/ Forward declared enum type ImGuiMouseSource
     */
    MouseSource: {
        /**
         * \/\/ Input is coming from an actual mouse.
         */
        _Mouse: number;
        /**
         * \/\/ Input is coming from a touch screen (no hovering prior to initial press, less precise initial press aiming, dual-axis wheeling possible).
         */
        _TouchScreen: number;
        /**
         * \/\/ Input is coming from a pressure\/magnetic pen (often used in conjunction with high-sampling rates).
         */
        _Pen: number;
        _COUNT: number;
    };
    /**
     * \/\/ Enumeration for ImGui::SetNextWindow***(), SetWindow***(), SetNextItem***() functions
     * \/\/ Represent a condition.
     * \/\/ Important: Treat as a regular enum! Do NOT combine multiple values using binary operators! All the functions above treat 0 as a shortcut to ImGuiCond_Always.
     */
    Cond: {
        /**
         * \/\/ No condition (always set the variable), same as _Always
         */
        None: number;
        /**
         * \/\/ No condition (always set the variable), same as _None
         */
        Always: number;
        /**
         * \/\/ Set the variable once per runtime session (only the first call will succeed)
         */
        Once: number;
        /**
         * \/\/ Set the variable if the object\/window has no persistently saved data (no entry in .ini file)
         */
        FirstUseEver: number;
        /**
         * \/\/ Set the variable if the object\/window is appearing after being hidden\/inactive (or the first time)
         */
        Appearing: number;
    };
    /**
     * \/\/ Flags for ImGui::BeginTable()
     * \/\/ - Important! Sizing policies have complex and subtle side effects, much more so than you would expect.
     * \/\/   Read comments\/demos carefully + experiment with live demos to get acquainted with them.
     * \/\/ - The DEFAULT sizing policies are:
     * \/\/    - Default to ImGuiTableFlags_SizingFixedFit    if ScrollX is on, or if host window has ImGuiWindowFlags_AlwaysAutoResize.
     * \/\/    - Default to ImGuiTableFlags_SizingStretchSame if ScrollX is off.
     * \/\/ - When ScrollX is off:
     * \/\/    - Table defaults to ImGuiTableFlags_SizingStretchSame -> all Columns defaults to ImGuiTableColumnFlags_WidthStretch with same weight.
     * \/\/    - Columns sizing policy allowed: Stretch (default), Fixed\/Auto.
     * \/\/    - Fixed Columns (if any) will generally obtain their requested width (unless the table cannot fit them all).
     * \/\/    - Stretch Columns will share the remaining width according to their respective weight.
     * \/\/    - Mixed Fixed\/Stretch columns is possible but has various side-effects on resizing behaviors.
     * \/\/      The typical use of mixing sizing policies is: any number of LEADING Fixed columns, followed by one or two TRAILING Stretch columns.
     * \/\/      (this is because the visible order of columns have subtle but necessary effects on how they react to manual resizing).
     * \/\/ - When ScrollX is on:
     * \/\/    - Table defaults to ImGuiTableFlags_SizingFixedFit -> all Columns defaults to ImGuiTableColumnFlags_WidthFixed
     * \/\/    - Columns sizing policy allowed: Fixed\/Auto mostly.
     * \/\/    - Fixed Columns can be enlarged as needed. Table will show a horizontal scrollbar if needed.
     * \/\/    - When using auto-resizing (non-resizable) fixed columns, querying the content width to use item right-alignment e.g. SetNextItemWidth(-FLT_MIN) doesn't make sense, would create a feedback loop.
     * \/\/    - Using Stretch columns OFTEN DOES NOT MAKE SENSE if ScrollX is on, UNLESS you have specified a value for 'inner_width' in BeginTable().
     * \/\/      If you specify a value for 'inner_width' then effectively the scrolling space is known and Stretch or mixed Fixed\/Stretch columns become meaningful again.
     * \/\/ - Read on documentation at the top of imgui_tables.cpp for details.
     */
    TableFlags: {
        /**
         * \/\/ Features
         */
        None: number;
        /**
         * \/\/ Enable resizing columns.
         */
        Resizable: number;
        /**
         * \/\/ Enable reordering columns in header row. (Need calling TableSetupColumn() + TableHeadersRow() to display headers, or using ImGuiTableFlags_ContextMenuInBody to access context-menu without headers).
         */
        Reorderable: number;
        /**
         * \/\/ Enable hiding\/disabling columns in context menu.
         */
        Hideable: number;
        /**
         * \/\/ Enable sorting. Call TableGetSortSpecs() to obtain sort specs. Also see ImGuiTableFlags_SortMulti and ImGuiTableFlags_SortTristate.
         */
        Sortable: number;
        /**
         * \/\/ Disable persisting columns order, width, visibility and sort settings in the .ini file.
         */
        NoSavedSettings: number;
        /**
         * \/\/ Right-click on columns body\/contents will also display table context menu. By default it is available in TableHeadersRow().
         */
        ContextMenuInBody: number;
        /**
         * \/\/ Set each RowBg color with ImGuiCol_TableRowBg or ImGuiCol_TableRowBgAlt (equivalent of calling TableSetBgColor with ImGuiTableBgFlags_RowBg0 on each row manually)
         */
        RowBg: number;
        /**
         * \/\/ Draw horizontal borders between rows.
         */
        BordersInnerH: number;
        /**
         * \/\/ Draw horizontal borders at the top and bottom.
         */
        BordersOuterH: number;
        /**
         * \/\/ Draw vertical borders between columns.
         */
        BordersInnerV: number;
        /**
         * \/\/ Draw vertical borders on the left and right sides.
         */
        BordersOuterV: number;
        /**
         * \/\/ Draw horizontal borders.
         */
        BordersH: number;
        /**
         * \/\/ Draw vertical borders.
         */
        BordersV: number;
        /**
         * \/\/ Draw inner borders.
         */
        BordersInner: number;
        /**
         * \/\/ Draw outer borders.
         */
        BordersOuter: number;
        /**
         * \/\/ Draw all borders.
         */
        Borders: number;
        /**
         * \/\/ [ALPHA] Disable vertical borders in columns Body (borders will always appear in Headers). -> May move to style
         */
        NoBordersInBody: number;
        /**
         * \/\/ [ALPHA] Disable vertical borders in columns Body until hovered for resize (borders will always appear in Headers). -> May move to style
         */
        NoBordersInBodyUntilResize: number;
        /**
         * \/\/ Columns default to _WidthFixed or _WidthAuto (if resizable or not resizable), matching contents width.
         */
        SizingFixedFit: number;
        /**
         * \/\/ Columns default to _WidthFixed or _WidthAuto (if resizable or not resizable), matching the maximum contents width of all columns. Implicitly enable ImGuiTableFlags_NoKeepColumnsVisible.
         */
        SizingFixedSame: number;
        /**
         * \/\/ Columns default to _WidthStretch with default weights proportional to each columns contents widths.
         */
        SizingStretchProp: number;
        /**
         * \/\/ Columns default to _WidthStretch with default weights all equal, unless overridden by TableSetupColumn().
         */
        SizingStretchSame: number;
        /**
         * \/\/ Make outer width auto-fit to columns, overriding outer_size.x value. Only available when ScrollX\/ScrollY are disabled and Stretch columns are not used.
         */
        NoHostExtendX: number;
        /**
         * \/\/ Make outer height stop exactly at outer_size.y (prevent auto-extending table past the limit). Only available when ScrollX\/ScrollY are disabled. Data below the limit will be clipped and not visible.
         */
        NoHostExtendY: number;
        /**
         * \/\/ Disable keeping column always minimally visible when ScrollX is off and table gets too small. Not recommended if columns are resizable.
         */
        NoKeepColumnsVisible: number;
        /**
         * \/\/ Disable distributing remainder width to stretched columns (width allocation on a 100-wide table with 3 columns: Without this flag: 33,33,34. With this flag: 33,33,33). With larger number of columns, resizing will appear to be less smooth.
         */
        PreciseWidths: number;
        /**
         * \/\/ Disable clipping rectangle for every individual columns (reduce draw command count, items will be able to overflow into other columns). Generally incompatible with TableSetupScrollFreeze().
         */
        NoClip: number;
        /**
         * \/\/ Default if BordersOuterV is on. Enable outermost padding. Generally desirable if you have headers.
         */
        PadOuterX: number;
        /**
         * \/\/ Default if BordersOuterV is off. Disable outermost padding.
         */
        NoPadOuterX: number;
        /**
         * \/\/ Disable inner padding between columns (double inner padding if BordersOuterV is on, single inner padding if BordersOuterV is off).
         */
        NoPadInnerX: number;
        /**
         * \/\/ Enable horizontal scrolling. Require 'outer_size' parameter of BeginTable() to specify the container size. Changes default sizing policy. Because this creates a child window, ScrollY is currently generally recommended when using ScrollX.
         */
        ScrollX: number;
        /**
         * \/\/ Enable vertical scrolling. Require 'outer_size' parameter of BeginTable() to specify the container size.
         */
        ScrollY: number;
        /**
         * \/\/ Hold shift when clicking headers to sort on multiple column. TableGetSortSpecs() may return specs where (SpecsCount > 1).
         */
        SortMulti: number;
        /**
         * \/\/ Allow no sorting, disable default sorting. TableGetSortSpecs() may return specs where (SpecsCount == 0).
         */
        SortTristate: number;
        /**
         * \/\/ Highlight column headers when hovered (may evolve into a fuller highlight)
         */
        HighlightHoveredColumn: number;
    };
    /**
     * \/\/ Flags for ImGui::TableSetupColumn()
     */
    TableColumnFlags: {
        /**
         * \/\/ Input configuration flags
         */
        None: number;
        /**
         * \/\/ Overriding\/master disable flag: hide column, won't show in context menu (unlike calling TableSetColumnEnabled() which manipulates the user accessible state)
         */
        Disabled: number;
        /**
         * \/\/ Default as a hidden\/disabled column.
         */
        DefaultHide: number;
        /**
         * \/\/ Default as a sorting column.
         */
        DefaultSort: number;
        /**
         * \/\/ Column will stretch. Preferable with horizontal scrolling disabled (default if table sizing policy is _SizingStretchSame or _SizingStretchProp).
         */
        WidthStretch: number;
        /**
         * \/\/ Column will not stretch. Preferable with horizontal scrolling enabled (default if table sizing policy is _SizingFixedFit and table is resizable).
         */
        WidthFixed: number;
        /**
         * \/\/ Disable manual resizing.
         */
        NoResize: number;
        /**
         * \/\/ Disable manual reordering this column, this will also prevent other columns from crossing over this column.
         */
        NoReorder: number;
        /**
         * \/\/ Disable ability to hide\/disable this column.
         */
        NoHide: number;
        /**
         * \/\/ Disable clipping for this column (all NoClip columns will render in a same draw command).
         */
        NoClip: number;
        /**
         * \/\/ Disable ability to sort on this field (even if ImGuiTableFlags_Sortable is set on the table).
         */
        NoSort: number;
        /**
         * \/\/ Disable ability to sort in the ascending direction.
         */
        NoSortAscending: number;
        /**
         * \/\/ Disable ability to sort in the descending direction.
         */
        NoSortDescending: number;
        /**
         * \/\/ TableHeadersRow() will submit an empty label for this column. Convenient for some small columns. Name will still appear in context menu or in angled headers. You may append into this cell by calling TableSetColumnIndex() right after the TableHeadersRow() call.
         */
        NoHeaderLabel: number;
        /**
         * \/\/ Disable header text width contribution to automatic column width.
         */
        NoHeaderWidth: number;
        /**
         * \/\/ Make the initial sort direction Ascending when first sorting on this column (default).
         */
        PreferSortAscending: number;
        /**
         * \/\/ Make the initial sort direction Descending when first sorting on this column.
         */
        PreferSortDescending: number;
        /**
         * \/\/ Use current Indent value when entering cell (default for column 0).
         */
        IndentEnable: number;
        /**
         * \/\/ Ignore current Indent value when entering cell (default for columns > 0). Indentation changes _within_ the cell will still be honored.
         */
        IndentDisable: number;
        /**
         * \/\/ TableHeadersRow() will submit an angled header row for this column. Note this will add an extra row.
         */
        AngledHeader: number;
        /**
         * \/\/ Status: is enabled == not hidden by user\/api (referred to as "Hide" in _DefaultHide and _NoHide) flags.
         */
        IsEnabled: number;
        /**
         * \/\/ Status: is visible == is enabled AND not clipped by scrolling.
         */
        IsVisible: number;
        /**
         * \/\/ Status: is currently part of the sort specs
         */
        IsSorted: number;
        /**
         * \/\/ Status: is hovered by mouse
         */
        IsHovered: number;
    };
    /**
     * \/\/ Flags for ImGui::TableNextRow()
     */
    TableRowFlags: {
        None: number;
        /**
         * \/\/ Identify header row (set default background color + width of its contents accounted differently for auto column width)
         */
        Headers: number;
    };
    /**
     * \/\/ Enum for ImGui::TableSetBgColor()
     * \/\/ Background colors are rendering in 3 layers:
     * \/\/  - Layer 0: draw with RowBg0 color if set, otherwise draw with ColumnBg0 if set.
     * \/\/  - Layer 1: draw with RowBg1 color if set, otherwise draw with ColumnBg1 if set.
     * \/\/  - Layer 2: draw with CellBg color if set.
     * \/\/ The purpose of the two row\/columns layers is to let you decide if a background color change should override or blend with the existing color.
     * \/\/ When using ImGuiTableFlags_RowBg on the table, each row has the RowBg0 color automatically set for odd\/even rows.
     * \/\/ If you set the color of RowBg0 target, your color will override the existing RowBg0 color.
     * \/\/ If you set the color of RowBg1 or ColumnBg1 target, your color will blend over the RowBg0 color.
     */
    TableBgTarget: {
        None: number;
        /**
         * \/\/ Set row background color 0 (generally used for background, automatically set when ImGuiTableFlags_RowBg is used)
         */
        RowBg0: number;
        /**
         * \/\/ Set row background color 1 (generally used for selection marking)
         */
        RowBg1: number;
        /**
         * \/\/ Set cell background color (top-most color)
         */
        CellBg: number;
    };
    /**
     * \/\/ Flags for ImGuiListClipper (currently not fully exposed in function calls: a future refactor will likely add this to ImGuiListClipper::Begin function equivalent)
     */
    ListClipperFlags: {
        None: number;
        /**
         * \/\/ [Internal] Disabled modifying table row counters. Avoid assumption that 1 clipper item == 1 table row.
         */
        NoSetTableRowCounters: number;
    };
    /**
     * \/\/ Flags for BeginMultiSelect()
     */
    MultiSelectFlags: {
        None: number;
        /**
         * \/\/ Disable selecting more than one item. This is available to allow single-selection code to share same code\/logic if desired. It essentially disables the main purpose of BeginMultiSelect() tho!
         */
        SingleSelect: number;
        /**
         * \/\/ Disable Ctrl+A shortcut to select all.
         */
        NoSelectAll: number;
        /**
         * \/\/ Disable Shift+selection mouse\/keyboard support (useful for unordered 2D selection). With BoxSelect is also ensure contiguous SetRange requests are not combined into one. This allows not handling interpolation in SetRange requests.
         */
        NoRangeSelect: number;
        /**
         * \/\/ Disable selecting items when navigating (useful for e.g. supporting range-select in a list of checkboxes).
         */
        NoAutoSelect: number;
        /**
         * \/\/ Disable clearing selection when navigating or selecting another one (generally used with ImGuiMultiSelectFlags_NoAutoSelect. useful for e.g. supporting range-select in a list of checkboxes).
         */
        NoAutoClear: number;
        /**
         * \/\/ Disable clearing selection when clicking\/selecting an already selected item.
         */
        NoAutoClearOnReselect: number;
        /**
         * \/\/ Enable box-selection with same width and same x pos items (e.g. full row Selectable()). Box-selection works better with little bit of spacing between items hit-box in order to be able to aim at empty space.
         */
        BoxSelect1d: number;
        /**
         * \/\/ Enable box-selection with varying width or varying x pos items support (e.g. different width labels, or 2D layout\/grid). This is slower: alters clipping logic so that e.g. horizontal movements will update selection of normally clipped items.
         */
        BoxSelect2d: number;
        /**
         * \/\/ Disable scrolling when box-selecting and moving mouse near edges of scope.
         */
        BoxSelectNoScroll: number;
        /**
         * \/\/ Clear selection when pressing Escape while scope is focused.
         */
        ClearOnEscape: number;
        /**
         * \/\/ Clear selection when clicking on empty location within scope.
         */
        ClearOnClickVoid: number;
        /**
         * \/\/ Scope for _BoxSelect and _ClearOnClickVoid is whole window (Default). Use if BeginMultiSelect() covers a whole window or used a single time in same window.
         */
        ScopeWindow: number;
        /**
         * \/\/ Scope for _BoxSelect and _ClearOnClickVoid is rectangle encompassing BeginMultiSelect()\/EndMultiSelect(). Use if BeginMultiSelect() is called multiple times in same window.
         */
        ScopeRect: number;
        /**
         * \/\/ Apply selection on mouse down when clicking on unselected item, on mouse up when clicking on selected item. (Default)
         */
        SelectOnAuto: number;
        /**
         * \/\/ Apply selection on mouse down when clicking on any items. Prevents Drag and Drop from being used on multiple-selection, but allows e.g. BoxSelect to always reselect even when clicking inside an existing selection. (Excel style behavior)
         */
        SelectOnClickAlways: number;
        /**
         * \/\/ Apply selection on mouse release when clicking an unselected item. Allow dragging an unselected item without altering selection.
         */
        SelectOnClickRelease: number;
        /**
         * \/\/ [Temporary] Enable navigation wrapping on X axis. Provided as a convenience because we don't have a design for the general Nav API for this yet. When the more general feature be public we may obsolete this flag in favor of new one.
         */
        NavWrapX: number;
        /**
         * \/\/ Disable default right-click processing, which selects item on mouse down, and is designed for context-menus.
         */
        NoSelectOnRightClick: number;
    };
    /**
     * \/\/ Selection request type
     */
    SelectionRequestType: {
        _None: number;
        /**
         * \/\/ Request app to clear selection (if Selected==false) or select all items (if Selected==true). We cannot set RangeFirstItem\/RangeLastItem as its contents is entirely up to user (not necessarily an index)
         */
        _SetAll: number;
        /**
         * \/\/ Request app to select\/unselect [RangeFirstItem..RangeLastItem] items (inclusive) based on value of Selected. Only EndMultiSelect() request this, app code can read after BeginMultiSelect() and it will always be false.
         */
        _SetRange: number;
    };
    /**
     * \/\/ Flags for ImDrawList functions
     * \/\/ (Legacy: bit 0 must always correspond to ImDrawFlags_Closed to be backward compatible with old API using a bool. Bits 1..3 must be unused)
     */
    ImDrawFlags: {
        None: number;
        /**
         * \/\/ PathStroke(), AddPolyline(): specify that shape should be closed (Important: this is always == 1 for legacy reason)
         */
        Closed: number;
        /**
         * \/\/ AddRect(), AddRectFilled(), PathRect(): enable rounding top-left corner only (when rounding > 0.0f, we default to all corners). Was 0x01.
         */
        RoundCornersTopLeft: number;
        /**
         * \/\/ AddRect(), AddRectFilled(), PathRect(): enable rounding top-right corner only (when rounding > 0.0f, we default to all corners). Was 0x02.
         */
        RoundCornersTopRight: number;
        /**
         * \/\/ AddRect(), AddRectFilled(), PathRect(): enable rounding bottom-left corner only (when rounding > 0.0f, we default to all corners). Was 0x04.
         */
        RoundCornersBottomLeft: number;
        /**
         * \/\/ AddRect(), AddRectFilled(), PathRect(): enable rounding bottom-right corner only (when rounding > 0.0f, we default to all corners). Wax 0x08.
         */
        RoundCornersBottomRight: number;
        /**
         * \/\/ AddRect(), AddRectFilled(), PathRect(): disable rounding on all corners (when rounding > 0.0f). This is NOT zero, NOT an implicit flag!
         */
        RoundCornersNone: number;
        RoundCornersTop: number;
        RoundCornersBottom: number;
        RoundCornersLeft: number;
        RoundCornersRight: number;
        RoundCornersAll: number;
    };
    /**
     * \/\/ Flags for ImDrawList instance. Those are set automatically by ImGui:: functions from ImGuiIO settings, and generally not manipulated directly.
     * \/\/ It is however possible to temporarily alter flags between calls to ImDrawList:: functions.
     */
    ImDrawListFlags: {
        None: number;
        /**
         * \/\/ Enable anti-aliased lines\/borders (*2 the number of triangles for 1.0f wide line or lines thin enough to be drawn using textures, otherwise *3 the number of triangles)
         */
        AntiAliasedLines: number;
        /**
         * \/\/ Enable anti-aliased lines\/borders using textures when possible. Require backend to render with bilinear filtering (NOT point\/nearest filtering).
         */
        AntiAliasedLinesUseTex: number;
        /**
         * \/\/ Enable anti-aliased edge around filled shapes (rounded rectangles, circles).
         */
        AntiAliasedFill: number;
        /**
         * \/\/ Can emit 'VtxOffset > 0' to allow large meshes. Set when 'ImGuiBackendFlags_RendererHasVtxOffset' is enabled.
         */
        AllowVtxOffset: number;
    };
    /**
     * \/\/ Most standard backends only support RGBA32 but we provide a single channel option for low-resource\/embedded systems.
     */
    ImTextureFormat: {
        /**
         * \/\/ 4 components per pixel, each is unsigned 8-bit. Total size = TexWidth * TexHeight * 4
         */
        _RGBA32: number;
        /**
         * \/\/ 1 component per pixel, each is unsigned 8-bit. Total size = TexWidth * TexHeight
         */
        _Alpha8: number;
    };
    /**
     * \/\/ Status of a texture to communicate with Renderer Backend.
     */
    ImTextureStatus: {
        _OK: number;
        /**
         * \/\/ Backend destroyed the texture.
         */
        _Destroyed: number;
        /**
         * \/\/ Requesting backend to create the texture. Set status OK when done.
         */
        _WantCreate: number;
        /**
         * \/\/ Requesting backend to update specific blocks of pixels (write to texture portions which have never been used before). Set status OK when done.
         */
        _WantUpdates: number;
        /**
         * \/\/ Requesting backend to destroy the texture. Set status to Destroyed when done.
         */
        _WantDestroy: number;
    };
    /**
     * \/\/ Flags for ImFontAtlas build
     */
    ImFontAtlasFlags: {
        None: number;
        /**
         * \/\/ Don't round the height to next power of two
         */
        NoPowerOfTwoHeight: number;
        /**
         * \/\/ Don't build software mouse cursors into the atlas (save a little texture memory)
         */
        NoMouseCursors: number;
        /**
         * \/\/ Don't build thick line textures into the atlas (save a little texture memory, allow support for point\/nearest filtering). The AntiAliasedLinesUseTex features uses them, otherwise they will be rendered using polygons (more expensive for CPU\/GPU).
         */
        NoBakedLines: number;
    };
    /**
     * \/\/ Font flags
     * \/\/ (in future versions as we redesign font loading API, this will become more important and better documented. for now please consider this as internal\/advanced use)
     */
    ImFontFlags: {
        None: number;
        /**
         * \/\/ Disable throwing an error\/assert when calling AddFontXXX() with missing file\/data. Calling code is expected to check AddFontXXX() return value.
         */
        NoLoadError: number;
        /**
         * \/\/ [Internal] Disable loading new glyphs.
         */
        NoLoadGlyphs: number;
        /**
         * \/\/ [Internal] Disable loading new baked sizes, disable garbage collecting current ones. e.g. if you want to lock a font to a single size. Important: if you use this to preload given sizes, consider the possibility of multiple font density used on Retina display.
         */
        LockBakedSizes: number;
    };
    /**
     * \/\/ Flags stored in ImGuiViewport::Flags, giving indications to the platform backends.
     */
    ViewportFlags: {
        None: number;
        /**
         * \/\/ Represent a Platform Window
         */
        IsPlatformWindow: number;
        /**
         * \/\/ Represent a Platform Monitor (unused yet)
         */
        IsPlatformMonitor: number;
        /**
         * \/\/ Platform Window: Is created\/managed by the user application? (rather than our backend)
         */
        OwnedByApp: number;
        /**
         * \/\/ Platform Window: Disable platform decorations: title bar, borders, etc. (generally set all windows, but if ImGuiConfigFlags_ViewportsDecoration is set we only set this on popups\/tooltips)
         */
        NoDecoration: number;
        /**
         * \/\/ Platform Window: Disable platform task bar icon (generally set on popups\/tooltips, or all windows if ImGuiConfigFlags_ViewportsNoTaskBarIcon is set)
         */
        NoTaskBarIcon: number;
        /**
         * \/\/ Platform Window: Don't take focus when created.
         */
        NoFocusOnAppearing: number;
        /**
         * \/\/ Platform Window: Don't take focus when clicked on.
         */
        NoFocusOnClick: number;
        /**
         * \/\/ Platform Window: Make mouse pass through so we can drag this window while peaking behind it.
         */
        NoInputs: number;
        /**
         * \/\/ Platform Window: Renderer doesn't need to clear the framebuffer ahead (because we will fill it entirely).
         */
        NoRendererClear: number;
        /**
         * \/\/ Platform Window: Avoid merging this window into another host window. This can only be set via ImGuiWindowClass viewport flags override (because we need to now ahead if we are going to create a viewport in the first place!).
         */
        NoAutoMerge: number;
        /**
         * \/\/ Platform Window: Display on top (for tooltips only).
         */
        TopMost: number;
        /**
         * \/\/ Viewport can host multiple imgui windows (secondary viewports are associated to a single window). \/\/ FIXME: In practice there's still probably code making the assumption that this is always and only on the MainViewport. Will fix once we add support for "no main viewport".
         */
        CanHostOtherWindows: number;
        /**
         * \/\/ Platform Window: Window is minimized, can skip render. When minimized we tend to avoid using the viewport pos\/size for clipping window or testing if they are contained in the viewport.
         */
        IsMinimized: number;
        /**
         * \/\/ Platform Window: Window is focused (last call to Platform_GetWindowFocus() returned true)
         */
        IsFocused: number;
    };
    FreeTypeLoaderFlags: {
        NoHinting: number;
        NoAutoHint: number;
        ForceAutoHint: number;
        LightHinting: number;
        MonoHinting: number;
        Bold: number;
        Oblique: number;
        Monochrome: number;
        LoadColor: number;
        Bitmap: number;
    };
    /**
     * \/\/ Context creation and access
     * \/\/ - Each context create its own ImFontAtlas by default. You may instance one yourself and pass it to CreateContext() to share a font atlas between contexts.
     * \/\/ - DLL users: heaps and globals are not shared across DLL boundaries! You will need to call SetCurrentContext() + SetAllocatorFunctions()
     * \/\/   for each static\/DLL boundary you are calling from. Read "Context and Memory Allocators" section of imgui.cpp for details.
     */
    CreateContext(shared_font_atlas?: ImFontAtlas | null): ImGuiContext;
    /**
     * \/\/ NULL = destroy current context
     */
    DestroyContext(ctx?: ImGuiContext | null): void;
    GetCurrentContext(): ImGuiContext;
    SetCurrentContext(ctx: ImGuiContext): void;
    /**
     * \/\/ access the ImGuiIO structure (mouse\/keyboard\/gamepad inputs, time, various configuration options\/flags)
     */
    GetIO(): ImGuiIO;
    /**
     * \/\/ access the ImGuiPlatformIO structure (mostly hooks\/functions to connect to platform\/renderer and OS Clipboard, IME etc.)
     */
    GetPlatformIO(): ImGuiPlatformIO;
    /**
     * \/\/ access the Style structure (colors, sizes). Always use PushStyleColor(), PushStyleVar() to modify style mid-frame!
     */
    GetStyle(): ImGuiStyle;
    /**
     * \/\/ start a new Dear ImGui frame, you can submit any command from this point until Render()\/EndFrame().
     */
    NewFrame(): void;
    /**
     * \/\/ ends the Dear ImGui frame. automatically called by Render(). If you don't need to render data (skipping rendering) you may call EndFrame() without Render()... but you'll have wasted CPU already! If you don't need to render, better to not create any windows and not call NewFrame() at all!
     */
    EndFrame(): void;
    /**
     * \/\/ ends the Dear ImGui frame, finalize the draw data. You can then get call GetDrawData().
     */
    Render(): void;
    /**
     * \/\/ valid after Render() and until the next call to NewFrame(). Call ImGui_ImplXXXX_RenderDrawData() function in your Renderer Backend to render.
     */
    GetDrawData(): ImDrawData;
    /**
     * \/\/ create Demo window. demonstrate most ImGui features. call this to learn about the library! try to make it always available in your application!
     */
    ShowDemoWindow(p_open?: [boolean] | null): void;
    /**
     * \/\/ create Metrics\/Debugger window. display Dear ImGui internals: windows, draw commands, various internal state, etc.
     */
    ShowMetricsWindow(p_open?: [boolean] | null): void;
    /**
     * \/\/ create Debug Log window. display a simplified log of important dear imgui events.
     */
    ShowDebugLogWindow(p_open?: [boolean] | null): void;
    /**
     * \/\/ create Stack Tool window. hover items with mouse to query information about the source of their unique ID.
     */
    ShowIDStackToolWindow(p_open?: [boolean] | null): void;
    /**
     * \/\/ create About window. display Dear ImGui version, credits and build\/system information.
     */
    ShowAboutWindow(p_open?: [boolean] | null): void;
    /**
     * \/\/ add style editor block (not a window). you can pass in a reference ImGuiStyle structure to compare to, revert to and save to (else it uses the default style)
     */
    ShowStyleEditor(ref?: ImGuiStyle | null): void;
    /**
     * \/\/ add style selector block (not a window), essentially a combo listing the default styles.
     */
    ShowStyleSelector(label: string): boolean;
    /**
     * \/\/ add font selector block (not a window), essentially a combo listing the loaded fonts.
     */
    ShowFontSelector(label: string): void;
    /**
     * \/\/ add basic help\/info block (not a window): how to manipulate ImGui as an end-user (mouse\/keyboard controls).
     */
    ShowUserGuide(): void;
    /**
     * \/\/ get the compiled version string e.g. "1.80 WIP" (essentially the value for IMGUI_VERSION from the compiled version of imgui.cpp)
     */
    GetVersion(): string;
    /**
     * \/\/ new, recommended style (default)
     */
    StyleColorsDark(dst?: ImGuiStyle | null): void;
    /**
     * \/\/ best used with borders and a custom, thicker font
     */
    StyleColorsLight(dst?: ImGuiStyle | null): void;
    /**
     * \/\/ classic imgui style
     */
    StyleColorsClassic(dst?: ImGuiStyle | null): void;
    /**
     * \/\/ Windows
     * \/\/ - Begin() = push window to the stack and start appending to it. End() = pop window from the stack.
     * \/\/ - Passing 'bool* p_open != NULL' shows a window-closing widget in the upper-right corner of the window,
     * \/\/   which clicking will set the boolean to false when clicked.
     * \/\/ - You may append multiple times to the same window during the same frame by calling Begin()\/End() pairs multiple times.
     * \/\/   Some information such as 'flags' or 'p_open' will only be considered by the first call to Begin().
     * \/\/ - Begin() return false to indicate the window is collapsed or fully clipped, so you may early out and omit submitting
     * \/\/   anything to the window. Always call a matching End() for each Begin() call, regardless of its return value!
     * \/\/   [Important: due to legacy reason, Begin\/End and BeginChild\/EndChild are inconsistent with all other functions
     * \/\/    such as BeginMenu\/EndMenu, BeginPopup\/EndPopup, etc. where the EndXXX call should only be called if the corresponding
     * \/\/    BeginXXX function returned true. Begin and BeginChild are the only odd ones out. Will be fixed in a future update.]
     * \/\/ - Note that the bottom of window stack always contains a window called "Debug".
     */
    Begin(name: string, p_open?: [boolean] | null, flags?: ImGuiWindowFlags): boolean;
    End(): void;
    /**
     * \/\/ Child Windows
     * \/\/ - Use child windows to begin into a self-contained independent scrolling\/clipping regions within a host window. Child windows can embed their own child.
     * \/\/ - Before 1.90 (November 2023), the "ImGuiChildFlags child_flags = 0" parameter was "bool border = false".
     * \/\/   This API is backward compatible with old code, as we guarantee that ImGuiChildFlags_Borders == true.
     * \/\/   Consider updating your old code:
     * \/\/      BeginChild("Name", size, false)   -> Begin("Name", size, 0); or Begin("Name", size, ImGuiChildFlags_None);
     * \/\/      BeginChild("Name", size, true)    -> Begin("Name", size, ImGuiChildFlags_Borders);
     * \/\/ - Manual sizing (each axis can use a different setting e.g. ImVec2(0.0f, 400.0f)):
     * \/\/     == 0.0f: use remaining parent window size for this axis.
     * \/\/      > 0.0f: use specified size for this axis.
     * \/\/      < 0.0f: right\/bottom-align to specified distance from available content boundaries.
     * \/\/ - Specifying ImGuiChildFlags_AutoResizeX or ImGuiChildFlags_AutoResizeY makes the sizing automatic based on child contents.
     * \/\/   Combining both ImGuiChildFlags_AutoResizeX _and_ ImGuiChildFlags_AutoResizeY defeats purpose of a scrolling region and is NOT recommended.
     * \/\/ - BeginChild() returns false to indicate the window is collapsed or fully clipped, so you may early out and omit submitting
     * \/\/   anything to the window. Always call a matching EndChild() for each BeginChild() call, regardless of its return value.
     * \/\/   [Important: due to legacy reason, Begin\/End and BeginChild\/EndChild are inconsistent with all other functions
     * \/\/    such as BeginMenu\/EndMenu, BeginPopup\/EndPopup, etc. where the EndXXX call should only be called if the corresponding
     * \/\/    BeginXXX function returned true. Begin and BeginChild are the only odd ones out. Will be fixed in a future update.]
     */
    BeginChild(str_id: string, size?: ImVec2, child_flags?: ImGuiChildFlags, window_flags?: ImGuiWindowFlags): boolean;
    BeginChildID(id: ImGuiID, size?: ImVec2, child_flags?: ImGuiChildFlags, window_flags?: ImGuiWindowFlags): boolean;
    EndChild(): void;
    /**
     * \/\/ Windows Utilities
     * \/\/ - 'current window' = the window we are appending into while inside a Begin()\/End() block. 'next window' = next window we will Begin() into.
     */
    IsWindowAppearing(): boolean;
    IsWindowCollapsed(): boolean;
    /**
     * \/\/ is current window focused? or its root\/child, depending on flags. see flags for options.
     */
    IsWindowFocused(flags?: ImGuiFocusedFlags): boolean;
    /**
     * \/\/ is current window hovered and hoverable (e.g. not blocked by a popup\/modal)? See ImGuiHoveredFlags_ for options. IMPORTANT: If you are trying to check whether your mouse should be dispatched to Dear ImGui or to your underlying app, you should not use this function! Use the 'io.WantCaptureMouse' boolean for that! Refer to FAQ entry "How can I tell whether to dispatch mouse\/keyboard to Dear ImGui or my application?" for details.
     */
    IsWindowHovered(flags?: ImGuiHoveredFlags): boolean;
    /**
     * \/\/ get draw list associated to the current window, to append your own drawing primitives
     */
    GetWindowDrawList(): ImDrawList;
    /**
     * \/\/ get DPI scale currently associated to the current window's viewport.
     */
    GetWindowDpiScale(): number;
    /**
     * \/\/ get current window position in screen space (IT IS UNLIKELY YOU EVER NEED TO USE THIS. Consider always using GetCursorScreenPos() and GetContentRegionAvail() instead)
     */
    GetWindowPos(): ImVec2;
    /**
     * \/\/ get current window size (IT IS UNLIKELY YOU EVER NEED TO USE THIS. Consider always using GetCursorScreenPos() and GetContentRegionAvail() instead)
     */
    GetWindowSize(): ImVec2;
    /**
     * \/\/ get current window width (IT IS UNLIKELY YOU EVER NEED TO USE THIS). Shortcut for GetWindowSize().x.
     */
    GetWindowWidth(): number;
    /**
     * \/\/ get current window height (IT IS UNLIKELY YOU EVER NEED TO USE THIS). Shortcut for GetWindowSize().y.
     */
    GetWindowHeight(): number;
    /**
     * \/\/ get viewport currently associated to the current window.
     */
    GetWindowViewport(): ImGuiViewport;
    /**
     * \/\/ set next window position. call before Begin(). use pivot=(0.5f,0.5f) to center on given point, etc.
     */
    SetNextWindowPos(pos: ImVec2, cond?: ImGuiCond, pivot?: ImVec2): void;
    /**
     * \/\/ set next window size. set axis to 0.0f to force an auto-fit on this axis. call before Begin()
     */
    SetNextWindowSize(size: ImVec2, cond?: ImGuiCond): void;
    SetNextWindowSizeConstraints(min: ImVec2, max: ImVec2): void;
    /**
     * \/\/ set next window content size (~ scrollable client area, which enforce the range of scrollbars). Not including window decorations (title bar, menu bar, etc.) nor WindowPadding. set an axis to 0.0f to leave it automatic. call before Begin()
     */
    SetNextWindowContentSize(size: ImVec2): void;
    /**
     * \/\/ set next window collapsed state. call before Begin()
     */
    SetNextWindowCollapsed(collapsed: boolean, cond?: ImGuiCond): void;
    /**
     * \/\/ set next window to be focused \/ top-most. call before Begin()
     */
    SetNextWindowFocus(): void;
    /**
     * \/\/ set next window scrolling value (use < 0.0f to not affect a given axis).
     */
    SetNextWindowScroll(scroll: ImVec2): void;
    /**
     * \/\/ set next window background color alpha. helper to easily override the Alpha component of ImGuiCol_WindowBg\/ChildBg\/PopupBg. you may also use ImGuiWindowFlags_NoBackground.
     */
    SetNextWindowBgAlpha(alpha: number): void;
    /**
     * \/\/ set next window viewport
     */
    SetNextWindowViewport(viewport_id: ImGuiID): void;
    /**
     * \/\/ (not recommended) set current window position - call within Begin()\/End(). prefer using SetNextWindowPos(), as this may incur tearing and side-effects.
     */
    SetWindowPos(pos: ImVec2, cond?: ImGuiCond): void;
    /**
     * \/\/ (not recommended) set current window size - call within Begin()\/End(). set to ImVec2(0, 0) to force an auto-fit. prefer using SetNextWindowSize(), as this may incur tearing and minor side-effects.
     */
    SetWindowSize(size: ImVec2, cond?: ImGuiCond): void;
    /**
     * \/\/ (not recommended) set current window collapsed state. prefer using SetNextWindowCollapsed().
     */
    SetWindowCollapsed(collapsed: boolean, cond?: ImGuiCond): void;
    /**
     * \/\/ (not recommended) set current window to be focused \/ top-most. prefer using SetNextWindowFocus().
     */
    SetWindowFocus(): void;
    /**
     * \/\/ set named window position.
     */
    SetWindowPosStr(name: string, pos: ImVec2, cond?: ImGuiCond): void;
    /**
     * \/\/ set named window size. set axis to 0.0f to force an auto-fit on this axis.
     */
    SetWindowSizeStr(name: string, size: ImVec2, cond?: ImGuiCond): void;
    /**
     * \/\/ set named window collapsed state
     */
    SetWindowCollapsedStr(name: string, collapsed: boolean, cond?: ImGuiCond): void;
    /**
     * \/\/ set named window to be focused \/ top-most. use NULL to remove focus.
     */
    SetWindowFocusStr(name: string): void;
    /**
     * \/\/ get scrolling amount [0 .. GetScrollMaxX()]
     */
    GetScrollX(): number;
    /**
     * \/\/ get scrolling amount [0 .. GetScrollMaxY()]
     */
    GetScrollY(): number;
    /**
     * \/\/ set scrolling amount [0 .. GetScrollMaxX()]
     */
    SetScrollX(scroll_x: number): void;
    /**
     * \/\/ set scrolling amount [0 .. GetScrollMaxY()]
     */
    SetScrollY(scroll_y: number): void;
    /**
     * \/\/ get maximum scrolling amount ~~ ContentSize.x - WindowSize.x - DecorationsSize.x
     */
    GetScrollMaxX(): number;
    /**
     * \/\/ get maximum scrolling amount ~~ ContentSize.y - WindowSize.y - DecorationsSize.y
     */
    GetScrollMaxY(): number;
    /**
     * \/\/ adjust scrolling amount to make current cursor position visible. center_x_ratio=0.0: left, 0.5: center, 1.0: right. When using to make a "default\/current item" visible, consider using SetItemDefaultFocus() instead.
     */
    SetScrollHereX(center_x_ratio?: number): void;
    /**
     * \/\/ adjust scrolling amount to make current cursor position visible. center_y_ratio=0.0: top, 0.5: center, 1.0: bottom. When using to make a "default\/current item" visible, consider using SetItemDefaultFocus() instead.
     */
    SetScrollHereY(center_y_ratio?: number): void;
    /**
     * \/\/ adjust scrolling amount to make given position visible. Generally GetCursorStartPos() + offset to compute a valid position.
     */
    SetScrollFromPosX(local_x: number, center_x_ratio?: number): void;
    /**
     * \/\/ adjust scrolling amount to make given position visible. Generally GetCursorStartPos() + offset to compute a valid position.
     */
    SetScrollFromPosY(local_y: number, center_y_ratio?: number): void;
    /**
     * \/\/ Use NULL as a shortcut to keep current font. Use 0.0f to keep current size.
     */
    PushFontFloat(font: ImFont, font_size_base_unscaled: number): void;
    PopFont(): void;
    /**
     * \/\/ get current font
     */
    GetFont(): ImFont;
    /**
     * \/\/ get current scaled font size (= height in pixels). AFTER global scale factors applied. *IMPORTANT* DO NOT PASS THIS VALUE TO PushFont()! Use ImGui::GetStyle().FontSizeBase to get value before global scale factors.
     */
    GetFontSize(): number;
    /**
     * \/\/ get current font bound at current size \/\/ == GetFont()->GetFontBaked(GetFontSize())
     */
    GetFontBaked(): ImFontBaked;
    /**
     * \/\/ modify a style color. always use this if you modify the style after NewFrame().
     */
    PushStyleColor(idx: ImGuiCol, col: ImU32): void;
    PushStyleColorImVec4(idx: ImGuiCol, col: ImVec4): void;
    PopStyleColor(count?: number): void;
    /**
     * \/\/ modify a style float variable. always use this if you modify the style after NewFrame()!
     */
    PushStyleVar(idx: ImGuiStyleVar, val: number): void;
    /**
     * \/\/ modify a style ImVec2 variable. "
     */
    PushStyleVarImVec2(idx: ImGuiStyleVar, val: ImVec2): void;
    /**
     * \/\/ modify X component of a style ImVec2 variable. "
     */
    PushStyleVarX(idx: ImGuiStyleVar, val_x: number): void;
    /**
     * \/\/ modify Y component of a style ImVec2 variable. "
     */
    PushStyleVarY(idx: ImGuiStyleVar, val_y: number): void;
    PopStyleVar(count?: number): void;
    /**
     * \/\/ modify specified shared item flag, e.g. PushItemFlag(ImGuiItemFlags_NoTabStop, true)
     */
    PushItemFlag(option: ImGuiItemFlags, enabled: boolean): void;
    PopItemFlag(): void;
    /**
     * \/\/ push width of items for common large "item+label" widgets. >0.0f: width in pixels, <0.0f align xx pixels to the right of window (so -FLT_MIN always align width to the right side).
     */
    PushItemWidth(item_width: number): void;
    PopItemWidth(): void;
    /**
     * \/\/ set width of the _next_ common large "item+label" widget. >0.0f: width in pixels, <0.0f align xx pixels to the right of window (so -FLT_MIN always align width to the right side)
     */
    SetNextItemWidth(item_width: number): void;
    /**
     * \/\/ width of item given pushed settings and current cursor position. NOT necessarily the width of last item unlike most 'Item' functions.
     */
    CalcItemWidth(): number;
    /**
     * \/\/ push word-wrapping position for Text*() commands. < 0.0f: no wrapping; 0.0f: wrap to end of window (or column); > 0.0f: wrap at 'wrap_pos_x' position in window local space
     */
    PushTextWrapPos(wrap_local_pos_x?: number): void;
    PopTextWrapPos(): void;
    /**
     * \/\/ get UV coordinate for a white pixel, useful to draw custom shapes via the ImDrawList API
     */
    GetFontTexUvWhitePixel(): ImVec2;
    /**
     * \/\/ retrieve given style color with style alpha applied and optional extra alpha multiplier, packed as a 32-bit value suitable for ImDrawList
     */
    GetColorU32(idx: ImGuiCol, alpha_mul?: number): ImU32;
    /**
     * \/\/ retrieve given color with style alpha applied, packed as a 32-bit value suitable for ImDrawList
     */
    GetColorU32ImVec4(col: ImVec4): ImU32;
    /**
     * \/\/ retrieve given color with style alpha applied, packed as a 32-bit value suitable for ImDrawList
     */
    GetColorU32ImU32(col: ImU32, alpha_mul?: number): ImU32;
    /**
     * \/\/ retrieve style color as stored in ImGuiStyle structure. use to feed back into PushStyleColor(), otherwise use GetColorU32() to get style color with style alpha baked in.
     */
    GetStyleColorVec4(idx: ImGuiCol): ImVec4;
    /**
     * \/\/ cursor position, absolute coordinates. THIS IS YOUR BEST FRIEND (prefer using this rather than GetCursorPos(), also more useful to work with ImDrawList API).
     */
    GetCursorScreenPos(): ImVec2;
    /**
     * \/\/ cursor position, absolute coordinates. THIS IS YOUR BEST FRIEND.
     */
    SetCursorScreenPos(pos: ImVec2): void;
    /**
     * \/\/ available space from current position. THIS IS YOUR BEST FRIEND.
     */
    GetContentRegionAvail(): ImVec2;
    /**
     * \/\/ [window-local] cursor position in window-local coordinates. This is not your best friend.
     */
    GetCursorPos(): ImVec2;
    /**
     * \/\/ [window-local] "
     */
    GetCursorPosX(): number;
    /**
     * \/\/ [window-local] "
     */
    GetCursorPosY(): number;
    /**
     * \/\/ [window-local] "
     */
    SetCursorPos(local_pos: ImVec2): void;
    /**
     * \/\/ [window-local] "
     */
    SetCursorPosX(local_x: number): void;
    /**
     * \/\/ [window-local] "
     */
    SetCursorPosY(local_y: number): void;
    /**
     * \/\/ [window-local] initial cursor position, in window-local coordinates. Call GetCursorScreenPos() after Begin() to get the absolute coordinates version.
     */
    GetCursorStartPos(): ImVec2;
    /**
     * \/\/ separator, generally horizontal. inside a menu bar or in horizontal layout mode, this becomes a vertical separator.
     */
    Separator(): void;
    /**
     * \/\/ call between widgets or groups to layout them horizontally. X position given in window coordinates.
     */
    SameLine(offset_from_start_x?: number, spacing?: number): void;
    /**
     * \/\/ undo a SameLine() or force a new line when in a horizontal-layout context.
     */
    NewLine(): void;
    /**
     * \/\/ add vertical spacing.
     */
    Spacing(): void;
    /**
     * \/\/ add a dummy item of given size. unlike InvisibleButton(), Dummy() won't take the mouse click or be navigable into.
     */
    Dummy(size: ImVec2): void;
    /**
     * \/\/ move content position toward the right, by indent_w, or style.IndentSpacing if indent_w <= 0
     */
    Indent(indent_w?: number): void;
    /**
     * \/\/ move content position back to the left, by indent_w, or style.IndentSpacing if indent_w <= 0
     */
    Unindent(indent_w?: number): void;
    /**
     * \/\/ lock horizontal starting position
     */
    BeginGroup(): void;
    /**
     * \/\/ unlock horizontal starting position + capture the whole group bounding box into one "item" (so you can use IsItemHovered() or layout primitives such as SameLine() on whole group, etc.)
     */
    EndGroup(): void;
    /**
     * \/\/ vertically align upcoming text baseline to FramePadding.y so that it will align properly to regularly framed items (call if you have text on a line before a framed item)
     */
    AlignTextToFramePadding(): void;
    /**
     * \/\/ ~ FontSize
     */
    GetTextLineHeight(): number;
    /**
     * \/\/ ~ FontSize + style.ItemSpacing.y (distance in pixels between 2 consecutive lines of text)
     */
    GetTextLineHeightWithSpacing(): number;
    /**
     * \/\/ ~ FontSize + style.FramePadding.y * 2
     */
    GetFrameHeight(): number;
    /**
     * \/\/ ~ FontSize + style.FramePadding.y * 2 + style.ItemSpacing.y (distance in pixels between 2 consecutive lines of framed widgets)
     */
    GetFrameHeightWithSpacing(): number;
    /**
     * \/\/ push string into the ID stack (will hash string).
     */
    PushID(str_id: string): void;
    /**
     * \/\/ push integer into the ID stack (will hash integer).
     */
    PushIDInt(int_id: number): void;
    /**
     * \/\/ pop from the ID stack.
     */
    PopID(): void;
    /**
     * \/\/ calculate unique ID (hash of whole ID stack + given parameter). e.g. if you want to query into ImGuiStorage yourself
     */
    GetID(str_id: string): ImGuiID;
    GetIDInt(int_id: number): ImGuiID;
    Text(fmt: string): void;
    TextColored(col: ImVec4, fmt: string): void;
    TextDisabled(fmt: string): void;
    TextWrapped(fmt: string): void;
    LabelText(label: string, fmt: string): void;
    BulletText(fmt: string): void;
    /**
     * \/\/ currently: formatted text with a horizontal line
     */
    SeparatorText(label: string): void;
    /**
     * \/\/ button
     */
    Button(label: string, size?: ImVec2): boolean;
    /**
     * \/\/ button with (FramePadding.y == 0) to easily embed within text
     */
    SmallButton(label: string): boolean;
    /**
     * \/\/ flexible button behavior without the visuals, frequently useful to build custom behaviors using the public api (along with IsItemActive, IsItemHovered, etc.)
     */
    InvisibleButton(str_id: string, size: ImVec2, flags?: ImGuiButtonFlags): boolean;
    /**
     * \/\/ square button with an arrow shape
     */
    ArrowButton(str_id: string, dir: ImGuiDir): boolean;
    Checkbox(label: string, v: [boolean]): boolean;
    CheckboxFlagsIntPtr(label: string, flags: [number], flags_value: number): boolean;
    CheckboxFlagsUintPtr(label: string, flags: [number], flags_value: number): boolean;
    /**
     * \/\/ use with e.g. if (RadioButton("one", my_value==1)) { my_value = 1; }
     */
    RadioButton(label: string, active: boolean): boolean;
    /**
     * \/\/ shortcut to handle the above pattern when value is an integer
     */
    RadioButtonIntPtr(label: string, v: [number], v_button: number): boolean;
    ProgressBar(fraction: number, size_arg?: ImVec2, overlay?: string): void;
    /**
     * \/\/ draw a small circle + keep the cursor on the same line. advance cursor x position by GetTreeNodeToLabelSpacing(), same distance that TreeNode() uses
     */
    Bullet(): void;
    /**
     * \/\/ hyperlink text button, return true when clicked
     */
    TextLink(label: string): boolean;
    /**
     * \/\/ hyperlink text button, automatically open file\/url when clicked
     */
    TextLinkOpenURL(label: string, url?: string): boolean;
    /**
     * \/\/ Widgets: Images
     * \/\/ - Read about ImTextureID\/ImTextureRef  here: https:\/\/github.com\/ocornut\/imgui\/wiki\/Image-Loading-and-Displaying-Examples
     * \/\/ - 'uv0' and 'uv1' are texture coordinates. Read about them from the same link above.
     * \/\/ - Image() pads adds style.ImageBorderSize on each side, ImageButton() adds style.FramePadding on each side.
     * \/\/ - ImageButton() draws a background based on regular Button() color + optionally an inner background if specified.
     * \/\/ - An obsolete version of Image(), before 1.91.9 (March 2025), had a 'tint_col' parameter which is now supported by the ImageWithBg() function.
     */
    Image(tex_ref: ImTextureRef, image_size: ImVec2, uv0?: ImVec2, uv1?: ImVec2): void;
    ImageWithBg(tex_ref: ImTextureRef, image_size: ImVec2, uv0?: ImVec2, uv1?: ImVec2, bg_col?: ImVec4, tint_col?: ImVec4): void;
    ImageButton(str_id: string, tex_ref: ImTextureRef, image_size: ImVec2, uv0?: ImVec2, uv1?: ImVec2, bg_col?: ImVec4, tint_col?: ImVec4): boolean;
    /**
     * \/\/ Widgets: Combo Box (Dropdown)
     * \/\/ - The BeginCombo()\/EndCombo() api allows you to manage your contents and selection state however you want it, by creating e.g. Selectable() items.
     * \/\/ - The old Combo() api are helpers over BeginCombo()\/EndCombo() which are kept available for convenience purpose. This is analogous to how ListBox are created.
     */
    BeginCombo(label: string, preview_value: string, flags?: ImGuiComboFlags): boolean;
    /**
     * \/\/ only call EndCombo() if BeginCombo() returns true!
     */
    EndCombo(): void;
    /**
     * \/\/ Separate items with \0 within a string, end item-list with \0\0. e.g. "One\0Two\0Three\0"
     */
    Combo(label: string, current_item: [number], items_separated_by_zeros: string, popup_max_height_in_items?: number): boolean;
    /**
     * \/\/ If v_min >= v_max we have no bound
     */
    DragFloat(label: string, v: [number], v_speed?: number, v_min?: number, v_max?: number, format?: string, flags?: ImGuiSliderFlags): boolean;
    DragFloat2(label: string, v: [number, number], v_speed?: number, v_min?: number, v_max?: number, format?: string, flags?: ImGuiSliderFlags): boolean;
    DragFloat3(label: string, v: [number, number, number], v_speed?: number, v_min?: number, v_max?: number, format?: string, flags?: ImGuiSliderFlags): boolean;
    DragFloat4(label: string, v: [number, number, number, number], v_speed?: number, v_min?: number, v_max?: number, format?: string, flags?: ImGuiSliderFlags): boolean;
    DragFloatRange2(label: string, v_current_min: [number], v_current_max: [number], v_speed?: number, v_min?: number, v_max?: number, format?: string, format_max?: string, flags?: ImGuiSliderFlags): boolean;
    /**
     * \/\/ If v_min >= v_max we have no bound
     */
    DragInt(label: string, v: [number], v_speed?: number, v_min?: number, v_max?: number, format?: string, flags?: ImGuiSliderFlags): boolean;
    DragInt2(label: string, v: [number, number], v_speed?: number, v_min?: number, v_max?: number, format?: string, flags?: ImGuiSliderFlags): boolean;
    DragInt3(label: string, v: [number, number, number], v_speed?: number, v_min?: number, v_max?: number, format?: string, flags?: ImGuiSliderFlags): boolean;
    DragInt4(label: string, v: [number, number, number, number], v_speed?: number, v_min?: number, v_max?: number, format?: string, flags?: ImGuiSliderFlags): boolean;
    DragIntRange2(label: string, v_current_min: [number], v_current_max: [number], v_speed?: number, v_min?: number, v_max?: number, format?: string, format_max?: string, flags?: ImGuiSliderFlags): boolean;
    /**
     * \/\/ adjust format to decorate the value with a prefix or a suffix for in-slider labels or unit display.
     */
    SliderFloat(label: string, v: [number], v_min: number, v_max: number, format?: string, flags?: ImGuiSliderFlags): boolean;
    SliderFloat2(label: string, v: [number, number], v_min: number, v_max: number, format?: string, flags?: ImGuiSliderFlags): boolean;
    SliderFloat3(label: string, v: [number, number, number], v_min: number, v_max: number, format?: string, flags?: ImGuiSliderFlags): boolean;
    SliderFloat4(label: string, v: [number, number, number, number], v_min: number, v_max: number, format?: string, flags?: ImGuiSliderFlags): boolean;
    SliderAngle(label: string, v_rad: [number], v_degrees_min?: number, v_degrees_max?: number, format?: string, flags?: ImGuiSliderFlags): boolean;
    SliderInt(label: string, v: [number], v_min: number, v_max: number, format?: string, flags?: ImGuiSliderFlags): boolean;
    SliderInt2(label: string, v: [number, number], v_min: number, v_max: number, format?: string, flags?: ImGuiSliderFlags): boolean;
    SliderInt3(label: string, v: [number, number, number], v_min: number, v_max: number, format?: string, flags?: ImGuiSliderFlags): boolean;
    SliderInt4(label: string, v: [number, number, number, number], v_min: number, v_max: number, format?: string, flags?: ImGuiSliderFlags): boolean;
    InputText(label: string, buf: [string], buf_size: number, flags?: ImGuiInputTextFlags): boolean;
    InputTextMultiline(label: string, buf: [string], buf_size: number, size?: ImVec2, flags?: ImGuiInputTextFlags): boolean;
    InputTextWithHint(label: string, hint: string, buf: [string], buf_size: number, flags?: ImGuiInputTextFlags): boolean;
    InputFloat(label: string, v: [number], step?: number, step_fast?: number, format?: string, flags?: ImGuiInputTextFlags): boolean;
    InputFloat2(label: string, v: [number, number], format?: string, flags?: ImGuiInputTextFlags): boolean;
    InputFloat3(label: string, v: [number, number, number], format?: string, flags?: ImGuiInputTextFlags): boolean;
    InputFloat4(label: string, v: [number, number, number, number], format?: string, flags?: ImGuiInputTextFlags): boolean;
    InputInt(label: string, v: [number], step?: number, step_fast?: number, flags?: ImGuiInputTextFlags): boolean;
    InputInt2(label: string, v: [number, number], flags?: ImGuiInputTextFlags): boolean;
    InputInt3(label: string, v: [number, number, number], flags?: ImGuiInputTextFlags): boolean;
    InputInt4(label: string, v: [number, number, number, number], flags?: ImGuiInputTextFlags): boolean;
    InputDouble(label: string, v: [number], step?: number, step_fast?: number, format?: string, flags?: ImGuiInputTextFlags): boolean;
    /**
     * \/\/ Widgets: Color Editor\/Picker (tip: the ColorEdit* functions have a little color square that can be left-clicked to open a picker, and right-clicked to open an option menu.)
     * \/\/ - Note that in C++ a 'float v[X]' function argument is the _same_ as 'float* v', the array syntax is just a way to document the number of elements that are expected to be accessible.
     * \/\/ - You can pass the address of a first float element out of a contiguous structure, e.g. &myvector.x
     */
    ColorEdit3(label: string, col: [number, number, number], flags?: ImGuiColorEditFlags): boolean;
    ColorEdit4(label: string, col: [number, number, number, number], flags?: ImGuiColorEditFlags): boolean;
    ColorPicker3(label: string, col: [number, number, number], flags?: ImGuiColorEditFlags): boolean;
    ColorPicker4(label: string, col: [number, number, number, number], flags?: ImGuiColorEditFlags, ref_col?: number[] | null): boolean;
    /**
     * \/\/ display a color square\/button, hover for details, return true when pressed.
     */
    ColorButton(desc_id: string, col: ImVec4, flags?: ImGuiColorEditFlags, size?: ImVec2): boolean;
    /**
     * \/\/ initialize current options (generally on application startup) if you want to select a default format, picker type, etc. User will be able to change many settings, unless you pass the _NoOptions flag to your calls.
     */
    SetColorEditOptions(flags: ImGuiColorEditFlags): void;
    /**
     * \/\/ Widgets: Trees
     * \/\/ - TreeNode functions return true when the node is open, in which case you need to also call TreePop() when you are finished displaying the tree node contents.
     */
    TreeNode(label: string): boolean;
    TreeNodeEx(label: string, flags?: ImGuiTreeNodeFlags): boolean;
    /**
     * \/\/ ~ Indent()+PushID(). Already called by TreeNode() when returning true, but you can call TreePush\/TreePop yourself if desired.
     */
    TreePush(str_id: string): void;
    /**
     * \/\/ ~ Unindent()+PopID()
     */
    TreePop(): void;
    /**
     * \/\/ horizontal distance preceding label when using TreeNode*() or Bullet() == (g.FontSize + style.FramePadding.x*2) for a regular unframed TreeNode
     */
    GetTreeNodeToLabelSpacing(): number;
    /**
     * \/\/ if returning 'true' the header is open. doesn't indent nor push on ID stack. user doesn't have to call TreePop().
     */
    CollapsingHeader(label: string, flags?: ImGuiTreeNodeFlags): boolean;
    /**
     * \/\/ when 'p_visible != NULL': if '*p_visible==true' display an additional small close button on upper right of the header which will set the bool to false when clicked, if '*p_visible==false' don't display the header.
     */
    CollapsingHeaderBoolPtr(label: string, p_visible: [boolean], flags?: ImGuiTreeNodeFlags): boolean;
    /**
     * \/\/ set next TreeNode\/CollapsingHeader open state.
     */
    SetNextItemOpen(is_open: boolean, cond?: ImGuiCond): void;
    /**
     * \/\/ set id to use for open\/close storage (default to same as item id).
     */
    SetNextItemStorageID(storage_id: ImGuiID): void;
    /**
     * \/\/ retrieve tree node open\/close state.
     */
    TreeNodeGetOpen(storage_id: ImGuiID): boolean;
    /**
     * \/\/ "bool selected" carry the selection state (read-only). Selectable() is clicked is returns true so you can modify your selection state. size.x==0.0: use remaining width, size.x>0.0: specify width. size.y==0.0: use label height, size.y>0.0: specify height
     */
    Selectable(label: string, selected?: boolean, flags?: ImGuiSelectableFlags, size?: ImVec2): boolean;
    /**
     * \/\/ "bool* p_selected" point to the selection state (read-write), as a convenient helper.
     */
    SelectableBoolPtr(label: string, p_selected: [boolean], flags?: ImGuiSelectableFlags, size?: ImVec2): boolean;
    /**
     * \/\/ Multi-selection system for Selectable(), Checkbox(), TreeNode() functions [BETA]
     * \/\/ - This enables standard multi-selection\/range-selection idioms (Ctrl+Mouse\/Keyboard, Shift+Mouse\/Keyboard, etc.) in a way that also allow a clipper to be used.
     * \/\/ - ImGuiSelectionUserData is often used to store your item index within the current view (but may store something else).
     * \/\/ - Read comments near ImGuiMultiSelectIO for instructions\/details and see 'Demo->Widgets->Selection State & Multi-Select' for demo.
     * \/\/ - TreeNode() is technically supported but... using this correctly is more complicated. You need some sort of linear\/random access to your tree,
     * \/\/   which is suited to advanced trees setups already implementing filters and clipper. We will work simplifying the current demo.
     * \/\/ - 'selection_size' and 'items_count' parameters are optional and used by a few features. If they are costly for you to compute, you may avoid them.
     */
    BeginMultiSelect(flags: ImGuiMultiSelectFlags, selection_size?: number, items_count?: number): ImGuiMultiSelectIO;
    EndMultiSelect(): ImGuiMultiSelectIO;
    SetNextItemSelectionUserData(selection_user_data: ImGuiSelectionUserData): void;
    /**
     * \/\/ Was the last item selection state toggled? Useful if you need the per-item information _before_ reaching EndMultiSelect(). We only returns toggle _event_ in order to handle clipping correctly.
     */
    IsItemToggledSelection(): boolean;
    /**
     * \/\/ open a framed scrolling region
     */
    BeginListBox(label: string, size?: ImVec2): boolean;
    /**
     * \/\/ only call EndListBox() if BeginListBox() returned true!
     */
    EndListBox(): void;
    /**
     * \/\/ Widgets: Data Plotting
     * \/\/ - Consider using ImPlot (https:\/\/github.com\/epezent\/implot) which is much better!
     */
    PlotLines(label: string, values: number[], values_count: number, values_offset?: number, overlay_text?: string, scale_min?: number, scale_max?: number, graph_size?: ImVec2, stride?: number): void;
    PlotHistogram(label: string, values: number[], values_count: number, values_offset?: number, overlay_text?: string, scale_min?: number, scale_max?: number, graph_size?: ImVec2, stride?: number): void;
    /**
     * \/\/ append to menu-bar of current window (requires ImGuiWindowFlags_MenuBar flag set on parent window).
     */
    BeginMenuBar(): boolean;
    /**
     * \/\/ only call EndMenuBar() if BeginMenuBar() returns true!
     */
    EndMenuBar(): void;
    /**
     * \/\/ create and append to a full screen menu-bar.
     */
    BeginMainMenuBar(): boolean;
    /**
     * \/\/ only call EndMainMenuBar() if BeginMainMenuBar() returns true!
     */
    EndMainMenuBar(): void;
    /**
     * \/\/ create a sub-menu entry. only call EndMenu() if this returns true!
     */
    BeginMenu(label: string, enabled?: boolean): boolean;
    /**
     * \/\/ only call EndMenu() if BeginMenu() returns true!
     */
    EndMenu(): void;
    /**
     * \/\/ return true when activated.
     */
    MenuItem(label: string, shortcut?: string, selected?: boolean, enabled?: boolean): boolean;
    /**
     * \/\/ return true when activated + toggle (*p_selected) if p_selected != NULL
     */
    MenuItemBoolPtr(label: string, shortcut: string, p_selected: [boolean], enabled?: boolean): boolean;
    /**
     * \/\/ begin\/append a tooltip window.
     */
    BeginTooltip(): boolean;
    /**
     * \/\/ only call EndTooltip() if BeginTooltip()\/BeginItemTooltip() returns true!
     */
    EndTooltip(): void;
    SetTooltip(fmt: string): void;
    /**
     * \/\/ begin\/append a tooltip window if preceding item was hovered.
     */
    BeginItemTooltip(): boolean;
    SetItemTooltip(fmt: string): void;
    /**
     * \/\/ return true if the popup is open, and you can start outputting to it.
     */
    BeginPopup(str_id: string, flags?: ImGuiWindowFlags): boolean;
    /**
     * \/\/ return true if the modal is open, and you can start outputting to it.
     */
    BeginPopupModal(name: string, p_open?: [boolean] | null, flags?: ImGuiWindowFlags): boolean;
    /**
     * \/\/ only call EndPopup() if BeginPopupXXX() returns true!
     */
    EndPopup(): void;
    /**
     * \/\/ call to mark popup as open (don't call every frame!).
     */
    OpenPopup(str_id: string, popup_flags?: ImGuiPopupFlags): void;
    /**
     * \/\/ id overload to facilitate calling from nested stacks
     */
    OpenPopupID(id: ImGuiID, popup_flags?: ImGuiPopupFlags): void;
    /**
     * \/\/ helper to open popup when clicked on last item. Default to ImGuiPopupFlags_MouseButtonRight == 1. (note: actually triggers on the mouse _released_ event to be consistent with popup behaviors)
     */
    OpenPopupOnItemClick(str_id?: string, popup_flags?: ImGuiPopupFlags): void;
    /**
     * \/\/ manually close the popup we have begin-ed into.
     */
    CloseCurrentPopup(): void;
    /**
     * \/\/ open+begin popup when clicked on last item. Use str_id==NULL to associate the popup to previous item. If you want to use that on a non-interactive item such as Text() you need to pass in an explicit ID here. read comments in .cpp!
     */
    BeginPopupContextItem(str_id?: string, popup_flags?: ImGuiPopupFlags): boolean;
    /**
     * \/\/ open+begin popup when clicked on current window.
     */
    BeginPopupContextWindow(str_id?: string, popup_flags?: ImGuiPopupFlags): boolean;
    /**
     * \/\/ open+begin popup when clicked in void (where there are no windows).
     */
    BeginPopupContextVoid(str_id?: string, popup_flags?: ImGuiPopupFlags): boolean;
    /**
     * \/\/ return true if the popup is open.
     */
    IsPopupOpen(str_id: string, flags?: ImGuiPopupFlags): boolean;
    /**
     * \/\/ Tables
     * \/\/ - Full-featured replacement for old Columns API.
     * \/\/ - See Demo->Tables for demo code. See top of imgui_tables.cpp for general commentary.
     * \/\/ - See ImGuiTableFlags_ and ImGuiTableColumnFlags_ enums for a description of available flags.
     * \/\/ The typical call flow is:
     * \/\/ - 1. Call BeginTable(), early out if returning false.
     * \/\/ - 2. Optionally call TableSetupColumn() to submit column name\/flags\/defaults.
     * \/\/ - 3. Optionally call TableSetupScrollFreeze() to request scroll freezing of columns\/rows.
     * \/\/ - 4. Optionally call TableHeadersRow() to submit a header row. Names are pulled from TableSetupColumn() data.
     * \/\/ - 5. Populate contents:
     * \/\/    - In most situations you can use TableNextRow() + TableSetColumnIndex(N) to start appending into a column.
     * \/\/    - If you are using tables as a sort of grid, where every column is holding the same type of contents,
     * \/\/      you may prefer using TableNextColumn() instead of TableNextRow() + TableSetColumnIndex().
     * \/\/      TableNextColumn() will automatically wrap-around into the next row if needed.
     * \/\/    - IMPORTANT: Comparatively to the old Columns() API, we need to call TableNextColumn() for the first column!
     * \/\/    - Summary of possible call flow:
     * \/\/        - TableNextRow() -> TableSetColumnIndex(0) -> Text("Hello 0") -> TableSetColumnIndex(1) -> Text("Hello 1")  \/\/ OK
     * \/\/        - TableNextRow() -> TableNextColumn()      -> Text("Hello 0") -> TableNextColumn()      -> Text("Hello 1")  \/\/ OK
     * \/\/        -                   TableNextColumn()      -> Text("Hello 0") -> TableNextColumn()      -> Text("Hello 1")  \/\/ OK: TableNextColumn() automatically gets to next row!
     * \/\/        - TableNextRow()                           -> Text("Hello 0")                                               \/\/ Not OK! Missing TableSetColumnIndex() or TableNextColumn()! Text will not appear!
     * \/\/ - 5. Call EndTable()
     */
    BeginTable(str_id: string, columns: number, flags?: ImGuiTableFlags, outer_size?: ImVec2, inner_width?: number): boolean;
    /**
     * \/\/ only call EndTable() if BeginTable() returns true!
     */
    EndTable(): void;
    /**
     * \/\/ append into the first cell of a new row. 'min_row_height' include the minimum top and bottom padding aka CellPadding.y * 2.0f.
     */
    TableNextRow(row_flags?: ImGuiTableRowFlags, min_row_height?: number): void;
    /**
     * \/\/ append into the next column (or first column of next row if currently in last column). Return true when column is visible.
     */
    TableNextColumn(): boolean;
    /**
     * \/\/ append into the specified column. Return true when column is visible.
     */
    TableSetColumnIndex(column_n: number): boolean;
    /**
     * \/\/ Tables: Headers & Columns declaration
     * \/\/ - Use TableSetupColumn() to specify label, resizing policy, default width\/weight, id, various other flags etc.
     * \/\/ - Use TableHeadersRow() to create a header row and automatically submit a TableHeader() for each column.
     * \/\/   Headers are required to perform: reordering, sorting, and opening the context menu.
     * \/\/   The context menu can also be made available in columns body using ImGuiTableFlags_ContextMenuInBody.
     * \/\/ - You may manually submit headers using TableNextRow() + TableHeader() calls, but this is only useful in
     * \/\/   some advanced use cases (e.g. adding custom widgets in header row).
     * \/\/ - Use TableSetupScrollFreeze() to lock columns\/rows so they stay visible when scrolled. When freezing columns you would usually also use ImGuiTableColumnFlags_NoHide on them.
     */
    TableSetupColumn(label: string, flags?: ImGuiTableColumnFlags, init_width_or_weight?: number, user_id?: ImGuiID): void;
    /**
     * \/\/ lock columns\/rows so they stay visible when scrolled.
     */
    TableSetupScrollFreeze(cols: number, rows: number): void;
    /**
     * \/\/ submit one header cell manually (rarely used)
     */
    TableHeader(label: string): void;
    /**
     * \/\/ submit a row with headers cells based on data provided to TableSetupColumn() + submit context menu
     */
    TableHeadersRow(): void;
    /**
     * \/\/ submit a row with angled headers for every column with the ImGuiTableColumnFlags_AngledHeader flag. MUST BE FIRST ROW.
     */
    TableAngledHeadersRow(): void;
    /**
     * \/\/ get latest sort specs for the table (NULL if not sorting).  Lifetime: don't hold on this pointer over multiple frames or past any subsequent call to BeginTable().
     */
    TableGetSortSpecs(): ImGuiTableSortSpecs;
    /**
     * \/\/ return number of columns (value passed to BeginTable)
     */
    TableGetColumnCount(): number;
    /**
     * \/\/ return current column index.
     */
    TableGetColumnIndex(): number;
    /**
     * \/\/ return current row index (header rows are accounted for)
     */
    TableGetRowIndex(): number;
    /**
     * \/\/ return "" if column didn't have a name declared by TableSetupColumn(). Pass -1 to use current column.
     */
    TableGetColumnName(column_n?: number): string;
    /**
     * \/\/ return column flags so you can query their Enabled\/Visible\/Sorted\/Hovered status flags. Pass -1 to use current column.
     */
    TableGetColumnFlags(column_n?: number): ImGuiTableColumnFlags;
    /**
     * \/\/ change user accessible enabled\/disabled state of a column. Set to false to hide the column. User can use the context menu to change this themselves (right-click in headers, or right-click in columns body with ImGuiTableFlags_ContextMenuInBody)
     */
    TableSetColumnEnabled(column_n: number, v: boolean): void;
    /**
     * \/\/ return hovered column. return -1 when table is not hovered. return columns_count if the unused space at the right of visible columns is hovered. Can also use (TableGetColumnFlags() & ImGuiTableColumnFlags_IsHovered) instead.
     */
    TableGetHoveredColumn(): number;
    /**
     * \/\/ change the color of a cell, row, or column. See ImGuiTableBgTarget_ flags for details.
     */
    TableSetBgColor(target: ImGuiTableBgTarget, color: ImU32, column_n?: number): void;
    /**
     * \/\/ Legacy Columns API (prefer using Tables!)
     * \/\/ - You can also use SameLine(pos_x) to mimic simplified columns.
     */
    Columns(count?: number, id?: string, borders?: boolean): void;
    /**
     * \/\/ next column, defaults to current row or next row if the current row is finished
     */
    NextColumn(): void;
    /**
     * \/\/ get current column index
     */
    GetColumnIndex(): number;
    /**
     * \/\/ get column width (in pixels). pass -1 to use current column
     */
    GetColumnWidth(column_index?: number): number;
    /**
     * \/\/ set column width (in pixels). pass -1 to use current column
     */
    SetColumnWidth(column_index: number, width: number): void;
    /**
     * \/\/ get position of column line (in pixels, from the left side of the contents region). pass -1 to use current column, otherwise 0..GetColumnsCount() inclusive. column 0 is typically 0.0f
     */
    GetColumnOffset(column_index?: number): number;
    /**
     * \/\/ set position of column line (in pixels, from the left side of the contents region). pass -1 to use current column
     */
    SetColumnOffset(column_index: number, offset_x: number): void;
    GetColumnsCount(): number;
    /**
     * \/\/ create and append into a TabBar
     */
    BeginTabBar(str_id: string, flags?: ImGuiTabBarFlags): boolean;
    /**
     * \/\/ only call EndTabBar() if BeginTabBar() returns true!
     */
    EndTabBar(): void;
    /**
     * \/\/ create a Tab. Returns true if the Tab is selected.
     */
    BeginTabItem(label: string, p_open?: [boolean] | null, flags?: ImGuiTabItemFlags): boolean;
    /**
     * \/\/ only call EndTabItem() if BeginTabItem() returns true!
     */
    EndTabItem(): void;
    /**
     * \/\/ create a Tab behaving like a button. return true when clicked. cannot be selected in the tab bar.
     */
    TabItemButton(label: string, flags?: ImGuiTabItemFlags): boolean;
    /**
     * \/\/ notify TabBar or Docking system of a closed tab\/window ahead (useful to reduce visual flicker on reorderable tab bars). For tab-bar: call after BeginTabBar() and before Tab submissions. Otherwise call with a window name.
     */
    SetTabItemClosed(tab_or_docked_window_label: string): void;
    /**
     * \/\/ Docking
     * \/\/ - Read https:\/\/github.com\/ocornut\/imgui\/wiki\/Docking for details.
     * \/\/ - Enable with io.ConfigFlags |= ImGuiConfigFlags_DockingEnable.
     * \/\/ - You can use many Docking facilities without calling any API.
     * \/\/   - Drag from window title bar or their tab to dock\/undock. Hold SHIFT to disable docking.
     * \/\/   - Drag from window menu button (upper-left button) to undock an entire node (all windows).
     * \/\/   - When io.ConfigDockingWithShift == true, you instead need to hold SHIFT to enable docking.
     * \/\/ - DockSpaceOverViewport:
     * \/\/   - This is a helper to create an invisible window covering a viewport, then submit a DockSpace() into it.
     * \/\/   - Most applications can simply call DockSpaceOverViewport() once to allow docking windows into e.g. the edge of your screen.
     * \/\/     e.g. ImGui::NewFrame(); ImGui::DockSpaceOverViewport();                                                   \/\/ Create a dockspace in main viewport.
     * \/\/      or: ImGui::NewFrame(); ImGui::DockSpaceOverViewport(0, nullptr, ImGuiDockNodeFlags_PassthruCentralNode); \/\/ Create a dockspace in main viewport, central node is transparent.
     * \/\/ - Dockspaces:
     * \/\/   - A dockspace is an explicit dock node within an existing window.
     * \/\/   - IMPORTANT: Dockspaces need to be submitted _before_ any window they can host. Submit them early in your frame!
     * \/\/   - IMPORTANT: Dockspaces need to be kept alive if hidden, otherwise windows docked into it will be undocked.
     * \/\/     If you have e.g. multiple tabs with a dockspace inside each tab: submit the non-visible dockspaces with ImGuiDockNodeFlags_KeepAliveOnly.
     * \/\/   - See 'Demo->Examples->Dockspace' or 'Demo->Examples->Documents' for more detailed demos.
     * \/\/ - Programmatic docking:
     * \/\/   - There is no public API yet other than the very limited SetNextWindowDockID() function. Sorry for that!
     * \/\/   - Read https:\/\/github.com\/ocornut\/imgui\/wiki\/Docking for examples of how to use current internal API.
     */
    DockSpace(dockspace_id: ImGuiID, size?: ImVec2, flags?: ImGuiDockNodeFlags, window_class?: ImGuiWindowClass | null): ImGuiID;
    DockSpaceOverViewport(dockspace_id?: ImGuiID, viewport?: ImGuiViewport | null, flags?: ImGuiDockNodeFlags, window_class?: ImGuiWindowClass | null): ImGuiID;
    /**
     * \/\/ set next window dock id
     */
    SetNextWindowDockID(dock_id: ImGuiID, cond?: ImGuiCond): void;
    /**
     * \/\/ set next window class (control docking compatibility + provide hints to platform backend via custom viewport flags and platform parent\/child relationship)
     */
    SetNextWindowClass(window_class: ImGuiWindowClass): void;
    /**
     * \/\/ get dock id of current window, or 0 if not associated to any docking node.
     */
    GetWindowDockID(): ImGuiID;
    /**
     * \/\/ is current window docked into another window?
     */
    IsWindowDocked(): boolean;
    /**
     * \/\/ start logging to tty (stdout)
     */
    LogToTTY(auto_open_depth?: number): void;
    /**
     * \/\/ start logging to file
     */
    LogToFile(auto_open_depth?: number, filename?: string): void;
    /**
     * \/\/ start logging to OS clipboard
     */
    LogToClipboard(auto_open_depth?: number): void;
    /**
     * \/\/ stop logging (close file, etc.)
     */
    LogFinish(): void;
    /**
     * \/\/ helper to display buttons for logging to tty\/file\/clipboard
     */
    LogButtons(): void;
    LogText(fmt: string): void;
    /**
     * \/\/ call after submitting an item which may be dragged. when this return true, you can call SetDragDropPayload() + EndDragDropSource()
     */
    BeginDragDropSource(flags?: ImGuiDragDropFlags): boolean;
    SetDragDropPayload(type: string, data: string, sz: number, cond: ImGuiCond): boolean;
    /**
     * \/\/ only call EndDragDropSource() if BeginDragDropSource() returns true!
     */
    EndDragDropSource(): void;
    /**
     * \/\/ call after submitting an item that may receive a payload. If this returns true, you can call AcceptDragDropPayload() + EndDragDropTarget()
     */
    BeginDragDropTarget(): boolean;
    /**
     * \/\/ accept contents of a given type. If ImGuiDragDropFlags_AcceptBeforeDelivery is set you can peek into the payload before the mouse button is released.
     */
    AcceptDragDropPayload(type: string, flags?: ImGuiDragDropFlags): ImGuiPayload;
    /**
     * \/\/ only call EndDragDropTarget() if BeginDragDropTarget() returns true!
     */
    EndDragDropTarget(): void;
    /**
     * \/\/ peek directly into the current payload from anywhere. returns NULL when drag and drop is finished or inactive. use ImGuiPayload::IsDataType() to test for the payload type.
     */
    GetDragDropPayload(): ImGuiPayload;
    /**
     * \/\/ Disabling [BETA API]
     * \/\/ - Disable all user interactions and dim items visuals (applying style.DisabledAlpha over current colors)
     * \/\/ - Those can be nested but it cannot be used to enable an already disabled section (a single BeginDisabled(true) in the stack is enough to keep everything disabled)
     * \/\/ - Tooltips windows are automatically opted out of disabling. Note that IsItemHovered() by default returns false on disabled items, unless using ImGuiHoveredFlags_AllowWhenDisabled.
     * \/\/ - BeginDisabled(false)\/EndDisabled() essentially does nothing but is provided to facilitate use of boolean expressions (as a micro-optimization: if you have tens of thousands of BeginDisabled(false)\/EndDisabled() pairs, you might want to reformulate your code to avoid making those calls)
     */
    BeginDisabled(disabled?: boolean): void;
    EndDisabled(): void;
    /**
     * \/\/ Clipping
     * \/\/ - Mouse hovering is affected by ImGui::PushClipRect() calls, unlike direct calls to ImDrawList::PushClipRect() which are render only.
     */
    PushClipRect(clip_rect_min: ImVec2, clip_rect_max: ImVec2, intersect_with_current_clip_rect: boolean): void;
    PopClipRect(): void;
    /**
     * \/\/ make last item the default focused item of a newly appearing window.
     */
    SetItemDefaultFocus(): void;
    /**
     * \/\/ focus keyboard on the next widget. Use positive 'offset' to access sub components of a multiple component widget. Use -1 to access previous widget.
     */
    SetKeyboardFocusHere(offset?: number): void;
    /**
     * \/\/ alter visibility of keyboard\/gamepad cursor. by default: show when using an arrow key, hide when clicking with mouse.
     */
    SetNavCursorVisible(visible: boolean): void;
    /**
     * \/\/ allow next item to be overlapped by a subsequent item. Typically useful with InvisibleButton(), Selectable(), TreeNode() covering an area where subsequent items may need to be added. Note that both Selectable() and TreeNode() have dedicated flags doing this.
     */
    SetNextItemAllowOverlap(): void;
    /**
     * \/\/ is the last item hovered? (and usable, aka not blocked by a popup, etc.). See ImGuiHoveredFlags for more options.
     */
    IsItemHovered(flags?: ImGuiHoveredFlags): boolean;
    /**
     * \/\/ is the last item active? (e.g. button being held, text field being edited. This will continuously return true while holding mouse button on an item. Items that don't interact will always return false)
     */
    IsItemActive(): boolean;
    /**
     * \/\/ is the last item focused for keyboard\/gamepad navigation?
     */
    IsItemFocused(): boolean;
    /**
     * \/\/ is the last item hovered and mouse clicked on? (**)  == IsMouseClicked(mouse_button) && IsItemHovered()Important. (**) this is NOT equivalent to the behavior of e.g. Button(). Read comments in function definition.
     */
    IsItemClicked(mouse_button?: ImGuiMouseButton): boolean;
    /**
     * \/\/ is the last item visible? (items may be out of sight because of clipping\/scrolling)
     */
    IsItemVisible(): boolean;
    /**
     * \/\/ did the last item modify its underlying value this frame? or was pressed? This is generally the same as the "bool" return value of many widgets.
     */
    IsItemEdited(): boolean;
    /**
     * \/\/ was the last item just made active (item was previously inactive).
     */
    IsItemActivated(): boolean;
    /**
     * \/\/ was the last item just made inactive (item was previously active). Useful for Undo\/Redo patterns with widgets that require continuous editing.
     */
    IsItemDeactivated(): boolean;
    /**
     * \/\/ was the last item just made inactive and made a value change when it was active? (e.g. Slider\/Drag moved). Useful for Undo\/Redo patterns with widgets that require continuous editing. Note that you may get false positives (some widgets such as Combo()\/ListBox()\/Selectable() will return true even when clicking an already selected item).
     */
    IsItemDeactivatedAfterEdit(): boolean;
    /**
     * \/\/ was the last item open state toggled? set by TreeNode().
     */
    IsItemToggledOpen(): boolean;
    /**
     * \/\/ is any item hovered?
     */
    IsAnyItemHovered(): boolean;
    /**
     * \/\/ is any item active?
     */
    IsAnyItemActive(): boolean;
    /**
     * \/\/ is any item focused?
     */
    IsAnyItemFocused(): boolean;
    /**
     * \/\/ get ID of last item (~~ often same ImGui::GetID(label) beforehand)
     */
    GetItemID(): ImGuiID;
    /**
     * \/\/ get upper-left bounding rectangle of the last item (screen space)
     */
    GetItemRectMin(): ImVec2;
    /**
     * \/\/ get lower-right bounding rectangle of the last item (screen space)
     */
    GetItemRectMax(): ImVec2;
    /**
     * \/\/ get size of last item
     */
    GetItemRectSize(): ImVec2;
    /**
     * \/\/ get generic flags of last item
     */
    GetItemFlags(): ImGuiItemFlags;
    /**
     * \/\/ return primary\/default viewport. This can never be NULL.
     */
    GetMainViewport(): ImGuiViewport;
    /**
     * \/\/ get background draw list for the given viewport or viewport associated to the current window. this draw list will be the first rendering one. Useful to quickly draw shapes\/text behind dear imgui contents.
     */
    GetBackgroundDrawList(viewport?: ImGuiViewport | null): ImDrawList;
    /**
     * \/\/ get foreground draw list for the given viewport or viewport associated to the current window. this draw list will be the top-most rendered one. Useful to quickly draw shapes\/text over dear imgui contents.
     */
    GetForegroundDrawList(viewport?: ImGuiViewport | null): ImDrawList;
    /**
     * \/\/ test if rectangle (of given size, starting from cursor position) is visible \/ not clipped.
     */
    IsRectVisibleBySize(size: ImVec2): boolean;
    /**
     * \/\/ test if rectangle (in screen space) is visible \/ not clipped. to perform coarse clipping on user's side.
     */
    IsRectVisible(rect_min: ImVec2, rect_max: ImVec2): boolean;
    /**
     * \/\/ get global imgui time. incremented by io.DeltaTime every frame.
     */
    GetTime(): number;
    /**
     * \/\/ get global imgui frame count. incremented by 1 every frame.
     */
    GetFrameCount(): number;
    /**
     * \/\/ you may use this when creating your own ImDrawList instances.
     */
    GetDrawListSharedData(): ImDrawListSharedData;
    /**
     * \/\/ get a string corresponding to the enum value (for display, saving, etc.).
     */
    GetStyleColorName(idx: ImGuiCol): string;
    /**
     * \/\/ Text Utilities
     */
    CalcTextSize(text: string, text_end?: string, hide_text_after_double_hash?: boolean, wrap_width?: number): ImVec2;
    /**
     * \/\/ Color Utilities
     */
    ColorConvertU32ToFloat4(in_: ImU32): ImVec4;
    ColorConvertFloat4ToU32(in_: ImVec4): ImU32;
    ColorConvertRGBtoHSV(r: number, g: number, b: number, out_h: [number], out_s: [number], out_v: [number]): void;
    ColorConvertHSVtoRGB(h: number, s: number, v: number, out_r: [number], out_g: [number], out_b: [number]): void;
    /**
     * \/\/ is key being held.
     */
    IsKeyDown(key: ImGuiKey): boolean;
    /**
     * \/\/ was key pressed (went from !Down to Down)? Repeat rate uses io.KeyRepeatDelay \/ KeyRepeatRate.
     */
    IsKeyPressed(key: ImGuiKey, repeat?: boolean): boolean;
    /**
     * \/\/ was key released (went from Down to !Down)?
     */
    IsKeyReleased(key: ImGuiKey): boolean;
    /**
     * \/\/ was key chord (mods + key) pressed, e.g. you can pass 'ImGuiMod_Ctrl | ImGuiKey_S' as a key-chord. This doesn't do any routing or focus check, please consider using Shortcut() function instead.
     */
    IsKeyChordPressed(key_chord: ImGuiKeyChord): boolean;
    /**
     * \/\/ uses provided repeat rate\/delay. return a count, most often 0 or 1 but might be >1 if RepeatRate is small enough that DeltaTime > RepeatRate
     */
    GetKeyPressedAmount(key: ImGuiKey, repeat_delay: number, rate: number): number;
    /**
     * \/\/ [DEBUG] returns English name of the key. Those names are provided for debugging purpose and are not meant to be saved persistently nor compared.
     */
    GetKeyName(key: ImGuiKey): string;
    /**
     * \/\/ Override io.WantCaptureKeyboard flag next frame (said flag is left for your application to handle, typically when true it instructs your app to ignore inputs). e.g. force capture keyboard when your widget is being hovered. This is equivalent to setting "io.WantCaptureKeyboard = want_capture_keyboard"; after the next NewFrame() call.
     */
    SetNextFrameWantCaptureKeyboard(want_capture_keyboard: boolean): void;
    /**
     * \/\/ Inputs Utilities: Shortcut Testing & Routing
     * \/\/ - Typical use is e.g.: 'if (ImGui::Shortcut(ImGuiMod_Ctrl | ImGuiKey_S)) { ... }'.
     * \/\/ - Flags: Default route use ImGuiInputFlags_RouteFocused, but see ImGuiInputFlags_RouteGlobal and other options in ImGuiInputFlags_!
     * \/\/ - Flags: Use ImGuiInputFlags_Repeat to support repeat.
     * \/\/ - ImGuiKeyChord = a ImGuiKey + optional ImGuiMod_Alt\/ImGuiMod_Ctrl\/ImGuiMod_Shift\/ImGuiMod_Super.
     * \/\/       ImGuiKey_C                          \/\/ Accepted by functions taking ImGuiKey or ImGuiKeyChord arguments
     * \/\/       ImGuiMod_Ctrl | ImGuiKey_C          \/\/ Accepted by functions taking ImGuiKeyChord arguments
     * \/\/   only ImGuiMod_XXX values are legal to combine with an ImGuiKey. You CANNOT combine two ImGuiKey values.
     * \/\/ - The general idea is that several callers may register interest in a shortcut, and only one owner gets it.
     * \/\/      Parent   -> call Shortcut(Ctrl+S)    \/\/ When Parent is focused, Parent gets the shortcut.
     * \/\/        Child1 -> call Shortcut(Ctrl+S)    \/\/ When Child1 is focused, Child1 gets the shortcut (Child1 overrides Parent shortcuts)
     * \/\/        Child2 -> no call                  \/\/ When Child2 is focused, Parent gets the shortcut.
     * \/\/   The whole system is order independent, so if Child1 makes its calls before Parent, results will be identical.
     * \/\/   This is an important property as it facilitate working with foreign code or larger codebase.
     * \/\/ - To understand the difference:
     * \/\/   - IsKeyChordPressed() compares mods and call IsKeyPressed()
     * \/\/     -> the function has no side-effect.
     * \/\/   - Shortcut() submits a route, routes are resolved, if it currently can be routed it calls IsKeyChordPressed()
     * \/\/     -> the function has (desirable) side-effects as it can prevents another call from getting the route.
     * \/\/ - Visualize registered routes in 'Metrics\/Debugger->Inputs'.
     */
    Shortcut(key_chord: ImGuiKeyChord, flags?: ImGuiInputFlags): boolean;
    SetNextItemShortcut(key_chord: ImGuiKeyChord, flags?: ImGuiInputFlags): void;
    /**
     * \/\/ Set key owner to last item ID if it is hovered or active. Equivalent to 'if (IsItemHovered() || IsItemActive()) { SetKeyOwner(key, GetItemID());'.
     */
    SetItemKeyOwner(key: ImGuiKey): void;
    /**
     * \/\/ is mouse button held?
     */
    IsMouseDown(button: ImGuiMouseButton): boolean;
    /**
     * \/\/ did mouse button clicked? (went from !Down to Down). Same as GetMouseClickedCount() == 1.
     */
    IsMouseClicked(button: ImGuiMouseButton, repeat?: boolean): boolean;
    /**
     * \/\/ did mouse button released? (went from Down to !Down)
     */
    IsMouseReleased(button: ImGuiMouseButton): boolean;
    /**
     * \/\/ did mouse button double-clicked? Same as GetMouseClickedCount() == 2. (note that a double-click will also report IsMouseClicked() == true)
     */
    IsMouseDoubleClicked(button: ImGuiMouseButton): boolean;
    /**
     * \/\/ delayed mouse release (use very sparingly!). Generally used with 'delay >= io.MouseDoubleClickTime' + combined with a 'io.MouseClickedLastCount==1' test. This is a very rarely used UI idiom, but some apps use this: e.g. MS Explorer single click on an icon to rename.
     */
    IsMouseReleasedWithDelay(button: ImGuiMouseButton, delay: number): boolean;
    /**
     * \/\/ return the number of successive mouse-clicks at the time where a click happen (otherwise 0).
     */
    GetMouseClickedCount(button: ImGuiMouseButton): number;
    /**
     * \/\/ is mouse hovering given bounding rect (in screen space). clipped by current clipping settings, but disregarding of other consideration of focus\/window ordering\/popup-block.
     */
    IsMouseHoveringRect(r_min: ImVec2, r_max: ImVec2, clip?: boolean): boolean;
    /**
     * \/\/ by convention we use (-FLT_MAX,-FLT_MAX) to denote that there is no mouse available
     */
    IsMousePosValid(mouse_pos?: ImVec2 | null): boolean;
    /**
     * \/\/ [WILL OBSOLETE] is any mouse button held? This was designed for backends, but prefer having backend maintain a mask of held mouse buttons, because upcoming input queue system will make this invalid.
     */
    IsAnyMouseDown(): boolean;
    /**
     * \/\/ shortcut to ImGui::GetIO().MousePos provided by user, to be consistent with other calls
     */
    GetMousePos(): ImVec2;
    /**
     * \/\/ retrieve mouse position at the time of opening popup we have BeginPopup() into (helper to avoid user backing that value themselves)
     */
    GetMousePosOnOpeningCurrentPopup(): ImVec2;
    /**
     * \/\/ is mouse dragging? (uses io.MouseDraggingThreshold if lock_threshold < 0.0f)
     */
    IsMouseDragging(button: ImGuiMouseButton, lock_threshold?: number): boolean;
    /**
     * \/\/ return the delta from the initial clicking position while the mouse button is pressed or was just released. This is locked and return 0.0f until the mouse moves past a distance threshold at least once (uses io.MouseDraggingThreshold if lock_threshold < 0.0f)
     */
    GetMouseDragDelta(button?: ImGuiMouseButton, lock_threshold?: number): ImVec2;
    /**
     * \/\/
     */
    ResetMouseDragDelta(button?: ImGuiMouseButton): void;
    /**
     * \/\/ get desired mouse cursor shape. Important: reset in ImGui::NewFrame(), this is updated during the frame. valid before Render(). If you use software rendering by setting io.MouseDrawCursor ImGui will render those for you
     */
    GetMouseCursor(): ImGuiMouseCursor;
    /**
     * \/\/ set desired mouse cursor shape
     */
    SetMouseCursor(cursor_type: ImGuiMouseCursor): void;
    /**
     * \/\/ Override io.WantCaptureMouse flag next frame (said flag is left for your application to handle, typical when true it instructs your app to ignore inputs). This is equivalent to setting "io.WantCaptureMouse = want_capture_mouse;" after the next NewFrame() call.
     */
    SetNextFrameWantCaptureMouse(want_capture_mouse: boolean): void;
    /**
     * \/\/ Clipboard Utilities
     * \/\/ - Also see the LogToClipboard() function to capture GUI into clipboard, or easily output text data to the clipboard.
     */
    GetClipboardText(): string;
    SetClipboardText(text: string): void;
    /**
     * \/\/ call after CreateContext() and before the first call to NewFrame() to provide .ini data from your own data source.
     */
    LoadIniSettingsFromMemory(ini_data: string, ini_size?: number): void;
    /**
     * \/\/ return a zero-terminated string with the .ini data which you can save by your own mean. call when io.WantSaveIniSettings is set, then save data by your own mean and clear io.WantSaveIniSettings.
     */
    SaveIniSettingsToMemory(out_ini_size?: [number] | null): string;
    /**
     * \/\/ Debug Utilities
     * \/\/ - Your main debugging friend is the ShowMetricsWindow() function.
     * \/\/ - Interactive tools are all accessible from the 'Dear ImGui Demo->Tools' menu.
     * \/\/ - Read https:\/\/github.com\/ocornut\/imgui\/wiki\/Debug-Tools for a description of all available debug tools.
     */
    DebugTextEncoding(text: string): void;
    DebugFlashStyleColor(idx: ImGuiCol): void;
    DebugStartItemPicker(): void;
    /**
     * \/\/ This is called by IMGUI_CHECKVERSION() macro.
     */
    DebugCheckVersionAndDataLayout(version_str: string, sz_io: number, sz_style: number, sz_vec2: number, sz_vec4: number, sz_drawvert: number, sz_drawidx: number): boolean;
    DebugLog(fmt: string): void;
    /**
     * \/\/ call in main loop. will call CreateWindow\/ResizeWindow\/etc. platform functions for each secondary viewport, and DestroyWindow for each inactive viewport.
     */
    UpdatePlatformWindows(): void;
    /**
     * \/\/ call in main loop. will call RenderWindow\/SwapBuffers platform functions for each secondary viewport which doesn't have the ImGuiViewportFlags_Minimized flag set. May be reimplemented by user for custom rendering needs.
     */
    RenderPlatformWindowsDefault(platform_render_arg?: any | null, renderer_render_arg?: any | null): void;
    /**
     * \/\/ call DestroyWindow platform functions for all viewports. call from backend Shutdown() if you need to close platform windows before imgui shutdown. otherwise will be called by DestroyContext().
     */
    DestroyPlatformWindows(): void;
    /**
     * \/\/ this is a helper for backends.
     */
    FindViewportByID(viewport_id: ImGuiID): ImGuiViewport;
    /**
     * \/\/ this is a helper for backends. the type platform_handle is decided by the backend (e.g. HWND, MyWindow*, GLFWwindow* etc.)
     */
    FindViewportByPlatformHandle(platform_handle: any): ImGuiViewport;
};
