/****************************
Intro:
****************************/

console.log("Running t05_JS_and_HTML.js");

// transfer from JS to HTML
const OUTPUT = document.getElementById("JavaScriptOutput");
OUTPUT.innerHTML = "<h2>Added by JavaScript</h2>"

// This code defines the variables and their properties

let aName = "Bob";
let year = 2026;
let age = 38;
let birth = year - age;
let newAge = age + 10;
let money = 10;

// This code adds a message to console log

OUTPUT.innerHTML += "<h3>Hi " + aName "</h3>";
OUTPUT.innerHTML += ("As of " + year + ", you are " + age + " years old.");
OUTPUT.innerHTML += ("You were born in " + birth);
OUTPUT.innerHTML += ("In ten years you will be " + newAge + " years old.");
OUTPUT.innerHTML += ("You have " + money + " dollars.");
OUTPUT.innerHTML += ("You spend half of your money, now you have $" + (money = money / 2));
OUTPUT.innerHTML += ("Then you get $3, now you have $" + (money + 3));