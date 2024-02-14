export default class Modal {
  constructor(openBtn, closeBtn, containerModal) {
    this.openBtn = document.querySelector(openBtn);
    this.closeBtn = document.querySelector(closeBtn);
    this.containerModal = document.querySelector(containerModal);

    // bind this ao callback para fazer referencia ao objeto da classe
    this.eventToggleModal = this.eventToggleModal.bind(this);
    this.cliqueForaModal = this.cliqueForaModal.bind(this);
  }

  // abre ou fecha o modal
  toggleModal() {
    this.containerModal.classList.toggle("ativo");
  }

  // adiciona o evento de toggle ao modal
  eventToggleModal(e) {
    e.preventDefault();
    this.toggleModal();
  }

  // fecha o modal ao clicar do lado de fora
  cliqueForaModal(e) {
    if (e.target === this.containerModal) {
      this.toggleModal(e);
    }
  }

  // adiciona os eventos ao modal
  addModalEvent() {
    this.openBtn.addEventListener("click", this.eventToggleModal);
    this.closeBtn.addEventListener("click", this.eventToggleModal);
    this.containerModal.addEventListener("click", this.cliqueForaModal);
  }

  init() {
    if (this.openBtn && this.closeBtn && this.containerModal) {
      this.addModalEvent();
    }
    return this;
  }
}
