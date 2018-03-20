<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title></title>
	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
	<link rel="stylesheet" href="/assets/tower_defense/tower_defense.css">
	<script src="https://code.jquery.com/jquery-3.3.1.js" integrity="sha256-2Kok7MbOyxpgUVvAk/HJ2jigOSYS2auK4Pfzbm7uH60=" crossorigin="anonymous"></script>
</head>
<body>
	<div id="wrapper">
		<table id="table_game">
		</table>
	</div>
	<div id="game_info">
		<h3>Wave # <span id="wave_number"></span></h3>
		<p>Life Pts: <span id="life_points"></span></p>
		<p>Enemy Destroyed : <span id="enemy_destroyed"></span></p>
		<p>Resources: <span id="resources"></span></p>
	</div>
	<div id="icons">
		<i class="fa fa-arrows-v defense_icon" aria-hidden="true" id="vertical_arrow" onclick="selected_defense(this)"></i>
		<i class="fa fa-arrows-h defense_icon" aria-hidden="true" id="horizontal_arrow" onclick="selected_defense(this)"></i>
		<i class="fa fa-certificate defense_icon" aria-hidden="true" id="multi_arrow" onclick="selected_defense(this)"></i>
	</div>
	<button id="start_game">Start Game <span id="start_game_in">(in )</span></button>
	<div id="game_over_modal" class="hidden">
		<h1>GAME OVER</h1>
		<h2>You survived <span class="wave_number">0</span> waves</h2>
		<h3>Destroy <span class="enemy_destroyed">0</span> enemies</h3>
		<button onclick="location.reload()">Play Again</button>
	</div>
	<script src="/assets/tower_defense/tower_defense.js"></script>
</body>
</html>