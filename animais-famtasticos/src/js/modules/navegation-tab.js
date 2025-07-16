class TabNav {
  constructor({menu, content}) {
    this.menu = document.querySelectorAll(menu);
    this.content = document.querySelectorAll(content);
    this.activeClass = "ativo";
  }

  init() {
    if(this.menu && this.content) {
      this.activeTab(0);
      this.menu.forEach((element, index) => {
        element.addEventListener("click", () => {
          this.activeTab(index);
        });
      });
    }
    
    return this;
  }
  
  activeTab(index) {
    this.content.forEach((conteudo) => {
      conteudo.classList.remove(this.activeClass);
      console.log(conteudo)
    });

    const direcao = this.content[index].dataset.anime;
    this.content[index].classList.add(
      this.activeClass,
      direcao
    );
  }
}

export default TabNav;