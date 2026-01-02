import thoughts from "./modules/thoughts.js";
import animationScroll from "./modules/animationScroll.js";

thoughts();
animationScroll();

document.addEventListener("DOMContentLoaded", () => {
  const yearElement = document.querySelector(".copyright");
  if (yearElement) {
    const currentYear = new Date().getFullYear();
    yearElement.innerHTML = yearElement.innerHTML.replace("2026", currentYear);
  }
});
