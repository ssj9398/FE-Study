## form이란
- 사용자가 입력한 것들을 서버로 전송 하는것
- ex) http://localhost:80/main.jsp?id=ssj&pwd=1111&addr=seoul
- 모든 form 태그에는 name이 있어야한다.
- 라디오버튼을 하나만 선택되게 하고 싶다면 name을 동일하게 해주면 된다.
- hidden name 필수
- name을 던지는 구만
- form으로 던질땐 왠만하면 post로 하자
- input type이 파일은 enctype="multipart/form-data" 이것을 사용해 주어야 한다.