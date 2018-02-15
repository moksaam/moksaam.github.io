var numberArray = [];
var arrayInput = document.getElementById("input_array");

document.getElementById("arrayBtn").onclick = function addToArray() {
    
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

document.getElementById("displayArray").onclick = function displayArray() {
    if (numberArray == 0) {
        alert("The array is empty");
    }
    console.log(numberArray);
    var output = document.getElementById("output_array");
    var count = 0;
    output.value = "Your array contains the following numbers:"
    for (count; count < numberArray.length; count++) {
        output.value = output.value + " " + numberArray[count];        
    }
}

document.getElementById("resetField").onclick = function resetArray() {
    var output = document.getElementById("output_array");
    output.value = '';
    numberArray.length = 0;

    console.log(numberArray);
}