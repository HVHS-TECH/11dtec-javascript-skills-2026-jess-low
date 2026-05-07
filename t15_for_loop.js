/****************************
Intro:/
****************************/

console.log("Running t15_for_loop.js");

// transfer from JS to HTML
const OUTPUT = document.getElementById("spaceForJavaScriptOutput");
OUTPUT.innerHTML = "<h2>Added by JavaScript</h2>"


//Functions



let chocolate = ["You loathe chocolate.", "Chocolate is meh.", "Chocolate is pretty good.", "Chocolate is the best thing EVER!!!"];

  function getBottles(){
    const BOTTLE_FIELD = document.getElementById("bottleField");
    let bottleAmount = Number(BOTTLE_FIELD.value).toFixed(0);
    if (bottleAmount < 0){
        OUTPUT.innerHTML += "<p>Your disgust for chocolate is off the scale!</p>"
    } else if (bottleAmount <= 3){
    OUTPUT.innerHTML += "<p>" + chocolate[bottleAmount] + "</p>";
} else {
    OUTPUT.innerHTML += "<p>Your love for chocolate is off the scale!</p>"
}
  }
  

// This code adds a message to the page


function start(){
    getBottles();
}