import SectionTitle from "../components/text/SectionTitle";
import { VscSettings } from "react-icons/vsc";
import { IoHammerOutline } from "react-icons/io5";
import SelectInput from "../components/input/SelectInput";
import GreenButton from "../components/buttons/GreenButton";
import { useRecoilState } from "recoil";
import {
  alignState,
  borderRadiusState,
  borderState,
  lineCountState,
  linesState,
  themeState,
  titleState,
} from "../atoms";
import { FC, useCallback, useEffect, useState } from "react";
import LineInput from "../components/input/LineInput";
import { Line } from "../types/line";
import { generateLink } from "../utils/generate";
import { useFetchThemes } from "../hooks/useFetchThemes";
import NumberInput from "../components/input/NumberInput";
import TrueFalseInput from "../components/input/TrueFalseInput";
import Input from "../components/input/Input";

interface OptionsProps {
  setLink: (link: string) => void;
}

const Options: FC<OptionsProps> = (props) => {
  const themes = useFetchThemes();
  const [lineChars, setLineChars] = useState(["1"]);

  const [title, setTitle] = useRecoilState<string>(titleState);
  const [lineCount, setLineCount] = useRecoilState<string>(lineCountState);
  const [theme, setTheme] = useRecoilState(themeState);
  const [align, setAlign] = useRecoilState(alignState);
  const [lines, setLines] = useRecoilState(linesState);
  const [showBorder, setShowBorder] = useRecoilState(borderState);
  const [borderRadius, setBorderRadius] = useRecoilState(borderRadiusState);

  useEffect(() => {
    // create an array with the numbers of lineCount to 1
    const res: string[] = [];
    for (let i = 1; i <= Number(lineCount); i++) {
      res.push(`${i}`);
      setLines((prev) => [
        ...prev,
        {
          badges: [],
          lineNumber: `${i}`,
        },
      ]);
    }
    setLineChars(res);
  }, [lineCount, setLineCount, setLines]);

  const updateLine = useCallback(
    (line: Line) => {
      setLines((prev) => {
        const res: Line[] = [];

        for (const l of [...prev]) {
          if (l.lineNumber === line.lineNumber) {
            res.push(line);
            continue;
          }

          res.push(l);
        }

        return res;
      });
    },
    [setLines]
  );

  return (
    <section className="border border-solid border-gh-border rounded-md w-full lg:w-[40%]">
      <SectionTitle icon={VscSettings} title="Options" />

      <div className="m-4 flex flex-col gap-4">
        <Input
          label="Title"
          placeholder="My Tech Stack"
          value={title}
          setValue={(val) => setTitle(val)}
          validate={() => ""}
        />

        <div className="flex items-center gap-4">
          <SelectInput
            label="Theme"
            options={themes}
            value={theme}
            setValue={setTheme}
          />

          <SelectInput
            label="Align"
            options={["left", "center", "right"]}
            value={align}
            setValue={(val) => setAlign(val)}
          />
        </div>

        <div className="flex items-start gap-4">
          <TrueFalseInput
            label="Border"
            setValue={(val) => setShowBorder(val)}
            value={showBorder}
          />

          <NumberInput
            label="Lines"
            value={lineCount}
            setValue={(val) => setLineCount(val)}
            minValue={1}
            maxValue={5}
          />
        </div>

        <Input
          label="Border Radius"
          placeholder="4.5"
          value={borderRadius}
          setValue={(val) => setBorderRadius(val)}
          helperText="A number between 0 and 50."
          validate={(val) => {
            const num = parseInt(val);

            if (val.trim() === "") {
              return "Please provide a border radius!";
            }

            if (isNaN(num)) {
              return "Please provide a number!";
            }

            return num > 50 || num < 0
              ? "Please provide a value between 0 and 50"
              : "";
          }}
        />
      </div>

      <div className="my-4 flex flex-col gap-4">
        <div className="w-[92%] h-[.8px] bg-gh-border mx-auto" />

        {lineChars.map((line) => (
          <LineInput line={line} updateLine={updateLine} key={line} />
        ))}

        <GreenButton
          icon={IoHammerOutline}
          onClick={() => {
            props.setLink(
              generateLink(
                title,
                lineCount,
                theme,
                align,
                lines,
                showBorder,
                borderRadius
              )
            );
          }}
          disabled={false}
          text="Generate"
        />
      </div>
    </section>
  );
};

export default Options;

