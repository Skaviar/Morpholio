export default function scrollToContact() {
  // Let a mobile menu close and release its scroll lock first.
  window.requestAnimationFrame(() => {
    const contact = document.getElementById("contact");
    if (!contact) return;
    document.getElementById("contact-heading")?.focus({ preventScroll: true });
    contact.scrollIntoView({
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
        ? "auto"
        : "smooth",
      block: "start",
    });
  });
}
