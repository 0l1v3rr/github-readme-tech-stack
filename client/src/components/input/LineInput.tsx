import { FC, useState } from "react";
import { Badge, Line } from "../../types/line";
import { FaRegEdit } from "react-icons/fa";

interface InputProps {
  line: string;
  updateLine: (line: Line) => void;
}

const LineInput: FC<InputProps> = (props) => {
  const [badges] = useState<Badge[]>([]);

  return (
    <div className="flex items-center gap-2 mx-4">
      <span className="text-gh-text-secondary whitespace-nowrap font-semibold">
        Line {props.line}:
      </span>

      <div
        className="w-[72%] ml-auto text-base bg-gh-bg border border-solid border-gh-border 
          rounded-md px-3 py-2 leading-none text-gh-text flex items-center gap-2"
      >
        <span>Badges: {badges.length}</span>

        <button
          type="button"
          title="Edit Line"
          className="cursor-pointer ml-auto text-gh-text-secondary 
            hover:text-gh-blue transition-all duration-150"
        >
          <FaRegEdit />
        </button>
      </div>
    </div>
  );
};

export default LineInput;
