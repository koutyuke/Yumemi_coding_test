import { useTheme as useNextTheme } from "next-themes";

const useTheme = (): {
  theme: "light" | "dark";
  toggleTheme: () => void;
  setTheme: (value: "light" | "dark") => void;
} => {
  const { theme, setTheme } = useNextTheme();

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return {
    theme: theme === "light" ? "light" : "dark",
    toggleTheme,
    setTheme: (value: "light" | "dark") => setTheme(value),
  };
};

export { useTheme };
