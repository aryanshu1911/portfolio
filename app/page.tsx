import { Hero } from "@/components/hero/hero";
import { ProjectsSection } from "@/components/projects";
import ProfessionalJourneySection from "@/components/professional-journey/ProfessionalJourneySection";
import SkillsSection from "@/components/skills/SkillsSection";
import AchievementsSection from "@/components/achievements/AchievementsSection";
import ContactSection from "@/components/contact/ContactSection";

export default function Home() {
  return (
    <main id="main-content" tabIndex={-1}>
      <Hero />
      <ProfessionalJourneySection />
      <ProjectsSection />
      <SkillsSection/>
      <AchievementsSection />
      <ContactSection />
    </main>
  );
}
