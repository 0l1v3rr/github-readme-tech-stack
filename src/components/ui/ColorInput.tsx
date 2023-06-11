import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import { useOuterClick } from "@/hooks/useOuterClick";
import { cn } from "@/lib/utils/cn";
import { InputHTMLAttributes, forwardRef, useState } from "react";
import { HexColorPicker } from "react-colorful";
import { BsArrowRepeat } from "react-icons/bs";
import { IoMdColorFilter } from "react-icons/io";

const HEX_COLOR_REGEX = /#[a-fA-F0-9]{6}$/;

interface ColorInputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "type"> {
  onColorChange: (color: string) => void;
  canBeAuto?: boolean;
}

const ColorInput = forwardRef<HTMLInputElement, ColorInputProps>(
  (
    {
      className,
      required,
      value = "",
      disabled,
      onColorChange,
      canBeAuto = false,
      ...props
    },
    ref
  ) => {
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
          pattern={`^${required ? "" : "[]{0}|"}${
            canBeAuto ? "auto|" : ""
          }#[a-fA-F0-9]{6}$`}
          className={cn(
            "z-10 rounded-br-none rounded-tr-none [border-right:none!important]",
            isPickerActive ? "outline-2 outline-gh-blue" : ""
          )}
          disabled={disabled}
          {...props}
        />

        <Button
          tabIndex={-1}
          variant="secondary"
          onFocus={() => setIsPickerActive(true)}
          style={{
            color: disabled || !HEX_COLOR_REGEX.test(value) ? "#7d8590" : value,
          }}
          className={cn(
            "rounded-bl-none rounded-tl-none bg-gh-bg px-3 text-base",
            isPickerActive ? "border-gh-border-active bg-gh-gray-active" : ""
          )}
          disabled={disabled}
          icon={<IoMdColorFilter />}
        />

        <div
          className={cn(
            "color-input absolute right-0 top-[-630%] z-30 flex translate-x-[77%] flex-col gap-1 overflow-hidden rounded-md border border-gh-border bg-gh-bg shadow-popup transition-all duration-150",
            isPickerActive
              ? "pointer-events-auto opacity-100"
              : "pointer-events-none opacity-0"
          )}
        >
          <HexColorPicker
            color={value}
            onChange={onColorChange}
            className="m-2"
          />

          <div className="flex items-center justify-center border-t border-gh-border px-4 py-1">
            <Button
              onClick={() =>
                onColorChange(`#${Math.random().toString(16).slice(2, 8)}`)
              }
              variant="secondary"
              size="small"
              className="text-[.8rem]"
              style={{
                color:
                  disabled || !HEX_COLOR_REGEX.test(value) ? "#7d8590" : value,
              }}
              icon={<BsArrowRepeat className="rotate-[30deg] text-base" />}
            >
              Random Color
            </Button>
          </div>
        </div>
      </div>
    );
  }
);

ColorInput.displayName = "ColorInput";

export default ColorInput;
