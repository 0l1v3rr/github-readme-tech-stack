import { useMultistepContext } from "../../hooks/useMultistepContext";
import Flex from "../layout/Flex";
import FormWrapper from "../ui/FormWrapper";
import Input from "../ui/Input";
import InputWrapper from "../ui/InputWrapper";
import TrueFalseInput from "../ui/TrueFalseInput";

const PageFour = () => {
  const { card, setCard } = useMultistepContext();

  return (
    <FormWrapper title="Card">
      <Flex>
        <InputWrapper label="Card width" htmlFor="width">
          <Input
            id="width"
            required
            placeholder="Card width"
            type="number"
            min={16}
            max={2048}
            value={card.width}
            onChange={(e) =>
              setCard((prev) => ({ ...prev, width: e.target.valueAsNumber }))
            }
          />
        </InputWrapper>

        <InputWrapper label="Border radius" htmlFor="border-radius">
          <Input
            id="border-radius"
            required
            placeholder="Border radius"
            type="number"
            min={0}
            max={50}
            step={0.5}
            value={card.borderRadius}
            onChange={(e) =>
              setCard((prev) => ({
                ...prev,
                borderRadius: e.target.valueAsNumber,
              }))
            }
          />
        </InputWrapper>
      </Flex>

      <Flex>
        <InputWrapper label="Show border">
          <TrueFalseInput
            value={card.showBorder}
            trueLabel="Show"
            falseLabel="Hide"
            setValue={(val) =>
              setCard((prev) => ({ ...prev, showBorder: val }))
            }
          />
        </InputWrapper>

        <InputWrapper label="Background">
          <TrueFalseInput
            value={!card.hideBg}
            trueLabel="Show"
            falseLabel="Hide"
            setValue={(val) => setCard((prev) => ({ ...prev, hideBg: !val }))}
          />
        </InputWrapper>

        <InputWrapper label="Show title">
          <TrueFalseInput
            value={!card.hideTitle}
            trueLabel="Show"
            falseLabel="Hide"
            setValue={(val) =>
              setCard((prev) => ({ ...prev, hideTitle: !val }))
            }
          />
        </InputWrapper>
      </Flex>
    </FormWrapper>
  );
};

export default PageFour;
