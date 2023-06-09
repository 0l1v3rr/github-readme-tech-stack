import { cn } from "@/lib/utils/cn";
import { AnchorHTMLAttributes, FC, ReactNode } from "react";

interface LinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  children: ReactNode;
}

const Link: FC<LinkProps> = ({ children, className, ...props }) => {
  return (
    <a
      rel="noreferrer"
      target="_blank"
      className={cn(
        "text-gh-blue outline-none hover:underline focus-visible:underline",
        className
      )}
      {...props}
    >
      {children}
    </a>
  );
};

export default Link;
