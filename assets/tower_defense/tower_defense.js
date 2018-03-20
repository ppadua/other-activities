var life_points = 40;
var wave_level = 1;
var resources = 10;

game_init();

var max_path = $(".soil_tile").length;
var defense_type = "";
var add_enemy_timer = 2;
var enemies = [];
var towers = [];
var tower_index = 0;
var is_new_wave = false;
var is_start = false; 
var is_first_wave = true;
var game_timer_start = 40;
var bug_died = 0;
var count_bug_dead =  0;
var click_start = true;
var prev_class = "";

document.getElementById("start_game").onclick = function(){
	if(!is_start){
		if(click_start){
			timer();
			click_start = false;
		}

		is_start = true;
		resources = resources+5;
		is_new_wave = false;
		is_first_wave = false;
		$("#game_info #resources").html(resources);
		$("#start_game").attr("disabled", "disabled")

		if(resources >= 2){
			$("#icons #vertical_arrow").removeClass("disabled");
			$("#icons #horizontal_arrow").removeClass("disabled");
		}
		if(resources >= 5){
			$("#icons #multi_arrow").removeClass("disabled");
		}
	}
}

$("body").on("click", ".arrow_display", function(){
	if($(".fa-money").length == 1){
		$(".fa-money").attr("class", prev_class);
		prev_class = "";
	}

	var tower =  $(this);
	prev_class = tower.attr("class");
	tower.attr("class", "fa fa-money");
	$(".show_range").remove();
});

$("body").on("click", ".tile_row td", function(){
	var tile =  $(this);

	if(tile.children(".fa-money").length != 1){
		$(".fa-money").attr("class", prev_class);
		prev_class = "";
	}
});

$("body").on("click", ".fa-money", function(){
	var money = $(this);
	towers[money.attr("data-tower-index")].is_stop = true;
	resources = resources + parseInt(money.attr("data-refund"));
	money.remove();
	$("#game_info #resources").html(resources);

	if(resources >= 2){
		$("#icons #vertical_arrow").removeClass("disabled");
		$("#icons #horizontal_arrow").removeClass("disabled");
	}
	if(resources >= 5){
		$("#icons #multi_arrow").removeClass("disabled");
	}

	$(".show_range").remove();
});

$("body").on("mouseover", ".arrow_display", function(){
	var tower = $(this);
	var data_i = tower.closest("td").attr("data_i")
	var data_j = tower.closest("td").attr("data_j")
	var tower_index = tower.closest("td").attr("data-tower-index")

	if(tower.hasClass("fa-arrows-h")){
		show_range("left", data_i, data_j, true, tower_index, true);
		show_range("right", data_i, data_j, true, tower_index, true);
	}
	else if(tower.hasClass("fa-arrows-v")){
		show_range("top", data_i, data_j, true, tower_index, true);
		show_range("down", data_i, data_j, true, tower_index, true);
	}
	else{
		show_range("left", data_i, data_j, false, tower_index, true);
		show_range("right", data_i, data_j, false, tower_index, true);
		show_range("top", data_i, data_j, false, tower_index, true);
		show_range("down", data_i, data_j, false, tower_index, true);
	}
});

$("body").on("mouseout", ".arrow_display", function(){
	$(".show_range").remove();
});


function enemy(x, y, life, is_elite){
	this.times_move = 0;
	this.life = life;
	this.move_index = 0;
	this.is_elite = is_elite;
	this.move = function(enemy_index){
		if(enemies[enemy_index].move_index != max_path){
			if(enemies[enemy_index].life >= 1){
				enemies[enemy_index].move_index++
				$("#table_game").find("#soil_"+enemies[enemy_index].move_index).append('<i class="fa fa-bug bug_'+enemy_index+' '+(life == 10 ? 'is_elite' : '' )+'" aria-hidden="true" data-bug-index="'+enemy_index+'"></i>');
				$("#table_game").find("#soil_"+(parseInt(enemies[enemy_index].move_index) - 1)).find(".fa-bug").remove();
			}
		}
		else{
			/* start new wave */
			if(!this.is_elite)
				life_points--;
			else
				life_points = life_points - 5;
			
			$("#table_game .fa-bug").remove();

			if(life_points <= 0){
				$("#game_over_modal").removeClass("hidden");
				$("#game_over_modal .wave_number").html(wave_level);
				$("#game_over_modal .enemy_destroyed").html(bug_died);
				$("#game_info #life_points").html(0);
			}
			else{
				enemies[enemy_index].move_index = -5;
				/* reduce life points and change color */
				$("#game_info #life_points").html(life_points);

				if(life_points <= 20)
					$("#game_info #life_points").css("color", "red")
				if(life_points <= 30 && life_points > 20)
					$("#game_info #life_points").css("color", "orange");

				if(enemies[enemies.length - 1].move_index == -5){
					enemies = [];
					is_new_wave = true;
					wave_level++;
					is_start = false;
					is_first_wave = false;
					game_timer_start = 30;
					count_bug_dead = 0;
					$("#game_info #wave_number").html(wave_level);
					$("#start_game").removeAttr("disabled")
				}
			}
		}
	}
}

