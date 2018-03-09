var div = document.getElementById("transition3");

div.onmouseover = function transitionDiv() {
    div.style.transition = "width 4s, height 4s, font-size 5s";
    div.setAttribute("style", "height: 20px");
    div.setAttribute("style", "width 20px");
    div.setAttribute("style", "font-size 8px");
}

