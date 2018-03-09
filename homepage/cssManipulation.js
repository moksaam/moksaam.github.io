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

// This function will change the color and location of the mani1 div
document.getElementById("changeMani1Div").onclick = function changeMani1() {
    var mani1 = document.getElementById("mani1");
    mani1.style.backgroundColor = "blue";
    mani1.style.position = "absolute";
    mani1.style.top = "300px";
    mani1.style.left = "300px";
}

// This function will hide the mani2 div
document.getElementById("hideDiv").onclick = function hideDiv() {
    var mani2 = document.getElementById("mani2");
    mani2.style.visibility = "hidden";
}

// This function will show mani2 div
document.getElementById("showDiv").onclick = function showDiv() {
    var mani2 = document.getElementById("mani2");
    mani2.style.visibility = "visible";
}

// This function will change the size and color of mani3
document.getElementById("resizeDiv").onclick = function resizeDiv() {
    var mani3 = document.getElementById("mani3");
    mani3.style.height = "500px";
    mani3.style.width = "500px";
    mani3.style.backgroundColor = "silver";
}