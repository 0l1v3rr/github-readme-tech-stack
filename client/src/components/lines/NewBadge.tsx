import Flex from "../layout/Flex";
import InputWrapper from "../ui/InputWrapper";
import Input from "../ui/Input";
import { useState } from "react";
import { Badge } from "../../types";
import Button from "../ui/Button";
import { GoPlus } from "react-icons/go";

type Props = {
  addBadge: (badge: Badge) => void;
};

const NewBadge = ({ addBadge }: Props) => {
  const [icon, setIcon] = useState<string>("");
  const [label, setLabel] = useState<string>("");
  const [color, setColor] = useState<string>("");

  return (
    <Flex className="items-start">
      <InputWrapper description="The name of the icon">
        <Input
          placeholder="react"
          pattern="^[a-zA-Z]{3,32}$"
          value={icon}
          onChange={(e) => setIcon(e.target.value)}
        />
      </InputWrapper>

      <InputWrapper description="The label shown on the badge">
        <Input
          placeholder="react"
          pattern="^[a-zA-Z]{3,32}$"
          value={label}
          onChange={(e) => setLabel(e.target.value)}
        />
      </InputWrapper>

      <InputWrapper description="The color of the icon">
        <Input
          placeholder="#5ed3f3"
          value={color}
          onChange={(e) => setColor(e.target.value)}
        />
      </InputWrapper>

      <Button
        aria-label="Add Badge"
        icon={<GoPlus />}
        variant="success"
        size="small"
        className="h-[30.67px]"
        onClick={() => {
          addBadge({ color, icon, label });
          setIcon("");
          setLabel("");
          setColor("");
        }}
      />
    </Flex>
  );
};

export default NewBadge;
