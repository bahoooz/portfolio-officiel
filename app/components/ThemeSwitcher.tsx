// app/components/ThemeSwitcher.tsx
"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Moon, Sun } from "@phosphor-icons/react";

const LoadingIcon = () => {
  return <div className="loading-icon"></div>;
};

export function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const { setTheme, resolvedTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <LoadingIcon />;
  if (resolvedTheme === "dark") {
    return (
      <Sun
        weight="fill"
        className="dark:text-white text-darkBrown cursor-pointer hover:scale-95 hover:opacity-90 transition-all"
        size={32}
        onClick={() => setTheme("light")}
      />
    );
  }
  if (resolvedTheme === "light") {
    return (
      <Moon
        weight="fill"
        className="dark:text-white text-darkBrown cursor-pointer hover:scale-95 hover:opacity-90 transition-all"
        size={32}
        onClick={() => setTheme("dark")}
      />
    );
  }
}
