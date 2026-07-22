"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";

interface InteractiveCardProps {
  children: ReactNode;
  className?: string;
}

export default function InteractiveCard({
  children,
  className = "",
}: InteractiveCardProps) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{
        type: "spring",
        stiffness: 320,
        damping: 24,
      }}
      className={`
        group
        relative
        rounded-[28px]
        p-[1px]
        bg-[linear-gradient(135deg,rgba(255,255,255,0.08),rgba(255,255,255,0.02))]
        hover:bg-[linear-gradient(135deg,rgba(16,185,129,0.25),rgba(255,255,255,0.15),rgba(16,185,129,0.15))]
        transition-[background]
        duration-300
        ${className}
      `}
    >
      <div
        className="
          relative
          overflow-hidden
          rounded-[27px]
          bg-white/[0.03]
        "
      >
        {children}
      </div>
    </motion.div>
  );
}