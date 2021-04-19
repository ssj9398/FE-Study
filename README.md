# practice
## index.html
<img src="https://user-images.githubusercontent.com/48196352/113541252-cf885080-961c-11eb-8aa4-84cb4f662146.jpg" width="500">
<img src="https://user-images.githubusercontent.com/48196352/113541257-d0b97d80-961c-11eb-9b61-6846355dc339.jpg" width="500">![b](https://user-images.githubusercontent.com/48196352/114428167-d273da00-9bf6-11eb-9c11-9773f7e38ffb.JPG)


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


## 기타
- document.body.scrollHeight  : 높이
- $("html, body").animate({ scrollTop: document.body.scrollHeight }, "slow");  가장 아래로 천천히 이동

## Element 추가/삭제
1. 생성 : test = document.createElement("test");
2. 추가 : document.body.appendChild(test);
3. 원하는위치에 추가 : document.body.insertBefor( test, document.body.children[3]); 태그명, 위치
4. Element 복사 : test2 = test.cloneNode();    document.body.insertBefor( test2, document.body.children[6]);
5. 삭제 : document.body.removeChild(test2);



## callback function
- 조건 등록해두고 만족하면 나중에 호출하는 함수
1. setTimeout
-  setTimeout ( callback(콜백함수),시간(밀리세컨드 단위) ) 두개의 인자필요
es) function callback(){
    concol.log("This is callback function");
}
    setTimeout(callback, 3000);
- 3초뒤 콜백함수가 실행됨

2. setInterval(callback, 5000);
- 5초마다 계속 호출

* 처음 실행한 것 부터 id 1~ 쭉 들어가게 되며 이 아이디로 취소를 시킬 수 있다.
- ex) clearInterval(1);



## 브라우저에서 발생하는 이벤트 종류와 핸들링 하는 방법
1. form(form element에 변화가 생기거나 submit 버튼을 누를 경우 발생), window(페이지가 모두 로드 되었을때 onload가 대표적), mouse, key Event가 있다.
2. 이벤트가 발생하고 해당 핸들러가 호출되는과정을 이벤트가 fire 된다거나 트리거라고도 한다.
3. onclick, onchange, onkeydown 등 이 있다.



## EventHandler를 등록하는 방법
1. property에 직접 Handler설정
- var t = document.getElementById("form1");
        t.onsubmit = function a() {
            console.log("property");
            return false;
        }

2. addEventListener
-   ex) function b() {
            console.log("addEventListener");
        }
        t.addEventListener("submit",b);


3. removeEventListener
-   ex) t.removeEventListener("submit",b);
addEventListener를 사용 할때는 on을 붙이지 않고 event 이름만 문자열로 준다.
addEventListener는 여러개의 event handler를 추가하기 때문에 a,b function 둘다 나온다.



## javascript http request를 보낼 수 있는 ajax
- 페이지를 이동하지 않고도 서버에서 새로운 데이터를 가져올 수 있고, 브라우저에 데이터를 서버로 보낼 수 있음
- AJAX는 비동기임 요청할때만 응답함
- ex) <script>
        var req = new XMLHttpRequest();
        req.open("GET", "./data.txt");
        req.send();
    </script>

    
## AJAX - Response 받아서 처리하기
<img src="https://user-images.githubusercontent.com/48196352/114310085-780a4900-9b24-11eb-9ae4-6987ac9995bd.PNG" width="500">


## JSON

- 객체를 문자열로 표현하는 방법
- 서버 -> 브라우저 전달하기 용이
- <img src="https://user-images.githubusercontent.com/48196352/114428223-e1f32300-9bf6-11eb-8bcc-2105a3da3b8f.JPG" width="500">

## AJAX + JSON
1. JAX를 통해 JSON으로 받기
- <img src="https://user-images.githubusercontent.com/48196352/115251318-64cf2d00-a165-11eb-8b2c-668abaa02961.JPG" width="500">
2. JSON.PARE API를 이용해 받아온 JSON 문자열 데이터를 JAVASCRIPT 객체로 변환
- <img src="https://user-images.githubusercontent.com/48196352/115251334-68fb4a80-a165-11eb-9e60-cda8fc59e860.JPG" width="500">
3. 데이터를 처리하는 JAVASCRIPT 프로그램 실행
- <img src="https://user-images.githubusercontent.com/48196352/115251346-6bf63b00-a165-11eb-8e35-6374b740a29e.JPG" width="500">
 
## css 색상, 이미지 반전
- div { filter: invert(100%);}
