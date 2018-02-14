(function ( $ ) {
	var default_input;
	$.fn.madoka = function( options ) {
		if(default_input == undefined)
			default_input = this.clone();

		var input = this;
		if(options != "destroy"){
			var template_id = "madoka_"+ Math.floor((Math.random() * 10000) + 1);
			var active_id = (input.attr("id") != undefined ? input.attr("id") :  template_id)
			var placeholder = (input.attr("placeholder") != undefined ? input.attr("placeholder") :  "Madoka")

			input.addClass("madoka_input")
				 .attr("id", active_id)
				 .wrap('<div class="madoka_content">')
				 .closest(".madoka_content")
				 .append(section_template(active_id, placeholder)).prepend(input)

			
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
		else if(input.closest(".madoka_content").length >= 1 && options == "destroy"){
			input.closest(".madoka_content").html(default_input)
		}

		return input;
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