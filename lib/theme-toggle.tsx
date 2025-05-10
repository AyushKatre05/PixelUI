"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

export function ThemeToggle() {
  const { setTheme, theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const isDark = theme === "dark";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="flex items-center justify-center w-9 h-9 rounded-md border border-border bg-background hover:bg-accent transition-all"
      title={`Switch to ${isDark ? "light" : "dark"} mode`}
    >
      {isDark ? (
        <Sun className="h-5 w-5 text-yellow-400 transition-transform duration-300 hover:rotate-45" />
      ) : (
        <Moon className="h-5 w-5 text-blue-600 transition-transform duration-300 hover:-rotate-45" />
      )}
    </button>
  );
}
