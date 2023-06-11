import Quote from "./Quote";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Quote> = {
  title: "ui/Quote",
  component: Quote,
  tags: ["autodocs"],
  args: {
    children: "This is a quote.",
  },
};

export default meta;
type Story = StoryObj<typeof Quote>;

export const Info: Story = {
  args: {
    variant: "Info",
  },
};

export const Note: Story = {
  args: {
    variant: "Note",
  },
};

export const Warning: Story = {
  args: {
    variant: "Warning",
  },
};