function tower(data_i, data_j, type, index){
	this.type = type;
	this.index = index;
	this.data_i = parseInt(data_i);
	this.data_j = parseInt(data_j);
	this.shoot_left = 0;
	this.shoot_right = 0;
	this.shoot_top = 0;
	this.shoot_down = 0;
	this.shoot_down_right = 0;
	this.shoot_top_right = 0;
	this.shoot_top_left = 0;
	this.shoot_down_left = 0;
	this.shoot_index = 0;
	this.is_stop = false
	this.pause = false
	this.shoot = function(){
		var type = this.type;
		setTimeout(function(){
			if(towers[index] != undefined){
				if(!towers[index].is_stop && !towers[index].pause){
					towers[index].shoot_index++;
					if(type == "horizontal_arrow"){
						/*shoot left and right*/
						if(towers[index].shoot_index <= 4){
							if(
								show_range("left", data_i, data_j, true, index) ||
								show_range("right", data_i,data_j, true, index)
							){
								towers[index].shoot_left--;
								towers[index].shoot_right++;
								shooting_angle(towers[index].shoot_left, "left",data_i,data_j, true, index);
								shooting_angle(towers[index].shoot_right, "right",data_i,data_j, true, index);
							}
							else{
								$(".tile_row").find("td[data_i_j='"+data_i+"_"+eval(parseInt(data_j) + towers[index].shoot_left)+"']").children("span.arrrow").remove();
								$(".tile_row").find("td[data_i_j='"+data_i+"_"+eval(parseInt(data_j) + towers[index].shoot_right)+"']").children("span.arrrow").remove();
							}
						}
						else{
							$(".tile_row").find("td[data_i_j='"+data_i+"_"+eval(parseInt(data_j) + towers[index].shoot_left)+"']").children("span.arrrow").remove();
							$(".tile_row").find("td[data_i_j='"+data_i+"_"+eval(parseInt(data_j) + towers[index].shoot_right)+"']").children("span.arrrow").remove();
							towers[index].shoot_left = 0;
							towers[index].shoot_right = 0;
							towers[index].shoot_index = 0;
						}
					}
					else if(type == "vertical_arrow"){
						if(towers[index].shoot_index <= 4){
							if(
								show_range("top", data_i, data_j, true, index) ||
								show_range("down", data_i,data_j, true, index)
							){
								towers[index].shoot_top--;
								towers[index].shoot_down++;
								shooting_angle(towers[index].shoot_top, "top",data_i,data_j, true, index);
								shooting_angle(towers[index].shoot_down, "down",data_i,data_j, true, index);
							}
							else{
								$(".tile_row").find("td[data_i_j='"+eval(parseInt(data_i) + towers[index].shoot_top)+"_"+data_j+"']").children("span.arrrow").remove();
								$(".tile_row").find("td[data_i_j='"+eval(parseInt(data_i) + towers[index].shoot_down)+"_"+data_j+"']").children("span.arrrow").remove();
							}
						}
						else{
							$(".tile_row").find("td[data_i_j='"+eval(parseInt(data_i) + towers[index].shoot_top)+"_"+data_j+"']").children("span.arrrow").remove();
							$(".tile_row").find("td[data_i_j='"+eval(parseInt(data_i) + towers[index].shoot_down)+"_"+data_j+"']").children("span.arrrow").remove();
							towers[index].shoot_top = 0;
							towers[index].shoot_down = 0;
							towers[index].shoot_index = 0;
						}
					}
					else if(type == "multi_arrow"){
						if(towers[index].shoot_index <= 1){
							if(show_range("top", data_i, data_j, false, index) ||
								show_range("down", data_i, data_j, false, index) ||
								show_range("left", data_i, data_j, false, index) ||
								show_range("right", data_i, data_j, false, index) 
							){
								towers[index].shoot_top--;
								towers[index].shoot_down++;
								towers[index].shoot_left--;
								towers[index].shoot_right++;
								towers[index].shoot_down_right++;
								towers[index].shoot_top_right++;
								towers[index].shoot_top_left--;
								towers[index].shoot_down_left--;
								shooting_angle(towers[index].shoot_top, "top", data_i, data_j, false, index);
								shooting_angle(towers[index].shoot_down, "down", data_i, data_j, false, index);
								shooting_angle(towers[index].shoot_left, "left", data_i, data_j, false, index);
								shooting_angle(towers[index].shoot_right, "right", data_i, data_j, false, index);
								shooting_angle(towers[index].shoot_down_right, "down_right", data_i, data_j, false, index);
								shooting_angle(towers[index].shoot_top_right, "top_right", data_i, data_j, false, index);
								shooting_angle(towers[index].shoot_top_left, "top_left", data_i, data_j, false, index);
								shooting_angle(towers[index].shoot_down_left, "down_left", data_i, data_j, false, index);
							/*remove bullets*/
							}
						}
						setTimeout(function(){
							$(".tile_row").find("td[data_i_j='"+data_i+"_"+eval(parseInt(data_j) + towers[index].shoot_left)+"']").children("span.multi").remove();
							$(".tile_row").find("td[data_i_j='"+data_i+"_"+eval(parseInt(data_j) + towers[index].shoot_right)+"']").children("span.multi").remove();
							$(".tile_row").find("td[data_i_j='"+eval(parseInt(data_i) + towers[index].shoot_top)+"_"+data_j+"']").children("span.multi").remove();
							$(".tile_row").find("td[data_i_j='"+eval(parseInt(data_i) + towers[index].shoot_down)+"_"+data_j+"']").children("span.multi").remove();
							$(".tile_row").find("td[data_i_j='"+eval(parseInt(data_i) + towers[index].shoot_down_right)+"_"+ eval(parseInt(data_j) + 1)+"']").children("span.multi").remove()
							$(".tile_row").find("td[data_i_j='"+eval(parseInt(data_i) + towers[index].shoot_top_right - 2)+"_"+ eval(parseInt(data_j) + 1)+"']").children("span.multi").remove()
							$(".tile_row").find("td[data_i_j='"+eval(parseInt(data_i) + towers[index].shoot_top_left)+"_"+ eval(parseInt(data_j) - 1)+"']").children("span.multi").remove()
							$(".tile_row").find("td[data_i_j='"+eval(parseInt(data_i) + towers[index].shoot_down_left + 2)+"_"+ eval(parseInt(data_j) - 1)+"']").children("span.multi").remove()
							towers[index].shoot_top = 0;
							towers[index].shoot_down = 0;
							towers[index].shoot_left = 0;
							towers[index].shoot_right = 0;
							towers[index].shoot_down_right = 0;
							towers[index].shoot_top_right = 0;
							towers[index].shoot_top_left = 0;
							towers[index].shoot_down_left = 0;
							towers[index].shoot_index = 0;
						}, 500)
					}
				}
				else{
					$(".tile_row").find("td[data_i_j='"+data_i+"_"+eval(parseInt(data_j) + towers[index].shoot_left)+"']").children("span").remove();
					$(".tile_row").find("td[data_i_j='"+data_i+"_"+eval(parseInt(data_j) + towers[index].shoot_right)+"']").children("span").remove();
					$(".tile_row").find("td[data_i_j='"+eval(parseInt(data_i) + towers[index].shoot_top)+"_"+data_j+"']").children("span").remove();
					$(".tile_row").find("td[data_i_j='"+eval(parseInt(data_i) + towers[index].shoot_down)+"_"+data_j+"']").children("span").remove();
				}
			}
		}, 250)
	}
}
/* Shooting angle depends on what tower did the user dropped*/
function shooting_angle(test, type, data_i, data_j, is_arrow, tower_index){
	var tower_index = parseInt(tower_index);
	if(type == "left" || type == "right" ){
		var tile_row = $(".tile_row").find("td[data_i_j='"+data_i+"_"+eval(parseInt(data_j) + test)+"']");
		var tile_row_prev = (type == "left") ? $(".tile_row").find("td[data_i_j='"+data_i+"_"+(eval(parseInt(data_j) + test) + 1)+"']") : $(".tile_row").find("td[data_i_j='"+data_i+"_"+(eval(parseInt(data_j) + test) - 1)+"']");
	}
	else if(type == "top" || type == "down" ){
		var tile_row = $(".tile_row").find("td[data_i_j='"+eval(parseInt(data_i) + test)+"_"+data_j+"']");
		var tile_row_prev = (type == "top") ? $(".tile_row").find("td[data_i_j='"+(eval(parseInt(data_i) + test) + 1)+"_"+data_j+"']") : $(".tile_row").find("td[data_i_j='"+(eval(parseInt(data_i) + test) - 1)+"_"+data_j+"']");
	}
	else{
		switch(type){
			case "down_right":
				var tile_placement = "td[data_i_j='"+eval(parseInt(data_i) + test)+"_"+eval(parseInt(data_j) + test)+"']";
				var tile_placement_prev = "td[data_i_j='"+eval(parseInt(data_i) + test - 1)+"_"+eval(parseInt(data_j) + test - 1)+"']";
			break
			case "top_left":
				var tile_placement = "td[data_i_j='"+(eval(parseInt(data_i) + test))+"_"+(eval(parseInt(data_j) + test))+"']";
				var tile_placement_prev = "td[data_i_j='"+eval(parseInt(data_i) + test + 1)+"_"+eval(parseInt(data_j) + test + 1)+"']";
			break
			case "down_left":
				var tile_placement = "td[data_i_j='"+(eval(parseInt(data_i) + test) + 2)+"_"+(eval(parseInt(data_j) + test))+"']";
				var tile_placement_prev = "td[data_i_j='"+eval(parseInt(data_i) + test + 1)+"_"+eval(parseInt(data_j) + test + 1)+"']";
			break
			case "top_right":
				var tile_placement = "td[data_i_j='"+(eval(parseInt(data_i) + test) - 2)+"_"+(eval(parseInt(data_j) + test))+"']";
				var tile_placement_prev = "td[data_i_j='"+eval(parseInt(data_i) + test - 1)+"_"+eval(parseInt(data_j) + test - 1)+"']";
			break
		}

		var tile_row = $(".tile_row").find(tile_placement);
		var tile_row_prev = $(".tile_row").find(tile_placement_prev);
	}
	
	if(tile_row.children(".fa-bug").length != 0){
		var bug_index = parseInt(tile_row.children(".fa-bug").attr("data-bug-index"));
		towers[tower_index].pause = true;
		tile_row_prev.children("span").remove();
		/* Reset tower shooting angle*/
		setTimeout(function(){
			towers[tower_index].pause = false;
			$(".tile_row").find("td[data_i_j='"+data_i+"_"+eval(parseInt(data_j) + towers[tower_index].shoot_left)+"']").children("span").remove();
			$(".tile_row").find("td[data_i_j='"+data_i+"_"+eval(parseInt(data_j) + towers[tower_index].shoot_right)+"']").children("span").remove();
			$(".tile_row").find("td[data_i_j='"+eval(parseInt(data_i) + towers[tower_index].shoot_top)+"_"+data_j+"']").children("span").remove();
			$(".tile_row").find("td[data_i_j='"+eval(parseInt(data_i) + towers[tower_index].shoot_down)+"_"+data_j+"']").children("span").remove();
			towers[tower_index].shoot_left = 0;
			towers[tower_index].shoot_right = 0;
			towers[tower_index].shoot_top = 0;
			towers[tower_index].shoot_down = 0;
			towers[tower_index].shoot_down_right = 0;
			towers[tower_index].shoot_top_right = 0;
			towers[tower_index].shoot_top_left = 0;
			towers[tower_index].shoot_down_left = 0;
			towers[tower_index].shoot_index = 0;
		}, 2000)

		if(is_arrow)
			enemies[bug_index].life--;
		else
			enemies[bug_index].life = enemies[bug_index].life - 3;

		if(enemies[bug_index].life <= 0){
			if(bug_index == 4)
				resources = resources + 5;
			else
				resources++;

			bug_died++;
			count_bug_dead++;
			$(".tile_row").find(".bug_"+bug_index).remove();
			$("#game_info #resources").html(resources);

			if(resources >= 2){
				$("#icons #vertical_arrow").removeClass("disabled");
				$("#icons #horizontal_arrow").removeClass("disabled");
			}

			if(resources >= 5){
				$("#icons #multi_arrow").removeClass("disabled");
			}

			if(count_bug_dead == 5){
				enemies = [];
				is_new_wave = true;
				wave_level++;
				is_start = false;
				is_first_wave = false;
				game_timer_start = 30;
				count_bug_dead = 0;
				$("#start_game").removeAttr("disabled")
				$("#game_info #wave_number").html(wave_level);
			}
		}
	}
	else{
		var arrow = is_arrow ? 'arrrow' : 'multi'
		tile_row.prepend("<span class='"+ arrow +"'>O</span>");
		tile_row_prev.children("span.arrrow").remove();
	}
}

