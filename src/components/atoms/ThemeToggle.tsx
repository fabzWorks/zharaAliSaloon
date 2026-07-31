import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/store/theme-store";

export function ThemeToggle() {
  const { resolved, toggle } = useTheme();
  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={resolved === "dark" ? "Switch to light mode" : "Switch to dark mode"}
      className="relative grid size-10 place-items-center rounded-full border border-border bg-card/70 text-foreground backdrop-blur transition-all duration-500 hover:border-accent hover:text-accent"
    >
      <Sun
        aria-hidden
        className="absolute size-4 transition-all duration-500 rotate-0 scale-100 dark:-rotate-90 dark:scale-0"
      />
      <Moon
        aria-hidden
        className="absolute size-4 transition-all duration-500 rotate-90 scale-0 dark:rotate-0 dark:scale-100"
      />
    </button>
  );
}
