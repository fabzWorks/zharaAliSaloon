import { cva, type VariantProps } from "class-variance-authority";
import { forwardRef, type ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export const luxeButtonVariants = cva(
  "inline-flex items-center justify-center gap-2 rounded-full font-sans text-xs uppercase tracking-[0.2em] transition-all duration-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        solid: "gradient-accent text-primary-foreground hover:glow-accent hover:-translate-y-0.5",
        outline: "border border-border bg-transparent text-foreground hover:border-accent hover:text-accent",
        ghost: "text-foreground hover:bg-secondary",
        plum: "bg-primary text-primary-foreground hover:opacity-90 hover:-translate-y-0.5",
        veil: "border border-primary-foreground/40 bg-primary-foreground/10 text-primary-foreground backdrop-blur-md hover:bg-primary-foreground/20",
      },
      size: {
        sm: "h-9 px-4",
        md: "h-11 px-6",
        lg: "h-13 px-8 py-4",
      },
    },
    defaultVariants: { variant: "solid", size: "md" },
  },
);

export interface LuxeButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof luxeButtonVariants> {}

export const LuxeButton = forwardRef<HTMLButtonElement, LuxeButtonProps>(
  ({ className, variant, size, ...props }, ref) => (
    <button ref={ref} className={cn(luxeButtonVariants({ variant, size }), className)} {...props} />
  ),
);
LuxeButton.displayName = "LuxeButton";
