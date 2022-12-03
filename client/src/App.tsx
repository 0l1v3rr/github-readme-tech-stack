import { useState } from "react";
import Header from "./sections/Header";
import Options from "./sections/Options";
import Preview from "./sections/Preview";

const App = () => {
  const [link, setLink] = useState<string>(
    "https://github-readme-tech-stack.vercel.app/api/cards"
  );

  return (
    <div className="bg-gh-bg w-screen min-h-screen overflow-x-hidden select-none pb-5">
      <Header />

      <div className="flex gap-4 mx-10 md:mx-48 mt-6 flex-col lg:flex-row overflow-x-hidden">
        <Options setLink={(link: string) => setLink(link)} />
        <Preview link={link} />
      </div>
    </div>
  );
};

export default App;
