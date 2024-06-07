export default function useScroll() {
  function scrollTo(elementID) {
    const element = document.getElementById(elementID);
    const y = element.getBoundingClientRect().top + window.scrollY;

    window.scroll({
      top: y,
      behavior: "smooth",
    });
  }

  return { scrollTo };
}
