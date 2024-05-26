import type { Meta, StoryObj } from "@storybook/react";
import { BrandIcon } from "./icon";

const meta: Meta<typeof BrandIcon> = {
  component: BrandIcon,
};

export default meta;

type Story = StoryObj<typeof BrandIcon>;

const Template: Story = {
  render: args => <BrandIcon {...args} />,
};

export const Default: Story = {
  ...Template,
  args: {
    size: "md",
  },
};
