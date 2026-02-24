
/**
 * Smoothly scrolls to an element with a specified offset.
 * @param id The ID of the element to scroll to.
 * @param offset The offset from the top of the element (default: 80).
 */
export const scrollToElement = (id: string, offset: number = 80) => {
  const element = document.getElementById(id);
  if (element) {
    const bodyRect = document.body.getBoundingClientRect().top;
    const elementRect = element.getBoundingClientRect().top;
    const elementPosition = elementRect - bodyRect;
    const offsetPosition = elementPosition - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  }
};
