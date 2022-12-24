import { FC, useCallback, useId } from "react";
import { BiError } from "react-icons/bi";
import { HiOutlineInformationCircle } from "react-icons/hi";
import { BsArrowRepeat } from "react-icons/bs";

interface ColorInputProps {
  label: string;
  value: string;
  setValue: (value: string) => void;
  placeholder: string;
  className?: string;
  helperText?: string;
  validate: (value: string) => string;
}

const ColorInput: FC<ColorInputProps> = (props) => {
  const id = `${props.label}-${useId()}`;
  const isError = props.validate(props.value).trim() !== "";

  const generateHex = useCallback((): string => {
    // return "#" + Math.floor(Math.random() * 16777215).toString(16);
    return "#" + Math.random().toString(16).slice(2, 8).toLowerCase();
  }, []);

  return (
    <div className={`${props.className} w-full flex flex-col gap-1`}>
      <label
        htmlFor={id}
        className="text-sm text-gh-text-secondary font-semibold w-fit"
      >
        {props.label}
      </label>

      <div className="w-full flex items-stretch gap-2">
        <input
          name={id}
          id={id}
          value={props.value}
          placeholder={props.placeholder}
          onChange={(e) => props.setValue(e.target.value)}
          autoComplete="off"
          type="text"
          className={`text-base bg-gh-bg border border-solid rounded-md px-2 py-1 
          leading-none placeholder:text-gh-text-secondary text-gh-text
          outline-none transition-all duration-150 w-full ${
            isError
              ? "border-red-500"
              : "focus:border-gh-blue active:border-gh-blue border-gh-border"
          }`}
        />

        <button
          type="button"
          aria-label="Regenerate Color"
          onClick={() => props.setValue(generateHex())}
          className="border border-solid border-gh-button-border 
            bg-gh-button transition-all duration-150 hover:border-gh-button-border-active
            hover:bg-gh-button-active cursor-pointer rounded-md px-2 py-1 text-lg 
            text-gh-text-secondary"
          style={{
            color: isError || props.value === "auto" ? "#8B949E" : props.value,
          }}
        >
          <BsArrowRepeat />
        </button>

        <input
          value={isError || props.value === "auto" ? "#8B949E" : props.value}
          onChange={(e) => props.setValue(e.target.value)}
          type="color"
          autoComplete="off"
          className="text-base border border-solid rounded-md px-2 py-1 
            leading-none cursor-pointer border-gh-button-border 
            bg-gh-button hover:bg-gh-button-active hover:border-gh-button-border-active
            transition-all duration-150 w-10 h-8 color-input"
        />
      </div>

      {!isError && props.helperText && (
        <div className="flex items-center gap-1 text-sm italic text-gh-text-secondary">
          <HiOutlineInformationCircle /> {props.helperText}
        </div>
      )}

      {isError && (
        <div className="flex items-center gap-1 text-sm italic text-red-500">
          <BiError /> {props.validate(props.value)}
        </div>
      )}
    </div>
  );
};

export default ColorInput;
