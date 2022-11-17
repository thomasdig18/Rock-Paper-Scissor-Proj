function getComputerChoice() {
    const choices = ["Rock", "Paper", "Scissors"];
    const random = Math.floor(Math.random() * choices.length);
    return choices[random];

}

let computerSelection = getComputerChoice();

function playRound(playerSelection, computerSelection) {
    if (playerSelection === 'Rock' && computerSelection === 'Scissors') {
        return "You win! Rock beats Scissors";
    } else if (playerSelection === 'Scissors' && computerSelection === 'Paper') {
        return "You win! Scissors beats paper";
    } else if (playerSelection === 'Paper' && computerSelection === 'Rock') {
        return "You win! Paper covers Rock";
    } else if (playerSelection === computerSelection) {
        return "It's a tie!"
    } else {
        return "You Lose!";
    }   
} 

function game() {

    
