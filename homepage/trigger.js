// Creating the code to move our box left to right
// Creating variable for out div box
var moveBox = document.getElementsByClassName("left_to_right_box")[0],
    sqrToCir = document.getElementsByClassName("square_to_circle")[0];

document.getElementsByClassName("playBtn")[0].onclick = function boxMove() {
    if (this.innerHTML === 'Play') {
        this.innerHTML = 'Pause';
        moveBox.classList.add('moveLeft');
    } else {
        this.innerHTML = 'Play';
        var computedStyle = window.getComputedStyle(moveBox),
            marginLeft = computedStyle.getPropertyValue('margin-left');
        moveBox.style.marginLeft = marginLeft;
        moveBox.classList.remove('moveLeft');
    }
}

document.getElementsByClassName("sqrBtn")[0].onclick = function makeCircle() {
    if (this.innerHTML === 'Start') {
        this.innerHTML = 'Stop';
        sqrToCir.classList.add('circleIt');
    } else {
        this.innerHTML = 'Start';
        var computedStyle = window.getComputedStyle(sqrToCir),
            transform = computedStyle.getPropertyValue('transform');
        sqrToCir.style.transform = transform;
        sqrToCir.classList.remove('circleIt');
    }
}