//Setup variables
var storageBtn = document.getElementById("localStorageBtn");
var retrieveBtn = document.getElementById("retrieveLocalStorageBtn");
var display = document.getElementById("display");
var input = document.getElementById("localStorageIn");
var pushArr = document.getElementById("pushArrBtn");
var arrStrgBtn = document.getElementById("localStorageArrBtn");
var retArrBtn = document.getElementById("retrieveLocalStorageArrBtn");
var arrDisplay = document.getElementById("displayArray");
var arrInput = document.getElementById("localStorageArrIn");
var inputArray = [];

storageBtn.onclick = function addToStorage() {
    //Store Locally
    localStorage.setItem("demoInput", input.value);
    input.value = '';
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

pushArr.onclick = function addToArray() {
    //Add to array
    if (arrInput.value == null) {
        console.log("empty input");
        return;
    } else if (arrInput.value == '') {
        alert("Please enter a value!");
    } else {
        inputArray.push(arrInput.value);
        console.log("Added " + arrInput.value + " to array.");
    }
    arrInput.value = '';
    alert(inputArray.length);
}

arrStrgBtn.onlcick = function addToArrayStorage() {
    //Store Locally
    var stringArr = JSON.stringify(arrInput.value);
    
    localStorage.setItem("demoArrayInput", stringArr);
}

retArrBtn.onclick = function retriveFromArrayStorage() {
    //Check for Browser Support
    if (localStorage) {
        // Retrieve
        var output = JSON.parse(localStorage.getItem("demoArrayInput") || "[]");
        alert(output.length);
        arrDisplay.innerHTML = output;
    } else {
        arrDisplay.innerHTML = "Sorry, your browser does not support Web Storage...";
    }
}