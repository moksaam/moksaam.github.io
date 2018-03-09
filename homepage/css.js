var div = document.getElementById("exampleCSS3");

div.onclick = function animateDiv() {
    div.style.animation = "changes 5s 3";
}

div.addEventListener("animationstart", startFunction);
div.addEventListener("animationiteration", rptFunction);
div.addEventListener("animationend", stopFunction);

function startFunction() {
    this.style.height = "400px";
    this.style.width = "400px";
    this.style.backgroundColor = "fuscia";
}

function rptFunction() {
    this.style.height = "20px";
    this.style.width = "20px";
    this.style.backgroundColor = "violet";
}

function stopFunction() {
    this.style.height = "200px";
    this.style.width = "200px";
    this.style.backgroundColor = "steelblue";
}