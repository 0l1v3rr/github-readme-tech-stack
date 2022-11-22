"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateLine = exports.validateLineCount = void 0;
const hex_color_1 = require("./hex-color");
/**
 * Validates the line.
 * If the line is not valid, it returns 1.
 * The line is invalid when it's not a number or less than one.
 *
 * @param {number} lineCount The number of lines.
 * @returns {number} A valid lineCount.
 */
const validateLineCount = (lineCount) => {
    const lineNum = parseInt(lineCount);
    // it's not a number
    if (isNaN(lineNum)) {
        return 1;
    }
    // it's less than one
    return lineNum < 1 ? 1 : lineNum;
};
exports.validateLineCount = validateLineCount;
/**
 * Converts the line into a Badge array.
 * If there's any error in the line,
 * it returns an empty array.
 *
 * @param {string} line The line.
 * @returns {Badge[]} The converted badges
 */
const validateLine = (line) => {
    // split the line by semicolon
    // each item in this array is one single badge
    const splitBySemi = line.split(";");
    // there are no badges
    if (splitBySemi.length < 1) {
        return [];
    }
    const badges = [];
    // example badgeLine: react,react,ffffff
    // {logoName},{label (badge text)},{logoColor}
    for (const badgeLine of splitBySemi) {
        // this should have 3 items
        const splitByComma = badgeLine.split(",");
        if (splitByComma.length !== 3) {
            continue;
        }
        badges.push({
            logoName: splitByComma[0],
            label: splitByComma[1],
            logoColor: (0, hex_color_1.formatHexColor)(splitByComma[2]),
        });
    }
    return badges;
};
exports.validateLine = validateLine;
