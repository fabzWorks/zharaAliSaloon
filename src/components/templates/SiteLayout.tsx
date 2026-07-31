import type { ReactNode } from "react";
import { Navbar } from "@/components/organisms/Navbar";
import { Footer } from "@/components/organisms/Footer";
import { BookingModal } from "@/components/modals/BookingModal";

/** Page shell used by every marketing route: nav, content, footer, booking modal. */
export function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1 pt-20">{children}</main>
      <Footer />
      <BookingModal />
    </div>
  );
}

/** Standard inner page hero band. */
export function PageHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <section className="gradient-luxe">
      <div className="mx-auto max-w-4xl px-5 py-20 text-center sm:px-8 sm:py-24">
        <p className="eyebrow">{eyebrow}</p>
        <h1 className="mt-4 text-5xl leading-[1.05] sm:text-6xl">{title}</h1>
        <p className="mx-auto mt-5 max-w-2xl text-sm leading-relaxed text-foreground/70 sm:text-base">{description}</p>
      </div>
    </section>
  );
}
