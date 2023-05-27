import FormWrapper from "@/components/form/FormWrapper";
import Flex from "@/components/layout/Flex";
import Input from "@/components/ui/Input";
import InputWrapper from "@/components/ui/InputWrapper";
import TrueFalseInput from "@/components/ui/TrueFalseInput";
import { useMultistepContext } from "@/hooks/useMultistepContext";

const PageFour = () => {
  const { card, updateCard } = useMultistepContext();

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
            onChange={(e) => updateCard({ width: e.target.valueAsNumber })}
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
              updateCard({ borderRadius: e.target.valueAsNumber })
            }
          />
        </InputWrapper>
      </Flex>

      <Flex>
        <InputWrapper label="Border">
          <TrueFalseInput
            value={card.showBorder}
            trueLabel="Show"
            falseLabel="Hide"
            setValue={(val) => updateCard({ showBorder: val })}
          />
        </InputWrapper>

        <InputWrapper label="Background">
          <TrueFalseInput
            value={!card.hideBg}
            trueLabel="Show"
            falseLabel="Hide"
            setValue={(val) => updateCard({ hideBg: !val })}
          />
        </InputWrapper>

        <InputWrapper label="Title">
          <TrueFalseInput
            value={!card.hideTitle}
            trueLabel="Show"
            falseLabel="Hide"
            setValue={(val) => updateCard({ hideTitle: !val })}
          />
        </InputWrapper>
      </Flex>
    </FormWrapper>
  );
};

export default PageFour;
