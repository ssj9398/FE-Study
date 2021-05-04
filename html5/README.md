# 컨텐츠 블럭
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

## 레이아웃 블록 (스타일 적용 순서)
1. 큰방부터 꾸민다
2. reset 파일 생성한다.
- style.css 안에 reset.css를 import하는게 깔끔하다. 단 속도가 느려질 경우 똑같이 link를 걸어서 쓰자
3. 작은방 설정하기
- 부모의 크기를 따라간다 -inherit
4. 세번째 방 설정하기
- 한줄한줄씩 포지션이 지정될때 오른쪽에 위치하고 싶다 그럼 display : flex를 사용하자
5. 방 배치
## Position
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

## flex
- flex-direction : row or column 너비 높이만 (방향 설정)
- flex-basis : 어떤방향이든 너비가 동일하게됨 (방향성에 따라)
- flex-grow : 여백을 나눠가짐 뒤에 값은 몇대몇대몇으로 나눌것인가의 값
- flex-shrink : 기본적으로 1을 가지며(동일하게 줄어들고 늘어남)  0이 될 경우 고정
- flex-wrap : nowrap  을 이용하여 한줄로 표현되다가 두번째줄로 내려가는걸 방지하여 오른쪽으로 스크롤을 할 수 있게 만들어줌

축약표현
- flex-grow:0;   flex-shrink: 0;  flex-basis : 100px;   ->  flex : 1 1 100px;

## Ordering
- 위치 정렬? 느낌 순서 정함 기본값 0

## 박스 정렬 Alignment
- 메인축에 해당하는 정렬 방식 justify - content
- align-items : 수직 정렬  baseline 글자에 밑줄 맞춤 (각층 마다 )
- align-content 수직내용 정렬에 사용 (하나로 묶음)