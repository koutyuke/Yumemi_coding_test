import type { Meta, StoryObj } from "@storybook/react";
import { Header } from "./header";

const meta: Meta<typeof Header> = {
  component: Header,
};

export default meta;

type Story = StoryObj<typeof Header>;

const Template: Story = {
  render: args => <Header {...args} />,
};

export const Default: Story = {
  ...Template,
  args: {},
  parameters: {
    layout: "fullscreen",
  },
};
