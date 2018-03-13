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
var superHeroObj = {};
var addHeroBtn = document.getElementById("heroBtn");
var showHeroBtn = document.getElementById("showHeroBtn");

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
        console.log("Please enter a value!");
    } else {
        inputArray.push(arrInput.value);
        console.log("Added " + arrInput.value + " to array.");
    }
    addToArrayStorage(inputArray);
    arrInput.value = '';
    console.log(inputArray.length);
    return inputArray;
}

function addToArrayStorage(inputArray) {
    //Store Locally
    var stringArr = JSON.stringify(inputArray);
    console.log(inputArray.length);
    localStorage.setItem("demoArrayInput", stringArr);
}

retArrBtn.onclick = function retriveFromArrayStorage() {
    //Check for Browser Support
    if (localStorage) {
        // Retrieve
        var output = "Your array includes the following: " + JSON.parse(localStorage.getItem("demoArrayInput"));
        console.log(output.length);
        arrDisplay.innerHTML = output;
    } else {
        arrDisplay.innerHTML = "Sorry, your browser does not support Web Storage...";
    }
}

addHeroBtn.onclick = function superHero() {
    superHeroObj.regName = document.getElementById("regName").value;
    superHeroObj.supName = document.getElementById("superName").value;
    superHeroObj.suPower = document.getElementById("superPower").value;

    var jsonString = JSON.stringify(superHeroObj);

    if (typeof(Storage) !== "undefined") {
        if (localStorage.setItem("superHeroObj", jsonString));
        console.log(superHeroObj);
    } else {
        displayObj.innerHTML = "Sorry, your browser does not support Web Storage...";
    }

    document.getElementById("regName").value = '';
    document.getElementById("superName").value = '';
    document.getElementById("superPower").value = '';
}

showHeroBtn.onclick = function showHero() {
    if (localStorage) {
        // Retrieve
        var output = "Here is the Super Hero obj: " + JSON.parse(localStorage.getItem("superHeroObj"));
        console.log(output.length);
        displayObj.innerHTML = output;
    } else {
        displayObj.innerHTML = "Sorry, your browser does not support Web Storage...";
    }
}