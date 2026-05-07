/****************************
Intro:/
****************************/

console.log("Running t15_for_loop.js");

// transfer from JS to HTML
const OUTPUT = document.getElementById("spaceForJavaScriptOutput");
OUTPUT.innerHTML = "<h2>Added by JavaScript</h2>"


//Functions
  function getBottles(){
    const BOTTLE_FIELD = document.getElementById("bottleField");
    let bottleAmount = Number(BOTTLE_FIELD.value).toFixed(0);
    for (let bottle = bottleAmount; bottle>-1; bottle--) {
      if (bottle > 2){
        OUTPUT.innerHTML += "<p>" + bottle + " bottles of milk on the wall</p><p>" + bottle + " bottles of milk</p><p>If one of those bottles should happen to fall</p><p>" + (bottle - 1) + " bottles of milk on the wall.</p><br>";
      } else if (bottle == 2){
        OUTPUT.innerHTML += "<p>" + bottle + " bottles of milk on the wall</p><p>" + bottle + " bottles of milk</p><p>If one of those bottles should happen to fall</p><p>" + (bottle - 1) + " bottle of milk on the wall.</p><br>";
      } else if (bottle == 1){
        OUTPUT.innerHTML += "<p>" + bottle + " bottle of milk on the wall</p><p>" + bottle + " bottle of milk</p><p>If that last bottle should happen to fall</p><p>No more bottles of milk on the wall.</p><br>";
      } else {
        OUTPUT.innerHTML += "<p>No bottles of milk on the wall</p><p>No bottles of milk</p><p>If there are no bottles left to fall</p><p>Were there ever bottles of milk on the wall?</p>"
      }
    }
  }
  

  

// This code adds a message to the page

function start(){
    getBottles();
    }