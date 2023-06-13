import SvgInput from "@/components/lines/SvgInput";
import Upload from "@/components/lines/Upload";
import Button from "@/components/ui/Button";
import ColorInput from "@/components/ui/ColorInput";
import Input from "@/components/ui/Input";
import InputWrapper from "@/components/ui/InputWrapper";
import PopupContainer from "@/components/ui/PopupContainer";
import { Badge } from "@/types";
import { useCallback, useState } from "react";
import { GoPlus } from "react-icons/go";

const ICON_REGEX = /^[a-zA-Z0-9-_. ]{2,32}$/;
const HEX_COLOR_REGEX = /#[a-fA-F0-9]{6}$/;

type Props = {
  onBadgeAdd: (badge: Omit<Badge, "position">) => void;
};

const NewBadge = ({ onBadgeAdd }: Props) => {
  const [icon, setIcon] = useState<string>("");
  const [label, setLabel] = useState<string>("");
  const [color, setColor] = useState<string>("");

  const [isPopupActive, setIsPopupActive] = useState(false);
  const [file, setFile] = useState<null | File>(null);

  const uploadFile = useCallback(
    (file: File) => {
      setFile(file);

      // read the file as data:image
      const fr = new FileReader();
      fr.readAsDataURL(file);
      fr.onload = (e) => setIcon(e.target?.result?.toString() ?? icon);
    },
    [icon]
  );

  const handleBtnClick = useCallback(() => {
    onBadgeAdd({
      color,
      icon,
      label,
    });

    setFile(null);
    setColor("");
    setIcon("");
    setLabel("");
  }, [color, icon, label, onBadgeAdd]);

  return (
    <fieldset className="flex items-start gap-4">
      <PopupContainer
        onCloseBtnClick={() => setIsPopupActive(false)}
        isOpen={isPopupActive}
      >
        <Upload
          file={file}
          onPopupCloseBtnClick={() => setIsPopupActive(false)}
          onFileUpload={uploadFile}
          onIconClear={() => {
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
          onColorChange={(c) => setColor(c)}
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
