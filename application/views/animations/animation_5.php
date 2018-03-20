<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>CSS Animation Events</title>
</head>
<style>
    body{
        padding: 100px;
        background-color: #58A4B0;
    }

    #blah{
        animation : slideIn 3s infinite ease-out;
        /* animation : slideIn 3s 2 ease-out; */
        width: 350px;
        height: 350px;
        border-radius: 50%;
        background-color: #FFF;
        margin: 0 auto;
    }
    @keyframes slideIn {
        0%{
            transform: translate3d(200px, 0px, 0px);
            opacity: 0;
        }
        50%{
            opacity: .5;
        }
        100%{
            transform: translate3d(-200px, 0px, 0px);
            opacity: 0;
        }
    }

</style>
<body>
    <div id="blah"></div>
    <script>
        var myElement = document.querySelector("#blah");
        myElement.addEventListener("animationstart", start, false);
        myElement.addEventListener("animationiteration", update, false);
        myElement.addEventListener("animationend", end, false);

        function start(e){
            document.body.style.backgroundColor = "pink";
        }
        function update(e){
            document.body.style.backgroundColor = "steelBlue"
        }
        function end(e){
            document.body.style.backgroundColor = "khaki"
        }

    </script>
</body>
</html>
