// Create new function named getComputerChoice
// getComputerChoice randomly returns the string "rock" "paper" or "scissors"
function getComputerChoice() {
    let randomNumber = Math.floor((Math.random() * 100)); // Produces number from 0-99
    console.log(randomNumber);
    // 3 choices returned based on random number (1/3 chance)
    if (randomNumber <= 33){ 
        return "rock";
    } else if (randomNumber <= 66) {
        return "paper";
    } else {
        return "scissors";
    }
     
}

// Test what the function getComputerChoice returns
console.log(getComputerChoice());

// Create new function named getHumanChoice
// getHumanChoice returns choice based on user input
function getHumanChoice() {
    let humanChoice = prompt("Choose rock, paper or scissors: ");
    return humanChoice;
}

// Test what the function getHumanChoice returns
console.log(getHumanChoice());

// Create two variables humanScore and computerScore in global scope, initalize with value of 0

// Create a new function named playRound, define two parameters: humanChoice and computerChoice
// Make humanChoice parameter case-insensitive
// playRound function should output to console.log a string value representing winner e.g. "You lose! Paper beats rock!"

