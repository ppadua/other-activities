<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Animation Loops in Javascript using requestAnimationFrame</title>
</head>
<style>
    body{
        background-color: #FFF;
        margin: 30px;
        margin-top: 10px;
    }

    #contentContainer{
        width: 550px;
        height: 350px;
        border: 5px black solid;
        overflow: hidden;
        background-color: #FFFF00;
    }

    #thing{
        position: relative;
        left: 50px;
        top: 25px;
    }
</style>
<body>
    <div id="contentContainer">
        <img id="thing" src="http://www.kirupa.com/html5/images/donut.png" height="300" width="300" alt="">
    </div>

    <script type="text/javascript">
        var theThing = document.querySelector("#thing");
        var currentPos = 0;
        var requestAnimationFrame = window.requestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        window.msRequestAnimatonFrame

        function moveThing(){
            currentPos += 5;

            theThing.style.left = currentPos +"px"

            if(Math.abs(currentPos) >= 900)
                currentPos = -500

            requestAnimationFrame(moveThing)
        }

        moveThing();
    </script>
</body>
</html>
