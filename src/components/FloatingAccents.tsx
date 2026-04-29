export function FloatingAccents() {
  // Decorative neon orbs that float across the viewport
  const orbs = [
    { top: "12%", left: "6%", size: 220, delay: "0s", dur: "14s", hue: "var(--brand)" },
    { top: "38%", left: "82%", size: 180, delay: "-4s", dur: "18s", hue: "var(--brand-soft)" },
    { top: "68%", left: "10%", size: 260, delay: "-7s", dur: "22s", hue: "var(--brand)" },
    { top: "85%", left: "70%", size: 200, delay: "-2s", dur: "16s", hue: "var(--brand-soft)" },
  ];
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {orbs.map((o, i) => (
        <span
          key={i}
          className="absolute rounded-full neon-float"
          style={{
            top: o.top,
            left: o.left,
            width: o.size,
            height: o.size,
            background: `radial-gradient(circle, color-mix(in oklab, ${o.hue} 55%, transparent) 0%, transparent 65%)`,
            filter: "blur(40px)",
            animationDelay: o.delay,
            animationDuration: o.dur,
            opacity: 0.55,
          }}
        />
      ))}
    </div>
  );
}
