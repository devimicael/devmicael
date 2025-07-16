export default function _animationScroll() {
  const _sections = document.querySelectorAll("[data-anime='scroll']");
  const _windownhalf = window.innerHeight * 0.68;

  if (_sections.length) {
    function _animaScroll() {
      _sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top - _windownhalf;
        if (sectionTop < 0) {
          section.classList.add("ativo");
        } else if (section.classList.contains("ativo")) {
          section.classList.remove("ativo");
        }
      });
    }
    _animaScroll();
    window.addEventListener("scroll", _animaScroll);
  }
}
