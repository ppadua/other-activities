<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Card Motion</title>
	<link rel="stylesheet" href="/assets/card_motion/css/dashboard.css?<?= time()?>">
	<link href='https://fonts.googleapis.com/css?family=Dosis' rel='stylesheet'>
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
	<script src="/assets/card_motion/js/dashboard.js?<?= time()?>"></script>
</head>
<body>
	<div id="wrapper">
		<ul id="users">
		</ul>
		<div id="filter">
			<div>
				<a href="">View all mentors</a>
			</div>
			<div>
				<a href="#" class="prev">< Previous</a>  <span>|</span> <a href="#" class="next">  Next ></a> 
			</div>
		</div>
	</div>
</body>
</html>