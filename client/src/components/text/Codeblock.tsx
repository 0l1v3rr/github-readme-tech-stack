import { FC, useState } from "react";
import { MdContentCopy } from "react-icons/md";

interface CodeblockProps {
  code: string;
}

const Codeblock: FC<CodeblockProps> = (props) => {
  const [hovered, setHovered] = useState<boolean>(false);

  return (
    <div className="relative">
      <button
        type="button"
        onMouseEnter={() => setHovered(true)}
        onClick={() => navigator.clipboard.writeText(props.code)}
        className={`absolute top-1/3 right-5 bg-gh-bg-secondary
          border border-solid border-gh-button-border cursor-pointer
          transition-all duration-75 p-2 -translate-y-1/2 text-base rounded-md
          text-gh-text-secondary hover:border-gh-button-border-active
          hover:bg-gh-button shadow-xl z-10
          ${hovered ? "scale-100 opacity-100" : "scale-75 opacity-0"}`}
      >
        <MdContentCopy />
      </button>

      <div
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="font-mono bg-gh-bg-secondary rounded-md px-2 py-3 text-gh-text 
        mx-4 text-sm overflow-x-auto whitespace-nowrap select-text relative 
        overflow-y-hidden"
      >
        {props.code}
      </div>
    </div>
  );
};

export default Codeblock;
