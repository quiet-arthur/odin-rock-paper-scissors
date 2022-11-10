let gameMessage;
let computerPoints = 0;
let playerPoints = 0;


function playRound() {
    let playerSelection = getPlayerChoice();
    let computerSelection = getComputerChoice();
    chooseWinner(playerSelection, computerSelection);
    gameCounter();
}

function getPlayerChoice() {
    return prompt("Chose a weapon between: |     ROCK    |    PAPER     |    SCISSORS   |");
}

function getComputerChoice() {
    const choices = ["Rock", "Paper", "Scissors"];
    return choices[Math.floor(Math.random() * choices.length)];
}

function chooseWinner(playerSelection, computerSelection){
    if (playerSelection.toUpperCase() === "ROCK" && computerSelection === "Paper") {
        gameMessage = "You lose! Paper beats Rock!";
    } else if (playerSelection.toUpperCase() === "SCISSORS" && computerSelection === "Rock") {
        gameMessage = "You lose! Rock beats Scissors!";
    } else if (playerSelection.toUpperCase() === "PAPER" && computerSelection === "Scissors") {
        gameMessage = "You lose! Scissors beats Paper!";
    } else if (playerSelection.toUpperCase() === computerSelection.toUpperCase()) {
        gameMessage = "That's a tie!"
    } else {
        gameMessage = `You win! ${playerSelection} beats ${computerSelection}!`;
    }
    alert(gameMessage);
}

function gameCounter() {
    if (!gameMessage.includes("tie")) {
        gameMessage.includes("lose") ? computerPoints++ : playerPoints++;
    }
    alert(`You: ${playerPoints}     |       Machine: ${computerPoints}`);
}

for (let i = 0; i < 5; i++) {
    playRound();
}