window.onload = function () {
    document.getElementById("demo_onClick").onclick = function () {
        console.log("demo_onClick clicked!");
        var change_demo = document.getElementById("demo_onClick");
        change_demo.innerHTML = "Congratulations, you have deafeated the first challenge!";
    }

    document.getElementById("demo_ondblClick").ondblclick = function () {
        console.log("demo_ondblClick clicked!");
        var change_demo = document.getElementById("demo_ondblClick");
        change_demo.innerHTML = "Amazing. You have double-clicked your way to victory!";
    }

    document.addEventListener("dragstart", function(event) {
        console.log("dragstart");
        event.dataTransfer.setData("text/plain", event.target.id);
    });

    document.addEventListener("drag", function(event) {
        document.getElementById("drag_txt").innerHTML = "Dragging has been engaged!";
    });

    document.addEventListener("dragover", function(event) {
        console.log("dragover");
        event.preventDefault();
    });

    document.addEventListener("drop", function(event) {
        console.log("Drop!");
        event.preventDefault();
        if (event.target.className == "dragdemo") {
            var data = event.dataTransfer.getData("text");
            event.target.appendChild(document.getElementById(data));
            document.getElementById("drag_txt").innerHTML = "Dragging has ended. Drop successful.";
            event.dataTransfer.clearData();
        }
    });
}
