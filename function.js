const arrGame = ["rock", "paper", "scissors"];

function addImg(src, gamer) {
  const img = document.createElement("img");
  img.src = src;
  img.width = 100;
  gamer.innerHTML = ''
  gamer.append(img);
}

function computerGame() {
  const randomIndex = Math.floor(Math.random() * 3);
  return arrGame[randomIndex];
}

function exitBtn() {
  sectionStart.classList.remove("hide__start");
  sectionGame.classList.add("hide__game");
  imgPlayer.innerHTML = "";
  imgComputer.innerHTML = "";
  scoreComputer.innerHTML = 0;
  scorePlayer.innerHTML = 0;
  playerScore = 0;
  computerScore = 0;
  resultText.innerHTML = "";
  openBtn();
}

function hideBtn() {
  btnRock.classList.add("hide__game");
  btnPaper.classList.add("hide__game");
  btnScessors.classList.add("hide__game");
}
function openBtn() {
  btnRock.classList.remove("hide__game");
  btnPaper.classList.remove("hide__game");
  btnScessors.classList.remove("hide__game");
}

function conditionWin() {
  if (playerScore === 5) {
    resultText.innerHTML = "Player win, game over";
    hideBtn();
  } else if (computerScore === 5) {
    resultText.innerHTML = "Computer win, game over";
    hideBtn();
  }
}

function rock(computerMove) {
  if (computerMove === "paper") {
    computerWin();
  } else if (computerMove === "rock") {
    resultText.innerHTML = "Ничья попробуй ещё раз";
  } else if (computerMove === "scissors") {
    playerWin();
  }
}

function paper(computerMove) {
  if (computerMove === "paper") {
    resultText.innerHTML = "Ничья попробуй ещё раз";
  } else if (computerMove === "rock") {
    playerWin();
  } else if (computerMove === "scissors") {
    computerWin();
  }
}

function scessors(computerMove) {
  if (computerMove === "paper") {
    playerWin();
  } else if (computerMove === "rock") {
    computerWin();
  } else if (computerMove === "scissors") {
    resultText.innerHTML = "Ничья попробуй ещё раз";
  }
}

function playerWin() {
  playerScore++;
  scorePlayer.innerHTML = playerScore;
  resultText.innerHTML = "";
}

function computerWin() {
  computerScore++;
  scoreComputer.innerHTML = computerScore;
  resultText.innerHTML = "";
}
