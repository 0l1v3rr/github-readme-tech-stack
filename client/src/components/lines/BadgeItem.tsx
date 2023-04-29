import { Badge } from "../../types";

type Props = {
  badge: Badge;
};

const BadgeItem = ({ badge }: Props) => {
  return (
    <div className="flex cursor-pointer items-center gap-3 border border-solid border-gh-bg-secondary bg-gh-bg-secondary px-3 py-[.45rem] transition-all duration-150">
      <img
        onError={(e) => {
          e.currentTarget.style.display = "none";
        }}
        className="h-4 w-4"
        src={`https://cdn.simpleicons.org/${encodeURI(badge.icon)}/${
          badge.color === "auto" ? "" : badge.color.replace("#", "")
        }`}
        alt={`${badge.icon}`}
      />

      <span className="py-[.145rem] font-dejavu text-[.70rem] font-bold uppercase leading-none tracking-wider text-white">
        {badge.label}
      </span>
    </div>
  );
};

export default BadgeItem;
