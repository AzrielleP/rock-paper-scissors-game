let playerSelection = prompt("Rock, paper, or scissors? ").toLowerCase();
let choices = ["rock", "paper", "scissors"];
let computerSelection = computerPlay(choices);
if(!choices.includes(playerSelection)) alert("Wrong input!");

function computerPlay(arrayOfChoices){
    let computerPick = arrayOfChoices[Math.floor(Math.random()*arrayOfChoices.length)];
    return computerPick;
}

function playRound(playerSelection, computerSelection){
    function playerWins(){
        return `You win! ${playerSelection} beats ${computerSelection} `;
    }

    function playerLose(){
        return `You lose! ${computerSelection} beats ${playerSelection}.`;
    }

    function gameIsDraw(){
        return "Draw!";
    }

    if (playerSelection == "rock" && computerSelection == "scissors") return playerWins();

    if (playerSelection == "paper" && computerSelection == "rock") return playerWins();

    if (playerSelection == "scissors" && computerSelection == "paper") return playerWins();

    if(playerSelection == computerSelection) return gameIsDraw();

    else return playerLose();
}

console.log(playRound(playerSelection, computerSelection));
