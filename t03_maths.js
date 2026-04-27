/****************************
Intro:
****************************/

console.log("Running t03_maths.js");

// This code defines the variables and their properties

let aName = "Bob";
let year = 2026;
let age = 38;
let birth = year - age;
let newAge = age + 10;
let money = 10;

// This code adds a message to console log

console.log("Hi " + aName);
console.log("As of " + year + ", you are " + age + " years old.");
console.log("You were born in " + birth);
console.log("In ten years you will be " + newAge + " years old.");
console.log("You have " + money + " dollars.");
console.log("You spend half of your money, now you have $" + (money = money / 2));
console.log("Then you get $3, now you have $" + (money + 3));