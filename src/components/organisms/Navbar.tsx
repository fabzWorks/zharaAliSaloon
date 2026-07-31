import { useEffect, useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { Logo } from "@/components/atoms/Logo";
import { ThemeToggle } from "@/components/atoms/ThemeToggle";
import { LuxeButton } from "@/components/atoms/LuxeButton";
import { navLinks } from "@/data/site";
import { useBooking } from "@/store/booking-store";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { openBooking } = useBooking();
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setMenuOpen(false), [pathname]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled ? "border-b border-border bg-background/85 backdrop-blur-xl" : "border-b border-transparent",
      )}
    >
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-6 px-5 sm:px-8" aria-label="Primary">
        <Logo />

        <ul className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <li key={link.to}>
              <Link
                to={link.to}
                className={cn(
                  "underline-sweep text-[0.68rem] uppercase tracking-[0.24em] transition-colors duration-300",
                  pathname === link.to ? "text-accent" : "text-foreground/75 hover:text-foreground",
                )}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <ThemeToggle />
          <LuxeButton className="hidden sm:inline-flex" size="sm" onClick={() => openBooking({ source: "navbar" })}>
            Book now
          </LuxeButton>
          <button
            type="button"
            onClick={() => setMenuOpen((v) => !v)}
            aria-expanded={menuOpen}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            className="grid size-10 place-items-center rounded-full border border-border lg:hidden"
          >
            {menuOpen ? <X aria-hidden className="size-4" /> : <Menu aria-hidden className="size-4" />}
          </button>
        </div>
      </nav>

      <div
        className={cn(
          "overflow-hidden border-t border-border bg-background/95 backdrop-blur-xl transition-all duration-500 lg:hidden",
          menuOpen ? "max-h-[32rem]" : "max-h-0 border-transparent",
        )}
      >
        <ul className="space-y-1 px-5 py-6">
          {navLinks.map((link) => (
            <li key={link.to}>
              <Link
                to={link.to}
                className="block rounded-lg px-3 py-3 text-sm uppercase tracking-[0.2em] text-foreground/80 transition-colors hover:bg-secondary hover:text-accent"
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li className="pt-3">
            <LuxeButton className="w-full" onClick={() => openBooking({ source: "mobile-nav" })}>
              Book now
            </LuxeButton>
          </li>
        </ul>
      </div>
    </header>
  );
}
