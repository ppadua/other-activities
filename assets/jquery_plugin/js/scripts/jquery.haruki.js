(function ( $ ) {
	$.fn.haruki = function( options ) {
		var input = this;
		input.wrap('<div class="haruki_content">')
		input.closest(".haruki_content").append(section_template(input))
		input.remove()

		$("body").on("click", ".haruki_content", function(){
			$(this).addClass("haruki_active")
		})
		$("body").on("blur", ".haruki_content", function(){
			$(".haruki_content").each(function(){
				if($(this).find(".haruki_input").val().trim() == "")
					$(this).removeClass("haruki_active")
			})
		});
	};

	function section_template(input){
		var template_id = "haruki_"+ Math.floor((Math.random() * 10000) + 1);
		var active_id = (input.attr("id") != undefined ? input.attr("id") :  template_id)

		input.addClass("haruki_input")
			 .attr("id", active_id)

		return  input[0].outerHTML+'<label for="'+active_id+'" class="haruki_label"><span class="haruki_span">Haruki</span></label>';
	};

	
}( jQuery ));