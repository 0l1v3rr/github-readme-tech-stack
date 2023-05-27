import { formatHexColor } from "@/lib/utils/format";
import { Badge } from "@/types";

/**
 * Parses the width into a valid number.
 */
export const parseWidth = (width: string | undefined = "495"): number => {
  if (width === "495") return 495;

  const num = Number(width);
  if (isNaN(num)) return 495;

  return num;
};

/**
 * Converts the line into a Badge array.
 * If there's any error in the line, it returns an empty array.
 */
export const validateLine = (line: string): Badge[] => {
  // replace the comma and the semicolon if the line contains "base64"
  line = line.replace(";base64,", "-base64-");

  // split the line by semicolon
  // each item in this array is one single badge
  const splitBySemi = line.split(";");

  // there are no badges
  if (splitBySemi.length < 1) {
    return [];
  }

  const badges: Badge[] = [];

  // example badgeLine: react,react,ffffff
  // {logoName},{label (badge text)},{logoColor}
  for (const badgeLine of splitBySemi) {
    // this should have 3 items
    const splitByComma = badgeLine.split(",");

    if (splitByComma.length !== 3) {
      continue;
    }

    // add the comma and the semicolon back
    const logoName = splitByComma[0].replace("-base64-", ";base64,");

    const logoColor =
      splitByComma[2] === "auto" ? "" : formatHexColor(splitByComma[2]);

    badges.push({
      position: 0, // the position doesn't matter here
      icon: logoName,
      label: splitByComma[1],
      color: logoColor,
    });
  }

  return badges;
};

/**
 * Function to determine if a string is a valid hexadecimal color.
 */
export const isHexColor = (color: string): boolean => {
  const hexColorRegex = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/;
  return hexColorRegex.test(color);
};
