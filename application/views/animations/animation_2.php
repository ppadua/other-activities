<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>CSS Transitions</title>
</head>
<style>
    body{
        background-color: #FFF;
        margin: 30px;
        margin-top: 10px;
    }

    #box{
        width: 350px;
        height: 350px;
        border: 5px black solid;
        overflow: hidden;
        background-color: #F2F2F2;
    }

    #box img{
        transform : translate3d(0, -350px, 0);
        /* transition: all .5s ease-in; */
        transition: all .5s cubic-bezier(0, 1.6, 1, -0.01);
    }

    #box img:hover{
        transform : translate3d(0, 0px, 0);
        cursor: pointer;
    }
</style>
<body>
    <div id="box">
        <img src="http://www.kirupa.com/images/html5_slider.png"  height="700" width="350" alt="">
    </div>
</body>
</html>
