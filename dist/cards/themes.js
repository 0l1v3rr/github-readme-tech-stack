"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getThemeByName = exports.themes = void 0;
/**
 * This `Map` stores all the themes that are currently available.
 * In order to add a new theme, use the `set` method.
 */
exports.themes = new Map();
exports.themes.set("github", {
    backgroundColor: "#FFFFFF",
    borderColor: "#D8DEE4",
    textColor: "#24292F",
    titleColor: "#0969DA",
    badgeColor: "#F3F3F3",
});
exports.themes.set("github_dark", {
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
const getThemeByName = (name) => {
    return exports.themes.get(name.toLowerCase()) || [...exports.themes][0][1];
};
exports.getThemeByName = getThemeByName;
