

function updateDay() {
  const date = new Date();
  const formart = time => time < 10 ? `0${time}` : time;

  const timer = {
    day: [
      "Domingo",
      "Segunda-Feira",
      "Terça-Feira",
      "Quarda-Feira",
      "Quinta-Feira",
      "Sexta-Feira",
      "Sabádo"
    ],
    month: [
      "Janeiro",
      "Fevereiro",
      "Março",
      "Abril",
      "Maio",
      "Junho",
      "Julho",
      "Agosto",
      "Setembro",
      "Outubro",
      "Novembro",
      "Dezembro"
    ]
  }

  document.querySelector("[data-hours]").textContent = `${formart(date.getHours())}`;
  document.querySelector("[data-minutes]").textContent = `${formart(date.getMinutes())}`;
  document.querySelector("[data-seconds]").textContent = `${formart(date.getSeconds())}`;

  document.querySelector("[data-day]").textContent = `${timer.day[date.getDay()]}`;
  document.querySelector("[data-date]").textContent = `${date.getDate()}/${timer.month[date.getMonth()]}/${date.getFullYear()}`;

}

setInterval(() => {
  updateDay();
}, 1000);