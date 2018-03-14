// Creating our functions to alter the DOM
document.getElementById("createElementBtn").onclick = function CreateElement() {
    // Creating a new DIV
    var newDiv = document.createElement("div");
    newDiv.className = "childDiv";
    document.getElementById("divContainer").appendChild(newDiv);
}