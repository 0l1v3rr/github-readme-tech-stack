import { FC } from "react";
import { IconType } from "react-icons";

interface SecondaryButtonProps {
  text: string;
  icon?: IconType;
  onClick: () => void;
}

const SecondaryButton: FC<SecondaryButtonProps> = (props) => {
  return (
    <button
      onClick={props.onClick}
      type="button"
      className="text-gh-text flex items-center gap-3 
      bg-gh-button border border-solid border-gh-button-border
        py-1 px-3 rounded-md hover:border-gh-button-border-active 
        transition-all duration-150 hover:bg-gh-button-active text-sm"
    >
      {props.icon && <props.icon />}
      {props.text}
    </button>
  );
};

export default SecondaryButton;
