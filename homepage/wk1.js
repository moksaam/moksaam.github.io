function add() {
    
    var x = document.getElementById('num1').value;
    var y = document.getElementById('num2').value;
    var sum;

    sum = parseInt(x) + parseInt(y);

    document.getElementById("sum").innerHTML = sum;
}

var btn = document.getElementById("doneBtn");
var txt = document.getElementById("congrats");
window.onload = function () {
    btn.addEventListener('click', function () {

        if (btn.value === 'Click Here') {
            btn.value = "Clicked!";
            txt.innerHTML = "Congratulations, you know maths!";
        } else {
            btn.value = 'Click Here';
            txt.innerHTML = "Can you maths?"
        }
    });
}

var gameAnswer = Math.floor((Math.random() * 100) + 1);
var count = 0;
var turns = 7;

window.onload = function () {
    document.getElementById("checkBtn").onclick = function () {
        var userGuess = document.getElementById("guess").value;
        makeGuess(userGuess);
        count++;

        if (count == turns) {
            alert("Game Over! The answer was " + gameAnswer);
            document.getElementById("checkBtn").disabled = true;
        }
    }
}

function makeGuess(userGuess) {
    var guesses = document.getElementById("output");

    if (userGuess > gameAnswer) {
        guesses.value = guesses.value + "\r" + "Lower! (" + userGuess + ")";
    } else if (count < gameAnswer) {
        guesses.value = guesses.value + "\r" + "Higher! (" + userGuess + ")";
    } else {
        guesses.value = guesses.value + "\r" + "You got it right! (" + gameAnswer + ")";
    }
}

function playAgain(yesPlease) {
    var guesses = document.getElementById("output");
    
    if (yesPlease && !confirm('Would you like to play again?')) {
        return;
    }

    guesses.value = '';
    gameAnswer = Math.floor((Math.random() * 100) + 1);
    guesses.value = "Game on!! You have 7 chances to guess my number!\n";
}