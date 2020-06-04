"use strict";

let playerClick = document.querySelector(".choices");
let playerHand = document.querySelector(".playerHand");
let computerHand = document.querySelector(".computerHand");
let playerCurrentScore = document.querySelector(".playerCurrentScore");
let computerCurrentScore = document.querySelector(".computerCurrentScore");
let roundResult = document.querySelector(".roundResult");
let modal = document.querySelector(".modal");
let gameResult = document.querySelector(".result");
let playAgain = document.querySelector(".playAgain");

let playerScore = 0;
let computerScore = 0;

game(5);

function game(numberOfRounds) {
  let clickTimes = 0;
  let choices = ["rock", "paper", "scissor"];
  playerClick.addEventListener("click", startGame);

  function startGame(event) {
    let playerSelection = event.target.textContent;
    let computerSelection = computerPlay(choices);

    playRound(playerSelection, computerSelection);
    clickTimes++;
    if (clickTimes == numberOfRounds) {
      gameOver();
    } 
  }
}

function computerPlay(arrayOfChoices) {
  let computerPick =
    arrayOfChoices[Math.floor(Math.random() * arrayOfChoices.length)];
  return computerPick;
}

function gameOver() {
  modal.style.visibility = "visible";
  if (playerScore > computerScore) {
    gameResult.textContent = "You Win!";
    gameResult.style.color = "#03dac5";
  } 
  else if (playerScore == computerScore) {
    gameResult.textContent = "It's a tie!";
    gameResult.style.color = "#FFFFFF";
  }
  playAgain.addEventListener("click", () => {
    location.reload();
    return false;
  });
}

function playRound(playerSelection, computerSelection) {
  playerHand.style.backgroundImage = `url(img/${playerSelection}.png)`;
  computerHand.style.backgroundImage = `url(img/${computerSelection}.png)`;

  if (playerSelection == "rock" && computerSelection == "scissor") {
    return playerWins();
  } else if (playerSelection == "paper" && computerSelection == "rock") {
    return playerWins();
  } else if (playerSelection == "scissor" && computerSelection == "paper") {
    return playerWins();
  } else if (playerSelection == computerSelection) {
    return gameIsDraw();
  } else {
    return playerLose();
  }
}

function playerWins() {
  roundResult.textContent = "YOU WIN";
  playerScore++;
  playerCurrentScore.textContent = playerScore;
}

function playerLose() {
  roundResult.textContent = "YOU LOSE";
  computerScore++;
  computerCurrentScore.textContent = computerScore;
}

function gameIsDraw() {
  roundResult.textContent = "DRAW";
}
