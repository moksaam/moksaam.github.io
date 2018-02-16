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

    for (i; i < arr.length; i++) {
        x += "<h3>" + arr.races[i] + "</h3>";        
    }
    jsonOutput.value = x;
}

document.getElementById("parseJsonBtn").onclick = function parseJsonFile(arr) {
    var i, j, x = 0;
    var jsonOutput = document.getElementById("output_json");

    for (i in arr.races) {
        x += "<h2>" + arr.races[i].name + "</h2>";
        for (j in arr.races[i].desc) {
            x += arr.traits[i].desc[j] + "";
        }
    }
    jsonOutput.value = x;
}
