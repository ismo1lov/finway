import { ThemeProvider } from "next-themes";
import { I18nProvider } from "@/lib/i18n";
import { SmoothScroll } from "@/components/SmoothScroll";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Introduction } from "@/components/Introduction";
import { Projects } from "@/components/Projects";
import { Courses } from "@/components/Courses";
import { Reviews } from "@/components/Reviews";
import { FAQ } from "@/components/FAQ";
import { CTA, Footer } from "@/components/CTA";
import { FloatingAccents } from "@/components/FloatingAccents";
import { ScrollProgress } from "@/components/Parallax";
import { Preloader } from "@/components/Preloader";

function App() {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark">
      <I18nProvider>
        <Preloader />
        <SmoothScroll>
          <div className="relative min-h-screen overflow-x-clip bg-background text-foreground">
            <ScrollProgress />
            <FloatingAccents />
            {/* ambient glows */}
            <div
              aria-hidden
              className="pointer-events-none fixed inset-0 -z-10"
              style={{
                background:
                  "radial-gradient(60% 40% at 10% 10%, color-mix(in oklab, var(--brand) 10%, transparent), transparent 70%), radial-gradient(50% 40% at 90% 60%, color-mix(in oklab, var(--brand-soft) 14%, transparent), transparent 70%)",
              }}
            />
            <Header />
            <main>
              <Hero />
              <Introduction />
              <Courses />
              <Projects />
              <Reviews />
              <FAQ />
              <CTA />
            </main>
            <Footer />
          </div>
        </SmoothScroll>
      </I18nProvider>
    </ThemeProvider>
  );
}

export default App;
