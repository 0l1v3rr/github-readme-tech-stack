/**
 * Formats a hexadecimal color code into a URL friendly-one.
 *
 * Example: #ffffff => %23ffffff
 *
 * @param {string} color The hexadecimal color code.
 * @returns {string} The formatted color.
 */
export const formatHexColor = (color: string): string => {
  if (color.startsWith("%23")) {
    return color;
  }

  if (!color.startsWith("#")) {
    color = `#${color}`;
  }

  return color.replace("#", "%23");
};
