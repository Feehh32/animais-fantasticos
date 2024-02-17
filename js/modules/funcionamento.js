export default class initFuncionamento {
  constructor(funcionamento, activateClass) {
    this.funcionamento = document.querySelector(funcionamento);

    if (activateClass === undefined) {
      this.activateClass = "open";
    } else {
      this.activateClass = activateClass;
    }
  }

  functioningData() {
    this.diasSemana = this.funcionamento.dataset.semana.split(",").map(Number);
    this.horarioSemana = this.funcionamento.dataset.horario
      .split(",")
      .map(Number);
  }

  datasNow() {
    this.dataAtual = new Date();
    this.diaAtual = this.dataAtual.getDay();
    this.horarioAtual = this.dataAtual.getUTCHours() - 3;
  }

  isOpen() {
    const semanaAberto = this.diasSemana.indexOf(this.diaAtual) !== -1;
    const horarioAberto =
      this.horarioAtual >= this.horarioSemana[0] &&
      this.horarioAtual < this.horarioSemana[1];
    return semanaAberto && horarioAberto;
  }

  openActivate() {
    if (this.isOpen()) this.funcionamento.classList.add(this.activateClass);
  }

  init() {
    if (this.funcionamento) {
      this.functioningData();
      this.openActivate();
      this.datasNow();
    }
    return this;
  }
}
