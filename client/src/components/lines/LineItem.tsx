import { Line } from "../../types";
import { formatNumberWord } from "../ui/utils";

type Props = {
  line: Line;
};

const LineItem = ({ line }: Props) => {
  return (
    <div className="w-full overflow-hidden rounded-md border border-gh-border bg-gh-bg-dark">
      <div className="border-b border-gh-border bg-gh-bg px-3 py-2 leading-none text-gh-text">
        {formatNumberWord(line.lineNumber)} line
      </div>
      <div className="flex flex-col gap-2 px-3 py-2"></div>
      asd
    </div>
  );
};

export default LineItem;
