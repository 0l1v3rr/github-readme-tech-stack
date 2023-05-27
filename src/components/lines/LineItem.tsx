import BadgeItem from "@/components/lines/BadgeItem";
import BadgePlaceholder from "@/components/lines/BadgePlaceholder";
import NewBadge from "@/components/lines/NewBadge";
import { useMultistepContext } from "@/hooks/useMultistepContext";
import { formatNumberWord } from "@/lib/utils/format";
import { Line } from "@/types";
import React from "react";

type Props = {
  line: Line;
};

const LineItem = ({ line }: Props) => {
  const { addBadge, removeBadge } = useMultistepContext();

  return (
    <article className="w-full rounded-md border border-gh-border bg-gh-bg">
      <h3 className="rounded-tl-md rounded-tr-md border-b border-gh-border bg-gh-bg-secondary px-3 py-2 leading-none text-gh-text">
        {formatNumberWord(line.lineNumber)} line
      </h3>

      <div className="flex flex-col gap-2 px-1 py-2">
        {line.badges.length < 1 ? (
          <div className="text-center text-sm text-gh-text-secondary">
            🥱 No badges selected.
          </div>
        ) : (
          <div className="flex flex-wrap">
            <BadgePlaceholder lineNumber={line.lineNumber} position={0} />

            {[...line.badges]
              .sort((a, z) => a.position - z.position)
              .map((badge, i) => (
                <React.Fragment key={i}>
                  <BadgeItem
                    lineNumber={line.lineNumber}
                    badge={badge}
                    removeBadge={(p) => removeBadge(line.lineNumber, p)}
                  />
                  <BadgePlaceholder
                    lineNumber={line.lineNumber}
                    position={i + 1}
                  />
                </React.Fragment>
              ))}
          </div>
        )}

        <div className="mx-2 border-t border-gh-border pt-2">
          <NewBadge addBadge={(badge) => addBadge(line.lineNumber, badge)} />
        </div>
      </div>
    </article>
  );
};

export default LineItem;
