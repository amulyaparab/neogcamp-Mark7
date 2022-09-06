var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var outputDiv = document.querySelector("#output");

var serverURL = " https://api.funtranslations.com/translate/morse.json";

function getTranslatedURL(text) {
  return serverURL + "?" + "text=" + text;
}

function errorHandler(error) {
  console.log("Error occured: " + error);
  alert("Something went wrong! Try again later.");
}

function clickHandler() {
  var inputText = txtInput.value;
  fetch(getTranslatedURL(inputText))
    .then((response) => response.json())
    .then((json) => {
      var translatedText = json.contents.translated;
      outputDiv.innerText = translatedText;
    });
}

btnTranslate.addEventListener("click", clickHandler);
