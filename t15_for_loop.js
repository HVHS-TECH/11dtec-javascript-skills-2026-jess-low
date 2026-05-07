/****************************
Intro:/
****************************/

console.log("Running t15_for_loop.js");

// transfer from JS to HTML
const OUTPUT = document.getElementById("spaceForJavaScriptOutput");
OUTPUT.innerHTML = "<h2>Added by JavaScript</h2>"


//Functions



  function getBottles(){
    const BOTTLE_AMOUNT = document.getElementById("bottleField");
    let bottleAmount = Number(BOTTLE_AMOUNT.value).toFixed(0);
    OUTPUT.innerHTML += "<p>" + bottleAmount + "bottles</p>";
  }

  for (let i=bottles; i>0; i--){
    OUTPUT.innerHTML += "<p>" i + " bottles of milk on the wall</p><br><p>" + i + " bottles of milk</p><br><p>If one of those bottles should happen to fall</p><br><p>" + i + " bottles of milk on the wall.</p>";
  }

// This code adds a message to the page


function start(){
    getBottles();
}