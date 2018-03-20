<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Easing Function in CSS</title>
</head>
<style media="screen">
    h1{
        font-family: Arial, Helvectica, sans-serif;
        font-size: 48px;
        color: #999;
    }
    img{
        padding: 50px;
        border-radius: 100%;
    }
    @keyframes animation_A {
        0%{
            transform : translate3d(0px, 0px, 0px);
        }
        50%{
            transform: translate3d(450px, 0px, 0px);
        }
        100%{
            transform: translate3d(0px, 0px, 0px);
        }
    }
    @keyframes animation_B {
        0%{
            transform : translate3d(0px, 0px, 0px);
        }
        50%{
            transform: translate3d(450px, 0px, 0px);
        }
        100%{
            transform: translate3d(0px, 0px, 0px);
        }
    }
    #circleA{
        animation: animation_A 4s infinite;
        background-color: blue;

    }
    #circleB{
        animation : animation_B 4s infinite;
        animation-timing-function: ease-in;
        background-color: red;
    }
</style>
<body>
    <h1>Easing Function Example</h1>
    <img id="circleA" width="245" height="245" src="" alt="">
    </br>
    <img id="circleB" width="245" height="245" src="" alt="">
</body>
</html>
