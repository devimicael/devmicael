export default function _initFunctionamento() {
  const funcionamento = document.querySelector("[data-funcionamento]");

  const diasSemanas = [1, 2, 3, 4, 5, 6];
  const horariosSemana = [8, 18];
  const dataAgora = new Date();

  const diaAgora = dataAgora.getDay();
  const horaAgora = dataAgora.getHours();

  const aberto = diasSemanas.includes(diaAgora);
  const horario =
    horaAgora >= horariosSemana[0] && horaAgora < horariosSemana[1];

  if (aberto && horario) {
    funcionamento.classList.add("ativo");
  }
}
