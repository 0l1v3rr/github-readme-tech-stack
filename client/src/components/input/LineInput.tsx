import { FC, useState } from "react";
import { Badge, Line } from "../../types/line";
import { AiOutlinePlus } from "react-icons/ai";
import BlurOverlay from "../popups/BlurOverlay";
import LinePopup from "../popups/LinePopup";

interface InputProps {
  line: string;
  updateLine: (line: Line) => void;
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

  return (
    <div className="flex items-center gap-2 mx-4">
      <BlurOverlay
        isActive={isPopupOpen}
        closePopup={() => setIsPopupOpen(false)}
      />

      <LinePopup
        badges={badges}
        addBadge={addBadge}
        isActive={isPopupOpen}
        lineNumber={props.line}
        closePopup={() => setIsPopupOpen(false)}
      />

      <span className="text-gh-text-secondary whitespace-nowrap font-semibold">
        Line #{props.line}:
      </span>

      <div
        className="w-[72%] ml-auto text-base bg-gh-bg border border-solid border-gh-border 
          rounded-md px-3 py-2 leading-none text-gh-text flex items-center gap-2"
      >
        <span>Badges: {badges.length}</span>

        <button
          type="button"
          className="cursor-pointer ml-auto text-gh-text-secondary 
            hover:text-gh-blue transition-all duration-150"
          onClick={() => setIsPopupOpen(true)}
        >
          <AiOutlinePlus />
        </button>
      </div>
    </div>
  );
};

export default LineInput;
