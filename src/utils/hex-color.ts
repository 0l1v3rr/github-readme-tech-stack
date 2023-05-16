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
    return `%23${color}`;
  }

  return color.replace("#", "%23");
};

/**
 * Function to determine if a string is a valid hexadecimal color.
 * Starts with #, 3 or 6 characters long, contains only hexadecimal values
 *
 * @param {string} color The color string.
 * @returns {boolean} True if the color is valid.
 */
export const isHexColor = (color: string): boolean => {
  const hexColorRegex = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/;
  return hexColorRegex.test(color);
};
