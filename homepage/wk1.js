


var btn = document.querySelector("#sumBtton");
var txt = document.querySelector("#congrats");

btn.addEventListener('click', add);

function add() {
    var x = document.getElementById('num1').value;
    var y = document.getElementById('num2').value;
    var sum;
    if (x == null || y == null) {
        txt.value = "Null values detected!";
    } else {        
        sum = x + y;
    }

    if (btn.value == "Click to add!") {
        btn.value = sum;
        txt.value = "Congratulations, you know maths!";
    }
    else {
        btn.value = "Click to add!";
        txt.value = "Can you maths?"
    }
    
}