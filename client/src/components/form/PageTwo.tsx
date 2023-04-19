import FormWrapper from "../ui/FormWrapper";
import Link from "../ui/Link";
import Select from "../ui/Select";
import InputWrapper from "../ui/InputWrapper";
import Hr from "../ui/Hr";
import P from "../ui/P";
import Input from "../ui/Input";
import Quote from "../ui/Quote";
import { useThemes } from "../../hooks/useThemes";

const PageTwo = () => {
  const themes = useThemes();

  return (
    <FormWrapper title="Customizing the theme" className="gap-2">
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
        selected={{ label: "github", value: "github" }}
        options={themes.map((theme) => ({
          label: theme,
          value: theme,
        }))}
        select={() => {
          console.log("hi");
        }}
      />

      <Hr />

      <P>
        If none of these themes fits your needs, you can customize it below:
      </P>

      <div className="flex gap-4">
        <InputWrapper label="Background color" htmlFor="bg-color">
          <Input placeholder="#0B0E14" className="w-full" id="bg-color" />
        </InputWrapper>

        <InputWrapper label="Border color" htmlFor="border-color">
          <Input placeholder="#151B26" className="w-full" id="border-color" />
        </InputWrapper>
      </div>

      <div className="flex gap-4">
        <InputWrapper label="Title color" htmlFor="title-color">
          <Input placeholder="#FF4747" className="w-full" id="title-color" />
        </InputWrapper>

        <InputWrapper label="Badge color" htmlFor="badge-color">
          <Input placeholder="#10151F" className="w-full" id="badge-color" />
        </InputWrapper>
      </div>

      <Quote variant="Warning">
        These values will override the selected theme's value!
      </Quote>
    </FormWrapper>
  );
};

export default PageTwo;
