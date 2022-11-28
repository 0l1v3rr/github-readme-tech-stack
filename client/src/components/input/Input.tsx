import { Dispatch, FC, SetStateAction, useId } from "react";

interface InputProps {
  label: string;
  value: string;
  setValue: Dispatch<SetStateAction<any>>;
  placeholder: string;
}

const Input: FC<InputProps> = (props) => {
  const id = `${props.label}-${useId()}`;

  return (
    <div className="flex items-center gap-2 mx-4">
      <label
        htmlFor={id}
        className="text-gh-text-secondary whitespace-nowrap font-semibold"
      >
        {props.label}:
      </label>

      <input
        name={id}
        id={id}
        value={props.value}
        placeholder={props.placeholder}
        onChange={(e) => props.setValue(e.target.value)}
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

export default Input;
