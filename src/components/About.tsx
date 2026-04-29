import { useI18n } from "@/lib/i18n";
import { Reveal, Stagger, Item, itemVariants } from "./Reveal";
import { Check } from "lucide-react";
import aboutImg from "@/assets/about-classroom.jpg";

export function About() {
  const { t } = useI18n();
  const points = ["about.point.1", "about.point.2", "about.point.3", "about.point.4"] as const;
  return (
    <section id="about" className="relative bg-card py-24 sm:py-32">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 px-5 lg:grid-cols-2 lg:items-center">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2rem] border border-border">
            <img src={aboutImg} alt="Modern classroom" width={1280} height={896} loading="lazy" className="h-full w-full object-cover" />
          </div>
        </Reveal>

        <Stagger>
          <Item variants={itemVariants} className="text-xs uppercase tracking-[0.25em]" style={{ color: "var(--brand)" }}>
            {t("about.eyebrow")}
          </Item>
          <Item variants={itemVariants}>
            <h2 className="mt-3 font-display text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
              {t("about.title")}
            </h2>
          </Item>
          <Item variants={itemVariants}>
            <p className="mt-5 text-foreground/70">{t("about.body")}</p>
          </Item>
          <div className="mt-7 grid grid-cols-1 gap-3 sm:grid-cols-2">
            {points.map((p) => (
              <Item key={p} variants={itemVariants} className="flex items-start gap-3 rounded-xl border border-border bg-tint p-3">
                <span
                  className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full text-primary-foreground"
                  style={{ background: "var(--brand)" }}
                >
                  <Check className="h-3.5 w-3.5" />
                </span>
                <span className="text-sm text-foreground/85">{t(p)}</span>
              </Item>
            ))}
          </div>
        </Stagger>
      </div>
      <Stagger className="mx-auto mt-16 grid max-w-6xl grid-cols-2 gap-4 px-5 sm:grid-cols-4">
        {[
          ["2.4K+", t("hero.stat.students")],
          ["48", t("hero.stat.courses")],
          ["60+", t("hero.stat.mentors")],
          ["94%", t("hero.stat.rate")],
        ].map(([n, l]) => (
          <Item key={l} variants={itemVariants} className="glass rounded-2xl px-6 py-5 text-center">
            <div className="font-display text-3xl font-bold" style={{ color: "var(--brand)" }}>
              {n}
            </div>
            <div className="mt-1 text-sm text-foreground/60">{l}</div>
          </Item>
        ))}
      </Stagger>
    </section>
  );
}
