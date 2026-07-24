import { notFound } from "next/navigation";

import { Globe, FileText } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/sectionHeading";
import { achievements } from "@/data/achievements";

export default async function AchievementsPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const achievement = achievements.find((item) => item.slug === slug);

  if (!achievement) {
    notFound();
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
  id={achievement.id}
  className="mx-auto mt-20 max-w-3xl"
></article>
        <article className="mx-auto mt-20 max-w-3xl">
          <header className="border-b border-neutral-200 pb-8 dark:border-white/10">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-emerald-500">
              {achievement.category}
            </p>

            <h1 className="mt-3 text-4xl font-bold tracking-tight text-neutral-900 dark:text-white">
              {achievement.title}
            </h1>

            <p className="mt-2 text-lg text-neutral-600 dark:text-neutral-300">
              {achievement.subtitle}
            </p>

            <div className="mt-5 flex flex-wrap gap-x-2 text-sm text-neutral-500 dark:text-neutral-400">
              <span>{achievement.duration}</span>
              <span>•</span>
              <span>{achievement.organization}</span>
            </div>
          </header>

          {achievement.sections?.map((section) => (
  <section key={section.title} className="mt-12">
    <h2 className="text-xl font-semibold text-neutral-900 dark:text-white">
      {section.title}
    </h2>

    {typeof section.content === "string" ? (
      <p className="mt-4 text-justify leading-6 text-neutral-700 dark:text-neutral-300">
        {section.content}
      </p>
    ) : (
      <ul className="mt-4 list-disc space-y-2 pl-5 leading-6 text-neutral-700 marker:text-emerald-500 dark:text-neutral-300">
        {section.content.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    )}
  </section>
))}

          <section className="mt-12">
            <h2 className="text-xl font-semibold text-neutral-900 dark:text-white">
              Technologies
            </h2>

            <div className="mt-4 flex flex-wrap gap-2">
              {achievement.technologies?.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-400"
                >
                  {tech}
                </span>
              ))}
            </div>
          </section>

          {achievement.resources && achievement.resources.length > 0 && (
  <section className="mt-12 border-t border-neutral-200 pt-8 dark:border-white/10">
    <h2 className="text-xl font-semibold text-neutral-900 dark:text-white">
      Resources
    </h2>

    <div className="mt-5 flex flex-wrap gap-3">
      {achievement.resources.map((resource) => (
        <a
          key={resource.label}
          href={resource.href}
          target="_blank"
          rel="noopener noreferrer"
          title={resource.label}
          className="flex items-center gap-2 rounded-lg border border-neutral-300 px-4 py-2 transition hover:border-emerald-500 hover:text-emerald-500 dark:border-white/10"
        >
          {resource.label.toLowerCase().includes("paper") ? (
            <FileText size={18} />
          ) : (
            <Globe size={18} />
          )}

          <span className="text-sm font-medium">
            {resource.label}
          </span>
        </a>
      ))}
    </div>
  </section>
)}        </article>
      </Container>
    </main>
  );
}