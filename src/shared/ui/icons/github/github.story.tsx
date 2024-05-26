import type { Meta, StoryObj } from "@storybook/react";
import { GitHubIcon } from "./github";

const meta: Meta<typeof GitHubIcon> = {
  component: GitHubIcon,
};

export default meta;

type Story = StoryObj<typeof GitHubIcon>;

const Template: Story = {
  render: args => <GitHubIcon {...args} />,
};

export const Default = {
  ...Template,
  args: {
    className: "fill-[#24292f] dark:fill-[#fff] h-10 aspect-square",
  },
};
