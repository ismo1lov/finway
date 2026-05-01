import logoIcon from "@/assets/logo-icon.png";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export function FloatingAccents() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll();
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -400]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 45]);

  const orbs = [
    { top: "12%", left: "6%", size: 220, delay: "0s", dur: "14s", hue: "var(--brand)" },
    { top: "38%", left: "82%", size: 180, delay: "-4s", dur: "18s", hue: "var(--brand-soft)" },
    { top: "68%", left: "10%", size: 260, delay: "-7s", dur: "22s", hue: "var(--brand)" },
    { top: "85%", left: "70%", size: 200, delay: "-2s", dur: "16s", hue: "var(--brand-soft)" },
  ];

  const icons = [
    { top: "15%", left: "85%", size: 120, rotate: 15, y: y1 },
    { top: "45%", left: "5%", size: 180, rotate: -20, y: y2 },
    { top: "75%", left: "80%", size: 140, rotate: 10, y: y1 },
  ];

  return (
    <div aria-hidden ref={containerRef} className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {/* Decorative Orbs */}
      {orbs.map((o, i) => (
        <span
          key={`orb-${i}`}
          className="absolute rounded-full neon-float"
          style={{
            top: o.top,
            left: o.left,
            width: o.size,
            height: o.size,
            background: `radial-gradient(circle, color-mix(in oklab, ${o.hue} 45%, transparent) 0%, transparent 65%)`,
            filter: "blur(50px)",
            animationDelay: o.delay,
            animationDuration: o.dur,
            opacity: 0.4,
          }}
        />
      ))}

      {/* Floating Brand Icons */}
      {icons.map((icon, i) => (
        <motion.img
          key={`icon-${i}`}
          src={logoIcon}
          alt=""
          className="absolute opacity-[0.03] grayscale transition-opacity hover:opacity-[0.06]"
          style={{
            top: icon.top,
            left: icon.left,
            width: icon.size,
            height: "auto",
            rotate: icon.rotate,
            y: icon.y,
            rotateZ: rotate,
          }}
        />
      ))}
    </div>
  );
}

