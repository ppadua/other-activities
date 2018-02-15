(function ( $ ) {
	$.fn.juro = function( options ) {
		var default_input = this;
		
		if(options != "destroy" && default_input.closest(".juro_content").length == 0){
			var template_id = "juro_"+ Math.floor((Math.random() * 10000) + 1);
			var active_id = (default_input.attr("id") != undefined && default_input.attr("id") != ""  ? default_input.attr("id") :  template_id);
			var placeholder = (default_input.attr("placeholder") != undefined ? default_input.attr("placeholder") :  "Juro");

			default_input.wrap('<div class="juro_content">')
						 .closest(".juro_content")
						 .append(section_template(active_id, placeholder))
						 .prepend(default_input.addClass("juro_input").attr("id", active_id))

			$(".juro_content").click(function(){
				$(this).addClass("juro_active")
			})
			$(".juro_content").on("blur", ".juro_input", function(){
				$(".juro_content").each(function(){
					if($(this).find(".juro_input").val().trim() == "")
						$(this).removeClass("juro_active")
				})
			});
		}
		else if(default_input.closest(".juro_content").length >= 1 && options == "destroy"){
			var place_to_append = default_input.closest(".juro_content");
			place_to_append.after(default_input.removeClass("juro_input"))
			place_to_append.remove()
		}

		return default_input;
	};

	function section_template(active_id, placeholder){
		return  '<label for="'+active_id+'" class="juro_label"><span class="juro_span">'+placeholder+'</span></label> '
	};
}( jQuery ));