import { cn } from "@/lib/utils/cn";
import { FC, HTMLAttributes } from "react";

interface TrueFalseInputProps extends HTMLAttributes<HTMLDivElement> {
  value: boolean;
  setValue: (value: boolean) => void;
  trueLabel?: string;
  falseLabel?: string;
  className?: string;
}

const TrueFalseInput: FC<TrueFalseInputProps> = ({
  className,
  setValue,
  trueLabel = "True",
  falseLabel = "False",
  value,
  ...props
}) => {
  return (
    <div
      className={cn(
        "flex w-full items-center justify-evenly overflow-hidden rounded-md border border-solid border-gh-border bg-gh-bg text-base leading-none text-gh-text outline-none",
        className
      )}
      {...props}
    >
      <div
        onClick={() => setValue(true)}
        className={cn(
          "w-1/2 cursor-pointer border-r border-solid border-gh-border px-1 py-1.5 text-center transition-all duration-150 hover:bg-gh-gray hover:text-gh-lime-active",
          value ? "bg-gh-gray text-gh-lime-active" : ""
        )}
      >
        {trueLabel}
      </div>

      <div
        onClick={() => setValue(false)}
        className={cn(
          "w-1/2 cursor-pointer px-1 py-1.5 text-center transition-all duration-150 hover:bg-gh-gray hover:text-gh-red-active",
          !value ? "bg-gh-gray text-gh-red-active" : ""
        )}
      >
        {falseLabel}
      </div>
    </div>
  );
};

export default TrueFalseInput;
