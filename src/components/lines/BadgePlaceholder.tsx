import { useCallback, useState } from "react";
import { useMultistepContext } from "@/hooks/useMultistepContext";
import { cn } from "../ui/utils";

type Props = {
  lineNumber: number;
  position: number;
};

const BadgePlaceholder = ({ lineNumber, position }: Props) => {
  const { grabbedBadge, setGrabbedBadge, insertBadge } = useMultistepContext();
  const [hovered, setHovered] = useState(false);

  const shouldDropBeAllowed = useCallback((): boolean => {
    if (!grabbedBadge) return false;
    if (grabbedBadge.lineNumber !== lineNumber) return false;

    // if the placeholder is next to the badge
    const { badge } = grabbedBadge;
    if (position === badge.position || position === badge.position + 1) {
      return false;
    }

    return true;
  }, [grabbedBadge, lineNumber, position]);

  const handleDragOver = useCallback(
    (e: React.DragEvent<HTMLDivElement>) => {
      if (!shouldDropBeAllowed()) return;

      e.preventDefault();
    },
    [shouldDropBeAllowed]
  );

  const handleDrop = useCallback(
    (e: React.DragEvent<HTMLDivElement>) => {
      if (!grabbedBadge) return;
      e.preventDefault();

      insertBadge(lineNumber, position, grabbedBadge);
      setGrabbedBadge(undefined);
      setHovered(false);
    },
    [grabbedBadge, insertBadge, lineNumber, position, setGrabbedBadge]
  );

  return (
    <div
      onDragOver={handleDragOver}
      onDrop={handleDrop}
      onDragLeave={() => setHovered(false)}
      onDragEnter={() => (shouldDropBeAllowed() ? setHovered(true) : {})}
      className={cn(
        "h-[31.73px] border-gh-bg",
        hovered ? "border-l-[.5rem] bg-gh-bg-dark" : "bg-transparent",
        grabbedBadge &&
          grabbedBadge.lineNumber === lineNumber &&
          grabbedBadge.badge.position + 1 === position
          ? ""
          : "border-r-[.5rem]"
      )}
      style={{
        width:
          hovered && grabbedBadge
            ? `calc(${grabbedBadge.badgeWidth}px + 1rem)`
            : "0",
      }}
    />
  );
};

export default BadgePlaceholder;
