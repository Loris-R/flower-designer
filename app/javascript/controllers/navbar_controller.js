import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = ["icon", "optionshome", "tophome", "bottomhome"]

  connect() {
    const tophome = this.tophomeTarget;
    const bottomhome = this.bottomhomeTarget;
    const icon = this.iconTarget;

    function fadeOutDelay() {
      function fadeOut() {
        tophome.classList.add('visuallyhidden');
      };
      setTimeout(fadeOut, 1200);
    };

    function showUpDelay() {
      function showUp() {
        bottomhome.classList.add('visuallyshow');
        icon.classList.add('visuallyshow');
      }
      setTimeout(showUp, 1000);
    };

    const ready = function makeAction() {
      fadeOutDelay();
      showUpDelay();
    }

    window.addEventListener("load", ready)
  }

  translate(event) {
    event.preventDefault();
    const icon = this.iconTarget;
    const optionshome = this.optionshomeTarget;

    icon.classList.toggle("move");
    optionshome.classList.toggle("open");

    if(optionshome.classList.contains("open")){
      optionshome.ontransitionend = () => {
        optionshome.style.position = "absolute";
      }
    } else {
      optionshome.style.position = "fixed";
      optionshome.ontransitionend = () => {
        optionshome.style.position = "fixed";
      }
    };
  }
}
