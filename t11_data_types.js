/****************************
Intro:
****************************/

console.log("Running t11_data_types.js");

// transfer from JS to HTML
const OUTPUT = document.getElementById("spaceForJavaScriptOutput");
OUTPUT.innerHTML = "<h2>Added by JavaScript</h2>"


//Functions
function getUserName(){
    const NAME_FIELD = document.getElementById("nameField");
    let userName = NAME_FIELD.value;
    OUTPUT.innerHTML += "<p>Your name is " + userName + ".</p>"
  }
function getUserAge(){
    const AGE_FIELD = document.getElementById("ageField");
    let userAge = Number(AGE_FIELD.value);
    OUTPUT.innerHTML += "<p>Your age is " + userAge + ".</p>"
  }
  function getUserMoney(){
    const MONEY_FIELD = document.getElementById("moneyField");
    let userMoney = Number(MONEY_FIELD.value);
    OUTPUT.innerHTML += "<p>You have $" + userMoney + ".</p>"
  }
function start(){
    getUserName();
    getUserAge();
    getUserMoney();
}

