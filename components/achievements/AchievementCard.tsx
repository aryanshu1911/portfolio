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
        className={`grid items-center gap-4 rounded-3xl border border-white/10 bg-neutral-900/40 px-5 py-4 transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:shadow-2xl hover:shadow-black/30 lg:grid-cols-5 lg:px-6 lg:py-5 ${
          !isLeft ? "lg:[&>*:first-child]:order-2" : ""
        }`}
      >
        {/* IMAGE */}

        <div
          className={`group/image relative aspect-[1.5/1] overflow-hidden rounded-2xl ${
            isLeft ? "lg:col-span-2" : "lg:col-span-2 lg:col-start-4"
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
          className={`flex flex-col justify-center ${
            isLeft ? "lg:col-span-3" : "lg:col-span-3 lg:col-start-1"
          }`}
        >
          <span className="mb-2 text-[9px] font-semibold uppercase tracking-[0.30em] text-emerald-400">
            {achievement.category}
          </span>

          <h3 className="text-[1.55rem] font-bold leading-tight text-white">
            {achievement.title}
          </h3>

          <p className="mt-2 text-[14px] text-neutral-300">
            {achievement.subtitle}
          </p>

          <p className="mt-4 text-[13px] text-neutral-500">
            {achievement.date}
          </p>

          <button
            type="button"
            className="group/explore mt-5 inline-flex w-fit items-center gap-1.5"
          >
            <span className="text-[14px] font-medium text-white transition-colors duration-300 group-hover/explore:text-emerald-400">
              {achievement.cta}
            </span>

            <ArrowRight
              size={16}
              className="text-white transition-all duration-300 group-hover/explore:translate-x-1 group-hover/explore:text-emerald-400"
            />
          </button>
        </div>
      </div>
    </article>
  );
}