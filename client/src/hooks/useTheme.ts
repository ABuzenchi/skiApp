import { useEffect, useState } from "react";

const useTheme = () => {
  const [mode, setMode] = useState<"light" | "dark">("light");

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleChange = (e: MediaQueryListEvent) =>
      onSelectMode(e.matches ? "dark" : "light");

    mediaQuery.addEventListener("change", handleChange);
    onSelectMode(mediaQuery.matches ? "dark" : "light");

    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  const onSelectMode = (newMode: "light" | "dark") => {
    setMode(newMode);
    if (newMode === "dark") {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  };

  return { mode, onSelectMode };
};

export default useTheme;
