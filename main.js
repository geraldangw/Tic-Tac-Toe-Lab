var turn = 0;
var playerXchoices = [];
var playerOchoices = [];

function gamePlay() {
  var cell = document.getElementsByClassName("cell");
  for (var i = 0; i < cell.length; i++) {
    cell[i].addEventListener('click', addChoice, false);
  }
}

gamePlay();

function addChoice() {
  if(event.target.innerHTML === " <p> </p>") {
  if (turn % 2 === 0) {
    event.target.innerHTML = "<h6> X </h6>";
    document.getElementById('instructions').innerHTML = "O's Turn";
    document.getElementById('instructions').style.color = "green";
    turn++;
    playerXchoices.push(event.target.id);
    checkWinX();
  } else {
    event.target.innerHTML = "<h6> O </h6>";
    document.getElementById('instructions').innerHTML = "X's Turn";
    document.getElementById('instructions').style.color = "yellow";
    turn++;
    playerOchoices.push(event.target.id);
    checkWinO();
  }
}
else {
  document.getElementById('instructions').innerHTML = "Please select an empty box!";
}
}

function checkWinX() {
  if ((playerXchoices.indexOf('cell1') !== -1 && playerXchoices.indexOf('cell2') !== -1 && playerXchoices.indexOf('cell3') !== -1) ||
    (playerXchoices.indexOf('cell4') !== -1 && playerXchoices.indexOf('cell5') !== -1 && playerXchoices.indexOf('cell6') !== -1) ||
    (playerXchoices.indexOf('cell7') !== -1 && playerXchoices.indexOf('cell8') !== -1 && playerXchoices.indexOf('cell9') !== -1) ||
    (playerXchoices.indexOf('cell1') !== -1 && playerXchoices.indexOf('cell4') !== -1 && playerXchoices.indexOf('cell7') !== -1) ||
    (playerXchoices.indexOf('cell2') !== -1 && playerXchoices.indexOf('cell5') !== -1 && playerXchoices.indexOf('cell8') !== -1) ||
    (playerXchoices.indexOf('cell3') !== -1 && playerXchoices.indexOf('cell6') !== -1 && playerXchoices.indexOf('cell9') !== -1) ||
    (playerXchoices.indexOf('cell1') !== -1 && playerXchoices.indexOf('cell5') !== -1 && playerXchoices.indexOf('cell9') !== -1) ||
    (playerXchoices.indexOf('cell3') !== -1 && playerXchoices.indexOf('cell5') !== -1 && playerXchoices.indexOf('cell7') !== -1)) {
    document.getElementById('instructions').innerHTML = "Player X Wins!";
    document.getElementById('instructions').style.color = "yellow";
    document.getElementById('instructions').style.backgroundColor = "green";
    document.getElementById('instructions').style.fontSize = "40px";
    document.getElementById('instructions').style.transition = "all 1s";
    document.getElementById('clearboard').innerHTML = "RESTART";
    document.getElementById('clearboard').style.fontSize = "30px";
    document.getElementById('clearboard').style.paddingTop = "8px";
    document.getElementById('clearboard').style.transition = "all 0.5s";
    freeze();
  } else if (turn >= 9) {
    document.getElementById('instructions').innerHTML = "It's a Draw!";
    document.getElementById('instructions').style.color = "#000";
    document.getElementById('instructions').style.backgroundColor = "#999";
    document.getElementById('instructions').style.fontSize = "40px";
    document.getElementById('instructions').style.transition = "all 1s";
    document.getElementById('clearboard').innerHTML = "RESTART";
    document.getElementById('clearboard').style.fontSize = "30px";
    document.getElementById('clearboard').style.paddingTop = "8px";
    document.getElementById('clearboard').style.transition = "all 0.5s";
    freeze();
  }
}

function checkWinO() {
  if ((playerOchoices.indexOf('cell1') !== -1 && playerOchoices.indexOf('cell2') !== -1 && playerOchoices.indexOf('cell3') !== -1) ||
    (playerOchoices.indexOf('cell4') !== -1 && playerOchoices.indexOf('cell5') !== -1 && playerOchoices.indexOf('cell6') !== -1) ||
    (playerOchoices.indexOf('cell7') !== -1 && playerOchoices.indexOf('cell8') !== -1 && playerOchoices.indexOf('cell9') !== -1) ||
    (playerOchoices.indexOf('cell1') !== -1 && playerOchoices.indexOf('cell4') !== -1 && playerOchoices.indexOf('cell7') !== -1) ||
    (playerOchoices.indexOf('cell2') !== -1 && playerOchoices.indexOf('cell5') !== -1 && playerOchoices.indexOf('cell8') !== -1) ||
    (playerOchoices.indexOf('cell3') !== -1 && playerOchoices.indexOf('cell6') !== -1 && playerOchoices.indexOf('cell9') !== -1) ||
    (playerOchoices.indexOf('cell1') !== -1 && playerOchoices.indexOf('cell5') !== -1 && playerOchoices.indexOf('cell9') !== -1) ||
    (playerOchoices.indexOf('cell3') !== -1 && playerOchoices.indexOf('cell5') !== -1 && playerOchoices.indexOf('cell7') !== -1)) {
    document.getElementById('instructions').innerHTML = "Player O Wins!";
    document.getElementById('instructions').style.color = "green";
    document.getElementById('instructions').style.backgroundColor = "yellow";
    document.getElementById('instructions').style.fontSize = "40px";
    document.getElementById('instructions').style.transition = "all 1s";
    document.getElementById('clearboard').innerHTML = "RESTART";
    document.getElementById('clearboard').style.fontSize = "30px";
    document.getElementById('clearboard').style.paddingTop = "8px";
    document.getElementById('clearboard').style.transition = "all 0.5s";
    freeze();
  } else if (turn >= 9) {
    document.getElementById('instructions').innerHTML = "It's a Draw!";
    document.getElementById('instructions').style.color = "#000";
    document.getElementById('instructions').style.backgroundColor = "#666";
    document.getElementById('instructions').style.fontSize = "40px";
    document.getElementById('instructions').style.transition = "all 1s";
    document.getElementById('clearboard').innerHTML = "RESTART";
    document.getElementById('clearboard').style.fontSize = "30px";
    document.getElementById('clearboard').style.paddingTop = "8px";
    document.getElementById('clearboard').style.transition = "all 0.5s";
    freeze();
  }
}

function clearTheBoard() {
  var cleartheboard = document.getElementById('clearboard');
  cleartheboard.addEventListener('click', reLoad, false);
}

clearTheBoard();

function reLoad() {
  location.reload();
}

function freeze() {
  var cell = document.getElementsByClassName("cell");
  for (var i = 0; i < cell.length; i++) {
    cell[i].removeEventListener('click', addChoice, false);
  }
}
