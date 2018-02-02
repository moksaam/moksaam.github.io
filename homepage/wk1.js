
var btn = document.querySelector("#doneBtn");
var txt = document.querySelector("#congrats");
var sum;
if(btn) {
    btn.addEventListener('click', congrats);
}

function add(x, y) {
    sum = x + y;
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
