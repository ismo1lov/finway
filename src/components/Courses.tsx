import { useState } from "react";
import { useI18n } from "@/lib/i18n";
import { Reveal, Stagger, Item, itemVariants } from "./Reveal";
import { Check, X, ArrowRight, BookOpen, Clock, Users } from "lucide-react";

const coursesData = [
  { id: 1, k: "course.1", icon: BookOpen, duration: "3 oy", students: "12-15 kishi" },
  { id: 2, k: "course.2", icon: Clock, duration: "2 oy", students: "10-12 kishi" },
  { id: 3, k: "course.3", icon: Users, duration: "4 oy", students: "8-10 kishi" },
];

export function Courses() {
  const { t } = useI18n();
  const [selectedCourse, setSelectedCourse] = useState<number | null>(null);

  const activeCourse = coursesData.find((c) => c.id === selectedCourse);

  return (
    <section id="courses" className="relative bg-background py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5">
        <div className="mb-16 text-center">
          <Reveal>
            <span className="text-xs uppercase tracking-[0.25em]" style={{ color: "var(--brand)" }}>
              {t("courses.eyebrow")}
            </span>
            <h2 className="mt-4 font-display text-4xl font-bold tracking-tight sm:text-5xl">
              {t("courses.title")}
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-foreground/70">
              {t("courses.subtitle")}
            </p>
          </Reveal>
        </div>

        <Stagger className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {coursesData.map((c) => (
            <Item key={c.id} variants={itemVariants}>
              <div
                className="group relative flex h-full flex-col overflow-hidden rounded-[2rem] border border-border bg-card p-8 transition-all hover:border-brand/50 hover:shadow-lg"
                style={{ background: "linear-gradient(135deg, var(--card), color-mix(in oklab, var(--brand) 5%, var(--card)))" }}
              >
                <div className="mb-6 grid h-12 w-12 place-items-center rounded-2xl bg-tint" style={{ color: "var(--brand)" }}>
                  <c.icon className="h-6 w-6" />
                </div>
                <h3 className="font-display text-2xl font-bold">{t(`${c.k}.title` as any)}</h3>
                <p className="mt-3 flex-grow text-sm text-foreground/60 leading-relaxed">
                  {t(`${c.k}.desc` as any)}
                </p>
                
                <div className="mt-8 space-y-3 border-t border-border pt-6 text-sm text-foreground/70">
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4" />
                    <span>{c.duration}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="h-4 w-4" />
                    <span>{c.students}</span>
                  </div>
                </div>

                <button
                  onClick={() => setSelectedCourse(c.id)}
                  className="mt-8 flex w-full cursor-pointer items-center justify-center gap-2 rounded-xl border border-border bg-background py-3 text-sm font-semibold transition-colors hover:bg-tint hover:text-brand"
                >
                  Batafsil ma'lumot
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </Item>
          ))}
        </Stagger>
      </div>

      {/* Modal */}
      {selectedCourse && activeCourse && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
          <div className="absolute inset-0 bg-background/80 backdrop-blur-md" onClick={() => setSelectedCourse(null)} />
          <Reveal className="relative w-full max-w-2xl overflow-hidden rounded-[2.5rem] border border-border bg-card shadow-2xl">
            <button
              onClick={() => setSelectedCourse(null)}
              className="absolute right-6 top-6 grid h-10 w-10 place-items-center rounded-full bg-tint transition-colors hover:bg-brand/10"
            >
              <X className="h-5 w-5" />
            </button>

            <div className="p-8 sm:p-12">
              <span className="text-xs uppercase tracking-widest text-brand" style={{ color: "var(--brand)" }}>
                Kurs tafsilotlari
              </span>
              <h3 className="mt-2 font-display text-3xl font-bold sm:text-4xl">
                {t(`${activeCourse.k}.title` as any)}
              </h3>
              
              <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2">
                <div className="space-y-6">
                  <div className="space-y-2">
                    <div className="text-sm font-semibold text-brand" style={{ color: "var(--brand)" }}>{t("course.limited")}</div>
                    <div className="text-sm text-foreground/70">{t("course.next_group")}</div>
                  </div>
                  
                  <div className="rounded-2xl bg-tint p-5">
                    <div className="text-xs font-medium uppercase tracking-wider text-foreground/50">Kurs narxi</div>
                    <div className="mt-1 font-display text-2xl font-bold">{t("course.price")}</div>
                    <div className="mt-1 text-xs text-foreground/60">{t("course.installment")}</div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="font-semibold italic text-brand" style={{ color: "var(--brand)" }}>{t("course.bonus")}</div>
                  <ul className="space-y-3">
                    {["Amaliy mashg'ulotlar", "Xalqaro sertifikat", "Ishga joylashishga ko'mak", "Bepul qo'shimcha darslar"].map((item) => (
                      <li key={item} className="flex items-center gap-3 text-sm text-foreground/80">
                        <Check className="h-4 w-4 text-brand" style={{ color: "var(--brand)" }} />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <a
                href="#contact"
                onClick={() => setSelectedCourse(null)}
                className="mt-10 flex w-full items-center justify-center gap-2 rounded-2xl bg-brand py-4 text-sm font-bold text-primary-foreground shadow-lg transition-transform hover:scale-[1.02]"
                style={{ background: "var(--brand)", boxShadow: "var(--glow-brand)" }}
              >
                Biz bilan bog'lanish
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </Reveal>
        </div>
      )}
    </section>
  );
}
