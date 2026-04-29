import { useI18n } from "@/lib/i18n";
import { Reveal, Stagger, Item, itemVariants } from "./Reveal";
import { ArrowRight, Play, Sparkles } from "lucide-react";
import heroImg from "@/assets/hero-educator.jpg";
import { motion } from "framer-motion";

export function Hero() {
  const { t } = useI18n();
  return (
    <section id="top" className="relative flex min-h-[100svh] items-center overflow-hidden bg-hero pb-20 pt-28 sm:pb-24 sm:pt-36">
      <div className="absolute inset-0 grid-bg opacity-60" aria-hidden />
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-5 lg:grid-cols-[1.15fr_1fr]">
        <Stagger className="relative z-10" delayChildren={2.8}>


          <Item variants={itemVariants}>
            <h1 className="font-display text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl lg:text-[4.5rem]">
              {t("hero.title.1")}{" "}
              <span className="relative inline-block">
                <span style={{ color: "var(--brand)" }}>{t("hero.title.accent")}</span>
                <span
                  aria-hidden
                  className="absolute -inset-x-2 -inset-y-1 -z-10 rounded-xl opacity-10 blur-xl"
                  style={{ background: "var(--brand)" }}
                />
              </span>{" "}
              {t("hero.title.2")}
            </h1>
          </Item>

          <Item variants={itemVariants}>
            <p className="mt-6 max-w-xl text-base text-foreground/70 sm:text-lg">{t("hero.subtitle")}</p>
          </Item>

          <Item variants={itemVariants} className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.03]"
              style={{ background: "var(--brand)", boxShadow: "var(--glow-brand)" }}
            >
              {t("hero.cta.primary")}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href="#courses"
              className="glass group inline-flex items-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold text-foreground hover:bg-card transition-transform hover:scale-[1.03]"
            >
              {t("hero.cta.secondary")}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" style={{ color: "var(--brand)" }} />
            </a>
          </Item>


        </Stagger>

        <Reveal delay={3.2} className="relative">
          <div className="relative mx-auto aspect-[4/4.5] w-full max-w-md">

            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="relative h-full w-full overflow-hidden rounded-[2rem]"
              style={{
                background:
                  "linear-gradient(135deg, color-mix(in oklab, var(--brand) 10%, var(--card)), var(--background))",
                boxShadow:
                  "var(--shadow-glass), inset 0 0 0 1px color-mix(in oklab, white 40%, transparent)",
                padding: "8px",
              }}
            >
              <div className="relative h-full w-full overflow-hidden rounded-[1.55rem]">
                <img
                  src={heroImg}
                  alt="Modern educator at Finway Academy"
                  width={1024}
                  height={1280}
                  className="h-full w-full object-cover"
                />
                <div
                  aria-hidden
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(180deg, transparent 60%, color-mix(in oklab, var(--background) 80%, transparent) 100%)",
                  }}
                />
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 5, delay: 1, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute bottom-4 left-4 right-4 rounded-2xl border p-4"
                  style={{
                    background:
                      "linear-gradient(135deg, color-mix(in oklab, var(--ink) 70%, transparent), color-mix(in oklab, var(--brand) 18%, transparent))",
                    borderColor: "color-mix(in oklab, var(--brand) 35%, transparent)",
                    backdropFilter: "blur(14px)",
                  }}
                >
                  <div className="flex items-center gap-3">
                    <div className="flex -space-x-2">
                      {[0, 1, 2].map((i) => (
                        <div
                          key={i}
                          className="h-8 w-8 rounded-full"
                          style={{
                            border: "2px solid color-mix(in oklab, var(--ink) 70%, transparent)",
                            background: `oklch(${0.7 + i * 0.05} 0.14 ${250 + i * 15})`,
                          }}
                        />
                      ))}
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-foreground">1300+ o'quvchilar</div>
                      <div className="text-[10px] text-foreground/60">Hoziroq qo'shil</div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
