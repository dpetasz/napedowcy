import "../styles/styles.css";
import MobileMenu from "./modules/MobileMenu";
import RevealOnScroll from "./modules/RevealOnScroll";
import StickyHeader from "./modules/StickyHeader";

let stickyHeader = new StickyHeader(80);
let mobileMenu = new MobileMenu();
new RevealOnScroll(document.querySelectorAll(".main-section__title"), 80);
new RevealOnScroll(
  document.querySelectorAll(".main-section__article-item"),
  70
);
new RevealOnScroll(document.querySelectorAll(".main-section__btn"), 80);
new RevealOnScroll(document.querySelectorAll(".site-slider__text-content"), 70);

if (module.hot) {
  module.hot.accept();
}
