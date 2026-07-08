/**
 * Scroll safely to an element, adapting dynamically to layout shifts caused by lazy-loaded components.
 */
export const scrollToElement = (id: string): boolean => {
  const element = document.getElementById(id);
  if (!element) return false;

  let count = 0;
  const maxAttempts = 15; // Track position for 1.5 seconds (15 * 100ms)

  const scroll = () => {
    const el = document.getElementById(id);
    if (!el) return;

    const rect = el.getBoundingClientRect();
    const targetY = rect.top + window.scrollY - 80; // 80px offset for the fixed navbar

    window.scrollTo({
      top: targetY,
      behavior: 'smooth'
    });

    if (count < maxAttempts) {
      count++;
      setTimeout(scroll, 100);
    }
  };

  scroll();
  return true;
};
