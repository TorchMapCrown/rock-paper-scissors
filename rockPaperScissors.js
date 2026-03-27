const rock = "rock"
const paper = "paper"
const scissors = "scissors"

function getComputerChoice(min, max) {
    // randomly assigns roll an integer value between 1 and 3
    let min = Math.ceil(min);
    let max = Math.floor(max);
    let roll = Math.floor(Math.random() * (max - min + 1) + min);
    
    let result = ""
    // turns roll into a string to be stored in result
    if (roll === 1) {
        result = rock
    } else if (roll === 2) {
        result = paper
    } else if (roll === 3) {
        result = scissors
    }

    return result
}

function getHumanChoice(input) {
    // returns one valid choice based on user input
    let input = prompt("Rock, paper, or scissors: ")
    let result = ""

    // converts input to lower-case and tests against valid choices
    if (input.toLowerCase() == rock) {
        result = rock
    } else if (input.toLowerCase() == paper) {
        result = paper
    } else if (input.toLowerCase() == scissors) {
        result = scissors
    }

    return result
}

function playGame() {
    let humanScore = 0
    let computerScore = 0
}