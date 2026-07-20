export type NavigationItem = {
  href: string;
  label: string;
};

export const primaryNavigation: readonly NavigationItem[] = [
  { href: "/", label: "Home" },
  { href: "#projects", label: "Projects" }
];
