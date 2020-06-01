let numberOfRounds = 5;

game(numberOfRounds);

//game function accepts the number of rounds to be looped
function game(numberOfRounds) {
  //Create an array for the computer's choices
  let choices = ["rock", "paper", "scissors"];

  /*roundStatus counts the number of wins. 
  If it is positive, the player wins. 
  If it is negative, the computer wins. If it is 0, it's a tie.
  */
  let roundStatus = 0;

  //Loop the number of rounds
  for (let i = 0; i < numberOfRounds; i++) {
    let playerSelection = prompt("Rock, paper, or scissors? ").toLowerCase();
    let computerSelection = computerPlay(choices);

    // If the player has a wrong input, the game stops.
    if (!choices.includes(playerSelection))
      return alert("Wrong input! Game stops");

    // Create the total of roundStatus
    roundStatus += Number(playRound(playerSelection, computerSelection));
  }

  if (roundStatus > 0) console.log("Game over. You win!");
  else if (roundStatus < 0) console.log("Game over. You lose!");
  else console.log("Game over. It's a draw!");

  // Create a function that lets the computer randomly choose a choice
  function computerPlay(arrayOfChoices) {
    let computerPick =
      arrayOfChoices[Math.floor(Math.random() * arrayOfChoices.length)];
    return computerPick;
  }

  function playRound(playerSelection, computerSelection) {
    if (playerSelection == "rock" && computerSelection == "scissors")
      return playerWins();

    if (playerSelection == "paper" && computerSelection == "rock")
      return playerWins();

    if (playerSelection == "scissors" && computerSelection == "paper")
      return playerWins();

    if (playerSelection == computerSelection) return gameIsDraw();
    else return playerLose();

    function playerWins() {
      console.log(`You win! ${playerSelection} beats ${computerSelection}`);
      return 1;
    }

    function playerLose() {
      console.log(`You lose! ${computerSelection} beats ${playerSelection}.`);
      return -1;
    }

    function gameIsDraw() {
      console.log("Draw!");
      return 0;
    }
  }
}
