import { JourneyItem } from "@/types/professionalJourney";

export const professionalJourney: JourneyItem[] = [
  {
    id: "imd",
    category: "experience",
    role: "Software Engineering Intern",
    organization: "India Meteorological Department",
    duration: "Dec 2025 – May 2026",
    location: "Regional Meteorological Centre, Mumbai",

    description:
      "Developed a rainfall forecast verification system for district-wise weather warnings against observed rainfall across Maharashtra, enabling secure operational analysis and automated verification workflows.",

    highlights: [
      "Built a secure RBAC-enabled platform for operational forecast verification.",
      "Developed geospatial dashboards covering 36+ districts using GeoPandas and Folium.",
      "Implemented forecast verification metrics including Hit Rate, False Alarm Rate and Missed Events.",
      "Automated analytical report generation with interactive visualizations."
    ],

    badges: [
      "React",
      "Python",
      "GeoPandas",
      "Supabase"
    ],

    links: [
      {
        label: "GitHub",
        href: "https://github.com/aryanshu1911/imd-mumbai",
      },
      {
        label: "Live System",
        href: "https://imd-mumbai.vercel.app/"
      }
    ]
  },

  {
    id: "csesa",
    category: "leadership",
    role: "Chief Editor & Magazine Head",
    organization: "Computer Science Student Association (CSESA)",
    duration: "Sep 2024 - Apr 2025",
    location: "Lokmanya Tilak College of Engineering, Navi Mumbai",
    description:
      "Led the editorial and documentation initiatives for departmental events while managing the complete publication lifecycle of the annual department magazine.",

    highlights: [
      "Led a six-member editorial team throughout planning, editing and publication.",
      "Managed reports and documentation for departmental technical and non-technical events.",
      "Drafted official permission, invitation and appreciation letters.",
      "Coordinated faculty, contributors and editorial reviews to publish the annual department magazine."
    ],

    badges: [
      "Leadership",
      "Editorial",
      "Documentation",
      "Project Management",
      "Team Coordination"
    ]
  }
];