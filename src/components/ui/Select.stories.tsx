import Select from "./Select";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Select> = {
  title: "ui/Select",
  component: Select,
  // tags: ["autodocs"],
  args: {
    options: [
      { label: "Hungary", value: "hungary" },
      { label: "UK", value: "uk" },
      { label: "USA", value: "usa" },
    ],
    select: () => {},
    selected: { label: "Hungary", value: "hungary" },
    label: "Countries",
  },
};

export default meta;
type Story = StoryObj<typeof Select>;

export const BasicSelect: Story = {};

export const WithFilter: Story = {
  args: {
    filter: true,
  },
};
