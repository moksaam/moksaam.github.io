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
    //console.log(numberArray.join());
    var output = document.getElementById("output_array");
    var count = 0;
    output.value = "Your array contains the following numbers:"
    for (count; count < numberArray.length; count++) {
        if (numberArray[numberArray.length - 1]) {
            output.value = output.value + " " + numberArray[count];
        } else {
            output.value = output.value + numberArray[count];            
        }
    }
}