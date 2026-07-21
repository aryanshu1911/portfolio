import { JourneyItem } from "@/types/professionalJourney";

interface JourneyCardProps {
  item: JourneyItem;
}

export default function JourneyCard({
  item,
}: JourneyCardProps) {
  return (
    <article className="rounded-3xl border p-8">

      {/* Category */}

      <span className="text-sm font-medium uppercase tracking-widest text-emerald-400">

        {item.category === "experience"
          ? "Featured Experience"
          : "Leadership"}

      </span>

      {/* Role */}

      <h3 className="mt-4 text-3xl font-bold">
        {item.role}
      </h3>

      {/* Organization */}

      <p className="mt-2 text-lg font-medium">
        {item.organization}
      </p>

      {/* Meta */}

      <div className="mt-3 flex flex-wrap gap-2 text-sm opacity-70">

        <span>{item.duration}</span>

        {item.location && (
          <>
            <span>•</span>
            <span>{item.location}</span>
          </>
        )}

      </div>

      {/* Description */}

      <p className="mt-6 leading-8">
        {item.description}
      </p>

      {/* Highlights */}

      <ul className="mt-8 space-y-3">

        {item.highlights.map((highlight) => (
          <li key={highlight}>
            • {highlight}
          </li>
        ))}

      </ul>

      {/* Badges */}

      <div className="mt-8 flex flex-wrap gap-3">

        {item.badges.map((badge) => (
          <span
            key={badge}
            className="rounded-full border px-4 py-2 text-sm"
          >
            {badge}
          </span>
        ))}

      </div>

      {/* Links */}

      {item.links && (

        <div className="mt-8 flex gap-4">

          {item.links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg border px-4 py-2 text-sm transition hover:opacity-80"
            >
              {link.label}
            </a>
          ))}

        </div>

      )}

    </article>
  );
}