import { atom } from "recoil";

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
