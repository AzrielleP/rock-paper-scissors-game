let playerChoice = document.querySelectorAll("button");
let playerHand = document.querySelector(".playerHand");
let computerHand = document.querySelector(".computerHand");
let playerCurrentScore = document.querySelector(".playerCurrentScore");
let computerCurrentScore = document.querySelector(".computerCurrentScore");

let roundResult = document.querySelector(".roundResult");

let playerScore = 0;
let computerScore = 0;
game(5);


function game(numberOfRounds) {
  
  //for (let i = 0; i < numberOfRounds; i++) {
   

    playerChoice.forEach((button) =>{
      button.addEventListener('mousedown', event =>{
        let playerSelection = button.id;
        let computerSelection = computerPlay(choices);
        playRound(playerSelection, computerSelection);
        event.stopPropagation();
      }, false);
    })
  //}
}

let choices = ["rock", "paper", "scissor"];
function computerPlay(arrayOfChoices) {
  let computerPick =
    arrayOfChoices[Math.floor(Math.random() * arrayOfChoices.length)];
  return computerPick;
}

function playRound(playerSelection, computerSelection) {
  playerHand.style.backgroundImage = `url(img/${playerSelection}.png)`;
  computerHand.style.backgroundImage = `url(img/${computerSelection}.png)`;

  if (playerSelection == "rock" && computerSelection == "scissor"){
    return playerWins();
  }

  else if (playerSelection == "paper" && computerSelection == "rock")
  {
    return playerWins();
  }

  else if (playerSelection == "scissor" && computerSelection == "paper"){
    return playerWins();
  }

  else if (playerSelection == computerSelection) {
    return gameIsDraw();
  }

  else{
    return playerLose();
  } 

  function playerWins() {
    console.log(`You win! ${playerSelection} beats ${computerSelection}`);
    roundResult.textContent = "You win!";

    playerScore ++;
    playerCurrentScore.textContent = playerScore;
  }

  function playerLose() {
    console.log(`You lose! ${computerSelection} beats ${playerSelection}.`);
    roundResult.textContent = "You lose!";
 
    computerScore ++;
    computerCurrentScore.textContent = computerScore;
  }

  function gameIsDraw() {
    roundResult.textContent = "Draw";
    console.log("Draw");
  }
  
}






