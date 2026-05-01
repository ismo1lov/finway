import { useState } from "react";
import { useI18n } from "@/lib/i18n";
import { Reveal, Stagger, Item, itemVariants } from "./Reveal";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { DottedSurface } from "./ui/dotted-surface";

const faqData = [
  { id: 1, q: "faq.q1", a: "faq.a1" },
  { id: 2, q: "faq.q2", a: "faq.a2" },
  { id: 3, q: "faq.q3", a: "faq.a3" },
  { id: 4, q: "faq.q4", a: "faq.a4" },
  { id: 5, q: "faq.q5", a: "faq.a5" },
];

export function FAQ() {
  const { t } = useI18n();
  const [openId, setOpenId] = useState<number | null>(1);

  return (
    <section id="faq" className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-background py-20">
      <DottedSurface className="absolute inset-0" />
      
      {/* Ambient Glow */}
      <div 
        className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-20 blur-[100px]"
        style={{ background: "var(--brand)" }}
      />

      <div className="relative z-10 mx-auto w-full max-w-4xl px-5">
        <Stagger className="text-center">
          <Item variants={itemVariants} className="text-xs uppercase tracking-[0.25em]" style={{ color: "var(--brand)" }}>
            {t("faq.eyebrow")}
          </Item>
          <Item variants={itemVariants}>
            <h2 className="mt-3 font-display text-4xl font-bold tracking-tight sm:text-5xl">
              {t("faq.title")}
            </h2>
          </Item>
        </Stagger>

        <Stagger className="mt-16 space-y-4" staggerChildren={0.1}>
          {faqData.map((item) => {
            const isOpen = openId === item.id;
            return (
              <Item key={item.id} variants={itemVariants}>
                <div 
                  className={`group overflow-hidden rounded-2xl border transition-all duration-300 ${
                    isOpen ? "border-brand bg-card shadow-lg" : "border-border bg-card/50 hover:border-brand/30"
                  }`}
                >
                  <button
                    onClick={() => setOpenId(isOpen ? null : item.id)}
                    className="flex w-full items-center justify-between p-4 text-left sm:p-5"
                  >
                    <span className={`font-display text-base font-bold sm:text-lg transition-colors ${isOpen ? "text-brand" : "text-foreground"}`}>
                      {t(item.q as any)}
                    </span>
                    <div 
                      className={`grid h-8 w-8 shrink-0 place-items-center rounded-full transition-all duration-300 ${
                        isOpen ? "bg-brand text-primary-foreground rotate-180" : "bg-tint text-brand"
                      }`}
                    >
                      <ChevronDown className="h-4 w-4" />
                    </div>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                      >
                        <div className="border-t border-border px-5 pb-6 pt-5 sm:px-6 sm:pb-7">
                          <p className="text-sm leading-relaxed text-foreground/70 sm:text-base">
                            {t(item.a as any)}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </Item>
            );
          })}
        </Stagger>
      </div>
    </section>
  );
}
