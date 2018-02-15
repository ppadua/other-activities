(function ( $ ) {
	$.fn.haruki = function( options ) {
		var default_input = this;

		if(options != "destroy" && default_input.closest(".haruki_content").length == 0){
			var template_id = "haruki_"+ Math.floor((Math.random() * 10000) + 1);
			var active_id = (default_input.attr("id") != undefined && default_input.attr("id") != "" ? default_input.attr("id") :  template_id)
			var placeholder = (default_input.attr("placeholder") != undefined ? default_input.attr("placeholder") :  "Haruki")

			default_input.wrap('<div class="haruki_content">')
						 .closest(".haruki_content")
						 .append(section_template(active_id, placeholder))
						 .prepend(default_input.addClass("haruki_input").attr("id", active_id))

			$(".haruki_content").click(function(){
				$(this).addClass("haruki_active")
			})
			$(".haruki_content").on("blur", ".haruki_input", function(){
				$(".haruki_content").each(function(){
					if($(this).find(".haruki_input").val().trim() == "")
						$(this).removeClass("haruki_active")
				})
			});
		}
		else if(default_input.closest(".haruki_content").length >= 1 && options == "destroy"){
			var place_to_append = default_input.closest(".haruki_content");
			place_to_append.after(default_input.removeClass("haruki_input"));
			place_to_append.remove();
		}

		return default_input;
	};

	function section_template(active_id, placeholder){
		return '<label for="'+active_id+'" class="haruki_label"><span class="haruki_span">'+placeholder+'</span></label>';
	};

	
}( jQuery ));