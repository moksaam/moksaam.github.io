window.onload = function () {
    document.getElementById("demo_onClick").onclick = function () {
        console.log("demo_onClick clicked!");
        var change_demo = document.getElementById("demo_onClick");
        change_demo.innerHTML = "Congratulations, you have deafeated the first challenge! Now click and drag me down";
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

        var data = event.dataTransfer.getData("text");
        event.target.appendChild(document.getElementById(data));
        document.getElementById("drag_txt").innerHTML = "Dragging has ended. Drop successful.";
        event.dataTransfer.clearData();
        
    });
    
    document.getElementById("addColorDivBtn").onclick = function ()  {
        console.log("addColorDivBtn clicked!");
        var maxBoxes = 40;
        var count = 0;

        while (count < maxBoxes) {
            
            if (count < maxBoxes) {
                console.log("Created color divs");
                var childDiv = document.createElement('div');
                childDiv.setAttribute('class', 'colordemo');
                document.getElementById("parentDiv").appendChild(childDiv); 
                count++;
            } 
            console.log("Max divs created.");
            document.getElementById("addColorDivBtn").disabled = true;
        }
       
        changeColor();
    }

    function random(number) {
        return Math.floor(Math.random()*number);
    }

    function changeBG () {
        var randomColor = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')';
        return randomColor;
    }

    function changeColor () {
        var rndColorBtn = document.querySelectorAll("div.colordemo");

        for (var i = 0; i < rndColorBtn.length; i++) {
            rndColorBtn[i].onmouseover = function (event) {
                event.target.style.backgroundColor = changeBG();
            }
        }
    }

    document.getElementById("colorCleanup").onclick = function () {
        var childDiv = document.getElementById("parentDiv");
        var maxBoxes = 0;
        var count = 40;

        while (count > maxBoxes) {
            if (childDiv.childNodes.length > 0) {
                console.log("removed childDiv");
               childDiv.removeChild(childDiv.childNodes[childDiv.childNodes.length - 1]);
               count--;
            }
        }
        document.getElementById("addColorDivBtn").disabled = false;        
    }
}
