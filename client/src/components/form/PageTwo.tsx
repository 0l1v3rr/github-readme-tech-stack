import FormWrapper from "../ui/FormWrapper";
import Link from "../ui/Link";
import Select from "../ui/Select";
import InputWrapper from "../ui/InputWrapper";
import Hr from "../ui/Hr";
import P from "../ui/P";
import Input from "../ui/Input";
import Quote from "../ui/Quote";
import { useThemes } from "../../hooks/useThemes";
import { useMultistepContext } from "../../hooks/useMultistepContext";
import Flex from "../layout/Flex";

const PageTwo = () => {
  const themes = useThemes();
  const { card, setCard } = useMultistepContext();

  return (
    <FormWrapper title="Customizing the theme">
      <P>
        First, please select the theme you would like to use. We have tons of
        ready-made themes you can use. The themes are available{" "}
        <Link href="https://github.com/0l1v3rr/github-readme-tech-stack/blob/master/docs/THEMES.md">
          here
        </Link>
        .
      </P>

      <Select
        id="themes"
        label="Themes"
        className="w-[50%]"
        filter={true}
        selected={{ label: card.theme, value: card.theme }}
        options={themes.map((theme) => ({
          label: theme,
          value: theme,
        }))}
        select={(val) => setCard((prev) => ({ ...prev, theme: val.value }))}
      />

      <Hr />

      <P>
        If none of these themes fits your needs, you can customize it below:
      </P>

      <Flex>
        <InputWrapper label="Background color" htmlFor="bg-color">
          <Input
            pattern="^[]{0}|#([a-fA-F0-9]{3}|[a-fA-F0-9]{6})$"
            placeholder="#0B0E14"
            className="w-full"
            id="bg-color"
            value={card.backgroundColor}
            onChange={(e) =>
              setCard((prev) => ({ ...prev, backgroundColor: e.target.value }))
            }
          />
        </InputWrapper>

        <InputWrapper label="Border color" htmlFor="border-color">
          <Input
            pattern="^[]{0}|#([a-fA-F0-9]{3}|[a-fA-F0-9]{6})$"
            placeholder="#151B26"
            className="w-full"
            id="border-color"
            value={card.borderColor}
            onChange={(e) =>
              setCard((prev) => ({ ...prev, borderColor: e.target.value }))
            }
          />
        </InputWrapper>
      </Flex>

      <Flex>
        <InputWrapper label="Title color" htmlFor="title-color">
          <Input
            pattern="^[]{0}|#([a-fA-F0-9]{3}|[a-fA-F0-9]{6})$"
            placeholder="#FF4747"
            className="w-full"
            id="title-color"
            value={card.titleColor}
            onChange={(e) =>
              setCard((prev) => ({ ...prev, titleColor: e.target.value }))
            }
          />
        </InputWrapper>

        <InputWrapper label="Badge color" htmlFor="badge-color">
          <Input
            pattern="^[]{0}|#([a-fA-F0-9]{3}|[a-fA-F0-9]{6})$"
            placeholder="#10151F"
            className="w-full"
            id="badge-color"
            value={card.badgeColor}
            onChange={(e) =>
              setCard((prev) => ({ ...prev, badgeColor: e.target.value }))
            }
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
