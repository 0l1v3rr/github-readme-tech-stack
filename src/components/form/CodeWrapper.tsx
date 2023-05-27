import { cn } from "@/lib/utils/cn";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  title: string;
  className?: string;
};

const CodeWrapper = ({ children, title, className }: Props) => {
  return (
    <div
      className={cn(
        "mt-2 flex w-full flex-col gap-1 border-t border-gh-border pt-2",
        className
      )}
    >
      <h3 className="text-xl font-semibold text-gh-text">{title}</h3>
      {children}
    </div>
  );
};

export default CodeWrapper;
