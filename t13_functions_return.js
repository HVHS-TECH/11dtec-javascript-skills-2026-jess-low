/****************************
Intro:/
****************************/

console.log("Running t13_functions_return.js");

// transfer from JS to HTML
const OUTPUT = document.getElementById("spaceForJavaScriptOutput");
OUTPUT.innerHTML = "<h2>Added by JavaScript</h2>"


//Functions//Functions
function welcome(){
    OUTPUT.innerHTML += "<h1>Welcome to the shop!</h1>"
}
function displayProduct(_name, _price){
    OUTPUT.innerHTML += "<h2>" + _name + ": $" + _price + "</h2>";
}
function getUserName(){
    const NAME_FIELD = document.getElementById("nameField");
    let userName = NAME_FIELD.value;
    OUTPUT.innerHTML += "<p>Your name is " + userName + ".</p>";
  }
function getUserAge(){
    const AGE_FIELD = document.getElementById("ageField");
    let userAge = Number(AGE_FIELD.value);
    OUTPUT.innerHTML += "<p>You are " + userAge + " years old.</p>";
  }
  function getUserMoney(){
    const MONEY_FIELD = document.getElementById("moneyField");
    let userMoney = Number(MONEY_FIELD.value);
    OUTPUT.innerHTML += "<p>You have $" + userMoney + ".</p>";
  }
  function afford(){
if (userMoney >= 4){
    OUTPUT.innerHTML += "<p>A chocolate bar costs $4, so you can afford a chocolate bar.</p>";
} else {
    OUTPUT.innerHTML += "<p>A chocolate bar costs $4, so you can't afford a chocolate bar.</p>";
}
  }

function calculateChange(_money, _name, _change){
    OUTPUT.innerHTML += "<p> You have $" + _money + "If you buy a " + _name + ", you will get $" + _change + " change.</p>"
}
    

// This code adds a message to the page



function start(){
  welcome();
  displayProduct("Chocolate bar", 4);
  displayProduct("Chips", 3);
  displayProduct("Drink", "2.50");
    getUserName();
    getUserAge();
    getUserMoney();
    calculateChange(userMoney, "Chocolate bar", userMoney - 4);
    calculateChange(userMoney, "pack of Chips", userMoney - 4);
    calculateChange(userMoney, "Drink", userMoney - 4);
}