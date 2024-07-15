import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { InputForm } from "@/components/ui/form/FormExample";

const meta = {
  title: "Example/FormInput",
  component: InputForm,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
  args: { onClick: fn() },
} satisfies Meta<typeof InputForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
