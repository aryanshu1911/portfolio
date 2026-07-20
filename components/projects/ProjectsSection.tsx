import { Container } from "@/components/ui/container";
import { projects } from "@/data/projects";
import { ProjectCard } from "./ProjectCard";
import { SectionHeading } from "@/components/ui/sectionHeading";
import Link from "next/link";

export function ProjectsSection() {
  const homepageProjects = projects.filter(
    (project) => project.homepage
  );

  return (
    <section
      id="projects"
      className="py-24 scroll-mt-24"
    >
      <Container>
        <SectionHeading
          eyebrow="Featured Projects"
          title="Building secure, intelligent and scalable software."
          description="A selection of projects spanning cybersecurity, artificial intelligence, backend engineering, and full-stack application development."
        />

        <div className="mt-16 grid gap-8 lg:grid-cols-2">
          {homepageProjects.map((project) => (
            <ProjectCard
            key={project.id}
            project={project}
          />
        ))}
        </div>
        <div className="mt-16 flex flex-col items-center gap-6">
          <div className="mt-16 flex justify-center">
            <Link
              href="/projects"
              className="button button--primary"
            >
              Explore All Projects →
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}