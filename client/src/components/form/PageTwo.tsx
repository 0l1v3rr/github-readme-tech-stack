import FormWrapper from "../ui/FormWrapper";
import Link from "../ui/Link";
import Select from "../ui/Select";
import InputWrapper from "../ui/InputWrapper";
import Hr from "../ui/Hr";
import P from "../ui/P";
import Quote from "../ui/Quote";
import { useThemes } from "../../hooks/useThemes";
import { useMultistepContext } from "../../hooks/useMultistepContext";
import Flex from "../layout/Flex";
import ColorInput from "../ui/ColorInput";
import Button from "../ui/Button";
import { useCallback } from "react";
import axios from "axios";
import { Theme } from "../../types";

const PageTwo = () => {
  const themes = useThemes();
  const { card, updateCard } = useMultistepContext();

  const loadColors = useCallback(() => {
    axios
      .get<Theme>(
        `https://github-readme-tech-stack.vercel.app/api/themes/${card.theme}`
      )
      .then((res) =>
        updateCard({
          backgroundColor: res.data.backgroundColor,
          borderColor: res.data.borderColor,
          titleColor: res.data.titleColor,
          badgeColor: res.data.badgeColor,
        })
      );
  }, [card.theme, updateCard]);

  return (
    <FormWrapper title="Theme">
      <P>
        We have tons of ready-made themes you can use. The themes are available{" "}
        <Link href="https://github.com/0l1v3rr/github-readme-tech-stack/blob/master/docs/THEMES.md">
          here
        </Link>
        .
      </P>

      <Flex>
        <Select
          id="themes"
          label="Themes"
          className="w-[60%]"
          filter={true}
          selected={{ label: card.theme, value: card.theme }}
          options={themes.map((theme) => ({
            label: theme,
            value: theme,
          }))}
          select={(val) => updateCard({ theme: val.value })}
        />

        <Button label="Load Colors" onClick={loadColors} />
      </Flex>

      <Hr />

      <P>
        If none of these themes suits your needs, you can customize them below.
        By clicking the "Load Colors" button above, the colors of the selected
        theme will be loaded into the input fields below.
      </P>

      <Flex>
        <InputWrapper label="Background color" htmlFor="bg-color">
          <ColorInput
            placeholder="#0B0E14"
            id="bg-color"
            value={card.backgroundColor}
            onChange={(e) => updateCard({ backgroundColor: e.target.value })}
            setColor={(c) => updateCard({ backgroundColor: c })}
          />
        </InputWrapper>

        <InputWrapper label="Border color" htmlFor="border-color">
          <ColorInput
            placeholder="#151B26"
            id="border-color"
            value={card.borderColor}
            onChange={(e) => updateCard({ borderColor: e.target.value })}
            setColor={(c) => updateCard({ borderColor: c })}
          />
        </InputWrapper>
      </Flex>

      <Flex>
        <InputWrapper label="Title color" htmlFor="title-color">
          <ColorInput
            placeholder="#FF4747"
            id="title-color"
            value={card.titleColor}
            onChange={(e) => updateCard({ titleColor: e.target.value })}
            setColor={(c) => updateCard({ titleColor: c })}
          />
        </InputWrapper>

        <InputWrapper label="Badge color" htmlFor="badge-color">
          <ColorInput
            placeholder="#10151F"
            id="badge-color"
            value={card.badgeColor}
            onChange={(e) => updateCard({ badgeColor: e.target.value })}
            setColor={(c) => updateCard({ badgeColor: c })}
          />
        </InputWrapper>
      </Flex>

      <Quote variant="Warning">
        These values will override the selected theme's value!
      </Quote>
    </FormWrapper>
  );
};

export default PageTwo;
