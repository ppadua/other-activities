(function ( $ ) {
	var default_input;

	$.fn.juro = function( options ) {
		if(default_input == undefined)
			default_input = this.clone();

		var input = this;

		if(options != "destroy"){
			var template_id = "juro_"+ Math.floor((Math.random() * 10000) + 1);
			var active_id = (input.attr("id") != undefined ? input.attr("id") :  template_id)
			var placeholder = (input.attr("placeholder") != undefined ? input.attr("placeholder") :  "Juro")

			input.addClass("juro_input")
				 .attr("id", active_id)
				 .wrap('<div class="juro_content">')
				 .closest(".juro_content")
				 .append(section_template(active_id, placeholder)).prepend(input)

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
		else if(input.closest(".juro_content").length >= 1 && options == "destroy"){
			input.closest(".juro_content").html(default_input)
		}


		return input;
	};

	function section_template(active_id, placeholder){
		return  '<label for="'+active_id+'" class="juro_label"><span class="juro_span">'+placeholder+'</span></label> '
	};
}( jQuery ));