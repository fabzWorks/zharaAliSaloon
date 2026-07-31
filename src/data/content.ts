import type { BeforeAfterItem, Faq, GalleryItem, Offer, Stat, Testimonial } from "@/types";
import bridal from "@/assets/hero-bride.jpg";
import walima from "@/assets/gallery-walima.jpg";
import mehndiLook from "@/assets/gallery-mehndi-look.jpg";
import mehndi from "@/assets/mehndi.jpg";
import groom from "@/assets/groom.jpg";
import party from "@/assets/party-makeup.jpg";
import hair from "@/assets/hair.jpg";
import nails from "@/assets/nails.jpg";
import facial from "@/assets/facial.jpg";
import salon from "@/assets/salon-interior.jpg";
import t1 from "@/assets/team-1.jpg";
import t2 from "@/assets/team-2.jpg";
import t3 from "@/assets/team-3.jpg";
import t4 from "@/assets/team-4.jpg";

export const gallery: GalleryItem[] = [
  { id: "g1", title: "Baraat Bride — Ruby & Gold", category: "Bridal", image: bridal, description: "Classic red baraat look with a warm gold eye and a long-wear satin lip." },
  { id: "g2", title: "Walima in Blush Pearl", category: "Bridal", image: walima, description: "Soft rose walima styling with pearl jewellery and a luminous base." },
  { id: "g3", title: "Mehndi Emerald Look", category: "Mehndi", image: mehndiLook, description: "Festive emerald mehndi styling with floral jewellery and open waves." },
  { id: "g4", title: "Bridal Henna Detail", category: "Mehndi", image: mehndi, description: "Traditional Pakistani bridal henna with hidden initials in the motifs." },
  { id: "g5", title: "Groom in Ivory Sherwani", category: "Groom", image: groom, description: "Groom grooming with beard architecture and matte camera finish." },
  { id: "g6", title: "Evening Soft Glam", category: "Party", image: party, description: "Reception soft-glam with glass skin and a rose-mauve lip." },
  { id: "g7", title: "Glossy Blowout", category: "Hair", image: hair, description: "Volume blowout with a mirror-shine finish for a dholki night." },
  { id: "g8", title: "Bridal Hands", category: "Salon", image: nails, description: "Almond gel manicure in nude rose, shaped to complement mehndi." },
  { id: "g9", title: "Skin Ritual Bar", category: "Salon", image: facial, description: "Our treatment bar — medical-grade actives, sanitised and single-use." },
  { id: "g10", title: "The Blush Room", category: "Salon", image: salon, description: "Private styling suite with daylight-balanced mirrors." },
];

export const beforeAfter: BeforeAfterItem[] = [
  { id: "ba1", title: "Bridal Transformation", note: "10-week skin course, then baraat artistry", before: salon, after: bridal },
  { id: "ba2", title: "Groom Refinement", note: "Facial course + beard architecture", before: facial, after: groom },
  { id: "ba3", title: "Party Glow", note: "Hydra-glow facial, then evening glam", before: hair, after: party },
];

export const testimonials: Testimonial[] = [
  { id: "r1", name: "Mahnoor Zaidi", occasion: "Baraat Bride, DHA Lahore", rating: 5, quote: "I cried at the rukhsati and my base did not move. Ayesha understood exactly the look I described and made it better.", avatar: t1, date: "Feb 2026" },
  { id: "r2", name: "Bilal Ahmed", occasion: "Groom, Walima", rating: 5, quote: "Booked the Signature Groom package. The beard line-up and matte finish made a huge difference in the photos.", avatar: t2, date: "Jan 2026" },
  { id: "r3", name: "Dr. Farah Iqbal", occasion: "Pre-Bridal Skin Course", rating: 5, quote: "Nadia actually removed two treatments from my plan because I didn't need them. That honesty is rare.", avatar: t3, date: "Dec 2025" },
  { id: "r4", name: "Zoya Rehman", occasion: "Eid Package", rating: 5, quote: "The chaand raat mehndi and Eid morning look were both flawless, and they ran perfectly on time.", avatar: t4, date: "Apr 2026" },
  { id: "r5", name: "Hira Malik", occasion: "Dholki Party Makeup", rating: 4, quote: "Beautiful soft glam and lovely staff. Only note is that parking at Gulberg gets busy on weekends.", avatar: t1, date: "Nov 2025" },
  { id: "r6", name: "Ammara Sheikh", occasion: "Photoshoot Prep", rating: 5, quote: "Our photographer said it was the cleanest base she had shot all year. No flashback under studio strobes.", avatar: t4, date: "Mar 2026" },
];

export const stats: Stat[] = [
  { id: "s1", value: "900+", label: "Brides styled" },
  { id: "s2", value: "14", label: "Years of artistry" },
  { id: "s3", value: "4.9", label: "Average rating" },
  { id: "s4", value: "3", label: "Lahore ateliers" },
];

export const faqs: Faq[] = [
  { id: "f1", question: "How far in advance should I book my bridal date?", answer: "Peak season dates (November to February) are typically reserved 6–9 months ahead. Off-season, 8–10 weeks is usually comfortable. A 30% retainer confirms the date." },
  { id: "f2", question: "Do you travel to the venue or a home address?", answer: "Yes. On-location artistry is available across Lahore with a travel fee, and outstation bookings for Islamabad, Karachi and destination weddings can be arranged with travel and stay covered." },
  { id: "f3", question: "Is a bridal trial included?", answer: "A trial is included in every bridal package and in the Classic Bridal Day. We recommend booking it 4–6 weeks before the function, wearing a neutral top and bringing your jewellery." },
  { id: "f4", question: "Which products do you use?", answer: "We work with professional, cruelty-free lines and keep a hypoallergenic kit for sensitive skin. Tell us about allergies at booking and we will patch-test in advance." },
  { id: "f5", question: "Do you offer male grooming?", answer: "Yes — a private groom suite is available at our Gulberg and Bahria Town ateliers with a dedicated entrance and male staff on request." },
  { id: "f6", question: "What is your cancellation policy?", answer: "Retainers are transferable to another date within 6 months. Cancellations more than 21 days before the booking receive a 50% refund of the retainer." },
];

export const offers: Offer[] = [
  { id: "o1", title: "Bridal season early booking", detail: "Save 15% on the Royal Bridal Collection when you confirm 4 months ahead.", code: "ZAHRA15", expires: "31 Aug 2026" },
  { id: "o2", title: "Eid Glow bundle", detail: "Mehndi + Eid makeup + blow-dry at a bundled rate.", code: "EIDGLOW", expires: "Eid week" },
  { id: "o3", title: "Refer a bride", detail: "Both of you receive a complimentary hydra-glow facial.", code: "REFERGLOW", expires: "Ongoing" },
];
