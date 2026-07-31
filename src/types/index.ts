/**
 * Shared domain types. Every static data file is typed against these so the
 * data source can later be swapped for an API without touching the UI.
 */

export type ServiceCategory =
  | "bridal"
  | "groom"
  | "makeup"
  | "hair"
  | "skin"
  | "nails"
  | "grooming"
  | "wellness";

export interface Service {
  id: string;
  slug: string;
  name: string;
  category: ServiceCategory;
  tagline: string;
  description: string;
  longDescription: string;
  duration: string;
  priceFrom: number;
  priceTo: number;
  currency: string;
  occasions: string[];
  includes: string[];
  image: string;
  featured?: boolean;
}

export interface SalonPackage {
  id: string;
  slug: string;
  name: string;
  type: "bridal" | "groom" | "eid" | "event" | "party";
  summary: string;
  description: string;
  price: number;
  compareAtPrice?: number;
  currency: string;
  duration: string;
  bestFor: string;
  inclusions: string[];
  image: string;
  popular?: boolean;
}

export interface TeamMember {
  id: string;
  slug: string;
  name: string;
  role: string;
  experience: string;
  bio: string;
  specialties: string[];
  skills: { label: string; level: number }[];
  languages: string[];
  image: string;
  socials: { label: string; href: string }[];
}

export interface Testimonial {
  id: string;
  name: string;
  occasion: string;
  rating: number;
  quote: string;
  avatar: string;
  date: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: "Bridal" | "Party" | "Groom" | "Mehndi" | "Salon" | "Hair";
  image: string;
  description: string;
}

export interface Branch {
  id: string;
  slug: string;
  name: string;
  city: string;
  address: string;
  phone: string;
  hours: string;
  mapUrl: string;
  coordinates: { lat: number; lng: number };
  amenities: string[];
}

export interface BookingSlot {
  id: string;
  time: string;
  available: boolean;
}

export interface Faq {
  id: string;
  question: string;
  answer: string;
}

export interface Stat {
  id: string;
  value: string;
  label: string;
}

export interface Offer {
  id: string;
  title: string;
  detail: string;
  code: string;
  expires: string;
}

export interface NavLink {
  label: string;
  to: string;
}

export interface BeforeAfterItem {
  id: string;
  title: string;
  note: string;
  before: string;
  after: string;
}

export interface BookingDraft {
  name: string;
  phone: string;
  email: string;
  serviceId: string;
  date: string;
  time: string;
  branchId: string;
  notes: string;
}
