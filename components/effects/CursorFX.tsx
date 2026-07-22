"use client";

import { useEffect, useRef, useState } from "react";
import { useTheme } from "next-themes";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
  useTransform,
  useVelocity,
} from "framer-motion";

export default function CursorFX() {
  const { resolvedTheme } = useTheme();

  const [mounted, setMounted] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const previous = useRef({ x: 0, y: 0 });

  useEffect(() => {
    setMounted(true);
  }, []);

  const mouseX = useMotionValue(-1000);
  const mouseY = useMotionValue(-1000);

  const x = useSpring(mouseX, { stiffness: 550, damping: 38, mass: 0.22 });
  const y = useSpring(mouseY, { stiffness: 550, damping: 38, mass: 0.22 });

  const velocityX = useVelocity(x);
  const velocityY = useVelocity(y);

  const speed = useTransform([velocityX, velocityY], (values) => {
    const [vx, vy] = values as unknown as [number, number];
    return Math.sqrt(vx * vx + vy * vy);
  });

  const glowScale = useTransform(speed, [0, 3000], [1, 1.8]);
  const bloomOpacity = useTransform(speed, [0, 3000], [0.35, 0.9]);
  const coreScale = useTransform(speed, [0, 3000], [1, 1.2]);

  const isDark = mounted && resolvedTheme === "dark";

  const colors = isDark
    ? {
        core: "#FFFFFF",
        inner: "#F3FFF9",
        accent: "#7EF5C8",
        glowStrong: "rgba(16,185,129,.80)",
        glowSoft: "rgba(16,185,129,.45)",
        bloom1: "rgba(16,185,129,.55)",
        bloom2: "rgba(16,185,129,.18)",
        bloom3: "rgba(16,185,129,.08)",
        halo1: "rgba(255,255,255,.95)",
        halo2: "rgba(255,255,255,.15)",
      }
    : {
        core: "#059669",
        inner: "#10B981",
        accent: "#6EE7B7",
        glowStrong: "rgba(5,150,105,.55)",
        glowSoft: "rgba(5,150,105,.20)",
        bloom1: "rgba(5,150,105,.22)",
        bloom2: "rgba(5,150,105,.10)",
        bloom3: "rgba(5,150,105,.04)",
        halo1: "rgba(5,150,105,.45)",
        halo2: "rgba(5,150,105,.10)",
      };

  const bloomBackground = useMotionTemplate`
    radial-gradient(circle,
      ${colors.bloom1} 0%,
      ${colors.bloom2} 35%,
      ${colors.bloom3} 60%,
      transparent 100%)
  `;

  const haloBackground = useMotionTemplate`
    radial-gradient(circle,
      ${colors.halo1} 0%,
      ${colors.halo2} 40%,
      transparent 100%)
  `;

  useEffect(() => {
    document.documentElement.classList.add("cursor-none");

    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (!media.matches) {
      const handleMove = (e: MouseEvent) => {
        mouseX.set(e.clientX);
        mouseY.set(e.clientY);

        const target = e.target as HTMLElement | null;
        setIsHovering(
          !!target?.closest("a,button,[role='button'],input,textarea,select")
        );

        previous.current = { x: e.clientX, y: e.clientY };
      };

      window.addEventListener("mousemove", handleMove, { passive: true });

      return () => {
        document.documentElement.classList.remove("cursor-none");
        window.removeEventListener("mousemove", handleMove);
      };
    }

    return () => {
      document.documentElement.classList.remove("cursor-none");
    };
  }, [mouseX, mouseY]);

  const isTouch =
    mounted &&
    ("ontouchstart" in window ||
      navigator.maxTouchPoints > 0 ||
      window.matchMedia("(pointer: coarse)").matches);

  if (!mounted || isTouch) return null;

  return (
    <>
      <motion.div
        className="pointer-events-none fixed top-0 left-0 z-[9998] rounded-full blur-3xl"
        style={{
          x,
          y,
          width: 130,
          height: 130,
          translateX: "-50%",
          translateY: "-50%",
          scale: glowScale,
          opacity: bloomOpacity,
          background: bloomBackground,
        }}
      />

      <motion.div
        className="pointer-events-none fixed top-0 left-0 z-[9999] rounded-full blur-md"
        animate={{ scale: isHovering ? 1.35 : 1, opacity: isHovering ? 1 : 0.95 }}
        transition={{ type: "spring", stiffness: 400, damping: 28 }}
        style={{
          x,
          y,
          width: 42,
          height: 42,
          translateX: "-50%",
          translateY: "-50%",
          background: haloBackground,
        }}
      />

      <motion.div
        className="pointer-events-none fixed top-0 left-0 z-[10000] rounded-full"
        style={{
          x,
          y,
          translateX: "-50%",
          translateY: "-50%",
          width: 12,
          height: 12,
          scale: coreScale,
          background: `radial-gradient(circle, ${colors.core} 0%, ${colors.inner} 60%, ${colors.accent} 100%)`,
          boxShadow: `0 0 10px ${colors.halo1},0 0 24px ${colors.glowStrong},0 0 48px ${colors.glowSoft}`,
        }}
      />
    </>
  );
}