import { FC } from "react";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

interface InputProps {
  label: string;
  value: string;
  setValue: (value: string) => void;
  minValue: number;
  maxValue: number;
  className?: string;
}

const NumberInput: FC<InputProps> = (props) => {
  const increment = () => {
    const number = Number(props.value) + 1;

    if (props.maxValue + 1 === number) {
      return;
    }

    props.setValue(`${number}`);
  };

  const decrement = () => {
    const number = Number(props.value) - 1;

    if (props.minValue - 1 === number) {
      return;
    }

    props.setValue(`${number}`);
  };

  return (
    <div className={`${props.className} w-full flex flex-col gap-1`}>
      <label className="text-sm text-gh-text-secondary font-semibold">
        {props.label}
      </label>

      <div className="flex items-stretch ml-auto w-full">
        <button
          type="button"
          onClick={decrement}
          className="rounded-tl-md rounded-bl-md border border-solid text-gh-text-secondary
            border-gh-border px-2 transition-all duration-150 hover:bg-gh-red hover:text-white
            text-sm"
        >
          <AiOutlineMinus />
        </button>
        <div
          className="text-base bg-gh-bg border-t border-b border-solid w-full
            border-gh-border px-2 py-[.417rem] leading-none placeholder:text-gh-text-secondary
            text-gh-text outline-none transition-all duration-150 text-center"
        >
          {props.value}
        </div>
        <button
          type="button"
          onClick={increment}
          className="rounded-tr-md rounded-br-md border border-solid text-gh-text-secondary
            border-gh-border px-2 transition-all duration-150 hover:bg-gh-green-active
            hover:text-white text-sm"
        >
          <AiOutlinePlus />
        </button>
      </div>
    </div>
  );
};

export default NumberInput;
