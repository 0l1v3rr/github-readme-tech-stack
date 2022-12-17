import { FC, useId } from "react";
import { BiError } from "react-icons/bi";
import { HiOutlineInformationCircle } from "react-icons/hi";

interface InputProps {
  label: string;
  value: string;
  setValue: (value: string) => void;
  placeholder: string;
  className?: string;
  helperText?: string;
  validate: (value: string) => string;
}

const Input: FC<InputProps> = (props) => {
  const id = `${props.label}-${useId()}`;
  const isError = props.validate(props.value).trim() !== "";

  return (
    <div className={`${props.className} w-full flex flex-col gap-1`}>
      <label
        htmlFor={id}
        className="text-sm text-gh-text-secondary font-semibold w-fit"
      >
        {props.label}
      </label>

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
          outline-none transition-all duration-150 ${
            isError
              ? "border-red-500"
              : "focus:border-gh-blue active:border-gh-blue border-gh-border"
          }`}
      />

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

export default Input;
