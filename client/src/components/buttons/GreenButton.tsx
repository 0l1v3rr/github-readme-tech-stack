import { FC } from "react";
import { IconType } from "react-icons";

interface GreenButtonProps {
  text: string;
  icon: IconType;
  onClick: () => void;
}

const GreenButton: FC<GreenButtonProps> = (props) => {
  return (
    <button
      onClick={props.onClick}
      type="button"
      className="leading-none flex items-center gap-2 w-fit text-white
        bg-gh-green border border-solid border-gh-green-active rounded-md
        px-3 py-2 text-sm font-semibold mx-4 transition-all duration-150 
        hover:bg-gh-green-active"
    >
      {<props.icon />}
      {props.text}
    </button>
  );
};

export default GreenButton;
