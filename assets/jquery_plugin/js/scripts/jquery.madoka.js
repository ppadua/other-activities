(function ( $ ) {
	$.fn.madoka = function( options ) {
		var input = this;
		input.wrap('<div class="madoka_content">')
		input.closest(".madoka_content").append(section_template(input))
		input.remove()

		
		$("body").on("click", ".madoka_content", function(){
			$(this).addClass("madoka_active")
		})
		.on("blur", ".madoka_content", function(){
			$(".madoka_content").each(function(){
				if($(this).find(".madoka_input").val().trim() == "")
					$(this).removeClass("madoka_active")
			})
		});
	};

	function section_template(input){
		var template_id = "madoka_"+ Math.floor((Math.random() * 10000) + 1);
		var active_id = (input.attr("id") != undefined ? input.attr("id") :  template_id)

		input.addClass("madoka_input")
			 .attr("id", active_id)

		return  input[0].outerHTML+'<label for="'+active_id+'" class="madoka_label">\
						<svg class="madoka_graphic " width="100%" height="100%" viewBox="0 0 404 77">\
							<path d="m0,0l404,0l0,77l-404,0l0,-77z"/>\
						</svg>\
						<span class="madoka_span">Madoka</span>\
					</label>'
	};
}( jQuery ));