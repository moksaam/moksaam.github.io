
var x = document.getElementById('num1').value;
var y = document.getElementById('num2').value;

var btn = document.querySelector("#sumBtton");
var txt = document.querySelector("#congrats");

btn.addEventListener('click', add);

function add(x, y) {
    var sum = x + y;
    if (btn.value == "Click to add!") {
        btn.value = sum;
        txt.value = "Congratulations, you know maths!";
    }
    else {
        btn.value = "Click to add!";
        txt.value = "Can you maths?"
    }
    
}