import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="chore-modal"
export default class extends Controller {
  connect() {
    console.log("Hi! we are in ChoreModalController from Stimulus")
  }

  // action: "chore-modal#hideModal"
  hideModal() {
    this.element.parentElement.removeAttribute("src")
    this.element.remove()
    console.log("You've just called ChoreModalController#hideModal")
  }
}
