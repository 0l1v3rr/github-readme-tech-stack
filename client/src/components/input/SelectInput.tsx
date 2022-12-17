import { FC, useId } from "react";

interface SelectInputProps {
  label: string;
  setValue: (value: string) => void;
  options: string[];
  value: string;
  className?: string;
}

const SelectInput: FC<SelectInputProps> = (props) => {
  const id = `${props.label}-${useId()}`;

  return (
    <div className={`${props.className} w-full flex flex-col gap-1`}>
      <label
        htmlFor={id}
        className="text-sm text-gh-text-secondary font-semibold w-fit"
      >
        {props.label}
      </label>

      <select
        name={id}
        id={id}
        defaultValue={props.value}
        autoComplete="off"
        onChange={(e) => props.setValue(e.target.value)}
        className="ml-auto text-base bg-gh-bg border border-solid border-gh-border
          rounded-md px-2 py-1 leading-none placeholder:text-gh-text-secondary text-gh-text
          outline-none focus:border-gh-blue-dark active:border-gh-blue-dark transition-all
          duration-150 w-full"
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
