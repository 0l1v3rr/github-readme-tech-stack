import { Theme } from "./types";

/**
 * This `Map` stores all the themes that are currently available.
 * In order to add a new theme, use the `set` method.
 */
export const themes: Map<string, Theme> = new Map<string, Theme>();

themes.set("github", {
  backgroundColor: "#FFFFFF",
  borderColor: "#D8DEE4",
  titleColor: "#0969DA",
  badgeColor: "#F3F3F3",
});
themes.set("github_dark", {
  backgroundColor: "#0D1117",
  borderColor: "#21262D",
  titleColor: "#58A6FF",
  badgeColor: "#161B22",
});
themes.set("react", {
  backgroundColor: "#222222",
  borderColor: "#3B3B3B",
  titleColor: "#61DAFB",
  badgeColor: "#2B2B2B",
});
themes.set("vue", {
  backgroundColor: "#35495E",
  borderColor: "#3E556E",
  titleColor: "#41B883",
  badgeColor: "#3E556E",
});
themes.set("angular", {
  backgroundColor: "#1A1A1A",
  borderColor: "#292929",
  titleColor: "#E51B25",
  badgeColor: "#292929",
});
themes.set("node", {
  backgroundColor: "#333333",
  borderColor: "#474747",
  titleColor: "#84CE24",
  badgeColor: "#474747",
});
themes.set("one_dark", {
  backgroundColor: "#282C34",
  borderColor: "#21252B",
  titleColor: "#43A3EF",
  badgeColor: "#21252B",
});
themes.set("dracula", {
  backgroundColor: "#282A36",
  borderColor: "#343746",
  titleColor: "#BD93F9",
  badgeColor: "#343746",
});
themes.set("material", {
  backgroundColor: "#263238",
  borderColor: "#2F3D45",
  titleColor: "#82AADF",
  badgeColor: "#2F3D45",
});
themes.set("monokai", {
  backgroundColor: "#272822",
  borderColor: "#1D1E19",
  titleColor: "#79D62E",
  badgeColor: "#1D1E19",
});
themes.set("night_owl", {
  backgroundColor: "#011627",
  borderColor: "#011E36",
  titleColor: "#71AAF1",
  badgeColor: "#011E36",
});
themes.set("ayu", {
  backgroundColor: "#0B0E14",
  borderColor: "#151B26",
  titleColor: "#FFA42F",
  badgeColor: "#151B26",
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
