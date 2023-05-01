import { useMultistepContext } from "../../hooks/useMultistepContext";
import { Line } from "../../types";
import Hr from "../ui/Hr";
import { formatNumberWord } from "../ui/utils";
import BadgeItem from "./BadgeItem";
import NewBadge from "./NewBadge";

type Props = {
  line: Line;
};

const LineItem = ({ line }: Props) => {
  const { addBadge, removeBadge } = useMultistepContext();

  return (
    <div className="w-full rounded-md border border-gh-border bg-gh-bg">
      <div className="rounded-tl-md rounded-tr-md border-b border-gh-border bg-gh-bg-secondary px-3 py-2 leading-none text-gh-text">
        {formatNumberWord(line.lineNumber)} line
      </div>

      <div className="flex flex-col gap-2 px-3 py-2">
        {line.badges.length < 1 ? (
          <div className="text-center text-sm text-gh-text-secondary">
            🥱 No badges selected.
          </div>
        ) : (
          <div className="flex flex-wrap gap-2">
            {[...line.badges]
              .sort((a, z) => a.position - z.position)
              .map((badge, i) => (
                <BadgeItem
                  key={i}
                  badge={badge}
                  removeBadge={(p) => removeBadge(line.lineNumber, p)}
                />
              ))}
          </div>
        )}

        <Hr />
        <NewBadge addBadge={(badge) => addBadge(line.lineNumber, badge)} />
      </div>
    </div>
  );
};

export default LineItem;
