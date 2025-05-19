function getComputerChoice() {
    let randNum = Math.random();

    if(randNum < 0.3) {
        return 'Rock';
    } else if (randNum < 0.6) {
        return 'Paper';
    } else {
        return 'Scissors';
    }
}

function getHumanChoice() {
    return prompt('Rock, paper, or scissors: ');
}