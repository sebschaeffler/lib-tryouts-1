import type { Meta, StoryObj } from "@storybook/react";
import { Toggle } from "@/components/ui/toggle/Toggle";

const meta = {
  title: "Example/Toggle",
  component: Toggle,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
  args: {},
} satisfies Meta<typeof Toggle>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    size: "default",
    variant: "default",
    children: <>Toggle me</>,
  },
};
