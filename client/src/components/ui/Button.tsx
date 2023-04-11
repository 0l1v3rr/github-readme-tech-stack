import { ButtonHTMLAttributes, FC, ReactElement } from "react";
import { VariantProps, cva } from "class-variance-authority";
import { cn } from "./utils";

const buttonVariants = cva(
  "leading-none rounded-md border transition-all duration-200 flex items-center gap-2 text-gh-text outline-none focus:outline-2 focus:outline-gh-blue-active outline-offset-0",
  {
    variants: {
      variant: {
        success: "bg-gh-green border-gh-green-active hover:bg-gh-green-active",
        secondary:
          "bg-gh-gray border-gh-border hover:bg-gh-gray-active hover:border-gh-border-active",
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
    VariantProps<typeof buttonVariants> {
  label: string;
  icon?: ReactElement;
  badge?: string;
}

const Button: FC<ButtonProps> = ({
  label,
  icon,
  className,
  size,
  variant,
  fontWeight,
  width,
  badge,
  type = "button",
  ...props
}) => {
  return (
    <button
      className={cn(
        buttonVariants({ variant, size, fontWeight, className, width })
      )}
      type={type}
      aria-label={label}
      {...props}
    >
      {icon}
      {label}
      {badge && (
        <div className="text-[.8rem] bg-gh-gray-active text-gh-text rounded-full px-1.5 py-1 leading-none">
          {badge}
        </div>
      )}
    </button>
  );
};

export default Button;
