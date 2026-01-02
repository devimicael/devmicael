import outSideClick from "./outside-click.js";

export default function _initDropDownMenu() {
  const dropdownMenus = document.querySelectorAll("[data-dropdown]");
  const events = ["touchstart", "click"];

  function handleClick(event) {
    event.preventDefault();
    this.classList.add("ativo");

    outSideClick(this, events, () => {
      this.classList.remove("ativo");
    });
  }

  dropdownMenus.forEach((menu) => {
    events.forEach(function(userEvent) {
      menu.addEventListener(userEvent, handleClick);
    });
  });
}

