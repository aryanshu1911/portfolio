import { JourneyItem } from "@/types/professionalJourney";

interface JourneyCardProps {
  item: JourneyItem;
}

export default function JourneyCard({ item }: JourneyCardProps) {
  return (
    <article
      className="
      rounded-[28px]
      border border-white/10
      bg-white/[0.03]
      p-8
      lg:p-11
      transition-all
      duration-300
    ">

      {/* Header */}

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

            {item.location && (
              <p>{item.location}</p>
            )}

          </div>

        </div>

        {/* RIGHT : Impact */}

        <div className="space-y-8 border-l border-white/10 pl-11">

          {/* Overview */}

          <div>

            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-muted-foreground">
              Overview
            </p>

            <p className="leading-7 text-base text-muted-foreground">
              {item.description}
            </p>

          </div>

          {/* Contributions */}

          <div>

            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-muted-foreground">
              Key Contributions
            </p>

            <ul className="grid gap-4 sm:grid-cols-2">

              {item.highlights.map((highlight) => (
                <li
                  key={highlight}
                  className="flex items-start gap-3"
                >
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
              Technologies
            </p>

            <div className="flex flex-wrap gap-2.5">

              {item.badges.map((badge) => (
                <span
                  key={badge}
                  className="
                  inline-flex
                  items-center
                  rounded-full
                  border border-white/10
                  bg-white/[0.025]
                  px-3.5
                  py-1.5
                  text-[11px]
                  font-medium
                  tracking-[0.04em]
                  text-muted-foreground
                  transition-all
                  duration-300
                  hover:bg-white/[0.04]
                  hover:border-white/20
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
  );
}