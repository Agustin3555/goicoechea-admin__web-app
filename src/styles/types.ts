import { COLOR, FONT, FONT_SIZE, TIME, NOT_FONT_SIZE } from "./palette";

export type Font = FONT | string;

export type FontSize = 0 | FONT_SIZE | string;

export type NotFontSize = 0 | NOT_FONT_SIZE | string;

export type Size = FontSize | NotFontSize | string;

export type Color = COLOR | string;

export type Time = TIME | string;

export type Knob = 0 | 0.125 | 0.25 | 0.375 | 0.5 | 0.625 | 0.75 | 0.875 | 1;

export type Value = number | string;
