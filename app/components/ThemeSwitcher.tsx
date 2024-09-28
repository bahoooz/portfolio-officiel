// app/components/ThemeSwitcher.tsx
"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { CircleNotch, Moon, Sun } from "@phosphor-icons/react";

export function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const { setTheme, resolvedTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <CircleNotch />;
  if (resolvedTheme === "dark") {
    return (
      <Sun
        weight="fill"
        className="dark:text-white text-darkBrown cursor-pointer"
        size={32}
        onClick={() => setTheme("light")}
      />
    );
  }
  if (resolvedTheme === "light") {
    return (
      <Moon
        weight="fill"
        className="dark:text-white text-darkBrown cursor-pointer"
        size={32}
        onClick={() => setTheme("dark")}
      />
    );
  }
}
