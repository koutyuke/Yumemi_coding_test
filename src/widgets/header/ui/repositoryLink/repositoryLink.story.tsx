import type { Meta, StoryObj } from "@storybook/react";
import { RepositoryLink } from "./repositoryLink";

const meta: Meta<typeof RepositoryLink> = {
  component: RepositoryLink,
};

export default meta;

type Story = StoryObj<typeof RepositoryLink>;

const Template: Story = {
  render: args => <RepositoryLink {...args} />,
};

export const Default: Story = {
  ...Template,
  args: {},
};
