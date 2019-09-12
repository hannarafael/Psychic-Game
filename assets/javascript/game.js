
// Create an array that holds the alphabet for computer choices 

var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",];

// create vaiables to store information for our game. 

var wins = 0;
var losses = 0;
var numGuesses = 9;
var guessChoices = [];


// creating an on key input for user guest. 

document.onkeyup = function (event) {

    var userGuess = event.key;

    // save a variable to pick a random letter in our computer choices array. 

    var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

    // saving user input for options. 

    var options = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",];
    // if user makes choice then 


    if (options.indexOf(userGuess) > -1) {

        if (userGuess === computerGuess) {
            // if user is equal to computer guess 

            wins++;
            // increase by 1
            numGuesses = 9;
            // counts number of guesses to 9 
            guessChoices = [];
            // clears choices when user reaches 9 guesses 
        }

        if (userGuess != computerGuess) {
            numGuesses--;
            guessChoices.push(userGuess);
        }

        if (numGuesses === 0) {

            numGuesses = 9;
            losses++;
            guessChoices = [];


        }

        var html =
            "<h1> The Psychic Game </h1>" +
            "<p>Guess what letter I'm thinking of!</p>" +
            "<p>Wins: " + wins + "</p>" +
            "<p>Losses: " + losses + "</p>" +
            "<p>Guesses Left: " + numGuesses + "</p>" +
            "<p>Your Guesses so far: " + guessChoices.join(", ") + "</p>";

        document.querySelector("#game").innerHTML = html;


    }
};

