import { useMultistepContext } from "@/hooks/useMultistepContext";
import Flex from "../layout/Flex";
import FormWrapper from "../ui/FormWrapper";
import Input from "../ui/Input";
import InputWrapper from "../ui/InputWrapper";
import Select from "../ui/Select";

const PageThree = () => {
  const { card, updateCard } = useMultistepContext();

  return (
    <FormWrapper title="Title">
      <Flex>
        <InputWrapper label="Title" htmlFor="title">
          <Input
            id="title"
            required
            placeholder="Title"
            value={card.title}
            onChange={(e) => updateCard({ title: e.target.value })}
          />
        </InputWrapper>

        <InputWrapper
          label="Font Family"
          htmlFor="family"
          description="If the specified family doesn't exist, the default is used."
        >
          <Input
            id="family"
            placeholder="Font Family"
            value={card.fontFamily}
            onChange={(e) => updateCard({ fontFamily: e.target.value })}
          />
        </InputWrapper>
      </Flex>

      <Flex>
        <InputWrapper label="Font Weight">
          <Select
            options={[
              { label: "thin", value: "thin" },
              { label: "normal", value: "normal" },
              { label: "semibold", value: "semibold" },
              { label: "bold", value: "bold" },
            ]}
            label="Font Weight"
            selected={{ value: card.fontWeight, label: card.fontWeight }}
            select={(val) => updateCard({ fontWeight: val.value })}
          />
        </InputWrapper>

        <InputWrapper label="Text Align">
          <Select
            options={[
              { label: "left", value: "left" },
              { label: "center", value: "center" },
              { label: "right", value: "right" },
            ]}
            label="Text Align"
            selected={{ value: card.titleAlign, label: card.titleAlign }}
            select={(val) => updateCard({ titleAlign: val.value })}
          />
        </InputWrapper>

        <InputWrapper label="Font Size" htmlFor="font-size">
          <Input
            id="font-size"
            type="number"
            required
            min={8}
            max={48}
            placeholder="Font Size"
            value={card.fontSize}
            className="appearance-none"
            onChange={(e) => updateCard({ fontSize: e.target.valueAsNumber })}
          />
        </InputWrapper>
      </Flex>
    </FormWrapper>
  );
};

export default PageThree;
