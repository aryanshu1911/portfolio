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
  badge: "Government Internship",

  title: "India Meteorological Department",
  subtitle: "Software Engineer Intern",

  description:
    "Contributed to the development of an operational Rainfall Forecast Verification & Analysis System for the India Meteorological Department (IMD), Mumbai. Built interactive dashboards, geospatial visualizations, file processing workflows, and automated forecast verification tools supporting district-wise rainfall analysis across Maharashtra.",

  organization: "Regional Meteorological Centre, Colaba, Mumbai",
  duration: "December 2025 – May 2026",

  sections: [
    {
      title: "Overview",
      content:
        "During my six-month internship at the India Meteorological Department (IMD), Mumbai Regional Meteorological Centre, I worked as one of the developers on an internal rainfall forecast verification platform. The application enables meteorological officials to compare district-wise rainfall forecasts with observed rainfall across Maharashtra using interactive dashboards, geospatial visualizations, automated verification metrics, and professional report generation."
    },
    {
      title: "My Contributions",
      content: [
        "Developed geospatial rainfall maps and district-level visualizations covering 36+ districts of Maharashtra, improving operational rainfall analysis and forecast interpretation.",
        "Built robust Excel/CSV file upload workflows with comprehensive input validation and reliable data processing.",
        "Contributed to the development of interactive dashboards and analytical visualizations for rainfall forecast verification.",
        "Performed automation testing, debugging, and workflow validation to improve application reliability before deployment.",
        "Collaborated with fellow developers and IMD scientists throughout the software development lifecycle."
      ]
    },
    {
      title: "Technical Highlights",
      content: [
        "Operational rainfall forecast verification using IMD's D+1 verification methodology.",
        "District-wise rainfall analysis and geospatial visualization across Maharashtra.",
        "Automated computation of forecast verification metrics including Hit Rate, False Alarms, Missed Events, POD, FAR, CSI, and Bias.",
        "Secure client-side processing of meteorological datasets aligned with government workflows.",
        "Automated generation of official verification reports for operational use."
      ]
    },
    {
      title: "Project Impact",
      content: [
        "Developed as part of an internal software solution for the India Meteorological Department, Mumbai Regional Meteorological Centre.",
        "Supported operational rainfall forecast verification across 36+ districts of Maharashtra.",
        "Digitized verification workflows through interactive dashboards, analytical visualizations, and automated reporting.",
        "Received positive feedback from the project mentor, an IMD Scientist, for the quality of the team's work during the internship."
      ]
    }
  ],

  technologies: [
    "Next.js",
    "React",
    "TypeScript",
    "Tailwind CSS",
    "GeoPandas",
    "docx",
    "date-fns",
    "Excel Processing"
  ],

  image: "/achievements/imd.png",

  date: "December 2025 – May 2026",
  cta: "View Details",
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

  organization: "Lokmanya Tilak College of Engineering, Navi Mumbai",
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
  cta: "View Details",
  layout: "right",
  featured: true,
},

  // -------------------------- CHAKRAVYUHA CTF 2025 ---------------------------------------

  {
  id: "chakravyuha-2025",
  slug: "chakravyuha-ctf-2025",

  category: "Cybersecurity Competition",
  badge: "CTF Finalist",

  title: "Chakravyuha CTF 2025",
  subtitle: "National-level Capture The Flag Competition",

  description:
    "Qualified for the offline grand finale of Chakravyuha CTF 2025 after successfully clearing two highly competitive online rounds among 450+ registered teams from across India, ultimately securing 4th place in the national finale.",

  organization:
    "CSESA (IoT & CSBT) in collaboration with PODS Technology Solutions Pvt. Ltd.",

  location: "Navi Mumbai, Maharashtra",

  duration: "February 2025",

  sections: [
    {
      title: "Overview",
      content:
        "Chakravyuha CTF 2025 was a multi-round national Capture The Flag (CTF) competition organized by CSESA (IoT & CSBT), Lokmanya Tilak College of Engineering, in collaboration with PODS Technology Solutions Pvt. Ltd. Competing as Team 'Chakravyuha Decoders', we advanced through two online qualification rounds to earn a place in the offline grand finale, demonstrating technical problem-solving, teamwork, and endurance under continuous time pressure."
    },

    {
      title: "Qualification Rounds",
      content: [
        "Competed in a 12-hour online qualification round, solving security challenges to secure progression to the next stage",
        "Successfully cleared the first qualification round by solving the highest possible number of cybersecurity challenges.",
        "Qualified among the Top 40 teams out of 100+ registered teams from across India.",
        "Completed an intensive 24-hour online elimination round with virtually no sleep between consecutive competition rounds.",
        "Maintained a Top 10 position for most of the second round before ultimately qualifying for the offline finale with Rank 15.",
        "Advanced to the on-campus grand finale hosted at LTCE among the Top 15 teams nationwide."
      ]
    },

    {
      title: "Final Round",
      content: [
        "Represented Team 'Chakravyuha Decoders' in the 6-hour on-campus finale hosted at LTCE.",
        "Worked collaboratively to prioritize challenges, divide responsibilities, and maximize the team's score within the limited competition window.",
        "Solved a high-value Cryptography challenge during the closing stages of the competition, significantly improving the team's standing.",
        "Finished the competition with an overall Rank 4 among the finalist teams."
      ]
    },

    {
      title: "Technical Highlights",
      content: [
        "Web & Binary Exploitation",
        "Cryptography",
        "Digital Forensics",
        "Open Source Intelligence (OSINT)",
        "Reverse Engineering",
        "Team-based Problem Solving",
        "Time-critical Incident Analysis"
      ]
    }
  ],

  technologies: [
  "Kali Linux",
  "Burp Suite",
  "Wireshark",
  "CyberChef",
  "Ghidra",
  "StegOnline",
  "Zsteg",
  "Binwalk",
  "John the Ripper",
  "Hashcat"
],

  resources: [
    {
      label: "Finalist Certificate",
      href: "/achievements/cert.jpeg"
    }
  ],

  image: "/achievements/chakravyuha.png",

  date: "February 2025",
  cta: "View Journey",
  layout: "left",
  featured: true,
},

