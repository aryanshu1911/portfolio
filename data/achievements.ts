export interface Achievement {
  id: string;
  slug: string;

  category: string;
  badge: string;

  title: string;
  subtitle: string;
  description: string;

  organization?: string;
  location?: string;
  duration?: string;

  sections?: {
    title: string;
    content: string | string[];
  }[];

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
  featured?: boolean;

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
    featured: true,
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
    "A privacy-preserving digital identity verification framework designed to strengthen trust, security, and transparency throughout the modern recruitment process.",

  organization: "Lokmanya Tilak College of Engineering",
  location: "Navi Mumbai, Maharashtra, India",
  duration: "Academic Year 2025–2026",

  sections: [
    {
      title: "Overview",
      content:
        "SafeHire is a privacy-preserving digital identity verification framework developed as our Final Year Major Project to strengthen trust, security, and transparency in modern recruitment. The platform addresses challenges such as forged academic certificates, fake resumes, identity impersonation, and time-consuming manual background verification by introducing a secure digital identity known as the SafeHire ID. The framework leverages Zero-Knowledge Proofs (zk-SNARKs) through the Anon Aadhaar protocol, allowing candidates to verify their identity without revealing sensitive personal information. Government-issued identities are authenticated using XML digital signatures, while academic credentials are secured through SHA-256 hashing to ensure integrity and resistance against tampering. Fuzzy matching algorithms, including Jaro-Winkler and Levenshtein Distance, help identify inconsistencies across documents, while employer verification is performed using official Corporate Identification Number (CIN) records. To improve recruitment efficiency, SafeHire incorporates AI-assisted document analysis for validating resume information against trusted records while following a trust but verify approach. Combined with secure authentication, role-based access control, and row-level security, the platform establishes a scalable verification ecosystem that reduces hiring fraud and improves confidence in digital recruitment. The project also evolved into a comprehensive academic research initiative involving technical documentation, a published research paper, and technical presentation.",
    },

    {
      title: "Role & Contributions",
      content: [
        "Participated in manual testing and end-to-end system validation throughout the development lifecycle.",
        "Reviewed implementation workflows, project deliverables, and feature completeness with the development team.",
        "Performed code review and quality verification to improve software reliability and documentation accuracy.",
        "Contributed to technical documentation, project refinement, and preparation of the final project report.",
        "Co-authored the research paper and supported the academic presentation of the project.",
      ],
    },

    {
      title: "Academic Achievements",
      content: [
        "Successfully completed as the Final Year Major Project.",
        "Prepared a comprehensive blackbook and technical project documentation.",
        "Co-authored and presented a research paper based on the project.",
        "Research paper published following academic review.",
        "Demonstrated the practical application of privacy-preserving cryptography in digital recruitment systems.",
      ],
    },
  ],

  technologies: [
    "Next.js",
    "Supabase",
    "Anon Aadhaar",
    "Tailwind CSS",
    "TypeScript",
  ],

  resources: [
    {
      label: "Live Demo",
      href: "https://safe-hire.in",
    },
    {
      label: "Published Research Paper",
      href: "https://drive.google.com/file/d/1G6IXlP6hUrpQm1VgvOOBxIVOmWwV9X6o/view?usp=sharing",
    },
  ],

  image: "/achievements/safe-hire.png",

  date: "2025–2026",
  cta: "Explore",
  layout: "right",
  featured: true,
},

  // -------------------------- CHAKRAVYUHA CTF 2025 ---------------------------------------

  {
    id: "chakravyuha-2025",
    slug: "chakravyuha-ctf-2025",
    category: "Cybersecurity Competition",
    badge: "Competition",
    title: "Chakravyuha CTF 2025",
    subtitle: "A 42-hour National-level CTF Competition",
    description:
      "Qualified among the nation's top participants by solving real-world cybersecurity challenges across multiple domains.",
    image: "/achievements/chakravyuha.png",
    date: "March 2025",
    cta: "Explore",
    layout: "left",
    featured: true,
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
    layout: "right",
    featured: true,
  },

// ----------------------------------------- CHAKRAVYUHA 2.0 -----------------------------------------

  {
    id: "chakravyuha-2026",
    slug: "chakravyuha-ctf-2026",
    category: "Cybersecurity Competition",
    badge: "Competition",
    title: "Chakravyuha CTF 2.0",
    subtitle: "A 36-hour National-level CTF Competition",
    description:
      "Achieved a competitive national ranking by solving advanced cybersecurity challenges under time constraints.",
    image: "/achievements/chakravyuha2.png",
    date: "April 2026",
    cta: "Explore",
    layout: "left",
    featured: false,
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
  featured: false,
},
];