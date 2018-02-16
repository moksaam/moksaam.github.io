var request = new XMLHttpRequest();
request.overrideMimeType("application/json");
request.open('GET', 'jsonex.json', true);
request.onload = function () {
    var my_races_JSON_obj = JSON.parse(request.responseText);
    
    console.log(my_races_JSON_obj);
    //displayJson(my_races_JSON_obj);
}

request.send();



document.getElementById("parseTraitsBtn").onclick = function displayJson(arr) {
    var i, j, x = 0;
    var jsonOutput = document.getElementById("output_json");

    console.log("displayJson button pushed");
    for (i; i < arr.length; i++) {
        jsonOutput.value += "<h3>" + arr.races[i] + "</h3>"; 
        for (j; j < arr.races[i].length; j++) {
            jsonOutput.value += "<p>" + arr.races[i][j] + "</p>"
        }       
    }
    
}

document.getElementById("parseJsonBtn").onclick = function parseJsonFile(arr) {
    var i, j, x = 0;
    var jsonOutput = document.getElementById("output_json");

    console.log("parseJsonFile button pushed");
    for (i in arr.races) {
        x += "<h2>" + arr.races[i].name + "</h2>";
        
    }
    jsonOutput.value = x;
}
