import { InputHTMLAttributes, forwardRef, useCallback, useState } from "react";
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

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, variant, label, type = "text", onChange, ...props }, ref) => {
    const [actualVariant, setActualVariant] =
      useState<InputProps["variant"]>(variant);

    const checkValidity = useCallback(
      (e: React.ChangeEvent<HTMLInputElement>) => {
        // if the input is empty, don't indicate error
        if (e.target.value.trim() === "") {
          setActualVariant(variant);
          return;
        }

        // if the input passes the validity
        if (e.target.checkValidity()) {
          setActualVariant(variant);
          return;
        }

        setActualVariant("danger");
      },
      []
    );

    return (
      <input
        aria-label={label}
        ref={ref}
        type={type}
        autoComplete="off"
        onChange={(e) => {
          onChange?.(e);
          checkValidity(e);
        }}
        className={cn(inputVariants({ variant: actualVariant }), className)}
        {...props}
      />
    );
  }
);

export default Input;
