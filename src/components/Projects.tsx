import { useEffect, useState } from "react";
import { useI18n } from "@/lib/i18n";
import { Stagger, Item, itemVariants } from "./Reveal";
import { ArrowRight, X } from "lucide-react";
import long from "@/assets/long.png";
import long2 from "@/assets/long-2.png";
import short from "@/assets/short.png";
import short2 from "@/assets/short-2.png";

const projects = [
  { id: 1, img: long, alt: "Finway bitiruvchisi 1", pos: "object-right" },
  { id: 2, img: long2, alt: "Finway bitiruvchisi 2", pos: "object-center" },
  { id: 3, img: short, alt: "Finway bitiruvchisi 3", pos: "object-center" },
  { id: 4, img: short2, alt: "Finway bitiruvchisi 4", pos: "object-center" },
];

export function Projects() {
  const { t } = useI18n();
  const [selectedId, setSelectedId] = useState<number | null>(null);

  const activeImage = projects.find(p => p.id === selectedId);

  useEffect(() => {
    if (selectedId === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedId(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [selectedId]);

  return (
    <section id="projects" className="relative bg-card py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5">
        <Stagger className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div className="max-w-xl">
            <Item variants={itemVariants} className="text-xs uppercase tracking-[0.25em]" style={{ color: "var(--brand)" }}>
              {t("projects.eyebrow")}
            </Item>
            <Item variants={itemVariants}>
              <h2 className="mt-3 font-display text-4xl font-bold tracking-tight sm:text-5xl">
                {t("projects.title")}
              </h2>
            </Item>
          </div>
          <Item variants={itemVariants} className="max-w-md text-sm text-foreground/65">
            {t("projects.subtitle")}
          </Item>
        </Stagger>

        <Stagger className="mt-14 grid grid-cols-1 gap-4 md:grid-cols-12" staggerChildren={0.1}>
          {projects.map((p, i) => {
            const colSpan = i === 0 || i === 3 ? "md:col-span-7" : "md:col-span-5";
            return (
              <Item
                key={p.id}
                variants={itemVariants}
                onClick={() => setSelectedId(p.id)}
                className={`group relative cursor-pointer overflow-hidden rounded-[2.5rem] bg-[#0c0c0c] h-80 sm:h-96 md:h-[400px] ${colSpan} border border-white/5`}
              >
                <img
                  src={p.img}
                  alt={p.alt}
                  loading="lazy"
                  className={`h-full w-full object-cover ${p.pos} transition-transform duration-700 group-hover:scale-[1.03]`}
                />

                <div className="absolute right-6 top-6 z-10 grid h-12 w-12 shrink-0 place-items-center rounded-full border border-brand/40 text-brand backdrop-blur-md transition-all duration-300 group-hover:bg-white group-hover:text-brand group-hover:border-brand group-hover:scale-110">
                  <ArrowRight className="h-5 w-5 -rotate-45" />
                </div>
              </Item>
            );
          })}
        </Stagger>
      </div>

      {/* Lightbox */}
      {activeImage && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/85 p-4 backdrop-blur-md sm:p-6 animate-in fade-in duration-200"
          onClick={() => setSelectedId(null)}
        >
          <img
            src={activeImage.img}
            alt={activeImage.alt}
            onClick={(e) => e.stopPropagation()}
            className="relative z-10 w-[min(92vw,860px)] max-h-[85vh] rounded-2xl object-contain shadow-2xl animate-in fade-in zoom-in-95 duration-300"
          />
          <button
            onClick={() => setSelectedId(null)}
            aria-label="Yopish"
            className="absolute right-5 top-5 z-20 grid h-11 w-11 place-items-center rounded-full border border-white/15 bg-white/10 text-white backdrop-blur-md transition-colors hover:bg-white/20"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
      )}
    </section>
  );
}
