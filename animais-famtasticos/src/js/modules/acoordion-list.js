class Accordion {
  constructor(listAccordion) {
    this.accordion = document.querySelectorAll(listAccordion);
  }

  init() {
    if(this.accordion.length) {
      this.toggleAccordion(this.accordion[0]);
      this.activeAccordion();
    }
  }

  activeAccordion() {
    this.accordion.forEach(item => {
      item.addEventListener("click", () => this.toggleAccordion(item));
    });
  }

  toggleAccordion(item) {
    item.classList.toggle("ativo");
    item.nextElementSibling.classList.toggle("ativo");
  }
}

export default Accordion;
