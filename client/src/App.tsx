import { useState } from "react";
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

      <main className="flex gap-4 mx-4 sm:mx-10 md:mx-32 lg:mx-36 mt-6 flex-col lg:flex-row">
        <Options setLink={(link: string) => setLink(link)} />
        <Preview link={link} />
      </main>
    </div>
  );
};

export default App;
