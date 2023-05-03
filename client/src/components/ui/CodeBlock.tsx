import { useState } from "react";
import { MdContentCopy, MdCheck } from "react-icons/md";

import { Light as SyntaxHighlighter } from "react-syntax-highlighter";
import xml from "react-syntax-highlighter/dist/esm/languages/hljs/xml";
import theme from "react-syntax-highlighter/dist/esm/styles/hljs/vs2015";
import { cn } from "./utils";

SyntaxHighlighter.registerLanguage("xml", xml);

type Props = {
  code: string;
};

const CodeBlock = ({ code }: Props) => {
  const [clicked, setClicked] = useState<boolean>(false);

  return (
    <div className="group relative max-w-full">
      <button
        type="button"
        aria-label="Copy"
        onMouseLeave={() => setClicked(false)}
        onClick={() => {
          navigator.clipboard.writeText(code);
          setClicked(true);
        }}
        className={cn(
          "absolute right-2 top-1/2 z-10 -translate-y-1/2 scale-75 cursor-pointer rounded-md border bg-gh-bg-secondary p-2 text-base opacity-0 shadow-2xl transition-all duration-75 hover:bg-gh-gray group-hover:scale-100 group-hover:opacity-100",
          clicked
            ? "border-gh-lime text-gh-lime"
            : "border-gh-border text-gh-text-secondary hover:border-gh-border-active"
        )}
      >
        {clicked ? <MdCheck /> : <MdContentCopy />}
      </button>

      <div className="relative select-text overflow-x-auto overflow-y-hidden whitespace-nowrap rounded-md bg-gh-bg-secondary font-mono text-sm text-gh-text">
        <SyntaxHighlighter
          language="xml"
          style={theme}
          showLineNumbers={false}
          wrapLongLines={false}
          customStyle={{
            margin: 0,
            background: "#161B22",
            padding: "0.6rem",
          }}
        >
          {code}
        </SyntaxHighlighter>
      </div>
    </div>
  );
};

export default CodeBlock;
