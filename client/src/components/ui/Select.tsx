import {
  ButtonHTMLAttributes,
  FC,
  useState,
  useMemo,
  useRef,
  useEffect,
} from "react";
import { SelectOption } from "../../types";
import { AiFillCaretDown } from "react-icons/ai";
import { FiCheck } from "react-icons/fi";
import { cn } from "./utils";
import Input from "./Input";

interface SelectProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  selected: SelectOption;
  options: SelectOption[];
  select: (option: SelectOption) => void;
  label: string;
  filter?: boolean;
}

const Select: FC<SelectProps> = ({
  selected,
  options,
  select,
  className,
  label,
  filter = false,
  ...props
}) => {
  const [isActive, setIsActive] = useState<boolean>(false);
  const [filterText, setFilterText] = useState<string>("");
  const selectedRef = useRef<HTMLLIElement | null>(null);

  useEffect(
    () =>
      selectedRef.current?.scrollIntoView({
        block: "center",
        inline: "start",
        behavior: "smooth",
      }),
    [isActive, selected]
  );

  const filteredOptions = useMemo(() => {
    if (!filter) return [...options];

    if (filterText.length <= 0) return [...options];

    return options.filter((option) =>
      JSON.stringify(option).toLowerCase().includes(filterText.toLowerCase())
    );
  }, [filter, options, filterText]);

  return (
    <button
      type="button"
      value={selected.value}
      onBlur={() => setIsActive(false)}
      onClick={(e) => {
        e.stopPropagation();
        setIsActive(true);
      }}
      className={cn(
        `relative select-none rounded-md border border-gh-border bg-gh-gray 
        leading-none text-gh-text outline-none outline-offset-0 transition-all 
        duration-200 hover:border-gh-border-active hover:bg-gh-gray-active 
        focus:border-gh-border-active focus:bg-gh-gray-active`,
        className
      )}
      {...props}
    >
      <div className="flex items-center justify-between gap-2 px-4 py-2">
        <span className="whitespace-nowrap">{selected.label}</span>
        <AiFillCaretDown className="text-[.7rem]" />
      </div>

      <div
        className={cn(
          "absolute left-0 top-10 border border-gh-border bg-gh-bg-secondary shadow-popup",
          "z-50 w-full overflow-hidden rounded-md transition-all duration-100",
          isActive
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        )}
      >
        <div className="border-b border-gh-border px-4 py-2 text-left font-semibold">
          {label}
        </div>

        {filter && (
          <div className="border-b border-gh-border px-2 py-1 ">
            <Input
              variant="primary"
              placeholder="Filter..."
              onFocus={() => setIsActive(true)}
              value={filterText}
              onChange={(e) => setFilterText(e.target.value)}
            />
          </div>
        )}

        <ul className="max-h-40 overflow-auto">
          {filteredOptions.length > 0 ? (
            filteredOptions.map((option, i) => (
              <li
                ref={option.value === selected.value ? selectedRef : undefined}
                onClick={() => select(option)}
                className={cn(
                  "flex items-center gap-4 px-4 py-1.5 text-left text-sm hover:bg-gh-blue",
                  i === 0 ? "" : "border-t border-gh-border"
                )}
                key={option.value}
              >
                <FiCheck
                  className={
                    option.value === selected.value ? "" : "text-transparent"
                  }
                />
                {option.label}
              </li>
            ))
          ) : (
            <li className="border-t border-gh-border px-4 py-1.5 text-left text-sm">
              No {label.toLowerCase()} found.
            </li>
          )}
        </ul>
      </div>
    </button>
  );
};

export default Select;