/*Show range and checked of the unit*/
function show_range(type, data_i, data_j, is_arrow, tower_index, is_show_range){
	if(type == "left"){
		var tile_row_1 = $(".tile_row").find("td[data_i_j='"+data_i+"_"+eval(parseInt(data_j) - (is_arrow ? 1 : 1))+"']");
		var tile_row_2 = $(".tile_row").find("td[data_i_j='"+data_i+"_"+eval(parseInt(data_j) - (is_arrow ? 2 : 1))+"']");
		var tile_row_3 = $(".tile_row").find("td[data_i_j='"+data_i+"_"+eval(parseInt(data_j) - (is_arrow ? 3 : 1))+"']");
		var tile_row_4 = $(".tile_row").find("td[data_i_j='"+data_i+"_"+eval(parseInt(data_j) - (is_arrow ? 4 : 1))+"']");
	}
	else if(type == "right" ){
		var tile_row_1 = $(".tile_row").find("td[data_i_j='"+data_i+"_"+eval(parseInt(data_j) + (is_arrow ? 1 : 1))+"']");
		var tile_row_2 = $(".tile_row").find("td[data_i_j='"+data_i+"_"+eval(parseInt(data_j) + (is_arrow ? 2 : 1))+"']");
		var tile_row_3 = $(".tile_row").find("td[data_i_j='"+data_i+"_"+eval(parseInt(data_j) + (is_arrow ? 3 : 1))+"']");
		var tile_row_4 = $(".tile_row").find("td[data_i_j='"+data_i+"_"+eval(parseInt(data_j) + (is_arrow ? 4 : 1))+"']");
	}
	else if(type == "top"){
		var tile_row_1 = $(".tile_row").find("td[data_i_j='"+eval(parseInt(data_i) - (is_arrow ? 1 : 1))+"_"+data_j+"']");
		var tile_row_2 = $(".tile_row").find("td[data_i_j='"+eval(parseInt(data_i) - (is_arrow ? 2 : 1))+"_"+data_j+"']");
		var tile_row_3 = $(".tile_row").find("td[data_i_j='"+eval(parseInt(data_i) - (is_arrow ? 3 : 1))+"_"+data_j+"']");
		var tile_row_4 = $(".tile_row").find("td[data_i_j='"+eval(parseInt(data_i) - (is_arrow ? 4 : 1))+"_"+data_j+"']");
	}
	else if(type == "down"){
		var tile_row_1 = $(".tile_row").find("td[data_i_j='"+eval(parseInt(data_i) + (is_arrow ? 1 : 1))+"_"+data_j+"']");
		var tile_row_2 = $(".tile_row").find("td[data_i_j='"+eval(parseInt(data_i) + (is_arrow ? 2 : 1))+"_"+data_j+"']");
		var tile_row_3 = $(".tile_row").find("td[data_i_j='"+eval(parseInt(data_i) + (is_arrow ? 3 : 1))+"_"+data_j+"']");
		var tile_row_4 = $(".tile_row").find("td[data_i_j='"+eval(parseInt(data_i) + (is_arrow ? 4 : 1))+"_"+data_j+"']");
	}

	if(!is_arrow){
		tile_row_5 = $(".tile_row").find("td[data_i_j='"+eval(parseInt(data_i) + 1)+"_"+eval(parseInt(data_j) + 1)+"']");
		tile_row_6 = $(".tile_row").find("td[data_i_j='"+eval(parseInt(data_i) - 1)+"_"+eval(parseInt(data_j) + 1)+"']");
		tile_row_7 = $(".tile_row").find("td[data_i_j='"+eval(parseInt(data_i) + 1)+"_"+eval(parseInt(data_j) - 1)+"']");
		tile_row_8 = $(".tile_row").find("td[data_i_j='"+eval(parseInt(data_i) - 1)+"_"+eval(parseInt(data_j) - 1)+"']");
	}
	if(is_show_range){
		tile_row_1.prepend("<div class='show_range'></div>")
		tile_row_2.prepend("<div class='show_range'></div>")
		tile_row_3.prepend("<div class='show_range'></div>")
		tile_row_4.prepend("<div class='show_range'></div>")

		if(!is_arrow){
			tile_row_5.prepend("<div class='show_range'></div>");
			tile_row_6.prepend("<div class='show_range'></div>");
			tile_row_7.prepend("<div class='show_range'></div>");
			tile_row_8.prepend("<div class='show_range'></div>");
		}
	}
	else{
		if( tile_row_1.children(".fa-bug").length != 0 ||
			tile_row_2.children(".fa-bug").length != 0 ||
			tile_row_3.children(".fa-bug").length != 0 ||
			tile_row_4.children(".fa-bug").length != 0 ){
			return true;
		}

	if((!is_arrow && tile_row_5.children(".fa-bug").length != 0) ||
		(!is_arrow && tile_row_6.children(".fa-bug").length != 0) ||
		(!is_arrow && tile_row_7.children(".fa-bug").length != 0) ||
		(!is_arrow && tile_row_8.children(".fa-bug").length != 0) )
		return true
	}
}

