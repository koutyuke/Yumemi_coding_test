import type { Meta, StoryObj } from "@storybook/react";
import { Link } from "./link";

const meta: Meta<typeof Link> = {
  component: Link,
};

export default meta;

type Story = StoryObj<typeof Link>;

const Template: Story = {
  render: args => <Link {...args} />,
};

export const Default: Story = {
  ...Template,
  args: {
    children: "Link",
    href: "/",
  },
};

export const External: Story = {
  ...Template,
  args: {
    children: "External Link",
    external: true,
    href: "/",
  },
};
