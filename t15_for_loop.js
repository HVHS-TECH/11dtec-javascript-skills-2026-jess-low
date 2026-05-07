/****************************
Intro:/
****************************/

console.log("Running t15_for_loop.js");

// transfer from JS to HTML
const OUTPUT = document.getElementById("spaceForJavaScriptOutput");
OUTPUT.innerHTML = "<h2>Added by JavaScript</h2>"


//Functions

  for (let i=_; i>0; i--){
    OUTPUT.innerHTML += i + "<p> bottles of milk on the wall</p><br>" + i + "<p> bottles of milk</p>"
  }

let chocolate = ["You loathe chocolate.", "Chocolate is meh.", "Chocolate is pretty good.", "Chocolate is the best thing EVER!!!"];

  function getChocLike(){
    const CHOC_FIELD = document.getElementById("chocField");
    let chocLike = Number(CHOC_FIELD.value).toFixed(0);
    if (chocLike < 0){
        OUTPUT.innerHTML += "<p>Your disgust for chocolate is off the scale!</p>"
    } else if (chocLike <= 3){
    OUTPUT.innerHTML += "<p>" + chocolate[chocLike] + "</p>";
} else {
    OUTPUT.innerHTML += "<p>Your love for chocolate is off the scale!</p>"
}
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