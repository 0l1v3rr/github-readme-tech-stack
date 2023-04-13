import { FC, InputHTMLAttributes } from "react";
import { VariantProps, cva } from "class-variance-authority";
import { cn } from "./utils";

const inputVariants = cva(
  "w-full rounded-md px-2 py-1 leading-none outline-none bg-gh-bg-dark border border-gh-border text-gh-text active:bg-gh-bg focus:bg-gh-bg transition-all duration-150 placeholder:text-gh-border focus:outline-2 outline-offset-0",
  {
    variants: {
      variant: {
        primary: "focus:outline-gh-blue",
        secondary: "focus:outline-gh-border-active",
        danger: "focus:outline-gh-red-active",
      },
    },
    defaultVariants: {
      variant: "primary",
    },
  }
);

interface InputProps
  extends InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof inputVariants> {
  label?: string;
}

const Input: FC<InputProps> = ({
  className,
  variant,
  label,
  type = "text",
  ...props
}) => {
  return (
    <input
      aria-label={label}
      type={type}
      autoComplete="off"
      className={cn(inputVariants({ variant, className }))}
      {...props}
    />
  );
};

export default Input;
