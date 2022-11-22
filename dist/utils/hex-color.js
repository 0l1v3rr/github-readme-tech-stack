"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatHexColor = void 0;
/**
 * Formats a hexadecimal color code into a URL friendly-one.
 *
 * Example: #ffffff => %23ffffff
 *
 * @param {string} color The hexadecimal color code.
 * @returns {string} The formatted color.
 */
const formatHexColor = (color) => {
    if (!color.startsWith("#")) {
        color = `#${color}`;
    }
    return color.replace("#", "%23");
};
exports.formatHexColor = formatHexColor;
