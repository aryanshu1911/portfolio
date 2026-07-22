"use client";

import { motion } from "framer-motion";

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
    <div className="group space-y-2 cursor-default">
      <div className="flex items-center justify-between">
        <h4 className="text-xs sm:text-sm font-medium tracking-wide text-foreground/90 group-hover:text-emerald-500 transition-colors duration-300">
          {title}
        </h4>
      </div>

      <div className="h-2 w-full overflow-hidden rounded-full border border-border/50 bg-muted/30 p-[1px] shadow-inner transition-colors duration-300 group-hover:border-emerald-500/30">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${value}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
          className="h-full rounded-full bg-gradient-to-r from-emerald-500 via-teal-400 to-emerald-400 dark:from-emerald-500 dark:to-teal-400 group-hover:shadow-[0_0_10px_rgba(16,185,129,0.3)] transition-all duration-300"
        />
      </div>
    </div>
  );
}

export default function SkillBar() {
  return (
    <div className="mt-12 rounded-2xl border border-border/60 bg-surface/50 p-6 sm:p-8 shadow-sm">
      {/* Console Panel Header */}
      <div className="mb-6 flex items-center justify-between border-b border-border/40 pb-4">
        <div className="flex items-center gap-2.5">
          <span className="h-2 w-2 rounded-full bg-emerald-500/90 ring-2 ring-emerald-500/20" />
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground/90">
            System Overview
          </p>
        </div>
        <span className="text-[11px] font-mono tracking-wider text-muted-foreground/60 uppercase hidden sm:inline-block">
          Core Capabilities
        </span>
      </div>

      <div className="space-y-6">
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
