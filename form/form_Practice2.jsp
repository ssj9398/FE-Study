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
    <script src="//t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js"></script>
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


        <h1> form post</h1>
        <ul>
            <li>id: <%= request.getParameter("id") %>
            </li>
            <li>pw: <%= request.getParameter("pw") %>
            </li>
            <li>name: <%= request.getParameter("name") %>
            </li>
            <li>date: <%= request.getParameter("date") %>
            </li>
            <li> type: <%= request.getParameter("type") %>
            </li>
            <li> gender2: <%= request.getParameter("gender2") %>
            </li>
            <li> email: <%= request.getParameter("email") %>
            </li>
            <li> age: <%= request.getParameter("age") %>
            </li>
            <li> range: <%= request.getParameter("range") %>
            </li>
        </ul>
    </div>

</body>


</html>