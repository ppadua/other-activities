(function ( $ ) {
	$.fn.hoshi = function( options ) {
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

		return '<div class="'+title+'_content" data-color="'+data.color+'">\
					<input type="text" id="'+title+'_user" class="'+title+'_input">\
					<label for="'+title+'_user" class="'+title+'_label"><span class="'+title+'_span">'+data.label+'</span></label>\
					<div class="bar">\
						<div class="hidden_bar"></div>\
						<div class="'+title+'_bar"></div>\
					</div>\
				</div>'
	};
}( jQuery ));