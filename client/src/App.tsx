import { useState } from "react";
import Header from "./sections/Header";
import Options from "./sections/Options";
import Preview from "./sections/Preview";
import { Line } from "./types/line";

const App = () => {
  const BASE_LINK = "https://github-readme-tech-stack.vercel.app/api/cards";
  const [link, setLink] = useState<string>(BASE_LINK);

  const generateLink = (
    title: string,
    lineCount: string,
    theme: string,
    align: string,
    lines: Line[]
  ): string => {
    title = title.replace(/[ ]/g, "%20");
    let res = `${BASE_LINK}?title=${title}&lineCount=${lineCount}&theme=${theme}&align=${align}`;

    for (const l of lines) {
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

  return (
    <div className="bg-gh-bg w-screen min-h-screen overflow-x-hidden select-none pb-5">
      <Header />

      <div className="flex gap-4 mx-10 md:mx-48 mt-6 flex-col lg:flex-row">
        <Options
          generateLink={generateLink}
          setLink={(link: string) => setLink(link)}
        />
        <Preview link={link} />
      </div>
    </div>
  );
};

export default App;
