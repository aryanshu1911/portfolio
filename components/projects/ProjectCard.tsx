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
        relative
        isolate
        overflow-hidden

        flex
        flex-col

        rounded-3xl
        border
        border-border

        bg-surface

        p-5

        shadow-[0_12px_40px_rgba(0,0,0,0.18)]

        transition-all
        duration-500
        ease-[cubic-bezier(.22,1,.36,1)]

        hover:-translate-y-1.5
        hover:border-white/12
        hover:shadow-[0_24px_60px_rgba(0,0,0,0.28)]
      "
    >
      {/* Ambient Emerald Glow */}
      <div
        className="
          pointer-events-none
          absolute
          inset-0
          opacity-0
          transition-opacity
          duration-500
          group-hover:opacity-100
        "
      >
        <div
          className="
            absolute
            -right-20
            -top-20
            h-60
            w-60
            rounded-full
            bg-accent-soft
            blur-3xl
          "
        />
      </div>

      {/* Inner Highlight */}
      <div
        className="
          pointer-events-none
          absolute
          inset-0
          rounded-3xl

          ring-1.5
          ring-inset
          ring-white/[0.03]

          transition-all
          duration-500

          group-hover:ring-white/[0.06]
        "
      />

      {/* Top Reflection */}
      <div
        className="
          pointer-events-none
          absolute
          inset-x-0
          top-0

          h-px

          bg-gradient-to-r
          from-transparent
          via-white/20
          to-transparent

          opacity-70
        "
      />

      {/* Header */}
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3
            className="
              text-[1.4rem]
              font-semibold
              leading-tight
              tracking-[-0.02em]

              text-foreground

              transition-colors
              duration-300

              group-hover:text-accent
            "
          >
            {project.title}
          </h3>

          <p
            className="
              mt-1
              text-sm
              font-medium
              text-text-secondary
            "
          >
            {project.subtitle}
          </p>
        </div>

        <ProjectStatusBadge status={project.status} />
      </div>

      {/* Summary */}
      <p
        className="
          mt-5
          text-sm
          leading-6
          text-text-muted
        "
      >
        {project.summary}
      </p>

      {/* Tech Stack */}
      <div className="mt-5 flex flex-wrap gap-2.5">
        {project.techStack.map((tech) => (
          <TechChip key={tech} label={tech} />
        ))}
      </div>

      {/* Highlights */}
      <div className="mt-5 space-y-2">
        {project.highlights.map((highlight) => (
          <div key={highlight} className="flex items-start gap-3">
            <Check
              className="mt-1 h-4 w-4 shrink-0 text-accent"
              strokeWidth={2.5}
            />

            <p
              className="
                text-sm
                leading-6
                text-text-secondary
              "
            >
              {highlight}
            </p>
          </div>
        ))}
      </div>

      {/* Push actions to bottom */}
      <div className="flex-1" />

      {/* Actions */}
      <div className="mt-6 flex flex-wrap gap-5">
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