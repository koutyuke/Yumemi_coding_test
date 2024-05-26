import type { Meta, StoryObj } from "@storybook/react";
import { FigmaIcon } from "./figma";

const meta: Meta<typeof FigmaIcon> = {
  component: FigmaIcon,
};

export default meta;

type Story = StoryObj<typeof FigmaIcon>;

const Template: Story = {
  render: args => <FigmaIcon {...args} />,
};

export const Default = {
  ...Template,
  args: {
    className: "stroke-[#000] dark:stroke-[#fff] h-10 aspect-square",
  },
};
