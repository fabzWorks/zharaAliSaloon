import type { ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import salon from "@/assets/salon-interior.jpg";
import { Logo } from "@/components/atoms/Logo";
import { ThemeToggle } from "@/components/atoms/ThemeToggle";
import { brand } from "@/data/site";

export const authFieldClass =
  "h-11 w-full rounded-lg border border-input bg-background px-4 text-sm outline-none transition-colors duration-300 placeholder:text-muted-foreground focus:border-accent";
export const authLabelClass = "mb-2 block text-[0.6rem] uppercase tracking-[0.24em] text-muted-foreground";

export function AuthLayout({
  eyebrow,
  title,
  description,
  children,
  footer,
}: {
  eyebrow: string;
  title: string;
  description: string;
  children: ReactNode;
  footer?: ReactNode;
}) {
  return (
    <div className="grid min-h-screen lg:grid-cols-2">
      <div className="relative hidden overflow-hidden lg:block">
        <img src={salon} alt="Zahra Ali Beauty Atelier interior" className="size-full object-cover" width={1600} height={1000} />
        <div className="absolute inset-0 veil" aria-hidden />
        <div className="absolute inset-x-0 bottom-0 p-12 text-primary-foreground">
          <p className="font-display text-4xl leading-tight">{brand.tagline}</p>
          <p className="mt-3 text-xs uppercase tracking-[0.3em] opacity-80">{brand.established}</p>
        </div>
      </div>

      <div className="relative flex flex-col justify-center px-6 py-14 sm:px-12">
        <div className="absolute right-6 top-6 flex items-center gap-3">
          <ThemeToggle />
        </div>
        <div className="mx-auto w-full max-w-md">
          <Logo />
          <p className="eyebrow mt-10">{eyebrow}</p>
          <h1 className="mt-3 text-4xl leading-tight sm:text-5xl">{title}</h1>
          <p className="mt-3 text-sm text-muted-foreground">{description}</p>
          <div className="mt-8">{children}</div>
          {footer && <div className="mt-8 text-sm text-muted-foreground">{footer}</div>}
          <p className="mt-10 text-xs text-muted-foreground">
            <Link to="/" className="underline-sweep">
              ← Back to {brand.name}
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
