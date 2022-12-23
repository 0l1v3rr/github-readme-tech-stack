import { FC, useState } from "react";
import { Badge } from "../../types/card";
import GreenButton from "../buttons/GreenButton";
import { FiSave } from "react-icons/fi";
import SecondaryButton from "../buttons/SecondaryButton";
import Input from "../input/Input";
import ColorInput from "../input/ColorInput";

interface LinePopupProps {
  isActive: boolean;
  addBadge: (badge: Badge) => void;
  lineNumber: string;
  closePopup: () => void;
}

const LinePopup: FC<LinePopupProps> = (props) => {
  const [icon, setIcon] = useState<string>("react");
  const [label, setLabel] = useState<string>("react");
  const [color, setColor] = useState<string>("#3498db");

  const validateIconAndLabel = (
    val: string,
    iorl: "icon" | "label"
  ): string => {
    if (val.length < 3 || val.length > 32) {
      return `The ${iorl} should be between 2 and 32 characters.`;
    }

    return "";
  };

  const validateHex = (val: string): string => {
    if (val === "auto") {
      return "";
    }

    // starts with #, 3 or 6 characters long, contains only hexadecimal values
    const hexColorRegex = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/;
    if (!hexColorRegex.test(val)) {
      return "The color should be a valid hexadecimal color or the value auto.";
    }

    return "";
  };

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
    setIcon("react");
    setLabel("react");
    setColor("#3498db");
  };

  const activeClasses = "opacity-100 pointer-events-auto scale-100";
  const inactiveClasses = "opacity-0 pointer-events-none scale-0";

  return (
    <div
      className={`border border-solid border-gh-border rounded-md bg-gh-bg-secondary
        shadow-3xl left-1/2 z-30 -translate-x-1/2 -translate-y-1/2 
        transition-all duration-150 fixed top-1/2 max-h-[95vh] overflow-y-auto w-[95%] 
        sm:w-[60%] md:w-[50%] lg:w-[40%] ${
          props.isActive ? activeClasses : inactiveClasses
        }`}
    >
      <div
        className="border-b border-solid border-gh-border px-4 
          py-2 font-semibold text-lg text-gh-text"
      >
        Line {props.lineNumber}: Add badge
      </div>

      <div className="flex flex-col gap-3 my-3 px-6">
        <Input
          label="Icon"
          placeholder="react"
          value={icon}
          setValue={(val: string) => setIcon(val)}
          validate={(val) => validateIconAndLabel(val, "icon")}
          helperText="You can browse between the icons here: https://simpleicons.org/"
        />

        <div className="w-full h-[.8px] bg-gh-border mx-auto" />

        <Input
          label="Badge label"
          placeholder="react"
          value={label}
          setValue={(val: string) => setLabel(val)}
          validate={(val) => validateIconAndLabel(val, "label")}
        />

        <div className="w-full h-[.8px] bg-gh-border mx-auto" />

        <ColorInput
          label="Badge color"
          placeholder="#3498db"
          value={color}
          setValue={(val: string) => setColor(val)}
          validate={(val) => validateHex(val)}
          helperText="The badge color is either a hexadecimal color code or the value auto."
        />
      </div>

      <div
        className="flex items-stretch py-4 px-4 gap-4 
          border-t border-solid border-gh-border"
      >
        <GreenButton
          icon={FiSave}
          onClick={handleSave}
          text="Save"
          disabled={
            !(
              validateHex(color) === "" &&
              validateIconAndLabel(icon, "icon") === "" &&
              validateIconAndLabel(label, "label") === ""
            )
          }
        />

        <SecondaryButton onClick={handleCancel} text="Cancel" />
      </div>
    </div>
  );
};

export default LinePopup;