// ----------------------- GOOGLE CYBERSECURITY CERTIFICATE ------------------------------------

  {
  id: "google-cybersecurity-certificate",
  slug: "google-cybersecurity-professional-certificate",

  category: "Professional Certification",
  badge: "Google",

  title: "Google Cybersecurity Professional Certificate",
  subtitle: "Industry-recognized cybersecurity certification",

  description:
    "Completed Google's comprehensive cybersecurity professional certification, gaining hands-on experience in security operations, threat analysis, incident response, network security, Linux administration, SQL, and Python while applying industry-standard tools and security frameworks.",

  organization: "Google via Coursera",

  duration: "June 2025",

  sections: [
    {
      title: "Overview",
      content:
        "The Google Cybersecurity Professional Certificate is an industry-recognized training program designed to build practical cybersecurity skills aligned with Security Operations Center (SOC) workflows. The program combines theoretical concepts with hands-on labs covering defensive security, system administration, networking, incident response, and security automation."
    },

    {
      title: "Core Learning Areas",
      content: [
        "Security principles, governance, risk management, and industry best practices.",
        "Linux system administration and command-line operations.",
        "SQL for querying, filtering, and investigating security-related data.",
        "Network architecture, protocols, and defensive security concepts.",
        "Security Information and Event Management (SIEM) fundamentals and log analysis.",
        "Incident detection, response, and documentation using structured security workflows.",
        "Threats, vulnerabilities, and common attack techniques.",
        "Python fundamentals for basic security automation and scripting."
      ]
    },

    {
      title: "Practical Skills Gained",
      content: [
        "Investigated simulated security incidents using structured analytical methodologies.",
        "Analyzed system and network logs to identify suspicious activity.",
        "Applied cybersecurity best practices for risk assessment and incident handling.",
        "Strengthened problem-solving skills through hands-on labs and scenario-based exercises.",
        "Developed a strong foundation for Security Operations Center (SOC) environments."
      ]
    }
  ],

  technologies: [
    "Linux",
    "SQL",
    "Python",
    "Chronicle SIEM",
    "Splunk",
    "Wireshark",
    "tcpdump",
    "Git",
    "Bash"
  ],

  resources: [
    {
      label: "View Certificate",
      href: "https://coursera.org/share/637fac305d9fc682fdc0cae022956a19"
    }
  ],

  image: "/achievements/google-cybersecurity.png",

  date: "June 2025",
  cta: "View Details",
  layout: "right",
  featured: true,
},

