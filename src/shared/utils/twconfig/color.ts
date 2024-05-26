type NestedRecord = {
  [key: string]: string | NestedRecord;
};

const createConfigColors = ({
  colorTokens,
  variable = "--color",
}: {
  colorTokens: NestedRecord;
  variable?: string;
}): NestedRecord => {
  return Object.fromEntries(
    Object.entries(colorTokens).map(([key, value]) => {
      if (typeof value === "object") {
        return [key, createConfigColors({ colorTokens: value, variable: `${variable}-${key}` })];
      }
      return [key, `var(${variable}-${key})`];
    }),
  ) as NestedRecord;
};

const createThemeColorVariables = <T extends Record<string, NestedRecord>>(
  themeColorTokens: T,
  variable = "--color",
): {
  [key in keyof T]: Record<string, string>;
} => {
  return Object.fromEntries(
    Object.entries(themeColorTokens).map(([key, value]) => {
      const colorVariables: Record<string, string> = {};

      const func = (tokens: NestedRecord, prefix = variable) => {
        Object.entries(tokens).forEach(([k, v]) => {
          if (typeof v === "object") {
            func(v, `${prefix}-${k}`);
          } else {
            colorVariables[`${prefix}-${k}`] = v;
          }
        });
      };

      func(value);

      return [key, colorVariables];
    }),
  ) as {
    [key in keyof T]: Record<string, string>;
  };
};

export { createConfigColors, createThemeColorVariables };
