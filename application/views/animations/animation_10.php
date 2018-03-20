<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Ken Burns Effects</title>
</head>
<style>
    h1{
        font-family: sans-serif;
        font-size: 48px;
        color #3399FF;
    }

    body{
        padding: 10px;
        background-color: #F4F4F4;
    }

    #imageContainer{
        width: 450px;
        height: 300px;
        overflow: hidden;
        border: 10px #333 solid;
    }

    #imageContainer img{
        animation: kenburns 10s infinite;
    }

    @keyframes kenburns{
        0%{
            opacity: 0;
        }

        5%{
            opacity: 1;
        }

        95%{
            transform: scale3d(1.5, 1.5, 1.5) translate3d(-190px, -120px, 0px);
            animation-timing-function: ease-in;
            opacity: 1;
        }
        100%{
            transform: scale3d(2,2,2) translate3d(-170px, -100px, 0px);
            opacity: 0;
        }
    }
</style>
<body>
    <h1>The Ken Burns Effect</h1>
    <div id="imageContainer">
        <img src="assets/animations/images/image.png" alt="">
    </div>
</body>
</html>
