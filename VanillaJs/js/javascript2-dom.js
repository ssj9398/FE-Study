
//Ex11 - 연습문제1 - 선택된 레코드 삭제하기 : event target
window.addEventListener("load", function () {

    var section = document.querySelector("#section11");
    var delButton = section.querySelectorAll(".del-button2");
    for (var i = 0; i < delButton.length; i++) {
        delButton[i].onclick = function (e) {
            var tr = e.target.parentElement.parentElement;
            tr.remove();
        }
    }

});

//Ex1 : 선택된 이미지 보여주기 : event target

window.addEventListener("load", () => {
    var section = document.querySelector("#section1");
    var imgs = section.querySelectorAll(".img");
    var currentImg = section.querySelector(".current-img");

    for (var i = 0; i < imgs.length; i++) {
        imgs[i].onclick = function (e) {
            currentImg.src = e.target.src;
        }
    }

    /* imgs[0].onclick = function (e) {
        currentImg.src = e.target.src;
    }

    imgs[1].onclick = function (e) {
        currentImg.src = e.target.src;
    }

    imgs[2].onclick = function (e) {
        currentImg.src = e.target.src;
    } */


});