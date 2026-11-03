import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// Content stays visible unless the observer is available and motion is allowed.
export default function Motion() {
  const { pathname } = useLocation();
  useEffect(() => {
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (preference.matches || !("IntersectionObserver" in window)) return;
    const selector =
      ".project-card, .article-row, .experience-row, .hobby-card";
    const pending = new Set();
    const observed = new Set();
    const show = (element) => {
      element.classList.remove("reveal-pending");
      pending.delete(element);
      observer.unobserve(element);
    };
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) show(entry.target);
        });
      },
      { threshold: 0, rootMargin: "0px 0px -24px 0px" },
    );
    const observeVisibleContent = () => {
      document.querySelectorAll(selector).forEach((element) => {
        if (!element.getClientRects().length || pending.has(element)) return;
        // Animate each card once, including cards in newly expanded sections.
        if (element.dataset.revealed === "true") return;
        element.dataset.revealed = "true";
        observed.add(element);
        element.classList.add("reveal-pending");
        pending.add(element);
        observer.observe(element);
      });
    };
    const onToggle = (event) => {
      if (event.target.open) observeVisibleContent();
    };
    const onFocus = (event) => {
      const card = event.target.closest(selector);
      if (card && pending.has(card)) show(card);
    };
    const onPreference = () => {
      if (preference.matches) [...pending].forEach(show);
    };
    observeVisibleContent();
    document.addEventListener("toggle", onToggle, true);
    document.addEventListener("focusin", onFocus);
    preference.addEventListener("change", onPreference);
    return () => {
      [...pending].forEach(show);
      observer.disconnect();
      observed.forEach((element) => {
        delete element.dataset.revealed;
      });
      document.removeEventListener("toggle", onToggle, true);
      document.removeEventListener("focusin", onFocus);
      preference.removeEventListener("change", onPreference);
    };
  }, [pathname]);
  return null;
}
