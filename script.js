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


// Create new function named getHumanChoice
// getHumanChoice returns choice based on user input
function getHumanChoice() {
    let humanChoice = prompt("Choose rock, paper or scissors: ");
    return humanChoice;
}





let humanSelection = "";
let computerSelection = "";

// Create new function named playGame
function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    // Create a new function named playRound, define two parameters: humanChoice and computerChoice
    function playRound (humanChoice, computerChoice) {
        humanChoice = humanChoice.toLowerCase(); // Make humanChoice parameter case-insensitive
        console.log("Computer selected: " + computerChoice);
        console.log("You selected: " + humanChoice);

        // playRound function should output to console.log a string value representing winner e.g. "You lose! Paper beats rock!"
        if (humanChoice === "rock" && computerChoice === "paper") {
            console.log("You lose! Paper beats rock!");
            computerScore++;
        } else if (humanChoice === "rock" && computerChoice === "scissors") {
            console.log("You win! Rock beats scissors!");
            humanScore++;
        } else if (humanChoice === "rock" && computerChoice === "rock") {
            console.log("You tie!");
        } else if (humanChoice === "paper" && computerChoice === "rock") {
            console.log("You win! Paper beats rock!");
            humanScore++;
        } else if (humanChoice === "paper" && computerChoice === "paper") {
            console.log("You tie!");
        } else if (humanChoice === "paper" && computerChoice === "scissors") {
            console.log("You lose! Scissors beats paper!");
            computerScore++;
        } else if (humanChoice === "scissors" && computerChoice == "scissors") {
            console.log("You tie!");
        } else if (humanChoice === "scissors" && computerChoice == "rock") {
            console.log("You lose! Rock beats scissors!");
            computerScore++;
        } else if (humanChoice === "scissors" && computerChoice == "paper") {
            console.log("You lose! Paper beats rock!");
            computerScore++;
        } else {
            console.log("Something went wrong.");
        }
    }

    // Play five rounds
    for (i = 1; i <= 5; i++) {
        humanSelection = getHumanChoice();
        computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }
    // Display final results
    if (computerScore > humanScore) {
        finalResult = "\nYou lose :(";
    } else {
        finalResult = "\nYou win! :D";
    }

    console.log("Final score:\n Computer: " + computerScore + "\n Your Score:" + humanScore + finalResult);
}

playGame();