// There are the following functions that have to be created in order for the game to work:

//1) a function that will change turns from X to O everytime you click on it.
//2.1) a function that is able to input the corresponding players icon into the exact cell of the gameboard upon click.
//2.2) within that function, there must be a way to alert user that the cell has be clicked before if there is an X or O in there.
//2.3) the function will also need to check all win scenarios if a user wins.
//3) a function that will check all win scenarios and prompt whether player 1 or player 2 wins. This function should be added to function 2.
//4) there must be a function that will accessed everytime the user clicks on clearboard and all values in the board must be cleared.

//Scenarios for winning: there are 8 scenarios for winning that needs to be checked.


//function myFunction(event) {
//    var x = event.target;
//    document.getElementById("cell1").innerHTML = "Triggered by a " + x.tagName + " element";
//}
var turn = 1;
var playerXchoices = [];
var playerYchoices = [];

function gamePlay() {
if(turn % 2 !== 0) {
  var cellX = document.getElementsByClassName("cell");
  for (var i = 0; i < cellX.length; i++) {
  cellX[i].addEventListener('click', addChoiceX, false);
}
}
else if(turn % 2 === 0) {
  var cellO = document.getElementsByClassName("cell");
  for (var y = 0; y < cellO.length; y++) {
  cellO[y].addEventListener('click', addChoiceO, false);
}
}
}

gamePlay();


function addChoiceX() {
  event.target.innerHTML = "<h6> X </h6>";
  turn++;
  document.getElementById('instructions').innerHTML = "O's Turn";
}

function addChoiceO() {
  event.target.innerHTML = "<h6> O </h6>";
  turn++;
  document.getElementById('instructions').innerHTML = "X's Turn";
}
