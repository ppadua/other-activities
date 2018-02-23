(function ( $ ) {
	$.fn.input_style = function(options) {
		var default_input = this;
		
		if(options != "destroy" && default_input.closest(".hideo_content").length == 0){
			var template_id = options+"_"+ Math.floor((Math.random() * 10000) + 1);
			var active_id = (default_input.attr("id") != undefined && default_input.attr("id") != ""  ? default_input.attr("id") :  template_id)
			var placeholder = (default_input.attr("placeholder") != undefined ? default_input.attr("placeholder") :  options)
			var selected_color = (default_input.attr("data-color") != undefined && default_input.attr("data-color") != "") ? default_input.attr("data-color") : "";

			default_input.wrap('<div class="'+options+'_content">')
						 .closest("."+options+"_content")
						 .append(section_template(active_id, options, placeholder))
			
			switch(options){
				case "hideo":
					default_input.closest("."+options+"_content").append(default_input.addClass(options+"_input").attr("id", active_id));
				break;
				case "hoshi":
					default_input.closest("."+options+"_content").prepend(default_input.addClass(options+"_input").attr("id", active_id).attr("data-color", selected_color));
				break;
				default:
					default_input.closest("."+options+"_content").prepend(default_input.addClass(options+"_input").attr("id", active_id));
				break;
			}		

			$("."+options+"_content").click(function(){
				if(options == "hoshi" && !$(this).hasClass("hoshi_active"))
					move($(this).find(".hoshi_bar"), "add", 0, $(this).find(".hoshi_input").attr("data-color"));
			
				$(this).find("label").addClass(options+"_active");
			})
			$("."+options+"_content").on("blur", "."+options+"_input", function(){
				$(this).parents("."+options+"_content").find("."+options+"_active").each(function(){
					if(options != "hideo"){
						if($(this).parents("."+options+"_content").find("."+options+"_input").val().trim() == "")
							$(this).removeClass(options+"_active");

						if(options == "hoshi")
							move($(this).parents("."+options+"_content").find("."+options+"_bar"), "sub", 100, $(this).parents("."+options+"_content").find(".hoshi_input").attr("data-color"));
					}
					else
						$(this).removeClass(options+"_active");
				});
			});

		}
		else if(default_input.closest("div").length >= 1 && options == "destroy"){
			var place_to_append = default_input.closest("div");
			place_to_append.after(default_input.removeClass(options+"_input"));
			place_to_append.remove();
		}

		return default_input;
	};

	function section_template(active_id, template_type, placeholder){
		if(template_type == "hideo")
			return '<label for="'+active_id+'" class="hideo_label"><span class="hideo_span"><i class="fa fa-user hideo_icon"></i></span></label>';
		else if(template_type == "haruki")
			return '<label for="'+active_id+'" class="haruki_label"><span class="haruki_span">'+placeholder+'</span></label>';
		else if(template_type == "hoshi")
			return '<label for="'+active_id+'" class="hoshi_label"><span class="hoshi_span">'+placeholder+'</span></label><div class="bar"><div class="hidden_bar"></div><div class="hoshi_bar"></div></div>';
		else if(template_type == "juro")
			return '<label for="'+active_id+'" class="juro_label"><span class="juro_span">'+placeholder+'</span></label> ';
		else if(template_type == "madoka")
			return '<label for="'+active_id+'" class="madoka_label"><svg class="madoka_graphic " width="100%" height="100%" viewBox="0 0 404 77"><path d="m0,0l404,0l0,77l-404,0l0,-77z"/></svg><span class="madoka_span">'+placeholder+'</span></label>';

		return false;
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
