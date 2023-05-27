/**
 * Fetches the badge from shields.io and returns the svg text.
 */
export const fetchBadge = async (url: string): Promise<string> => {
  const res = await fetch(url);
  return await res.text();
};

/**
 * Calculates the width of the SVG badge based on the passed SVG string.
 */
export const badgeWidth = (badgeText: string): number => {
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
