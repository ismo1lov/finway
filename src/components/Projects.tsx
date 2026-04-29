import { useState } from "react";
import { useI18n } from "@/lib/i18n";
import { Reveal, Stagger, Item, itemVariants } from "./Reveal";
import { ArrowRight, X, Quote } from "lucide-react";
import malika from "@/assets/malika.png";
import azizbek from "@/assets/azizbek.png";
import dilnoza from "@/assets/dilnoza.png";
import sardor from "@/assets/sardor.png";

const projects = [
  {
    id: 1,
    img: malika,
    tag: "Hozirda yirik ishlab chiqarish korxonasida bosh buxgalter",
    title: "Malika Ahmedova",
    review: "Finway Academy'da olgan bilimlarim hayotimni o'zgartirdi. Ustozlarim yordamida nafaqat nazariyani, balki amaliy buxgalteriyani ham mukammal o'rgandim. Hozirda yirik korxonada bosh buxgalter lavozimida ishlayapman."
  },
  {
    id: 2,
    img: azizbek,
    tag: "1C dasturini mukammal o'rganib, xususiy firmada ish boshladi",
    title: "Azizbek Karimov",
    review: "1C dasturini o'rganish men uchun qiyin tuyulgandi, lekin bu yerda hammasi juda sodda tushuntirildi. Kursni tugatiboq ishga kirdim. Mentorlarga katta rahmat!"
  },
  {
    id: 3,
    img: dilnoza,
    tag: "Noldan o'rganib, 3 oy ichida diplom va ishga ega bo'ldi",
    title: "Dilnoza Mansurova",
    review: "Buxgalteriya haqida hech qanday tushuncham yo'q edi. 3 oy ichida noldan balansgacha o'rgandim. Hozirda o'z ishimning ustasiman va yaxshi daromad topyapman."
  },
  {
    id: 4,
    img: sardor,
    tag: "Super glavbux kursini bitirib, o'z konsaltingini ochdi",
    title: "Sardor Olimov",
    review: "Super glavbux kursi menga soliq optimallashtirish va murakkab hisob-kitoblarni o'rgatdi. O'z bilimlarimga ishonch hosil qilib, xususiy konsalting markazimni ochdim."
  },
];

export function Projects() {
  const { t } = useI18n();
  const [selectedGrad, setSelectedGrad] = useState<number | null>(null);

  const activeGrad = projects.find(p => p.id === selectedGrad);

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
                onClick={() => setSelectedGrad(p.id)}
                className={`group relative cursor-pointer overflow-hidden rounded-[2rem] bg-muted h-72 sm:h-80 md:h-[320px] ${colSpan}`}
              >
                <img
                  src={p.img}
                  alt={p.title}
                  loading="lazy"
                  className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(to top, rgba(0,0,0,0.8) 0%, transparent 60%)",
                  }}
                />

                <div className="absolute right-6 top-6 grid h-12 w-12 shrink-0 place-items-center rounded-full border border-white/20 text-white backdrop-blur-sm transition-colors group-hover:bg-white group-hover:text-black">
                  <ArrowRight className="h-5 w-5 -rotate-45" />
                </div>

                <div className="absolute inset-x-0 bottom-0 p-8 sm:p-10 text-white">
                  <h3 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
                    {p.title}
                  </h3>
                  <p className="mt-3 max-w-md text-sm text-white/70">
                    {p.tag}
                  </p>
                </div>
              </Item>
            );
          })}
        </Stagger>
      </div>

      {/* Modal */}
      {selectedGrad && activeGrad && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
          <div className="absolute inset-0 bg-background/80 backdrop-blur-md" onClick={() => setSelectedGrad(null)} />
          <Reveal className="relative w-full max-w-3xl overflow-hidden rounded-[2.5rem] border border-border bg-card shadow-2xl">
            <button
              onClick={() => setSelectedGrad(null)}
              className="absolute right-6 top-6 z-10 grid h-10 w-10 place-items-center rounded-full bg-tint transition-colors hover:bg-brand/10"
            >
              <X className="h-5 w-5" />
            </button>

            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="relative h-64 md:h-full min-h-[300px]">
                <img src={activeGrad.img} alt={activeGrad.title} className="h-full w-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent md:hidden" />
              </div>
              <div className="flex flex-col justify-center p-8 sm:p-12">
                <Quote className="h-10 w-10 text-brand opacity-20" style={{ color: "var(--brand)" }} />
                <h3 className="mt-4 font-display text-3xl font-bold">{activeGrad.title}</h3>
                <p className="mt-1 text-sm font-medium text-brand" style={{ color: "var(--brand)" }}>{activeGrad.tag}</p>
                <p className="mt-6 text-base leading-relaxed text-foreground/70 italic">
                  "{activeGrad.review}"
                </p>
                <button
                  onClick={() => setSelectedGrad(null)}
                  className="mt-10 rounded-xl bg-brand py-3.5 text-sm font-bold text-primary-foreground shadow-lg transition-transform hover:scale-[1.02]"
                  style={{ background: "var(--brand)", boxShadow: "var(--glow-brand)" }}
                >
                  Yopish
                </button>
              </div>
            </div>
          </Reveal>
        </div>
      )}
    </section>
  );
}
