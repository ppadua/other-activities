<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Slide an Image on Hover Using a CSS Transition</title>
</head>
<style media="screen">
    body{
        background-color: #EEE;
        paddin: 10px;
    }

    .pictureContainer{
        width: 150px;
        height: 150px;
        overflow: hidden;
    }

    .pictureContainer img{
        transition : transform .2s ease-in-out;
    }

    .pictureContainer img:hover{
        transform: translate3d(0px, -150px, 0px);
    }
</style>
<body>
    <div class="pictureContainer">
        <img src="http://www.kirupa.com/html/examples/images/smiley.png" alt="#">
    </div>
</body>
</html>
