import { FC, useEffect, useState } from "react";
import { Badge } from "../../types/line";
import GreenButton from "../buttons/GreenButton";
import { FiSave } from "react-icons/fi";
import SecondaryButton from "../buttons/SecondaryButton";
import Input from "../input/Input";

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

      <div className="flex flex-col gap-3 my-3 px-6">
        <Input
          label="Icon"
          placeholder="react"
          value={icon}
          setValue={(val: string) => setIcon(val)}
          validate={() => ""}
          helperText="You can browse between the icons here: https://simpleicons.org/"
        />

        <div className="w-[95%] h-[.8px] bg-gh-border mx-auto" />

        <Input
          label="Badge label"
          placeholder="react"
          value={label}
          setValue={(val: string) => setLabel(val)}
          validate={() => ""}
        />

        <div className="w-[95%] h-[.8px] bg-gh-border mx-auto" />

        <Input
          label="Badge color"
          placeholder="#3498db"
          value={color}
          setValue={(val: string) => setColor(val)}
          validate={() => ""}
          helperText="The badge color is either a hexadecimal color code or the value auto."
        />
      </div>
      <div className="w-[95%] h-[.8px] bg-gh-border mx-auto" />

      <div className="flex items-stretch py-4">
        <GreenButton
          icon={FiSave}
          onClick={handleSave}
          text="Save"
          disabled={errorMsg !== undefined}
        />

        <SecondaryButton onClick={handleCancel} text="Cancel" />
      </div>
    </div>
  );
};

export default LinePopup;
