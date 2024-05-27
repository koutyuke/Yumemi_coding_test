import type { StorybookConfig } from "@storybook/nextjs";

const config: StorybookConfig = {
  stories: [
    {
      directory: "../src/_pages",
      files: "**/*.story.@(js|jsx|mjs|ts|tsx)",
      titlePrefix: "2 - Pages Layer",
    },
    {
      directory: "../src/widgets",
      files: "**/*.story.@(js|jsx|mjs|ts|tsx)",
      titlePrefix: "3 - Widgets Layer",
    },
    {
      directory: "../src/features",
      files: "**/*.story.@(js|jsx|mjs|ts|tsx)",
      titlePrefix: "4 - Features Layer",
    },
    {
      directory: "../src/entities",
      files: "**/*.story.@(js|jsx|mjs|ts|tsx)",
      titlePrefix: "5 - Entities Layer",
    },
    {
      directory: "../src/shared",
      files: "**/*.story.@(js|jsx|mjs|ts|tsx)",
      titlePrefix: "6 - Shared Layer",
    },
  ],
  addons: [
    "@storybook/addon-onboarding",
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@chromatic-com/storybook",
    "@storybook/addon-interactions",
    "@storybook/addon-a11y",
    "@storybook/addon-storysource",
  ],
  framework: {
    name: "@storybook/nextjs",
    options: {},
  },
  staticDirs: ["../public"],
};
export default config;
