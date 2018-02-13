(function ( $ ) {
	$.fn.madoka = function( options ) {
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

		return '<div class="'+title+'_content">\
					<input class="'+title+'_input" type="text" id="'+template_id+'" />\
					<label class="'+title+'_label" for="'+template_id+'">\
						<svg class="'+title+'_graphic " width="100%" height="100%" viewBox="0 0 404 77">\
							<path d="m0,0l404,0l0,77l-404,0l0,-77z"/>\
						</svg>\
						<span class="'+title+'_span">'+data.label+'</span>\
					</label>\
				</div>'
	};
}( jQuery ));