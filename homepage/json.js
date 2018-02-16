var request = new XMLHttpRequest();
request.overrideMimeType("application/json");
request.open('GET', 'jsonex.json', true);
request.onload = function () {
    var my_races_JSON_obj = JSON.parse(request.responseText);
    document.getElementById("parseTraitsBtn").onclick = function displayJson(my_races_JSON_obj) {
        var i, j, x = 0;
        var jsonOutput = document.getElementById("output_json");
    
        console.log("displayJson button pushed");
        for (i in my_races_JSON_obj.races) {
            for (j in my_races_JSON_obj.races[i]) {
                x += "<h3>" + my_races_JSON_obj.races[i][j] + "</h3>";
            }       
        }
        
    }
    console.log(my_races_JSON_obj);
    //displayJson(my_races_JSON_obj);
    return my_races_JSON_obj;
}

request.send();





document.getElementById("parseJsonBtn").onclick = function parseJsonFile(my_races_JSON_obj) {
    var i, j, x = 0;
    var jsonOutput = document.getElementById("output_json");

    console.log("parseJsonFile button pushed");
    for (i in my_races_JSON_obj.races) {
        for (j in my_races_JSON_obj.races[i]) {
            x += "<h3>" + my_races_JSON_obj.races[i][j] + "</h3>";
        }
       
        
    }
    jsonOutput.innerHTML = x;
}
