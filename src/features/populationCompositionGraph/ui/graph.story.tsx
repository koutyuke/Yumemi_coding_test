import type { Meta, StoryObj } from "@storybook/react";
import { PopulationCompositionGraph } from "./graph.presenter";

const meta: Meta<typeof PopulationCompositionGraph> = {
  component: PopulationCompositionGraph,
};

export default meta;

type Story = StoryObj<typeof PopulationCompositionGraph>;

const Template: Story = {
  render: args => (
    <div className="h-[75svh] w-[75svw]">
      <PopulationCompositionGraph {...args} />
    </div>
  ),
};

export const Default: Story = {
  ...Template,
  args: {
    years: {
      min: 2010,
      max: 2030,
      border: 2020,
    },
    data: [
      { year: 2010, 茨城県: 140, 東京都: 28, 栃木県: 84, 埼玉県: 56 },
      { year: 2015, 茨城県: 100, 東京都: 20, 栃木県: 60, 埼玉県: 40 },
      { year: 2020, 茨城県: 110, 東京都: 22, 栃木県: 66, 埼玉県: 42 },
      { year: 2025, 茨城県: 120, 東京都: 24, 栃木県: 72, 埼玉県: 44 },
      { year: 2030, 茨城県: 130, 東京都: 26, 栃木県: 78, 埼玉県: 46 },
    ],
    prefectures: ["茨城県", "東京都", "栃木県", "埼玉県"],
  },
};
