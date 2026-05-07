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
for (bottleAmount>0; bottleAmount--){
    OUTPUT.innerHTML += "<p>" bottleAmount + " bottles of milk on the wall</p><br><p>" + bottleAmount + " bottles of milk</p><br><p>If one of those bottles should happen to fall</p><br><p>" + bottleAmount + " bottles of milk on the wall.</p>";
  }
  }
  

// This code adds a message to the page


function start(){
    getBottles();
}