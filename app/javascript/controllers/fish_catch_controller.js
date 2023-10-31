import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="fish-catch"
export default class extends Controller {
  submit() {
    this.element.requestSubmit();
  }
}
