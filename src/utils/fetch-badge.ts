import fetch from "cross-fetch";

/**
 * Fetches the badge from shields.io and returns the svg text.
 *
 * @param {string} url The shields.io URL
 * @returns {Promise<string>} The response SVG
 */
export const fetchBadge = async (url: string): Promise<string> => {
  const res = await fetch(url);
  return await res.text();
};
