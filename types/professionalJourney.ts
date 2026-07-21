export type JourneyCategory = "experience" | "leadership";

export interface JourneyLink {
  label: string;
  href: string;
}

export interface JourneyItem {
  id: string;
  category: JourneyCategory;

  role: string;
  organization: string;

  duration: string;
  location?: string;

  description: string;

  highlights: string[];

  badges: string[];

  links?: JourneyLink[];
}