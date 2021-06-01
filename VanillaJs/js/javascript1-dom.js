//Ex10 - Ex10 - 클릭한 컬럼을 기준으로 레코드 정렬하기 #1
window.addEventListener("load", function () {

    var notices = [
        { id: 1, title: "자바스크립트란..", regDate: "2021-05-23-1", writerId: "newlec", hit: "11" },
        { id: 2, title: "유투브란", regDate: "2021-05-23-2", writerId: "newlec", hit: "11" },
        { id: 3, title: "기본기란", regDate: "2021-05-23-3", writerId: "newlec", hit: "11" },
        { id: 4, title: "조회수란", regDate: "2021-05-23-4", writerId: "newlec", hit: "22" }
    ];

    var section = document.querySelector("#section10");

    var noticeList = section.querySelector(".notice-list");
    var titleId = section.querySelector(".title");
    var tbodyNode = noticeList.querySelector("tbody");

    var bindData = () => {
        var template = document.querySelector("template");
        console.log(template);
        for (var i = 0; i < notices.length; i++) {
            var cloneNode = document.importNode(template.content, true);
            var tds = cloneNode.querySelectorAll("td");

            tds[0].textContent = notices[i].id;
            //tds[1].innerHTML = '<a href="' + notices[0].id + '">' + notices[0].title + '</a>';
            var aNode = tds[1].children[0];
            aNode.href = notices[i].id;
            aNode.textContent = notices[i].title;

            tds[2].textContent = notices[i].regDate;
            tds[3].textContent = notices[i].writerId;
            tds[4].textContent = notices[i].hit;

            tbodyNode.appendChild(cloneNode);
        }
    };

    bindData();

    var titleSorted = false;

    titleId.onclick = () => {

        tbodyNode.innerHTML = "";

        if (!titleSorted)

            notices.sort(function (a, b) {
                titleSorted = true;
                if (a.title < b.title)
                    return -1;
                else if (a.title > b.title)
                    return 1;
                else
                    return 0;

            });

        notices.reverse();
        bindData();


    };

});

//Ex9 - 다중 노드선택 방법과 일괄삭제, 노드의 자리 바꾸기
window.addEventListener("load", function () {

    var section = document.querySelector("#section9");

    var noticeList = section.querySelector("notice-list");
    var tbody = section.querySelector("tbody");
    var allCheckbox = section.querySelector(".overall-checkbox");
    var delButton = section.querySelector(".del-button2");
    var swapButton = section.querySelector(".swap-button");



    allCheckbox.onchange = function () {
        var inputs = tbody.querySelectorAll("input[type='checkbox']");
        for (var i = 0; i < inputs.length; i++) {
            inputs[i].checked = allCheckbox.checked;

        }

        console.log(allCheckbox.value)
        console.log(allCheckbox.checked);

    };

    delButton.onclick = function () {
        var inputs = tbody.querySelectorAll("input[type='checkbox']");
        //var inputs = tbody.querySelectorAll("input[type='checkbox']:checked");
        for (var i = 0; i < inputs.length; i++) {
            if (inputs[i].checked) {
                inputs[i].parentElement.parentElement.remove();
            }
        };
    }

    swapButton.onclick = () => {
        var inputs = tbody.querySelectorAll("input[type='checkbox']:checked");
        console.log(inputs);
        if (inputs.length != 2) {
            alert("엘리먼트를 두개 선택해 주세요");
            console.log(inputs.length);
            return;
        }
        var trs = [];
        for (var i = 0; i < inputs.length; i++)
            trs.push(inputs[i].parentElement.parentElement);

        var cloneNode = trs[0].cloneNode(true);
        trs[1].replaceWith(cloneNode);
        trs[0].replaceWith(trs[1]);


    };


});

