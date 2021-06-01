﻿

//Ex2 - 연습문제1 - 선택된 레코드 삭제하기 : event target
window.addEventListener("load", () => {

    var section = document.querySelector("#section4");
    var delButtonList = section.querySelector(".notice-list");

    delButtonList.onclick = (e) => {
        console.log(e.target.parentElement);
        var tr = e.target.parentElement.parentElement;
        tr.remove();
    }
});

//Ex3 : 버블링을 이용한 사용자 이벤트 처리하기

window.addEventListener("load", () => {
    var section = document.querySelector("#section3");
    var imgList = section.querySelector(".img-list");
    var currentImg = section.querySelector(".current-img");

    imgList.onclick = (e) => {
        console.log("aaa" + e.target.src);
        if (e.target.nodeName != "IMG") return false;


        currentImg.src = e.target.src

    };

    /* for (var i = 0; i < imgs.length; i++) {
        imgs[i].onclick = function (e) {
            currentImg.src = e.target.src;
        }
    }
}); */
});

//Ex2 - 연습문제1 - 선택된 레코드 삭제하기 : event target
window.addEventListener("load", () => {

    var section = document.querySelector("#section2");
    var delButton = section.querySelectorAll(".del-button2");
    for (var i = 0; i < delButton.length; i++) {
        delButton[i].onclick = (e) => {
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
        imgs[i].onclick = (e) => {
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