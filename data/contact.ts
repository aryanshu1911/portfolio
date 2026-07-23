export interface ContactItem {
  id: string;
  title: string;
  subtitle: string;
  href: string;
  external?: boolean;
  icon: "github" | "linkedin" | "gmail";
  hoverColor: string;
}

export const contactItems: ContactItem[] = [
  {
    id: "github",
    title: "GitHub",
    subtitle: "Explore my projects",
    href: "https://github.com/aryanshu1911",
    external: true,
    icon: "github",
    hoverColor: "group-hover:text-black dark:group-hover:text-white",
  },
  {
    id: "linkedin",
    title: "LinkedIn",
    subtitle: "Let's connect professionally",
    href: "https://linkedin.com/in/aryanshu-singh",
    external: true,
    icon: "linkedin",
    hoverColor: "group-hover:text-[#0A66C2]",
  },
  {
    id: "gmail",
    title: "Email",
    subtitle: "aryanshu.singh03@gmail.com",
    href: "mailto:aryanshu.singh03@gmail.com",
    icon: "gmail",
    hoverColor: "group-hover:text-[#EA4335]",
  },
];