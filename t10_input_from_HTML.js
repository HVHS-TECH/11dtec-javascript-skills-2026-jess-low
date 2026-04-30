/****************************
Intro:
****************************/

console.log("Running t10_input_from_HTML.js");

// transfer from JS to HTML
const OUTPUT = document.getElementById("spaceForJavaScriptOutput");
OUTPUT.innerHTML = "<h2>Added by JavaScript</h2>"


//Functions

function getFormInput(){
    const NAME_FIELD = document.getElementById("nameField");
    let userName = NAME_FIELD.value;
    OUTPUT.innerHTML += "<p>Your name is " + userName + ".</p>"
  }
function start(){
    getFormInput()
}

