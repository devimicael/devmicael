import _initNumbersAnimation from "./animaNumeros.js";

export default function _initFetchAnimais() {
  const URL = "src/js/animais-api.json";
  async function fetchAnimais(url) {
    const animaisResponse = await fetch(url);
    const animaisJSON = await animaisResponse.json();
    const numerosDiv = document.querySelector(".grid-numeros");

    animaisJSON.forEach((animal) => {
      const divAnimal = createAnimal(animal);
      numerosDiv.appendChild(divAnimal);
    });

    _initNumbersAnimation();
  }

  function createAnimal(animal) {
    const div = document.createElement("div");
    div.classList.add("numero-animal");

    div.innerHTML = `
      <h3>${animal.specie}</h3>
      <span data-numero>${animal.total}</span>
    `;

    return div;
  }

  fetchAnimais(URL);
}
