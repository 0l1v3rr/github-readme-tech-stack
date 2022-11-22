import { Theme } from "./types";

/**
 * This `Map` stores all the themes that are currently available.
 * In order to add a new theme, use the `set` method.
 */
export const themes: Map<string, Theme> = new Map<string, Theme>();

themes.set("github", {
  backgroundColor: "#FFFFFF",
  borderColor: "#D8DEE4",
  textColor: "#24292F",
  titleColor: "#0969DA",
  badgeColor: "#F3F3F3",
});
themes.set("github_dark", {
  backgroundColor: "#0D1117",
  borderColor: "#21262D",
  textColor: "#C9D1D9",
  titleColor: "#58A6FF",
  badgeColor: "#161B22",
});

/**
 * Searches for the specified theme in the themes map.
 * If the theme is not present in the map, then the default
 * github theme gets returned.
 *
 * @param {string} name The name of the theme.
 * @returns {Theme} The found theme.
 */
export const getThemeByName = (name: string): Theme => {
  return themes.get(name.toLowerCase()) || [...themes][0][1];
};
