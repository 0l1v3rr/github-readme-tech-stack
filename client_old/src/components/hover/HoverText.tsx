import { FC, ReactNode } from "react";

interface HoverTextProps {
  label: string;
  children: ReactNode;
  className?: string;
}

const HoverText: FC<HoverTextProps> = (props) => {
  return (
    <div className={`${props.className} relative group`}>
      <div
        className="absolute whitespace-nowrap left-1/2 -translate-x-1/2 -top-7 
          text-[.8rem] bg-gh-bg-secondary border border-solid border-gh-border pointer-events-none
          px-2 py-1 leading-none rounded-md shadow-xl text-gh-text-secondary z-50
          before:content-[''] before:w-2 before:h-2 before:bg-gh-bg-secondary
          before:absolute before:top-full before:left-1/2 before:-translate-x-1/2
          before:rotate-45 before:-translate-y-1/2 before:border-solid before:border-gh-border
          before:border-b before:border-r scale-80 opacity-0 group-hover:scale-100 
          group-hover:opacity-100 transition-all duration-200"
      >
        {props.label}
      </div>

      {props.children}
    </div>
  );
};

export default HoverText;
