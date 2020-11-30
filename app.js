var btnTranslate = document.querySelector('#btn-translate');
var txtInput = document.querySelector('#txt-input');
var output = document.querySelector('#output');

function getServerURL(text){
  return `https://api.funtranslations.com/translate/minion.json?text=${text}`;
}

function buttonClicked(){
  var inputValue = txtInput.value;
  fetch(getServerURL(inputValue))
  .then(response => response.json())
  .then(data => {
    output.innerText = data.contents.translated;
    console.log(data.contents.translated);
  })
  .catch(error => console.log(error))
}

btnTranslate.addEventListener('click', buttonClicked);