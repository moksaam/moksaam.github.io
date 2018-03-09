var div = document.getElementById("transition3");

div.onmouseover = function transitionDiv() {
    div.style.transition = "width 4s, height 4s, font-size 5s";
    div.style.transform = "height 20px, width 20px, font-size 8px";
}

