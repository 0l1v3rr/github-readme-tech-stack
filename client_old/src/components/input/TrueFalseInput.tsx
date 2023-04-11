import { FC } from "react";

interface TrueFalseInputProps {
  label: string;
  value: boolean;
  setValue: (value: boolean) => void;
  className?: string;
  trueLabel: string;
  falseLabel: string;
}

const TrueFalseInput: FC<TrueFalseInputProps> = (props) => {
  return (
    <div className={`${props.className} w-full flex flex-col gap-1`}>
      <label className="text-sm text-gh-text-secondary font-semibold whitespace-normal w-fit">
        {props.label}
      </label>

      <div
        className="w-full ml-auto text-base bg-gh-bg border border-solid border-gh-border 
          rounded-md leading-none text-gh-text outline-none flex items-center 
          justify-evenly"
      >
        <div
          onClick={() => props.setValue(true)}
          className={`rounded-tl-md rounded-bl-md w-1/2 text-center px-1 py-1.5
            border-r border-solid border-gh-border cursor-pointer transition-all 
            duration-150 hover:text-green-400 hover:bg-gh-button ${
              props.value ? "text-green-400 bg-gh-button" : ""
            }`}
        >
          {props.trueLabel}
        </div>

        <div
          onClick={() => props.setValue(false)}
          className={`rounded-tr-md rounded-br-md w-1/2 text-center px-1 py-1.5
            cursor-pointer transition-all duration-150 hover:text-red-400 hover:bg-gh-button ${
              !props.value ? "text-red-400 bg-gh-button" : ""
            }`}
        >
          {props.falseLabel}
        </div>
      </div>
    </div>
  );
};

export default TrueFalseInput;
