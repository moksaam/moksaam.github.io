// This function will change the background of all the divs on this page.
document.getElementById("changeAllDivsColor").onclick = function colorChangeDivs() {
    var divs = document.querySelectorAll("div");
    for (var i = 0; i < divs.length; i++)
    divs[i].style.backgroundColor = "violet";
}