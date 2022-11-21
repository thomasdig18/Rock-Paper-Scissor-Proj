


function getComputerChoice() {
    const choices = ["Rock", "Paper", "Scissors"];
    const random = Math.floor(Math.random() * choices.length);
    return choices[random];

}

let computerSelection = '';

function playRound(playerSelection, computerSelection) {
    computerSelection = getComputerChoice();
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


const btnRock = document.querySelector('#one');
const btnPaper = document.querySelector('#two');
const btnScissor = document.querySelector('#three');

let playerCount = 1;
let computerCount = 1;

btnRock.addEventListener('click', () => {
    document.getElementById("results").innerHTML = (playRound("Rock", computerSelection));
});

btnRock.addEventListener('click', () => {
    if (document.getElementById("results").innerHTML === "You win! Rock beats Scissors") {
        document.getElementById("scores-player").innerHTML = playerCount++;
    } else if (document.getElementById("results").innerHTML === "You Lose!") {
               document.getElementById("scores-computer").innerHTML = computerCount++;
    }
});



btnPaper.addEventListener('click', () => {
    document.getElementById("results").innerHTML = (playRound("Paper", computerSelection));
});

btnPaper.addEventListener('click', () => {
    if (document.getElementById("results").innerHTML === "You win! Paper covers Rock") {
        document.getElementById("scores-player").innerHTML = playerCount++;
    } else if (document.getElementById("results").innerHTML === "You Lose!") {
               document.getElementById("scores-computer").innerHTML = computerCount++;
    }
});



btnScissor.addEventListener('click', () => {
    document.getElementById("results").innerHTML = (playRound("Scissors", computerSelection));
});

btnScissor.addEventListener('click', () => {
    if (document.getElementById("results").innerHTML === "You win! Scissors beats paper") {
        document.getElementById("scores-player").innerHTML = playerCount++;
    } else if (document.getElementById("results").innerHTML === "You Lose!") {
               document.getElementById("scores-computer").innerHTML = computerCount++;
    }
});




