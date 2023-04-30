import InputWrapper from "../ui/InputWrapper";
import Input from "../ui/Input";
import { Badge } from "../../types";
import Button from "../ui/Button";
import { GoPlus } from "react-icons/go";
import ColorInput from "../ui/ColorInput";
import { useState } from "react";
import { HEX_COLOR_REGEX, ICON_REGEX } from "../../const";

type Props = {
  addBadge: (badge: Badge) => void;
};

const NewBadge = ({ addBadge }: Props) => {
  const [icon, setIcon] = useState<string>("");
  const [label, setLabel] = useState<string>("");
  const [color, setColor] = useState<string>("");

  return (
    <fieldset className="flex items-start gap-4">
      <InputWrapper description="The name of the icon">
        <Input
          formNoValidate
          value={icon}
          onChange={(e) => setIcon(e.target.value)}
          placeholder="react"
        />
      </InputWrapper>

      <InputWrapper description="The label shown on the badge">
        <Input
          formNoValidate
          value={label}
          onChange={(e) => setLabel(e.target.value)}
          placeholder="react"
        />
      </InputWrapper>

      <InputWrapper description="The color of the icon">
        <ColorInput
          formNoValidate
          value={color}
          onChange={(e) => setColor(e.target.value)}
          placeholder="#58a6ff"
        />
      </InputWrapper>

      <Button
        disabled={
          !HEX_COLOR_REGEX.test(color) ||
          !ICON_REGEX.test(icon) ||
          !ICON_REGEX.test(label)
        }
        aria-label="Add Badge"
        icon={<GoPlus />}
        variant="success"
        size="small"
        className="h-[30.67px]"
        onClick={() => {
          addBadge({
            color,
            icon,
            label,
          });

          setColor("");
          setIcon("");
          setLabel("");
        }}
      />
    </fieldset>
  );
};

export default NewBadge;
