var canvas = document.getElementById("myCanvas");
var context = canvas.getContext("2d");
context.moveTo(0,0);
context.lineTo(400,200);
context.stroke();

document.body.addEventListener("click", function changeToCircle() {
    var canvas = document.getElementById("myCanvas");
    var context = canvas.getContext("2d");
    context.beginPath();
    context.arc(50, 50, 100, 0, 2*Math.PI);
    context.stroke();
});

