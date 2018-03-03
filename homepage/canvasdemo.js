var canvas = document.getElementById("myCanvas");
var context = canvas.getContext("2d");
context.moveTo(0,0);
context.lineTo(400,200);
context.stroke();

document.body.addEventListener("click", function changeToCircle() {
    var canvas = document.getElementById("myCanvas");
    var context = canvas.getContext("2d");
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.beginPath();
    context.arc(Math.random() * 100, Math.random() * 100, Math.random() * 100 + 1, 0, 2*Math.PI, false);
    context.stroke();
});

