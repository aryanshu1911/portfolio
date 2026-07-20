export type ProjectStatus = "live" | "development" | "completed";

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  status: ProjectStatus;

  summary: string;

  techStack: string[];

  highlights: string[];

  github?: string;
  demo?: string;
  homepage?: boolean;
  featured?: boolean;
}