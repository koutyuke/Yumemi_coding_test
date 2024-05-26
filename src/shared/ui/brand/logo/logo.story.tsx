import type { Meta, StoryObj } from "@storybook/react";
import { BrandLogo } from "./logo";

const meta: Meta<typeof BrandLogo> = {
  component: BrandLogo,
};

export default meta;

type Story = StoryObj<typeof BrandLogo>;

const Template: Story = {
  render: args => <BrandLogo {...args} />,
};

export const Default: Story = {
  ...Template,
  args: {},
};

export const Small: Story = {
  ...Template,
  args: {
    size: "sm",
  },
};

export const Medium: Story = {
  ...Template,
  args: {
    size: "md",
  },
};

export const Large: Story = {
  ...Template,
  args: {
    size: "lg",
  },
};