//Ex8 - 노드 삽입과 바꾸기
window.addEventListener("load", function () {

    var section = document.querySelector("#section8");
    var downButton = section.querySelector(".down-button");
    var upButton = section.querySelector(".up-Button");
    var noticeList = section.querySelector("notice-list");
    var tbodyNode = section.querySelector("tbody");

    var currentNode = tbodyNode.firstElementChild;//.children[0];

    downButton.onclick = function () {
        var nextNode = currentNode.nextElementSibling;

        if (nextNode == null) {
            alert("더이상 이동 불가");
            return;
        }
        //tbodyNode.removeChild(nextNode);
        //tbodyNode.insertBefore(nextNode, currentNode);
        currentNode.insertAdjacentElement("beforebegin", nextNode);
    };

    upButton.onclick = function () {
        var preNode = currentNode.previousSibling;
        if (preNode == null) {
            alert("더이상 이동 불가");
            return;
        }
        //tbodyNode.removeChild(currentNode);
        //tbodyNode.insertBefore(currentNode, preNode);
        currentNode.insertAdjacentElement("afterend", preNode);
        console.log(currentNode);
        console.log(preNode);

    };
})


//Ex7 - 노드 복제와 템플릿 태그
window.addEventListener("load", function () {
    var notices = [
        { id: 5, title: "제목1", regDate: "2021-05-23-1", writerId: "newlec", hit: "11" },
        { id: 6, title: "제목2", regDate: "2021-05-23-2", writerId: "newlec", hit: "22" }
    ]

    var section = document.querySelector("#section7");

    var cloneButton = section.querySelector(".clone-button");
    var templateButton = section.querySelector(".template-button");
    var noticeList = section.querySelector(".notice-list");
    var tbodyNode = section.querySelector("tbody");


    cloneButton.onclick = function () {
        for (var i = 0; i < notices.length; i++) {
            var trNode = noticeList.querySelector("tbody tr");
            var cloneNode = trNode.cloneNode(true);
            var tds = cloneNode.querySelectorAll("td");

            tds[0].textContent = notices[i].id;
            //tds[1].innerHTML = '<a href="' + notices[i].id + '">' + notices[i].title + '</a>';
            tds[1].innerHTML = '<input type="text">' + '';
            tds[2].textContent = notices[i].regDate;
            tds[3].textContent = notices[i].writerId;
            tds[4].textContent = notices[i].hit;

            console.log(tds[0].textContent);
            console.log(tds[1].innerHTML);
            console.log(tds[2].textContent);
            console.log(tds[3].textContent);
            console.log(tds[4].textContent);
            tbodyNode.append(cloneNode);
        }


    };
    templateButton.onclick = function () {
        var template = document.querySelector("template");
        console.log(template);

        var cloneNode = document.importNode(template.content, true);
        var tds = cloneNode.querySelectorAll("td");

        tds[0].textContent = notices[0].id;
        tds[1].innerHTML = '<a href="' + notices[0].id + '">' + notices[0].title + '</a>';
        tds[2].textContent = notices[0].regDate;
        tds[3].textContent = notices[0].writerId;
        tds[4].textContent = notices[0].hit;
        console.log(tds[0].textContent);
        console.log(tds[1].innerHTML);
        console.log(tds[2].textContent);
        console.log(tds[3].textContent);
        console.log(tds[4].textContent);

        console.log(cloneNode);
        tbodyNode.appendChild(cloneNode);
    };


});

//Ex6 - 노드 조작 : 메뉴추가(createTextNode, Element)
window.addEventListener("load", function () {
    var section = document.querySelector("#section6");
    var titleInput = document.querySelector(".title-input");
    var menuListUl = document.querySelector(".menu-list");
    var addButton = document.querySelector(".add-button");
    var delButton = document.querySelector(".del-button");


    addButton.onclick = function () {
        var title = titleInput.value;
        //menuListUl.innerHTML += '<li><a href="">' + title + '</a></li>';
        var html = '<a href="">' + title + '</a>';
        var li = document.createElement("li");
        li.innerHTML = html;

        //menuListUl.appendChild(li);
        menuListUl.append(title);
        /* var title = titleInput.value;
        var txtNode = document.createTextNode(title);
        var aNode = document.createElement("a");
        var liNode = document.createElement("li");
        aNode.href = "";
        liNode.append(aNode);

        menuListUl.append(liNode);
        liNode.append(txtNode); */

        //menuListUl.appendChild(txtNode);

        /* var title = titleInput.value;
         var txtNode = document.createTextNode(title);
         menuList.appendChild(txtNode);*/

    };

    delButton.onclick = function () {
        var txtNode = menuListUl.children[0];
        //menuListUl.removeChild(txtNode);
        var liNode = menuListUl.children[0];
        liNode.remove();
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