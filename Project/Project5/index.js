const buttons = document.querySelectorAll("button");
const result = document.getElementById("result");
let userScore = document.getElementById("user-score")
let computerScore = document.getElementById("computer-score")

let playerPoints = 0
let computerPoints = 0

buttons.forEach((button) => {
  button.addEventListener("click", function () {
    const ChoiceResult = gameResult(button.id, computerPlay());
    result.textContent = ChoiceResult;
  });
});

function computerPlay() {
  const choices = ["rock", "paper", "scissor"];
  const randomChoices = Math.floor(Math.random() * choices.length);
  return choices[randomChoices];
}

function gameResult(playerChoices, computerChoices) {
  console.log(playerChoices, computerChoices);
  if (playerChoices === computerChoices) {
    return "Its a tie";
  } else if (
    (playerChoices === "rock" && computerChoices === "scissor") ||
    (playerChoices === "paper" && computerChoices === "rock") ||
    (playerChoices === "scissor" && computerChoices === "paper")
  ) {
    playerPoints++
    userScore.textContent = playerPoints
    return "You Won! " + playerChoices + " beats " + computerChoices;
  } else {
    computerPoints++
    computerScore.textContent = computerPoints
    return "You lose! " + computerChoices + " beats " + playerChoices;
  }
}
