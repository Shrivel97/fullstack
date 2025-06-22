<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>Stone Paper Scissors</title>
</head>
<body style="text-align: center; font-family: Arial; margin-top: 50px;">

  <h1>Stone Paper Scissors Game</h1>

  <h3>Choose your option:</h3>

  <button onclick="playGame('stone')">🪨 Stone</button>
  <button onclick="playGame('paper')">📄 Paper</button>
  <button onclick="playGame('scissors')">✂️ Scissors</button>

  <h2 id="user-choice"></h2>
  <h2 id="computer-choice"></h2>
  <h1 id="result"></h1>

  <script>
    function playGame(userChoice) {
      const choices = ["stone", "paper", "scissors"];
      const computerChoice = choices[Math.floor(Math.random() * 3)];

      document.getElementById("user-choice").innerText = "You chose: " + userChoice;
      document.getElementById("computer-choice").innerText = "Computer chose: " + computerChoice;

      let result = "";

      if (userChoice === computerChoice) {
        result = "It's a Draw!";
      } else if (
        (userChoice === "stone" && computerChoice === "scissors") ||
        (userChoice === "paper" && computerChoice === "stone") ||
        (userChoice === "scissors" && computerChoice === "paper")
      ) {
        result = "You Win!";
      } else {
        result = "You Lose!";
      }

      document.getElementById("result").innerText = result;
    }
  </script>

</body>
</html>
