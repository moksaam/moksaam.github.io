var numberArray = [];
var arrayInput = document.getElementById("input_array");

document.getElementById("arrayBtn").onclick = function addToArray() {
    
    if (arrayInput == null) {
        console.log("empty input");
        return;
    } else {
        numberArray.push(arrayInput.value);
        console.log("Added " + arrayInput.value + " to array.")
        console.log(toString(numberArray));
    }
    console.log(toString(numberArray));
    arrayInput.value = 0;
    return numberArray;
}

document.getElementById("displayArray").onclick = function displayArray(numberArray) {
    if (numberArray == 0) {
        alert("The array is empty");
    }

    var output = document.getElementById("output_array");
    var count = 0;
    for (count; count < numberArray.length; count++) {
        output.value = guess.value + numberArray[count];
    }
}