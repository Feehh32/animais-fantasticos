export default function initFetchBitcoin() {
  fetch("https://blockchain.info/ticker")
    .then((resp) => resp.json())
    .then((data) => {
      const btcPreco = document.querySelector(".btc-preco");
      btcPreco.innerText = (1000 / data.BRL.sell).toFixed(4);
    })
    .catch((error) => {
      throw new Error(`Erro na requisição: ${error}`);
    });
}
