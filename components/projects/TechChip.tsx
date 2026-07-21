interface TechChipProps {
  label: string;
}

export function TechChip({ label }: TechChipProps) {
  return (
    <span
      className="
        inline-flex
        items-center

        rounded-full

        border
        border-border

        bg-surface

        px-3.5
        py-1.5

        text-[12px]
        font-medium
        tracking-[0.01em]

        text-text-secondary

        transition-all
        duration-300
        ease-out

        hover:border-white/12
        hover:bg-surface-elevated
        hover:text-foreground
      "
    >
      {label}
    </span>
  );
}