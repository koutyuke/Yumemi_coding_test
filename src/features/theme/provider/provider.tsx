"use client";

import { ThemeProvider as NextThemeProvider } from "next-themes";
import { FC, ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const ThemeProvider: FC<Props> = ({ children }) => (
  <NextThemeProvider enableSystem={false} defaultTheme="light">
    {children}
  </NextThemeProvider>
);

export { ThemeProvider };
