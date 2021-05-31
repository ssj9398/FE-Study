# HTML/CSS JAVASCRIPT

## HTML
### 컨텐츠 블럭
1. 목록태그
- ol, ul, dl이 있으며, ol과 ul은 li  dl은  dt와 한쌍이다.
- 제목h, 목록(ul, ol, dl), 표(table tr td), 폼 form 인지 확인하면 좀 빠르다.
- 이도저도 아니다? 그럼 div를 써주자
- chrome스토어에 html코드만 보이게 하는 도구가 있다. web developer
- chrome스토어에 아웃라인 잡아주는 도구가 있다. 우선 연습 해보고 쓰도록 하자.   html5 outliner

2. section태그
- 넘버링(h1,h2~~) 새출발 하고 싶다 그럼 section을 쓰자 h1부터 다시 시작
- section은 nav, aside, article이 있다.
- nav는 section이긴한데 의미를 부여한 section
- 링크들을 전부 nav로 바꿔준다.

3. 인라인태그
- a - 링크, b - 글자 두껍게, u -  밑줄
- 구글에 inline태그 검색하면 모질라 사이트에 많이 나옴

4. 순서
-  전체적인 구조(제목, 목록, 표, 폼 외에는 div)를 잡기
- div로 각 영역별로 묶어주기
- header main  footer로 묶어주기
- section(nav, article, aside 나눠주기)
- a태그 링크 걸어주기

### FORM TAG
- <img src="https://user-images.githubusercontent.com/48196352/115980728-d83fc700-a5c9-11eb-8e91-0546f0b89158.JPG" width="500">
- 사용자가 입력한 것들을 서버로 전송 하는것
- ex) http://localhost:80/main.jsp?id=ssj&pwd=1111&addr=seoul
- 모든 form 태그에는 name이 있어야한다.
- 라디오버튼을 하나만 선택되게 하고 싶다면 name을 동일하게 해주면 된다.
- hidden name 필수
- name을 던지는 구만
- form으로 던질땐 왠만하면 post로 하자
- input type이 파일은 enctype="multipart/form-data" 이것을 사용해 주어야 한다.
- autocomplete 자동완성, placeholder 텍스트위에 예시
- autofocus 자동 1번태크 포커싱
- required 필수값 체크
- pattern으로 정규식 가능    ([a-zA-Z].+ 하나당 한글자)  . 은 어떤문자든, + 는 어떤것이든 하나는 입력되야함

## CSS

