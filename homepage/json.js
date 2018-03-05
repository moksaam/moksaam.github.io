var request = new XMLHttpRequest();
request.overrideMimeType("application/json");
request.open('GET', 'jsonex.json', true);
request.onload = function parseJson() {
    var my_races_JSON_obj = JSON.parse(request.responseText);
    document.getElementById("parseTraitsBtn").onclick = function displayJson() {
        var i, j, k, l, x = 0;
        var jsonOutput = document.getElementById("output_json");
    
        console.log("displayJson button pushed");
        
        for (i in my_races_JSON_obj.races) {
            for (j in my_races_JSON_obj.races[i]) {                                      
                    x += "<p>" + my_races_JSON_obj.races[i] + "</p>";
            } 
        }
        jsonOutput.innerHTML = x;
    }

    console.log(my_races_JSON_obj);
    return my_races_JSON_obj;
}

request.send();


var req = new XMLHttpRequest();
req.overrideMimeType("application/json");
req.open('GET', 'jsonex.json', true);
req.onload = function parseTraits() {
    var my_races_JSON_obj = JSON.parse(req.responseText);
    document.getElementById("parseJsonBtn").onclick = function parseJsonFile(my_races_JSON_obj) {
        var i, j, x = 0;
        var jsonOutput = document.getElementById("output_json");

        console.log("parseJsonFile button pushed");
        for (i in my_races_JSON_obj.races) {
            x += "<h3>" + my_races_JSON_obj.races[i] + "</h3>";
            for (j in my_races_JSON_obj.races[i]) {
                x += "<p>" + my_races_JSON_obj.races[0][j] + "</p>";
            }       
        }
        jsonOutput.innerHTML = x;
    }
}

req.send();

document.getElementById("resetFieldBtn").onclick = function resetField() {
    var field = document.getElementById("output_json");
    field.innerHTML = '';
}