import { FC, useState } from "react";
import { MdContentCopy, MdCheck } from "react-icons/md";

import { Light as SyntaxHighlighter } from "react-syntax-highlighter";
import xml from "react-syntax-highlighter/dist/esm/languages/hljs/xml";
import theme from "react-syntax-highlighter/dist/esm/styles/hljs/vs2015";

SyntaxHighlighter.registerLanguage("xml", xml);

interface CodeblockProps {
  code: string;
}

const Codeblock: FC<CodeblockProps> = (props) => {
  const [hovered, setHovered] = useState<boolean>(false);
  const [clicked, setClicked] = useState<boolean>(false);

  return (
    <div className="relative">
      <button
        type="button"
        onMouseEnter={() => setHovered(true)}
        onClick={() => {
          navigator.clipboard.writeText(props.code);
          setClicked(true);
        }}
        aria-label="Copy"
        onMouseLeave={() => setClicked(false)}
        className={`absolute top-1/2 right-5 bg-gh-bg-secondary
          border border-solid cursor-pointer -translate-y-1/2 text-base rounded-md
          hover:bg-gh-button shadow-xl z-10 transition-all duration-75 p-2 
          ${hovered ? "scale-100 opacity-100" : "scale-75 opacity-0"}
          ${
            clicked
              ? "border-gh-green-active hover:border-gh-green-active text-gh-green-active"
              : "border-gh-button-border hover:border-gh-button-border-active text-gh-text-secondary "
          }`}
      >
        {clicked ? <MdCheck /> : <MdContentCopy />}
      </button>

      <div
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="font-mono bg-gh-bg-secondary rounded-md text-gh-text 
          mx-4 text-sm overflow-x-auto whitespace-nowrap select-text relative 
          overflow-y-hidden"
      >
        <SyntaxHighlighter
          language="xml"
          style={theme}
          showLineNumbers={false}
          wrapLongLines={false}
          customStyle={{
            margin: 0,
            padding: 0,
            background: "#161B22",
            paddingLeft: "0.5rem",
            paddingRight: "0.5rem",
            paddingTop: "0.75rem",
            paddingBottom: "0.75rem",
          }}
        >
          {props.code}
        </SyntaxHighlighter>
        {/* {props.code} */}
      </div>
    </div>
  );
};

export default Codeblock;
