let userScore = 0;
let pcScore = 0;

document.addEventListener("DOMContentLoaded", () => {

  const choices = document.querySelectorAll(".choice[data-choice]");
  const gameArea = document.getElementById("gameArea");
  const resultScreen = document.getElementById("resultScreen");

  const userPick = document.getElementById("userPick");
  const pcPick = document.getElementById("pcPick");
  const resultMessage = document.getElementById("resultMessage");

  const userScoreEl = document.getElementById("your-score");
  const pcScoreEl = document.getElementById("computer-score");

  const playAgain = document.getElementById("playAgain");
  const nextBtn = document.getElementById("nextBtn");

  const finalScreen = document.getElementById("finalScreen");
  const finalText = document.getElementById("finalText");
  const restartBtn = document.getElementById("restart");

  const icons = {
    rock: "✊",
    paper: "✋",
    scissor: "✌️"
  };

  const winRule = {
    rock: "scissor",
    paper: "rock",
    scissor: "paper"
  };

  choices.forEach(choice => {
    choice.addEventListener("click", () => {
      startGame(choice.dataset.choice);
    });
  });

  function startGame(userChoice) {
    const pcChoice = Object.keys(icons)[Math.floor(Math.random() * 3)];

    gameArea.classList.add("hidden");
    resultScreen.classList.remove("hidden");

    userPick.className = "choice big";
    pcPick.className = "choice big";

    userPick.textContent = icons[userChoice];
    pcPick.textContent = icons[pcChoice];

    if (userChoice === pcChoice) {
      resultMessage.textContent = "DRAW";
    } 
    else if (winRule[userChoice] === pcChoice) {
      resultMessage.textContent = "YOU WIN";
      userScore++;
      userScoreEl.textContent = userScore;
      userPick.classList.add("winner");
    } 
    else {
      resultMessage.textContent = "YOU LOST";
      pcScore++;
      pcScoreEl.textContent = pcScore;
      pcPick.classList.add("winner");
    }
  }

  playAgain.addEventListener("click", () => {
    resultScreen.classList.add("hidden");
    gameArea.classList.remove("hidden");
  });

  // NEXT → show final ONLY if user wins
  nextBtn.addEventListener("click", () => {
    if (userScore > pcScore) {
      finalScreen.classList.remove("hidden");
      finalText.innerText = "HURRAY!! YOU WON THE GAME 🎉";
    }
  });

  restartBtn.addEventListener("click", () => {
    userScore = 0;
    pcScore = 0;
    userScoreEl.textContent = 0;
    pcScoreEl.textContent = 0;

    finalScreen.classList.add("hidden");
    resultScreen.classList.add("hidden");
    gameArea.classList.remove("hidden");
  });

  // RULES
  const rulesBtn = document.getElementById("rulesBtn");
  const rulesModal = document.getElementById("rulesModal");
  const closeRules = document.getElementById("closeRules");

  rulesBtn.onclick = () => rulesModal.style.display = "flex";
  closeRules.onclick = () => rulesModal.style.display = "none";
});
