<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Smooth Parallax Scrolling (CSS + JAVASCRIPT)</title>
</head>
<style>
body {
    background-color: #EEE;
}
#content {
    padding: 50px;
    margin: 40px;
    background-color: rgba(255, 255, 255, .48);
    text-align: center;
}
#content p {
    font-family: Helvetica, sans-serif;
    font-size: 28px;
    line-height: 40px;
    color: #111;
}
h1 {
    text-transform: capitalize;
    font-family: sans-serif;
    font-size: 40px;
    padding: 10px;
    margin: 40px;
    background-color: rgba(20, 20, 20, .8);
    color: #FFF;
}

#bigYellowCircle{
    background-image: url("https://www.kirupa.com/images/yellow_circle.svg");
    background-size: 90%;
    width: 100vw;
    height: 100vw;
    position: fixed;
    background-repeat: no-repeat;
    z-index: -10;
    background-position: center center;
    top: 0;
    opacity: .75;
}
#blueSquare{
    background-image: url("https://www.kirupa.com/images/blue_square.svg");
    background-size: 10%;
    width: 100vw;
    height: 100vw;
    position: fixed;
    background-repeat: no-repeat;
    z-index: -20;
    background-position: 97% bottom;
    top: 0;
    opacity: .75;
}
#greenPentagon{
    background-image: url("https://www.kirupa.com/images/green_pentagon.svg");
    background-size: 50%;
    width: 100vw;
    height: 100vw;
    position: fixed;
    background-repeat: no-repeat;
    z-index: -30;
    background-position: 5% top;
    top: 0;
    opacity: .75;
}
</style>
<body>
<div id="bigYellowCircle"></div>
<div id="blueSquare"></div>
<div id="greenPentagon"></div>

<h1>Parallax ralax</h1>
<div id="content">
    <p>All work and no play Jack a dull boy</p>
    <p>All work and no play Jack a dull boy</p>
    <p>All work and no play Jack a dull boy</p>
    <p>All work and no play Jack a dull boy</p>
    <p>All work and no play Jack a dull boy</p>
    <p>All work and no play Jack a dull boy</p>
    <p>All work and no play Jack a dull boy</p>
    <p>All work and no play Jack a dull boy</p>
    <p>All work and no play Jack a dull boy</p>
    <p>All work and no play Jack a dull boy</p>
    <p>All work and no play Jack a dull boy</p>
    <p>All work and no play Jack a dull boy</p>
    <p>All work and no play Jack a dull boy</p>
    <p>All work and no play Jack a dull boy</p>
    <p>All work and no play Jack a dull boy</p>
    <p>All work and no play Jack a dull boy</p>
    <p>All work and no play Jack a dull boy</p>
    <p>All work and no play Jack a dull boy</p>
    <p>All work and no play Jack a dull boy</p>
    <p>All work and no play Jack a dull boy</p>
    <p>All work and no play Jack a dull boy</p>
    <p>All work and no play Jack a dull boy</p>
    <p>All work and no play Jack a dull boy</p>
    <p>All work and no play Jack a dull boy</p>
    <p>All work and no play Jack a dull boy</p>
    <p>All work and no play Jack a dull boy</p>
    <p>All work and no play Jack a dull boy</p>
    <p>All work and no play Jack a dull boy</p>
    <p>All work and no play Jack a dull boy</p>
    <p>All work and no play Jack a dull boy</p>
</div>
<script>
    window.addEventListener("DOMContentLoaded", scrollLoop, false);
    var bigYellowCircle = document.querySelector("#bigYellowCircle");
    var blueSquare = document.querySelector("#blueSquare");
    var greenPentagon = document.querySelector("#greenPentagon");

    var xScrollPosition;
    var yScrollPosition;
    function scrollLoop(e){
        xScrollPosition = window.scrollX;
        yScrollPosition = window.scrollY;

        setTranslate(0, yScrollPosition * -0.2, bigYellowCircle);
        setTranslate(0, yScrollPosition * -1.5, blueSquare);
        setTranslate(0, yScrollPosition * .5, greenPentagon);

        requestAnimationFrame(scrollLoop);
    }
    function setTranslate(xPos, yPos, el){
        el.style.transform = "translate3d("+xPos+","+yPos+"px, 0";
    }
</script>
</body>
</html>
