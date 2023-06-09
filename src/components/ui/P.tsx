import { cn } from "@/lib/utils/cn";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
};

const P = ({ children, className }: Props) => {
  return <p className={cn("text-gh-text", className)}>{children}</p>;
};

export default P;
