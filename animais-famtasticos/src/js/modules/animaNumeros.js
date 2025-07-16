export default function _initNumbersAnimation() {
  const animaisNumeros = document.querySelectorAll("[data-numero]");

  const observeTarget = document.querySelector(".numeros");
  const observer = new MutationObserver(handleMutation);
  observer.observe(observeTarget, { attributes: true });

  function handleMutation(mutation) {
    if (mutation[0].target.classList.contains("ativo")) {
      observer.disconnect();
      animaNumeros();
    }
  }

  function animaNumeros() {
    animaisNumeros.forEach((numero) => {
      const total = +numero.textContent;
      const incremento = total / 100;

      let start = 0;
      const timer = setInterval(() => {
        start += incremento;
        numero.textContent = Math.floor(start);
        if (start > total) {
          clearInterval(timer);
          numero.textContent = total;
        }
      }, Math.random() * 60);
    });
  }
}
