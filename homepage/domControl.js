// Creating our functions to alter the DOM
document.getElementById("createElementBtn").onclick = function createElement() {
    // Creating a new DIV
    var newDiv = document.createElement("div");
    newDiv.id = "addText";
    newDiv.className = "childDiv";
    document.getElementById("divContainer").appendChild(newDiv);
}

document.getElementById("appendChildBtn").onclick = function appendChild() {
    var filled = 0;
    var newP = document.createElement("P");
    var newText = document.createTextNode("Here is our new p element.");
    newP.appendChild(newText);
    if (filled == 0) {
        document.getElementById("addText").appendChild(newP);
        filled = 1;
    } else {
        alert("The div element is full.");
    }
    
    bodyDiv();
}

function bodyDiv() {    
    // Creating a new DIV
    var newDiv = document.createElement("div");
    newDiv.className = "secondChildDiv";
    document.body.appendChild(newDiv);
}

document.getElementById("insertBeforeBtn").onclick = function insertBefore() {
    var firstDiv = document.createElement("div");
    firstDiv.className = "goldDiv";
    var currentDiv = document.getElementById("divContainer");
    document.body.insertBefore(firstDiv, currentDiv);
}

// Remove Divs
document.getElementById("removeChildBtn").onclick = function removeChild() {
    var deadDiv = document.getElementById("divContainer");
    deadDiv.removeChild(deadDiv.lastElementChild);
}