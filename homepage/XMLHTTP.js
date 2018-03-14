// This function will use XMLHTTP to get a file from the web
var xmlhttp = new XMLHttpRequest();
if ('withCredentials' in xmlhttp) {
    xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var obj = JSON.parse(this.responseText);
            parseJSON(obj);
        }
    };
    xmlhttp.open("GET", "https://pokeapi.co/api/v2/pokemon/26", true);
    xmlhttp.send();
}

function parseJSON(obj) {
    var display = document.getElementById("display");
    var x;
    for (var i = 0; i < obj.length; i++) {
       x += "<div class='JSONexampleContainer'>";
       x += "<h3>Name: " + obj.forms[i].name + "</h3>";
       x += "<h3>Height: " + obj.forms[i].height + "</h3>";
       x += "<h3>Weight: " + obj.forms[i].weight + "</h3>";
    }
    x += "</div>";

    display.innerHTML = x;
    console.log(obj);
}