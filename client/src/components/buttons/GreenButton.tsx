import { FC } from "react";
import { IconType } from "react-icons";

interface GreenButtonProps {
  text: string;
  icon: IconType;
  onClick: () => void;
  disabled: boolean;
}

const GreenButton: FC<GreenButtonProps> = (props) => {
  return (
    <button
      onClick={props.onClick}
      type="button"
      disabled={props.disabled}
      className={`leading-none flex items-center gap-2 w-fit 
        bg-gh-green border border-solid rounded-md duration-150
        px-3 py-2 text-sm font-semibold transition-all  
        ${
          props.disabled
            ? "text-gh-text border-gh-green"
            : "hover:bg-gh-green-active text-white border-gh-green-active"
        }`}
    >
      {<props.icon />}
      {props.text}
    </button>
  );
};

export default GreenButton;
