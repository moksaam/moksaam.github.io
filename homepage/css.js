var div = document.getElementById("example3");

div.onclick = function animateDiv() {
    div.style.animation = "changes 5s 3";
}

div.addEventListener("animationStart", startFunction);
div.addEventListener("animationRepeat", rptFunction);
div.addEventListener("animationEnd", stopFunction);

function startFunction() {
    this.style.height = "400px";
    this.style.width = "400px";
}

function rptFunction() {
    this.style.height = "20px";
    this.style.width = "20px";
    this.style.backgroundColor = "violet";
}

function stopFunction() {
    this.style.height = "200px";
    this.style.width = "200px";
}