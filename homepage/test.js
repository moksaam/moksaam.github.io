
var time = 0;
var running = 0;

function startTimer() {
    if (running == 0) {
        running = 1;
        incrementTimer();
    }
}

function stopTimer() {
    if (running == 1){
        running = 0;
    }
}

function incrementTimer() {
    if(running == 1) {
        setTimeout(function () {
            time++;
            var mins = Math.floor(time / 10 / 60);
            var secs = Math.floor(time / 10);
            var tenthSec = time % 10;

            if(mins < 10) {
                mins = "0" + mins;
            }
            if(secs < 10) {
                secs = "0" + secs;
            }
            document.getElementById("test").innerHTML = mins + ":" + secs + ":" + "0" + tenthSec;
            incrementTimer();
        }, 100);
    }
}

function resetTimer() {
    running = 0;
    time = 0;
    document.getElementById("test").innerHTML = "00:00:00";
}

window.onload = function () {
document.getElementById("startBtn").onclick = startTimer();
document.getElementById("stopBtn").onclick = stopTimer();
document.getElementById("resetBtn").onclick = resetTimer();
}