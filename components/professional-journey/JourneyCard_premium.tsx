"use client";

import { motion } from "framer-motion";
import { JourneyItem } from "@/types/professionalJourney";

interface JourneyCardProps {
  item: JourneyItem;
}

export default function JourneyCard({ item }: JourneyCardProps) {
  return (
    <motion.div
  whileHover={{ y: -6 }}
  transition={{
    type: "spring",
    stiffness: 320,
    damping: 24,
  }}
  className="
    group
    relative
    rounded-[28px]
    p-[1px]
    overflow-hidden
  "
>
  <div
  className="
    absolute
    inset-0
    rounded-[28px]

    bg-[linear-gradient(135deg,
      rgba(255,255,255,0.08),
      rgba(255,255,255,0.02)
    )]

    transition-all
    duration-300

    group-hover:bg-[linear-gradient(135deg,
      rgba(16,185,129,0.45),
      rgba(255,255,255,0.32),
      rgba(16,185,129,0.2)
    )]
  "
/>
      <div
  className="
    relative
    overflow-hidden
    rounded-[27px]
    bg-white/[0.03]


  "
>
                <div
          className="pointer-events-none absolute inset-0 z-[1] rounded-[27px] opacity-0 transition-all duration-500 group-hover:opacity-100"
          style={{
            background: `
              radial-gradient(circle at 18% 45%, rgba(16,185,129,.18) 0%, rgba(16,185,129,.08) 20%, transparent 42%),
              linear-gradient(115deg,
                transparent 0%,
                rgba(255,255,255,.05) 18%,
                rgba(255,255,255,.09) 28%,
                rgba(255,255,255,.03) 40%,
                transparent 54%,
                rgba(255,255,255,.05) 68%,
                rgba(255,255,255,.02) 80%,
                transparent 100%)
            `,
            mixBlendMode: "screen",
          }}
        />

<article
          className="
            relative
            isolate
            overflow-hidden

            rounded-[27px]

            border
            border-border

            bg-surface

            p-8
            lg:p-11

            shadow-[0_12px_40px_rgba(0,0,0,0.18)]

            transition-all
            duration-500
            ease-[cubic-bezier(.22,1,.36,1)]

            group-hover:shadow-[0_30px_90px_rgba(0,0,0,.35),0_0_35px_rgba(16,185,129,.10)]
          "
        >
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
            {/* LEFT : Identity */}

            <div className="flex flex-col justify-center text-center">
              <h3 className="text-3xl font-bold leading-tight lg:text-4xl">
                {item.role}
              </h3>

              <p className="mt-6 text-lg font-medium text-muted-foreground">
                {item.organization}
              </p>

              <div className="mt-10 space-y-2 text-xs uppercase tracking-[0.16em] text-muted-foreground/80">
                <p>{item.duration}</p>

                {item.location && <p>{item.location}</p>}
              </div>
            </div>

            {/* RIGHT : Impact */}

            <div
              className="space-y-8 pl-11"
              style={{
                borderLeft: "1px solid rgba(100, 116, 139, 0.24)",
              }}
            >
              {/* Overview */}

              <div>
                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-muted-foreground">
                  OVERVIEW
                </p>

                <p className="text-base leading-7 text-muted-foreground">
                  {item.description}
                </p>
              </div>

              {/* Contributions */}

              <div>
                <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-muted-foreground">
                  KEY CONTRIBUTIONS
                </p>

                <ul className="grid gap-4 sm:grid-cols-2">
                  {item.highlights.map((highlight) => (
                    <li key={highlight} className="flex items-start gap-3">
                      <span className="mt-0.5 text-base font-bold text-emerald-400">
                        ✓
                      </span>

                      <span className="text-[14px] leading-6 text-muted-foreground">
                        {highlight}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technologies */}

              <div>
                <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-muted-foreground">
                  TECHNOLOGIES
                </p>

                <div className="flex flex-wrap gap-2.5">
                  {item.badges.map((badge) => (
                    <span
                      key={badge}
                      className="
                        inline-flex
                        items-center
                        rounded-full
                        border
                        border-border
                        bg-white/[0.025]
                        px-3.5
                        py-1.5
                        text-[11px]
                        font-medium
                        tracking-[0.04em]
                        text-muted-foreground
                        transition-all
                        duration-300
                        hover:border-emerald-500
                        hover:bg-emerald-500/10
                        hover:text-foreground
                      "
                    >
                      {badge}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </article>
      </div>
    </motion.div>
  );
}