/****************************
Intro:/
****************************/

console.log("Running t12_conditionals.js");

// transfer from JS to HTML
const OUTPUT = document.getElementById("spaceForJavaScriptOutput");
OUTPUT.innerHTML = "<h2>Added by JavaScript</h2>"


//Functions
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

if (userMoney >= 4){
    OUTPUT.innerHTML += "<p>A chocolate bar costs $4, so you can afford a chocolate bar.</p>";
} else {
    OUTPUT.innerHTML += "<p>A chocolate bar costs $4, so you can't afford a chocolate bar.</p>";
}

function start(){
    getUserName();
    getUserAge();
    getUserMoney();

}

