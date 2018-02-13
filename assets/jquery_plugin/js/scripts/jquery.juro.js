// (function ( $ ) {
// 	$.fn.juro = function( options ) {
// 		var input = this;
// 		input.wrap('<div class="juro_content">')
// 		input.closest(".juro_content").append(section_template(input))
// 		input.remove()

// 		$("body").on("click", ".juro_content", function(){
// 			$(this).addClass("juro_active")
// 		})
// 		.on("blur", ".juro_content", function(){
// 			$(".juro_content").each(function(){
// 				if($(this).find(".juro_input").val().trim() == "")
// 					$(this).removeClass("juro_active")
// 			})
// 		});
// 	};

// 	function section_template(input){
// 		var template_id = "juro_"+ Math.floor((Math.random() * 10000) + 1);
// 		var active_id = (input.attr("id") != undefined ? input.attr("id") :  template_id)

// 		input.addClass("juro_input")
// 			 .attr("id", active_id)

// 		return  input[0].outerHTML+'<label for="'+template_id+'" class="juro_label"><span class="juro_span">Juro</span></label> '

// 		return '<input type="text" id="'+template_id+'" class="juro_input"> \
// 				<label for="'+template_id+'" class="juro_label"><span class="juro_span">Juro</span></label> '
// 	};
// }( jQuery ));

(function ( $ ) {
	$.fn.juro = function( options ) {
		var input = this;
		input.wrap('<div class="juro_content">')
		input.closest(".juro_content").append(section_template(input))
		input.remove()

		$("body").on("click", ".juro_content", function(){
			$(this).addClass("juro_active")
		})
		.on("blur", ".juro_content", function(){
			$(".juro_content").each(function(){
				if($(this).find(".juro_input").val().trim() == "")
					$(this).removeClass("juro_active")
			})
		});
	};

	function section_template(input){
		var template_id = "juro_"+ Math.floor((Math.random() * 10000) + 1);
		var active_id = (input.attr("id") != undefined ? input.attr("id") :  template_id)

		input.addClass("juro_input")
			 .attr("id", active_id)

		return  input[0].outerHTML+'<label for="'+active_id+'" class="juro_label"><span class="juro_span">Juro</span></label> '
	};
}( jQuery ));