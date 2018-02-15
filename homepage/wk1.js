
    function showMenu() {
        document.getElementById("exampleDropDown").classList.toggle("show");
    }


window.onclick = function(event) {
    if (!event.target.matches('.menuBtn')) {
        var dropdown = document.getElementsByClassName("drpdwncontent");
        var index;
        for (index = 0; index < dropdown.length; index++) {
            var showDropdown = dropdown[index];
            if (showDropdown.classList.contains('show')) {
                showDropdown.classList.remove('show');
            }
        }
    }
}

function add() {
    
    var x = document.getElementById('num1').value;
    var y = document.getElementById('num2').value;
    var sum;

    sum = parseInt(x) + parseInt(y);

    document.getElementById("sum").innerHTML = sum;
}

var gameAnswer = Math.floor((Math.random() * 100) + 1);
var count = 0;
var turns = 7;
var chances = 7;
var chancesLeft = document.getElementById("chances");

window.onload = function () {
    document.getElementById("checkBtn").onclick = function () {
        var userGuess = document.getElementById("guess").value;
        makeGuess(userGuess);
        chances--;
        chancesLeft.innerHTML = "You have " + chances + " chances left."
        count++;
        
        if (count == turns) {
            alert("Game Over! The answer was " + gameAnswer);
            document.getElementById("checkBtn").disabled = true;
        }
    }
}

function makeGuess(userGuess) {
    var guesses = document.getElementById("output");

    if (userGuess == gameAnswer) {
        guesses.value = guesses.value + "\r" + "You got it right! (" + gameAnswer + ")";
    } else if (userGuess < gameAnswer) {
        guesses.value = guesses.value + "\r" + "Higher! (" + userGuess + ")";
    } else {
        guesses.value = guesses.value + "\r" + "Lower! (" + userGuess + ")";
    }
}

function playAgain(yesPlease) {
    var guesses = document.getElementById("output");
    
    if (yesPlease && !confirm('Would you like to play again?')) {
        return;
    }
    var resetGuess = document.getElementById("guess");
    resetGuess.value = '';
    guesses.value = '';
    gameAnswer = Math.floor((Math.random() * 100) + 1);
    //guesses.value = "Game on!! You have 7 chances to guess my number!\n";
    document.getElementById("checkBtn").disabled = false;
    chances = 7;
    chancesLeft.innerHTML = "You have " + chances + " chances.";
    
}

function addToArray() {
    var numberArray = [];
    var arrayInput = document.getElementById("input_array");

    if (arrayInput == null) {
        console.log("empty input");
        return;
    } else {
        numberArray.push(arrayInput.value);
        console.log("Added " + arrayInput.value + " to array.")
    }
    arrayInput.value = 0;
}

function displayArray() {
    if (numberArray == 0) {
        alert("The array is empty");
    }

    var output = document.getElementById("output_array");
    var count = 0;
    for (count; count < numberArray.length; count++) {
        output.value = guess.value + numberArray[count];
    }
}