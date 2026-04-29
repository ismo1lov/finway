import { useState } from "react";
import { useI18n } from "@/lib/i18n";
import { Reveal, Stagger, Item, itemVariants } from "./Reveal";
import { ArrowRight, Mail, MapPin, Phone, Instagram, Send, X, Map as MapIcon } from "lucide-react";
import logo from "@/assets/finway-logo.png";

export function CTA() {
  const { t } = useI18n();
  const [showBranches, setShowBranches] = useState(false);
  const [selectedBranch, setSelectedBranch] = useState<1 | 2 | null>(null);

  const maps = {
    1: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d187.36831320317134!2d69.21945597633288!3d41.2894328983094!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b0076b4685f%3A0xa5a91d9835a58e4d!2sUy!5e0!3m2!1suz!2s!4v1777464432229!5m2!1suz!2s",
    2: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1115.0924856598763!2d69.20391801472523!3d41.34156682781274!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8d547d75b353%3A0x52155dd8480ee7d!2sFinway!5e0!3m2!1suz!2s!4v1777463327545!5m2!1suz!2s"
  };

  return (
    <section id="contact" className="relative bg-card py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5">
        <Stagger className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          <div>
            <Item variants={itemVariants} className="text-xs uppercase tracking-[0.25em]" style={{ color: "var(--brand)" }}>
              {t("contact.eyebrow")}
            </Item>
            <Item variants={itemVariants}>
              <h2 className="mt-3 font-display text-4xl font-bold tracking-tight sm:text-5xl">
                {t("contact.title")}
              </h2>
            </Item>
            <Item variants={itemVariants}>
              <p className="mt-4 max-w-md text-foreground/70">
                {t("contact.subtitle")}
              </p>
            </Item>
            <Item variants={itemVariants} className="mt-8 space-y-5">
              <a href="tel:+998951000171" className="group flex items-center gap-4 transition-colors hover:text-brand">
                <div className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-tint text-brand group-hover:bg-brand/10 transition-colors" style={{ color: "var(--brand)" }}>
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-sm font-semibold">{t("contact.info.phone")}</div>
                  <div className="mt-0.5 text-sm text-foreground/60">+998 95 100 01 71</div>
                </div>
              </a>

              <a href="https://t.me/Nasiba_Finway" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-4 transition-colors hover:text-brand">
                <div className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-tint text-brand group-hover:bg-brand/10 transition-colors" style={{ color: "var(--brand)" }}>
                  <Send className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-sm font-semibold">Telegram</div>
                  <div className="mt-0.5 text-sm text-foreground/60">@Nasiba_Finway</div>
                </div>
              </a>

              <a href="https://www.instagram.com/finwayuz/" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-4 transition-colors hover:text-brand">
                <div className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-tint text-brand group-hover:bg-brand/10 transition-colors" style={{ color: "var(--brand)" }}>
                  <Instagram className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-sm font-semibold">Instagram</div>
                  <div className="mt-0.5 text-sm text-foreground/60">@finwayuz</div>
                </div>
              </a>

              <button 
                onClick={() => setShowBranches(true)}
                className="group flex w-full items-center gap-4 text-left transition-colors hover:text-brand cursor-pointer"
              >
                <div className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-tint text-brand group-hover:bg-brand/10 transition-colors" style={{ color: "var(--brand)" }}>
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-sm font-semibold">Manzil</div>
                  <div className="mt-0.5 text-sm text-foreground/60">Filialni tanlash uchun bosing</div>
                </div>
              </button>
            </Item>
          </div>

          <Item variants={itemVariants}>
            <form className="glass rounded-[2rem] p-8 sm:p-10">
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div className="sm:col-span-2">
                  <label className="inline-block py-2.5 text-sm font-medium">{t("contact.form.name")}</label>
                  <input type="text" className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none focus:border-brand focus:ring-1 focus:ring-brand" placeholder={t("contact.form.name")} />
                </div>
                <div className="sm:col-span-2">
                  <label className="inline-block py-2.5 text-sm font-medium">{t("contact.form.phone")}</label>
                  <input type="tel" className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none focus:border-brand focus:ring-1 focus:ring-brand" placeholder="+998" />
                </div>
                <div className="sm:col-span-2">
                  <label className="inline-block py-2.5 text-sm font-medium">{t("contact.form.message")}</label>
                  <textarea rows={3} className="w-full resize-none rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none focus:border-brand focus:ring-1 focus:ring-brand" placeholder={t("contact.form.message")} />
                </div>
                <button type="button" className="mt-2 w-full cursor-pointer rounded-xl px-4 py-3.5 text-sm font-semibold text-primary-foreground sm:col-span-2 transition-transform hover:scale-[1.02]" style={{ background: "var(--brand)", boxShadow: "var(--glow-brand)" }}>
                  {t("contact.form.submit")}
                </button>
              </div>
            </form>
          </Item>
        </Stagger>
      </div>

      {/* Branch Selection Modal */}
      {showBranches && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-background/80 backdrop-blur-md" onClick={() => setShowBranches(false)} />
          <Reveal className="relative w-full max-w-md overflow-hidden rounded-[2rem] border border-border bg-card p-8 shadow-2xl">
            <button onClick={() => setShowBranches(false)} className="absolute right-6 top-6 grid h-10 w-10 place-items-center rounded-full bg-tint hover:bg-brand/10 transition-colors">
              <X className="h-5 w-5" />
            </button>
            <h3 className="font-display text-2xl font-bold">Filialni tanlang</h3>
            <p className="mt-2 text-sm text-foreground/60">O'zingizga yaqin bo'lgan filialni tanlang</p>
            
            <div className="mt-8 space-y-4">
              <button 
                onClick={() => { setSelectedBranch(1); setShowBranches(false); }}
                className="flex w-full items-center justify-between rounded-2xl border border-border bg-tint/50 p-5 transition-all hover:border-brand hover:bg-tint"
              >
                <div className="flex items-center gap-4">
                  <div className="grid h-10 w-10 place-items-center rounded-xl bg-brand text-primary-foreground">
                    <MapIcon className="h-5 w-5" />
                  </div>
                  <div className="text-left">
                    <div className="font-semibold text-foreground">1-filial (Novza)</div>
                    <div className="text-xs text-foreground/60">Asosiy bino</div>
                  </div>
                </div>
                <ArrowRight className="h-5 w-5 text-brand" />
              </button>

              <button 
                onClick={() => { setSelectedBranch(2); setShowBranches(false); }}
                className="flex w-full items-center justify-between rounded-2xl border border-border bg-tint/50 p-5 transition-all hover:border-brand hover:bg-tint"
              >
                <div className="flex items-center gap-4">
                  <div className="grid h-10 w-10 place-items-center rounded-xl bg-brand text-primary-foreground">
                    <MapIcon className="h-5 w-5" />
                  </div>
                  <div className="text-left">
                    <div className="font-semibold text-foreground">2-filial (Beruniy)</div>
                    <div className="text-xs text-foreground/60">Metro Beruniy yaqinida</div>
                  </div>
                </div>
                <ArrowRight className="h-5 w-5 text-brand" />
              </button>
            </div>
          </Reveal>
        </div>
      )}

      {/* Map Modal */}
      {selectedBranch && (
        <div className="fixed inset-0 z-[110] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-background/80 backdrop-blur-md" onClick={() => setSelectedBranch(null)} />
          <Reveal className="relative w-full max-w-4xl overflow-hidden rounded-[2.5rem] border border-border bg-card shadow-2xl">
            <div className="flex items-center justify-between border-b border-border p-6 sm:px-8">
              <h3 className="font-display text-xl font-bold">
                {selectedBranch === 1 ? "1-filial (Novza) xaritasi" : "2-filial (Beruniy) xaritasi"}
              </h3>
              <button onClick={() => setSelectedBranch(null)} className="grid h-10 w-10 place-items-center rounded-full bg-tint hover:bg-brand/10 transition-colors">
                <X className="h-5 w-5" />
              </button>
            </div>
            <div className="aspect-video w-full bg-muted">
              <iframe 
                src={maps[selectedBranch]} 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <div className="p-6 text-center">
              <button 
                onClick={() => setSelectedBranch(null)}
                className="rounded-xl bg-brand px-8 py-3 text-sm font-bold text-primary-foreground transition-transform hover:scale-[1.02]"
                style={{ background: "var(--brand)" }}
              >
                Yopish
              </button>
            </div>
          </Reveal>
        </div>
      )}
    </section>
  );
}

