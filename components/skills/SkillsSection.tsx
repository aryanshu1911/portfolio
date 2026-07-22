import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/sectionHeading";
import SkillBar from "./SkillBar";
import SkillCategory from "./SkillCategory";

const technologyStack = [
  {
    title: "Core Languages",
    skills: ["Python", "Java", "C", "SQL", "TypeScript"],
  },
  {
    title: "Application Development",
    skills: [
      "FastAPI", "Next.js", "React", "Node.js", "REST APIs"],
  },
  {
    title: "Artificial Intelligence & Machine Learning",
    skills: ["Scikit-learn", "Random Forest", "Model Evaluation", "Prompt Engineering", "Pandas", "NumPy", "NLP"],
  },
  {
    title: "Cybersecurity",
    skills: ["Nmap", "Wireshark", "Burp Suite", "Cryptography", "Vulnerability Assessment", "Network Security"],
  },
  {
    title: "Data & Analytics",
    skills: ["GeoPandas", "Matplotlib", "Plotly", "Streamlit"],
  },
   {
    title: "Infrastructure",
    skills: [
      "PostgreSQL", "MongoDB", "Supabase", "Git / GitHub", "Linux"],
  }
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