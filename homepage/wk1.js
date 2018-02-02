
var btn = document.querySelector("#doneBtn");
var txt = document.querySelector("#congrats");
var sum;

btn.addEventListener('click', congrats);

function add(x, y) {
    sum = x + y;
    return sum;  
}

document.getElementById("sum").innerHTML = sum;

function congrats() {
    if (btn.value == "Click Here") {
        txt.value = "Congratulations, you know maths!";
    }
    else {
        btn.value = "Click Here";
        txt.value = "Can you maths?"
    }
}
