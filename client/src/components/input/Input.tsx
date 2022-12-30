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
  inputLink?: string;
}

const Input: FC<InputProps> = (props) => {
  const id = `${props.label}-${useId()}`;
  const isError = props.validate(props.value).trim() !== "";

  return (
    <div className={`${props.className} w-full flex flex-col gap-1`}>
      <label
        htmlFor={id}
        className="text-sm text-gh-text-secondary font-semibold w-fit
          flex gap-1 items-center"
      >
        {props.label}

        {props.inputLink !== undefined && (
          <sup>
            <a
              href={props.inputLink}
              target="_blank"
              rel="noreferrer"
              className="text-gh-blue cursor-pointer hover:underline"
            >
              [1]
            </a>
          </sup>
        )}
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
        <div className="flex items-center gap-1 text-[.8rem] italic text-gh-text-secondary">
          <HiOutlineInformationCircle />
          <span>{props.helperText}</span>
        </div>
      )}

      {isError && (
        <div className="flex items-center gap-1 text-[.8rem] italic text-red-500">
          <BiError />
          <span>{props.validate(props.value)}</span>
        </div>
      )}
    </div>
  );
};

export default Input;
