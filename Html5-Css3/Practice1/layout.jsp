<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="style.css?01" />
  <link href="https://fonts.googleapis.com/css?family=Source+Sans+Pro&display=swap" rel="stylesheet" />
  <script src="https://kit.fontawesome.com/2d323a629b.js" crossorigin="anonymous"></script>
  <script src="main.js" defer></script>
  <title>layout</title>
</head>

<body>
  <div class="wrapper">

    <header>
      <nav class="navbar">
        <!-- Logo with text -->
        <div class="navbar__logo">
          <i class="fab fa-accusoft"></i>
          <a href="">LEFT ICON</a>
        </div>
        <!-- Menu -->
        <ul class="navbar__menu">
          <li><a href="#">Menu1</a>
            <ul><a href="#">list</a></ul>
            <ul><a href="#">list</a></ul>
          </li>
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
    </header>

  </div>

  <div class="contents">
    <ul class="mode__change">
      <div class="themed"> </div>
      <div class="themed"> </div>
      <div class="themed"> </div>
      <div class="themed"> </div>
    </ul>
    <h1> form get</h1>
    <ul>
      <li>two get: <%= request.getParameter("two") %>
      </li>
      <li>one get: <%= request.getParameter("one") %>
      </li>
      <li>thr get: <%= request.getParameter("thr") %>
      </li>
      <li>fou get: <%= request.getParameter("fou") %>
      </li>
      <li> fiv: <%= request.getParameter("fiv") %>
      </li>
    </ul>
  </div>




</body>


</html>