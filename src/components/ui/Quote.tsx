import { cn } from "../../lib/utils/cn";
import { OmitNullableKeys } from "@/types";
import { VariantProps, cva } from "class-variance-authority";
import { FC, ReactNode } from "react";
import {
  AiOutlineExclamationCircle,
  AiOutlineInfoCircle,
  AiOutlineWarning,
} from "react-icons/ai";
import { BsCheck2Circle } from "react-icons/bs";

const quoteVariants = cva(
  "border rounded-md flex gap-2 items-center px-4 py-2 select-none",
  {
    variants: {
      variant: {
        info: "bg-blue-500/5 text-blue-500 border-blue-500/10",
        success: "bg-green-500/5 text-green-500 border-green-500/10",
        warning: "bg-yellow-500/5 text-yellow-500 border-yellow-500/10",
        danger: "bg-red-500/5 text-red-500 border-red-500/10",
      },
      width: {
        fit: "w-fit",
        full: "w-full",
      },
    },
    defaultVariants: {
      variant: "info",
      width: "full",
    },
  }
);

interface QuoteProps
  extends OmitNullableKeys<VariantProps<typeof quoteVariants>> {
  children: ReactNode;
  className?: string;
}

const Quote: FC<QuoteProps> = ({ variant, children, className, width }) => {
  return (
    <div className={cn(quoteVariants({ variant, width, className }))}>
      {variant === "info" && <AiOutlineInfoCircle />}
      {variant === "success" && <BsCheck2Circle />}
      {variant === "warning" && <AiOutlineWarning />}
      {variant === "danger" && <AiOutlineExclamationCircle />}

      <p>{children}</p>
    </div>
  );
};

export default Quote;
