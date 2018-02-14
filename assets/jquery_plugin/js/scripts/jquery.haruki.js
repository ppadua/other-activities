(function ( $ ) {
	$.fn.haruki = function( options ) {
		var default_input = this;
		var input = default_input.clone();

		if(options != "destroy" && default_input.closest(".haruki_content").length == 0){
			var template_id = "haruki_"+ Math.floor((Math.random() * 10000) + 1);
			var active_id = (input.attr("id") != undefined ? input.attr("id") :  template_id)
			var placeholder = (input.attr("placeholder") != undefined ? input.attr("placeholder") :  "Haruki")

			default_input.wrap('<div class="haruki_content">')
						 .closest(".haruki_content")
						 .append(section_template(active_id, placeholder))
						 .prepend(input.addClass("haruki_input").attr("id", active_id))

			$(".haruki_content").click(function(){
				$(this).addClass("haruki_active")
			})
			$(".haruki_content").on("blur", ".haruki_input", function(){
				$(".haruki_content").each(function(){
					if($(this).find(".haruki_input").val().trim() == "")
						$(this).removeClass("haruki_active")
				})
			});

			default_input.addClass("hidden");
		}
		else if(default_input.closest(".haruki_content").length >= 1 && options == "destroy"){
			$(default_input[1]).removeClass("hidden").siblings().remove().unwrap();
			$(default_input[1]).unwrap();
		}

		return input;
	};

	function section_template(active_id, placeholder){
		return '<label for="'+active_id+'" class="haruki_label"><span class="haruki_span">'+placeholder+'</span></label>';
	};

	
}( jQuery ));