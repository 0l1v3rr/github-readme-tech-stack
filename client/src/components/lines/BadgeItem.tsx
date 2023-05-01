import { Badge } from "../../types";

type Props = {
  badge: Badge;
  removeBadge: (position: number) => void;
};

const BadgeItem = ({ badge, removeBadge }: Props) => {
  return (
    <button
      draggable
      className="flex cursor-grab select-none items-center gap-3 bg-gh-bg-secondary px-3 py-[.45rem] transition-all duration-150 hover:bg-gh-gray"
      onClick={(e) => {
        // double click
        if (e.detail === 2) {
          removeBadge(badge.position);
        }
      }}
    >
      <img
        onError={(e) => (e.currentTarget.style.display = "none")}
        className="h-4 w-4 select-none"
        alt={`${badge.icon}`}
        // the image is in dataUrl format if starts with data:image, else display it from simpleicons
        src={
          badge.icon.startsWith("data:image")
            ? badge.icon
            : `https://cdn.simpleicons.org/${encodeURI(badge.icon)}/${
                badge.color === "auto" ? "" : badge.color.replace("#", "")
              }`
        }
      />

      {badge.label.trim().length > 0 && (
        <span className="py-[.145rem] font-dejavu text-[.70rem] font-bold uppercase leading-none tracking-wider text-white">
          {badge.label}
        </span>
      )}
    </button>
  );
};

export default BadgeItem;
