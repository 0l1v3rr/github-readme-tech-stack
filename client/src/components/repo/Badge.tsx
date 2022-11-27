import { FC } from "react";

interface BadgeProps {
  label: string;
}

const Badge: FC<BadgeProps> = () => {
  return (
    <div
      className="text-[.75rem] border border-solid border-gh-button-border 
      text-gh-text-secondary rounded-2xl px-2 leading-none py-1 font-semibold mt-1"
    >
      Public
    </div>
  );
};

export default Badge;
