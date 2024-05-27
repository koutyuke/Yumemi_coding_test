import type { Meta, StoryObj } from "@storybook/react";
import { Checkbox } from "./checkbox";

const meta: Meta<typeof Checkbox> = {
  component: Checkbox,
};

export default meta;

type Story = StoryObj<typeof Checkbox>;

const Template: Story = {
  render: args => <Checkbox {...args} />,
};

export const Default: Story = {
  ...Template,
  args: {
    id: "checkbox",
    label: "Checkbox",
  },
};
