
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
        // Loop throught the object and create our HTML page
        for (races in my_races_JSON_obj.races) {
            x += "<div class='JSONexampleContainer'>";
            x += "<h3>Name: " + my_races_JSON_obj.races[races].name + "</h3>";
            x += "<h3>Ability Scores: </h3><p>" + my_races_JSON_obj.races[races].ability_scores + "</p>";
            x += "<h3>Age: </h3><p>" + my_races_JSON_obj.races[races].age +  "</p>";
            x += "<h3>Alignment: </h3><p>" + my_races_JSON_obj.races[races].alignment + "</p>";
            x += "<h3>Size: </h3><p>" + my_races_JSON_obj.races[races].size + "</p>";
            x += "<h3>Speed: </h3><p>" + my_races_JSON_obj.races[races].speed + "</p>";
            x += "<ul class='left_align'><h3>Traits: </h3>"
            for (traits in my_races_JSON_obj.races[races].traits) {
                x += "<li><h4>" + my_races_JSON_obj.races[races].traits[traits].tname +  ":</h4><p> " + my_races_JSON_obj.races[races].traits[traits].tdesc +"</p></li>";
            }; 
            X += "<h3>Languages: </h3><p>" + my_races_JSON_obj.races[races].languages + "</p>"           ;
            x += "</div>";
            
            document.getElementById("stringifyEx").innerHTML = JSON.stringify(my_races_JSON_obj);
            jsonOutput.innerHTML = x;
        }   
    console.log(my_races_JSON_obj);
    }
}
request.send();


document.getElementById("resetFieldBtn").onclick = function resetField() {
    var field = document.getElementById("output_json");
    field.innerHTML = '';
    document.getElementById("stringifyEx").innerHTML = '';
}