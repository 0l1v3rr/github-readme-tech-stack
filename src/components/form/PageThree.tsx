import FormWrapper from "@/components/form/FormWrapper";
import Flex from "@/components/layout/Flex";
import Input from "@/components/ui/Input";
import InputWrapper from "@/components/ui/InputWrapper";
import Select from "@/components/ui/Select";
import { useMultistepContext } from "@/hooks/useMultistepContext";

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
            value={{ value: card.fontWeight, label: card.fontWeight }}
            onSelect={(val) => updateCard({ fontWeight: val.value })}
            label="Font Weight"
            options={[
              { label: "thin", value: "thin" },
              { label: "normal", value: "normal" },
              { label: "semibold", value: "semibold" },
              { label: "bold", value: "bold" },
            ]}
          />
        </InputWrapper>

        <InputWrapper label="Text Align">
          <Select
            value={{ value: card.titleAlign, label: card.titleAlign }}
            onSelect={(val) => updateCard({ titleAlign: val.value })}
            label="Text Align"
            options={[
              { label: "left", value: "left" },
              { label: "center", value: "center" },
              { label: "right", value: "right" },
            ]}
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
