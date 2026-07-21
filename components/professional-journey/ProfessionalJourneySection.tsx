import { professionalJourney } from "@/data/professionalJourney";
import JourneyCard from "./JourneyCard";

export default function ProfessionalJourneySection() {
  return (
    <section
      id="professional-journey"
      className="mx-auto w-full max-w-7xl px-6 py-24 lg:px-8"
    >
      <div className="max-w-3xl">

        <span className="text-sm font-semibold uppercase tracking-[0.25em] text-emerald-400">
          Professional Journey
        </span>

        <h2 className="mt-4 text-4xl font-bold tracking-tight md:text-5xl">
          Engineering software.
          <br />
          Leading people.
          <br />
          Delivering impact.
        </h2>

        <p className="mt-6 text-lg text-muted-foreground">
          Experiences that shaped my technical expertise, leadership,
          and ability to deliver real-world solutions.
        </p>

      </div>

      <div className="mt-14 flex flex-col gap-8">

        {professionalJourney.map((item) => (
          <JourneyCard
            key={item.id}
            item={item}
          />
        ))}

      </div>
    </section>
  );
}