# VanillaJs
## �迭
1. Push / Pop
- ���� ���� �����

2. splice
- ex) var nums = new Array(2, 3, "hello", 7);
- nums.slice(2);  -> 2��° ������ ����(3����)   2,3
- nums.slice(2,1);  -> 2��°���� 1���� ���� hello�� ����    2,3,7
- nums.slice(2,1,hoho);  -> 2��°���� 1�� ������ hoho�� �־��  2,3,hoho,7
- nums.slice(2,0,hoho);  -> 2��°���� 0�� ������ hoho�� �ξ��  2,3,hoho,hello,7

## Json
- ex) var exam = new Object();
- exam.kor = 30;
- exam.eng = 70;
- exam.math = 80;
- �Ʒ��� ���� �ٲ� �� �ִ�.
- var exam = {"kor" : 30, "eng" : 70, "math" : 80};

### ���ڿ��� ��üȭ 
1. eval()
-  ex) eval('var y = 30;');
-      eval("var test = " + y + ";");
2. jsonparser