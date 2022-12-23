import { Card } from "../types/card";

export const generateLink = ({
  title,
  theme,
  align,
  lines,
  showBorder,
  borderRadius,
  fontWeight,
  fontSize,
}: Card): string => {
  // replace every space with %20
  title = title.replace(/[ ]/g, "%20");

  let res = `https://github-readme-tech-stack.vercel.app/api/cards?title=${title}&lineCount=${lines.length}&theme=${theme}&align=${align}&showBorder=${showBorder}&borderRadius=${borderRadius}&fontSize=${fontSize}&fontWeight=${fontWeight}`;

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
