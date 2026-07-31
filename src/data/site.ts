import type { Branch, NavLink } from "@/types";

export const brand = {
  name: "Zahra Ali",
  suffix: "Beauty Atelier",
  tagline: "Lahore's atelier for bridal, groom and everyday artistry",
  established: "Est. 2012 · Lahore",
};

export const navLinks: NavLink[] = [
  { label: "Home", to: "/" },
  { label: "Services", to: "/services" },
  { label: "Packages", to: "/packages" },
  { label: "Gallery", to: "/gallery" },
  { label: "Team", to: "/team" },
  { label: "Locations", to: "/locations" },
  { label: "Contact", to: "/contact" },
];

export const contact = {
  phone: "+92 300 4567 890",
  phoneHref: "tel:+923004567890",
  whatsapp: "+92 300 4567 890",
  whatsappHref: "https://wa.me/923004567890",
  email: "hello@zahraaliatelier.pk",
  emailHref: "mailto:hello@zahraaliatelier.pk",
  hours: "Mon – Sun · 10:00 AM – 9:00 PM",
  bookingNote: "Bridal consultations by appointment only.",
};

export const socials = [
  { label: "Instagram", href: "https://instagram.com", handle: "@zahraaliatelier" },
  { label: "Facebook", href: "https://facebook.com", handle: "/zahraaliatelier" },
  { label: "TikTok", href: "https://tiktok.com", handle: "@zahraali.atelier" },
  { label: "Pinterest", href: "https://pinterest.com", handle: "/zahraaliatelier" },
];

export const branches: Branch[] = [
  {
    id: "br-gulberg",
    slug: "gulberg",
    name: "Zahra Ali Gulberg — Flagship",
    city: "Lahore",
    address: "24-C, MM Alam Road, Gulberg III, Lahore",
    phone: "+92 300 4567 890",
    hours: "10:00 AM – 9:00 PM daily",
    mapUrl: "https://maps.google.com/?q=MM+Alam+Road+Gulberg+Lahore",
    coordinates: { lat: 31.5142, lng: 74.3487 },
    amenities: ["Bridal suite", "Groom suite", "Valet parking", "Skin clinic"],
  },
  {
    id: "br-dha",
    slug: "dha-phase-6",
    name: "Zahra Ali DHA Phase 6",
    city: "Lahore",
    address: "Plot 112, Sector B Commercial, DHA Phase 6, Lahore",
    phone: "+92 301 7788 220",
    hours: "11:00 AM – 9:00 PM daily",
    mapUrl: "https://maps.google.com/?q=DHA+Phase+6+Lahore",
    coordinates: { lat: 31.4712, lng: 74.4256 },
    amenities: ["Bridal suite", "Hair studio", "Nail bar", "Private parking"],
  },
  {
    id: "br-bahria",
    slug: "bahria-town",
    name: "Zahra Ali Bahria Town",
    city: "Lahore",
    address: "Sector C, Bahria Town Main Boulevard, Lahore",
    phone: "+92 302 9911 447",
    hours: "11:00 AM – 8:30 PM daily",
    mapUrl: "https://maps.google.com/?q=Bahria+Town+Lahore",
    coordinates: { lat: 31.3676, lng: 74.1841 },
    amenities: ["Groom suite", "Mehndi lounge", "Family rooms"],
  },
];

export const getBranchBySlug = (slug: string) => branches.find((b) => b.slug === slug);
export const getBranchById = (id: string) => branches.find((b) => b.id === id);

/** Static availability grid — replace with an API call later. */
export const bookingSlots = [
  { id: "t-1000", time: "10:00 AM", available: true },
  { id: "t-1130", time: "11:30 AM", available: true },
  { id: "t-1300", time: "1:00 PM", available: false },
  { id: "t-1430", time: "2:30 PM", available: true },
  { id: "t-1600", time: "4:00 PM", available: true },
  { id: "t-1730", time: "5:30 PM", available: false },
  { id: "t-1900", time: "7:00 PM", available: true },
  { id: "t-2030", time: "8:30 PM", available: true },
];

export const themeOptions = [
  { id: "light", label: "Light", description: "Ivory, blush and champagne" },
  { id: "dark", label: "Dark", description: "Plum velvet and rose gold" },
  { id: "system", label: "System", description: "Follow device preference" },
] as const;

export type ThemeOption = (typeof themeOptions)[number]["id"];
