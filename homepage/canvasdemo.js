var canvas = document.getElementById("myCanvas");
var context = canvas.getContext("2d");
context.moveTo(0,0);
context.lineTo(400,200);
context.stroke();

document.getElementById("clearCanvasBtn").addEventListener("click", function clearCanvas() {
    context.clearRect(0, 0, canvas.width, canvas.height);
});

document.getElementById("drawCirclesBtn").addEventListener("click", function drawCircle() {
    var canvas = document.getElementById("myCanvas");
    var context = canvas.getContext("2d");
    
    context.beginPath();
    context.arc(Math.random() * 400, Math.random() * 200, Math.random() * 100 + 1, 0, 2*Math.PI, false);
    context.stroke();
});

