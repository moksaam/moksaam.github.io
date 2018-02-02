
var btn = document.querySelector("#doneBtn");
var txt = document.querySelector("#congrats");
var sum;
if(btn) {
    btn.addEventListener('click', congrats);
}

function add() {
    var x = document.getElementById('num1').value;
    var y = document.getElementById('num2').value;

    sum = parseInt(x) + parseInt(y);
    return sum;  
}

if(sum) {
    document.getElementById("sum").innerHTML = sum;
}

function congrats() {
    if (btn.value == "Click Here") {
        txt.textContent = "Congratulations, you know maths!";
    }
    else {
        btn.value = "Click Here";
        txt.textContent = "Can you maths?"
    }
}
