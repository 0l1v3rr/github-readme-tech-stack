import { useOuterClick } from "../../hooks/useOuterClick";
import { cn } from "../../lib/utils/cn";
import { SelectOption } from "../../types";
import Input from "./Input";
import {
  ButtonHTMLAttributes,
  FC,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { AiFillCaretDown } from "react-icons/ai";
import { FiCheck } from "react-icons/fi";

interface SelectProps
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "onSelect" | "value"> {
  value: SelectOption;
  options: SelectOption[];
  label: string;
  filter?: boolean;
  onSelect: (option: SelectOption) => void;
}

const Select: FC<SelectProps> = ({
  value: selected,
  options,
  onSelect,
  className,
  label,
  filter = false,
  ...props
}) => {
  const [isActive, setIsActive] = useState<boolean>(false);
  const [filterText, setFilterText] = useState<string>("");
  const selectedRef = useRef<HTMLLIElement | null>(null);
  const mainRef = useOuterClick<HTMLButtonElement>(() => setIsActive(false));

  useEffect(
    () =>
      selectedRef.current?.scrollIntoView({
        block: "nearest",
        inline: "nearest",
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
      ref={mainRef}
      type="button"
      value={selected.value}
      onClick={() => setIsActive(true)}
      className={cn(
        "relative select-none rounded-md border border-gh-border bg-gh-gray leading-none text-gh-text outline-none outline-offset-0 transition-all duration-200 hover:border-gh-border-active hover:bg-gh-gray-active focus:border-gh-border-active focus:bg-gh-gray-active",
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
                onClick={() => onSelect(option)}
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
