import { projects } from "@/data/projects";
import { ProjectCard } from "./ProjectCard";

export function AllProjectsSection() {
  const featuredProjects = projects.filter((project) => project.featured);

  const additionalProjects = projects.filter(
    (project) => !project.featured
  );

  return (
    <div className="space-y-24">
      <section>
        <h2 className="text-3xl font-bold">Featured Projects</h2>

        <div className="mt-10 grid gap-8 lg:grid-cols-2">
          {featuredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
            />
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-bold">
          Additional Projects
        </h2>

        <div className="mt-10 grid gap-8 lg:grid-cols-2">
          {additionalProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
            />
          ))}
        </div>
      </section>
    </div>
  );
}