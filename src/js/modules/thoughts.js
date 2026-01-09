export default function thoughts() {
  const thoughts = [
    "Código é commodity. Pensamento é diferencial.",
    "Prefiro clareza hoje do que dor amanhã.",
    "Aprender certo vale mais que aprender rápido.",
    "Cada linha de código é uma decisão.",
    "Fundamentos sólidos superam modismos passageiros.",
    "Entender o porquê é mais valioso que saber o quê.",
    "Simplicidade é o último grau de sofisticação.",
    "Evolução constante, resultados consistentes.",
  ];

  const thoughtEl = document.getElementById("thought");
  let index = 0;

  const rotateThought = () => {
    thoughtEl.style.opacity = 0;

    setTimeout(() => {
      thoughtEl.textContent = `"${thoughts[index]}"`;
      thoughtEl.style.opacity = 1;

      index = (index + 1) % thoughts.length;
    }, 400);
  };

  rotateThought();
  setInterval(rotateThought, 5000);
}
