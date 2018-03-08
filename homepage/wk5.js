//Setup variables
var storageBtn = document.getElementById("localStorageBtn");
var retrieveBtn = document.getElementById("retrieveLocalStorageBtn");
var display = document.getElementById("display");
var input = document.getElementById("localStorageIn");
var arrStrgBtn = document.getElementById("localStorageArrBtn");
var retArrBtn = document.getElementById("retrieveLocalStorageArrBtn");
var arrDisplay = document.getElementById("displayArray");
var arrInput = document.getElementById("demoArrayInput");
var inputArray = [];

storageBtn.onclick = function addToStorage() {
    //Store Locally
    localStorage.setItem("demoInput", input.value);
}

retrieveBtn.onclick = function retriveFromStorage() {
    //Check for Browser Support
    if (localStorage) {
        // Retrieve
        display.innerHTML = localStorage.getItem("demoInput");
    } else {
        display.innerHTML = "Sorry, your browser does not support Web Storage...";
    }
}

arrStrgBtn.onclick = function addToStorage() {
    //Add to array
    inputArray.push(arrInput.value);
    console.log("Added " + arrInput.value + " to array.");
    //Store Locally
    localStorage.setItem("demoArrayInput", JSON.stringify(arrInput.value));
}

retArrBtn.onclick = function retriveFromStorage() {
    //Check for Browser Support
    if (localStorage) {
        // Retrieve
        arrDisplay.innerHTML = localStorage.getItem("demoArrayInput");
    } else {
        arrDisplay.innerHTML = "Sorry, your browser does not support Web Storage...";
    }
}