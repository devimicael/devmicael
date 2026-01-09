export default function animationScroll() {
  const fadeElements = document.querySelectorAll(".fade-in, .card, .project-card, .approach-item, .goal, .stat");
  if (fadeElements.length === 0) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px"
  });

  fadeElements.forEach(el => observer.observe(el));
}
