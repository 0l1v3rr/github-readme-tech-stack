import { FC, useEffect, useRef, useState } from "react";
import { FiCheck } from "react-icons/fi";
import { IoMdClose } from "react-icons/io";
import { useDebounceValue } from "../../hooks/useDebounceValue";
import { useOuterClick } from "../../hooks/useOuterClick";

interface SelectInputProps {
  label: string;
  setValue: (value: string) => void;
  options: string[];
  value: string;
  className?: string;
  searchField?: boolean;
}

const SelectInput: FC<SelectInputProps> = (props) => {
  const [isActive, setIsActive] = useState<boolean>(false);
  const [filterValue, setFilterValue] = useState<string>("");
  const [options, setOptions] = useState<string[]>([...props.options]);
  const debounceFilterValue = useDebounceValue(filterValue, 250);

  const ref = useOuterClick(() => setIsActive(false));
  const inputRef = useRef<HTMLInputElement>(null);
  const activeRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (debounceFilterValue.trim().length < 1) {
      setOptions([...props.options]);
      activeRef.current?.scrollIntoView({
        block: "nearest",
        inline: "start",
      });
      return;
    }

    setOptions(
      [...props.options].filter((o) =>
        o.includes(debounceFilterValue.toLowerCase().trim())
      )
    );
  }, [debounceFilterValue, props.options]);

  const selectValue = (value: string): void => {
    setIsActive(false);
    setFilterValue("");
    props.setValue(value);
  };

  return (
    <div
      className={`${props.className} w-full h-fit select-none relative`}
      ref={ref}
    >
      <label className="text-sm text-gh-text-secondary font-semibold w-fit block mb-1">
        {props.label}
      </label>

      <div
        onClick={() => {
          setIsActive((prev) => {
            if (!prev) {
              inputRef.current?.focus();
              activeRef.current?.scrollIntoView({
                block: "nearest",
                inline: "start",
              });
            }
            return !prev;
          });
        }}
        onBlur={() => setIsActive(false)}
        className={`ml-auto text-base border border-solid rounded-md px-2 
          pb-1 pt-[.16rem] text-gh-text transition-all cursor-pointer 
          duration-150 w-full flex items-center justify-between relative
          hover:border-gh-button-border-active hover:bg-gh-bg-secondary 
          ${
            isActive
              ? "bg-gh-bg-secondary border-gh-button-border-active shadow-2xl"
              : "bg-gh-bg border-gh-border"
          }`}
      >
        <div>{props.value}</div>
        <div
          className="border-[.25em] translate-y-1/4 
            border-solid border-transparent border-t-gh-text-secondary"
        />
      </div>

      <div
        className={`bg-gh-bg-secondary border border-solid border-gh-border
          rounded-md shadow-3xl z-50 absolute w-fit top-16 left-0 text-sm ${
            isActive
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          }`}
      >
        <div
          className="text-gh-text font-semibold py-1 px-3 border-b 
            border-solid border-gh-border"
        >
          {props.label}
        </div>

        {props.searchField && (
          <div
            className="py-1 px-2 border-b 
              border-solid border-gh-border"
          >
            <input
              placeholder="Filter..."
              value={filterValue}
              onChange={(e) => setFilterValue(e.target.value)}
              className="bg-gh-bg px-2 py-1 text-gh-text placeholder:text-gh-text-secondary 
                border border-solid border-gh-border rounded-md outline-none 
                focus:border-gh-blue active:border-gh-blue"
              ref={inputRef}
            />
          </div>
        )}

        <ul className="list-none max-h-48 overflow-auto">
          {options.map((option, i) => {
            const isSelected = option === props.value;

            return (
              <li
                key={option}
                onClick={() => selectValue(option)}
                className={`flex items-center gap-4 py-1 px-2 transition-all duration-150 
                  hover:bg-gh-button cursor-pointer text-gh-text min-w-[10rem] ${
                    i === 0 ? "" : "border-t border-solid border-gh-border-dark"
                  }`}
              >
                {isSelected && (
                  <span ref={activeRef}>
                    <FiCheck />
                  </span>
                )}

                <span className={`${isSelected ? "" : "pl-[1.85rem]"}`}>
                  {option}
                </span>
              </li>
            );
          })}

          {options.length < 1 && (
            <li
              className="flex items-center gap-4 py-1 px-2 transition-all duration-150 
              text-gh-text min-w-[10rem]"
            >
              <span>
                <IoMdClose />
              </span>

              <span>No theme found</span>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default SelectInput;
