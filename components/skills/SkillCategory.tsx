interface SkillCategoryProps {
  title?: string;
  skills: string[];
}

export default function SkillCategory({
  title,
  skills,
}: SkillCategoryProps) {
  return (
    <div className="h-full flex flex-col rounded-xl border border-border/30 bg-surface/30 p-3.5 sm:p-4 space-y-2.5 transition-colors duration-200 hover:border-emerald-500/20 hover:bg-surface/50">
      {title && (
        <div className="flex items-center justify-between border-b border-border/20 pb-2">
          <h3 className="text-[11px] sm:text-xs font-semibold uppercase tracking-[0.16em] text-foreground/80">
            {title}
          </h3>
          <span className="h-1 w-1 rounded-full bg-muted-foreground/30" />
        </div>
      )}

      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <span
            key={skill}
            className="
              inline-flex
              items-center
              rounded-full
              border
              border-border/70
              bg-surface/70
              px-3
              py-1.5
              sm:px-3.5
              text-xs
              font-medium
              text-muted-foreground
              transition-all
              duration-200
              ease-out
              hover:border-emerald-500/40
              hover:bg-emerald-500/10
              hover:text-foreground
              hover:-translate-y-0.5
              hover:shadow-[0_2px_8px_rgba(16,185,129,0.08)]
              cursor-default
              select-none
            "
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}


