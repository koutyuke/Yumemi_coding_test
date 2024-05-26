"use client";

import { FC, useEffect, useState } from "react";
import { useTheme } from "../hooks/useTheme";
import { ThemeToggle as ThemeTogglePresenter } from "./themeToggle.presenter";

const ThemeToggle: FC = () => {
  const { theme, toggleTheme } = useTheme();

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return <ThemeTogglePresenter theme={theme} toggleTheme={toggleTheme} />;
};

export { ThemeToggle };
