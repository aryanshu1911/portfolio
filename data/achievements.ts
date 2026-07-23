export interface Achievement {
  id: string;
  slug: string;

  category: string;
  badge: string;

  title: string;
  subtitle: string;
  description: string;

  overview?: string;

  organization?: string;
  location?: string;
  duration?: string;

  contributions?: string[];
  highlights?: string[];
  technologies?: string[];

  resources?: {
    label: string;
    href: string;
  }[];

  image: string;
  imagePosition?: string;

  date: string;
  cta: string;
  layout: "left" | "right";
}

// ------------------------------ IMD INTERNSHIP -----------------------------------------

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

  // -------------------------- CHAKRAVYUHA CTF 2025 ---------------------------------------

  {
    id: "chakravyuha-2025",
    slug: "chakravyuha-ctf-2025",
    category: "Cybersecurity Competition",
    badge: "Competition",
    title: "Chakravyuha CTF 2025",
    subtitle: "A 36-hour National-level CTF Competition",
    description:
      "Qualified among the nation's top participants by solving real-world cybersecurity challenges across multiple domains.",
    image: "/achievements/chakravyuha.png",
    date: "March 2025",
    cta: "Explore",
    layout: "right",
  },

// ----------------------- GOOGLE CYBERSECURITY CERTIFICATE ------------------------------------

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

// ---------------------------------- SAFEHIRE ------------------------------------------------- 

  {
  id: "safehire",
  slug: "safehire-research",
  category: "Research & Innovation",
  badge: "Research",
  title: "SafeHire",
  subtitle: "Digital Identity Verification System for Secure Recruitment",

  description:
    "A privacy-preserving recruitment verification framework leveraging Zero-Knowledge Proofs to combat identity fraud during hiring.",

  overview:
    "SafeHire was developed as our Final Year Major Project to address identity fraud in recruitment through privacy-preserving digital verification. The project evolved beyond a software prototype into a complete academic research initiative, including formal documentation, a research publication, and technical presentation. The work explored how Zero-Knowledge Proofs could enable trusted verification without exposing sensitive personal information.",

  organization:
    "Lokmanya Tilak College of Engineering",

  location:
    "Navi Mumbai, India",

  duration:
    "Academic Year 2025–2026",

  contributions: [
    "Participated in manual testing and system validation throughout development.",
    "Reviewed implementation workflows and project deliverables.",
    "Performed code review and quality verification with the development team.",
    "Contributed to technical documentation and project refinement.",
    "Co-authored the project documentation and research work."
  ],

  highlights: [
    "Completed as the Final Year Major Project.",
    "Prepared a comprehensive blackbook and technical project report.",
    "Authored and presented a research paper.",
    "Research paper published.",
    "Collaborated closely with the project team throughout the development lifecycle."
  ],

  technologies: [
    "Next.js",
    "Supabase",
    "Anon Aadhaar",
    "TypeScript",
  ],

  resources: [
    {
      label: "🌐 Live Demo",
      href: "https://safe-hire.in"
    },
    {
      label: "📄 Published Research Paper (PDF)",
      href: "https://drive.google.com/file/d/1G6IXlP6hUrpQm1VgvOOBxIVOmWwV9X6o/view?usp=sharing"
    }
  ],

  image: "/achievements/safe-hire.png",
  date: "2025–2026",
  cta: "Explore",
  layout: "right"
},

// ----------------------------------------- CHAKRAVYUHA 2.0 -----------------------------------------

  {
    id: "chakravyuha-2026",
    slug: "chakravyuha-ctf-2026",
    category: "Cybersecurity Competition",
    badge: "Competition",
    title: "Chakravyuha CTF 2.0",
    subtitle: "A 42-hour National-level CTF Competition",
    description:
      "Achieved a competitive national ranking by solving advanced cybersecurity challenges under time constraints.",
    image: "/achievements/chakravyuha2.png",
    date: "April 2026",
    cta: "Explore",
    layout: "left",
  },

// ----------------------------------------- HACKERS GAMBIT -----------------------------------------------

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
  layout: "right",
},
];