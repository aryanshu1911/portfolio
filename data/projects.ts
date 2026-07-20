import type { Project } from "@/types/project";

export const projects: Project[] = [
  {
    id: "sentinelai",
    title: "SentinelAI",
    subtitle: "AI-powered Network Anomaly Detection System",
    status: "development",
    homepage: true,
    featured: true,


    summary:
      "Cybersecurity platform leveraging machine learning to detect malicious network traffic, prioritize security alerts, and simulate SOC workflows.",

    techStack: [
      "Python",
      "FastAPI",
      "Scikit-learn",
      "Random Forest"
    ],

    highlights: [
      "Random Forest model achieving 86.9% accuracy on UNSW-NB15",
      "AI-powered anomaly detection and dynamic risk scoring",
      "SOC-style alert prioritization and incident workflows",
      "Explainable ML pipeline with SHAP roadmap",
    ],

    github: "https://github.com/aryanshu1911/Anomaly-Detection-System",
  },

  {
    id: "voices",
    title: "Voices Unchained",
    subtitle: "Anonymous Incident Reporting System",
    status: "live",
    homepage: true,
    featured: true,

    summary:
      "Secure incident reporting platform with decentralized evidence storage, role-based access control, and blockchain-backed integrity verification.",

    techStack: [
      "Web3",
      "React",
      "Node.js",
      "MongoDB"
    ],

    highlights: [
      "Role-based incident management workflows",
      "IPFS-backed decentralized evidence storage",
      "Blockchain-backed tamper-proof verification",
      "Authentication, rate limiting, and secure APIs",
    ],

    github: "https://github.com/aryanshu1911/Decentralized-Incident-Reporting-System",
  },

  {
    id: "fraudtect",
    title: "FrauDTect AI",
    subtitle: "Hybrid AI-Powered Scam Detection Platform",
    status: "completed",
    homepage: true,
    featured: true,

    summary:
      "Machine learning application for identifying fraudulent messages using NLP techniques.",

    techStack: [
      "Python",
      "Scikit-learn",
      "Logistic Regression",
      "VirusTotal API",
    ],

    highlights: [
      "Hybrid ML + rule-based scam detection pipeline",
      "Explainable AI with transparent reasoning engine",
      "WHOIS, VirusTotal, and URLScan integrations",
      "~99% validation accuracy on balanced dataset",
    ],

    github: "https://github.com/aryanshu1911/FrauDTect-AI",
  },

  {
    id: "metro",
    title: "Metro Ticketing System",
    subtitle: "Modern SaaS-based Metro Ticketing System",
    status: "development",
    homepage: true,
    featured: true,

    summary:
      "Full-stack SaaS platform for digital metro ticketing with secure wallet management, QR-based travel passes, and real-time transit services.",

    techStack: [
      "React", 
      "FastAPI", 
      "PostgreSQL", 
      "JWT"
    ],

    highlights: [
      "Dynamic QR-based e-ticket generation with three-hour validity",
      "Secure wallet system with transaction logging and UPI fallback",
      "JWT authentication with secondary mPIN verification",
      "Interactive multi-line metro map with interchange visualization",
    ],

    github: "https://github.com/aryanshu1911/Metro-Ticketing-SaaS",
  },

  {
    id: "cyphercraft",
    title: "CypherCraft",
    subtitle: "Privacy-First Password Analyzer & Generator",
    status: "live",
    homepage: false,
    featured: false,

    summary:
      "Web application for password analysis, breach detection, and cryptographically secure password generation.",

    techStack: [
      "Python",
      "FastAPI",
      "HaveIBeenPwned API"
    ],

    highlights: [
      "k-Anonymity breach detection using HIBP API",
      "Entropy-based password strength analysis",
      "Cryptographically secure password generation",
      "Privacy-first architecture with zero plaintext transmission",
    ],

    github: "https://github.com/aryanshu1911/CypherCraft",
  },

  {
    id: "byteshield",
    title: "ByteShield",
    subtitle: "AES-Based Symmetric Data Encryption with Integrity Verification",
    status: "completed",
    homepage: false,
    featured: false,

    summary: "Robust data encryption utility powered by Fernet for securing individual files and directories with cryptographic verification.",
    techStack: [
      "Python CLI",
      "Cryptography",
      "SHA-256",
      "JSON"
    ],
    highlights: [
      "AES-based symmetric encryption via Fernet",
      "Automated SHA-256 integrity logging",
      "Recursive batch directory processing",
      "CLI with hash mismatch safety overrides"
    ],
    github: "https://github.com/aryanshu1911/ByteShield"
  },

  {
    id: "muscleforge-powerplay",
    title: "MuscleForge PowerPlay",
    subtitle: "Gym Management System",
    status: "completed",
    homepage: false,
    featured: false,

    summary: "Database-driven administrative platform for managing member enrollments, trainer allocations, financial tracking, and equipment logistics.",
    techStack: [
      "Python",
      "MySQL",
      "MySQL Connector"
    ],
    highlights: [
      "Secure admin portal with credential modification",
      "Full CRUD workflows for member and trainer records",
      "Customizable programmatic fee structuring",
      "Real-time equipment inventory tracking logs"
    ],
    github: "https://github.com/aryanshu1911/Gym-Management-System-using-Python"
},
];