import { FC, useState } from "react";
import { Badge, Line } from "../../types/line";
import { AiOutlinePlus, AiOutlineEye } from "react-icons/ai";
import BlurOverlay from "../popups/BlurOverlay";
import LinePopup from "../popups/LinePopup";
import HoverText from "../hover/HoverText";
import BadgesPopup from "../popups/BadgesPopup";

interface InputProps {
  line: string;
  updateLine: (line: Line) => void;
}

const LineInput: FC<InputProps> = (props) => {
  const [badges, setBadges] = useState<Badge[]>([]);
  const [isPopupOpen, setIsPopupOpen] = useState<boolean>(false);
  const [isBadgesPopupOpen, setIsBadgesPopupOpen] = useState<boolean>(false);

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
    <div className="flex items-center gap-2 mx-4">
      <BlurOverlay isActive={isPopupOpen || isBadgesPopupOpen} />

      <LinePopup
        addBadge={addBadge}
        isActive={isPopupOpen}
        lineNumber={props.line}
        closePopup={() => setIsPopupOpen(false)}
      />

      <BadgesPopup
        badges={badges}
        closePopup={() => setIsBadgesPopupOpen(false)}
        isActive={isBadgesPopupOpen}
        lineNumber={props.line}
        removeBadge={removeBadge}
      />

      <span className="text-gh-text-secondary whitespace-nowrap font-semibold">
        Line #{props.line}:
      </span>

      <div
        className="w-[72%] ml-auto text-base bg-gh-bg border border-solid border-gh-border 
          rounded-md px-3 py-2 leading-none text-gh-text flex items-center gap-3"
      >
        <span>Badges: {badges.length}</span>

        <HoverText label="Add badge" className="ml-auto">
          <button
            type="button"
            className="cursor-pointer text-gh-text-secondary 
              hover:text-gh-blue transition-all duration-150"
            onClick={() => setIsPopupOpen(true)}
          >
            <AiOutlinePlus />
          </button>
        </HoverText>

        <HoverText label="View badges">
          <button
            type="button"
            className="cursor-pointer text-gh-text-secondary 
              hover:text-gh-blue transition-all duration-150"
            onClick={() => setIsBadgesPopupOpen(true)}
          >
            <AiOutlineEye />
          </button>
        </HoverText>
      </div>
    </div>
  );
};

export default LineInput;
