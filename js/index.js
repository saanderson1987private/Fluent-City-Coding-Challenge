import Button from './button.js';

let submitButton = new Button('.hw-form-button__submit');
let hintButton = document.querySelector('.hw-form-button__hint');
let alert = document.querySelector('.alert');

submitButton.docObj.onclick = (event) => {
  event.preventDefault();
  let disabledSubmitText = "Vous devez remplir tous les espaces ! Si vous avez besoin d'aide, cliquez sur le bouton 'HINT'.";

  if (submitButton.docObj.classList.contains("hw-form-button--disabled")) {
    alert.innerHTML = disabledSubmitText;
    alert.scrollIntoView();
  }
};

hintButton.onclick = (event) => {event.preventDefault();};

const checkFieldsComplete = () => {
  let inputFields = document.querySelectorAll('#ex3 input');
  let fieldsFilled = true;

  for (let i = 0; i < inputFields.length; i++) {
    if (inputFields[i].value === "") {
      fieldsFilled = false;
    }
  }

  if(fieldsFilled) {
    submitButton.enable();
    setTimeout(()=> { alert.innerHTML = ""; }, 100);
  } else {
    submitButton.disable();
  }

};

setInterval(checkFieldsComplete, 100);
