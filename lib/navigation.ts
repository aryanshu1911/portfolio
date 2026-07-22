export type NavigationItem = {
  href: string;
  label: string;
};

export const primaryNavigation: readonly NavigationItem[] = [
  { href: "/", label: "Home" },
  { href: "#professional-journey", label: "Professional Journey"},
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills"}
];
