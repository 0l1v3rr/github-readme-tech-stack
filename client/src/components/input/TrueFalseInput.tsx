import { Dispatch, FC, SetStateAction } from "react";

interface TrueFalseInputProps {
  label: string;
  value: boolean;
  setValue: Dispatch<SetStateAction<boolean>>;
}

const TrueFalseInput: FC<TrueFalseInputProps> = (props) => {
  return (
    <div className="flex items-center gap-2 mx-4">
      <label className="text-gh-text-secondary whitespace-nowrap font-semibold">
        {props.label}:
      </label>

      <div
        className="w-[72%] ml-auto text-base bg-gh-bg border border-solid border-gh-border 
          rounded-md py-1 leading-none text-gh-text outline-none flex items-center 
          justify-evenly"
      >
        <div
          onClick={() => props.setValue(true)}
          className={`py-1 px-4 border border-solid border-gh-border rounded-md 
            cursor-pointer transition-all duration-150 hover:text-green-400 
            hover:border-gh-button-border-active hover:bg-gh-button ${
              props.value ? "text-green-400 bg-gh-button" : ""
            }`}
        >
          True
        </div>

        <div
          onClick={() => props.setValue(false)}
          className={`py-1 px-4 border border-solid border-gh-border rounded-md 
            cursor-pointer transition-all duration-150 hover:text-red-400 
            hover:border-gh-button-border-active hover:bg-gh-button ${
              !props.value ? "text-red-400 bg-gh-button" : ""
            }`}
        >
          False
        </div>
      </div>
    </div>
  );
};

export default TrueFalseInput;
