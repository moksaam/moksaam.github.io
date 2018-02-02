
var btn = document.querySelector("#doneBtn");
var txt = document.querySelector("#congrats");

if(btn) {
    btn.addEventListener('click', congrats);
}

function add() {
    var x = document.getElementById('num1').value;
    var y = document.getElementById('num2').value;
    var sum;

    sum = parseInt(x) + parseInt(y);

    document.getElementById("sum").innerHTML = x, " + ", y, " = ", sum;
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
