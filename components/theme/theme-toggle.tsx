"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export function ThemeToggle() {
  const { setTheme } = useTheme();

  return (
    <button
      type="button"
      className="icon-button"
      aria-label="Toggle color theme"
      title="Toggle color theme"
      onClick={() => {
        const currentTheme = document.documentElement.dataset.theme;
        setTheme(currentTheme === "light" ? "dark" : "light");
      }}
    >
      <Sun className="theme-icon theme-icon--sun" aria-hidden="true" size={18} />
      <Moon className="theme-icon theme-icon--moon" aria-hidden="true" size={18} />
    </button>
  );
}
