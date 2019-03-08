var computerChoices = ["q","w", "e", "r", "t", "y", "u", "i", "o", "p", "a", "s", "d", "f", "g", "j", "k", "l", "z", "x", "c", "v", "b", "n", "m"];

var wins = 0;
var losses = 0;
var remaining = 10;

var userChoice = document.getElementById("choices");
var userLoss = document.getElementById("youlose");
var userWin = document.getElementById("youwin");

document.onkeyup = function(event) {

    let userGuess = event.key.toLowerCase();

    let computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

    if (userGuess === computerGuess) {
        wins++;
        console.log(wins);
    } else {
        losses++;
        console.log(losses)
    }

    
}
