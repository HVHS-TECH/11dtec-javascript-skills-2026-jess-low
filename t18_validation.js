/****************************
Intro:/
****************************/

console.log("Running t18_validation.js");

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
function getUserName(){
    const NAME_FIELD = document.getElementById("nameField");
    if (NAME_FIELD.checkValidity() === false){
        OUTPUT.innerHTML = "<h1>Please fill out all fields correctly.</h1>"
    } else {
    let userName = NAME_FIELD.value;
    OUTPUT.innerHTML += "<p>Your name is " + userName + ".</p>";
}
  }
function getUserAge(){
    const AGE_FIELD = document.getElementById("ageField");
    if (AGE_FIELD.checkValidity() === false){
        OUTPUT.innerHTML = "<h1>Please fill out all fields correctly.</h1>"
    } else if (AGE_FIELD > 130) {
        OUTPUT.innerHTML += "<h2>Wow, that's old! Are you sure you're not immortal?</h2>"
    } else {
    let userAge = Number(AGE_FIELD.value);
    OUTPUT.innerHTML += "<p>You are " + userAge + " years old.</p>";
}
  }
  function getUserMoney(){
    const MONEY_FIELD = document.getElementById("moneyField");
    if (MONEY_FIELD.checkValidity() === false){
        OUTPUT.innerHTML = "<h1>Please fill out all fields correctly.</h1>"
    } else {
    let userMoney = Number(MONEY_FIELD.value).toFixed(2);
    OUTPUT.innerHTML += "<p>You have $" + userMoney + ".</p>";
return userMoney;
    }
  }
function calculateChange(_name, _cost){
    const MONEY_FIELD = document.getElementById("moneyField");
    if (MONEY_FIELD.checkValidity() === false){
        OUTPUT.innerHTML = "<h1>Please fill out all fields correctly.</h1>"
    } else {
    let userMoney = Number(MONEY_FIELD.value).toFixed(2);
    OUTPUT.innerHTML += "<p> You have $" + userMoney + ". If you buy a " + _name + ", you will get $" + (userMoney - _cost).toFixed(2) + " change.</p>"
}
}
  function afford(){
    const MONEY_FIELD = document.getElementById("moneyField");
    if (MONEY_FIELD.checkValidity() === false){
        OUTPUT.innerHTML = "<h1>Please fill out all fields correctly.</h1>"
    } else {
    let userMoney = Number(MONEY_FIELD.value);
if (userMoney >= 4){
    OUTPUT.innerHTML += "<p>A chocolate bar costs $4, so you can afford a chocolate bar.</p>";
    calculateChange("chocolate bar", 4);
    calculateChange("pack of chips", 3);
    calculateChange("drink", 2.50);
} else {
    OUTPUT.innerHTML += "<p>A chocolate bar costs $4, so you can't afford a chocolate bar.</p>";
}
return userMoney;
  }
}
  
let listArray = [];

  function getItem(){
    const ITEM_FIELD = document.getElementById("itemField");
    let item = ITEM_FIELD.value;
    listArray.push(item);
    OUTPUT.innerHTML += "<p>You have added '" + item + "' to the list.</p>"
  }

// This code adds a message to the page

function getList(){
  OUTPUT.innerHTML += "<h3>These are the items on your shopping list:</h3>"
  for (let i=0; i<listArray.length; i++){
    OUTPUT.innerHTML += "<p>Item " + (i+1) + ": " + listArray[i] + "</p>";
  }
    }

function start(){
  welcome();
  displayProduct("Chocolate Bar", 4);
  displayProduct("Chips", 3);
  displayProduct("Drink", "2.50");
    getUserName();
    getUserAge();
    getUserMoney();
    afford();
}