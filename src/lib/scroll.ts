/** Défilement doux vers une section (compensé par le scroll-padding du header fixe). */
export function scrollToSection(selector: string): void {
  const el = document.querySelector(selector);
  if (el) {
    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}
