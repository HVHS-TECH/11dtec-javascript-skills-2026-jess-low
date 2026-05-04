/****************************
Intro:/
****************************/

console.log("Running t14_arrays_1.js");

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
    let userMoney = Number(MONEY_FIELD.value).toFixed(2);
    OUTPUT.innerHTML += "<p>You have $" + userMoney + ".</p>";
  }
function calculateChange(_name, _cost){
    const MONEY_FIELD = document.getElementById("moneyField");
    let userMoney = Number(MONEY_FIELD.value).toFixed(2);
    OUTPUT.innerHTML += "<p> You have $" + userMoney + ". If you buy a " + _name + ", you will get $" + (userMoney - _cost).toFixed(2) + " change.</p>"
}
  function afford(){
    const MONEY_FIELD = document.getElementById("moneyField");
    let userMoney = Number(MONEY_FIELD.value);
if (userMoney >= 4){
    OUTPUT.innerHTML += "<p>A chocolate bar costs $4, so you can afford a chocolate bar.</p>";
    calculateChange("Chocolate bar", 4);
    calculateChange("pack of Chips", 3);
    calculateChange("Drink", 2.50);
} else {
    OUTPUT.innerHTML += "<p>A chocolate bar costs $4, so you can't afford a chocolate bar.</p>";
}
}

let chocolate = ["You loathe chocolate.", "Chocolate is meh.", "Chocolate is pretty good.", "Chocolate is the best thing EVER!!!"];

  function getChocLike(){
    const CHOC_FIELD = document.getElementById("chocField");
    let chocLike = Number(CHOC_FIELD.value).toFixed(0);
    if (chocLike < 0){
        OUTPUT.innerHTML += "<p>Your disgust for chocolate is off the scale!</p>"
    } else if (chocLike <= 3){
    OUTPUT.innerHTML += "<p>" + chocolate[chocLike] + "</p>";
} else {
    OUTPUT.innerHTML += "<p>Your love for chocolate is off the scale!</p>"
}
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
    afford();
    getChocLike();
}