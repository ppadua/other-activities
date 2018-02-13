(function ( $ ) {
	$.fn.haruki = function( options ) {
		var input = this;
		input.wrap('<div class="haruki_content">')
		input.closest(".haruki_content").append(section_template())
		input.remove()

		$("body").on("click", "#haruki .haruki_content", function(){
			$(this).addClass("haruki_active")
		})
		.on("blur", "#haruki .haruki_content", function(){
			$("#haruki .haruki_content").each(function(){
				if($(this).find(".haruki_input").val().trim() == "")
					$(this).removeClass("haruki_active")
			})
		});
	};

	function section_template(){
		var template_id = "haruki_"+ Math.floor((Math.random() * 10000) + 1);
		var label = ["First Name", "Last Name", "Email"];

		return '<input type="text" id="'+template_id+'" class="haruki_input"> \
				<label for="'+template_id+'" class="haruki_label"><span class="haruki_span">'+label[Math.floor((Math.random() * 2) + 0)]+'</span></label>'
	};

	
}( jQuery ));