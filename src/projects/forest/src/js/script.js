const mobileButton = document.querySelector("#btn-menu");
const menu = document.querySelector("#menu");

mobileButton.addEventListener("click", () => {
  menu.classList.toggle("hidden");
  menu.classList.toggle("flex");
});

menu.addEventListener("click", () => {
  menu.classList.add("hidden");
  menu.classList.remove("flex");
});


const video = document.getElementById("video");
const dia = document.getElementById("dia");
const temperatura = document.getElementById("temperatura");
const tempo = document.getElementById("tempo");

const random = Math.floor(Math.random() * 10) + 20;

temperatura.textContent = `${random}°`;
tempo.textContent = (random < 25 ? `🌧️` : `☀️`) + ` ${random + 5}%`;

const date = new Date();
dia.textContent = date.toLocaleDateString('pt-BR', { weekday: 'long' });

video.src = random < 25 ? `./src/img/video_chuva.mp4` : `./src/img/video_sol.mp4`;