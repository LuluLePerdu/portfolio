"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

/**
 * Fades `.reveal` elements in as they enter the viewport.
 *
 * Deliberately a plain scroll/resize check rather than an IntersectionObserver:
 * these elements start at opacity 0, so anything that keeps the callback from
 * firing (a backgrounded renderer, an embedded webview, an odd screenshot
 * pipeline) would leave the page blank. A rect check on a handful of elements
 * runs once per frame at most and always agrees with what is on screen.
 */
export function Reveal() {
  const pathname = usePathname();

  useEffect(() => {
    const pending = new Set(document.querySelectorAll<HTMLElement>(".reveal:not(.is-in)"));
    if (pending.size === 0) return;

    const check = () => {
      const limit = window.innerHeight * 0.94;
      for (const el of pending) {
        const { top, bottom } = el.getBoundingClientRect();
        if (top < limit && bottom > 0) {
          el.classList.add("is-in");
          pending.delete(el);
        }
      }
      if (pending.size === 0) stop();
    };
    const stop = () => {
      window.removeEventListener("scroll", check);
      window.removeEventListener("resize", check);
    };

    // Called straight from the scroll handler rather than through
    // requestAnimationFrame, which some embedded renderers never run.
    window.addEventListener("scroll", check, { passive: true });
    window.addEventListener("resize", check);
    check();
    // Late layout shifts (fonts, images) can move things into view without a scroll.
    const settle = window.setTimeout(check, 600);

    return () => {
      stop();
      window.clearTimeout(settle);
      pending.clear();
    };
  }, [pathname]);

  return null;
}