5. 스타일 속성
- mozila 활용 (https://developer.mozilla.org/en-US/docs/Web/CSS/Reference)

6. selector
- 태그명, id, class이용이 가장 기본

7. 콤비네이션 연산자
- #main-menu a{}    :  a태그에 해당하는 모든것
- #main-menu>a{}    :  main-menu에 자식에 해당하는 a태그만

8. silbling 연산자
- #main-menu+.a{} : 동일 레벨태그에 바로 이웃(인접)하는 a클래스명
- #main-menu~.a{} : 동일 레벨태그에  a클래스명

9. 속성 선택자
- 링크 : a[href], a[href="a.html"]

10. selector 우선순위
- id -> tag -> class

11. 스타일 링크하기
- 공통은 style.css
- html기본 스타일 없앤 것 reset.css (만들어 줘야함)

12. style 평준화 방법
1. reset.css
2. 구버전 브라우저 셀렉터 안먹으면 html5shiv

### 레이아웃 블록 (스타일 적용 순서)
1. 큰방부터 꾸민다
2. reset 파일 생성한다.
- style.css 안에 reset.css를 import하는게 깔끔하다. 단 속도가 느려질 경우 똑같이 link를 걸어서 쓰자
3. 작은방 설정하기
- 부모의 크기를 따라간다 -inherit
4. 세번째 방 설정하기
- 한줄한줄씩 포지션이 지정될때 오른쪽에 위치하고 싶다 그럼 display : flex를 사용하자
5. 방 배치
### Position
1. absolute
- left나 right top bottom 을 사용하려면 position : absolute(default : static 수직 나열)를 먼저 사용해 주어야 한다.  (절대위치)
- relative 부모가 이걸 가지고 있으면 부모기준의 위치가됨

2. relative
- 현재위치의 얼마만큼, 나보다 작은 동생들은 내가 원래 있던 위치에 오지 못함

3. fixed
- 화면에 정해진 좌표에 고정 absoute는 정해진 위치에 고정이라 좀 다르다.

4. sticky
- 화면을 내려도 상단에 고정, top을 지정해줘야함

13. 색상
- Alpha Channel : rgb(255,255,0);인데 rgba(255,255,0,0.2);   0.2는 투명도임

### flex
- flex-direction : row or column 너비 높이만 (방향 설정)
- flex-basis : 어떤방향이든 너비가 동일하게됨 (방향성에 따라)
- flex-grow : 여백을 나눠가짐 뒤에 값은 몇대몇대몇으로 나눌것인가의 값
- flex-shrink : 기본적으로 1을 가지며(동일하게 줄어들고 늘어남)  0이 될 경우 고정
- flex-wrap : nowrap  을 이용하여 한줄로 표현되다가 두번째줄로 내려가는걸 방지하여 오른쪽으로 스크롤을 할 수 있게 만들어줌

축약표현
- flex-grow:0;   flex-shrink: 0;  flex-basis : 100px;   ->  flex : 1 1 100px;

### Ordering
- 위치 정렬? 느낌 순서 정함 기본값 0

### 박스 정렬 Alignment
- 메인축에 해당하는 정렬 방식 justify - content
- align-items : 수직 정렬  baseline 글자에 밑줄 맞춤 (각층 마다 )
- align-content 수직내용 정렬에 사용 (하나로 묶음)


## Vanilla Js
### index.html
<img src="https://user-images.githubusercontent.com/48196352/113541252-cf885080-961c-11eb-8aa4-84cb4f662146.jpg" width="500">
<img src="https://user-images.githubusercontent.com/48196352/113541257-d0b97d80-961c-11eb-9b61-6846355dc339.jpg" width="500">![b](https://user-images.githubusercontent.com/48196352/114428167-d273da00-9bf6-11eb-9c11-9773f7e38ffb.JPG)


### prompt, body.innerText
![image](https://user-images.githubusercontent.com/48196352/113957464-3ba3c800-985a-11eb-81e1-c6709e3b2732.png)


### 현재 브라우저 창의 주소를 나타내는 객체
- window.location 

### 브라우저 이동
- window.location.href="https://naver.com"

### 브라우저 정보
- window.navigator

### 디스플레이 사이즈 정보
- window.screen

### html, css 접근 가능
- window.document
- document.body
- document.head
- document.stylesheets

### css 우선순위
1. 태그에 직접입력
2. 헤드태그 style 입력
3. link 입력



### DOM 
1. TREE형태
2. html의 children tag는 head, body 반대로 head, body의 parent 태그는 html
- ex) document.children[0], document.children[0].parentNode
3. 변수로 지정해주고 사용 해주면 될 것 같다.
- ex) head = head.firstElementChild 첫 자식 엘리먼트
- .lastElementChild 마지막 자식 엘리먼트
- .nextElementSibling  같은 레벨의 형제 엘리먼트 적근법
- .previousElementSibling 같은 레벨의 형제 엘리먼트 적근법



### 단일 Element
1. document.getElementById("아이디명");
- 아이디명이라는 id 태그를 통째로 가져온다.
- ex) <p style="color:red;" src="test"></p> 
- t = document.getElementById("아이디명");
- t.innerHTML p태그 안에 태그 및 내용가 보여지고 ex) <strong>
- t.innerTEXT 텍스트만 보여짐
- t.getAttribut="src값" 하면 값을 가져올 수 있음 (속성)



### 다중 Element (배열로 반환됨)
- document.getElementsBy  (ClassName, Name, TagName)
- .value로 값을 가져올수 있음
- .getAttribute("value"); 로는 value 값을 가져올 수 없음 (input태그에 입력된 값과 html은 동기화가 되지 않기 때문)



