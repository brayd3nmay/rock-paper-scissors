let computerScore = 0;
let humanScore = 0;

const hScore = document.querySelector("#humanScore");
const cScore = document.querySelector('#computerScore');

const humanChoice = document.querySelector('#humanChoice');
const computerChoice = document.querySelector('#computerChoice');

const buttons = document.querySelectorAll("button");

buttons.forEach(button => button.addEventListener('click', () => {
    // get the human choice
    let human = button.id;
    humanChoice.textContent = `You choose: ${human}`;

    // get the computer choice
    let computer = getComputerChoice();
    computerChoice.textContent = `The computer choose: ${computer.toLowerCase()}`;

    playRound(computer, human.toUpperCase());

    // update the score to the user
    hScore.textContent = `🧟‍♂️ Your score: ${humanScore}`;
    cScore.textContent = `🤖 Computer score: ${computerScore}`;

    // check to see if the game is over
    if(checkGame(humanScore, computerScore)) {
        const body = document.querySelector('body');

        if(humanScore > computerScore){
            body.innerHTML = '<h1>GAME OVER</h1><h1>YOU WIN</h1>';
        } else {
            body.innerHTML = '<h1>GAME OVER</h1><h1>YOU LOOSE</h1>';
        }
    }
}));

function getComputerChoice() {
    let randNum = Math.floor(Math.random() * 3);

    if(randNum == 0) {
        return 'ROCK';
    } else if (randNum == 1) {
        return 'PAPER';
    } else {
        return 'SCISSORS';
    }
}

function playRound(computer, human) {
    const roundStatus = document.querySelector("#roundStatus");

    if(computer == human) {
        roundStatus.textContent = 'Round Draw';
    } else if(computer == 'ROCK' && human == 'SCISSORS') {
        roundStatus.textContent = 'You loose. Rock beats scissors.';

        computerScore++;
    } else if(computer == 'SCISSORS' && human == 'PAPER') {
        roundStatus.textContent = 'You loose. Scissors beats paper.';

        computerScore++;
    } else if(computer == 'PAPER' && human == 'ROCK') {
        roundStatus.textContent = 'You loose. Paper beats rock.';

        computerScore++;
    } else if(computer == 'SCISSORS' && human == 'ROCK') {
        roundStatus.textContent = 'You win. Rock beats scissors.';

        humanScore++;
    } else if(computer == 'PAPER' && human == 'SCISSORS') {
        roundStatus.textContent = 'You win. Scissors beats paper.';

        humanScore++;
    } else if(computer == 'ROCK' && human == 'PAPER') {
        roundStatus.textContent = 'You win. Paper beats rock.';

        humanScore++;
    } else {
        roundStatus.textContent = 'Error';
    }
}

function checkGame(humanScore, computerScore) {
    if(humanScore > 4 || computerScore > 4) {
        return true;
    }
    else {
        return false;
    }
}