// ----------------------------------------- CHAKRAVYUHA 2.0 -----------------------------------------

  {
  id: "chakravyuha-2026",
  slug: "chakravyuha-ctf-2026",

  category: "Cybersecurity Competition",
  badge: "CTF Finalist",

  title: "Chakravyuha 2.0 CTF",
  subtitle: "National-level Capture The Flag Competition",

  description:
    "Qualified for the offline grand finale of Chakravyuha 2.0 CTF after successfully clearing two highly competitive online qualification rounds. Competed in a 42-hour multi-stage cybersecurity competition, demonstrating resilience, teamwork, and practical offensive security skills under continuous time pressure.",

  organization:
    "CSESA (IoT & CSBT) in collaboration with PODS Technology Solutions Pvt. Ltd.",

  location: "Navi Mumbai, Maharashtra",

  duration: "April 2026",

  sections: [
    {
      title: "Overview",
      content:
        "Chakravyuha 2.0 was a Minecraft-themed national Capture The Flag (CTF) competition organized by CSESA (IoT & CSBT), Lokmanya Tilak College of Engineering, in collaboration with PODS Technology Solutions Pvt. Ltd. Competing as Team 'Bedrock Breakers', we progressed through two online qualification rounds to reach the offline grand finale while solving progressively challenging cybersecurity problems across multiple domains."
    },

    {
      title: "Qualification Rounds",
      content: [
        "Competed in a 12-hour online qualification round, recovering from a low initial ranking by rapidly solving newly released challenge waves and climbing into the qualification zone.",
        "Successfully advanced to the 24-hour elimination round by consistently solving cybersecurity challenges across multiple domains.",
        "Worked continuously throughout the second round, collaboratively solving high-value challenges under sustained time pressure.",
        "Secured qualification for the offline grand finale after a last-minute breakthrough on a high-value challenge dramatically improved the team's leaderboard position.",
        "Advanced to the on-campus finale hosted at LTCE among the Top 15 qualifying teams."
      ]
    },

    {
      title: "Final Round",
      content: [
        "Represented Team 'Bedrock Breakers' in the 6-hour on-campus grand finale hosted at LTCE.",
        "Solved Python reverse engineering and cryptography challenges while collaborating closely with teammates on advanced multi-stage challenge scenarios.",
        "Contributed to solving a collaborative challenge that required continuous monitoring, coordinated analysis, and synchronized execution among team members.",
        "Worked together throughout the finale to maximize the team's overall score against the country's strongest qualifying teams."
      ]
    },

    {
      title: "Technical Highlights",
      content: [
        "Web & Binary Exploitation",
        "Cryptography",
        "Digital Forensics",
        "Open Source Intelligence (OSINT)",
        "Reverse Engineering",
        "Collaborative Challenge Solving",
        "Adaptive Problem Solving"
      ]
    }
  ],

  technologies: [
    "Kali Linux",
    "Burp Suite",
    "Wireshark",
    "CyberChef",
    "Ghidra",
    "StegOnline",
    "Zsteg",
    "Binwalk",
    "John the Ripper",
    "Hashcat"
  ],

  image: "/achievements/chakravyuha2.png",

  date: "April 2026",
  cta: "View Journey",
  layout: "left",
  featured: false,
},

// ----------------------------------------- HACKERS GAMBIT -----------------------------------------------

  {
  id: "hackers-gambit",
  slug: "hackers-gambit",

  category: "Cybersecurity Competition",
  badge: "Participant",

  title: "Hacker's Gambit CTF",
  subtitle: "OWASP National-Level Capture The Flag Competition",

  description:
    "Participated in Hacker's Gambit, an OWASP national-level Capture The Flag (CTF) competition, applying practical cybersecurity skills across web security, cryptography, digital forensics, reverse engineering, and offensive security challenges.",

  organization:
    "Jaihind College of Engineering (Kuran), Narayangaon",

  location: "Narayangaon, Maharashtra",

  duration: "October 2025",

  sections: [
    {
      title: "Overview",
      content:
        "Hacker's Gambit was an OWASP national-level Capture The Flag (CTF) competition organized by Jaihind College of Engineering (Kuran). The competition featured practical cybersecurity challenges spanning multiple offensive security domains, providing participants with hands-on experience in identifying vulnerabilities, analyzing systems, and solving real-world security problems."
    },

    {
      title: "Competition Experience",
      content: [
        "Participated in a national-level cybersecurity competition alongside students from multiple institutions.",
        "Worked through practical challenges covering multiple offensive security disciplines under competitive time constraints.",
        "Strengthened practical understanding of cybersecurity methodologies through hands-on problem solving."
      ]
    },

    {
      title: "Skills Demonstrated",
      content: [
        "Applied offensive security concepts to solve practical cybersecurity challenges.",
        "Strengthened analytical thinking and structured problem-solving techniques.",
        "Improved familiarity with common CTF workflows and cybersecurity tooling.",
        "Expanded practical exposure to real-world security scenarios."
      ]
    }
  ],

  technologies: [
    "Kali Linux",
    "Burp Suite",
    "Wireshark",
    "CyberChef",
    "Ghidra",
    "StegOnline",
    "Binwalk",
    "John the Ripper"
  ],

  resources: [
    {
      label: "View Certificate",
      href: "https://unstop.com/certificate-preview/0787ecd7-b350-43e2-ba47-936bc6a1c956"
    }
  ],

  image: "/achievements/hackers-gambit.png",
  imagePosition: "object-top",

  date: "October 2025",
  cta: "Explore",
  layout: "right",
  featured: false,
}
];