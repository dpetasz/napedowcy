import throttle from "lodash/throttle";
import debounce from "lodash/debounce";

import Slider from "./Slider";

class SliderOnScroll {
  constructor(tresholdPercent) {
    this.tresholdPercent = tresholdPercent;
    this.slider = document.querySelector("[data-slider]");
    this.browserHeight = window.innerHeight;
    this.scrollThrottle = throttle(this.calcCaller, 200).bind(this);
    this.sliderStart = new Slider();
    this.events();
  }
  events() {
    window.addEventListener("scroll", this.scrollThrottle);
    window.addEventListener(
      "resize",
      debounce(() => {
        this.browserHeight = window.innerHeight;
      }, 333)
    );
  }
  calcCaller() {
    if (!this.slider.isRevealed) this.calculeteIfScrolledTo(this.slider);
  }
  calculeteIfScrolledTo(el) {
    if (window.scrollY + this.browserHeight > el.offsetTop) {
      let scrollPercent =
        (el.getBoundingClientRect().y / this.browserHeight) * 100;
      if (scrollPercent < this.tresholdPercent) {
        this.sliderStart.startSlider();
        window.removeEventListener("scroll", this.scrollThrottle);
      }
    }
  }
}

export default SliderOnScroll;
