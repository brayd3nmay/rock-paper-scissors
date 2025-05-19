function getComputerChoice() {
    let randNum = Math.random();

    if(randNum < 0.3) {
        return 'ROCK';
    } else if (randNum < 0.6) {
        return 'PAPER';
    } else {
        return 'SCISSORS';
    }
}

function getHumanChoice() {
    return prompt('Rock, paper, or scissors: ').toUpperCase();
}

let computerScore = 0;
let humanScore = 0;

function playRound(computer, human) {
    if(computer)
}