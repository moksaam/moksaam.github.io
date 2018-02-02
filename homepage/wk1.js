function add() {
    
    var x = document.getElementById('num1').value;
    var y = document.getElementById('num2').value;
    var sum;

    if (x == null && y == null) {
        sum = 0;
    } else if (x == null) {
        sum = parseInt(y);
    } else if (y == null) {
        sum = parseInt(x);
    } else {
        sum = parseInt(x) + parseInt(y);
    }  

    document.getElementById("sum").innerHTML = sum;
}

var btn = document.getElementById("doneBtn");
var txt = document.getElementById("congrats");

if(btn) {
    btn.addEventListener('click', congrats);
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
