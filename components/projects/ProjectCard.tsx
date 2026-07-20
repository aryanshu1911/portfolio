import { Check, ExternalLink, FolderGit2 } from "lucide-react";

import type { Project } from "@/types/project";
import { Button } from "@/components/ui/button";
import { ProjectStatusBadge } from "./ProjectStatusBadge";
import { TechChip } from "./TechChip";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article
      className="
        group
        flex
        flex-col
        rounded-2xl
        border
        border-border
        bg-card
        p-7
        transition-all
        duration-300
        hover:-translate-y-2
        hover:border-emerald-500/40
        hover:shadow-xl
      "
    >
      {/* Header */}
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="text-2xl font-bold tracking-tight transition-colors duration-300 group-hover:text-emerald-400">
            {project.title}
          </h3>

          <p className="mt-1 text-sm text-muted-foreground">
            {project.subtitle}
          </p>
        </div>

        <ProjectStatusBadge status={project.status} />
      </div>

      {/* Summary */}
      <p className="mt-5 text-sm leading-7 text-muted-foreground">
        {project.summary}
      </p>

      {/* Tech Stack */}
      <div className="mt-4 flex flex-wrap gap-2">
        {project.techStack.map((tech) => (
          <TechChip key={tech} label={tech} />
        ))}
      </div>

      {/* Highlights */}
      <div className="mt-5 space-y-3">
        {project.highlights.map((highlight) => (
          <div key={highlight} className="flex items-start gap-3">
            <Check
              className="mt-1 h-4 w-4 shrink-0 text-emerald-400"
              strokeWidth={2.5}
            />

            <p className="text-sm text-white/80">
              {highlight}
            </p>
          </div>
        ))}
      </div>

      {/* Push buttons to bottom */}
      <div className="flex-1" />

      {/* Actions */}
      <div className="mt-5 flex flex-wrap gap-3">
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="secondary">
              <FolderGit2 className="mr-2 h-4 w-4" />
              GitHub
            </Button>
          </a>
        )}

        {project.demo && (
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button>
              Live Demo
              <ExternalLink className="ml-2 h-4 w-4" />
            </Button>
          </a>
        )}
      </div>
    </article>
  );
}