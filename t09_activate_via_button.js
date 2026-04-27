/****************************
Intro:
****************************/

console.log("Running t09_activate_via_button.js");

// transfer from JS to HTML
const OUTPUT = document.getElementById("spaceForJavaScriptOutput");
OUTPUT.innerHTML = "<h2>Added by JavaScript</h2>"

//Functions
function welcome(){
    OUTPUT.innerHTML += "<h1>Welcome to the shop!</h1>"
}

// This code adds a message to console log

welcome()
welcome()