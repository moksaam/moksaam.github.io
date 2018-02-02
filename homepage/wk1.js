function add() {
    
    var x = document.getElementById('num1').value;
    var y = document.getElementById('num2').value;
    var sum;

    sum = parseInt(x) + parseInt(y);

    document.getElementById("sum").innerHTML = sum;
}

var btn = document.getElementById("doneBtn");
var txt = document.getElementById("congrats");

if(btn) {
    btn.addEventListener('click', congrats);
}

function congrats() {

    if (btn.value == "Click Here") {
        btn.value = "Clicked!";
        txt.textContent = "Congratulations, you know maths!";
    }
    else {
        btn.value = "Click Here";
        txt.textContent = "Can you maths?"
    }
}