function game_timer(){
    var game_timeout = setTimeout(game_timer, 1000); // callback
    if(!is_start){
		$("#start_game_in").html("(in "+game_timer_start+")");
		if(game_timer_start == 0){
			if(is_first_wave){
				timer();
				click_start = false;
				is_first_wave = false;
			}
			
			is_new_wave = false;
			is_start = true;
			game_timer_start = 30;
			$("#start_game_in").html("");
		}

	    game_timer_start--;
    }
    else{
    	$("#start_game_in").html("");
    }
}

function shoot_timer(){
    var game_timeout = setTimeout(shoot_timer, 800); // callback
	for (var j = 0; j < towers.length; j++) {
		if(towers[j].type != "multi_arrow")
			towers[j].shoot(j);
	}
}

function multi_arrow_timer(){
    var game_timeout = setTimeout(multi_arrow_timer, 3000); // callback
	for (var j = 0; j < towers.length; j++) {
		if(towers[j].type == "multi_arrow")
			towers[j].shoot(j);
	}
}

function timer() {
    var timer_timeout = setTimeout(timer, 1500); // callback
	if(!is_new_wave){
	    if(add_enemy_timer == 0 && enemies.length < 5) // countdown to zero and add new enmies
	    	(enemies.length < 4) ? add_enemy(false) : add_enemy(true);
	    
		add_enemy_timer = 1;

	    /* Enemy start to move */
		for (var i = 0; i < enemies.length; i++) {
			enemies[i].times_move++;
			enemies[i].move(i);
		}

	    add_enemy_timer--; //timer add new enemies / per second
	}
}

