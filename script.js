let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;
const humanGuess = humanGuessInput.value;

// Write your code below:

function generateTarget() {
    return Math.floor(Math.random() * 10);
}

function getAbsoluteDistance(a, b) {
 return Math.abs(a - b);
}

function compareGuesses(humanGuess, computerGuess, targetNumber) {
    targetNumber = generateTarget();
    let humanDifference = getAbsoluteDistance(targetNumber, humanGuess);
    let computerDifference = getAbsoluteDistance(targetNumber, computerGuess);
    if (computerDifference < humanDifference) {
        return false;
    } else {
        return true;
    }
}

function updateScore(winner) {
    switch (winner) {
        case 'human' :
            humanScore++;
            break;
        case 'computer': 
            computerScore++;
            break;
    }
}

function advanceRound() {
    currentRoundNumber++;
}

/* function wrongNumber () {
    if((humanGuess > 9) || (humanGuess < 0)) {
        window.alert("Number needs to be between 0 and 9.");
    }
}
*/