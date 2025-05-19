let computerScore = 0;
let humanScore = 0;

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

function playGame() {

    function playRound(computer, human) {
        if(computer == human) {
            console.log('Round Draw\n');
        } else if(computer == 'ROCK' && human == 'SCISSORS') {
            console.log('You loose. Rock beats scissors.\n');

            computerScore++;
        } else if(computer == 'SCISSORS' && human == 'PAPER') {
            console.log('You loose. Scissors beats paper.\n');

            computerScore++;
        } else if(computer == 'PAPER' && human == 'ROCK') {
            console.log('You loose. Paper beats rock.\n');

            computerScore++;
        } else if(computer == 'SCISSORS' && human == 'ROCK') {
            console.log('You win. Rock beats scissors.\n');

            humanScore++;
        } else if(computer == 'PAPER' && human == 'SCISSORS') {
            console.log('You win. Scissors beats paper.\n');

            humanScore++;
        } else if(computer == 'ROCK' && human == 'PAPER') {
            console.log('You win. Paper beats rock.\n');

            humanScore++;
        } else {
            console.log('Error\n');
        }
    }

    for(i = 0; i < 5; i++) {
        let computerChoice = getComputerChoice();
        let humanChoice = getHumanChoice();

        playRound(computerChoice, humanChoice);
    }

    if(computerScore === humanScore) {
        console.log('Game draw.\n');
    } else if(computerScore > humanScore) {
        console.log('Computer wins game.\n');
    } else {
        console.log('Human wins game.\n');
    }
}

playGame();