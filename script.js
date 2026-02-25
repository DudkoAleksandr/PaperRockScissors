const btnPlay = document.querySelector(".main__btn-play");

const btnRock = document.querySelector(".btn__rock");
const btnPaper = document.querySelector(".btn__paper");
const btnScessors = document.querySelector(".btn__scissors");
const btnExit = document.querySelector(".btn__exit");

const scorePlayer = document.querySelector(".score__result-player");
const scoreComputer = document.querySelector(".score__result-computer");

const imgPlayer = document.querySelector(".img__player");
const imgComputer = document.querySelector(".img__computer");

const resultText = document.querySelector(".result__text");

const sectionStart = document.querySelector(".start");
const sectionGame = document.querySelector(".hide__game");

let playerScore = 0;
let computerScore = 0;

btnPlay.addEventListener("click", () => {
  sectionStart.classList.add("hide__start");
  sectionGame.classList.remove("hide__game");
});

btnExit.addEventListener("click", () => {
  exitBtn();
});

btnRock.addEventListener("click", () => {
  addImg("./img/rock.png", imgPlayer);

  let computerMove = computerGame();
  addImg(`./img/${computerMove}.png`, imgComputer);

  rock(computerMove);
  conditionWin();
});

btnPaper.addEventListener("click", () => {
  addImg("./img/paper.png", imgPlayer);

  let computerMove = computerGame();
  addImg(`./img/${computerMove}.png`, imgComputer);

  paper(computerMove);
  conditionWin();
});

btnScessors.addEventListener("click", () => {
  addImg("./img/scissors.png", imgPlayer);

  let computerMove = computerGame();
  addImg(`./img/${computerMove}.png`, imgComputer);

  scessors(computerMove);
  conditionWin();
});
