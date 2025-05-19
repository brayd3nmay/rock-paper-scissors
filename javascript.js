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
    if(computer == human)
    {
        console.log('Round Draw');
    }
    else if(computer == 'ROCK' && human == 'SCISSORS')
    {
        console.log('You loose. Rock beats scissors.');

        computerScore++;
    }
    else if(computer == 'SCISSORS' && human == 'PAPER')
    {
        console.log('You loose. Scissors beats paper.');

        computerScore++;
    }
    else if(computer == 'PAPER' && human == 'ROCK')
    {
        console.log('You loose. Paper beats rock.');

        computerScore++;
    }
    else if(computer == 'SCISSORS' && human == 'ROCK')
    {
        console.log('You win. Rock beats scissors.');

        humanScore++;
    }
    else if(computer == 'PAPER' && human == 'SCISSORS')
    {
        console.log('You win. Scissors beats paper.');

        humanScore++;
    }
    else if(computer == 'ROCK' && human == 'PAPER')
    {
        console.log('You win. Paper beats rock.');

        humanScore++;
    }
    else
    {
        console.log('Error');
    }
}