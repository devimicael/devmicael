document.querySelector(".form").addEventListener("submit", handleSubmit);
const MAXTENTATIVAS = 3;
const user = new User();
let random = randomNumber();

function handleSubmit(e) {
  e.preventDefault();
  const tentativas = document.querySelector("#tentativas");
  const infos = document.querySelector("#infos");
  
  const data = Object.fromEntries(new FormData(this));
  user.numero_enviado = data.number;

  if (user.tentativas === MAXTENTATIVAS) {
    infos.dataset.infos = "Você não possui mais tentativas";
    return;
  }
  
  const resultado = verificarRandom(+data.number, random);
  if (resultado.igual) {
    infos.dataset.infos = "Parabéns! Você acertou o número!";
    tentativas.dataset.tentativas = +tentativas.dataset.tentativas + 1;

    user.pontos += (2.5 * 3) / 100;
    user.tentativas += 1;
    user.numeros_acertados.push(data.number);
    user.numero_aleatorio = random;

  } else if(resultado.maior) {
    infos.dataset.infos = "Infos: Seu chute foi muito alto. rsrs";
    tentativas.dataset.tentativas = +tentativas.dataset.tentativas + 1;
    user.tentativas += 1;
  } else if(resultado.menor) {
    infos.dataset.infos = "Info: Seu chute foi lá em baixo...";
    tentativas.dataset.tentativas = +tentativas.dataset.tentativas + 1;
    user.tentativas += 1;
  }


  infos.textContent = infos.dataset.infos;
  tentativas.textContent = tentativas.dataset.tentativas;
}
function randomNumber(min = 1, max = 100) {
  if (min > max) [min, max] = [max, min];
  if (min === max) [min, max] = [1, 100];

  return Math.floor(Math.random() * (max - min + 1)) + min;
}


function verificarRandom(input, random) {
  return {
    igual: (input === random),
    maior: (input > random),
    menor: (input < random),
  }
}

function User() {
  return {
    pontos: 0,
    tentativas: 0,
    numeros_acertados: new Array(),
    numero_errado: 0,
    numero_enviado: 0,
    numero_aleatorio: 0,
  };
} 