import { motion, useScroll, useSpring, useTransform, type MotionValue } from "framer-motion";
import { useRef, type ReactNode } from "react";

/** Wrap content to translate it on Y based on scroll progress (continuous parallax). */
export function Parallax({
  children,
  speed = 60,
  className,
}: {
  children: ReactNode;
  /** px range; positive moves up as you scroll down, negative moves down */
  speed?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const smooth = useSpring(scrollYProgress, { stiffness: 80, damping: 20, mass: 0.4 });
  const y = useTransform(smooth, [0, 1], [speed, -speed]);
  return (
    <motion.div ref={ref} style={{ y } as { y: MotionValue<number> }} className={className}>
      {children}
    </motion.div>
  );
}

/** Top-of-page scroll progress bar (continuous indicator). */
export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 20, mass: 0.3 });
  return (
    <motion.div
      aria-hidden
      className="fixed inset-x-0 top-0 z-[80] h-0.5 origin-left"
      style={{
        scaleX,
        background: "linear-gradient(90deg, transparent, var(--brand), transparent)",
        boxShadow: "0 0 14px var(--brand)",
      }}
    />
  );
}
