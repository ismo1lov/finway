import { motion, type Variants, type HTMLMotionProps } from "framer-motion";
import type { ReactNode } from "react";
import { useIsTouchDevice } from "@/hooks/use-touch-device";

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
  const isTouch = useIsTouchDevice();
  const Comp = motion[Tag] as typeof motion.div;
  
  if (isTouch) {
    return <Comp className={className} style={{ opacity: 1, filter: "none", transform: "none" }}>{children}</Comp>;
  }

  return (
    <Comp
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-80px" }}
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
  const isTouch = useIsTouchDevice();

  if (isTouch) {
    return <motion.div className={className}>{children}</motion.div>;
  }

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-80px" }}
      variants={{
        hidden: {},
        show: { transition: { delayChildren, staggerChildren } },
      }}
    >
      {children}
    </motion.div>
  );
}

export function Item({ className, children, ...props }: HTMLMotionProps<"div">) {
  const isTouch = useIsTouchDevice();
  if (isTouch) {
    const { variants, initial, whileInView, viewport, transition, ...rest } = props;
    return <motion.div className={className} style={{ opacity: 1, filter: "none", transform: "none" }} {...rest}>{children}</motion.div>;
  }
  return <motion.div className={className} {...props}>{children}</motion.div>;
}

export const itemVariants = variants;
