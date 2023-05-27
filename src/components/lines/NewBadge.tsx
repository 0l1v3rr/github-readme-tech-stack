import SvgInput from "@/components/lines/SvgInput";
import Upload from "@/components/lines/Upload";
import Button from "@/components/ui/Button";
import ColorInput from "@/components/ui/ColorInput";
import Input from "@/components/ui/Input";
import InputWrapper from "@/components/ui/InputWrapper";
import PopupContainer from "@/components/ui/PopupContainer";
import { HEX_COLOR_REGEX, ICON_REGEX } from "@/const/card";
import { Badge } from "@/types";
import { useCallback, useState } from "react";
import { GoPlus } from "react-icons/go";

type Props = {
  addBadge: (badge: Omit<Badge, "position">) => void;
};

const NewBadge = ({ addBadge }: Props) => {
  const [icon, setIcon] = useState<string>("");
  const [label, setLabel] = useState<string>("");
  const [color, setColor] = useState<string>("");

  const [isPopupActive, setIsPopupActive] = useState(false);
  const [file, setFile] = useState<null | File>(null);

  const uploadFile = useCallback(
    (file: File) => {
      setFile(file);

      // read the file as data:image...
      const fr = new FileReader();
      fr.readAsDataURL(file);
      fr.onload = (e) => setIcon(e.target?.result?.toString() ?? icon);
    },
    [icon]
  );

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
  }, [color, icon, label, addBadge]);

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
          placeholder={file === null ? "#58a6ff" : "auto"}
          canBeAuto={true}
        />
      </InputWrapper>

      <Button
        disabled={
          !(file === null
            ? (HEX_COLOR_REGEX.test(color) || color.toLowerCase() === "auto") &&
              ICON_REGEX.test(icon)
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
