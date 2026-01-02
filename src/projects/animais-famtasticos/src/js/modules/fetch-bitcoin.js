export default function _initFetchBitcoin() {
  const URL = "https://blockchain.info/ticker";
  const dataBitcoin = document.querySelector("[data-bitcoin]");

  fetch(URL).then(response => {
    return response.json();
  }).then(data => {
    dataBitcoin.textContent = (100 / data.BRL.sell).toFixed(5);
  }).catch(err => {
    dataBitcoin.textContent = `R$ ${100}`;
  });
}

