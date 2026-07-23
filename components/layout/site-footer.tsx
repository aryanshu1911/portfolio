"use client";

import { Container } from "@/components/ui/container";
import { siteConfig } from "@/lib/site";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <Container>
  <div className="flex flex-col items-center gap-4 py-5 text-center md:flex-row md:justify-between md:text-left">
    {/* Left */}
    <p className="text-sm text-[var(--text-secondary)]">
      © {year} {siteConfig.name}
    </p>

    {/* Center */}
    <p className="text-xs text-[var(--text-muted)]">
      Built with <span aria-hidden="true">❤️</span> using Next.js, TypeScript & Tailwind CSS
    </p>

    {/* Right */}
    <button
      type="button"
      className="group inline-flex items-center gap-2 text-sm text-[var(--text-secondary)] transition-colors duration-200 hover:text-[var(--accent)]"
      onClick={() =>
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        })
      }
    >
      Back to Top
      <span className="transition-transform duration-200 group-hover:-translate-y-0.5">
        ↑
      </span>
    </button>
  </div>
</Container>
    </footer>
  );
}
