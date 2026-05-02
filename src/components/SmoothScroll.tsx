import { useEffect, type ReactNode } from "react";
import Lenis from "lenis";
import { useIsTouchDevice } from "@/hooks/use-touch-device";

export function SmoothScroll({ children }: { children: ReactNode }) {
  const isTouch = useIsTouchDevice();

  useEffect(() => {
    if (isTouch) return;

    const lenis = new Lenis({
      lerp: 0.05, // Lower value makes it slower and smoother
      smoothWheel: true,
      wheelMultiplier: 0.8,
    });
    let raf = 0;
    const tick = (time: number) => {
      lenis.raf(time);
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    // Anchor link interception
    const onClick = (e: MouseEvent) => {
      const t = e.target as HTMLElement | null;
      const a = t?.closest('a[href^="#"]') as HTMLAnchorElement | null;
      if (!a) return;
      const id = a.getAttribute("href")?.slice(1);
      if (!id) return;
      const el = document.getElementById(id);
      if (!el) return;
      e.preventDefault();
      lenis.scrollTo(el, { offset: -80 });
    };
    document.addEventListener("click", onClick);

    return () => {
      cancelAnimationFrame(raf);
      lenis.destroy();
      document.removeEventListener("click", onClick);
    };
  }, [isTouch]);

  return <>{children}</>;
}
