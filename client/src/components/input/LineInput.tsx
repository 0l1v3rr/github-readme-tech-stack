import { FC, useState } from "react";
import { Badge, Line } from "../../types/line";
import { AiOutlinePlus } from "react-icons/ai";
import BlurOverlay from "../popups/BlurOverlay";
import LinePopup from "../popups/LinePopup";
import HoverText from "../hover/HoverText";
import { AiOutlineQuestionCircle } from "react-icons/ai";

interface InputProps {
  line: string;
  updateLine: (line: Line) => void;
  className?: string;
}

const LineInput: FC<InputProps> = (props) => {
  const [badges, setBadges] = useState<Badge[]>([]);
  const [isPopupOpen, setIsPopupOpen] = useState<boolean>(false);

  const addBadge = (badge: Badge) => {
    props.updateLine({
      badges: [...badges, badge],
      lineNumber: props.line,
    });

    setBadges((prev) => [...prev, badge]);
  };

  const removeBadge = (badge: Badge) => {
    setBadges((prev) =>
      [...prev].filter(
        (b) =>
          !(
            b.color === badge.color &&
            b.iconName === badge.iconName &&
            b.label === badge.label
          )
      )
    );

    props.updateLine({
      badges: [...badges].filter(
        (b) =>
          !(
            b.color === badge.color &&
            b.iconName === badge.iconName &&
            b.label === badge.label
          )
      ),
      lineNumber: props.line,
    });
  };

  return (
    <div className={`${props.className} w-full flex flex-col gap-1 text-sm`}>
      <BlurOverlay
        isActive={isPopupOpen}
        closePopup={() => setIsPopupOpen(false)}
      />

      <LinePopup
        addBadge={addBadge}
        isActive={isPopupOpen}
        lineNumber={props.line}
        closePopup={() => setIsPopupOpen(false)}
      />

      <span className="text-sm text-gh-text-secondary font-semibold w-fit">
        Line {props.line}
      </span>

      <div
        className="w-full text-sm bg-gh-bg border border-solid border-gh-border 
          rounded-md leading-none text-gh-text flex flex-col"
      >
        <div
          className="flex items-center justify-between border-b 
            border-solid border-gh-border px-3 py-2 gap-2"
        >
          <span className="font-semibold">Badges: {badges.length}</span>

          <HoverText label="Click the badge to remove it" className="ml-auto">
            <div
              className="cursor-pointer text-gh-text-secondary 
                hover:text-gh-text transition-all duration-150"
            >
              <AiOutlineQuestionCircle />
            </div>
          </HoverText>

          <HoverText label="Add badge">
            <button
              type="button"
              className="cursor-pointer text-gh-text-secondary 
                hover:text-gh-blue transition-all duration-150"
              onClick={() => setIsPopupOpen(true)}
            >
              <AiOutlinePlus />
            </button>
          </HoverText>
        </div>

        {badges.length < 1 && (
          <div className="text-gh-text-secondary italic px-4 py-2">
            There are no badges selected. 🥱
          </div>
        )}

        {badges.length > 0 && (
          <div className="flex items-center gap-3 p-2 overflow-hidden flex-wrap">
            {badges.map((badge) => {
              return (
                <div
                  key={`${badge.iconName}-${Math.random()}`}
                  onClick={() => removeBadge(badge)}
                  className="flex items-center gap-3 py-[.45rem] px-3 bg-gh-bg-secondary 
                    cursor-pointer border border-solid border-gh-bg-secondary 
                    hover:border-gh-red transition-all duration-150"
                >
                  <div className="text-gh-text-secondary">
                    <img
                      className="w-4 h-4"
                      src={`https://cdn.simpleicons.org/${badge.iconName}/${
                        badge.color === "auto"
                          ? ""
                          : badge.color.replace("#", "")
                      }`}
                      alt=""
                    />
                  </div>

                  <div className="font-semibold text-white font-dejavu text-[.7rem] tracking-wider">
                    {badge.label.toUpperCase()}
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default LineInput;
