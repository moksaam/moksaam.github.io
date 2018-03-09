// This function will change the background of all the divs on this page.
var divs = document.querySelectorAll("div");

document.getElementById("changeAllDivsColor").onclick = function colorChangeDivs() {
    divs.style.backgroundColor = "violet";
}