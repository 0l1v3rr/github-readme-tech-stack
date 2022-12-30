import SectionTitle from "../components/text/SectionTitle";
import { VscSettings } from "react-icons/vsc";
import { IoHammerOutline } from "react-icons/io5";
import { AiOutlinePlus } from "react-icons/ai";
import SelectInput from "../components/input/SelectInput";
import GreenButton from "../components/buttons/GreenButton";
import { FC, useCallback, useState } from "react";
import LineInput from "../components/input/LineInput";
import { Card, Line, newCard } from "../types/card";
import { generateLink } from "../utils/generate";
import { useFetchThemes } from "../hooks/useFetchThemes";
import NumberInput from "../components/input/NumberInput";
import TrueFalseInput from "../components/input/TrueFalseInput";
import Input from "../components/input/Input";
import SecondaryButton from "../components/buttons/SecondaryButton";
import { validateBorderRadius, validateFontFamily } from "../utils/validate";

interface OptionsProps {
  setLink: (link: string) => void;
}

const Options: FC<OptionsProps> = (props) => {
  const themes = useFetchThemes();
  const [card, setCard] = useState<Card>(newCard());

  const updateLineCount = useCallback(
    (lineNumber: number) => {
      // storing just the line numbers in an array
      const lineNums: number[] = card.lines.map((x) => Number(x.lineNumber));

      // variable to store the result
      const updated: Line[] = [];

      for (let i = 1; i <= lineNumber; i++) {
        // if the card.lines contain line with this lineNumber
        if (lineNums.includes(i)) {
          updated.push(card.lines.filter((x) => x.lineNumber === `${i}`)[0]);
          continue;
        }

        // else push a new one
        updated.push({
          badges: [],
          lineNumber: `${i}`,
        });
      }

      setCard({ ...card, lines: updated });
    },
    [card]
  );

  const addLine = useCallback(
    (lineNumber: number) => {
      setCard({
        ...card,
        lines: [
          ...card.lines,
          {
            badges: [],
            lineNumber: `${lineNumber}`,
          },
        ],
      });
    },
    [card]
  );

  const updateLine = (line: Line) => {
    const lines = [...card.lines];

    lines[lines.findIndex((l) => l.lineNumber === line.lineNumber)] = line;

    setCard({ ...card, lines: lines });
  };

  return (
    <section
      className="border border-solid border-gh-border rounded-md 
        w-full lg:w-[45%]"
    >
      <SectionTitle icon={VscSettings} title="Options" />

      <div className="m-4 flex flex-col gap-4">
        <Input
          label="Title"
          placeholder="My Tech Stack"
          value={card.title}
          setValue={(v) => setCard({ ...card, title: v, lines: card.lines })}
          validate={() => ""}
        />

        <div className="flex items-center gap-4">
          <SelectInput
            label="Theme"
            options={themes}
            value={card.theme}
            setValue={(v) => setCard({ ...card, theme: v, lines: card.lines })}
            searchField={true}
          />

          <SelectInput
            label="Badge Align"
            options={["left", "center", "right"]}
            value={card.align}
            setValue={(v) => setCard({ ...card, align: v, lines: card.lines })}
          />
        </div>

        <div className="flex items-start gap-4">
          <SelectInput
            label="Font Weight"
            options={["thin", "normal", "semibold", "bold"]}
            value={card.fontWeight}
            setValue={(v) =>
              setCard({ ...card, fontWeight: v, lines: card.lines })
            }
          />

          <NumberInput
            label="Font Size"
            value={card.fontSize}
            setValue={(v) =>
              setCard({ ...card, fontSize: v, lines: card.lines })
            }
            minValue={15}
            maxValue={30}
          />
        </div>

        <Input
          label="Border Radius"
          placeholder="4.5"
          value={card.borderRadius}
          setValue={(v) =>
            setCard({ ...card, borderRadius: v, lines: card.lines })
          }
          helperText="A number between 0 and 50."
          validate={(val) => validateBorderRadius(val)}
        />

        <Input
          label="Font Family"
          placeholder="Segoe UI"
          value={card.fontFamily}
          setValue={(v) =>
            setCard({ ...card, fontFamily: v, lines: card.lines })
          }
          helperText="If the specified family doesn't exist, the default is used."
          validate={(val) => validateFontFamily(val)}
        />

        <div className="flex items-start gap-4">
          <NumberInput
            label="Gap"
            value={`${card.gap}`}
            setValue={(v) => setCard({ ...card, gap: v, lines: card.lines })}
            minValue={0}
            maxValue={30}
          />

          <NumberInput
            label="Line Height"
            value={`${card.lineHeight}`}
            setValue={(v) =>
              setCard({ ...card, lineHeight: v, lines: card.lines })
            }
            minValue={0}
            maxValue={30}
          />
        </div>

        <div className="flex items-start gap-4">
          <TrueFalseInput
            label="Show Border"
            value={card.showBorder}
            setValue={(v) =>
              setCard({ ...card, showBorder: v, lines: card.lines })
            }
          />

          <TrueFalseInput
            label="Hide Background"
            value={card.hideBg}
            setValue={(v) => setCard({ ...card, hideBg: v, lines: card.lines })}
          />
        </div>
      </div>

      <div className="my-4 flex flex-col gap-4 px-4">
        <div className="w-full h-[.8px] bg-gh-border mx-auto" />

        {card.lines.map((line) => (
          <LineInput
            line={line}
            updateLine={updateLine}
            key={line.lineNumber}
          />
        ))}

        <SecondaryButton
          onClick={() => addLine(card.lines.length + 1)}
          text="Add Line"
          icon={AiOutlinePlus}
          className="flex items-center justify-center gap-2"
        />

        <div className="w-full h-[.8px] bg-gh-border mx-auto" />

        <div className="flex items-stretch gap-3">
          <GreenButton
            icon={IoHammerOutline}
            onClick={() => props.setLink(generateLink(card))}
            disabled={
              !(
                validateBorderRadius(card.borderRadius) === "" &&
                validateFontFamily(card.fontFamily) === ""
              )
            }
            text="Generate"
          />

          <SecondaryButton
            onClick={() => setCard(newCard())}
            text="Reset"
            className="text-red-500 font-semibold"
          />
        </div>
      </div>
    </section>
  );
};

export default Options;
