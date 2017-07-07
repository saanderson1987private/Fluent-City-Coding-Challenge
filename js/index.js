let submitButton = document.querySelector('#submit-button');
let alert = document.querySelector('.alert');

submitButton.onclick = (event) => {
  event.preventDefault();
  console.log('clicked');
  let disabledSubmitText = "Vous devez remplir toutes les espaces ! Si vous avez besoin d'aide, cliquez sur le bouton 'HINT'."
  if (submitButton.classList.contains("disabledButton")) {
    alert.innerHTML = disabledSubmitText;
  }
};

const checkFieldsComplete = () => {
  let inputFields = document.querySelectorAll('#ex3 input');
  let fieldsFilled = true;

  for (let i = 0; i < inputFields.length; i++) {
    if (inputFields[i].value === "") {
      fieldsFilled = false;
    }
  }

  if (fieldsFilled) {
    submitButton.classList.remove('disabledButton');
    setTimeout(()=> { alert.innerHTML = ""; }, 100);
  } else {
    submitButton.className = "disabledButton";
  }

};

setInterval(checkFieldsComplete, 100);
