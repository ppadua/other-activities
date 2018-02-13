(function ( $ ) {
	$.fn.juro = function( options ) {
		var input = this;
		var title =  input.attr("id")
		var section = plugin_section(this, title, options.content)

		for(var i = 0; i < options.content.length; i++){
			input.closest("section#"+input.attr("id")).append(section_template(i, options.content[i], title))
		}
		
		input.remove();
	};

	function section_template(index, data, title){
		var template_id = title +"_"+ index;

		return '<div class="'+title+'_content" > \
					<input type="text" id="'+template_id+'" class="'+title+'_input"> \
					<label for="'+template_id+'" class="'+title+'_label"><span class="'+title+'_span">'+data.label+'</span></label> \
				</div>'
	};
}( jQuery ));