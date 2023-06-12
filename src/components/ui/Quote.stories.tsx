import Quote from "./Quote";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Quote> = {
  title: "ui/Quote",
  component: Quote,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Quote>;

export const Info: Story = {
  args: {
    variant: "info",
    children: "This is an info alert!",
  },
};

export const Success: Story = {
  args: {
    variant: "success",
    children: "This is a success alert!",
  },
};

export const Warning: Story = {
  args: {
    variant: "warning",
    children: "This is a warning alert!",
  },
};

export const Danger: Story = {
  args: {
    variant: "danger",
    children: "This is a danger alert!",
  },
};
