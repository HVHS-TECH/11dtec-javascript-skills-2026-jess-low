const OUTPUT = document.getElementById("output");


var myVar = 0;
OUTPUT.innerHTML = "Start: "+myVar+"<br>";

functionOne();
function functionOne() {
  myVar = 1;
  OUTPUT.innerHTML += "functionOne: "+myVar+"<br>";
}

functionTwo();
function functionTwo() {
  var myVar = 2;
  OUTPUT.innerHTML += "functionTwo: "+myVar+"<br>";
}

OUTPUT.innerHTML += "end: "+myVar+"<br>";

