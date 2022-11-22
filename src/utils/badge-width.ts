/**
 * Calculates the width of the SVG badge based on the text,
 * the logo width, and the paddings.
 *
 * @param {string} badgeText The text of the badge.
 * @returns {number} The calculated width.
 */
export const badgeWidth = (badgeText: string): number => {
  // the 8.4 is the width of a letter
  // the 30 and 16 are just paddings
  return 8.4 * badgeText.length + 30 + 16;
};
