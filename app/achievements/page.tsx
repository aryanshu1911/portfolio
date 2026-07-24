import Background from "@/components/achievements/Background";
import AchievementCard from "@/components/achievements/AchievementCard";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/sectionHeading";
import { achievements } from "@/data/achievements";

export default function AchievementsPage() {
  return (
    <main className="relative isolate overflow-hidden py-24">
      <Background />

      <Container className="relative z-10 max-w-7xl">
        <SectionHeading
          eyebrow="Achievements"
          title="Milestones & Recognition"
          description="A collection of milestones spanning government experience, cybersecurity competitions, research, professional certifications, and continuous learning."
          align="center"
        />

        <div className="mt-20 space-y-10">
          {achievements.map((achievement) => (
            <AchievementCard
              key={achievement.id}
              achievement={achievement}
            />
          ))}
        </div>
      </Container>
    </main>
  );
}