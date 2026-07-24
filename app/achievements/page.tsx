import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/sectionHeading";

import AchievementCard from "@/components/achievements/AchievementCard";
import { achievements } from "@/data/achievements";

export default function AchievementsPage() {
  return (
    <main className="py-24">
      <Container className="max-w-7xl">
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