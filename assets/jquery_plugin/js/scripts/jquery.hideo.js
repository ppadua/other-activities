(function ( $ ) {
	$.fn.hideo = function( options ) {
		var default_input = this;
		
		if(options != "destroy" && default_input.closest(".hideo_content").length == 0){
			var template_id = "hideo_"+ Math.floor((Math.random() * 10000) + 1);
			var active_id = (default_input.attr("id") != undefined && default_input.attr("id") != ""  ? default_input.attr("id") :  template_id)
			
			default_input.wrap('<div class="hideo_content">')
						 .closest(".hideo_content")
						 .append(section_template(active_id))
						 .append(default_input.addClass("hideo_input").attr("id", active_id))

			$(".hideo_content").click(function(){
				$(this).find("label").addClass("hideo_active")
			})
			$(".hideo_content").on("blur", ".hideo_input", function(){
				$(this).parents(".hideo_content").find(".hideo_active").each(function(){
					$(this).removeClass("hideo_active")
				})
			});

		}
		else if(default_input.closest(".hideo_content").length >= 1 && options == "destroy"){
			var place_to_append = default_input.closest(".hideo_content");
			place_to_append.after(default_input.removeClass("hideo_input"))
			place_to_append.remove()
		}

		return default_input;
	};

	function section_template(active_id){
		return '<label for="'+active_id+'" class="hideo_label"><span class="hideo_span"><i class="fa fa-user hideo_icon"></i></span></label>';
	};

}( jQuery ));
