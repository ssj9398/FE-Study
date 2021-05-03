# ������ ��
1. ����±�
- ol, ul, dl�� ������, ol�� ul�� li  dl��  dt�� �ѽ��̴�.
- ����h, ���(ul, ol, dl), ǥ(table tr td), �� form ���� Ȯ���ϸ� �� ������.
- �̵����� �ƴϴ�? �׷� div�� ������
- chrome���� html�ڵ常 ���̰� �ϴ� ������ �ִ�. web developer
- chrome���� �ƿ����� ����ִ� ������ �ִ�. �켱 ���� �غ��� ������ ����.   html5 outliner

2. section�±�
- �ѹ���(h1,h2~~) ����� �ϰ� �ʹ� �׷� section�� ���� h1���� �ٽ� ����
- section�� nav, aside, article�� �ִ�.
- nav�� section�̱��ѵ� �ǹ̸� �ο��� section
- ��ũ���� ���� nav�� �ٲ��ش�.

3. �ζ����±�
- a - ��ũ, b - ���� �β���, u -  ����
- ���ۿ� inline�±� �˻��ϸ� ������ ����Ʈ�� ���� ����

4. ����
-  ��ü���� ����(����, ���, ǥ, �� �ܿ��� div)�� ���
- div�� �� �������� �����ֱ�
- header main  footer�� �����ֱ�
- section(nav, article, aside �����ֱ�)
- a�±� ��ũ �ɾ��ֱ�

5. ��Ÿ�� �Ӽ�
- mozila Ȱ�� (https://developer.mozilla.org/en-US/docs/Web/CSS/Reference)

6. selector
- �±׸�, id, class�̿��� ���� �⺻

7. �޺���̼� ������
- #main-menu a{}    :  a�±׿� �ش��ϴ� ����
- #main-menu>a{}    :  main-menu�� �ڽĿ� �ش��ϴ� a�±׸�

8. silbling ������
- #main-menu+.a{} : ���� �����±׿� �ٷ� �̿�(����)�ϴ� aŬ������
- #main-menu~.a{} : ���� �����±׿�  aŬ������

9. �Ӽ� ������
- ��ũ : a[href], a[href="a.html"]

10. selector �켱����
- id -> tag -> class

11. ��Ÿ�� ��ũ�ϱ�
- ������ style.css
- html�⺻ ��Ÿ�� ���� �� reset.css (����� �����)

12. style ����ȭ ���
1. reset.css
2. ������ ������ ������ �ȸ����� html5shiv

## ���̾ƿ� ��� (��Ÿ�� ���� ����)
1. ū����� �ٹδ�
2. reset ���� �����Ѵ�.
- style.css �ȿ� reset.css�� import�ϴ°� ����ϴ�. �� �ӵ��� ������ ��� �Ȱ��� link�� �ɾ ����
3. ������ �����ϱ�
- �θ��� ũ�⸦ ���󰣴� -inherit
4. ����° �� �����ϱ�
- �������پ� �������� �����ɶ� �����ʿ� ��ġ�ϰ� �ʹ� �׷� display : flex�� �������
5. �� ��ġ
## Position
1. absolute
- left�� right top bottom �� ����Ϸ��� position : absolute(default : static ���� ����)�� ���� ����� �־�� �Ѵ�.  (������ġ)
- relative �θ� �̰� ������ ������ �θ������ ��ġ����

2. relative
- ������ġ�� �󸶸�ŭ, ������ ���� �������� ���� ���� �ִ� ��ġ�� ���� ����

3. fixed
- ȭ�鿡 ������ ��ǥ�� ���� absoute�� ������ ��ġ�� �����̶� �� �ٸ���.

4. sticky
- ȭ���� ������ ��ܿ� ����, top�� �����������

13. ����
- Alpha Channel : rgb(255,255,0);�ε� rgba(255,255,0,0.2);   0.2�� ������

## flex
- flex-direction : row or column �ʺ� ���̸� (���� ����)
- flex-basis : ������̵� �ʺ� �����ϰԵ� (���⼺�� ����)
- flex-grow : ������ �������� �ڿ� ���� ���������� �������ΰ��� ��
- flex-shrink : �⺻������ 1�� ������(�����ϰ� �پ��� �þ)  0�� �� ��� ����
- flex-wrap : nowrap  �� �̿��Ͽ� ���ٷ� ǥ���Ǵٰ� �ι�°�ٷ� �������°� �����Ͽ� ���������� ��ũ���� �� �� �ְ� �������

���ǥ��
- flex-grow:0;   flex-shrink: 0;  flex-basis : 100px;   ->  flex : 1 1 100px;

## Ordering
- ��ġ ����? ���� ���� ���� �⺻�� 0

## �ڽ� ���� Alignment
- �����࿡ �ش��ϴ� ���� ��� justify - content
- align-items : ���� ����  baseline ���ڿ� ���� ���� (���� ���� )
- align-content �������� ���Ŀ� ��� (�ϳ��� ����)