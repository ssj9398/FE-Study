window.addEventListener("load", function () {
    var LeftValue = document.getElementById("left-value");
    var RightValue = document.getElementById("right-value");
    var Sum = document.getElementById("sum");
    button.onclick = function () {
        var l = parseInt(LeftValue.value);
        var r = parseInt(RightValue.value);
        Sum.value = l + r;
    }
});