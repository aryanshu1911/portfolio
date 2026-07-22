export interface Achievement {
  id: string;
  slug: string;
  category: string;
  badge: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  imagePosition?: string;
  date: string;
  cta: string;
  layout: "left" | "right";
}

export const achievements: Achievement[] = [
  {
    id: "imd",
    slug: "india-meteorological-department",
    category: "Government Experience",
    badge: "Government",
    title: "India Meteorological Department",
    subtitle: "Software Development Internship",
    description:
      "Developed a production-ready Rainfall Forecast Verification System during a six-month Government of India internship.",
    image: "/achievements/imd.png",
    date: "December 2025 – May 2026",
    cta: "Explore",
    layout: "left",
  },

  {
    id: "chakravyuha-2025",
    slug: "chakravyuha-ctf-2025",
    category: "Cybersecurity Competition",
    badge: "Competition",
    title: "Chakravyuha CTF 2025",
    subtitle: "Ranked 4/448 Teams in 36-hour National-level CTF",
    description:
      "Qualified among the nation's top participants by solving real-world cybersecurity challenges across multiple domains.",
    image: "/achievements/chakravyuha.png",
    date: "March 2025",
    cta: "Explore",
    layout: "right",
  },

  {
    id: "google-cybersecurity",
    slug: "google-cybersecurity-certificate",
    category: "Professional Certification",
    badge: "Certification",
    title: "Google Cybersecurity Professional Certificate",
    subtitle: "Google Career Certificate by Coursera",
    description:
      "Completed Google's professional cybersecurity program covering security operations, networking, Linux, SQL, and incident response.",
    image: "/achievements/google-cybersecurity.png",
    date: "June 2025",
    cta: "Explore",
    layout: "left",
  },

  {
    id: "safehire",
    slug: "safehire-research",
    category: "Research & Innovation",
    badge: "Research",
    title: "SafeHire",
    subtitle: "Digital Identity Verification System for Secure Recruitment",
    description:
      "Designed a privacy-preserving recruitment verification framework powered by Zero-Knowledge Proofs.",
    image: "/achievements/safe-hire.png",
    date: "2025 - 2026",
    cta: "Explore",
    layout: "right",
  },

  {
  id: "hackers-gambit",
  slug: "hackers-gambit",
  category: "Cybersecurity Competition",
  badge: "Competition",
  title: "Hacker's Gambit CTF",
  subtitle: "OWASP-level National Capture the Flag (CTF) Competition",
  description: "Demonstrated practical offensive security and digital forensics skills in a national-level CTF competition.",
  image: "/achievements/hackers-gambit.png",
  imagePosition: "object-top",
  date: "October 2025",
  cta: "Explore",
  layout: "left",
},

  {
    id: "chakravyuha-2026",
    slug: "chakravyuha-ctf-2026",
    category: "Cybersecurity Competition",
    badge: "Competition",
    title: "Chakravyuha CTF 2.0",
    subtitle: "Ranked 3/420 Teams in 42-hour National-level CTF",
    description:
      "Achieved a competitive national ranking by solving advanced cybersecurity challenges under time constraints.",
    image: "/achievements/chakravyuha2.png",
    date: "April 2026",
    cta: "Explore",
    layout: "right",
  },
];