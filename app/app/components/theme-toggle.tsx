"use client";

import { useEffect } from "react";
import { MoonIcon, SunIcon } from "@/components/icons";

export default function ThemeToggle() {
  useEffect(() => {
    const stored = localStorage.getItem("theme");
    const theme = stored === "light" || stored === "dark" ? stored : "dark";
    document.documentElement.setAttribute("data-theme", theme);
    const input = document.getElementById(
      "theme-controller",
    ) as HTMLInputElement | null;
    if (input) input.checked = theme === "dark";
  }, []);

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const theme = event.target.checked ? "dark" : "light";
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  };

  return (
    <div className="btn btn-circle btn-ghost btn-sm">
      <label className="swap swap-rotate" aria-label="Toggle color theme">
        <input
          id="theme-controller"
          type="checkbox"
          className="theme-controller"
          value="dark"
          onChange={onChange}
          aria-label="Toggle color theme"
        />
        <MoonIcon className="swap-on h-4 w-4" />
        <SunIcon className="swap-off h-4 w-4" />
      </label>
    </div>
  );
}