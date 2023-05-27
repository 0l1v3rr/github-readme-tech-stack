/**
 * Appends the appropriate suffix after the given number.
 */
export const formatNumberSuffix = (num: number) => {
  const suffixes = ["th", "st", "nd", "rd"];
  const remainder = num % 100;
  const suffix =
    suffixes[(remainder - 20) % 10] || suffixes[remainder] || suffixes[0];
  return `${num}${suffix}`;
};

/**
 * Formats a number to a human-readable format.
 * It the number is not between 1 or 10, the results of `formatNumberSuffix` will be returned.
 */
export const formatNumberWord = (num: number) => {
  const words = [
    "",
    "First",
    "Second",
    "Third",
    "Fourth",
    "Fifth",
    "Sixth",
    "Seventh",
    "Eighth",
    "Ninth",
    "Tenth",
  ];
  return words[num] || formatNumberSuffix(num);
};

/**
 * Formats a hexadecimal color code into a URL friendly-one.
 *
 * Example: #ffffff => %23ffffff
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
