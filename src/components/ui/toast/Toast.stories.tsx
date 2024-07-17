import type { Meta, StoryObj } from "@storybook/react";
import { Toast } from "@/components/ui/toast/Toast";
import ToastExample from "@/components/ui/toast/ToastExample";

const meta = {
  title: "Example/Toast",
  component: Toast,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
  args: {},
} satisfies Meta<typeof Toast>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
  render: () => <ToastExample />,
};
