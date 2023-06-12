import FormWrapper from "@/components/form/FormWrapper";
import Flex from "@/components/layout/Flex";
import Input from "@/components/ui/Input";
import InputWrapper from "@/components/ui/InputWrapper";
import Quote from "@/components/ui/Quote";
import Select from "@/components/ui/Select";
import { useMultistepContext } from "@/hooks/useMultistepContext";

const PageFive = () => {
  const { card, updateCard } = useMultistepContext();

  return (
    <FormWrapper title="Lines">
      <Flex>
        <InputWrapper label="Badges Align">
          <Select
            options={[
              { label: "left", value: "left" },
              { label: "center", value: "center" },
              { label: "right", value: "right" },
            ]}
            label="Badges Align"
            selected={{ value: card.align, label: card.align }}
            select={(val) => updateCard({ align: val.value })}
          />
        </InputWrapper>

        <InputWrapper
          label="Lines"
          description="The amount of lines you want to display on your card."
          htmlFor="lines"
        >
          <Input
            id="lines"
            type="number"
            min={1}
            max={6}
            value={card.lines.length}
            onChange={(e) =>
              updateCard({
                lines: Array.from({ length: e.target.valueAsNumber }).map(
                  (_, i) => ({ lineNumber: i + 1, badges: [] })
                ),
              })
            }
          />
        </InputWrapper>
      </Flex>

      <Flex>
        <InputWrapper
          label="Gap"
          description="The gap between the badges."
          htmlFor="gap"
        >
          <Input
            id="gap"
            type="number"
            min={0}
            max={32}
            value={card.gap}
            onChange={(e) => updateCard({ gap: e.target.valueAsNumber })}
          />
        </InputWrapper>

        <InputWrapper
          label="Line height"
          description="The gap between the lines."
          htmlFor="line-height"
        >
          <Input
            id="line-height"
            type="number"
            min={0}
            max={32}
            value={card.lineHeight}
            onChange={(e) => updateCard({ lineHeight: e.target.valueAsNumber })}
          />
        </InputWrapper>
      </Flex>

      <Quote variant="danger">
        If you change the Lines parameter, your previously set lines will be
        reset.
      </Quote>
    </FormWrapper>
  );
};

export default PageFive;
