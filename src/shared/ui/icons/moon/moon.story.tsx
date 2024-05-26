import type { Meta, StoryObj } from "@storybook/react";
import { MoonIcon } from "./moon";

const meta: Meta<typeof MoonIcon> = {
  component: MoonIcon,
};

export default meta;

type Story = StoryObj<typeof MoonIcon>;

const Template: Story = {
  render: args => <MoonIcon {...args} />,
};

export const Default = {
  ...Template,
  args: {},
};
