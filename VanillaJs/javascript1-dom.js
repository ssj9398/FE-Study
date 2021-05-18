
//Ex3 : Selectors API LEVEL1
window.addEventListener("load", function () {
    var section3 = document.getElementById("section3");
    var LeftValue = section3.querySelector(".left-value3");
    var RightValue = section3.querySelector("input[name='right-value3']");
    var Sum = section3.querySelector(".sum3");

    button3.onclick = function () {
        var l = parseInt(LeftValue.value);
        var r = parseInt(RightValue.value);
        Sum.value = l + r;
    }
});

//Ex2 : 엘리먼트 선택 방법 개선하기
window.addEventListener("load", function () {
    var section2 = document.getElementById("section2");
    var LeftValue = section2.getElementsByClassName("left-value2")[0];
    var RightValue = section2.getElementsByClassName("right-value2")[0];
    var Sum = section2.getElementsByClassName("sum2")[0];

    /* var section2 = document.getElementById("section2");
    var inputs = section2.getElementsByTagName("input");

    var LeftValue = inputs[0];
    var RightValue = inputs[1];
    var Sum = inputs[3]; */
    button2.onclick = function () {
        var l = parseInt(LeftValue.value);
        var r = parseInt(RightValue.value);
        Sum.value = l + r;
    }
});


//Ex1 : Ex1 : 계산기 프로그램
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