<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Move Element to Mouse Click Position</title>
	<style>
		body{
			background-color: #FFF;
			padding: 0;
			margin: 0;
		}

		#contentContainer{
			width: 550px;
			height: 350px;
			border: 15px #EDEDED solid;
			overflow: hidden;
			background-color: #F2F2F2;
			cursor: pointer;
		}

		#thing{
			width: 75px;
			height: 75px;
			background-color: rgb(255, 207, 0);
			border-radius: 50%;
			border: 15px rgb(255,199, 0) solid;

			transform : translate3d(50px, 50px, 0);
			transition: transform .3s cubic-bezier(0, .64, .52, .24);
		}
	</style>
</head>
<body>
	<div id="contentContainer">
		<div id="thing"></div>
	</div>
	<script>
		var theThing = document.querySelector("#thing");
		var container = document.querySelector("#contentContainer");
		container.addEventListener("click", getClickPosition, false);

		function getClickPosition(e){
			var parentPosition = getPosition(container)
			var xPosition = e.clientX - parentPosition.x - (theThing.offsetWidth / 2);
			var yPosition = e.clientY - parentPosition.y - (theThing.offsetHeight /2);
			var translate3dValue = "translate3d("+xPosition+"px,"+yPosition+"px, 0)";
			theThing.style.transform = translate3dValue;
		}

		function getPosition(element){
			var xPosition = 0;
			var yPosition = 0;

			while(element){
				xPosition += (element.offsetLeft - element.scrollLeft + element.clientLeft);
				yPosition += (element.offsetTop - element.scrollTop + element.clientTop);
				element = element.offsetParent;
			}
			return {
				x: xPosition,
				y: yPosition
			}
		}
	</script>
</body>
</html>
