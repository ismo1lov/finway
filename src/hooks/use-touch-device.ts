import { useState, useEffect } from "react";

/**
 * Returns true when the viewport width is ≤ 1024px (tablet / phone).
 * Locomotive / Lenis smooth-scroll and heavy scroll-driven animations
 * should be disabled at this breakpoint to avoid lag on mobile devices.
 */
const TOUCH_BREAKPOINT = 1024;

export function useIsTouchDevice() {
  const [isTouch, setIsTouch] = useState(() =>
    typeof window !== "undefined" ? window.innerWidth <= TOUCH_BREAKPOINT : false,
  );

  useEffect(() => {
    const mql = window.matchMedia(`(max-width: ${TOUCH_BREAKPOINT}px)`);
    const onChange = () => setIsTouch(mql.matches);
    mql.addEventListener("change", onChange);
    setIsTouch(mql.matches);
    return () => mql.removeEventListener("change", onChange);
  }, []);

  return isTouch;
}
