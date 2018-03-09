// This function will change the background of all the divs on this page.
document.getElementById("changeAllDivsColor").onclick = function colorChangeDivs() {
    var divs = document.querySelectorAll("div");
    for (var i = 0; i < divs.length; i++) {
        divs[i].style.backgroundColor = "violet";
    }
}

// This function will change the font of all P elements
document.getElementById("changePFont").onclick = function changePFont() {
    var p_elem = document.querySelectorAll("p");
    for (var i = 0; i < p_elem.length; i++) {
        p_elem[i].style.fontSize = "24px";
        p_elem[i].style.fontFamily = "Verdana";
    }
}