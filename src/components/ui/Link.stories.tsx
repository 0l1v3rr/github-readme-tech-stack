import Link from "./Link";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Link> = {
  title: "ui/Link",
  component: Link,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Link>;

export const GitHub: Story = {
  args: {
    children: "GitHub",
    href: "https://github.com/0l1v3rr/github-readme-tech-stack",
  },
};
