"use client";

interface ProgressBarProps {
  title: string;
  value: number;
}

const overview = [
  { title: "Backend Development", value: 90 },
  { title: "Artificial Intelligence & Machine Learning", value: 82 },
  { title: "Cybersecurity", value: 82 },
  { title: "Databases", value: 78 },
  { title: "Frontend", value: 68 },
];

function ProgressBar({ title, value }: ProgressBarProps) {
  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between">
        <h4 className="text-sm font-medium tracking-wide">
          {title}
        </h4>
      </div>

      <div className="h-2 w-full overflow-hidden rounded-full bg-slate-200 dark:bg-white/10">
        <div
          className="h-full rounded-full bg-emerald-500 transition-all duration-700"
          style={{ width: `${value}%` }}
        />
      </div>
    </div>
  );
}

export default function SkillBar() {
  return (
    <div className="mt-16">
      <p className="mb-8 text-sm font-semibold uppercase tracking-[0.2em] text-muted-foreground">
        System Overview
      </p>

      <div className="max-w-3xl space-y-8">
        {overview.map((skill) => (
          <ProgressBar
            key={skill.title}
            title={skill.title}
            value={skill.value}
          />
        ))}
      </div>
    </div>
  );
}