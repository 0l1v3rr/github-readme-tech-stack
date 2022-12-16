import { atom } from "recoil";
import { Line } from "./types/line";

export const titleState = atom({
  key: "title",
  default: "My Tech Stack",
});

export const lineCountState = atom({
  key: "lineCount",
  default: "1",
});

export const themeState = atom({
  key: "theme",
  default: "github",
});

export const alignState = atom({
  key: "align",
  default: "left",
});

export const borderState = atom({
  key: "border",
  default: true,
});

export const linesState = atom({
  key: "lines",
  default: [] as Line[],
});

export const borderRadiusState = atom({
  key: "borderRadius",
  default: "4.5",
});
