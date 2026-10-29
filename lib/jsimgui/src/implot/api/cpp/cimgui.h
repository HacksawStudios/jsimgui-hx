#pragma once

#include <imgui.h>
#include <imgui_internal.h>

#ifndef CIMGUI_API
#define CIMGUI_API extern "C"
#endif

#ifndef CONST
#define CONST const
#endif

typedef struct ImVec2_c {
    float x;
    float y;
} ImVec2_c;

typedef struct ImVec4_c {
    float x;
    float y;
    float z;
    float w;
} ImVec4_c;

typedef struct ImRect_c {
    ImVec2_c Min;
    ImVec2_c Max;
} ImRect_c;

typedef struct ImTextureRef_c {
    ImTextureData* _TexData;
    ImTextureID _TexID;
} ImTextureRef_c;
