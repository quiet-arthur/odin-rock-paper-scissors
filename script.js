function playRound(event) {
  let playerSelection = event.target.name;
  let computerSelection = getComputerChoice();
  chooseWinner(playerSelection, computerSelection);
  gameCounter();
}

function getComputerChoice() {
  const choices = ["Rock", "Paper", "Scissors"];
  return choices[Math.floor(Math.random() * choices.length)];
}

let gameMessage;
let computerPoints = 0;
let playerPoints = 0;

const computerScissors = document.getElementById("C-Scissors");
const computerRock = document.getElementById("C-Rock");
const computerPaper = document.getElementById("C-Paper");


function chooseWinner(playerSelection, computerSelection) {
  if (playerSelection === "Rock" && computerSelection === "Paper") {
    gameMessage = "You lost! Paper beats Rock!";
    computerPoints++;
    computerPaper.animate(computerAnimation, computerAnimeTime);
  } else if (playerSelection === "Scissors" && computerSelection === "Rock") {
    gameMessage = "You lost! Rock beats Scissors!";
    computerPoints++;
    computerRock.animate(computerAnimation, computerAnimeTime);
  } else if (playerSelection === "Paper" && computerSelection === "Scissors") {
    gameMessage = "You lost! Scissors beats Paper!";
    computerPoints++;
    computerScissors.animate(computerAnimation, computerAnimeTime);
  } else if (playerSelection === computerSelection) {
    gameMessage = "That's a tie!";
    thatIsTie(playerSelection);
  } else {
    gameMessage = `You won! ${playerSelection} beats ${computerSelection}!`;
    playerPoints++;
    youWon(computerSelection);
  }
}
function youWon(computerSelection) {
  if (computerSelection === "Rock") {
    computerRock.animate(computerAnimation, computerAnimeTime);
  } else if (computerSelection === "Paper") {
    computerPaper.animate(computerAnimation, computerAnimeTime);
  } else if (computerSelection === "Scissors") {
    computerScissors.animate(computerAnimation, computerAnimeTime);
  }
}

function thatIsTie(playerSelection){
  if (playerSelection === "Rock") {
    computerRock.animate(computerAnimation, computerAnimeTime);
  } else if (playerSelection === "Paper") {
    computerPaper.animate(computerAnimation, computerAnimeTime);
  } else if (playerSelection === "Scissors") {
      computerScissors.animate(computerAnimation, computerAnimeTime);
    }
}

const playerPara = document.querySelector(".player");
const computerPara = document.querySelector(".computer");
const gameStatus = document.querySelector(".game-status");
const winnerMessage = document.querySelector(".winner-message");

function gameCounter() {
  let isAValidWinner = winCondition();

  if (isAValidWinner) {
    if (playerPoints > computerPoints) {
      winnerMessage.textContent = "You won!";
    } else {
      winnerMessage.textContent = "You lost!";
    }
    togglePopUp();
    resetGame();
  }
  gameStatus.textContent = gameMessage;
  playerPara.textContent = playerPoints;
  computerPara.textContent = computerPoints;
}

function winCondition() {
  return computerPoints == 5 || playerPoints == 5;
}

function togglePopUp() {
  const popUp = document.querySelector(".pop-up");
  popUp.classList.toggle("open-pop-up");
}

function resetGame() {
  playerPoints = 0;
  computerPoints = 0;
  gameMessage = "Choose your weapon child!";
}

const buttons = document.querySelectorAll(".btn");
buttons.forEach((button) => {
  button.addEventListener("click", playRound);
});

const btnPlayAgain = document.getElementById("btn-play-again");
btnPlayAgain.addEventListener("click", togglePopUp);

const computerAnimation = [
  {
    opacity: 0.0,
  },
  {
    opacity: 1,
  },
  {
    opacity: 0.0,
  },
];

const computerAnimeTime = {
  duration: 2300,
  iteration: 1,
};
