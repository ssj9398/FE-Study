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
- ������ ����
- var data = {"n id" : 1, title : "aaa"}; �̷��� �Ǿ������� 
- -> data.n id�� �ȵǱ� ������ data["n id"]�� ������ �� �� �ִ�.
### ���ڿ��� ��üȭ 
1. eval()
-  ex) eval('var y = 30;');
-     eval("var test = " + y + ";");
2. JSON parser
- ex) var data = JSON.parser('{"id" : 1, "title" : "aaa"}'); �� id title�� ����ó�� Ű�� ���ڿ�""�� �����
- �׷� ���ڿ��� �ȵǾ� �ִ� ���� var data = {id : 2, title : "aaa"} Ű�� ���ڿ��� �ٲ��ַ���
- var json = JSON.stringify(data);�� ���ָ� Ű�� ���ڿ��� �ڵ����� �ٲ�

## ������
1. ===, !==
- �ּҸ� ���ϰԵ�
- ex) var x = 3;,   var y =3; �̶�� �� ��� ���� �ڽ��� x,y���� 3�̱� ������ �ּҰ� �����ϰ�
- var x 3, var y = new Number(3); �̶�� �� ��� y�� ���ο� �ڽ��� �����ϱ� ������ �ּҰ� Ʋ�� false�� ����
2. ���ڿ� ���� ���
- ������ ��� ���ڿ� ���ڰ� ���� ������� ���ڷ� �ٲ�����µ� ������ ��� ����� �ǹ���

## �����
- for in  https://ssj9398.github.io/FE-Study/VanillaJs/forin.html (����url)

## �Լ� ��ü�� ǥ����
- function ���  (2���� ���� ��)
- ������ ����� ����
- https://ssj9398.github.io/FE-Study/VanillaJs/function.html (����url)


## ������ ���ÿ����� global ��ü ��������
- var�� ������ ������� ����,  �۷ι� ������ �������� ����

## Ŭ���� (Closure)
- �θ� function ��������

## ������ �÷��� (alert, prompt, confirm, parseInt)   
- ���� url ( https://ssj9398.github.io/FE-Study/VanillaJs/prompt.html )
- prompt -> �Է� ������ ������ ���ڿ���

## ������Ʈ ��ü �̿��ϱ�
- input �±�, span�±״� onclick�� �̿��Ͽ� idname.value�� ���� �ٲ� �� �ִ�.
- span�� ���� �־��ٶ� value�� �ƴ� innerText�� ����Ѵ� �ֳ� span�� value�� �����ϱ�

### ��ü ������ ��� ����
1. ��ũ��Ʈ�� �Ʒ��ʿ� �ۼ��Ѵ�.
2. window.onload�� �Ѵ�. (body.onload�� ���ϴ� ������ �̹��� ���� �͵��� body���� �ε尡 �ȵǱ� ������)
- ���� url ( https://ssj9398.github.io/FE-Study/VanillaJs/onclick.html )