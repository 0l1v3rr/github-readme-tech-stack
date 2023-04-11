import { FC } from "react";
import { IconType } from "react-icons";

interface SectionTitleProps {
  title: string;
  icon: IconType;
}

const SectionTitle: FC<SectionTitleProps> = (props) => {
  return (
    <div
      className="border-b border-solid border-gh-border py-3 
        px-3 flex items-center gap-3 leading-none"
    >
      <div className="text-gh-text-secondary">{<props.icon />}</div>
      <div className="text-gh-text font-semibold">{props.title}</div>
    </div>
  );
};

export default SectionTitle;
