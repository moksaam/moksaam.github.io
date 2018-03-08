//Setup variables
var storageBtn = document.getElementById("localStorageBtn");
var retrieveBtn = document.getElementById("retrieveLocalStorageBtn");
var display = document.getElementById("display").value;
var input = document.getElementById("localStorageIn").value;

storageBtn.onclick = function addToStorage() {
    //Store Locally
    localStorage.setItem("input", document.getElementById("localStorageIn").value);
}

retrieveBtn.onclick = function retriveFromStorage() {
    //Check for Browser Support
    if (typeof(Storage) !== "undefined") {
        // Retrieve
        display = localStorage.getItem("input");
    } else {
        display = "Sorry, your browser does not support Web Storage...";
    }
}