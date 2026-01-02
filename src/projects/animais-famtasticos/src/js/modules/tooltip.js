export default function initTooltip() {
  // * Seleciona todos os elementos que possuem o atributo "data-tooltip"
  const tooltips = document.querySelectorAll("[data-tooltip]");

  /**
   * Cria uma tooltip.
   * @param {Element} element - O elemento para o qual a tooltip será criada.
   * @returns {Element} - A tooltip criada.
   */
  function createTooltip(element) {
    // * Cria um novo elemento div
    const tooltipBox = document.createElement("div");
    // * Pega o texto do atributo "aria-label" do elemento
    const text = element.getAttribute("aria-label");

    // * Adiciona a classe "tooltip" ao novo div
    tooltipBox.classList.add("tooltip");
    // * Define o texto da tooltip
    tooltipBox.innerText = text;

    // ! Adiciona a tooltip ao body do documento
    document.body.appendChild(tooltipBox);
    // * Retorna a tooltip criada
    return tooltipBox;
  }

  /**
   * Objeto que lida com o evento de mouse leave (quando o mouse sai do elemento).
   */
  const onMouseLeave = {
    tooltipBox: "", // * Inicializa a propriedade tooltipBox
    thisElement: "", // * Inicializa a propriedade thisElement
    /**
     * Função que é chamada quando o evento ocorre.
     */
    handleEvent: function () {
      // * Remove a tooltip do documento
      this.tooltipBox.remove();
      // ! Remove os event listeners de mouse leave e mouse move
      this.thisElement.removeEventListener("mouseleave", onMouseLeave);
      this.thisElement.removeEventListener("mousemove", onMouseMove);
    },
  };

  /**
   * Objeto que lida com o evento de mouse move (quando o mouse se move sobre o elemento).
   */
  const onMouseMove = {
    tooltipBox: "", // * Inicializa a propriedade tooltipBox
    /**
     * Função que é chamada quando o evento ocorre.
     * @param {Event} event - O evento de movimento do mouse.
     */
    handleEvent: function (event) {
      // ! Define a posição da tooltip com base na posição do mouse
      this.tooltipBox.style.top = `${event.pageY + 20}px`;
      this.tooltipBox.style.left = `${event.pageX + 20}px`;
    },
  };

  /**
   * Função que é chamada quando o mouse passa sobre o elemento.
   */
  function onMouseOver() {
    // ! Cria a tooltip para o elemento
    const tooltipBox = createTooltip(this);

    // ! Associa a tooltip criada ao objeto onMouseLeave
    onMouseLeave.tooltipBox = tooltipBox;
    onMouseLeave.thisElement = this;
    // ! Adiciona os event listeners de mouse leave e mouse move ao elemento
    this.addEventListener("mouseleave", onMouseLeave);
    onMouseMove.tooltipBox = tooltipBox;
    this.addEventListener("mousemove", onMouseMove);
  }

  // * Adiciona o event listener de mouse over a cada elemento selecionado
  tooltips.forEach(function (item) {
    item.addEventListener("mouseover", onMouseOver);
  });
}
