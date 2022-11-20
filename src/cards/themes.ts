import { Theme } from "./types";

type ThemeMapper = Record<themeNames, Theme>;
type themeNames = "github" | "github_dark";

export const themes: ThemeMapper = {
  github: {
    backgroundColor: "#FFFFFF",
    borderColor: "#D8DEE4",
    textColor: "#24292F",
    titleColor: "#0969DA",
    badgeColor: "#FAFAFA",
  },
  github_dark: {
    backgroundColor: "#0D1117",
    borderColor: "#21262D",
    textColor: "#C9D1D9",
    titleColor: "#58A6FF",
    badgeColor: "#161B22",
  },
};
