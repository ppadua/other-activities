<html>
<head>
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Creating a Smooth Sliding Menu</title>
  <link rel="stylesheet" href="index.css">
<style>
body {
  background-color: #EEE;
  font-family: Helvetica, Arial, sans-serif;
  padding: 25px;
  margin: 0;
  overflow: auto;
}

#container li {
  margin-bottom: 10px;
}

#roundButton {
  background-color: #96D9FF;
  margin-bottom: 20px;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 10px solid #0065A6;
  outline: none;
  transition: transform .3s cubic-bezier(0, .52, 0, 1);
}

#roundButton:hover {
  background-color: #96D9FF;
  cursor: pointer;
  border-color: #003557;
  transform: scale(1.2, 1.2);
}

#roundButton:active {
  border-color: #003557;
  background-color: #FFF;
}
#flyoutMenu {
  width: 100vw;
  height: 100vh;
  background-color: #FFE600;
  position: fixed;
  top: 0;
  left: 0;
  transform: translate3d(-100vw, 0, 0);
  transition: transform .3s cubic-bezier(0, .52, 0, 1);
  overflow: hidden;
}

#flyoutMenu h2 a {
  color: #333;
  margin-left: 15px;
  text-decoration: none;
}
#flyoutMenu.show{
    transform: translate3d(0vw, 0, 0);
}
#flyoutMenu h2 a:hover {
  text-decoration: underline;
}
</style>
</head>
<body>
  <button id="roundButton"></button>
  <div id="flyoutMenu">
    <h2><a href="#">Home</a></h2>
    <h2><a href="#">About</a></h2>
    <h2><a href="#">Contact</a></h2>
    <h2><a href="#">Search</a></h2>
  </div>
  <div id="container">
    <p>Can you spot the item that doesn't belong?</p>
    <ul>
      <li>Lorem</li>
      <li>Ipsum</li>
      <li>Dolor</li>
      <li>Sit</li>
      <li>Bumblebees</li>
      <li>Aenean</li>
      <li>Consectetur</li>
    </ul>
  </div>

  <script>
        var roundButton = document.querySelector("#roundButton");
        var flyoutMenu = document.querySelector("#flyoutMenu");

        roundButton.addEventListener("click", showMenu, false);
        flyoutMenu.addEventListener("click", hideMenu, false);

        function showMenu(e){
            flyoutMenu.classList.add("show");
            document.body.style.overflow = "hidden";
        }
        function hideMenu(e){
            flyoutMenu.classList.remove("show");
            e.stopPropagation();
            document.body.style.overflow = "auto";
        }
  </script>
</body>

</html>