export function Footer() {
  const { t } = useI18n();
  return (
    <footer className="border-t border-border bg-tint px-5 py-10 sm:py-12">
      <Stagger className="mx-auto grid max-w-6xl grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-4">
        <Item variants={itemVariants}>
          <div className="inline-block rounded-full bg-white px-4 py-1.5">
            <img src={logo} alt="Finway Academy" className="h-8 w-auto" />
          </div>
          <p className="mt-4 max-w-xs text-sm text-foreground/60">{t("footer.tagline")}</p>
        </Item>
        <Item variants={itemVariants}>
          <div className="text-xs uppercase tracking-[0.2em] text-foreground/50">{t("footer.menu")}</div>
          <ul className="mt-4 space-y-2 text-sm">
            <li><a href="#top" className="hover:text-brand transition-colors">{t("nav.home")}</a></li>
            <li><a href="#intro" className="hover:text-brand transition-colors">{t("nav.intro")}</a></li>
            <li><a href="#courses" className="hover:text-brand transition-colors">{t("nav.courses")}</a></li>
            <li><a href="#projects" className="hover:text-brand transition-colors">{t("nav.projects")}</a></li>
            <li><a href="#contact" className="hover:text-brand transition-colors">{t("nav.contact")}</a></li>
          </ul>
        </Item>
        <Item variants={itemVariants}>
          <div className="text-xs uppercase tracking-[0.2em] text-foreground/50">{t("footer.courses")}</div>
          <ul className="mt-4 space-y-2 text-sm">
            <li><a href="#courses" className="hover:text-brand transition-colors">{t("course.1.title")}</a></li>
            <li><a href="#courses" className="hover:text-brand transition-colors">{t("course.2.title")}</a></li>
            <li><a href="#courses" className="hover:text-brand transition-colors">{t("course.3.title")}</a></li>
          </ul>
        </Item>
        <Item variants={itemVariants}>
          <div className="text-xs uppercase tracking-[0.2em] text-foreground/50">{t("footer.contact")}</div>
          <ul className="mt-4 space-y-2.5 text-sm">
            <li><a href="https://www.instagram.com/finwayuz/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-brand transition-colors"><Instagram className="h-4 w-4 text-brand" /><span>{t("footer.social.instagram")}</span></a></li>
            <li><a href="https://t.me/Nasiba_Finway" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-brand transition-colors"><Send className="h-4 w-4 text-brand" /><span>{t("footer.social.telegram")}</span></a></li>
            <li><a href="tel:+998951000171" className="flex items-center gap-2 hover:text-brand transition-colors"><Phone className="h-4 w-4 text-brand" /><span>+998 95 100 01 71</span></a></li>
          </ul>
        </Item>
      </Stagger>
      <div className="mx-auto mt-8 max-w-6xl border-t border-border pt-6 text-center text-xs text-foreground/50">
        <Reveal>
          © {new Date().getFullYear()} Finway Academy. {t("footer.rights")}
        </Reveal>
      </div>
    </footer>
  );
}
