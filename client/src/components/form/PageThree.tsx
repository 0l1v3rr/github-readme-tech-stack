import { useMultistepContext } from "../../hooks/useMultistepContext";
import FormWrapper from "../ui/FormWrapper";
import Input from "../ui/Input";
import InputWrapper from "../ui/InputWrapper";
import Select from "../ui/Select";

const PageThree = () => {
  const { card, setCard } = useMultistepContext();

  return (
    <FormWrapper title="Title" className="gap-2">
      <div className="flex gap-4">
        <InputWrapper label="Title" htmlFor="title">
          <Input
            id="title"
            required
            placeholder="Title"
            value={card.title}
            onChange={(e) =>
              setCard((prev) => ({ ...prev, title: e.target.value }))
            }
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
            onChange={(e) =>
              setCard((prev) => ({ ...prev, fontFamily: e.target.value }))
            }
          />
        </InputWrapper>
      </div>

      <div className="flex gap-4">
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
            select={(val) =>
              setCard((prev) => ({ ...prev, fontWeight: val.value }))
            }
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
            select={(val) =>
              setCard((prev) => ({ ...prev, titleAlign: val.value }))
            }
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
            onChange={(e) =>
              setCard((prev) => ({ ...prev, fontSize: e.target.valueAsNumber }))
            }
          />
        </InputWrapper>
      </div>
    </FormWrapper>
  );
};

export default PageThree;
