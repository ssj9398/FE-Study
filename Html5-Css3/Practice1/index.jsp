<!DOCTYPE html>
<html lang="UTF-8">

<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <link rel="stylesheet" href="style.css?01" />
  <link href="https://fonts.googleapis.com/css?family=Source+Sans+Pro&display=swap" rel="stylesheet" />
  <title>Nav bar</title>
  <script src="https://kit.fontawesome.com/2d323a629b.js" crossorigin="anonymous"></script>
  <script src="main.js" defer></script>
  <script src="https://code.jquery.com/jquery-3.2.1.min.js"></script>
  <script>
    $(document).ready(function () {
      // code ...
    });
  </script>
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
      <li><a href="#">Menu1</a>
        <ul><a href="#">list</a></ul>
        <ul><a href="#">list</a></ul>
        <ul><a href="#">list</a></ul>
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
  <ul class="mode__change">
    <div class="themed"> </div>
    <div class="box themed2"> </div>
    <div class="box themed3"> </div>
    <div class="box themed4" id="theme4"> </div>
  </ul>
  <div class="contents">
    <div id="top2" style="display: block; bottom: 200px;"></div>
    <form action="layout.jsp">
      <input type="submit" method="get">
      <h1>form get</h1>
      <p> text1 : <input type="text" name="one"></p>
      <h2>text2</h2>
      <p>text2 :<input type="text" name="two"></p>
      <h2>text3</h2>
      <p>text3 :<input type="text" name="thr"></p>
      <h2>text4</h2>
      <p>text4 :<input type="text" name="fou"></p>
      <h2>text5</h2>
      <p>text5 :<input type="text" name="fiv" id="a"></p>
    </form>

    <a href="#">link</a>
    <a href="#">link</a>
  </div>
  this.response;
</body>

<script>
  var req = new XMLHttpRequest();
  req.onreadystatechange = function () {
    console.log(this.readyState, this.status);
    if (this.readyState == 4 && this.status == 200) {
      console.log(this.response);
    }
  }
  req.open("GET", "./layout.jsp");
  req.send();
  $("#a").value(req);
</script>

</html>