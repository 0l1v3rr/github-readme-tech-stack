import { useState } from "react";
import Main from "./components/layout/Main";
import Header from "./pages/Header";
import Options from "./pages/Options";
import Preview from "./pages/Preview";

const App = () => {
  const [link, setLink] = useState<string>(
    "https://github-readme-tech-stack.vercel.app/api/cards"
  );

  return (
    <div className="bg-gh-bg w-full min-h-screen overflow-x-hidden select-none pb-5">
      <Header />

      <Main>
        <Options setLink={(link: string) => setLink(link)} />
        <Preview link={link} />
      </Main>
    </div>
  );
};

export default App;
