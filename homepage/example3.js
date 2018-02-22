window.onload = function () {
    document.getElementById("demo_onClick").onclick = function () {
        var change_demo = document.getElementById("demo_onClick");
        change_demo.innerHTML = "Congratulations, you have deafeated the first challenge!";
    }
}