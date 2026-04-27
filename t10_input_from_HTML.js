/****************************
Intro:
****************************/

console.log("Running t10_input_from_HTML.js");

// transfer from JS to HTML
const OUTPUT = document.getElementById("spaceForJavaScriptOutput");
OUTPUT.innerHTML = "<h2>Added by JavaScript</h2>"
const NAME_FIELD = document.getElementById("nameField");
let userName = NAME_FIELD.value;


//Functions
function welcome(){
    OUTPUT.innerHTML += "<h1>Welcome to the shop!</h1>"
}
function getFormInput(){
  
  }
function start(){
    form()
    welcome()
}

