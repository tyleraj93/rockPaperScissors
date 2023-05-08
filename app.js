/*
"The Odin Project" Rock Paper Scissors Game
*/

const div = document.createElement("div")
document.body.appendChild(div);
const button_rock = document.createElement("button");
button_rock.textContent = "rock";
div.appendChild(button_rock);
const button_paper = document.createElement("button");
button_paper.textContent = "paper"
div.appendChild(button_paper);
const button_scissors = document.createElement("button");
button_scissors.textContent = "scissors";
div.appendChild(button_scissors);

const buttons = document.querySelectorAll("button");


const results = document.createElement("div");
document.body.appendChild(results);

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
            playerSelection = prompt(
                "Pick: rock, paper, or scissors."
            ).toLowerCase();
            // After the player selects a new option the round will be ran again
            return playRound(playerSelection, computerSelection);
    }
}


function game() {
    let playerWins = 0;
    let computerWins = 0;

    // Created a function to deal with the limit on wins
    const handleClick = (event) => {
        const result = document.createElement("p");
        result.textContent = playRound(
            event.target.textContent,
            getComputerChoice()
        );
        results.appendChild(result);
        if (result.textContent === "You win!") {
            playerWins++;
        } else if (result.textContent === "You lose...") {
            computerWins++;
        }
        if (playerWins === 5 || computerWins === 5) {
            buttons.forEach((button) => {
                button.removeEventListener("click", handleClick);
            });
            const winner = document.createElement("p");
            playerWins > computerWins ? winner.textContent = "You're the winner!" : winner.textContent = "Try harder next time.";
            results.appendChild(winner);
        }
    };
    buttons.forEach((button) => {
        button.addEventListener("click", handleClick);
    });
}

game()
