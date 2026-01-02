class ScrollSuave {
  constructor(_linksInternos, _options) {
    this.linksInternos = document.querySelectorAll(_linksInternos);

    if (_options === undefined) {
      this._options = {
        behavior: 'smooth',
        block: 'start'
      };
    } else {
      this._options = _options;
    }

    this.scrollSections = this.scrollSections.bind(this);
  }

  init() {
    if (this.linksInternos.length) {
      this.addLinkEvent();
    }
    
    return this;
  }

  addLinkEvent() {
    this.linksInternos.forEach((link) => {
      link.addEventListener("click", this.scrollSections);
    });
  }

  scrollSections(event) {
    event.preventDefault();

    const href = event.currentTarget.getAttribute("href");
    const section = document.querySelector(href);
    // const top = section.offsetTop;

    // window.scrollTo(0, top);
    // window.scrollTo({
    //   top: top,
    //   behavior: "smooth"
    // });

    section.scrollIntoView(this._options);
  }
}

export default ScrollSuave;