function add_enemy(is_elite){
	enemies.push(new enemy(0, 500, (is_elite ? 10 : 5 ), (is_elite ? true : false )))
}

function game_init(){
	var new_start_game = new start_game();
	new_start_game.map();
	$("#game_info #life_points").html(life_points);
	$("#game_info #wave_number").html(wave_level);
	$("#game_info #resources").html(resources);
}

function selected_defense(elem){
	if(!$(elem).hasClass("disabled")){
		var defense_sibling = getSiblings(elem);

		for (var i = 0; i < defense_sibling.length; i++) {
			if(defense_sibling[i].classList.contains("active"))
				defense_sibling[i].classList.remove("active")
		}

		if(!elem.classList.contains("active")){
			elem.classList.add("active")
			defense_type = elem.getAttribute("id");
		}
	}
}

function tower_placement(elem, is_multi_arrow){
	if($(elem).find("i").length == 0){
		if(defense_type != "multi_arrow" && !is_multi_arrow && defense_type != "" && defense_type != undefined){
			elem.innerHTML = defense_type != "horizontal_arrow" ? '<i class="fa fa-arrows-v arrow_display" aria-hidden="true" data-tower-index="'+tower_index+'" data-refund="1"></i>' : '<i class="fa fa-arrows-h arrow_display" aria-hidden="true" data-tower-index="'+tower_index+'" data-refund="2"></i>';
			$("#icons").find(".active").removeClass("active");
			resources = resources - 2;
			towers.push(new tower($(elem).attr("data_i"), $(elem).attr("data_j"), defense_type, tower_index));
			tower_index++;
		}
		else if(defense_type == "multi_arrow" && is_multi_arrow  && defense_type != "" && defense_type != undefined){
			elem.innerHTML = '<i class="fa fa-certificate arrow_display" aria-hidden="true" data-tower-index="'+tower_index+'" data-refund="2"></i>';
			$("#icons").find(".active").removeClass("active");
			resources = resources - 5;
			towers.push(new tower($(elem).attr("data_i"), $(elem).attr("data_j"), defense_type, tower_index));
			tower_index++;
		}

		$("#game_info #resources").html(resources);

		if(resources < 2){
			$("#icons #vertical_arrow").addClass("disabled");
			$("#icons #horizontal_arrow").addClass("disabled");
		}
		if(resources < 5){
			$("#icons #multi_arrow").addClass("disabled");
		}


		defense_type = "";
	}
}

