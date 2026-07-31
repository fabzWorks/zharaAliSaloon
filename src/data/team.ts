import type { TeamMember } from "@/types";
import t1 from "@/assets/team-1.jpg";
import t2 from "@/assets/team-2.jpg";
import t3 from "@/assets/team-3.jpg";
import t4 from "@/assets/team-4.jpg";

export const team: TeamMember[] = [
  {
    id: "team-ayesha",
    slug: "ayesha-siddiqui",
    name: "Ayesha Siddiqui",
    role: "Founder & Lead Bridal Artist",
    experience: "14 years",
    bio: "Ayesha trained in London and Karachi before opening Zahra Ali in Lahore. She has done over 900 brides and is known for a base that photographs true to skin — no flashback, no mask.",
    specialties: ["Signature bridal", "HD & airbrush", "Skin-matched bases", "Dupatta setting"],
    skills: [
      { label: "Bridal artistry", level: 98 },
      { label: "Colour matching", level: 95 },
      { label: "Editorial makeup", level: 88 },
    ],
    languages: ["Urdu", "English", "Punjabi"],
    image: t1,
    socials: [
      { label: "Instagram", href: "https://instagram.com" },
      { label: "TikTok", href: "https://tiktok.com" },
    ],
  },
  {
    id: "team-hamza",
    slug: "hamza-rauf",
    name: "Hamza Rauf",
    role: "Senior Hair Stylist & Groom Specialist",
    experience: "11 years",
    bio: "Hamza runs the hair floor and the groom suite. He specialises in balayage tuned for dark South Asian hair, and turban tying that survives a full baraat.",
    specialties: ["Balayage & colour", "Bridal updos", "Beard architecture", "Turban tying"],
    skills: [
      { label: "Hair colour", level: 96 },
      { label: "Groom styling", level: 93 },
      { label: "Keratin & repair", level: 90 },
    ],
    languages: ["Urdu", "English"],
    image: t2,
    socials: [{ label: "Instagram", href: "https://instagram.com" }],
  },
  {
    id: "team-nadia",
    slug: "dr-nadia-khan",
    name: "Dr. Nadia Khan",
    role: "Skin Specialist",
    experience: "16 years",
    bio: "A licensed aesthetic physician who designs every pre-bridal skin course at Zahra Ali. Nadia is conservative by design — she will talk you out of a treatment you don't need.",
    specialties: ["Chemical peels", "Microneedling", "Pigmentation", "Acne protocols"],
    skills: [
      { label: "Clinical skincare", level: 97 },
      { label: "Pigmentation care", level: 94 },
      { label: "Pre-bridal planning", level: 92 },
    ],
    languages: ["Urdu", "English"],
    image: t3,
    socials: [{ label: "LinkedIn", href: "https://linkedin.com" }],
  },
  {
    id: "team-sana",
    slug: "sana-tariq",
    name: "Sana Tariq",
    role: "Beautician & Mehndi Artist",
    experience: "8 years",
    bio: "Sana handles party makeup, nails and mehndi. Her contemporary minimal henna and festive Eid looks are the reason our Ramzan calendar fills first.",
    specialties: ["Party & Eid makeup", "Bridal mehndi", "Gel nails", "Brow design"],
    skills: [
      { label: "Mehndi artistry", level: 95 },
      { label: "Party makeup", level: 91 },
      { label: "Nail art", level: 89 },
    ],
    languages: ["Urdu", "English"],
    image: t4,
    socials: [
      { label: "Instagram", href: "https://instagram.com" },
      { label: "Pinterest", href: "https://pinterest.com" },
    ],
  },
];

export const getTeamMemberBySlug = (slug: string) => team.find((m) => m.slug === slug);
