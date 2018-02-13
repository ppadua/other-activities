$(document).ready(function(){
	$("body").on("click", "#hideo div", function(){
		$(this).find("label").addClass("hideo_active")
	})
	.on("blur", "#hideo div", function(){
		$("#hideo label").removeClass("hideo_active")
	});

	$("body").on("click", "#haruki .haruki_content", function(){
		$(this).addClass("haruki_active")
	})
	.on("blur", "#haruki .haruki_content", function(){
		$("#haruki .haruki_content").each(function(){
			if($(this).find(".haruki_input").val().trim() == "")
				$(this).removeClass("haruki_active")
		})
	});

	$("body").on("click", "#juro .juro_content", function(){
		$(this).addClass("juro_active")
	})
	.on("blur", "#juro .juro_content", function(){
		$("#juro .juro_content").each(function(){
			if($(this).find(".juro_input").val().trim() == "")
				$(this).removeClass("juro_active")
		})
	});

	$("body").on("click", ".hoshi_content", function(){
		if(!$(this).hasClass("hoshi_active")){
			switch ($(this).attr("data-color")) {
				case 'blue':
					selected_color = "#00aaff"
					break;
				case 'green':
					selected_color = "#00ffaa"
					break;
				default:
					selected_color = "#ff5500"
					break;
			}
			
			move($(this).find(".hoshi_bar"), "add", 0, selected_color);
		}

		$(this).addClass("hoshi_active")
	})
	.on("blur", "#hoshi .hoshi_content", function(){
		$("#hoshi .hoshi_content.hoshi_active").each(function(){
			if($(this).find(".hoshi_input").val().trim() == ""){
				$(this).removeClass("hoshi_active");
				switch ($(this).attr("data-color")) {
					case 'blue':
						selected_color = "#00aaff"
						break;
					case 'green':
						selected_color = "#00ffaa"
						break;
					default:
						selected_color = "#ff5500"
						break;
				}
				move($(this).find(".hoshi_bar"), "sub", 100, selected_color);
			}
		})
	});
});

function move(elem, type, width_length, color) {
	var width = width_length;
	var id = setInterval(frame, 10);

	function frame() {
		if(type == "add"){
			elem.css("background-color", color); 

			if (width >= 100) {
				clearInterval(id);
			} 
			else {
				width = width + 4; 
				elem.css("width", width + '%'); 
			}
		}
		else{
			if (width < 0) {
				clearInterval(id);
			} 
			else {
				width = width - 4; 
				elem.css("width", width + '%'); 
			}
		}
	}
}
