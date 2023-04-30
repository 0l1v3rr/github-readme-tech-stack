import { InputHTMLAttributes, forwardRef } from "react";
import Input from "./Input";
import { cn } from "./utils";
import { HEX_COLOR_REGEX } from "../../const";

// eslint-disable-next-line
interface ColorInputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "type"> {}

const ColorInput = forwardRef<HTMLInputElement, ColorInputProps>(
  ({ className, required, value = "", ...props }, ref) => {
    return (
      <div className={cn("group flex items-stretch", className)}>
        <Input
          ref={ref}
          value={value}
          type="text"
          required={required}
          pattern={`^${required ? "" : "[]{0}|"}#[a-fA-F0-9]{6}$`}
          className="z-10 rounded-br-none rounded-tr-none transition-none [border-right:none!important]"
          {...props}
        />

        <input
          type="color"
          value={
            HEX_COLOR_REGEX.test(value.toString() ?? "") ? value : "#58a6ff"
          }
          className="h-[30.67px] w-10 cursor-pointer rounded-br-md rounded-tr-md border border-gh-border bg-gh-bg px-2 py-1 outline-0 outline-offset-0 outline-gh-blue transition-all duration-150 [outline-style:solid] hover:border-gh-border-active hover:bg-gh-gray-active"
          {...props}
        />
      </div>
    );
  }
);

export default ColorInput;
