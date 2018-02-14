(function ( $ ) {
	var default_input;

	$.fn.hoshi = function( options ) {
		if(default_input == undefined)
			default_input = this.clone();

		var input = this;

		if(options != "destroy"){
			// var selected_color = options != undefined && (options.color != undefined && options.color.trim() != "")? options.color: "#ff5500";
			var selected_color = (input.attr("data-color") != undefined) ? input.attr("data-color") : "#ff5500";
			var template_id = "hideo_"+ Math.floor((Math.random() * 10000) + 1);
			var active_id = (input.attr("id") != undefined ? input.attr("id") :  template_id)
			var placeholder = (input.attr("placeholder") != undefined ? input.attr("placeholder") :  "Hoshi")

			input.addClass("hoshi_input")
			 	 .attr("data-color", selected_color)
				 .attr("id", active_id)
				 .wrap('<div class="hoshi_content">')
				 .closest(".hoshi_content")
				 .append(section_template(active_id, placeholder)).prepend(input)


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
		else if(input.closest(".hoshi_content").length >= 1 && options == "destroy"){
			input.closest(".hoshi_content").html(default_input)
		}

		return input;
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