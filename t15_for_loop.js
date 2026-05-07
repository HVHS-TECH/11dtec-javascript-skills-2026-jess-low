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
    for (let bottle = bottleAmount; bottle>0; bottle--) {
      if (bottleAmount >= 2){
        OUTPUT.innerHTML += "<p>" + bottle + " bottles of milk on the wall</p><p>" + bottle + " bottles of milk</p><p>If one of those bottles should happen to fall</p><p>" + bottle + " bottles of milk on the wall.</p><br>";
      } else {
        OUTPUT.innerHTML += "<p>" + bottle + " bottle of milk on the wall</p><p>" + bottle + " bottle of milk</p><p>If that last bottle should happen to fall</p><p>No more bottles of milk on the wall.</p><br>";
      }
    }
  }
  

  

// This code adds a message to the page

function start(){
    getBottles();
    }