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

var gameAnswer = Math.floor((Math.random() * 100) + 1);
var count = 0;
var turns = 7;

function makeGuess() {

    var userGuess = document.getElementById("guess").value;

    while (count != turns) {
        if (userGuess > gameAnswer) {
            var lower = document.getElementById("answer")
            lower.innerHTML = "Lower";
        } else if (count < gameAnswer) {
            var higher = document.getElementById("answer")
            higher.innerHTML = "Higher";
        } else {
            var correct = document.getElementById("answer")
            correct.innerHTML = "Good Job!! You guessed correctly!";
        }
        count++;
    }
}

function showNumber() {
    var numberDisplay = document.getElementById("randomNumber")
    numberDisplay.innerHTML = gameAnswer;

}