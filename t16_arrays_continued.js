/****************************
Intro:/
****************************/

console.log("Running t16_arrays_continued.js");

// transfer from JS to HTML
const OUTPUT = document.getElementById("spaceForJavaScriptOutput");
OUTPUT.innerHTML = "<h2>Added by JavaScript</h2>"


//Functions
  
let listArray = [];

  function getItem(){
    const ITEM_FIELD = document.getElementById("itemField");
    let item = ITEM_FIELD.value;
    listArray.push(item);
    OUTPUT.innerHTML += "<p>You have added '" + item + "' to the list.</p>"
  }

// This code adds a message to the page

function getList(){
  OUTPUT.innerHTML += "<p>These are the items on your shopping list:"
  for (let i=0; i<listArray.length; i++){
    OUTPUT.innerHTML += "<p>Item " + (i+1) + ": " + listArray[i] + "</p>";
  }
    }