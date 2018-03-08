var storageBtn = document.getElementById("localStorageBtn");
var retrieveBtn = document.getElementById("retrieveLocalStorageBtn");
var display = document.getElementById("display").value;

storageBtn.onclick = function addToStorage() {
    //Store Locally
    localStorage.setItem("demo", document.getElementById("localStorageIn").value);
}

retrieveBtn.onclick = function retriveFromStorage() {
    //Check for Browser Support
    if (typeof(Storage) !== "undefined") {
        // Retrieve
        display = localStorage.getItem("demo");
    } else {
        display = "Sorry, your browser does not support Web Storage...";
    }
}