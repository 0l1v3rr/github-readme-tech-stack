import { Theme } from "./types";

/**
 * All the themes are listed here.
 */
type themeNames = "github" | "github_dark";

/**
 * This `Map` stores all the themes that are currently available.
 * Before adding a new theme here, we should specify its name in
 * the `themeNames` enum above.
 */
export const themes: Record<themeNames, Theme> = {
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

/**
 * Searches for the specified theme in the themes map.
 * If the theme is not present in the map, then the default
 * github theme gets returned.
 *
 * @param {string} name The name of the theme.
 * @returns {Theme} The found theme.
 */
export const getThemeByName = (name: string): Theme => {
  switch (name.toLowerCase()) {
    case "github":
      return themes.github;
    case "github_dark":
      return themes.github_dark;
  }

  return themes.github;
};
