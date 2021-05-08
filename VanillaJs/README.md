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

### 문자열을 객체화 
1. eval()
-  ex) eval('var y = 30;');
-      eval("var test = " + y + ";");
2. jsonparser