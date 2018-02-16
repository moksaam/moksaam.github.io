var numberArray = [];
var arrayInput = document.getElementById("input_array");

document.getElementById("pushArrayBtn").onclick = function addToArray() {
    
    if (arrayInput.value == null) {
        console.log("empty input");
        return;
    } else if (arrayInput.value == '') {
        alert("Please enter a value!");
    } else {
        numberArray.push(arrayInput.value);
        console.log("Added " + arrayInput.value + " to array.");
    }
    
    arrayInput.value = '';
    return numberArray;
}

document.getElementById("displayArrayBtn").onclick = function displayArray() {
    if (numberArray == 0) {
        alert("The array is empty");
    }
    //console.log(numberArray);
    var output = document.getElementById("output_array");
    var count = 0;
    output.value = "Your array contains the following numbers:"
    for (count; count < numberArray.length; count++) {
        output.value = output.value + " " + numberArray[count];        
    }
}

document.getElementById("popArrayBtn").onlcick = function popOffArray() {
    if (arrayInput.value == null) {
        console.log("empty input");
        return;
    } else {
        var count = numberArray.length;
        for (count; count > 0; count--) {
            numberArray.pop();
            console.log("Removed value from array");
        }
    }
}

document.getElementById("resetFieldBtn").onclick = function resetArray() {
    var output = document.getElementById("output_array");
    output.value = '';
    numberArray.length = 0;

    console.log(numberArray);
}