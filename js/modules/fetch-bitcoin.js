export default function fetchBitcoin(url, target) {
  fetch(url)
    .then((resp) => resp.json())
    .then((data) => {
      const btcPreco = document.querySelector(target);
      btcPreco.innerText = (1000 / data.BRL.sell).toFixed(4);
    })
    .catch((error) => {
      throw new Error(`Erro na requisição: ${error}`);
    });
}
