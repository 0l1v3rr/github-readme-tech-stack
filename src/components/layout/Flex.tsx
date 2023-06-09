import { cn } from "@/lib/utils/cn";
import { ElementType, ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
  variant?: ElementType;
};

const Flex = ({ children, className, variant: Tag = "div" }: Props) => (
  <Tag className={cn("flex gap-4", className)}>{children}</Tag>
);

export default Flex;
