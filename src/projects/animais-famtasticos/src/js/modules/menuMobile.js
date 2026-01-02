import outSideClick from "./outside-click.js";

export default function _initMenuMobile() {
  const menuButton = document.querySelector("[data-menu='button'");
  const menuList = document.querySelector("[data-menu='lista'");
  const eventos = ["click", "touchstart"];

  function openMenu(event) {
    menuList.classList.add("ativo");
    menuButton.classList.add("ativo");

    outSideClick(menuList, eventos, () => {
      menuList.classList.remove("ativo");
      menuButton.classList.remove("ativo");
    });
  }

  eventos.forEach((evento) => {
    menuButton.addEventListener(evento, openMenu);
  });
}
