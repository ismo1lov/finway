import { motion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

const variants: Variants = {
  hidden: { opacity: 0, y: 28, filter: "blur(6px)" },
  show: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

export function Reveal({
  children,
  delay = 0,
  className,
  as: Tag = "div",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: keyof typeof motion;
}) {
  const Comp = motion[Tag] as typeof motion.div;
  return (
    <Comp
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, margin: "-80px" }}
      transition={{ delay }}
    >
      {children}
    </Comp>
  );
}

export function Stagger({
  children,
  className,
  delayChildren = 0,
  staggerChildren = 0.08,
}: {
  children: ReactNode;
  className?: string;
  delayChildren?: number;
  staggerChildren?: number;
}) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, margin: "-80px" }}
      variants={{
        hidden: {},
        show: { transition: { delayChildren, staggerChildren } },
      }}
    >
      {children}
    </motion.div>
  );
}

export const Item = motion.div;
export const itemVariants = variants;
