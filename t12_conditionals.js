/****************************
Intro:/
****************************/

console.log("Running t12_conditionals.js");

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
    let userAge = AGE_FIELD.value;
    let userAgeNumber = Number(userAge);
    OUTPUT.innerHTML += "<p>You are " + userAge + " years old.</p>";
  }
  function getUserMoney(){
    const MONEY_FIELD = document.getElementById("moneyField");
    let userMoney = Number(MONEY_FIELD.value);
    OUTPUT.innerHTML += "<p>You have $" + userMoney + ".</p>";
  }
function afford(){
if (userAgeNumber >= 4){
    OUTPUT.innerHTML += "<p>A chocolate bar costs $4, so you can afford a chocolate bar.</p>";
} else {
    OUTPUT.innerHTML += "<p>A chocolate bar costs $4, so you can't afford a chocolate bar.</p>";
}
}


// This code adds a message to the page



function start(){
    getUserName();
    getUserAge();
    getUserMoney();
  welcome();
  displayProduct("Chocolate bar", 4);
  displayProduct("Chips", 3);
  displayProduct("Drink", "2.50");
  afford();
}

