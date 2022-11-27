import { FC } from "react";
import { IconType } from "react-icons";

interface ButtonLinkProps {
  text: string;
  link: string;
  icon: IconType;
  num: number | undefined;
}

const ButtonLink: FC<ButtonLinkProps> = (props) => {
  return (
    <a
      href={props.link}
      className="text-gh-text flex items-center gap-3 
      bg-gh-button border border-solid border-gh-button-border
        py-1 px-3 rounded-md hover:border-gh-button-border-active 
        transition-all duration-150 hover:bg-gh-button-active text-sm"
    >
      <div className="text-gh-text-secondary text-lg">{<props.icon />}</div>

      <div className="font-semibold">{props.text}</div>

      {props.num !== undefined && (
        <div className="bg-gh-button-active rounded-full px-2 py-1 leading-none text-[.8rem]">
          {props.num}
        </div>
      )}
    </a>
  );
};

export default ButtonLink;
