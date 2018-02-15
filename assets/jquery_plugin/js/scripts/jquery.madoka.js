(function ( $ ) {
	$.fn.madoka = function( options ) {
		var default_input = this;

		if(options != "destroy" && default_input.closest(".madoka_content").length == 0){
			var template_id = "madoka_"+ Math.floor((Math.random() * 10000) + 1);
			var active_id = (default_input.attr("id") != undefined && default_input.attr("id") != "" ? default_input.attr("id") : template_id);
			var placeholder = (default_input.attr("placeholder") != undefined ? default_input.attr("placeholder") :  "Madoka");

			default_input.wrap('<div class="madoka_content">')
						 .closest(".madoka_content")
						 .append(section_template(active_id, placeholder))
						 .prepend(default_input.addClass("madoka_input").attr("id", active_id))

			$(".madoka_content").click(function(){
				$(this).addClass("madoka_active")
			})
			$(".madoka_content").on("blur", ".madoka_input", function(){
				$(".madoka_content").each(function(){
					if($(this).find(".madoka_input").val().trim() == "")
						$(this).removeClass("madoka_active")
				})
			});
		}
		else if(default_input.closest(".madoka_content").length >= 1 && options == "destroy"){
			var place_to_append = default_input.closest(".madoka_content");
			place_to_append.after(default_input.removeClass("madoka_input"));
			place_to_append.remove();
		}

		return default_input;
	};

	function section_template(active_id, placeholder){
		return '<label for="'+active_id+'" class="madoka_label">\
						<svg class="madoka_graphic " width="100%" height="100%" viewBox="0 0 404 77">\
							<path d="m0,0l404,0l0,77l-404,0l0,-77z"/>\
						</svg>\
						<span class="madoka_span">'+placeholder+'</span>\
					</label>'
	};
}( jQuery ));