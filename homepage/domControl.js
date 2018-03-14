// Creating our functions to alter the DOM
document.getElementById("createElementBtn").onclick = function createElement() {
    // Creating a new DIV
    var newDiv = document.createElement("div");
    newDiv.id = "addText";
    newDiv.className = "childDiv";
    document.getElementById("divContainer").appendChild(newDiv);
}

document.getElementById("appendChildBtn").onclick = function appendChild() {
    var newP = document.createElement("P");
    var newText = document.createTextNode("Here is our new p element.");
    newP.appendChild(newText);
    document.getElementById("addText").appendChild(newP);
    bodyDiv();
}

function bodyDiv() {    
    // Creating a new DIV
    var newDiv = document.createElement("div");
    newDiv.className = "secondChildDiv";
    document.body.appendChild(newDiv);
}

document.getElementById("insertBeforeBtn").onclick = function insertBefore() {

}

document.getElementById("removeChildBtn").onclick = function removeChild() {
    var deadDiv = document.getElementById("divContainer");
    deadDiv.removeChild(deadDiv.childNodes[0]);
}