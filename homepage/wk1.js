
var btn = document.querySelector("#doneBtn");
var txt = document.querySelector("#congrats");

btn.addEventListener('click', congrats);

function add(x, y) {
    return x + y;  
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
