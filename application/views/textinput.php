<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Text Input</title>
	<link rel="stylesheet" href="/assets/textinput/css/dashboard.css?<?= time()?>">
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
	<script src="/assets/textinput/js/dashboard.js?<?= time()?>"></script>
	<link rel="stylesheet" href="../assets/asana/css/vendor/font-awesome/font-awesome.min.css">

</head>
<body>
	<div id="wrapper">
		<section id="hideo">
			<h3>Hideo</h3>
			<div class="hideo_content">
				<label for="hideo_user" class="hideo_label"><span class="hideo_span"><i class="fa fa-user hideo_icon"></i></span></label>
				<input type="text" id="hideo_user" class="hideo_input">
			</div>
			<div class="hideo_content">
				<label for="hideo_email" class="hideo_label"><span class="hideo_span"><i class="fa fa-envelope hideo_icon"></i></span></label>
				<input type="text" id="hideo_email" class="hideo_input">
			</div>
			<div class="hideo_content">
				<label for="hideo_lock" class="hideo_label"><span class="hideo_span"><i class="fa fa-lock hideo_icon"></i></span></label>
				<input type="text" id="hideo_lock" class="hideo_input">
			</div>
		</section>	
		<section id="hoshi">
			<h3>Hoshi</h3>
			<div class="hoshi_content" data-color="green">
				<input type="text" id="hoshi_user" class="hoshi_input">
				<label for="hoshi_user" class="hoshi_label"><span class="hoshi_span">Name</span></label>
				<div class="bar">
					<div class="hidden_bar"></div>
					<div class="hoshi_bar"></div>
				</div>
			</div>
			<div class="hoshi_content"  data-color="blue">
				<input type="text" id="hoshi_email" class="hoshi_input">
				<label for="hoshi_email" class="hoshi_label"><span class="hoshi_span">Street</span></label>
				<div class="bar">
					<div class="hidden_bar"></div>
					<div class="hoshi_bar"></div>
				</div>
			</div>
			<div class="hoshi_content"  data-color="orange">
				<input type="text" id="hoshi_lock" class="hoshi_input">
				<label for="hoshi_lock" class="hoshi_label"><span class="hoshi_span">Town</span></label>
				<div class="bar">
					<div class="hidden_bar"></div>
					<div class="hoshi_bar"></div>
				</div>
			</div>
		</section>		
		<section id="haruki">
			<h3>Haruki</h3>
			<div class="haruki_content" >
				<input type="text" id="haruki_fname" class="haruki_input">
				<label for="haruki_fname" class="haruki_label"><span class="haruki_span">First Name</span></label>
			</div>
			<div class="haruki_content" >
				<input type="text" id="haruki_lname" class="haruki_input">
				<label for="haruki_lname" class="haruki_label"><span class="haruki_span">Last Name</span></label>
			</div >
			<div class="haruki_content" >
				<input type="text" id="haruki_email" class="haruki_input">
				<label for="haruki_email" class="haruki_label"><span class="haruki_span">Email</span></label>
			</div>
		</section>		
		<section id="juro">
			<h3>Juro</h3>
			<div class="juro_content">
				<input class="juro_input" type="text" id="juro_fname">
				<label class="juro_label" for="juro_fname">
					<span class="juro_span">First Name</span>
				</label>
			</div>
			<div class="input input--juro juro_content">
				<input class="juro_input" type="text" id="juro_lname">
				<label class="juro_label" for="juro_lname">
					<span class="juro_span">Last Name</span>
				</label>
			</div>
			<div class="input input--juro juro_content">
				<input class="juro_input" type="text" id="juro_mname">
				<label class="juro_label" for="juro_mname">
					<span class="juro_span">Maiden Name</span>
				</label>
			</div>
		</section>
	</div>
</body>
</html>