import { useI18n } from "@/lib/i18n";
import { Stagger, Item, itemVariants } from "./Reveal";
import { Code2, Palette, Megaphone, Languages, BarChart3, Rocket, ArrowUpRight } from "lucide-react";

const services = [
  { icon: Code2, t: "service.1.title", d: "service.1.desc" },
  { icon: Palette, t: "service.2.title", d: "service.2.desc" },
  { icon: Megaphone, t: "service.3.title", d: "service.3.desc" },
  { icon: Languages, t: "service.4.title", d: "service.4.desc" },
  { icon: BarChart3, t: "service.5.title", d: "service.5.desc" },
  { icon: Rocket, t: "service.6.title", d: "service.6.desc" },
] as const;

export function Services() {
  const { t } = useI18n();
  return (
    <section id="services" className="relative bg-tint py-24 sm:py-32">
      <div className="absolute inset-0 grid-bg opacity-40" aria-hidden />
      <div className="relative mx-auto max-w-6xl px-5">
        <Stagger className="mx-auto max-w-2xl text-center">
          <Item variants={itemVariants} className="text-xs uppercase tracking-[0.25em]" style={{ color: "var(--brand)" }}>
            Finway Academy
          </Item>
          <Item variants={itemVariants}>
            <h2 className="mt-3 font-display text-4xl font-bold tracking-tight sm:text-5xl">
              {t("services.eyebrow")}{" "}
              <span style={{ color: "var(--brand)" }}>{t("services.eyebrow.accent")}</span>
            </h2>
          </Item>
          <Item variants={itemVariants}>
            <p className="mt-4 text-foreground/65">{t("services.subtitle")}</p>
          </Item>
        </Stagger>

        <Stagger className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3" staggerChildren={0.07}>
          {services.map((s) => (
            <Item
              key={s.t}
              variants={itemVariants}
              className="group relative overflow-hidden rounded-3xl border border-border bg-card p-6 transition-all hover:-translate-y-1"
              style={{ boxShadow: "var(--shadow-soft)" }}
            >
              <div
                aria-hidden
                className="absolute -right-12 -top-12 h-40 w-40 rounded-full opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-30"
                style={{ background: "var(--brand)" }}
              />
              <div
                className="grid h-12 w-12 place-items-center rounded-2xl text-primary-foreground transition-transform group-hover:scale-110"
                style={{ background: "var(--brand)", boxShadow: "0 10px 24px -6px color-mix(in oklab, var(--brand) 55%, transparent)" }}
              >
                <s.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 font-display text-xl font-semibold">{t(s.t)}</h3>
              <p className="mt-2 text-sm text-foreground/65">{t(s.d)}</p>
              <ArrowUpRight className="absolute right-5 top-5 h-5 w-5 text-foreground/30 transition-all group-hover:rotate-12" style={{ color: "color-mix(in oklab, var(--brand) 60%, transparent)" }} />
            </Item>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
