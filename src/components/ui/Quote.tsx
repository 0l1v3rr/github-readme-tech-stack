import { cn } from "../../lib/utils/cn";
import { FC, ReactNode } from "react";
import { AiOutlineInfoCircle } from "react-icons/ai";

interface QuoteProps {
  variant: "Warning" | "Info" | "Note";
  children: ReactNode;
}

const Quote: FC<QuoteProps> = ({ variant, children }) => {
  return (
    <div className="flex flex-col justify-center border-l-4 border-gh-border bg-gh-bg-secondary/50 pb-1 pl-3 pt-2 text-gh-text-secondary">
      <div
        className={cn(
          "flex select-none items-center gap-2 leading-none",
          variant === "Warning" ? "fill-gh-mustard text-gh-mustard" : "",
          variant === "Info" ? "text-gh-blue-active" : "",
          variant === "Note" ? "text-gh-text-secondary" : ""
        )}
      >
        {variant === "Warning" && (
          <svg
            viewBox="0 0 16 16"
            version="1.1"
            width="16"
            height="16"
            aria-hidden="true"
          >
            <path d="M6.457 1.047c.659-1.234 2.427-1.234 3.086 0l6.082 11.378A1.75 1.75 0 0 1 14.082 15H1.918a1.75 1.75 0 0 1-1.543-2.575Zm1.763.707a.25.25 0 0 0-.44 0L1.698 13.132a.25.25 0 0 0 .22.368h12.164a.25.25 0 0 0 .22-.368Zm.53 3.996v2.5a.75.75 0 0 1-1.5 0v-2.5a.75.75 0 0 1 1.5 0ZM9 11a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"></path>
          </svg>
        )}
        {variant === "Info" && <AiOutlineInfoCircle />}
        <span>{variant}</span>
      </div>

      {children}
    </div>
  );
};

export default Quote;
