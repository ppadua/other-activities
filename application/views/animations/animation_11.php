<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Getting Jittery on Hover (Using a CSS Animation)</title>
</head>
<style>
    body{
        background-color: #CCC;
        margin: 100px
    }

    .square{
        width: 450px;
        height:  450px;
        background-color: rgb(0, 128, 187);
    }

    .square:hover{
        animation: jittery .3s ease-in-out infinite;
    }

    @keyframes jittery {
        10%{
            transform :translate3d(-2px, -3px, 0px) scale3d(1.01, 1.01, 0);
        }
        20%{
            transform :translate3d(3px, 2px, 0px) scale3d(.99, .99, 0);
        }
        30%{
            transform :translate3d(-4px, -5px, 0px) scale3d(1.01, 1.01, 0);
        }
        40%{
            transform :translate3d(2px, 3px, 0px) scale3d(1, 1, 0);
        }
        50%{
            transform :translate3d(-1px, -2px, 0px) scale3d(.98, .98, 0);
        }
        60%{
            transform :translate3d(0px, 3px, 0px) scale3d(1.02, 1.02, 0);
        }
        70%{
            transform :translate3d(-2px, -4px, 0px) scale3d(1, 1, 0);
        }
        80%{
            transform :translate3d(3px, 5px, 0px) scale3d(.99, .99, 0);
        }
        90%{
            transform :translate3d(-5px, -3px, 0px) scale3d(1.1, 1.1, 0);
        }
        100%{
            transform :translate3d(3px, 1px, 0px) scale3d(.95, .95, 0);
        }
    }
</style>
<body>
    <div class="square"></div>
</body>
</html>
