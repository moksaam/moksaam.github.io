// Creating the code to move our box left to right
// Creating variable for out div box
var moveBox = document.getElementsByClassName("left_to_right_box")[0];

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