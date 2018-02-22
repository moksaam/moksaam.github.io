window.onload = function () {
    document.getElementById("demo_onClick").onclick = function () {
        var change_demo = document.getElementById("demo_onClick");
        change_demo.innerHTML = "Congratulations, you have deafeated the first challenge!";
    }

    document.getElementById("demo_ondblClick").ondblclick = function () {
        var change_demo = document.getElementById("demo_ondblClick");
        change_demo.innerHTML = "Amazing. You have double-clicked your way to victory!";
    }
}
