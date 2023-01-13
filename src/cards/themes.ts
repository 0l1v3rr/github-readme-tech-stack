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
  badgeColor: "#EAEFFC",
});
themes.set("github_dark", {
  backgroundColor: "#0D1117",
  borderColor: "#21262D",
  titleColor: "#58A6FF",
  badgeColor: "#161B22",
});
themes.set("github_dark_green", {
  backgroundColor: "#0D1117",
  borderColor: "#21262D",
  titleColor: "#43ec63",
  badgeColor: "#161B22",
});
themes.set("github_dark_red", {
  backgroundColor: "#0D1117",
  borderColor: "#21262D",
  titleColor: "#ff8f69",
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
themes.set("radical", {
  backgroundColor: "#0C0B1B",
  borderColor: "#14132E",
  titleColor: "#FE408F",
  badgeColor: "#14132E",
});
themes.set("merko", {
  backgroundColor: "#030603",
  borderColor: "#0B170B",
  titleColor: "#ACD300",
  badgeColor: "#0B170B",
});
themes.set("tokyonight", {
  backgroundColor: "#131422",
  borderColor: "#1D1E33",
  titleColor: "#70A6FD",
  badgeColor: "#1D1E33",
});
themes.set("darcula", {
  backgroundColor: "#1F1F1F",
  borderColor: "#303030",
  titleColor: "#BB5F10",
  badgeColor: "#303030",
});
themes.set("gotham", {
  backgroundColor: "#04070C",
  borderColor: "#0B1321",
  titleColor: "#25A98A",
  badgeColor: "#0B1321",
});
themes.set("chess.com", {
  backgroundColor: "#2C2B29",
  borderColor: "#403E3B",
  titleColor: "#69923E",
  badgeColor: "#403E3B",
});
themes.set("blood", {
  backgroundColor: "#FFFFFF",
  borderColor: "#EBEBEB",
  titleColor: "#FF5F5F",
  badgeColor: "#EBEBEB",
});
themes.set("blood_dark", {
  backgroundColor: "#0C2734",
  borderColor: "#0F3242",
  titleColor: "#FF5F5F",
  badgeColor: "#0F3242",
});
themes.set("hacker", {
  backgroundColor: "#101010",
  borderColor: "#222",
  titleColor: "#1DDB07",
  badgeColor: "#222",
});
themes.set("android", {
  backgroundColor: "#101010",
  borderColor: "#222",
  titleColor: "#3ADD85",
  badgeColor: "#222",
});
themes.set("windows", {
  backgroundColor: "#101010",
  borderColor: "#222",
  titleColor: "#00A3EE",
  badgeColor: "#222",
});
themes.set("halloween", {
  backgroundColor: "#1C1A2B",
  borderColor: "#FFC400",
  titleColor: "#FCEE48",
  badgeColor: "#28253D",
});
themes.set("christmas", {
  backgroundColor: "#01241F",
  borderColor: "#ED0101",
  titleColor: "#ED0101",
  badgeColor: "#02362F",
});
themes.set("levike", {
  backgroundColor: "#222831",
  borderColor: "#eeeeee",
  titleColor: "#fd7014",
  badgeColor: "393E46",
});
themes.set("cyberpunk", {
  backgroundColor: "#0a0b0e",
  borderColor: "#ff0055",
  titleColor: "#ff0055",
  badgeColor: "#330716",
});
themes.set("catppuccin_latte", {
  backgroundColor: "#eff1f5",
  borderColor: "#9ca0b0",
  badgeColor: "#e6e9ef",
  titleColor: "#179299",
});
themes.set("catppuccin_frappe", {
  backgroundColor: "#303446",
  borderColor: "#737994",
  badgeColor: "#292c3c",
  titleColor: "#81c8be",
});
themes.set("catppuccin_macchiato", {
  backgroundColor: "#24273a",
  borderColor: "#6e738d",
  badgeColor: "#1e2030",
  titleColor: "#8bd5ca",
});
themes.set("catppuccin_mocha", {
  backgroundColor: "#1e1e2e",
  borderColor: "#6c7086",
  badgeColor: "#181825",
  titleColor: "#94e2d5",
});
themes.set("vs", {
  backgroundColor: "#1e1e1e",
  borderColor: "#252526",
  badgeColor: "#252526",
  titleColor: "#56b9f0",
});
themes.set("bearded", {
  backgroundColor: "#161d29",
  borderColor: "#1c2433",
  badgeColor: "#1c2433",
  titleColor: "#22e6c5",
});
themes.set("rainglow", {
  backgroundColor: "#0e1114",
  borderColor: "#12161a",
  badgeColor: "#12161a",
  titleColor: "#228a96",
});
themes.set("0l1v3rr", {
  backgroundColor: "#0B0E14",
  borderColor: "#151B26",
  titleColor: "#FF4747",
  badgeColor: "#10151F",
});
themes.set("discord", {
  backgroundColor: "#202226",
  borderColor: "#2f3137",
  titleColor: "#5865f2",
  badgeColor: "#2f3137",
});
themes.set("facebook", {
  backgroundColor: "#1a191e",
  borderColor: "#2a292e",
  titleColor: "#1771e6",
  badgeColor: "#2a292e",
});
themes.set("gruvbox", {
  backgroundColor: "#232323",
  borderColor: "#303030",
  titleColor: "#fabe2b",
  badgeColor: "#303030",
});
themes.set("nord", {
  backgroundColor: "#2a313e",
  borderColor: "#343C4D",
  titleColor: "#82a2c2",
  badgeColor: "#343C4D",
});
themes.set("2077", {
  backgroundColor: "#141321",
  borderColor: "#201F36",
  titleColor: "#FF0055",
  badgeColor: "#201F36",
});
themes.set("solarized", {
  backgroundColor: "#FDF6E3",
  borderColor: "#F0E9D7",
  titleColor: "#268BD2",
  badgeColor: "#FFFAF2",
});
themes.set("solarized_dark", {
  backgroundColor: "#073642",
  borderColor: "#062C36",
  titleColor: "#268BD2",
  badgeColor: "#062C36",
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
