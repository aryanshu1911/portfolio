import type { ProjectStatus } from "@/types/project";

interface ProjectStatusBadgeProps {
  status: ProjectStatus;
}

const statusStyles = {
  live: {
    label: "Live",
    className:
      "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20",
  },
  development: {
    label: "In Development",
    className:
      "bg-amber-500/10 text-amber-400 border border-amber-500/20",
  },
  completed: {
    label: "Completed",
    className:
      "bg-blue-500/10 text-blue-400 border border-blue-500/20",
  },
};

export function ProjectStatusBadge({
  status,
}: ProjectStatusBadgeProps) {
  const current = statusStyles[status];

  return (
    <span
      className={`inline-flex items-center rounded-full px-3.5 py-1 text-xs font-medium ${current.className}`}
    >
      {current.label}
    </span>
  );
}