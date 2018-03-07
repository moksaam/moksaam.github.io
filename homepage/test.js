var time = 0;
var running = 0;

function startTimer() {
    running = 1;
    increment();
}

function stopTimer() {
    running = 0;
}

function incrementTimer() {
    if(running == 1) {
        setTimeout(function () {
            time++;

            document.getElementById("display").value = time;
        increment();
        }, 1000);
    }
}

function resetTimer() {
    running = 0;
    time = 0;
}
