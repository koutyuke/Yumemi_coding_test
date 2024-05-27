import type { Meta, StoryObj } from "@storybook/react";
import { Radio } from "./radio";

const meta: Meta<typeof Radio> = {
  component: Radio,
};

export default meta;

type Story = StoryObj<typeof Radio>;

const Template: Story = {
  render: args => <Radio {...args} />,
};

export const Default: Story = {
  ...Template,
  args: {
    id: "radio",
    label: "Radio",
  },
};
