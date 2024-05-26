"use client";

import { FC } from "react";
import { Button } from "@/shared/ui/button/button";
import { MoonIcon } from "@/shared/ui/icons/moon";
import { SunIcon } from "@/shared/ui/icons/sun";

type ThemeTogglePresenterProps = {
  theme: "light" | "dark";
  toggleTheme: () => void;
};

const ThemeToggle: FC<ThemeTogglePresenterProps> = ({ theme, toggleTheme }) => {
  return (
    <Button color="gray" onClick={toggleTheme} aria-label="Toggle Theme" title="Toggle Theme">
      {theme === "light" ? <SunIcon size={24} /> : <MoonIcon size={24} />}
    </Button>
  );
};

export { ThemeToggle };
