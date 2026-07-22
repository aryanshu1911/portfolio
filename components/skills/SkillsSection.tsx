import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/sectionHeading";
import SkillBar from "./SkillBar";
import SkillCategory from "./SkillCategory";

const technologyStack = [
  {
    title: "Languages",
    skills: ["Python", "Java", "C", "SQL", "JavaScript"],
  },
  {
    title: "Frameworks",
    skills: [
      "FastAPI",
      "Next.js",
      "React",
      "Node.js",
      "Tailwind CSS",
      "REST APIs",
    ],
  },
  {
    title: "Databases",
    skills: [
      "PostgreSQL",
      "MongoDB",
      "SQLite",
      "Supabase",
    ],
  },
  {
    title: "AI / ML",
    skills: [
      "Scikit-learn",
      "Pandas",
      "NumPy",
      "TensorFlow",
      "NLP",
    ],
  },
  {
    title: "Cybersecurity",
    skills: [
      "OWASP Top 10",
      "OSINT",
      "Threat Intelligence",
      "CTFs",
      "Vulnerability Assessment",
    ],
  },
  {
    title: "Tools",
    skills: [
      "Git",
      "GitHub",
      "Docker",
      "Linux",
      "VS Code",
    ],
  },
];

export default function SkillsSection() {
  return (
    <section
      id="skills"
      className="py-28 px-6 lg:px-8 scroll-mt-24"
    >
      <Container>
        <SectionHeading
          eyebrow="Skills"
          title="The technologies, tools and qualities I rely on to build secure, scalable software systems."
          description="An overview of my core technical expertise, engineering strengths, and the technologies I use to build production-ready software."
        />

        <SkillBar />
        <p className="mb-8 mt-8 text-sm font-semibold uppercase tracking-[0.2em] text-muted-foreground">
          Technology Stack
        </p>
        <div className="mt-8 grid gap-10 md:grid-cols-2">
  {technologyStack.map((category) => (
    <SkillCategory
      key={category.title}
      title={category.title}
      skills={category.skills}
    />
  ))}
</div>
</Container>
    </section>
  );
}