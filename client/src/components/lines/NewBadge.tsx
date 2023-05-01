import InputWrapper from "../ui/InputWrapper";
import Input from "../ui/Input";
import { Badge } from "../../types";
import Button from "../ui/Button";
import { GoPlus } from "react-icons/go";
import ColorInput from "../ui/ColorInput";
import { useState, useCallback } from "react";
import { HEX_COLOR_REGEX, ICON_REGEX } from "../../const";
import SvgInput from "./SvgInput";
import PopupContainer from "../ui/PopupContainer";
import Upload from "./Upload";

type Props = {
  addBadge: (badge: Omit<Badge, "position">) => void;
};

const NewBadge = ({ addBadge }: Props) => {
  const [icon, setIcon] = useState<string>("");
  const [label, setLabel] = useState<string>("");
  const [color, setColor] = useState<string>("");

  const [isPopupActive, setIsPopupActive] = useState(false);
  const [file, setFile] = useState<null | File>(null);

  const uploadFile = useCallback((file: File) => {
    setFile(file);

    // read the file as data:image...
    const fr = new FileReader();
    fr.readAsDataURL(file);
    fr.onload = (e) => setIcon(e.target?.result?.toString() ?? icon);
  }, []);

  const handleBtnClick = useCallback(() => {
    addBadge({
      color,
      icon,
      label,
    });

    setFile(null);
    setColor("");
    setIcon("");
    setLabel("");
  }, [color, icon, label]);

  return (
    <fieldset className="flex items-start gap-4">
      <PopupContainer
        closePopup={() => setIsPopupActive(false)}
        isOpen={isPopupActive}
      >
        <Upload
          file={file}
          closePopup={() => setIsPopupActive(false)}
          uploadFile={uploadFile}
          clearIcon={() => {
            setIcon("");
            setFile(null);
          }}
        />
      </PopupContainer>

      <InputWrapper description="The icon in the badge">
        <SvgInput
          value={file !== null ? file.name : icon}
          disabled={file !== null}
          onBtnClick={() => setIsPopupActive(true)}
          onChange={(e) => setIcon(e.target.value)}
          placeholder="react"
        />
      </InputWrapper>

      <InputWrapper description="The label shown on the badge">
        <Input
          value={label}
          onChange={(e) => setLabel(e.target.value)}
          placeholder="react"
        />
      </InputWrapper>

      <InputWrapper description="The color of the icon">
        <ColorInput
          formNoValidate
          disabled={file !== null}
          value={color}
          onChange={(e) => setColor(e.target.value)}
          setColor={(c) => setColor(c)}
          placeholder="#58a6ff"
        />
      </InputWrapper>

      <Button
        disabled={
          !(file === null
            ? HEX_COLOR_REGEX.test(color) && ICON_REGEX.test(icon)
            : true)
        }
        aria-label="Add Badge"
        icon={<GoPlus />}
        variant="success"
        size="small"
        className="h-[30.67px]"
        onClick={handleBtnClick}
      />
    </fieldset>
  );
};

export default NewBadge;
