import { colors as colorTokens } from "./src/design-system/colors";
import { breakpoints } from "./src/design-system/responsive";
import { createConfigColors, createThemeColorVariables } from "./src/shared/utils/twconfig";
import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";

const { light, dark, ...particular } = colorTokens;

const themeColorVariables = createThemeColorVariables({ light, dark });
const configColors = createConfigColors({ colorTokens: light });

const config: Config = {
  mode: "jit",
  content: ["./src/**/*.{tsx,ts}"],
  theme: {
    screens: breakpoints,
    colors: {
      ...particular,
      ...configColors,
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [
    // Color Theme
    plugin(({ addBase, addUtilities }) => {
      addBase({ ":root": themeColorVariables.light });
      addUtilities({
        ".light, [data-theme='light']": themeColorVariables.light,
        ".dark, [data-theme='dark']": themeColorVariables.dark,
      });
    }),
  ],
};
export default config;
