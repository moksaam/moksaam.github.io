function add() {
    
    var x = document.getElementById('num1').value;
    var y = document.getElementById('num2').value;
    var sum;

    sum = parseInt(x) + parseInt(y);

    document.getElementById("sum").innerHTML = sum;
}

var btn = document.querySelector("#doneBtn");
var txt = document.querySelector("#congrats");

if(btn) {
    btn.addEventListener('click', congrats);
}

function congrats() {

    if (btn.value === "Click Here") {
        btn.value = "Clicked!";
        txt.textContent = "Congratulations, you know maths!";
    } else {
        btn.value = "Click Here";
        txt.textContent = "Can you maths?"
    }
}


var count = 0;
var turns = 7;

document.getElementById("checkBtn").onclick = function () {
    var userGuess = document.getElementById("guess").value;
    makeGuess(userGuess);
    count++;

    if (count == turns) {
        alert("Game Over!");
        document.getElementById("checkBtn").disabled = true;
    }
}

function generateNumber() {
    var gameAnswer = Math.floor((Math.random() * 100) + 1);
}

function makeGuess(userGuess) {
    var guesses = document.getElementById("guesses");

    if (userGuess > gameAnswer) {
        guesses.value = guesses.value + "\r" + "Lower!"
    } else if (count < gameAnswer) {
        guesses.value = guesses.value + "\r" + "Higher!"
    } else {
        guesses.value = guesses.value + "\r" + "You got it right!"
    }
}

function showNumber() {
    var numberDisplay = document.getElementById("randomNumber")
    numberDisplay.innerHTML = gameAnswer;

}