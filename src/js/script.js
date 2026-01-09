import thoughts from "./modules/thoughts.js";
import animationScroll from "./modules/animationScroll.js";

thoughts();
animationScroll();

// Atualizar ano no rodapé
document.addEventListener("DOMContentLoaded", () => {
  const yearElement = document.querySelector(".copyright");
  if (yearElement) {
    const currentYear = new Date().getFullYear();
    yearElement.innerHTML = yearElement.innerHTML.replace("2026", currentYear);
  }

  // Adicionar efeito de scroll suave para links de navegação
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();

      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);

      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 90,
          behavior: 'smooth'
        });
      }
    });
  });
});
