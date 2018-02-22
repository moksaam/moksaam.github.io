window.onload = function () {
    document.getElementById("demo_onClick").onclick = function () {
        var change_demo = document.getElementById("demo_onClick");
        change_demo.innerHTML = "Congratulations, you have deafeated the first challenge!";
    }

    document.getElementById("demo_ondblClick").ondblclick = function () {
        var change_demo = document.getElementById("demo_ondblClick");
        change_demo.innerHTML = "Amazing. You have double-clicked your way to victory!";
    }

    document.addEventListener("dragstart", function(event) {
        event.dataTransfer.setData("Text", event.target.id);
    });

    document.addEventListener("drag", function(event) {
        document.getElementById("drag_txt").innerHTML = "Dragging has been engaged!";
    });

    document.addEventListener("dragover", function(event) {
        event.preventDefault();
    });

    document.addEventListener("drop", function(event) {
        event.preventDefault();
        if (event.target.className == "dragdemo") {
            var data = event.dataTransfer.getData("Text");
            event.target.appendChild(document.getElementById(data));
            document.getElementById("drag_txt").innerHTML = "Dragging has ended. Drop successful.";
        }
    })
}
