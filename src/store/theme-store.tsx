import { createContext, useCallback, useContext, useEffect, useMemo, useState, type ReactNode } from "react";
import type { ThemeOption } from "@/data/site";

const STORAGE_KEY = "zahraali-theme";

interface ThemeContextValue {
  theme: ThemeOption;
  resolved: "light" | "dark";
  setTheme: (t: ThemeOption) => void;
  toggle: () => void;
}

const ThemeContext = createContext<ThemeContextValue | null>(null);

const systemPrefersDark = () =>
  typeof window !== "undefined" && window.matchMedia?.("(prefers-color-scheme: dark)").matches;

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setThemeState] = useState<ThemeOption>("light");
  const [resolved, setResolved] = useState<"light" | "dark">("light");

  // Read the stored preference after hydration to avoid SSR mismatches.
  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY) as ThemeOption | null;
    if (stored) setThemeState(stored);
  }, []);

  useEffect(() => {
    const next = theme === "system" ? (systemPrefersDark() ? "dark" : "light") : theme;
    setResolved(next);
    document.documentElement.classList.toggle("dark", next === "dark");
    document.documentElement.style.colorScheme = next;
    window.localStorage.setItem(STORAGE_KEY, theme);
  }, [theme]);

  const setTheme = useCallback((t: ThemeOption) => setThemeState(t), []);
  const toggle = useCallback(
    () => setThemeState((prev) => (prev === "dark" ? "light" : "dark")),
    [],
  );

  const value = useMemo(() => ({ theme, resolved, setTheme, toggle }), [theme, resolved, setTheme, toggle]);
  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme must be used inside <ThemeProvider>");
  return ctx;
}
