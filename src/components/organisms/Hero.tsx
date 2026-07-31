import { ArrowRight, MapPin, Sparkles, Star } from "lucide-react";
import { Link } from "@tanstack/react-router";
import heroImage from "@/assets/hero-bride.jpg";
import salon from "@/assets/salon-interior.jpg";
import { LuxeButton } from "@/components/atoms/LuxeButton";
import { brand } from "@/data/site";
import { useBooking } from "@/store/booking-store";

export function Hero() {
  const { openBooking } = useBooking();

  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 gradient-luxe" aria-hidden />
      <div className="absolute -left-24 top-24 size-72 rounded-full bg-rosegold/20 blur-3xl float-soft" aria-hidden />
      <div className="absolute -right-16 bottom-0 size-80 rounded-full bg-lavender/25 blur-3xl float-soft" aria-hidden />

      <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-5 py-20 sm:px-8 lg:grid-cols-2 lg:py-28">
        <div className="max-w-xl">
          <p className="eyebrow flex items-center gap-3">
            <span className="h-px w-10 bg-accent" aria-hidden />
            {brand.established}
          </p>

          <h1 className="mt-6 text-5xl leading-[1.02] sm:text-6xl lg:text-7xl">
            Bridal artistry with a
            <span className="text-gradient shimmer"> quiet kind of luxury</span>
          </h1>

          <p className="mt-6 max-w-lg text-base leading-relaxed text-foreground/75">
            {brand.name} is a Lahore atelier for Pakistani brides, grooms and everyone getting ready for the moments in
            between — makeup, hair, skin and mehndi under one roof.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            <LuxeButton size="lg" onClick={() => openBooking({ source: "hero" })}>
              <Sparkles aria-hidden className="size-4" /> Book appointment
            </LuxeButton>
            <Link to="/packages">
              <LuxeButton size="lg" variant="outline" type="button">
                Bridal packages <ArrowRight aria-hidden className="size-4" />
              </LuxeButton>
            </Link>
          </div>

          <dl className="mt-12 flex flex-wrap gap-x-10 gap-y-5">
            <div>
              <dt className="eyebrow">Rated</dt>
              <dd className="mt-1 flex items-center gap-2 font-display text-2xl">
                4.9 <Star aria-hidden className="size-4 fill-accent text-accent" />
              </dd>
            </div>
            <div>
              <dt className="eyebrow">Brides styled</dt>
              <dd className="mt-1 font-display text-2xl">900+</dd>
            </div>
            <div>
              <dt className="eyebrow">Ateliers</dt>
              <dd className="mt-1 flex items-center gap-2 font-display text-2xl">
                <MapPin aria-hidden className="size-4 text-accent" /> 3 in Lahore
              </dd>
            </div>
          </dl>
        </div>

        <div className="relative">
          <div className="relative overflow-hidden rounded-[2rem] shadow-luxe">
            <img
              src={heroImage}
              alt="Pakistani bride styled at Zahra Ali Beauty Atelier"
              width={1408}
              height={1760}
              className="aspect-4/5 w-full object-cover"
            />
            <div className="absolute inset-0 veil opacity-60" aria-hidden />
          </div>

          <div className="absolute -bottom-8 -left-4 hidden w-56 overflow-hidden rounded-2xl border border-border shadow-luxe sm:block lg:-left-10">
            <img src={salon} alt="Interior of the Zahra Ali flagship salon" loading="lazy" width={1600} height={1000} className="aspect-4/3 w-full object-cover" />
          </div>

          <div className="absolute -right-2 top-8 rounded-2xl border border-border bg-background/85 px-5 py-4 backdrop-blur-xl lg:-right-8">
            <p className="eyebrow">Next available</p>
            <p className="mt-1 font-display text-xl">Tomorrow · 2:30 PM</p>
          </div>
        </div>
      </div>
    </section>
  );
}
