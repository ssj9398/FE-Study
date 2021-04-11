# practice
## index.html
<img src="https://user-images.githubusercontent.com/48196352/113541252-cf885080-961c-11eb-8aa4-84cb4f662146.jpg" width="500">
<img src="https://user-images.githubusercontent.com/48196352/113541257-d0b97d80-961c-11eb-9b61-6846355dc339.jpg" width="500">

## prompt, body.innerText
![image](https://user-images.githubusercontent.com/48196352/113957464-3ba3c800-985a-11eb-81e1-c6709e3b2732.png)


## 현재 브라우저 창의 주소를 나타내는 객체
- window.location 

## 브라우저 이동
- window.location.href="https://naver.com"

## 브라우저 정보
- window.navigator

## 디스플레이 사이즈 정보
- window.screen

## html, css 접근 가능
- window.document
- document.body
- document.head
- document.stylesheets

## css 우선순위
1. 태그에 직접입력
2. 헤드태그 style 입력
3. link 입력

# DOM 
1. TREE형태
2. html의 children tag는 head, body 반대로 head, body의 parent 태그는 html
- ex) document.children[0], document.children[0].parentNode
3. 변수로 지정해주고 사용 해주면 될 것 같다.
- ex) head = head.firstElementChild 첫 자식 엘리먼트
- .lastElementChild 마지막 자식 엘리먼트
- .nextElementSibling  같은 레벨의 형제 엘리먼트 적근법
- .previousElementSibling 같은 레벨의 형제 엘리먼트 적근법

## 단일 Element
1. document.getElementById("아이디명");
- 아이디명이라는 id 태그를 통째로 가져온다.
- ex) <p style="color:red;" src="test"></p> 
- t = document.getElementById("아이디명");
- t.innerHTML p태그 안에 태그 및 내용가 보여지고 ex) <strong>
- t.innerTEXT 텍스트만 보여짐
- t.getAttribut="src값" 하면 값을 가져올 수 있음 (속성)

## 다중 Element (배열로 반환됨)
- document.getElementsBy  (ClassName, Name, TagName)
- .value로 값을 가져올수 있음
- .getAttribute("value"); 로는 value 값을 가져올 수 없음 (input태그에 입력된 값과 html은 동기화가 되지 않기 때문)

## css Selector
1. document.querySelector
- 가장 처음에 있는 값만 반환됨
2. document.querySelectorAll (배열로 반환됨)
- ex) document.querySelectorAll("h1,h2")
* id를 사용한 경우 # , class는 .classname , 태그를 활용한 경우 태그명
- ex) document.querySelector(# or . or p);

## Element 추가/삭제
1. 생성 : test = document.createElement("test");
2. 추가 : document.body.appendChild(test);
3. 원하는위치에 추가 : document.body.insertBefor( test, document.body.children[3]); 태그명, 위치
4. Element 복사 : test2 = test.cloneNode();    document.body.insertBefor( test2, document.body.children[6]);
5. 삭제 : document.body.removeChild(test2);

## callback function