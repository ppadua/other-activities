<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Creating Buttery Smooth Animation in CSS</title>
</head>
<style media="screen">
    body{
        background-color: #EEE;
        paddin: 10px;
    }

    .pictureContainer{
        border: 1px solid #CCCCCC;
        width: 150px;
        height: 150px;
        overflow: hidden;
        margin: 5px;
        display: inline-block;
        float: left;
    }

    .pictureContainer img{
        position: relative;
        top: 0px;
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
    <div class="pictureContainer">
        <img src="http://www.kirupa.com/html/examples/images/tongue.png" alt="#">
    </div>
     <div class="pictureContainer">
        <img src="http://www.kirupa.com/html/examples/images/meh.png" alt="#">
    </div>
    <div class="pictureContainer">
        <img src="http://www.kirupa.com/html/examples/images/sad.png" alt="#">
    </div>
</body>
</html>
