var request = new XMLHttpRequest();
request.overrideMimeType("application/json");
request.open('GET', 'jsonex.json', true);
request.onload = function () {
    var my_races_JSON_obj = JSON.parse(request.responseText);
    alert(my_races_JSON_obj.result[0]);
    console.log(my_races_JSON_obj);
    displayTraits(my_races_JSON_obj);
}

request.send();



document.getElementById("parseTraitsBtn").onclick = function displayTraits(my_races_JSON_obj) {
    var i, j, x = 0;
    var jsonOutput = document.getElementById("output_json");

    for (i in my_races_JSON_obj.races) {
        x += "<h2>" + my_races_JSON_obj.races[i].name + "</h2>";
        for (j in my_races_JSON_obj.races[i].desc) {
            x += my_races_JSON_obj.races[i].desc[j] + "";
        }
    }
    jsonOutput.value = x;
}

document.getElementById("parseJsonBtn").onclick = function parseJsonFile(my_races_JSON_obj) {
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
