
export default class Button {

  constructor(id) {
    this.docObj = document.querySelector(id);
  }

  disable() {
    this.docObj.classList.add("disabledButton");
  }

  enable() {
    this.docObj.classList.remove("disabledButton");
    this.docObj.classList.add("enableButtonAnim");
  }

}
