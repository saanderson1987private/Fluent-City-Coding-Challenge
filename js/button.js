
export default class Button {

  constructor(id) {
    this.docObj = document.querySelector(id);
  }

  disable() {
    this.docObj.className = "disabledButton";
  }

  enable() {
    this.docObj.classList.remove('disabledButton');
    this.docObj.classList.add('enableButtonAnim');
  }

}
