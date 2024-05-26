import type { Meta, StoryObj } from "@storybook/react";
import { Footer } from "./footer";

const meta: Meta<typeof Footer> = {
  component: Footer,
};

export default meta;

type Story = StoryObj<typeof Footer>;

const Template: Story = {
  render: args => <Footer {...args} />,
};

export const Default: Story = {
  ...Template,
  args: {},
  parameters: {
    layout: "fullscreen",
  },
};