function start_game (){
	var generate_map = [
	[
			["e", "e", "a", "e", "a", "e", "a", "e", "a", "e", "a", "e", "e"], 
			["e", "c", "c", "c", "c", "c", "c", "c", "c", "c", "c", "c", "e"], 
			["a", "c", "c", "c", "c", "c", 24,  25,  26,  27,  28,  "c", "e"], 
			["e", "c", "c", "c", "c", "c", 23,  "c", "c", "c", 29,  "c", "e"], 
			["a", "c", 8,   9,   10,  "c", 22,  "c", "c", "c", 30,  "c", "a"], 
			["e", "c", 7,   "z", 11,  "c", 21,  "c", "c", "c", 31,  "c", "e"], 
			["a", "c", 6,   "c", 12,  "c", 20,  "c", "c", "c", 32,  "c", "a"], 
			["e", "c", 5,   "c", 13,  "c", 19,  "c", "c", "c", 33,  "c", "e"], 
			["a", "c", 4,   "c", 14,  "z", 18,  "c", "c", "c", 34,  "c", "a"], 
			["e", "c", 3,   "c", 15,  16,  17,  "c", "c", "c", 35,  "c", "e"], 
			["g", 1,   2,   "c", "c", "c", "c", "c", "c", "c", 36,  37,  "h"], 
			["e", "c", "c", "c", "c", "c", "c", "c", "c", "c", "c", "c", "e"], 
			["a", "e", "a", "e", "a", "e", "a", "e", "a", "e", "a", "e", "a"]
		],
		[
			["e", "e", "a", "e", "a", "e", "a", "e", "a", "e", "a", "e", "e"], 
			["e", "c", "c", "c", "c", "c", "c", "c", "c", "c", "c", "c", "e"], 
			["g", 1,   "c", "c", "c", "c", "c", "c", "c", "c", "c", "c", "e"], 
			["e", 2,   "c", "c", "c", "c", "c", "c", "c", "c", "c", "c", "e"], 
			["a", 3,   "c", "c", 20,  21,  22,  "c", "c", "c", "c", 35,  "h"], 
			["e", 4,   "c", "z", 19,  "z", 23,  "c", "c", 32,  33,  34,  "e"], 
			["a", 5,   "c", 17,  18,  "c", 24,  "c", "c", 31,  "c", "c", "a"], 
			["e", 6,   "c", 16,  "c", "c", 25,  "c", "c", 30,  "c", "c", "e"], 
			["a", 7,   "c", 15,  "c", "c", 26,  27,  28,  29,  "c", "c", "a"], 
			["e", 8,   "c", 14,  "c", "c", "c", "c", "c", "c", "c", "c", "e"], 
			["a", 9,   "z", 13,  "c", "c", "c", "c", "c", "c", "c", "c", "a"], 
			["e", 10,  11,  12,  "c", "c", "c", "c", "c", "c", "c", "c", "e"], 
			["a", "e", "a", "e", "a", "e", "a", "e", "a", "e", "a", "e", "a"]
		],
		[
			["e", "e", "a", "e", "a", "e", "a", "e", "a", "e", "a", "e", "e"], 
			["e", "c", "c", 8,   9,   10,  "c", "c", "c", "c", "c", "c", "e"], 
			["a", "c", "c", 7,   "z", 11,  "c", "c", "c", "c", "c", "c", "e"], 
			["e", "c", "c", 6,   "c", 12,  "c", "c", "c", "c", "c", "c", "e"], 
			["a", "c", "c", 5,   "c", 13,  "c", "c", "c", "c", 40,  41,  "h"], 
			["e", "c", "c", 4,   "c", 14,  "c", "c", "c", "c", 39,  "c", "e"], 
			["g", 1,   2,   3,   "c", 15,  "c", "c", "c", "c", 38,  "c", "a"], 
			["e", "c", "c", "c", "c", 16,  "c", "c", "c", "c", 37,  "c", "e"], 
			["a", 21,  20,  19,  18,  17,  "c", "c", "c", "c", 36,  "c", "a"], 
			["e", 22,  "c", "c", "c", "c", "c", "c", "c", "c", 35,  "c", "e"], 
			["a", 23,  "c", "c", "c", "c", "c", "c", "c", "c", 34,  "c", "a"], 
			["e", 24,  25,  26,  27,  28,  29,  30,  31,  32,  33,  "c", "e"], 
			["a", "e", "a", "e", "a", "e", "a", "e", "a", "e", "a", "e", "a"]
		],
		[
			["e", "e", "a", "e", "a", "e", "a", "e", "a", "e", "a", "e", "e"], 
			["e", 36,  37,  38,  39,  40,  41,  42,  43,  44,  45,  46,  "e"], 
			["a", 35,  "c", "c", "c", "c", "c", "c", "c", "c", "c", 47,  "e"], 
			["e", 34,  "c", "c", "c", "c", "c", "c", "c", "c", "c", 48,  "e"], 
			["a", 33,  "c", "c", "c", "c", "c", "c", "c", "c", "c", 49,  "h"], 
			["e", 32,  31,  "z", 27,  26,  24,  23,  22,  21,  "c", "c", "e"], 
			["a", "c", 30,  29,  28,  "z", "c", "c", "c", 20,  "c", "c", "a"], 
			["e", "c", "c", "c", "c", 7,   8,   9,   "c", 19,  "c", "c", "e"], 
			["g", 1,   2,   3,   4,   5,   "z", 10,  "c", 18,  "c", "c", "a"], 
			["e", "c", "c", "c", "c", "c", "c", 11,  "c", 17,  "c", "c", "e"], 
			["a", "c", "c", "c", "c", "c", "c", 12,  "z", 16,  "c", "c", "a"], 
			["e", "c", "c", "c", "c", "c", "c", 13,  14,  15,  "c", "c", "e"], 
			["a", "e", "a", "e", "a", "e", "a", "e", "a", "e", "a", "e", "a"]
		],
		[
			["e", "e", "a", "e", "a", "e", "a", "e", "a", "e", "a", "e", "e"], 
			["e", "c", "c", "c", "c", 42,  43,  44,  "c", "c", "c", "c", "e"], 
			["a", "c", "c", "c", "c", 41,  "z", 45,  "c", 51,  52,  53,  "e"], 
			["e", "c", "c", "c", "c", 40,  "c", 46,  "z", 50,  "z", 54,  "e"], 
			["a", 3,   4,   5,   "c", 39,  "c", 47,  48,  49,  "c", 55,  "h"], 
			["e", 2,   "z", 6,   "c", 38,  "c", "c", "c", "c", "c", "c", "e"], 
			["g", 1,   "c", 7,   "c", 37,  36,  "c", "c", "c", "c", "c", "a"], 
			["e", "c", "c", 8,   "c", "c", 35,  "c", "c", "c", "c", "c", "e"], 
			["a", 11, 10,   9,   "c", "c", 34,  "c", "c", "c", "c", "c", "a"], 
			["e", 12, "c",  "c", "c", "c", 33,  32,  31,  30,  29,  28,  "e"], 
			["a", 13, "z",  17,  18,  19,  "z", "c", "c", "c", "z",  27, "a"], 
			["e", 14, 15,   16,  "z", 20,  21,  22,  23,  24,  25,   26, "e"], 
			["a", "e", "a", "e", "a", "e", "a", "e", "a", "e", "a", "e", "a"]
		]
	]

	// numbers = path
	// a = almost_soil
	// b = water
	// c = grass
	// e = none
	// f = almost start
	// g = start 
	// h = end
	// z = multi_arrow

	this.map = function(){
		var random_map = Math.floor((Math.random() * 3) + 0);

		if(localStorage.length == 0)
			localStorage.setItem("random_map", random_map)
		else{
			if(random_map == parseInt(localStorage.random_map))
				this.map();
			else
				localStorage.random_map = random_map;
		}

		// var selected_random_map = generate_map[4];
		var selected_random_map = generate_map[localStorage.random_map];
		var show_map = "";
		/* Make water tile*/
		for (var i = 0; i < selected_random_map.length; i++) {
			for (var j = 0; j < selected_random_map[i].length; j++) {
				if(typeof selected_random_map[i][j] == "number"){
					if (typeof selected_random_map[i - 1][j] == "string" && selected_random_map[i - 1][j] == "c" ) selected_random_map[i - 1][j] = "b";
					if (typeof selected_random_map[i + 1][j] == "string" && selected_random_map[i + 1][j] == "c" ) selected_random_map[i + 1][j] = "b";
					
					if (typeof selected_random_map[i][j - 1] == "string" && selected_random_map[i][j - 1] == "c" ) selected_random_map[i][j - 1] = "b";
					if (typeof selected_random_map[i][j + 1] == "string" && selected_random_map[i][j + 1] == "c" ) selected_random_map[i][j + 1] = "b";

					if (typeof selected_random_map[i - 1][j + 1] == "string" && selected_random_map[i - 1][j + 1] == "c") selected_random_map[i - 1][j + 1] = "b";
					if (typeof selected_random_map[i + 1][j - 1] == "string" && selected_random_map[i + 1][j - 1] == "c") selected_random_map[i + 1][j - 1] = "b";
					
					if (typeof selected_random_map[i + 1][j - 1] == "string" && selected_random_map[i + 1][j - 1] == "c") selected_random_map[i + 1][j - 1] = "b";
					if (typeof selected_random_map[i - 1][j + 1] == "string" && selected_random_map[i - 1][j + 1] == "c") selected_random_map[i - 1][j + 1] = "b";
					
					if (typeof selected_random_map[i + 1][j + 1] == "string" && selected_random_map[i + 1][j + 1] == "c") selected_random_map[i + 1][j + 1] = "b";
					if (typeof selected_random_map[i - 1][j - 1] == "string" && selected_random_map[i - 1][j - 1] == "c") selected_random_map[i - 1][j - 1] = "b";
				}
			}
		}
		/* Generate map */
		for(var i = 0; i < selected_random_map.length; i++){
		    show_map += "<tr class='tile_row'>"
			for(var j = 0; j < selected_random_map[i].length; j++){
				if(typeof selected_random_map[i][j] == "string"){
					if( selected_random_map[i][j] == "e")
		  				show_map += "<td class='none_tile'></td>";
					if( selected_random_map[i][j] == "g")
		  				show_map += "<td class='start_tile' id='start_tile'></td>";
		  			if( selected_random_map[i][j] == "a")
		  				show_map += "<td class='almost_start_tile' data_i='"+i+"' data_j='"+j+"' data_i_j='"+i+"_"+j+"'></td>";
		  			if( selected_random_map[i][j] == "b")
		  				show_map += "<td class='water_tile' data_i='"+i+"' data_j='"+j+"' data_i_j='"+i+"_"+j+"'></td>";
		  			if( selected_random_map[i][j] == "c")
		  				show_map += "<td class='grass_tile' data_i='"+i+"' data_j='"+j+"' data_i_j='"+i+"_"+j+"' onclick='tower_placement(this, false)'></td>";
		  			if( selected_random_map[i][j] == "h")
		  				show_map += "<td class='end_tile'></td>";
		  			if( selected_random_map[i][j] == "z")
		  				show_map += "<td class='water_defense_tile'  data_i='"+i+"' data_j='"+j+"' data_i_j='"+i+"_"+j+"' onclick='tower_placement(this, true)'></td>";
				}
				else if(typeof selected_random_map[i][j] == "number" && selected_random_map[i][j] >0){
		  			show_map += "<td class='soil_tile' id='soil_"+selected_random_map[i][j]+"' data_i_j='"+i+"_"+j+"'></td>";
		  			this.max_path++;
				}
		 	}

		    show_map += "</tr>"
		}
		document.getElementById("table_game").innerHTML = show_map;

		$(".soil_tile").each(function(){
			$(this).attr("data-left", $(this).offset().left)
			$(this).attr("data-top", $(this).offset().top)
		})
	}
}

/* Jquery get siblings */
function getSiblings(elem) {
    var siblings = [];
    var sibling = elem.parentNode.firstChild;
    var skipMe = elem;
    for ( ; sibling; sibling = sibling.nextSibling ) 
       if ( sibling.nodeType == 1 && sibling != elem )
          siblings.push( sibling );
    return siblings;
}



game_timer()
shoot_timer()
multi_arrow_timer()