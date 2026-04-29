import { useI18n } from "@/lib/i18n";
import { Stagger, Item, itemVariants } from "./Reveal";
import { Quote, Star } from "lucide-react";

const reviews = [
  { name: "Aziza R.", role: "review.1.role" as const, text: "review.1.text" as const },
  { name: "Bekzod K.", role: "review.2.role" as const, text: "review.2.text" as const },
  { name: "Madina S.", role: "review.3.role" as const, text: "review.3.text" as const },
];

export function Reviews() {
  const { t } = useI18n();
  return (
    <section id="reviews" className="relative bg-tint py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5">
        <Stagger className="mx-auto max-w-2xl text-center">
          <Item variants={itemVariants} className="text-xs uppercase tracking-[0.25em]" style={{ color: "var(--brand)" }}>
            {t("reviews.eyebrow")}
          </Item>
          <Item variants={itemVariants}>
            <h2 className="mt-3 font-display text-4xl font-bold tracking-tight sm:text-5xl">
              {t("reviews.title")}
            </h2>
          </Item>
        </Stagger>

        <Stagger className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-3" staggerChildren={0.1}>
          {reviews.map((r) => (
            <Item
              key={r.name}
              variants={itemVariants}
              className="relative rounded-3xl border border-border bg-card p-7"
              style={{ boxShadow: "var(--shadow-soft)" }}
            >
              <Quote className="absolute right-6 top-6 h-8 w-8 opacity-15" style={{ color: "var(--brand)" }} />
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-3.5 w-3.5 fill-current" style={{ color: "var(--brand)" }} />
                ))}
              </div>
              <p className="mt-4 text-sm leading-relaxed text-foreground/85">"{t(r.text)}"</p>
              <div className="mt-6 flex items-center gap-3 border-t border-border pt-4">
                <div
                  className="grid h-10 w-10 place-items-center rounded-full font-semibold text-primary-foreground"
                  style={{ background: "var(--brand)" }}
                >
                  {r.name[0]}
                </div>
                <div>
                  <div className="text-sm font-semibold">{r.name}</div>
                  <div className="text-xs text-foreground/55">{t(r.role)}</div>
                </div>
              </div>
            </Item>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
