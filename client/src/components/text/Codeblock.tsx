import { FC } from "react";

interface CodeblockProps {
  code: string;
}

const Codeblock: FC<CodeblockProps> = (props) => {
  return (
    <div
      className="font-mono bg-gh-bg-secondary rounded-md px-2 py-2 text-gh-text 
        mx-4 text-sm overflow-x-auto whitespace-nowrap"
    >
      {props.code}
    </div>
  );
};

export default Codeblock;
