"use client";

import { motion } from "framer-motion";
import { JourneyItem } from "@/types/professionalJourney";

interface JourneyCardProps {
  item: JourneyItem;
}

export default function JourneyCard({ item }: JourneyCardProps) {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: `
        /* Outer border container with glowing gradient border on hover */
        .journey-card-border {
          position: absolute;
          inset: 0;
          border-radius: 28px;
          background: linear-gradient(135deg, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0.02) 100%);
          transition: background 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }
        
        [data-theme="light"] .journey-card-border {
          background: linear-gradient(135deg, rgba(0, 0, 0, 0.06) 0%, rgba(0, 0, 0, 0.02) 100%);
        }

        .group:hover .journey-card-border {
          background: linear-gradient(135deg, rgba(16, 185, 129, 0.35) 0%, rgba(255, 255, 255, 0.12) 50%, rgba(16, 185, 129, 0.1) 100%);
        }

        [data-theme="light"] .group:hover .journey-card-border {
          background: linear-gradient(135deg, rgba(16, 185, 129, 0.22) 0%, rgba(0, 0, 0, 0.06) 50%, rgba(16, 185, 129, 0.05) 100%);
        }

        /* Inner container that embeds the glass effect */
        .journey-card-inner {
          position: relative;
          border-radius: 27px;
          overflow: hidden;
          background: rgba(16, 16, 16, 0.5);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          transition: background 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }

        [data-theme="light"] .journey-card-inner {
          background: rgba(255, 255, 255, 0.65);
        }

        /* Shine overlay that glows on hover */
        .journey-card-shine {
          pointer-events: none;
          position: absolute;
          inset: 0;
          z-index: 1;
          border-radius: 27px;
          opacity: 0;
          transition: opacity 0.5s cubic-bezier(0.16, 1, 0.3, 1);
          mix-blend-mode: plus-lighter;
          background: 
            radial-gradient(
              circle at 18% 45%,
              rgba(16, 185, 129, 0.15) 0%,
              rgba(16, 185, 129, 0.06) 20%,
              transparent 45%
            ),
            linear-gradient(
              115deg,
              transparent 0%,
              rgba(255, 255, 255, 0.03) 18%,
              rgba(255, 255, 255, 0.08) 28%,
              rgba(255, 255, 255, 0.02) 40%,
              transparent 55%
            );
        }

        [data-theme="light"] .journey-card-shine {
          mix-blend-mode: multiply;
          background: 
            radial-gradient(
              circle at 18% 45%,
              rgba(16, 185, 129, 0.08) 0%,
              rgba(16, 185, 129, 0.04) 28%,
              transparent 50%
            ),
            linear-gradient(
              115deg,
              transparent 0%,
              rgba(0, 0, 0, 0.02) 18%,
              rgba(0, 0, 0, 0.04) 28%,
              rgba(0, 0, 0, 0.01) 42%,
              transparent 56%
            );
        }

        .group:hover .journey-card-shine {
          opacity: 1;
        }

        /* Main article wrapper within the glass card */
        .journey-card-article {
          border: 1px solid var(--border);
          background: var(--surface);
          /* fallback */
          background: color-mix(in srgb, var(--surface) 90%, transparent);
          transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);
          box-shadow: 0 12px 40px rgba(0, 0, 0, 0.15);
        }

        [data-theme="light"] .journey-card-article {
          box-shadow: 0 8px 30px rgba(0, 0, 0, 0.02);
        }

        .group:hover .journey-card-article {
          border-color: rgba(16, 185, 129, 0.22);
          box-shadow: 
            0 30px 60px -15px rgba(0, 0, 0, 0.4), 
            0 0 50px -10px rgba(16, 185, 129, 0.06),
            inset 0 1px 0 0 rgba(255, 255, 255, 0.03);
        }

        [data-theme="light"] .group:hover .journey-card-article {
          border-color: rgba(16, 185, 129, 0.15);
          box-shadow: 
            0 25px 50px -12px rgba(0, 0, 0, 0.05), 
            0 0 30px -10px rgba(16, 185, 129, 0.03),
            inset 0 1px 0 0 rgba(255, 255, 255, 0.3);
        }

        /* Divider line */
        .journey-card-divider {
          border-left: 1px solid rgba(100, 116, 139, 0.16);
          transition: border-color 0.4s ease;
        }

        .group:hover .journey-card-divider {
          border-color: rgba(16, 185, 129, 0.25);
        }

        /* Contributions Checkmark Icon */
        .contribution-bullet {
          margin-top: 2px;
          background: rgba(16, 185, 129, 0.08);
          border: 1px solid rgba(16, 185, 129, 0.15);
          color: #10b981;
          width: 20px;
          height: 20px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          border-radius: 6px;
          font-size: 11px;
          font-weight: 800;
          flex-shrink: 0;
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }

        [data-theme="light"] .contribution-bullet {
          background: rgba(16, 185, 129, 0.06);
          border-color: rgba(16, 185, 129, 0.2);
          color: #059669;
        }

        .group:hover .contribution-bullet {
          transform: scale(1.08);
          background: rgba(16, 185, 129, 0.15);
          border-color: rgba(16, 185, 129, 0.35);
          box-shadow: 0 0 8px rgba(16, 185, 129, 0.15);
        }

        [data-theme="light"] .group:hover .contribution-bullet {
          background: rgba(16, 185, 129, 0.1);
          border-color: rgba(16, 185, 129, 0.3);
          box-shadow: 0 0 6px rgba(16, 185, 129, 0.1);
        }

        /* Badge design and transitions */
        .journey-badge {
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid rgba(255, 255, 255, 0.08);
          transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
        }

        [data-theme="light"] .journey-badge {
          background: rgba(0, 0, 0, 0.02);
          border: 1px solid rgba(0, 0, 0, 0.06);
          color: #4b5563;
        }

        .journey-badge:hover {
          transform: translateY(-1px) scale(1.03);
          border-color: rgba(16, 185, 129, 0.4) !important;
          background: rgba(16, 185, 129, 0.06) !important;
          color: #10b981 !important;
          box-shadow: 0 2px 8px rgba(16, 185, 129, 0.08);
        }

        [data-theme="light"] .journey-badge:hover {
          border-color: rgba(16, 185, 129, 0.4) !important;
          background: rgba(16, 185, 129, 0.05) !important;
          color: #047857 !important;
          box-shadow: 0 2px 8px rgba(16, 185, 129, 0.05);
        }
      `}} />

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
        <div className="journey-card-border" />
        <div className="journey-card-inner">
          <div className="journey-card-shine" />
          
          <article
            className="
              relative
              isolate
              overflow-hidden
              rounded-[27px]
              p-8
              lg:p-11
              journey-card-article
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
              <div className="space-y-8 pl-11 journey-card-divider">
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
                      <li key={highlight} className="flex items-start gap-3.5">
                        <span className="contribution-bullet">
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
                          px-3.5
                          py-1.5
                          text-[11px]
                          font-medium
                          tracking-[0.04em]
                          text-muted-foreground
                          journey-badge
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
    </>
  );
}