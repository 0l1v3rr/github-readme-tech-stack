import { FC } from "react";
import { Badge } from "../../types/line";
import GreenButton from "../buttons/GreenButton";
import { MdLibraryAddCheck, MdDeleteOutline } from "react-icons/md";
import HoverText from "../hover/HoverText";

interface LinePopupProps {
  isActive: boolean;
  badges: Badge[];
  removeBadge: (badge: Badge) => void;
  lineNumber: string;
  closePopup: () => void;
}

const BadgesPopup: FC<LinePopupProps> = (props) => {
  const activeClasses = "opacity-100 pointer-events-auto scale-100";
  const inactiveClasses = "opacity-0 pointer-events-none scale-0";

  return (
    <div
      className={`border border-solid border-gh-border rounded-md bg-gh-bg-secondary
        shadow-lg left-1/2 z-30 -translate-x-1/2 -translate-y-1/2 
        transition-all duration-150 fixed top-1/2 max-h-[95vh] overflow-y-auto w-[95%] 
        sm:w-[60%] md:w-[50%] lg:w-[40%] ${
          props.isActive ? activeClasses : inactiveClasses
        }`}
    >
      <div
        className="border-b border-solid border-gh-border px-4 
          py-2 font-semibold text-lg text-gh-text"
      >
        Line #{props.lineNumber}
      </div>

      <div className="flex flex-col gap-3 my-3">
        {props.badges.length < 1 && (
          <div className="text-gh-text-secondary italic px-4">
            There are no badges selected, nothing to show. 🥱
          </div>
        )}

        {props.badges.length > 0 && (
          <table className="mx-4">
            <thead className="border-b border-solid border-gh-border">
              <tr>
                <th
                  scope="col"
                  className="text-sm text-gh-text font-semibold px-4 py-2 text-left uppercase"
                >
                  #
                </th>
                <th
                  scope="col"
                  className="text-sm text-gh-text font-semibold px-4 py-2 text-left uppercase"
                >
                  Icon
                </th>
                <th
                  scope="col"
                  className="text-sm text-gh-text font-semibold px-4 py-2 text-left uppercase"
                >
                  Label
                </th>
                <th
                  scope="col"
                  className="text-sm text-gh-text font-semibold px-4 py-2 text-left uppercase"
                >
                  Color
                </th>
                <th
                  scope="col"
                  className="text-sm text-gh-text font-semibold px-4 py-2 text-center uppercase"
                >
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {props.badges.map((badge, index) => {
                return (
                  <tr className="border-b border-solid border-gh-border">
                    <td className="whitespace-nowrap text-gh-text-secondary text-sm px-4 py-2 text-left">
                      {index + 1}
                    </td>
                    <td className="whitespace-nowrap text-gh-text-secondary text-sm px-4 py-2 text-left">
                      {badge.iconName}
                    </td>
                    <td className="whitespace-nowrap text-gh-text-secondary text-sm px-4 py-2 text-left">
                      {badge.label}
                    </td>
                    <td className="whitespace-nowrap text-gh-text-secondary text-sm px-4 py-2 text-left">
                      {badge.color}
                    </td>
                    <td>
                      <HoverText label="Remove badge" className="text-center">
                        <button
                          type="button"
                          onClick={() => props.removeBadge(badge)}
                          className="text-base text-gh-text-secondary leading-none 
                        transition-all duration-200 hover:text-gh-red hover:scale-105"
                        >
                          <MdDeleteOutline />
                        </button>
                      </HoverText>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        )}

        <div
          className="border-t border-solid border-gh-border 
          pt-3"
        >
          <GreenButton
            icon={MdLibraryAddCheck}
            onClick={() => props.closePopup()}
            text="OK"
            disabled={false}
          />
        </div>
      </div>
    </div>
  );
};

export default BadgesPopup;
