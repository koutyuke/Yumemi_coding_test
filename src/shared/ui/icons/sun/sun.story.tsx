import type { Meta, StoryObj } from "@storybook/react";
import { SunIcon } from "./sun";

const meta: Meta<typeof SunIcon> = {
  component: SunIcon,
};

export default meta;

type Story = StoryObj<typeof SunIcon>;

const Template: Story = {
  render: args => <SunIcon {...args} />,
};

export const Default: Story = {
  ...Template,
  args: {},
};
