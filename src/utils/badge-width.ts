/* eslint-disable quotes */

/**
 * Calculates the width of the SVG badge based on the passed SVG string.
 *
 * @param {string} badgeText The text of the badge.
 * @returns {number} The calculated width.
 */
export const badgeWidth = (badgeText: string): number => {
  // find the index of the 'width="' string
  const widthIndex = badgeText.indexOf('width="') + 'width="'.length;

  let result = "";
  for (let i = widthIndex; i < badgeText.length; i++) {
    // closing quote, we break
    if (badgeText[i] === '"') {
      break;
    }

    result += badgeText[i];
  }

  return Number(result);
};
