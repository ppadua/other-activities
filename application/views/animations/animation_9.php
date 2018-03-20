<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>CSS Transition Event</title>
</head>
<style media="screen">
    body{
        padding: 100px;
        background-color: #745750;
    }
    #count{
        padding-top: 130px;
        font-family: sans-serif;
        font-size: 72px;
    }

    #blah{
        width: 350px;
        height: 350px;
        border-radius: 50%;
        background-color: #FFF;
        margin: 0 auto;
        text-align: center;
        transition : transform .2s cubic-bezier(.26, 1.39, 1, 1.3);
    }

    #blah:hover{
        transform: scale3d(1.2, 1.2, 1);
        opacity: .8;
        cursor: pointer;
    }
</style>
<body>
    <div id="blah">
        <h1 id="count">0</h1>
    </div>

    <script>
        var myElement = document.querySelector("#blah");
        myElement.addEventListener("transitionend", updateCount, false);

        var h1Element = document.querySelector("#count");
        var count = 0;

        function updateCount(e){
            count++;

            h1Element.textContent = count;
        }


    </script>
</body>
</html>
