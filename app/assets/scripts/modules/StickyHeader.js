import throttle from "lodash/throttle";

class StickyHeader {
  constructor(tresholdPixel) {
    this.tresholdPixel = tresholdPixel;
    this.siteHeader = document.querySelector(".site-header");
    this.logo = document.querySelector(".site-header__logo");
    this.events();
  }
  events() {
    window.addEventListener(
      "scroll",
      throttle(() => this.runOnScroll(), 200)
    );
  }

  runOnScroll() {
    if (window.scrollY > this.tresholdPixel) {
      this.siteHeader.classList.add("site-header--dark");
      this.logo.classList.add("site-header__logo--small");
    } else {
      this.siteHeader.classList.remove("site-header--dark");
      this.logo.classList.remove("site-header__logo--small");
    }
  }
}

export default StickyHeader;
