import { Globe, FileText } from "lucide-react";

import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/sectionHeading";
import { achievements } from "@/data/achievements";

export default function AchievementsPage() {
  const safehire = achievements.find(
    (achievement) => achievement.id === "safehire"
  );

  if (!safehire) {
    return null;
  }

  return (
    <main className="py-24">
      <Container className="max-w-5xl">
        <SectionHeading
          eyebrow="Achievements"
          title="Milestones & Recognition"
          description="A collection of milestones spanning government experience, cybersecurity competitions, research, professional certifications, and continuous learning."
          align="center"
        />
<article
  id={safehire.id}
  className="mx-auto mt-20 max-w-3xl"
></article>
        <article className="mx-auto mt-20 max-w-3xl">
          <header className="border-b border-neutral-200 pb-8 dark:border-white/10">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-emerald-500">
              {safehire.category}
            </p>

            <h1 className="mt-3 text-4xl font-bold tracking-tight text-neutral-900 dark:text-white">
              {safehire.title}
            </h1>

            <p className="mt-2 text-lg text-neutral-600 dark:text-neutral-300">
              {safehire.subtitle}
            </p>

            <div className="mt-5 flex flex-wrap gap-x-2 text-sm text-neutral-500 dark:text-neutral-400">
              <span>{safehire.date}</span>
              <span>•</span>
              <span>{safehire.organization}</span>
              <span>•</span>
              <span>{safehire.location}</span>
            </div>
          </header>

          <section className="mt-12">
            <h2 className="text-xl font-semibold text-neutral-900 dark:text-white">
              Overview
            </h2>

            <p className="mt-4 leading-7 text-neutral-700 dark:text-neutral-300">
              {safehire.overview}
            </p>
          </section>

          <section className="mt-12">
            <h2 className="text-xl font-semibold text-neutral-900 dark:text-white">
              Role & Contributions
            </h2>

            <ul className="mt-4 list-disc space-y-2.5 pl-5 leading-7 text-neutral-700 marker:text-emerald-500 dark:text-neutral-300">
              {safehire.contributions?.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>

          <section className="mt-12">
            <h2 className="text-xl font-semibold text-neutral-900 dark:text-white">
              Academic Achievements
            </h2>

            <ul className="mt-4 list-disc space-y-2.5 pl-5 leading-7 text-neutral-700 marker:text-emerald-500 dark:text-neutral-300">
              {safehire.highlights?.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>

          <section className="mt-12">
            <h2 className="text-xl font-semibold text-neutral-900 dark:text-white">
              Technologies
            </h2>

            <div className="mt-4 flex flex-wrap gap-2">
              {safehire.technologies?.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-400"
                >
                  {tech}
                </span>
              ))}
            </div>
          </section>

          <section className="mt-12 border-t border-neutral-200 pt-8 dark:border-white/10">
            <h2 className="text-xl font-semibold text-neutral-900 dark:text-white">
              Resources
            </h2>

            <div className="mt-5 flex gap-3">
              <a
                href="https://safe-hire.in"
                target="_blank"
                rel="noopener noreferrer"
                title="Live Demo"
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-neutral-300 transition hover:border-emerald-500 hover:text-emerald-500 dark:border-white/10"
              >
                <Globe size={18} />
              </a>

              <a
                href="https://drive.google.com/file/d/1G6IXlP6hUrpQm1VgvOOBxIVOmWwV9X6o/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                title="Research Paper"
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-neutral-300 transition hover:border-emerald-500 hover:text-emerald-500 dark:border-white/10"
              >
                <FileText size={18} />
              </a>
            </div>
          </section>
        </article>
      </Container>
    </main>
  );
}