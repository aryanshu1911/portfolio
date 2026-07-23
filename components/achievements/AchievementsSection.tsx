import { achievements } from "@/data/achievements";
import AchievementCard from "./AchievementCard";
import Background from "./Background";

export default function AchievementsSection() {
  return (
    <section
  id="achievements"
  className="
    relative
    isolate
    mx-auto
    w-full
    max-w-7xl
    overflow-hidden
    px-6
    py-24
    lg:px-8
  "
> <Background />
      {/* Section Header */}
      <div className="mb-20 max-w-3xl">
        <span className="text-sm font-semibold uppercase tracking-[0.28em] text-emerald-600 dark:text-emerald-400">
          Career Highlights
        </span>

        <h2 className="mt-4 text-4xl font-bold tracking-tight text-neutral-900 dark:text-white sm:text-5xl">
          Milestones that shaped my journey.
        </h2>

        <p className="mt-6 text-lg leading-8 text-neutral-700 dark:text-neutral-400">
          From national cybersecurity competitions and industry certifications
          to government experience and research, these milestones reflect my
          continuous pursuit of learning, innovation, and technical excellence.
        </p>
      </div>

      {/* Achievement Cards */}
      <div className="space-y-8 lg:space-y-8">
        {achievements.map((achievement) => (
          <AchievementCard
            key={achievement.id}
            achievement={achievement}
          />
        ))}
      </div>
    </section>
  );
}