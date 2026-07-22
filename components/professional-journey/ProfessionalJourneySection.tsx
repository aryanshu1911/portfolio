import { Container } from "@/components/ui/container";
import { professionalJourney } from "@/data/professionalJourney";
import JourneyCard from "./JourneyCard";

export default function ProfessionalJourneySection() {
  return (
    <section
      id="professional-journey"
      className="py-24 lg:px-8"
    >
      <Container>
        <span className="text-sm font-semibold uppercase tracking-[0.28em] text-emerald-400">
          Professional Journey
        </span>

        <h2 className="mt-5 text-4xl font-bold tracking-tight md:text-5xl">
          Engineering software.
          <br />
          Leading teams.
          <br />
          Delivering impact.
        </h2>

        <p className="mt-6 text-lg text-muted-foreground">
          Experiences that shaped my technical expertise, leadership,
          and ability to deliver real-world solutions.
        </p>
      </Container>

      <div className="mt-16 flex flex-col gap-16">
        {professionalJourney.map((item) => (
          <div
            key={item.id}
            className="mx-auto w-full max-w-5xl"
          >
            <p className="mb-6 text-xs font-semibold uppercase tracking-[0.24em] text-emerald-400">
              {item.category === "experience"
                ? "Work Experience"
                : "Leadership Experience"}
            </p>

            <JourneyCard item={item} />
          </div>
        ))}
      </div>
    </section>
  );
}