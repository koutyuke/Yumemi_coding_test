import type { Meta, StoryObj } from "@storybook/react";
import { ThemeToggle } from "./themeToggle.presenter";

const meta: Meta<typeof ThemeToggle> = {
  component: ThemeToggle,
};

export default meta;

type Story = StoryObj<typeof ThemeToggle>;

const Template: Story = {
  render: args => <ThemeToggle {...args} />,
};

export const Light = {
  ...Template,
  args: {
    theme: "light",
    toggleTheme: () => {},
  },
};

export const Dark = {
  ...Template,
  args: {
    theme: "dark",
    toggleTheme: () => {},
  },
};
