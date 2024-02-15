import AnimaNumeros from "./anima-numeros.js";

export default function fetchAnimals(url, target) {
  // cria a div contendo informações com o total de animais
  const createAnimaldiv = (animal) => {
    const div = document.createElement("div");
    div.classList.add("numero-animal");

    div.innerHTML = `
                <h3>${animal.especie}</h3>
                <span data-numero>${animal.total}</span>`;
    return div;
  };

  // Preenche cada animal no DOM
  const numerosGrid = document.querySelector(target);

  const fillAnimal = (animal) => {
    const divAnimal = createAnimaldiv(animal);
    numerosGrid.appendChild(divAnimal);
  };

  // Anima os números de cada animal
  const animateAnimaNumeros = () => {
    const animaNumeros = new AnimaNumeros("[data-numero]", ".numeros", "ativo");
    animaNumeros.init();
  };

  // Puxa os animais através de um arquivo json
  // e cria cada animal utilizando createAnimal
  const createAnimal = async () => {
    try {
      // Fetch espera a resposta e transforma em JSON
      const animaisResponse = await fetch(url);
      const animaisJSON = await animaisResponse.json();
      // Após a transformação de JSON, ativa as funções
      // para preencher e animar os números
      animaisJSON.forEach((animal) => fillAnimal(animal));
      animateAnimaNumeros();
    } catch (error) {
      throw new Error(`ocorreu um erro na requisição: ${error}`);
    }
  };

  return createAnimal();
}
