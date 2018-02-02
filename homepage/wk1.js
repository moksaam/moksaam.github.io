
var x = document.getElementById('num1').value;
var y = document.getElementById('num2').value;

var btn = document.querySelector("#sumBtton");
var txt = document.querySelector("#congrats");

btn.addEventListener('click', congrats);

function add(x, y) {
    var sum;
    if (x == null || y == null) {
        txt.value = "Null values detected!";
    } else {        
        sum = x + y;
    }
    return sum;  
}

function congrats() {
    if (btn.value == "Click Here") {
        txt.value = "Congratulations, you know maths!";
    }
    else {
        btn.value = "Click Here";
        txt.value = "Can you maths?"
    }
}
