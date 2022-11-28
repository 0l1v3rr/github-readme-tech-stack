import SectionTitle from "../components/text/SectionTitle";
import { VscSettings } from "react-icons/vsc";
import { IoHammerOutline } from "react-icons/io5";
import Input from "../components/input/Input";
import { useState } from "react";
import SelectInput from "../components/input/SelectInput";
import GreenButton from "../components/buttons/GreenButton";

const Options = () => {
  const [title, setTitle] = useState<string>("My Tech Stack");
  const [lineCount, setLineCount] = useState<string>("1");

  return (
    <section className="border border-solid border-gh-border rounded-md w-[40%]">
      <SectionTitle icon={VscSettings} title="Options" />

      <div className="my-4 flex flex-col gap-4">
        <Input
          label="Title"
          placeholder="My Tech Stack"
          type="text"
          value={title}
          setValue={setTitle}
        />

        <Input
          label="Line count"
          placeholder="1"
          type="number"
          value={lineCount}
          setValue={setLineCount}
        />

        <SelectInput
          label="Theme"
          options={["github", "github_dark"]}
          selectedIndex={0}
          setValue={setLineCount}
        />

        <SelectInput
          label="Align"
          options={["left", "center", "right"]}
          selectedIndex={0}
          setValue={setLineCount}
        />

        <GreenButton
          icon={IoHammerOutline}
          onClick={() => {}}
          text="Generate"
        />
      </div>
    </section>
  );
};

export default Options;