### css Selector
1. document.querySelector
- 가장 처음에 있는 값만 반환됨
2. document.querySelectorAll (배열로 반환됨)
- ex) document.querySelectorAll("h1,h2")
* id를 사용한 경우 # , class는 .classname , 태그를 활용한 경우 태그명
- ex) document.querySelector(# or . or p);






### 기타
- document.body.scrollHeight  : 높이
- $("html, body").animate({ scrollTop: document.body.scrollHeight }, "slow");  가장 아래로 천천히 이동

### Element 추가/삭제
1. 생성 : test = document.createElement("test");
2. 추가 : document.body.appendChild(test);
3. 원하는위치에 추가 : document.body.insertBefor( test, document.body.children[3]); 태그명, 위치
4. Element 복사 : test2 = test.cloneNode();    document.body.insertBefor( test2, document.body.children[6]);
5. 삭제 : document.body.removeChild(test2);



### callback function
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



### 브라우저에서 발생하는 이벤트 종류와 핸들링 하는 방법
1. form(form element에 변화가 생기거나 submit 버튼을 누를 경우 발생), window(페이지가 모두 로드 되었을때 onload가 대표적), mouse, key Event가 있다.
2. 이벤트가 발생하고 해당 핸들러가 호출되는과정을 이벤트가 fire 된다거나 트리거라고도 한다.
3. onclick, onchange, onkeydown 등 이 있다.



### EventHandler를 등록하는 방법
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



### javascript http request를 보낼 수 있는 ajax
- 페이지를 이동하지 않고도 서버에서 새로운 데이터를 가져올 수 있고, 브라우저에 데이터를 서버로 보낼 수 있음
- AJAX는 비동기임 요청할때만 응답함
- ex) <script>
        var req = new XMLHttpRequest();
        req.open("GET", "./data.txt");
        req.send();
    </script>

    
### AJAX - Response 받아서 처리하기
<img src="https://user-images.githubusercontent.com/48196352/114310085-780a4900-9b24-11eb-9ae4-6987ac9995bd.PNG" width="500">


### JSON

- 객체를 문자열로 표현하는 방법
- 서버 -> 브라우저 전달하기 용이
- <img src="https://user-images.githubusercontent.com/48196352/114428223-e1f32300-9bf6-11eb-8bcc-2105a3da3b8f.JPG" width="500">

### AJAX + JSON
<<<<<<< HEAD
1. AJAX를 통해 JSON으로 받기

=======
1. JAX를 통해 JSON으로 받기
- <img src="https://user-images.githubusercontent.com/48196352/115251318-64cf2d00-a165-11eb-8b2c-668abaa02961.JPG" width="500">
>>>>>>> 2dbce836ffd2179c089c022de98817b58e0cacbb
2. JSON.PARE API를 이용해 받아온 JSON 문자열 데이터를 JAVASCRIPT 객체로 변환
- <img src="https://user-images.githubusercontent.com/48196352/115251334-68fb4a80-a165-11eb-9e60-cda8fc59e860.JPG" width="500">
3. 데이터를 처리하는 JAVASCRIPT 프로그램 실행
- <img src="https://user-images.githubusercontent.com/48196352/115251346-6bf63b00-a165-11eb-8e35-6374b740a29e.JPG" width="500">
 
### css 색상, 이미지 반전
- div { filter: invert(100%);}
<<<<<<< HEAD

=======
>>>>>>> 2dbce836ffd2179c089c022de98817b58e0cacbb


### SCRIPT위치에 따른 실행
1. 브라우저는 HTML 문서를 읽으면서 script tag를 실행함

- HTML 문서 Element 파싱 보다 스크립트가 먼저 실행되면 접근되지 않음
- 페이지의 상단의 script 에서 이후 파싱될 Element에 접근하고 싶다면 onload 등의 eventhandler로 실행되도록 해야 함
2. async, defer 속성을 이용하면 스크립트의 실행과 문서의 로딩을 동시에 진행할 수 있음(비 동기적) 



### 배열
1. Push / Pop
- 선입 후출 방식임

2. splice
- ex) var nums = new Array(2, 3, "hello", 7);
- nums.slice(2);  -> 2번째 까지만 나옴(3까지)   2,3
- nums.slice(2,1);  -> 2번째에서 1개만 날라감 hello만 날라감    2,3,7
- nums.slice(2,1,hoho);  -> 2번째에서 1개 날리고 hoho를 넣어라  2,3,hoho,7
- nums.slice(2,0,hoho);  -> 2번째에서 0개 날리고 hoho를 널어라  2,3,hoho,hello,7

