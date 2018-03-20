<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Meet the Actual Easing Functions</title>
</head>
<style>
.circle {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    margin: 30px;
    animation: slide 5s infinite;
}
#circle1 {
    animation-timing-function: ease-in-out;
    background-color: #E84855;
}
#circle2 {
    animation-timing-function: linear;
    background-color: #0099FF;
}
#circle3 {
    animation-timing-function: cubic-bezier(0, 1, .76, 1.14);
    background-color: #FFCC00;
}
#container {
    width: 550px;
    background-color: #FFF;
    border: 3px #CCC dashed;
    border-radius: 10px;
    padding-top: 5px;
    padding-bottom: 5px;
    margin: 0 auto;
}
@keyframes slide {
    0% {
        transform: translate3d(0, 0, 0);
    }
    25% {
        transform: translate3d(380px, 0, 0);
    }
    50% {
        transform: translate3d(0, 0, 0);
    }
    100% {
        transform: translate3d(0, 0, 0);
    }
}
</style>
<body>

<div id="container">
    <div class="circle" id="circle1"></div>
    <div class="circle" id="circle2"></div>
    <div class="circle" id="circle3"></div>
</div>
</body>
</html>
