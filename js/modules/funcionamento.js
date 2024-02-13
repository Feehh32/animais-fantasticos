export default function initFuncionamento() {
  const funcionamento = document.querySelector("[data-semana]");
  const diasSemana = funcionamento.dataset.semana.split(",").map(Number);
  const horarios = funcionamento.dataset.horario.split(",").map(Number);

  const dataAtual = new Date();
  const diaAtual = dataAtual.getDay();
  const horarioAtual = dataAtual.getHours();

  const semanaAberto = diasSemana.indexOf(diaAtual) !== -1;
  const horarioAberto =
    horarioAtual >= horarios[0] && horarioAtual < horarios[1];

  if (semanaAberto && horarioAberto) {
    funcionamento.classList.add("open");
  }
}
