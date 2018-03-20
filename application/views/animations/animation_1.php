<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Web Animate Example</title>
</head>
<style>
    .circle{
        width: 200px;
        height: 200px;
        background-color: #0099FF;
        border-radius: 50%;
    }

    body{
        background-color: #fff;
        padding: 50px;
    }
    @keyframes slide{
        0%{
            transform : translate3d(0px, 0px, 0px);
        }
        20%{
            transform : translate3d(800px, 300px, 0px);
            opacity: .2;
        }
        100%{
            transform: translate3d(0px, 0px, 0px);
        }
    }
    #myCircle{
        animation: slide 2s infinite;
    }
</style>
<body>
    <div id="myCircle" class="circle"></div>
</body>
</html>
