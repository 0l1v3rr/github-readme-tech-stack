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
          rounded-md py-1 leading-none text-gh-text outline-none flex items-center 
          justify-evenly"
      >
        <div
          onClick={() => props.setValue(true)}
          className={`py-1 px-4 border border-solid border-gh-border rounded-md 
            cursor-pointer transition-all duration-150 hover:text-green-400 hover:bg-gh-button ${
              props.value
                ? "text-green-400 bg-gh-button"
                : "hover:border-gh-button-border-active"
            }`}
        >
          {props.trueLabel}
        </div>

        <div
          onClick={() => props.setValue(false)}
          className={`py-1 px-4 border border-solid border-gh-border rounded-md 
            cursor-pointer transition-all duration-150 hover:text-red-400 hover:bg-gh-button ${
              !props.value
                ? "text-red-400 bg-gh-button"
                : "hover:border-gh-button-border-active"
            }`}
        >
          {props.falseLabel}
        </div>
      </div>
    </div>
  );
};

export default TrueFalseInput;
