/*
"The Odin Project" Rock Paper Scissors Game
First iteration of the project using just the console to play
*/

// Generates a random choice for the computer
function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const randomInt = Math.floor(Math.random() * choices.length);
    return choices[randomInt];
}

// Plays a round comparing the players selection to the computers
function playRound(playerSelection, computerSelection) {
    switch (true) {
        case playerSelection === computerSelection:
            return "You draw";
        case playerSelection === "rock" && computerSelection === "paper":
            return "You lose...";
        case playerSelection === "rock" && computerSelection === "scissors":
            return "You win!";
        case playerSelection === "paper" && computerSelection === "scissors":
            return "You lose...";
        case playerSelection === "paper" && computerSelection === "rock":
            return "You win!";
        case playerSelection === "scissors" && computerSelection === "rock":
            return "You lose...";
        case playerSelection === "scissors" && computerSelection === "paper":
            return "You win!";
        default:
            // If the player inputs an incorrect option they will be prompted to select again
            playerSelection = prompt("Pick: rock, paper, or scissors.").toLowerCase();
            // After the player selects a new option the round will be ran again
            return playRound(playerSelection, computerSelection);
    }
}

// Plays a 5 round game and will tell you if you won the round and overall
function game() {
    let playerWins = 0;
    let computerWins = 0;
    // Loop for 5 rounds logging who won the round
    for (let rounds = 5; rounds > 0; rounds--) {
        // I wanted to print what round was being played each time the verdict was printed
        let round = "Round: " + (6-rounds) + " ";
        let playerChoice = prompt("Pick: rock, paper, or scissors.").toLowerCase();
        let computerChoice = getComputerChoice();
        // I had the verdict determined by itself so that if a user tried the wrong input it would run right
        let verdict = playRound(playerChoice, computerChoice);
        if (verdict === "You win!") {
            console.log(round + verdict);
            playerWins++;
        } else if (verdict === "You lose...") {
            console.log(round + verdict);
            computerWins++;
        } else if (verdict === "You draw") {
            console.log(round + verdict);
        }
    }
    // Determines who won overall
    if (playerWins > computerWins) {
        console.log("You're the winner!");
    } else if (computerWins > playerWins) {
        console.log("Better luck next time.");
    } else {
        console.log("Tie game.");
    }
}
