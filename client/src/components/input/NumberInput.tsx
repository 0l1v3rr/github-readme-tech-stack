import { Dispatch, FC, SetStateAction } from "react";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

interface InputProps {
  label: string;
  value: string;
  setValue: Dispatch<SetStateAction<any>>;
  minValue: number;
  maxValue: number;
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
    <div className="flex items-center gap-2 mx-4">
      <label className="text-gh-text-secondary whitespace-nowrap font-semibold">
        {props.label}:
      </label>

      <div className="flex items-stretch w-[72%] ml-auto">
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
          // onChange={(e) => props.setValue(e.target.value)}
          className="text-base bg-gh-bg border-t border-b border-solid 
            border-gh-border px-2 py-[.417rem] leading-none placeholder:text-gh-text-secondary 
            text-gh-text outline-none transition-all duration-150 w-full text-center"
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
