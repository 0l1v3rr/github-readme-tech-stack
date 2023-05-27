import { useMultistepContext } from "@/hooks/useMultistepContext";
import { cn } from "@/lib/utils/cn";
import { Badge } from "@/types";
import { useCallback, useState } from "react";

type Props = {
  badge: Badge;
  lineNumber: number;
  removeBadge: (position: number) => void;
};

const BadgeItem = ({ badge, removeBadge, lineNumber }: Props) => {
  const [dragged, setDragged] = useState(false);
  const { setGrabbedBadge, grabbedBadge } = useMultistepContext();

  const handleDragStart = useCallback(
    (e: React.DragEvent<HTMLButtonElement>) => {
      // draw the grabbed div again so it's not hidden
      const { left, top } = e.currentTarget.getBoundingClientRect();
      e.dataTransfer.setDragImage(
        e.currentTarget,
        e.clientX - left,
        e.clientY - top
      );

      setGrabbedBadge({
        badge,
        lineNumber,
        badgeWidth: e.currentTarget.clientWidth,
      });

      setTimeout(() => setDragged(true), 0);
    },
    [lineNumber, badge, setGrabbedBadge]
  );

  return (
    <button
      draggable
      type="button"
      onDragStart={handleDragStart}
      onDragEnd={() => {
        setDragged(false);
        setGrabbedBadge(undefined);
      }}
      className={cn(
        "flex cursor-grab select-none items-center gap-3 border border-gh-bg px-3 py-[.45rem] transition-all duration-150",
        dragged ? "hidden" : "bg-gh-bg-secondary text-white",
        grabbedBadge === undefined ? "hover:bg-gh-gray" : ""
      )}
      onClick={(e) => {
        // double click
        if (e.detail === 2) {
          removeBadge(badge.position);
        }
      }}
    >
      <img
        onError={(e) => (e.currentTarget.style.display = "none")}
        className={cn("h-4 w-4 select-none", dragged ? "opacity-0" : "")}
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
        <span className="py-[.145rem] font-dejavu text-[.70rem] font-bold uppercase leading-none tracking-wider">
          {badge.label}
        </span>
      )}
    </button>
  );
};

export default BadgeItem;
