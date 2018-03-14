// This function will simply reset our transformed div
document.getElementById("resetDiv").onclick = function resetDiv() {
    var oldDiv = document.getElementById("scaleY_1.5");
    oldDiv.style.transform = "scaleY(1)";
}