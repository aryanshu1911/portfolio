export default function Background() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
    >
      {/* Vertical Spotlight */}
      <div
        className="
          absolute
          left-1/2
          top-0
          h-full
          w-[32rem]
          -translate-x-1/2
          bg-gradient-to-b
          from-transparent
          via-emerald-500/[0.15]
          to-transparent
          blur-3xl
        "
      />

      {/* Left Ambient */}
      <div
        className="
          absolute
          left-[-10rem]
          top-40
          h-[28rem]
          w-[28rem]
          rounded-full
          bg-emerald-500/[0.06]
          blur-[180px]
        "
      />

      {/* Right Ambient */}
      <div
        className="
          absolute
          right-[-8rem]
          bottom-20
          h-[24rem]
          w-[24rem]
          rounded-full
          bg-emerald-400/[0.06]
          blur-[160px]
        "
      />

      {/* Grid */}
      <div
        className="
          absolute
          inset-0
          opacity-[0.2]
          dark:opacity-[0.2]
        "
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,.12) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,.12) 1px, transparent 1px)
          `,
          backgroundSize: "64px 64px",
        }}
      />

      {/* Noise */}
      <div
        className="
          absolute
          inset-0
          opacity-[0.02]
          mix-blend-soft-light
        "
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(255,255,255,.5) 1px, transparent 0)",
          backgroundSize: "22px 22px",
        }}
      />
    </div>
  );
}