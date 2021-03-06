<html>

<head>
  <title>Animating Your Links to Life</title>
  <style>
    body {
      background-color: #EEE;
      margin: 50px;
    }
    h1, li {
      font-family: sans-serif;
    }
    h1 {
      background-color: #FFCC00;
      display: inline-block;
      padding: 10px;
    }
    li {
      margin-bottom: 30px;
      font-size: 24px;
    }
    li a{
        color : #0066FF;
        text-decoration: none;
        transition: all .2s ease-out;
        padding: 5px;
        background: linear-gradient(to bottom,
            rgba(181, 225, 255, 0) 0%,
            rgba(181, 225, 255, 0) 50%,
            rgba(181, 225, 255, 1) 50%,
            rgba(181, 225, 255, 1) 100%);
        background-repeat: no-repeat;
        background-size: 100% 200%;
    }

    li a:hover{
        background-position: 0 100%;
    }
  </style>
</head>

<body>
  <h1>Halloween Ideas</h1>
  <ul>
      <li><a href="#" target="_blank">
      Copernicus</a></li>
      <li><a href="#" target="_blank">
      Yoda</a></li>
      <li><a href="#" target="_blank">
      Mega Man</a></li>
      <li><a href="#" target="_blank">
      Gandalf</a></li>
      <li><a href="#" target="_blank">
      Bono</a></li>
  </ul>
</body>

</html>
