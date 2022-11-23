/**
 * Calculates the width of the SVG badge based on the text,
 * the logo width, and the paddings.
 *
 * @param {string} badgeText The text of the badge.
 * @returns {number} The calculated width.
 */
export const badgeWidth = (badgeText: string): number => {
  // the 8.4 is the width of a letter
  // the 30 is just the padding
  // the 16 is the icon width
  return 8.4 * badgeText.length + 30 + 16;
};
