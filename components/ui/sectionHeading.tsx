interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description: string;
  align?: "left" | "center";
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: SectionHeadingProps) {
  const alignment =
    align === "center"
      ? "mx-auto max-w-3xl text-center"
      : "max-w-2xl";

  return (
    <div className={alignment}>
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-400">
        {eyebrow}
      </p>

      <h2 className="mt-4 text-4xl font-bold tracking-tight">
        {title}
      </h2>

      <p className="mt-6 text-lg leading-8 text-muted-foreground">
        {description}
      </p>
    </div>
  );
}