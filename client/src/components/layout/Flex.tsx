import { ReactNode } from "react";
import { cn } from "../ui/utils";

type Props = {
  children: ReactNode;
  className?: string;
};

const Flex = ({ children, className }: Props) => (
  <div className={cn("flex gap-4", className)}>{children}</div>
);

export default Flex;
