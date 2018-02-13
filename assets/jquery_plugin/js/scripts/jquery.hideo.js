(function ( $ ) {
	$.fn.hideo = function( options ) {
		var input = this;
		input.wrap('<div class="hideo_content">')
		input.closest(".hideo_content").append(section_template(input))
		input.remove()

		$("body").on("click", ".hideo_content", function(){
			$(this).find("label").addClass("hideo_active")
		}).on("blur", ".hideo_content", function(){
			$(this).find(".hideo_active").each(function(){
				$(this).removeClass("hideo_active")
			})
		});
	};

	function section_template(input){
		var template_id = "hideo_"+ Math.floor((Math.random() * 10000) + 1);
		var label = ["user", "envelope", "lock"];

		input.addClass("hideo_input")
		input.attr("id", input.attr("id")+" "+template_id)
		return '<label for="'+template_id+'" class="hideo_label"><span class="hideo_span"><i class="fa fa-user hideo_icon"></i></span></label>'+$(input)[0].outerHTML;
	};

}( jQuery ));
