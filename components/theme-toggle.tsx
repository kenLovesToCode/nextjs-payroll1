"use client";

import * as React from "react";
import { useTheme } from "next-themes";

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="w-10 h-10 p-2" />;
  }

  const isDark = resolvedTheme === "dark";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="p-2 text-slate-400 hover:text-[#2b6cee] transition-colors relative flex items-center justify-center rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800"
      aria-label="Toggle Dark Mode"
    >
      <span className="material-symbols-outlined text-xl">
        {isDark ? "light_mode" : "dark_mode"}
      </span>
    </button>
  );
}
