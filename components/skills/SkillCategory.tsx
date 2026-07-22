interface SkillCategoryProps {
  title: string;
  skills: string[];
}

export default function SkillCategory({
  title,
  skills,
}: SkillCategoryProps) {
  return (
    <div className="space-y-5">
      <h3 className="text-lg font-semibold tracking-tight">
        {title}
      </h3>

      <div className="flex flex-wrap gap-3">
        {skills.map((skill) => (
          <span
            key={skill}
            className="
              rounded-full
              border
              border-border
              bg-muted/40
              px-4
              py-2
              text-sm
              font-medium
              text-muted-foreground
              transition-colors
              duration-200
              hover:border-emerald-500/40
              hover:text-foreground
            "
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}