class Modal {
  constructor({btnopen, btnclose, containermodal}) {
    this.open = document.querySelector(btnopen);
    this.close = document.querySelector(btnclose);
    this.container = document.querySelector(containermodal);

    this.eventToggleModal = this.eventToggleModal.bind(this);
    this.cliqueForaModa =  this.cliqueForaModa.bind(this);
  }

  init() {
    if(this.open && this.close && this.container) {
      this.addModalEvents();
    }
  }

  toggleModal() {
    this.container.classList.toggle("ativo");
  }

  eventToggleModal(e) {
    e.preventDefault();
    this.toggleModal()
  }

  cliqueForaModa(e) {
    if(e.target === this.container) {
      this.toggleModal();
    }
  }

  addModalEvents() {
    this.open
      .addEventListener("click", this.eventToggleModal);
    this.close
      .addEventListener("click", this.eventToggleModal);
    this.container
      .addEventListener("click", this.cliqueForaModa);
  }
}



export default Modal;