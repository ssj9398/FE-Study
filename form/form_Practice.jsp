<!DOCTYPE html>
<html lang="UTF-8">

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="style.css?01" />
    <link href="https://fonts.googleapis.com/css?family=Source+Sans+Pro&display=swap" rel="stylesheet" />
    <title>Join</title>
    <script src="https://kit.fontawesome.com/2d323a629b.js" crossorigin="anonymous"></script>
    <script src="main.js" defer></script>
    <script src="http://dmaps.daum.net/map_js_init/postcode.v2.js?"></script>
</head>

<body>
    <!-- Nav container -->
    <nav class="navbar">
        <!-- Logo with text -->
        <div class="navbar__logo">
            <i class="fab fa-accusoft"></i>
            <a href="">LEFT ICON</a>
        </div>
        <!-- Menu -->
        <ul class="navbar__menu">
            <li><a href="#">Menu1</a></li>
            <li><a href="#">Menu2</a></li>
            <li><a href="#">Menu3</a></li>
            <li><a href="#">Menu4</a></li>
            <li><a href="#">Menu5</a></li>
        </ul>
        <!-- Icons -->
        <ul class="navbar__icons">
            <li><i class="fab fa-twitter"></i></li>
            <li><i class="fab fa-facebook-f"></i></li>
        </ul>
        <!-- Toggle button -->
        <a href="#" class="navbar__toggleBtn">
            <i class="fas fa-bars"></i>
        </a>
    </nav>
    <ul class="mode__change">
        <div class="themed"> </div>
    </ul>
    <div class="contents">
        <div id="top2" style="display: block; bottom: 200px;"></div>
        <h2>Join</h2>
        <form action="form_Practice2.jsp" method="get" autocomplete="off">
            <label>
                <p>Id : <input type="text" name="id" placeholder="Input Id" autofocus></p>
            </label>
            <label>
                <p>Pw : <input type="password" name="pw" placeholder="Input Pw"></p>
            </label>
            <label>
                <p>Name : <input type="text" name="name"></p>
            </label>
            <label>
                <p>Date : <input type="date" name="date"></p>
            </label>
            <label>
                <p>gender : <select name="type">


                        <p>
                            <option value="gender" name="gender">gender</option>
                        </p>
                        <p>
                            <option value="man1" name="gender">Man</option>
                        </p>
                        <p>
                            <option value="woman1" name="gender">Woman</option>
                        </p>
                    </select>
                </p>
            </label>
            <p>
            <p><label><input type="checkbox" name="checkbox1" value="10">10</label>
                <label> <input type="checkbox" name="checkbox2" value="50">50</label>
                <label> <input type="checkbox" name="checkbox3" value="100">100</label>
            </p>

            </p>
            <label>
                <p><input type="radio" name="gender2" value="woman2">Woman
            </label>


            <label>
                <input type="radio" name="gender2" value="man1">Man</p>
            </label>

            </p>
            <label>
                <p>Email : <input type=" email" name="email" placeholder="Input Email"></p>
            </label>
            <label>
                <p> age :
                    <input type="number" name="age" max="100" min="1">
                </p>
            </label>
            <p>
                <input type="range" name="range">
            </p>
            <p>
                <input type="file" name="profile">
            </p>
            <p>zip code : <input path="newZip" readonly="true" /></p>
            <p>zip address 1 : <input path="ofceAddr1" readonly="true" /></p>
            <p>zip address 2 : <input type="text" id="ofceAddr2" name="ofceAddr2"></p>
            <p><button type=""><a href="javascript:fn_execPostCode();">kakaoapi</a></button></p>

            <input type="submit" value="SubmitButton">

        </form>


    </div>

</body>
<script>
    function fn_execPostCode() {
        new daum.Postcode({
            oncomplete: function (data) {
                //�˾����� �˻���� �׸��� Ŭ�������� ������ �ڵ带 �ۼ��ϴ� �κ�.
                var addr = ''; //�ּҸ� return �޾ƿ� ����

                //����ڰ� ������ �ּ� Ÿ�Կ� ���� �ش� �ּ� ���� �����´�.
                if (data.userSelectedType === 'R') //����ڰ� ���θ� �ּҸ� �������� ��� 
                {
                    addr = data.roadAddress;
                } else //����ڰ� ���� �ּҸ� �������� ���(J)
                {
                    addr = data.jibunAddress;
                }
                //�����ȣ�� �ּ� ������ �ش� �ʵ忡 �ִ´�.
                document.getElementById('newZip').value = data.zonecode;
                document.getElementById('ofceAddr1').value = addr;
                //Ŀ���� ���ּ� �ʵ�� �̵��Ѵ�.
                document.getElementById('ofceAddr2').focus();
            }
        }).open({

        });
    }
   /*���� API �Լ�ȣ�� ��*/
</script>

</html>