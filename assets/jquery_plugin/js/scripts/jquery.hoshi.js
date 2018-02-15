(function ( $ ) {
	$.fn.hoshi = function( options ) {
		var default_input = this;

		if(options != "destroy" && default_input.closest(".hoshi_content").length == 0){
			var selected_color = (default_input.attr("data-color") != undefined && default_input.attr("data-color") != "") ? default_input.attr("data-color") : "";
			var template_id = "hideo_"+ Math.floor((Math.random() * 10000) + 1);
			var active_id = (default_input.attr("id") != undefined && default_input.attr("id") != "" != undefined ? default_input.attr("id") : template_id)
			var placeholder = (default_input.attr("placeholder") != undefined ? default_input.attr("placeholder") :  "Hoshi")

			default_input.wrap('<div class="hoshi_content">')
						 .closest(".hoshi_content")
						 .append(section_template(active_id, placeholder))
						 .prepend(default_input.addClass("hoshi_input").attr("id", active_id).attr("data-color", selected_color))


			$(".hoshi_content").click(function(){
				if(!$(this).hasClass("hoshi_active")){
					move($(this).find(".hoshi_bar"), "add", 0, $(this).find(".hoshi_input").attr("data-color"));
				}
			
				$(this).addClass("hoshi_active");
			});
			
			$(".hoshi_content").on("blur", ".hoshi_input", function(){
				$(".hoshi_content.hoshi_active").each(function(){
					if($(this).find(".hoshi_input").val().trim() == ""){
						$(this).removeClass("hoshi_active");
						move($(this).find(".hoshi_bar"), "sub", 100, $(this).find(".hoshi_input").attr("data-color"));
					}
				})
			});
		}
		else if(default_input.closest(".hoshi_content").length >= 1 && options == "destroy"){
			var place_to_append = default_input.closest(".hoshi_content");
			place_to_append.after(default_input.removeClass("hoshi_input"));
			place_to_append.remove();
		}

		return default_input;
	};

	function section_template(active_id, placeholder){
		return  '<label for="'+active_id+'" class="hoshi_label"><span class="hoshi_span">'+placeholder+'</span></label>\
						<div class="bar">\
							<div class="hidden_bar"></div>\
							<div class="hoshi_bar"></div>\
						</div>'
	};

	function move(elem, type, width_length, color) {
		var width = width_length;
		var id = setInterval(frame, 10);

		function frame() {
			if(type == "add"){
				elem.css("background-color", (color != undefined && color != "" ? color : "#ff5500" )); 

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