import { FC, useEffect, useState } from "react";
import { Badge } from "../../types/line";
import GreenButton from "../buttons/GreenButton";
import Input from "../input/Input";
import SingleCodeblock from "../text/SingleCodeblock";
import { FiSave } from "react-icons/fi";
import SecondaryButton from "../buttons/SecondaryButton";

interface LinePopupProps {
  isActive: boolean;
  addBadge: (badge: Badge) => void;
  lineNumber: string;
  closePopup: () => void;
}

const LinePopup: FC<LinePopupProps> = (props) => {
  const [icon, setIcon] = useState<string>("");
  const [label, setLabel] = useState<string>("");
  const [color, setColor] = useState<string>("");

  const [errorMsg, setErrorMsg] = useState<string | undefined>(
    "Please fill in all fields."
  );

  useEffect(() => {
    if (icon.trim().length < 3) {
      setErrorMsg("The icon name should be greater than 2 characters.");
      return;
    }

    if (label.trim().length < 3) {
      setErrorMsg("The label name should be greater than 2 characters.");
      return;
    }

    if (color.trim().length < 4) {
      setErrorMsg("Please provide a color.");
      return;
    }

    setErrorMsg(undefined);
  }, [icon, label, color]);

  const handleSave = () => {
    props.addBadge({
      color: color,
      iconName: icon,
      label: label,
    });

    handleCancel();
  };

  const handleCancel = () => {
    props.closePopup();
    setIcon("");
    setLabel("");
    setColor("");
  };

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
        Line #{props.lineNumber}: Add badge
      </div>

      <div className="flex flex-col gap-3 my-3">
        <div>
          <Input
            label="Icon"
            placeholder="react"
            setValue={setIcon}
            value={icon}
          />
          <div className="italic text-gh-text-secondary text-sm mx-4">
            -- You can browse between the icons{" "}
            <a
              href="https://simpleicons.org/"
              target="_blank"
              rel="noreferrer"
              className="text-gh-blue hover:underline"
              tabIndex={4}
            >
              here
            </a>
            .
          </div>
        </div>

        <div className="w-[95%] h-[.8px] bg-gh-border mx-auto" />

        <Input
          label="Badge label"
          placeholder="react"
          setValue={setLabel}
          value={label}
        />

        <div className="w-[95%] h-[.8px] bg-gh-border mx-auto" />

        <div>
          <Input
            label="Badge color"
            placeholder="#3498db"
            setValue={setColor}
            value={color}
          />
          <div className="italic text-gh-text-secondary text-sm mx-4">
            -- The badge color is either a hexadecimal color code or the value{" "}
            <SingleCodeblock code="auto" />.
          </div>
        </div>

        <div className="w-[95%] h-[.8px] bg-gh-border mx-auto" />

        {errorMsg !== undefined ? (
          <div className="text-red-400  text-sm italic mx-4">-- {errorMsg}</div>
        ) : (
          <div className="text-green-500  text-sm italic mx-4">
            -- Looks good!
          </div>
        )}

        <div className="w-[95%] h-[.8px] bg-gh-border mx-auto" />

        <div className="flex items-stretch">
          <GreenButton
            icon={FiSave}
            onClick={handleSave}
            text="Save"
            disabled={errorMsg !== undefined}
          />

          <SecondaryButton onClick={handleCancel} text="Cancel" />
        </div>
      </div>
    </div>
  );
};

export default LinePopup;
