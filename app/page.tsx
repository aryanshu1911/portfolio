import { Hero } from "@/components/hero/hero";
import { ProjectsSection } from "@/components/projects";

export default function Home() {
  return (
    <main id="main-content" tabIndex={-1}>
      <Hero />
      <ProjectsSection />
    </main>
  );
}
