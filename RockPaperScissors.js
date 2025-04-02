
// user's input
let userInput = 'rock';
// make it to uppercase
let userChoice= userInput.toUpperCase();

// arrow function : generate random number between 1 to 3
let randomNumber = () => Math.floor(Math.random() * 3) + 1;

// arrow function : get computer output randomly
let computerInput = random => {
    // console.log(random) // debug purpose
    switch (random) {
    case 1:
        return 'rock';
        break;
    case 2:
        return 'paper';
        break;
    case 3:
        return 'scissors';
        break;
    default:
        return 'error!'
        break;
}
};


// win conditions object
const winConditions = {
    ROCK: 'SCISSORS',
    SCISSORS: 'PAPER',
    PAPER: 'ROCK'
};

//get computer input and turn to uppercase
let computerChoice = computerInput(randomNumber()).toUpperCase();

// console.log(computerChoice); // debug purpose

// compared against to winning conditions
if (computerChoice === userChoice) {
    console.log('draw');
} else if (winConditions[computerChoice] === userChoice) {
    console.log('computer wins!');
} else if (winConditions[userChoice] === computerChoice) {
    console.log('user wins!');
} else {
    console.log('Error user input');
}
