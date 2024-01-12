const player1El = document.querySelector("#name_1");
const player2El = document.querySelector("#name_2");

const btnNew = document.querySelector(".btn_new");
const btnRoll = document.querySelector(".btn_roll");

const score1El = document.getElementById("score_1");
const score2El = document.getElementById("score_2");

let score1 = 0;
let score2 = 0;

let gameIsOver = false;

function rollDice() {
  if (gameIsOver) {
    return;
  }

  var randomNumber1 = Math.floor(Math.random() * 6) + 1;
  var randomDiceImage = "dice" + randomNumber1 + ".png";
  var randomImageSource = "images/" + randomDiceImage;

  var image1 = document.querySelectorAll("img")[0];
  image1.setAttribute("src", randomImageSource);

  var randomNumber2 = Math.floor(Math.random() * 6) + 1;
  var randomImageSource2 = "images/dice" + randomNumber2 + ".png";
  document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);

  if (randomNumber1 > randomNumber2) {
    document.querySelector(
      "h1"
    ).textContent = `${player1El.textContent} wins the round`;
    score1++;
  } else if (randomNumber2 > randomNumber1) {
    document.querySelector(
      "h1"
    ).textContent = `${player2El.textContent} wins the round`;
    score2++;
  } else {
    document.querySelector("h1").textContent = "Draw!";
  }

  score1El.textContent = score1;
  score2El.textContent = score2;

  if (score1 === 5 || score2 === 5) {
    declareWinner();
  }
}

function declareWinner() {
  gameIsOver = true;
  if (score1 > score2) {
    document.querySelector(
      "h1"
    ).textContent = `${player1El.textContent} Wins the Game!🏆`;
  } else if (score2 > score1) {
    document.querySelector(
      "h1"
    ).textContent = `${player2El.textContent} Wins the Game!🏆`;
  } else {
    document.querySelector("h1").textContent = "It's a Draw!";
  }

  alert("Game Over! Click Play Again to restart.");
}

function resetGame() {
  gameIsOver = false;
  score1 = 0;
  score2 = 0;
  score1El.textContent = 0;
  score2El.textContent = 0;
  document.querySelector("h1").textContent = "Refresh Me";
}

btnRoll.addEventListener("click", rollDice);
btnNew.addEventListener("click", resetGame);
