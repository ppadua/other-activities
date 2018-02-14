(function ( $ ) {
	$.fn.juro = function( options ) {
		var default_input = this;
		var input = default_input.clone();

		if(options != "destroy" && default_input.closest(".juro_content").length == 0){
			var template_id = "juro_"+ Math.floor((Math.random() * 10000) + 1);
			var active_id = (input.attr("id") != undefined ? input.attr("id") :  template_id);
			var placeholder = (input.attr("placeholder") != undefined ? input.attr("placeholder") :  "Juro");

			default_input.wrap('<div class="juro_content">')
						 .closest(".juro_content")
						 .append(section_template(active_id, placeholder))
						 .prepend(input.addClass("juro_input").attr("id", active_id))

			$(".juro_content").click(function(){
				$(this).addClass("juro_active")
			})
			$(".juro_content").on("blur", ".juro_input", function(){
				$(".juro_content").each(function(){
					if($(this).find(".juro_input").val().trim() == "")
						$(this).removeClass("juro_active")
				})
			});

			default_input.addClass("hidden");
		}
		else if(default_input.closest(".juro_content").length >= 1 && options == "destroy"){
			$(default_input[1]).removeClass("hidden").siblings().remove().unwrap();
			$(default_input[1]).unwrap();
		}


		return input;
	};

	function section_template(active_id, placeholder){
		return  '<label for="'+active_id+'" class="juro_label"><span class="juro_span">'+placeholder+'</span></label> '
	};
}( jQuery ));