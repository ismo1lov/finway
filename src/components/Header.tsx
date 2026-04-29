import { useState } from "react";
import { useI18n } from "@/lib/i18n";
import { Menu, X } from "lucide-react";
import logo from "@/assets/finway-logo.png";
import { motion } from "framer-motion";

const navKeys = [
  { id: "top", k: "nav.home" as const },
  { id: "intro", k: "nav.intro" as const },
  { id: "courses", k: "nav.courses" as const },
  { id: "projects", k: "nav.projects" as const },
  { id: "contact", k: "nav.contact" as const },
];

export function Header() {
  const { t } = useI18n();
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4">
      <motion.div 
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 2.8, duration: 0.8, ease: "easeOut" }}
        className="glass mx-auto flex max-w-6xl items-center justify-between rounded-full pl-2 pr-3 py-2 sm:pl-2 sm:pr-3"
      >
        <a href="#top" className="group relative flex items-center gap-2">
          <div className="rounded-full bg-white px-4 py-1.5 transition-transform duration-500 group-hover:scale-[1.05]">
            <img
              src={logo}
              alt="Finwa Academy"
              className="relative h-8 w-auto md:h-9"
            />
          </div>
        </a>

        <nav className="hidden items-center gap-7 md:flex">
          {navKeys.map((n) => (
            <a
              key={n.id}
              href={`#${n.id}`}
              className="story-link text-sm font-medium text-foreground/75 transition-colors hover:text-brand"
            >
              {t(n.k)}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="#contact"
            className="hidden rounded-full px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.04] sm:inline-flex"
            style={{ background: "var(--brand)" }}
          >
            {t("nav.start")}
          </a>
          <button
            aria-label="Menu"
            onClick={() => setOpen((o) => !o)}
            className="grid h-9 w-9 place-items-center rounded-full border border-border md:hidden"
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </motion.div>

      {open && (
        <div className="glass-strong mx-auto mt-2 max-w-6xl rounded-2xl p-4 md:hidden animate-fade-in">
          <div className="flex flex-col gap-1">
            {navKeys.map((n) => (
              <a
                key={n.id}
                href={`#${n.id}`}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-3 text-sm hover:bg-brand-tint"
              >
                {t(n.k)}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-full px-4 py-3 text-center text-sm font-semibold text-primary-foreground"
              style={{ background: "var(--brand)", boxShadow: "var(--glow-brand)" }}
            >
              {t("nav.start")}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
