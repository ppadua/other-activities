(function ( $ ) {
	$.fn.hideo = function( options ) {
		var default_input = this;
		var input = default_input.clone();

		if(options != "destroy" && default_input.closest(".hideo_content").length == 0){
			var template_id = "hideo_"+ Math.floor((Math.random() * 10000) + 1);
			var active_id = (input.attr("id") != undefined ? input.attr("id") :  template_id)
			
			default_input.wrap('<div class="hideo_content">')
						 .closest(".hideo_content")
						 .append(section_template(active_id))
						 .append(input.addClass("hideo_input").attr("id", active_id))

			$(".hideo_content").click(function(){
				$(this).find("label").addClass("hideo_active")
			})
			$(".hideo_content").on("blur", ".hideo_input", function(){
				$(this).parents(".hideo_content").find(".hideo_active").each(function(){
					$(this).removeClass("hideo_active")
				})
			});

			default_input.addClass("hidden");
		}
		else if(default_input.closest(".hideo_content").length >= 1 && options == "destroy"){
			default_input.first().removeClass("hidden").siblings().remove().unwrap();
			default_input.first().unwrap();
		}

		return input;
	};

	function section_template(active_id){
		return '<label for="'+active_id+'" class="hideo_label"><span class="hideo_span"><i class="fa fa-user hideo_icon"></i></span></label>';
	};

}( jQuery ));
