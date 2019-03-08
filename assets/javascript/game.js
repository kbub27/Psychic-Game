var computerChoices = ["q","w", "e", "r", "t", "y", "u", "i", "o", "p", "a", "s", "d", "f", "g", "j", "k", "l", "z", "x", "c", "v", "b", "n", "m"];

var wins = 0;
var losses = 0;
var remaining = 10;
var choices = [];

var userChoice = document.getElementById("choices");
var userLoss = document.getElementById("youlost");
var userWin = document.getElementById("youwin");
var userRemain = document.getElementById("remaining");


document.onkeyup = function(event) {

    let userGuess = event.key.toLowerCase();

    let computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

    choices.push(userGuess)

    if ( userGuess !== computerGuess && remaining > 1) {
        remaining--;
    } else if ( userGuess !== computerGuess && remaining < 2 ) {
        losses++;
        remaining = + 10;
        choices = [];
    } else {
        wins++;
        choices = [];
    }


    userWin.textContent = wins;
    userLoss.textContent = losses;
    userRemain.textContent = remaining;
    userChoice.textContent = choices;
}
