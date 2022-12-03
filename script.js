let gameMessage;
let computerPoints = 0;
let playerPoints = 0;

const buttons = document.querySelectorAll('.btn');
buttons.forEach((button) => {
  button.addEventListener("click", playRound);
});

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

function chooseWinner(playerSelection, computerSelection) {
  if (playerSelection === "Rock" && computerSelection === "Paper") {
    gameMessage = "You've lost! Paper beats Rock!";
    computerPoints++;
  } else if (playerSelection === "Scissors" && computerSelection === "Rock") {
    gameMessage = "You've lost! Rock beats Scissors!";
    computerPoints++;
  } else if (playerSelection === "Paper" && computerSelection === "Scissors") {
    gameMessage = "You've lost! Scissors beats Paper!";
    computerPoints++;
  } else if (playerSelection === computerSelection) {
    gameMessage = "That's a tie!";
  } else {
    gameMessage = `You've won! ${playerSelection} beats ${computerSelection}!`;
    playerPoints++;
  }
}

function gameCounter() {
  let isAValidWinner = winCondition();

  if (isAValidWinner) {
    if (playerPoints > computerPoints) {
      gameMessage = "Congrats, you won!";
    } else {
      gameMessage = "You lost, try again if you can!";
    }
    openPopUp();
    resetGame();
  }
  const playerPara = document.querySelector(".player");
  const computerPara = document.querySelector(".computer");
  const gameStatus = document.querySelector(".game-status");
  gameStatus.textContent = gameMessage;
  playerPara.textContent = playerPoints;
  computerPara.textContent = computerPoints;
}

function winCondition() {
  return computerPoints == 5 || playerPoints == 5;
}

const popUp = document.querySelector('.pop-up')

function openPopUp() {
      popUp.classList.add('open-pop-up')
}

const btnPlayAgain = document.getElementById('btn-play-again');
btnPlayAgain.addEventListener('click', playAgain);

function playAgain() { 
      popUp.classList.remove('open-pop-up');
}

function resetGame() {
  playerPoints = 0;
  computerPoints = 0;
}

