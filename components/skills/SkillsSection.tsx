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
    skills: ["FastAPI", "Next.js", "React", "Node.js", "REST APIs"],
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
    skills: ["PostgreSQL", "MongoDB", "Supabase", "Git / GitHub", "Linux"],
  },
];

const professionalSkills = [
  "Leadership",
  "Problem Solving",
  "Communication",
  "Adaptability",
  "Teamwork",
  "Critical Thinking",
  "Technical Documentation",
];

const beyondCoding = [
  "Sketching",
  "FPS Gaming",
  "Story Writing",
  "Thriller Films",
];

export default function SkillsSection() {
  return (
    <section
      id="skills"
      className="relative py-24 lg:py-32 px-6 lg:px-8 scroll-mt-24 overflow-hidden"
    >
      {/* Background Depth Layers */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        {/* Soft Radial Emerald Glow */}
        <div 
          className="absolute inset-0 opacity-40 dark:opacity-60" 
          style={{
            background: "radial-gradient(circle at 50% 10%, rgba(16, 185, 129, 0.07) 0%, transparent 60%)"
          }}
        />
        {/* Faint Engineering Grid Layer */}
        <div 
          className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]"
          style={{
            backgroundImage: "linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)",
            backgroundSize: "36px 36px",
            maskImage: "radial-gradient(ellipse at center, black 50%, transparent 90%)",
            WebkitMaskImage: "radial-gradient(ellipse at center, black 50%, transparent 90%)"
          }}
        />
      </div>

      <Container>
        <SectionHeading
          eyebrow="Skills"
          title="The technologies, tools and qualities I rely on to build secure, scalable software systems."
          description="An overview of my core technical expertise, engineering strengths, and the technologies I use to build production-ready software."
        />

        {/* PRIMARY ANCHOR: System Overview Console Panel */}
        <SkillBar />

        {/* UNIFIED CONSOLE FRAME: Technology Stack */}
        <div className="mt-12 sm:mt-14 rounded-2xl border border-border/80 bg-surface/20 p-5 sm:p-6 backdrop-blur-xs">
          <div className="mb-5 flex items-center justify-between border-b border-border/30 pb-3">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground/90">
              Technology Stack
            </p>
            <span className="text-[11px] font-mono tracking-wider text-muted-foreground/50 uppercase hidden sm:inline-block">
              Environment & Tools
            </span>
          </div>

          <div className="grid gap-3.5 sm:gap-4 md:grid-cols-2 lg:grid-cols-3">
            {technologyStack.map((category) => (
              <SkillCategory
                key={category.title}
                title={category.title}
                skills={category.skills}
              />
            ))}
          </div>
        </div>

        {/* UNIFIED CONSOLE FRAME: Capabilities & Interests */}
        <div className="mt-8 sm:mt-10 rounded-2xl border border-border/50 bg-surface/20 p-5 sm:p-6 backdrop-blur-xs">
          <div className="mb-5 flex items-center justify-between border-b border-border/30 pb-3">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground/90">
              Capabilities & Interests
            </p>
            <span className="text-[11px] font-mono tracking-wider text-muted-foreground/50 uppercase hidden sm:inline-block">
              Strengths & Pursuits
            </span>
          </div>

          <div className="grid gap-3.5 sm:gap-4 md:grid-cols-2">
            <SkillCategory title="Professional Skills" skills={professionalSkills} />
            <SkillCategory title="Beyond Coding" skills={beyondCoding} />
          </div>
        </div>
      </Container>
    </section>
  );
}
