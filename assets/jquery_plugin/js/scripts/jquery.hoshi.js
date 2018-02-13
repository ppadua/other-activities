(function ( $ ) {
	$.fn.hoshi = function( options ) {
		var input = this;
		input.wrap('<div class="hoshi_content">')
		input.closest(".hoshi_content").append(section_template())
		input.remove()

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
		
		$(this).addClass("hoshi_active");
		}).on("blur", ".hoshi_content", function(){
			$(".hoshi_content.hoshi_active").each(function(){
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
	};

	function section_template(title){
		var template_id = "hoshi_"+ Math.floor((Math.random() * 10000) + 1);
		var label = ["Name", "Street", "Town"];
		var color = ["green", "orange", "blue"];

		return '<div class="hoshi_content" data-color="'+color[Math.floor((Math.random() * 2) + 0)]+'">\
					<input type="text" id="'+template_id+'" class="hoshi_input">\
					<label for="'+template_id+'" class="hoshi_label"><span class="hoshi_span">'+label[Math.floor((Math.random() * 2) + 0)]+'</span></label>\
					<div class="bar">\
						<div class="hidden_bar"></div>\
						<div class="hoshi_bar"></div>\
					</div>\
				</div>'
	};

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
}( jQuery ));