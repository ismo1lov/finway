import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "@/assets/finway-logo.png";

export function IntroLoader() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    if (typeof window === "undefined") return;
    // Skip if user has already seen it this session
    const seen = sessionStorage.getItem("finway-intro");
    if (seen) {
      setShow(false);
      return;
    }
    document.documentElement.style.overflow = "hidden";
    const timer = setTimeout(() => {
      setShow(false);
      sessionStorage.setItem("finway-intro", "1");
      document.documentElement.style.overflow = "";
    }, 2200);
    return () => {
      clearTimeout(timer);
      document.documentElement.style.overflow = "";
    };
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          key="intro"
          className="fixed inset-0 z-[100] grid place-items-center"
          style={{ background: "var(--background)" }}
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.06, filter: "blur(8px)" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Soft brand glow */}
          <motion.div
            aria-hidden
            className="pointer-events-none absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            style={{
              background:
                "radial-gradient(40% 35% at 50% 50%, color-mix(in oklab, var(--brand) 30%, transparent), transparent 70%)",
            }}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.85, filter: "blur(14px)" }}
            animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="relative flex flex-col items-center"
          >
            <motion.img
              src={logo}
              alt="Finway"
              className="h-16 w-auto md:h-24"
              style={{ filter: "drop-shadow(0 0 28px rgba(255,255,255,0.55)) drop-shadow(0 6px 24px rgba(117,148,255,0.55))" }}
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 2.2, ease: "easeInOut", repeat: Infinity }}
            />
            <motion.div
              className="mt-6 h-[2px] w-44 overflow-hidden rounded-full"
              style={{ background: "color-mix(in oklab, var(--brand) 20%, transparent)" }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <motion.div
                className="h-full w-1/3 rounded-full"
                style={{ background: "var(--brand)", boxShadow: "0 0 14px var(--brand)" }}
                initial={{ x: "-100%" }}
                animate={{ x: "320%" }}
                transition={{ duration: 1.6, ease: [0.5, 0, 0.5, 1] }}
              />
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
