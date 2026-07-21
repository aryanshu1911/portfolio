import { Hero } from "@/components/hero/hero";
import { ProjectsSection } from "@/components/projects";
import ProfessionalJourneySection from "@/components/professional-journey/ProfessionalJourneySection";

export default function Home() {
  return (
    <main id="main-content" tabIndex={-1}>
      <Hero />
      <ProfessionalJourneySection />
      <ProjectsSection />
    </main>
  );
}
