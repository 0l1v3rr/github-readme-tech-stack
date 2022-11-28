import { Dispatch, FC, SetStateAction, useId } from "react";

interface SelectInputProps {
  label: string;
  setValue: Dispatch<SetStateAction<any>>;
  options: string[];
  value: string;
}

const SelectInput: FC<SelectInputProps> = (props) => {
  const id = `${props.label}-${useId()}`;

  return (
    <div className="flex items-center gap-2 mx-4">
      <label htmlFor={id} className="text-gh-text-secondary whitespace-nowrap">
        {props.label}:
      </label>

      <select
        name={id}
        id={id}
        defaultValue={props.value}
        autoComplete="off"
        onChange={(e) => props.setValue(e.target.value)}
        className="w-[72%] ml-auto text-base bg-gh-bg border border-solid border-gh-border 
          rounded-md px-2 py-1 leading-none placeholder:text-gh-text-secondary text-gh-text
          outline-none focus:border-gh-blue-dark active:border-gh-blue-dark transition-all 
          duration-150"
      >
        {props.options.map((option, index) => {
          return (
            <option value={option} key={`${option}-${index}`}>
              {option}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default SelectInput;
