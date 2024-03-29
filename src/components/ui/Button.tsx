import { cn } from "../../lib/utils/cn";
import { OmitNullableKeys } from "../../types";
import { VariantProps, cva } from "class-variance-authority";
import { ButtonHTMLAttributes, ReactElement, forwardRef } from "react";

const buttonVariants = cva(
  "leading-none rounded-md border transition-all duration-200 flex items-center gap-2 text-gh-text outline-none focus-visible:outline-2 focus-visible:outline-gh-blue-active outline-offset-0 select-none",
  {
    variants: {
      variant: {
        success:
          "bg-gh-green border-gh-green-active hover:bg-gh-green-active disabled:bg-gh-green-disabled disabled:border-gh-green-disabled-border disabled:text-gh-text-secondary",
        secondary:
          "bg-gh-gray border-gh-border hover:bg-gh-gray-active hover:border-gh-border-active disabled:border-gh-border disabled:text-gh-text-secondary disabled:bg-gh-gray",
        danger:
          "bg-gh-gray border-gh-border text-gh-red-active hover:bg-gh-red hover:border-gh-red-active hover:text-gh-text",
      },
      fontWeight: {
        normal: "",
        semibold: "font-semibold",
        bold: "font-bold",
      },
      size: {
        normal: "px-4 py-1 text-base",
        small: "px-3 py-1 text-sm",
      },
      width: {
        fit: "w-fit",
        full: "w-full",
      },
    },
    defaultVariants: {
      variant: "success",
      size: "normal",
      fontWeight: "semibold",
      width: "fit",
    },
  }
);

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    OmitNullableKeys<VariantProps<typeof buttonVariants>> {
  children?: string;
  icon?: ReactElement;
  badge?: string | number;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      icon,
      className,
      size,
      variant,
      fontWeight,
      width,
      badge,
      type = "button",
      ...rest
    },
    ref
  ) => {
    return (
      <button
        ref={ref}
        className={cn(
          buttonVariants({ variant, size, fontWeight, width, className })
        )}
        type={type}
        aria-label={children ?? rest["aria-label"]}
        {...rest}
      >
        {icon}
        {children}
        {badge && (
          <div className="rounded-full bg-gh-gray-active px-1.5 py-1 text-[.8rem] leading-none text-gh-text">
            {badge}
          </div>
        )}
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;
