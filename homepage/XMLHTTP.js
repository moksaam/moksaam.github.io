// This function will use XMLHTTP to get a file from the web
var xmlhttp = new XMLHttpRequest();
if ()'withCredentials' in xmlhttp) {
    xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var obj = JSON.parse(this.responseText);
            parseJSON(obj);
        }
    };
    xmlhttp.open("GET", "http://pokeapi.co/api/v2/pokemon/26", true);
    xmlhttp.send();
}

function parseJSON(obj) {
    var table = "<table>";
    table += "<tr><th>Name</th><th>Weight</th><th></th></tr>"
}