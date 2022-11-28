import { FC, useId } from "react";

interface InputProps {
  line: string;
  // value: string;
  // setValue: Dispatch<SetStateAction<any>>;
}

const LineInput: FC<InputProps> = (props) => {
  const id = `line-${props.line}-${useId()}`;

  return (
    <div className="flex items-center gap-2 mx-4">
      <label htmlFor={id} className="text-gh-text-secondary whitespace-nowrap">
        Line #{props.line}:
      </label>

      <input
        name={id}
        id={id}
        // value={props.value}
        // onChange={(e) => props.setValue(e.target.value)}
        autoComplete="off"
        type="text"
        className="w-[72%] ml-auto text-base bg-gh-bg border border-solid border-gh-border 
          rounded-md px-2 py-1 leading-none placeholder:text-gh-text-secondary text-gh-text
          outline-none focus:border-gh-blue-dark active:border-gh-blue-dark transition-all 
          duration-150"
      />
    </div>
  );
};

export default LineInput;
