export default function thoughts() {
  const thoughts = [
    "Código é meio. Visão é o fim.",
    "Menos hype. Mais fundamento.",
    "Prefiro clareza hoje do que dor amanhã.",
    "Esse portfólio sou eu, agora.",
    "Aprender certo vale mais que aprender rápido.",
    "Cada linha de código é uma decisão.",
    "Simplicidade é sofisticação.",
    "O melhor momento para começar era ontem. O segundo melhor é agora.",
  ];

  const thoughtEl = document.getElementById("thought");
  console.log(thoughtEl);
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
