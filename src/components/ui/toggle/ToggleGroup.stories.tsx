import type { Meta, StoryObj } from "@storybook/react";
import {
  ToggleGroup,
  ToggleGroupItem,
} from "@/components/ui/toggle/ToggleGroup";

const meta = {
  title: "Example/ToggleGroup",
  component: ToggleGroup,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
  args: {},
} satisfies Meta<typeof ToggleGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    size: "default",
    variant: "default",
    type: "single",
    children: (
      <>
        <ToggleGroupItem value="a">A</ToggleGroupItem>
        <ToggleGroupItem value="b">B</ToggleGroupItem>
        <ToggleGroupItem value="c">C</ToggleGroupItem>
      </>
    ),
  },
};
