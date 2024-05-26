import customColors from "./custom-colors.json";
import radixColors from "./radix-colors.json";

const colors = {
  transparent: "transparent",
  current: "currentColor",
  light: {
    ...radixColors.light,
    ...customColors.light,
  },
  dark: {
    ...radixColors.dark,
    ...customColors.dark,
  },
};

export { colors };
