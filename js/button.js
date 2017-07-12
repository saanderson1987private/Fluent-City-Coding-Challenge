
export default class Button {

  constructor(selector, disabledClass="hw-form-button--disabled", enableAnimClass="hw-form-button--enable-button-anim") {
    this.docObj = document.querySelector(selector);
    this.disabledClass = disabledClass;
    this.enableAnimClass = enableAnimClass;
  }

  disable() {
    this.docObj.classList.add(this.disabledClass);
    this.docObj.classList.remove(this.enableAnimClass);

  }

  enable() {
    this.docObj.classList.remove(this.disabledClass);
    this.docObj.classList.add(this.enableAnimClass);
  }

}
