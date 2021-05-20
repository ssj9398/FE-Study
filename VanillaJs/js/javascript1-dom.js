
//Ex6 - 노드 조작 : 메뉴추가(createTextNode, Element)
window.addEventListener("load", function () {
    var section = document.querySelector("#section6");
    var titleInput = document.querySelector(".title-input");
    var menuList = document.querySelector(".menu-list");
    var addButton = document.querySelector(".add-button");
    var delButton = document.querySelector(".del-button");

    addButton.onclick = function () {
        var title = titleInput.value;
        var txtNode = document.createTextNode(title);

        menuList.appendChild(txtNode);

    };

    delButton.onclick = function () {
        var txtNode = menuList.childNodes[0];
        menuList.removeChild(txtNode);

    };

});

//Ex5 : 엘리먼트 노드의 속성 & CSS 변경
window.addEventListener("load", function () {
    var section = document.querySelector("#section5");
    var srcInput = section.querySelector(".src-Input");
    var addButton = section.querySelector(".add-button");
    var delButton = section.querySelector(".del-button");
    var img = section.querySelector(".img");
    var imgselect = section.querySelector(".img-select");
    var colorInput = section.querySelector(".color-input");
    var div = document.querySelector(".image-node");

    //var txt = document.createTextNode("추가할 텍스트 노드");
    //var div = document.querySelector(".box");
    //div.appendChild(txt);

    addButton.onclick = function () {
        var imageNode = document.createElement('img');
        var div = document.querySelector(".image-node");

        //img.src = "images/" + srcInput.value;
        //img.style["border-color"] = colorInput.value;

        //img.src = "images/" + imgselect.value;
        console.log(img.className);

        div.appendChild(imageNode);
        imageNode.src = "images/" + srcInput.value;
        imageNode.style.color = colorInput.value;
        //imageNode.style.borderColor = colorInput.value;
        imageNode.style.border = "5px solid";

    };

    delButton.onclick = function () {
        var imageNode = div.lastChild;
        div.removeChild(imageNode);
    };
});

//Ex4 : ChildNodes를 이용한 노드 선택
window.addEventListener("load", function () {
    var section4 = document.querySelector("#section4");
    var box = section4.querySelector(".box");
    var input1 = box.children[0];//.childNodes[0];
    var input2 = box.children[1];

    input1.value = "hello";
    input2.value = "hi";
});

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