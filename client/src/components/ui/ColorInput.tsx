import { InputHTMLAttributes, forwardRef, useState } from "react";
import Input from "./Input";
import { cn } from "./utils";
import { HEX_COLOR_REGEX } from "../../const";
import { IoMdColorFilter } from "react-icons/io";
import Button from "./Button";
import { HexColorPicker } from "react-colorful";
import { useOuterClick } from "../../hooks/useOuterClick";

interface ColorInputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "type"> {
  setColor: (color: string) => void;
}

const ColorInput = forwardRef<HTMLInputElement, ColorInputProps>(
  ({ className, required, value = "", setColor, ...props }, ref) => {
    value = value.toString();

    const [isPickerActive, setIsPickerActive] = useState(false);
    const divRef = useOuterClick<HTMLDivElement>(() =>
      setIsPickerActive(false)
    );

    return (
      <div
        ref={divRef}
        className={cn("group relative flex items-stretch", className)}
      >
        <Input
          ref={ref}
          value={value}
          onFocus={() => setIsPickerActive(true)}
          type="text"
          required={required}
          pattern={`^${required ? "" : "[]{0}|"}#[a-fA-F0-9]{6}$`}
          className={cn(
            "z-10 rounded-br-none rounded-tr-none [border-right:none!important] [transition:none!important]",
            isPickerActive ? "bg-gh-bg outline-gh-blue" : ""
          )}
          {...props}
        />

        <Button
          tabIndex={-1}
          variant="secondary"
          onFocus={() => setIsPickerActive(true)}
          style={{
            color: HEX_COLOR_REGEX.test(value) ? value : "#58a6ff",
          }}
          className={cn(
            "rounded-bl-none rounded-tl-none bg-gh-bg px-3 text-base [transition:none!important]",
            isPickerActive ? "outline-gh-blue hover:border-gh-border" : ""
          )}
          icon={<IoMdColorFilter />}
        />

        <div
          className={cn(
            "color-input absolute right-[-53%] top-[-590%] z-30 flex flex-col gap-1 overflow-hidden rounded-md border border-gh-border bg-gh-bg shadow-md",
            isPickerActive
              ? "pointer-events-auto opacity-100"
              : "pointer-events-none opacity-0"
          )}
        >
          <div className="border-b border-gh-border p-1.5 text-center text-sm font-semibold leading-none text-gh-text">
            Color Picker
          </div>
          <HexColorPicker color={value} onChange={setColor} className="m-2" />
        </div>
      </div>
    );
  }
);

export default ColorInput;
