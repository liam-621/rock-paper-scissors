// Create new function named getComputerChoice
// getComputerChoice randomly returns the string "rock" "paper" or "scissors"
function getComputerChoice() {
    let randomNumber = Math.floor((Math.random() * 100)); // Produces number from 0-99
    // 3 choices returned based on random number (1/3 chance)
    if (randomNumber <= 33){ 
        return "rock";
    } else if (randomNumber <= 66) {
        return "paper";
    } else {
        return "scissors";
    }
     
}

// Create new function named playGame
function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    const results = document.querySelector("#Results");
    const roundResult = document.createElement("p")
    const runningScore = document.createElement("p"); 
    const finalResult = document.createElement("p"); 

    results.appendChild(roundResult);
    results.appendChild(runningScore);
    results.appendChild(finalResult);

    // Create a new function named playRound, define two parameters: humanChoice and computerChoice
    function playRound (humanChoice, computerChoice) {
        humanChoice = humanChoice.toLowerCase(); // Make humanChoice parameter case-insensitive

        finalResult.textContent = ""; // Clear final result if more rounds are played

        // playRound function should output to console.log a string value representing winner e.g. "You lose! Paper beats rock!"
        if (humanChoice === "rock" && computerChoice === "paper") {
            roundResult.textContent = "You lose! Paper beats rock!";
            computerScore++;
        } else if (humanChoice === "rock" && computerChoice === "scissors") {
            roundResult.textContent = "You win! Rock beats scissors!";
            humanScore++;
        } else if (humanChoice === "rock" && computerChoice === "rock") {
            roundResult.textContent = "You tie!";
        } else if (humanChoice === "paper" && computerChoice === "rock") {
            roundResult.textContent = "You win! Paper beats rock!";
            humanScore++;
        } else if (humanChoice === "paper" && computerChoice === "paper") {
            roundResult.textContent = "You tie!";
        } else if (humanChoice === "paper" && computerChoice === "scissors") {
            roundResult.textContent = "You lose! Scissors beats paper!";
            computerScore++;
        } else if (humanChoice === "scissors" && computerChoice == "scissors") {
            roundResult.textContent = "You tie!";
        } else if (humanChoice === "scissors" && computerChoice == "rock") {
            roundResult.textContent = "You lose! Rock beats scissors!";
            computerScore++;
        } else if (humanChoice === "scissors" && computerChoice == "paper") {
            roundResult.textContent = "You win! Scissors beats paper!";
            humanScore++;
        } else {
            roundResult.textContent = "Something went wrong.";
        }

        runningScore.textContent = `Human Score: ${humanScore}\n Computer Score: ${computerScore}`;

        if (humanScore === 5) {
            finalResult.textContent = "You win the game!";
            humanScore = 0;
            computerScore = 0;
        } else if (computerScore === 5) {
            finalResult.textContent = "The computer wins."
            humanScore = 0;
            computerScore = 0;
        }

    }

    const rockBtn = document.querySelector("#rock");
    rockBtn.addEventListener("click", () => {
        playRound("rock", getComputerChoice());
    });

    const paperBtn = document.querySelector("#paper");
    paperBtn.addEventListener("click", () => {
        playRound("paper", getComputerChoice());
    });

    const scissorsBtn = document.querySelector("#scissors");
    scissorsBtn.addEventListener("click", () => {
        playRound("scissors", getComputerChoice());
    });
}

playGame();

