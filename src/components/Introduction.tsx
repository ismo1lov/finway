import { useI18n } from "@/lib/i18n";
import { Reveal, Stagger, Item, itemVariants } from "./Reveal";
import { GraduationCap, Rocket, Users } from "lucide-react";

export function Introduction() {
  const { t } = useI18n();
  const cards = [
    { icon: GraduationCap, k: "intro.card.1" as const, d: "intro.card.1.desc" as const },
    { icon: Rocket, k: "intro.card.2" as const, d: "intro.card.2.desc" as const },
    { icon: Users, k: "intro.card.3" as const, d: "intro.card.3.desc" as const },
    { icon: GraduationCap, k: "intro.card.4" as const, d: "intro.card.4.desc" as const },
  ];

  return (
    <section id="intro" className="relative overflow-hidden bg-background py-24 sm:py-32">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-60"
        style={{
          background:
            "radial-gradient(60% 50% at 50% 0%, color-mix(in oklab, var(--brand) 18%, transparent), transparent 70%)",
        }}
      />
      <div className="mx-auto max-w-6xl px-5">
        <Stagger className="text-center">
          <Item variants={itemVariants} className="text-xs uppercase tracking-[0.3em]" style={{ color: "var(--brand)" }}>
            {t("intro.eyebrow")}
          </Item>
          <Item variants={itemVariants}>
            <h2 className="mx-auto mt-3 max-w-3xl font-display text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
              {t("intro.title")}
            </h2>
          </Item>
          <Item variants={itemVariants}>
            <p className="mx-auto mt-5 max-w-2xl text-foreground/70">{t("intro.body")}</p>
          </Item>
        </Stagger>

        <Stagger className="mt-14 grid grid-cols-2 gap-5 sm:grid-cols-4" staggerChildren={0.12}>
          {cards.map(({ icon: Icon, k, d }) => (
            <Item
              key={k}
              variants={itemVariants}
              className="glass group relative overflow-hidden rounded-3xl p-7 transition-transform duration-500 hover:-translate-y-1.5"
            >
              <span
                aria-hidden
                className="absolute -right-10 -top-10 h-32 w-32 rounded-full opacity-40 blur-2xl transition-opacity duration-500 group-hover:opacity-70"
                style={{ background: "var(--brand)" }}
              />
              <div
                className="relative grid h-12 w-12 place-items-center rounded-2xl text-primary-foreground"
                style={{ background: "var(--brand)", boxShadow: "var(--glow-brand)" }}
              >
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="relative mt-5 font-display text-xl font-semibold">{t(k)}</h3>
              <p className="relative mt-2 text-sm text-foreground/70">{t(d)}</p>
            </Item>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
