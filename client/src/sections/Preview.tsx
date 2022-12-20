import SectionTitle from "../components/text/SectionTitle";
import { BsEmojiHeartEyes } from "react-icons/bs";
import { FC, useEffect, useState } from "react";
import Codeblock from "../components/text/Codeblock";

interface PreviewProps {
  link: string;
}

const Preview: FC<PreviewProps> = (props) => {
  const [markdown, setMarkdown] = useState<string>("");

  useEffect(() => {
    setMarkdown(`[![My Tech Stack](${props.link})](${props.link})`);
  }, [props.link]);

  return (
    <section className="border border-solid border-gh-border rounded-md w-full lg:w-[55%] pb-2">
      <SectionTitle icon={BsEmojiHeartEyes} title="Preview" />

      <a
        href={props.link}
        target="_blank"
        rel="noreferrer"
        className="flex items-center justify-center px-4 mt-2"
      >
        <img src={props.link} alt="Preview" />
      </a>

      <div className="w-[95%] h-[.8px] bg-gh-border mx-auto my-2" />

      <div className="mx-4 text-gh-text font-semibold my-2">Markdown</div>

      <Codeblock code={markdown} />

      <div className="w-[95%] h-[.8px] bg-gh-border mx-auto my-4" />

      <div className="mx-4 text-gh-text font-semibold my-2">URL</div>

      <Codeblock code={props.link} />

      <div className="w-[95%] h-[.8px] bg-gh-border mx-auto my-4" />

      <div className="mx-4 text-gh-text font-semibold my-2">HTML</div>

      <Codeblock code={`<img src="${props.link}" alt="My Tech Stack" />`} />
    </section>
  );
};

export default Preview;
