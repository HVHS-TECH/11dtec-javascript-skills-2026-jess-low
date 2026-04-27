/****************************
Intro:
****************************/

console.log("Running t06_functions.js");

// transfer from JS to HTML
const OUTPUT = document.getElementById("spaceForJavaScriptOutput");
OUTPUT.innerHTML = "<h2>Added by JavaScript</h2>"

// This code defines the variables and their properties

let aName = "Bob";
let year = 2026;
let age = 38;
let birth = year - age;
let newAge = age + 10;
let money = 10;

// This code adds a message to console log

OUTPUT.innerHTML += "<h3>Hi " + aName + ".</h3>";
OUTPUT.innerHTML += "<h4>As of " + year + ", you are " + age + " years old.</h4>";
OUTPUT.innerHTML += "<p>You were born in " + birth + ".</p>";
OUTPUT.innerHTML += "<p>In ten years you will be " + newAge + " years old.</p>";
OUTPUT.innerHTML += "<p>You have " + money + " dollars.</p>";
OUTPUT.innerHTML += "<p>You spend half of your money, now you have $" + (money = money / 2) + ".</p>";
OUTPUT.innerHTML += "<p>Then you get $3, now you have $" + (money + 3) + ".</p>";