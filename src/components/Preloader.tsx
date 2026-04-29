import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import logo from "@/assets/finway-logo.png";

export function Preloader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500); // 2.5 seconds
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.8, ease: "easeInOut" } }}
          className="fixed inset-0 z-[1000] flex items-center justify-center bg-white"
        >
          <div className="relative">
            {/* Glow Effect */}
            <motion.div
              animate={{ 
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.6, 0.3]
              }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -inset-10 rounded-full blur-3xl"
              style={{ background: "radial-gradient(circle, var(--brand) 0%, transparent 70%)" }}
            />
            
            {/* Logo with Float Animation */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              <motion.img
                src={logo}
                alt="Finway Academy"
                className="relative h-20 w-auto sm:h-28"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              />
            </motion.div>
          </div>
          
          {/* Progress bar line */}
          <motion.div 
            className="absolute bottom-0 left-0 h-1 bg-brand"
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 2.5, ease: "linear" }}
            style={{ background: "var(--brand)" }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
