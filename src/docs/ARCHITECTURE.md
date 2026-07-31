# Zahra Ali Beauty Atelier — Architecture Guide

> Note: this project runs on **TanStack Start v1** (React 19 + TypeScript + Vite + Tailwind v4),
> not Next.js. Routing is file-based under `src/routes/` and behaves like the App Router:
> each file is a route, `__root.tsx` is the shell/layout.

## Folder structure (Atomic Design)

```
src/
  assets/                  generated salon imagery (ES6 imports)
  components/
    atoms/                 Logo, LuxeButton, Pill, Reveal, SectionHeading, StarRating, ThemeToggle
    molecules/             ServiceCard, PackageCard, TeamCard, TestimonialCard, GalleryTile,
                           BranchCard, BookingForm
    organisms/             Navbar, Footer, Hero, ServicesSection, PackagesSection, TeamSection,
                           GallerySection, LocationSection, ContactSection, Sections.tsx
                           (Stats / Testimonials / BeforeAfter / OfferBanner / Faq)
    modals/                BookingModal, ServiceModal, PackageModal, TeamModal, GalleryLightbox
    templates/             SiteLayout (+ PageHeader), AuthLayout
    ui/                    shadcn primitives (dialog, accordion, …)
  data/                    services.ts, packages.ts, team.ts, content.ts, site.ts
  hooks/                   use-reveal.ts (scroll reveal observer)
  store/                   theme-store.tsx, booking-store.tsx (React context)
  types/                   all domain interfaces
  utils/                   format.ts (price/date helpers)
  routes/                  file-based pages
  styles.css               design system (tokens + utilities)
  docs/ARCHITECTURE.md     this file
```

## Routes

| Path | File | Purpose |
| --- | --- | --- |
| `/` | `routes/index.tsx` | Home: hero, stats, services, packages, before/after, gallery, team, reviews, offers, map, contact, FAQ |
| `/services` | `routes/services.tsx` | Full filterable service menu |
| `/packages` | `routes/packages.tsx` | Bridal / groom / Eid / event / party collections |
| `/gallery` | `routes/gallery.tsx` | Portfolio grid + lightbox + transformations |
| `/team` | `routes/team.tsx` | Artist profiles |
| `/locations` | `routes/locations.tsx` | Branch cards + map preview |
| `/contact` | `routes/contact.tsx` | Contact form + WhatsApp/call/email |
| `/booking` | `routes/booking.tsx` | Full-page booking flow |
| `/auth/login`, `/auth/signup`, `/auth/onboarding`, `/auth/forgot-password` | `routes/auth/*` | Branded auth UI |
| `/sitemap.xml` | `routes/sitemap[.]xml.ts` | SEO sitemap |

## Design system

All colour, gradient, shadow and motion values live in `src/styles.css` as
`oklch` tokens (`:root` for light, `.dark` for dark). Never hardcode colours in
components — use tokens/utilities:

- Colour tokens: `--background --foreground --primary --accent --blush --champagne --rosegold --lavender --plum --cream`
- Utilities: `surface-luxe`, `gradient-luxe`, `gradient-accent`, `text-gradient`, `veil`,
  `glow-accent`, `shadow-luxe`, `lift`, `zoom-media`, `underline-sweep`, `eyebrow`,
  `reveal` / `reveal-in`, `float-soft`, `shimmer`
- Fonts: Cormorant Garamond (display) + Jost (body), loaded via `<link>` in `__root.tsx`

## State

- `ThemeProvider` (`store/theme-store.tsx`) — light/dark/system, persisted to `localStorage`,
  applied by toggling `.dark` on `<html>`.
- `BookingProvider` (`store/booking-store.tsx`) — global booking modal. Any component calls
  `openBooking({ serviceId | packageId | branchId, source })`; the modal pre-fills the form.

Both providers are mounted once in `src/routes/__root.tsx`.

## Interactivity map

| Click target | Result |
| --- | --- |
| Any "Book now" | Opens `BookingModal` with pre-filled intent |
| Service card | `ServiceModal` → description, duration, price, occasions, inclusions, book CTA |
| Package card | `PackageModal` (Details) or booking modal (Book) |
| Team card | `TeamModal` → bio, specialties, skill bars, socials, book-with CTA |
| Gallery tile | `GalleryLightbox` with prev/next |
| Branch card | Updates map preview; "Book here" pre-selects the branch |

## Replacing static data with APIs

1. Every data file exports typed arrays matching `src/types/index.ts`.
2. Swap an export for a fetcher (`createServerFn` or TanStack Query) — component props are
   already typed against the same interfaces.
3. Form submissions have a single seam each:
   - `submitBooking()` in `components/molecules/BookingForm.tsx`
   - the `onSubmit` handler in `components/organisms/ContactSection.tsx`
4. Auth pages are UI-only; wire them to a real auth provider by replacing the local
   `useState` handlers.
