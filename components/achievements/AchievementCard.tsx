import Image from "next/image";
import { ArrowRight } from "lucide-react";

import { Achievement } from "@/data/achievements";

interface AchievementCardProps {
  achievement: Achievement;
}

export default function AchievementCard({
  achievement,
}: AchievementCardProps) {
  const isLeft = achievement.layout === "left";

  return (
    <article
      className={`group/card w-full max-w-[72%] transition-all duration-300 ${
        isLeft ? "mr-auto lg:mr-0" : "ml-auto lg:ml-80"
      }`}
    >
      <div
        className="
          relative
          grid
          items-center
          gap-4
          overflow-hidden
          rounded-3xl
          border
          border-neutral-200
          bg-gradient-to-b
          from-white
          via-neutral-50
          to-neutral-100
          backdrop-blur-sm
          px-5
          py-4
          shadow-sm
          transition-all
          duration-300
          hover:-translate-y-1
          hover:border-neutral-300
          hover:shadow-xl

          dark:border-white/10
          dark:from-neutral-900/85
          dark:via-neutral-900/65
          dark:to-neutral-950/90
          dark:shadow-none
          dark:hover:border-white/15
          dark:hover:shadow-[0_20px_60px_rgba(0,0,0,0.35)]

          lg:grid-cols-5
          lg:px-6
          lg:py-5
        "
      >
        {/* Inner Ring */}

        <div className="pointer-events-none absolute inset-0 z-0 rounded-3xl ring-1 ring-inset ring-black/5 dark:ring-white/5" />

        {/* Gloss */}

        <div className="pointer-events-none absolute inset-x-0 top-0 z-0 h-24 bg-gradient-to-b from-white/70 to-transparent dark:from-white/[0.05]" />

        {/* Emerald Hover Accent */}

        <div className="pointer-events-none absolute inset-0 z-0 rounded-3xl bg-gradient-to-br from-emerald-500/[0.015] via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover/card:opacity-100 dark:from-emerald-400/[0.03]" />

        {/* IMAGE */}

        <div
          className={`group/image relative z-10 aspect-[1.5/1] overflow-hidden rounded-2xl ring-1 ring-neutral-200 shadow-[0_10px_30px_rgba(0,0,0,0.08)] dark:ring-white/5 dark:shadow-[0_10px_30px_rgba(0,0,0,0.18)] ${
            isLeft ? "lg:col-span-2" : "lg:col-span-2 lg:order-2"
          }`}
        >
          <Image
            src={achievement.image}
            alt={achievement.title}
            fill
            sizes="(max-width:1024px) 100vw, 40vw"
            className={`object-cover transition-transform duration-500 group-hover/image:scale-105 ${
              achievement.imagePosition ?? "object-center"
            }`}
          />
        </div>

        {/* TEXT */}

        <div
          className={`relative z-10 flex flex-col justify-center ${
            isLeft ? "lg:col-span-3" : "lg:col-span-3 lg:order-1"
          }`}
        >
          <span className="mb-2 text-[9px] font-semibold uppercase tracking-[0.30em] text-emerald-700 dark:text-emerald-300">
            {achievement.category}
          </span>

          <h3 className="text-[1.55rem] font-bold leading-tight text-neutral-900 dark:text-white">
            {achievement.title}
          </h3>

          <p className="mt-2 text-[14px] text-neutral-600 dark:text-neutral-300">
            {achievement.subtitle}
          </p>

          <p className="mt-4 text-[13px] tracking-wide text-neutral-500 dark:text-neutral-400">
            {achievement.date}
          </p>

          <button
            type="button"
            className="group/explore mt-5 inline-flex w-fit items-center gap-1.5"
          >
            <span className="text-[14px] font-semibold text-neutral-900 transition-colors duration-300 group-hover/explore:text-emerald-600 dark:text-white dark:group-hover/explore:text-emerald-400">
              {achievement.cta}
            </span>

            <ArrowRight
              size={16}
              className="text-neutral-900 transition-all duration-300 group-hover/explore:translate-x-1 group-hover/explore:text-emerald-600 dark:text-white dark:group-hover/explore:text-emerald-400"
            />
          </button>
        </div>
      </div>
    </article>
  );
}