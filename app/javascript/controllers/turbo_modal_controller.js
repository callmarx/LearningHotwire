import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="turbo-modal"
export default class extends Controller {
  static targets = ["outside", "form"]

  connect() {
    console.log(this.outsideTarget)
    console.log(this.outsideTarget.classList)
  }

  // hide modal
  // action: "turbo-modal#hideModal"
  hideModal() {
    this.element.parentElement.removeAttribute("src")
    // Remove src reference from parent frame element
    // Without this, turbo won't re-open the modal on subsequent click
    this.element.remove()
  }

  // hide modal on successful form submission
  // action: "turbo:submit-end->turbo-modal#submitEnd"
  submitEnd(e) {
    if (e.detail.success) {
      this.hideModal()
    }
  }

  // hide modal when clicking ESC
  // action: "keyup@window->turbo-modal#closeWithKeyboard"
  closeWithKeyboard(e) {
    if (e.code == "Escape") {
      this.hideModal()
    }
  }

  // hide modal when clicking outside of modal
  // action: "click@window->turbo-modal#closeBackground"
  closeBackground(e) {
    if (e && this.formTarget.contains(e.target)) {
      return
    }
    this.hideModal()
  }
}
