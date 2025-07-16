import _animationScroll from "./modules/animation-scroll.js";
import _initTooltip from "./modules/tooltip.js";
import _initDropDownMenu from "./modules/dropdown.js";
import _initMenuMobile from "./modules/menuMobile.js";
import _initFunctionamento from "./modules/funcionamento.js";
import _initFetchAnimais from "./modules/fetch-animais.js";
import _initFetchBitcoin from "./modules/fetch-bitcoin.js";

import ScrollSuave from "./modules/scroll-smooth.js";
import Accordion from "./modules/acoordion-list.js";
import TabNav from "./modules/navegation-tab.js";
import Modal from "./modules/modal.js";

const scrollSuave = new ScrollSuave(
  '[data-smooth="menu"] a[href^="#"]'
);
const accordion = new Accordion(
  "[data-anime='acoordion'] dt"
);

const tabNav = new TabNav({
  menu: "[data-tab='menu'] li",
  content: "[data-tab='content'] section"
});

const modal = new Modal({
  btnopen: "[data-modal='login']",
  btnclose: "[data-modal='closer']",
  containermodal: "[data-modal='container']"
});

scrollSuave.init();
accordion.init();
tabNav.init();
modal.init();

_animationScroll();
_initTooltip();
_initDropDownMenu();
_initMenuMobile();
_initFunctionamento();
_initFetchAnimais();
_initFetchBitcoin();
