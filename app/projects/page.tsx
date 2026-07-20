import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/sectionHeading";
import { AllProjectsSection } from "@/components/projects/AllProjectsSection";

export default function ProjectsPage() {
  return (
    <main className="py-26">
      <Container>
        <SectionHeading
          eyebrow="Projects"
          title="Software Engineering Portfolio"
          description="A curated collection of projects spanning AI, cybersecurity, backend engineering, and full-stack development."
          align="center"
        />

        <div className="mt-20">
          <AllProjectsSection />
        </div>
      </Container>
    </main>
  );
}