import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = ["flipedcard", "sauvagethree", "sauvagefour", "frame-one"]

  connect() {
    const flipedcard = this.flipedcardTarget;
    const sauvagethree = this.sauvagethreeTarget;
    const sauvagefour = this.sauvagefourTarget;

   // if flipedcard transition finished
      flipedcard.addEventListener('transitionend', () => {
        sauvagethree.classList.toggle("sauvage-three");
        sauvagefour.classList.toggle("sauvage-four");
      })
   // sauvagethree slide left
   // sauvagefour slide right
   // frame-one property class changed from justify content center to space around
  }
}
