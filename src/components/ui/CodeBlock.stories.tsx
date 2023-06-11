import CodeBlock from "./CodeBlock";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof CodeBlock> = {
  title: "ui/CodeBlock",
  component: CodeBlock,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof CodeBlock>;

export const HTML: Story = {
  args: {
    code: '<div class="bg-red-500">Hello</div>',
    language: "xml",
  },
};

export const JavaScript: Story = {
  args: {
    code: `const greet = (name) => {
  console.log(\`Hello, \${name}!\`);
}`,
    language: "javascript",
  },
};
