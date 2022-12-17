import { Line } from "../types/line";

export const generateLink = (
  title: string,
  lineCount: string,
  theme: string,
  align: string,
  lines: Line[],
  showBorder: boolean,
  borderRadius: string,
  fontWeight: string,
  fontSize: string
): string => {
  // replace every space with %20
  title = title.replace(/[ ]/g, "%20");

  let res = `https://github-readme-tech-stack.vercel.app/api/cards?title=${title}&lineCount=${lineCount}&theme=${theme}&align=${align}&showBorder=${showBorder}&borderRadius=${borderRadius}&fontSize=${fontSize}&fontWeight=${fontWeight}`;

  for (const l of lines) {
    // if the line doesn't contain badges
    if (l.badges.length < 1) {
      continue;
    }

    let line = `&line${l.lineNumber}=`;
    for (const b of l.badges) {
      const color = b.color.replace("#", "");
      line += `${b.iconName},${b.label},${color};`;
    }

    res += line;
  }

  return res;
};
