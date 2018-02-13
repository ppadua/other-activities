(function ( $ ) {
	$.fn.juro = function( options ) {
		var input = this;
		input.wrap('<div class="juro_content">')
		input.closest(".juro_content").append(section_template())
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

	function section_template(title){
		var template_id = "juro_"+ Math.floor((Math.random() * 10000) + 1);
		var label = ["First Name", "Last Name", "Maiden Name"];

		return '<div class="juro_content" > \
					<input type="text" id="'+template_id+'" class="juro_input"> \
					<label for="'+template_id+'" class="juro_label"><span class="juro_span">'+label[Math.floor((Math.random() * 2) + 0)]+'</span></label> \
				</div>'
	};
}( jQuery ));