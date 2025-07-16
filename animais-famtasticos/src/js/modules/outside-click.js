export default function outSideClick(element, events, callback) {
  const html = document.documentElement;

  function handleOutSide(event) {
    if (!element.contains(event.target)) {
      events.forEach((event) => {
        html.removeEventListener(event, handleOutSide);
      });

      element.removeAttribute("data-outside");
      callback();
    }
  }

  if (!element.hasAttribute("data-outside")) {
    events.forEach((event) => {
      setTimeout(() => html.addEventListener(event, handleOutSide));
      element.setAttribute("data-outside", "");
    });
  }
}
