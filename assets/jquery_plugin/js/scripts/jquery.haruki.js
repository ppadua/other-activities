(function ( $ ) {
	var default_input;

	$.fn.haruki = function( options ) {
		if(default_input == undefined)
			default_input = this.clone();

		var input = this;
		
		if(options != "destroy"){
			var template_id = "haruki_"+ Math.floor((Math.random() * 10000) + 1);
			var active_id = (input.attr("id") != undefined ? input.attr("id") :  template_id)
			var placeholder = (input.attr("placeholder") != undefined ? input.attr("placeholder") :  "Haruki")

			input.addClass("haruki_input")
				 .attr("id", active_id)
				 .wrap('<div class="haruki_content">')
				 .closest(".haruki_content")
				 .append(section_template(active_id, placeholder)).prepend(input)

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
		else if(input.closest(".haruki_content").length >= 1 && options == "destroy"){
			input.closest(".haruki_content").html(default_input)
		}

		return input;
	};

	function section_template(active_id, placeholder){
		return '<label for="'+active_id+'" class="haruki_label"><span class="haruki_span">'+placeholder+'</span></label>';
	};

	
}( jQuery ));