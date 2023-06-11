import TrueFalseInput from "./TrueFalseInput";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof TrueFalseInput> = {
  title: "ui/TrueFalseInput",
  component: TrueFalseInput,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof TrueFalseInput>;

export const YesOrNo: Story = {
  args: {
    value: true,
    setValue: () => {},
    trueLabel: "Yes",
    falseLabel: "No",
    className: "w-32",
  },
};
