import Flex from "../layout/Flex";
import InputWrapper from "../ui/InputWrapper";
import Input from "../ui/Input";
import { useRef } from "react";
import { Badge } from "../../types";
import Button from "../ui/Button";
import { GoPlus } from "react-icons/go";

type Props = {
  addBadge: (badge: Badge) => void;
};

const NewBadge = ({ addBadge }: Props) => {
  const iconRef = useRef<HTMLInputElement | null>(null);
  const labelRef = useRef<HTMLInputElement | null>(null);
  const colorRef = useRef<HTMLInputElement | null>(null);

  return (
    <Flex className="items-start">
      <InputWrapper description="The name of the icon">
        <Input ref={iconRef} placeholder="react" pattern="^[a-zA-Z]{3,32}$" />
      </InputWrapper>

      <InputWrapper description="The label shown on the badge">
        <Input ref={labelRef} placeholder="react" pattern="^[a-zA-Z]{3,32}$" />
      </InputWrapper>

      <InputWrapper description="The color of the icon">
        <Input ref={colorRef} placeholder="#5ed3f3" />
      </InputWrapper>

      <Button
        aria-label="Add Badge"
        icon={<GoPlus />}
        variant="success"
        size="small"
        className="h-[30.67px]"
        onClick={() => {
          if (!colorRef.current || !iconRef.current || !labelRef.current) {
            return;
          }

          // if the refs are invalid
          if (
            colorRef.current.reportValidity() ||
            iconRef.current.reportValidity() ||
            labelRef.current.reportValidity()
          ) {
            return;
          }

          addBadge({
            color: colorRef.current.value,
            icon: iconRef.current.value,
            label: labelRef.current.value,
          });

          colorRef.current.value = "";
          iconRef.current.value = "";
          labelRef.current.value = "";
        }}
      />
    </Flex>
  );
};

export default NewBadge;
