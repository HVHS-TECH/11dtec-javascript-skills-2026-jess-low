/****************************
Intro:
****************************/

console.log("Running t07_functions_parameters.js");

// transfer from JS to HTML
const OUTPUT = document.getElementById("spaceForJavaScriptOutput");
OUTPUT.innerHTML = "<h2>Added by JavaScript</h2>"

//Functions
function welcome(){
    OUTPUT.innerHTML += "<h1>Welcome to the shop!</h1>"
}
function displayProduct(_name, _price){
    OUTPUT.innerHTML += "<h2>" + _name + ": $" + _price + "</h2>";
}

// This code adds a message to console log

welcome()
displayProduct("Chocolate bar", 4);
displayProduct("Chips", 3);
displayProduct("Drink", "2.50");