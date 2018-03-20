<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Recreating the Blink Tag</title>
</head>
<style>
body{
    background: #CCC;
    margin: 100px
}
.blinkNew{
    font-size: 240px;
    font-family : sans-serif;
    color:rgb(0,137, 226);
    animation: blink 1s infinite;
}
@keyframes blink {
    0%{
        opacity: 1;
    }
    75%{
        opacity: 1;
    }
    76%{
        opacity: 0;
    }
    100%{
        opacity: 0;
    }
}
</style>
<body>
    <h1 class="blinkNew">Hello</h1>
</body>
</html>
