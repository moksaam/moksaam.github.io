var request = new XMLHttpRequest();
request.overrideMimeType("application/json");
request.open('GET', 'jsonex.json', true);
request.onload = function () {
    var my_races_JSON_obj = JSON.parse(request.responseText);
    
    console.log(my_races_JSON_obj);
    //displayJson(my_races_JSON_obj);
}

request.send();



document.getElementById("parseTraitsBtn").onclick = function displayJson() {
    var i, j, x = 0;
    var jsonOutput = document.getElementById("output_json");

    console.log("displayJson button pushed");
    for (i; i < my_races_JSON_obj.length; i++) {
        jsonOutput.value += "<h3>" + my_races_JSON_obj.races[i] + "</h3>"; 
        for (j; j < my_races_JSON_obj.races[i].length; j++) {
            jsonOutput.value += "<p>" + my_races_JSON_obj.races[i][j] + "</p>"
        }       
    }
    
}

document.getElementById("parseJsonBtn").onclick = function parseJsonFile() {
    var i, j, x = 0;
    var jsonOutput = document.getElementById("output_json");

    console.log("parseJsonFile button pushed");
    for (i in my_races_JSON_obj.races) {
        x += "<h2>" + my_races_JSON_obj.races[i].name + "</h2>";
        
    }
    jsonOutput.value = x;
}