### Json
- ex) var exam = new Object();
- exam.kor = 30;
- exam.eng = 70;
- exam.math = 80;
- 아래와 같이 바꿀 수 있다.
- var exam = {"kor" : 30, "eng" : 70, "math" : 80};
- 꺼내서 쓸때
- var data = {"n id" : 1, title : "aaa"}; 이렇게 되어있을때 
- -> data.n id가 안되기 때문에 data["n id"]로 꺼내서 쓸 수 있다.
### 문자열을 객체화 
1. eval()
-  ex) eval('var y = 30;');
-     eval("var test = " + y + ";");
2. JSON parser
- ex) var data = JSON.parser('{"id" : 1, "title" : "aaa"}'); 꼭 id title에 쓴거처럼 키를 문자열""로 써야함
- 그럼 문자열로 안되어 있는 구조 var data = {id : 2, title : "aaa"} 키를 문자열로 바꿔주려면
- var json = JSON.stringify(data);로 써주면 키가 문자열로 자동으로 바뀜

### 연산자
1. ===, !==
- 주소를 비교하게됨
- ex) var x = 3;,   var y =3; 이라고 할 경우 같은 박스에 x,y값이 3이기 때문에 주소가 동일하고
- var x 3, var y = new Number(3); 이라고 할 경우 y는 새로운 박스를 생성하기 때문에 주소가 틀려 false가 나옴
2. 숫자와 문자 계산
- 덧셈의 경우 숫자와 문자가 섞여 있을경우 문자로 바꿔버리는데 뺄셈의 경우 계산이 되버림

### 제어구조
- for in  https://ssj9398.github.io/FE-Study/VanillaJs/forin.html (참고url)

### 함수 객체와 표현식
- function 방법  (2번을 많이 씀)
- 세가지 방법이 있음
- https://ssj9398.github.io/FE-Study/VanillaJs/function.html (참고url)


### 변수의 가시영역과 global 객체 전역변수
- var는 정적인 방식으로 생성,  글로벌 변수는 동적으로 생성

### 클로저 (Closure)
- 부모 function 쓸수있음

### 브라우저 플랫폼 (alert, prompt, confirm, parseInt)   
- 참고 url ( https://ssj9398.github.io/FE-Study/VanillaJs/prompt.html )
- prompt -> 입력 받은게 무조건 문자열임

### 엘리먼트 객체 이용하기
- input 태그, span태그는 onclick을 이용하여 idname.value로 값을 바꿀 수 있다.
- span은 값을 넣어줄때 value가 아닌 innerText를 사용한다 왜냐 span은 value가 없으니까

### 객체 생성과 사용 시점
1. 스크립트를 아랫쪽에 작성한다.
2. window.onload를 한다. (body.onload를 안하는 이유는 이미지 같은 것들은 body에서 로드가 안되기 때문에)
- 참고 url ( https://ssj9398.github.io/FE-Study/VanillaJs/onclick.html )

### 스크립트 코드 지역화
1. https://ssj9398.github.io/FE-Study/VanillaJs/script.html

### 코드분리와 이벤트 바인딩 방법
1. window.onload 이벤트 대신 window.addEventListener를 사용하게 되면 덮어쓰기가 아닌 누적이된다.

### childNodes, children
1. children - 태그를 기준으로
2. childNodes - 주석, 빈공백 즉 전체를 기준으로함

### 텍스트 노드를 동적으로 추가/삭제
1. 노드 추가하기
- 텍스트 노드 생성 (var txt = document.createTextNode("텍스트 노드");)
- 텍스트 노드를 추가할 엘리먼트 노드 선택 (var div1 = document.getElementById("div1");)
- 엘리먼트 노드에 텍스트 노드 추가하기
div1.appendChild(txt);

### 엘리먼트 노드 추가, 삭제
1. 추가
- appendChild, append, innerHTML
2. 삭제
- removeChild, remove

* childNodes - 모든 노드가 기준
* children - 엘리먼트가 기준
* append를 이용해 텍스트 노드를 쉽게 추가 할 수 있다.

### 제목으로 내용 정렬하기
- https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/sort

### 선택된 이미지 보여주기
- event target