window.onload = function () {
    var btnPrint = document.getElementById("btn-print");
    btnPrint.onclick = function () {

        var x = prompt("x입력", 0);
        var y = prompt("y입력", 0);

        x = parseInt(x);
        y = parseInt(y);

        btnPrint.value = x + y;
        span1.innerText = btnPrint.value;
    }

}