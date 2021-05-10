# VanillaJs
## 배열
1. Push / Pop
- 선입 후출 방식임

2. splice
- ex) var nums = new Array(2, 3, "hello", 7);
- nums.slice(2);  -> 2번째 까지만 나옴(3까지)   2,3
- nums.slice(2,1);  -> 2번째에서 1개만 날라감 hello만 날라감    2,3,7
- nums.slice(2,1,hoho);  -> 2번째에서 1개 날리고 hoho를 넣어라  2,3,hoho,7
- nums.slice(2,0,hoho);  -> 2번째에서 0개 날리고 hoho를 널어라  2,3,hoho,hello,7

## Json
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

## 연산자
1. ===, !==
- 주소를 비교하게됨
- ex) var x = 3;,   var y =3; 이라고 할 경우 같은 박스에 x,y값이 3이기 때문에 주소가 동일하고
- var x 3, var y = new Number(3); 이라고 할 경우 y는 새로운 박스를 생성하기 때문에 주소가 틀려 false가 나옴
2. 숫자와 문자 계산
- 덧셈의 경우 숫자와 문자가 섞여 있을경우 문자로 바꿔버리는데 뺄셈의 경우 계산이 되버림

## 제어구조
- for in  https://ssj9398.github.io/FE-Study/VanillaJs/forin.html (참고url)

## 함수 객체와 표현식
- function 방법  (2번을 많이 씀)
- 세가지 방법이 있음
- https://ssj9398.github.io/FE-Study/VanillaJs/function.html (참고url)


## 변수의 가시영역과 global 객체 전역변수
- var는 정적인 방식으로 생성,  글로벌 변수는 동적으로 생성

## 클로저 (Closure)
- 부모 function 쓸수있음

## 브라우저 플랫폼 (alert, prompt, confirm, parseInt)   
- 참고 url ( https://ssj9398.github.io/FE-Study/VanillaJs/prompt.html )
- prompt -> 입력 받은게 무조건 문자열임

## 엘리먼트 객체 이용하기
- input 태그, span태그는 onclick을 이용하여 idname.value로 값을 바꿀 수 있다.
- span은 값을 넣어줄때 value가 아닌 innerText를 사용한다 왜냐 span은 value가 없으니까

### 객체 생성과 사용 시점
1. 스크립트를 아랫쪽에 작성한다.
2. window.onload를 한다. (body.onload를 안하는 이유는 이미지 같은 것들은 body에서 로드가 안되기 때문에)
- 참고 url ( https://ssj9398.github.io/FE-Study/VanillaJs/onclick.html )