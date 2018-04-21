//THE GAME
//enbles package.json
const readlineSync = require('readline-sync');

//CALL FUNCTION
getMaxFromUser();

//FUNCTION DEFINITIONS

//greets user, gets their name and maximum number
function getMaxFromUser() {
    var name = readlineSync.question('Hello there. What is your name? >> ');
    console.log('Hi, ' + name + '!');
    var maxNumber = readlineSync.question('Pick a number! >> ');
    var maxNumberNumber = Number(maxNumber);
    if (maxNumberNumber === 0) {
        console.log("I said a NUMBER! Zero is more of a concept.");
        console.log("GOODBYE!");
        return;
    }
    if (maxNumberNumber === isNaN) {
        console.log("That's not a number!");
        console.log("GOODBYE!");
        return;
    }
    generateRandomNumber(name, maxNumberNumber);
}

//generates a random number between 1 and maxNumberNumber
function generateRandomNumber(name, maxNumber) {
    var magicNumber = Math.floor(Math.random() * maxNumber);
    startGame(name, magicNumber, maxNumber);
}

// takes care of prompting the user for a guess and converting it to a number
function getGuessFromUser(name, maxNumber, magicNumber) {
    var guess = readlineSync.question('Alright, ' + name + '! I am thinking of a number between 1 and ' + maxNumber + '. Go on, guess! >> ');
    console.log("You guessed:" + guess + "!");
    var guessNumber = parseInt(guess);
    return guessNumber;
}

// while loop with actual game in it, tests input
function startGame(name, magicNumber, maxNumber) {
    console.log(maxNumber);
    let isGuessCorrect = false;
    if (maxNumber === magicNumber) {

    }
    do {
        let guessNumber = getGuessFromUser(name, maxNumber, magicNumber);
        if (guessNumber === magicNumber) {
            isGuessCorrect = true;
        }
        else if (guessNumber < magicNumber) {
            console.log("You guessed too low. Try again!");
        } else {
            console.log("You guessed too high. Try again!");
        }
    } while (isGuessCorrect === false);
    console.log = ("Good job, " + name + "You guessed the magic number!")
}
