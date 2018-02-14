(function ( $ ) {
	var default_input;
		
	$.fn.hideo = function( options ) {
		if(default_input == undefined)
			default_input = this.clone();

		var input = this;

		if(options != "destroy"){
			var template_id = "hideo_"+ Math.floor((Math.random() * 10000) + 1);
			var active_id = (input.attr("id") != undefined ? input.attr("id") :  template_id)

			input.addClass("hideo_input")
				 .attr("id", active_id)
				 .wrap('<div class="hideo_content">')
				 .closest(".hideo_content")
				 .append(section_template(active_id)).append(input)
			
			$(".hideo_content").click(function(){
				$(this).find("label").addClass("hideo_active")
			})
			$(".hideo_content").on("blur", ".hideo_input", function(){
				$(this).parents(".hideo_content").find(".hideo_active").each(function(){
					$(this).removeClass("hideo_active")
				})
			});
		}
		else if(input.closest(".hideo_content").length >= 1 && options == "destroy"){
			input.closest(".hideo_content").html(default_input)
		}

		return input;
	};

	function section_template(active_id){
		return '<label for="'+active_id+'" class="hideo_label"><span class="hideo_span"><i class="fa fa-user hideo_icon"></i></span></label>';
	};

}( jQuery ));
