var request = new XMLHttpRequest();
request.open("GET", jsonex.json, false);
request.send(null);
var my_races_JSON_obj = JSON.parse(request.responseText);
alert(my_races_JSON_obj.result[0]);
console.log(my_races_JSON_obj);

document.getElementById("parseTraitsBtn").onclick = function displayTraits() {
    var i, j, x = 0;
    var jsonOutput = document.getElementById("output_json");

    for (i in my_races_JSON_obj.traits) {
        x += "<h2>" + my_races_JSON_obj.traits[i].name + "</h2>";
        for (j in my_races_JSON_obj.traits[i].desc) {
            x += my_races_JSON_obj.traits[i].desc[j] + "";
        }
    }
    jsonOutput.value = x;
}

document.getElementById("parseJsonBtn").onclick = function parseJsonFile() {
    var i, j, x = 0;
    var jsonOutput = document.getElementById("output_json");

    for (i in my_races_JSON_obj.races) {
        x += "<h2>" + my_races_JSON_obj.races[i].name + "</h2>";
        for (j in my_races_JSON_obj.races[i].desc) {
            x += my_races_JSON_obj.traits[i].desc[j] + "";
        }
    }
    jsonOutput.value = x;
}
