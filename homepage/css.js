var div = document.getElementById("example3");

function animateDiv() {
    div.style.animation = "changes 5s 3";
}

div.addEventListener("animationStart", startFunction);
div.addEventListener("animationRepeat", rptFunction);
div.addEventListener("animationEnd", stopFunction);

function startFunction() {
    this.style.height = 400;
    this.style.width = 400;
}

function rptFunction() {
    this.style.height = "20px";
    this.style.width = "20px";
    this.style.backgroundColor = "violet";
}

function stopFunction() {
    this.style.height = 200;
    this.style.width = 200;
}