import type { Meta, StoryObj } from "@storybook/react";
import { PopulationClassSelector } from "./selector.presenter";

const meta: Meta<typeof PopulationClassSelector> = {
  component: PopulationClassSelector,
};

export default meta;

type Story = StoryObj<typeof PopulationClassSelector>;

const Template: Story = {
  render: args => (
    <div className="h-full min-h-svh w-[33svw]">
      <PopulationClassSelector {...args} />
    </div>
  ),
};

export const Default: Story = {
  ...Template,
  args: {
    onElderlyPopulationSelected: () => {},
    onProductivePopulationSelected: () => {},
    onYoungPopulationSelected: () => {},
    onTotalPopulationSelected: () => {},
  },
  parameters: {
    layout: "fullscreen",
  },
};
