import fetch from "cross-fetch";

export const fetchBadge = async (url: string): Promise<string> => {
  const res = await fetch(url);
  return await res.text();
};
