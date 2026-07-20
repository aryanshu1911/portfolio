interface TechChipProps {
  label: string;
}

export function TechChip({ label }: TechChipProps) {
  return (
    <span className="rounded-full border border-border bg-muted px-3 py-1 text-xs font-medium text-muted-foreground transition-colors duration-300 hover:border-emerald-500/40 hover:text-emerald-400">
      {label}
    </span>
  );
}