import { Link } from "@tanstack/react-router";
import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { Logo } from "@/components/atoms/Logo";
import { LuxeButton } from "@/components/atoms/LuxeButton";
import { brand, branches, contact, navLinks, socials } from "@/data/site";
import { useBooking } from "@/store/booking-store";

export function Footer() {
  const { openBooking } = useBooking();

  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 sm:px-8 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
        <div className="space-y-5">
          <Logo />
          <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">{brand.tagline}</p>
          <p className="eyebrow">{brand.established}</p>
          <LuxeButton size="sm" onClick={() => openBooking({ source: "footer" })}>
            Book an appointment
          </LuxeButton>
        </div>

        <div>
          <p className="eyebrow">Explore</p>
          <ul className="mt-5 space-y-3">
            {navLinks.map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="underline-sweep text-sm text-muted-foreground hover:text-foreground">
                  {l.label}
                </Link>
              </li>
            ))}
            <li>
              <Link to="/auth/login" className="underline-sweep text-sm text-muted-foreground hover:text-foreground">
                Client login
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <p className="eyebrow">Ateliers</p>
          <ul className="mt-5 space-y-4">
            {branches.map((b) => (
              <li key={b.id} className="text-sm text-muted-foreground">
                <span className="flex gap-2">
                  <MapPin aria-hidden className="mt-0.5 size-3.5 shrink-0 text-accent" />
                  <span>
                    <span className="block text-foreground">{b.name}</span>
                    {b.address}
                  </span>
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="eyebrow">Concierge</p>
          <ul className="mt-5 space-y-3 text-sm text-muted-foreground">
            <li>
              <a href={contact.phoneHref} className="flex items-center gap-2 underline-sweep hover:text-foreground">
                <Phone aria-hidden className="size-3.5 text-accent" /> {contact.phone}
              </a>
            </li>
            <li>
              <a
                href={contact.whatsappHref}
                target="_blank"
                rel="noreferrer noopener"
                className="flex items-center gap-2 underline-sweep hover:text-foreground"
              >
                <MessageCircle aria-hidden className="size-3.5 text-accent" /> WhatsApp concierge
              </a>
            </li>
            <li>
              <a href={contact.emailHref} className="flex items-center gap-2 underline-sweep hover:text-foreground">
                <Mail aria-hidden className="size-3.5 text-accent" /> {contact.email}
              </a>
            </li>
            <li className="pt-2">{contact.hours}</li>
          </ul>
          <div className="mt-6 flex flex-wrap gap-3">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer noopener"
                className="rounded-full border border-border px-3 py-1.5 text-[0.6rem] uppercase tracking-[0.2em] text-muted-foreground transition-colors hover:border-accent hover:text-accent"
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-border px-5 py-6 text-center text-xs text-muted-foreground sm:px-8">
        © {new Date().getFullYear()} {brand.name} {brand.suffix}. Crafted in Lahore.
      </div>
    </footer>
  );
}
