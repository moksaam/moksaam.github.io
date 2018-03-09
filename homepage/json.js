
// Using XMLHttpRequest to get the json file from the server
var request = new XMLHttpRequest();
request.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var my_races_JSON_obj = JSON.parse(request.responseText);
        parseJson(my_races_JSON_obj);
    }
};
request.overrideMimeType("application/json");
request.open('GET', 'jsonex.json');

function parseJson(my_races_JSON_obj) {
    document.getElementById("parseJsonBtn").onclick = function displayJson() {
        var jsonOutput = document.getElementById("output_json");
        var x;
        console.log("displayJson button pushed");
        
        for (races in my_races_JSON_obj.races) {
            x += "<div class='example'>"
            x += "<h2>Name: " + my_races_JSON_obj.races[races].name + "</h2><br>";
            x += "<h3>Ability Scores: </h3><p>" + my_races_JSON_obj.races[races].ability_scores + "</p><br>";
            x += "<h3>Age: </h3><p>" + my_races_JSON_obj[races].age +  "</p><br>";
            x += "<h3>Alignment: </h3><p>" + my_races_JSON_obj[races].alignment + "</p><br>";
            x += "<h3>Size: </h3><p>" + my_races_JSON_obj[races].size + "</p><br>";
            x += "<h3>Speed: </h3><p>" + my_races_JSON_obj[races].speed + "</p><br>";
            x += "<ul><h3>Traits: </h3>"
            for (traits in my_races_JSON_obj[races].traits) {
                x += "<li><h3>" + my_races_JSON_obj[races].traits[traits].tname +  ":</h3><p> " + my_races_JSON_obj[races].traits[traits].tdesc +"</p></li>";
            };            
            x += "</div>";
            /*for (j in my_races_JSON_obj.races[i]) {
                if (my_races_JSON_obj.races[i][0]) {
                    x+= "<br>";
                } else {
                    x += "<p>" + my_races_JSON_obj.races[i][j] + "</p>";
                }
            } */
        }
        document.getElementById("stringifyEx").innerHTML = JSON.stringify(my_races_JSON_obj);
        jsonOutput.innerHTML = x;
    }
    console.log(my_races_JSON_obj);
}

request.send();


var req = new XMLHttpRequest();
req.overrideMimeType("application/json");
req.open('GET', 'jsonex.json', true);
req.onload = function parseTraits() {
    var my_races_JSON_obj = JSON.parse(req.responseText);
    document.getElementById("parseTraitsBtn").onclick = function parseJsonFile(my_races_JSON_obj) {
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