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
    const BOTTLE_AMOUNT = document.getElementById("bottleAmount");
    let chocLike = Number(CHOC_FIELD.value).toFixed(0);
    if (chocLike < 0){
        OUTPUT.innerHTML += "<p>Your disgust for chocolate is off the scale!</p>"
    } else if (chocLike <= 3){
    OUTPUT.innerHTML += "<p>" + chocolate[chocLike] + "</p>";
} else {
    OUTPUT.innerHTML += "<p>Your love for chocolate is off the scale!</p>"
}
  }
  
  for (let i=bottles; i>0; i--){
    OUTPUT.innerHTML += "<p>" i + " bottles of milk on the wall</p><br><p>" + i + " bottles of milk</p><br><p>If one of those bottles should happen to fall</p><br><p>" + i + " bottles of milk on the wall.</p>";
  }

// This code adds a message to the page


function start(){
  welcome();
  displayProduct("Chocolate bar", 4);
  displayProduct("Chips", 3);
  displayProduct("Drink", "2.50");
    getUserName();
    getUserAge();
    getUserMoney();
    afford();
    getChocLike();
}