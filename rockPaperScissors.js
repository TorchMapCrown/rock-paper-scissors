const rock = "rock";
const paper = "paper";
const scissors = "scissors";

function getComputerChoice(min, max) {
    // randomly assigns roll an integer value between 1 and 3
    let minCeil = Math.ceil(min);
    let maxFloor = Math.floor(max);
    let roll = Math.floor(Math.random() * (maxFloor - minCeil + 1) + minCeil);
    console.log("computer roll result: " + roll)

    let result = "";
    // turns roll into a string to be stored in result
    if (roll === 1) {
        result = rock;
    } else if (roll === 2) {
        result = paper;
    } else if (roll === 3) {
        result = scissors;
    }

    return result;
}

function getHumanChoice() {
    // returns one valid choice based on user input
    let input = prompt("Rock, paper, scissors: ");
    let result = "";

    // converts input to lower-case and tests against valid choices
    if (input.toLowerCase() == rock) {
        result = rock;
    } else if (input.toLowerCase() == paper) {
        result = paper;
    } else if (input.toLowerCase() == scissors) {
        result = scissors;
    }

    return result;
}

function playGame() {
    // initializes score at 0
    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice) {
        // determines the winner by testing humanChoice against computerChoice
        // adjusts score for post-round display
        if (humanChoice == rock) {
            if (computerChoice == rock) {
                console.log("It's a draw.");
            } else if (computerChoice == paper) {
                console.log("Computer wins.");
                computerScore = ++computerScore;
            } else if (computerChoice == scissors) {
                console.log("Human wins.");
                humanScore = ++humanScore;
            }
        } else if (humanChoice == paper) {
            if (computerChoice == rock) {
                console.log("Human wins.");
                humanScore = ++humanScore;
            } else if (computerChoice == paper) {
                console.log("It's a draw.");
            } else if (computerChoice == scissors) {
                console.log("Computer wins.");
                computerScore = ++computerScore;
            }
        } else if (humanChoice == scissors) {
            if (computerChoice == rock) {
                console.log("Computer wins.");
                computerScore = ++computerScore;
            } else if (computerChoice == paper) {
                console.log("Human wins.");
                humanScore = ++humanScore;
            } else if (computerChoice == scissors) {
                print("It's a draw.")
            }
        }
        // displays post-round score
        console.log("Human: " + humanScore)
        console.log("Computer: " + computerScore)
    }

    playRound(getHumanChoice(), getComputerChoice(1, 3))
    playRound(getHumanChoice(), getComputerChoice(1, 3))
    playRound(getHumanChoice(), getComputerChoice(1, 3))
    playRound(getHumanChoice(), getComputerChoice(1, 3))
    playRound(getHumanChoice(), getComputerChoice(1, 3))
}

playGame()