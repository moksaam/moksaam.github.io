// Creating the code to move our box left to right
// Creating variable for out div box
var moveBox = document.getElementsByClassName("left_to_right_box");

document.getElementsByClassName("playBtn").onclick = function moveBox() {
    if (this.value === 'Play') {
        this.value = 'Pause';
        moveBox.classList.add('moveLeft');
    } else {
        this.value = 'Play';
        var computedStyle = window.getComputedStyle(moveBox),
            leftSideMargin = computedStyle.getPropertyValue('margin-left');
        moveBox.style.leftSideMargin = leftSideMargin;
        moveBox.classList.remove('moveLeft');
    }
}