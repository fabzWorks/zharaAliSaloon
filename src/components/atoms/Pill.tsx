import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Pill({
  children,
  active,
  onClick,
  className,
}: {
  children: ReactNode;
  active?: boolean;
  onClick?: () => void;
  className?: string;
}) {
  const base =
    "inline-flex items-center rounded-full border px-4 py-1.5 text-[0.65rem] uppercase tracking-[0.2em] transition-all duration-400";
  if (!onClick) {
    return <span className={cn(base, "border-border bg-secondary/60 text-secondary-foreground", className)}>{children}</span>;
  }
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={cn(
        base,
        active
          ? "border-transparent gradient-accent text-primary-foreground glow-accent"
          : "border-border text-muted-foreground hover:border-accent hover:text-accent",
        className,
      )}
    >
      {children}
    </button>
  );
}
