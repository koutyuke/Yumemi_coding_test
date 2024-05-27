import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";
import type { Preview } from "@storybook/react";
import "../src/app/globals.css";
import React from "react";
import { ThemeProvider } from "../src/features/theme/provider";
import { Provider as JotaiProvider } from "jotai";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    viewport: {
      viewports: INITIAL_VIEWPORTS,
    },
    layout: "centered",
  },
  decorators: [
    Story => (
      <JotaiProvider>
        <ThemeProvider>
          <Story />
        </ThemeProvider>
      </JotaiProvider>
    ),
  ],
};

export default preview;
