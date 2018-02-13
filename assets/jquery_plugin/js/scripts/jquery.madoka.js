(function ( $ ) {
	$.fn.madoka = function( options ) {
		var input = this;
		input.wrap('<div class="madoka_content">')
		input.closest(".madoka_content").append(section_template())
		input.remove()
	};

	function section_template(title){
		var template_id = "madoka"+ Math.floor((Math.random() * 10000) + 1);
		var label = ["Frequency", "Weight", "Strength"];

		return '<div class="madoka_content">\
					<input class="madoka_input" type="text" id="'+template_id+'" />\
					<label class="madoka_label" for="'+template_id+'">\
						<svg class="madoka_graphic " width="100%" height="100%" viewBox="0 0 404 77">\
							<path d="m0,0l404,0l0,77l-404,0l0,-77z"/>\
						</svg>\
						<span class="madoka_span">'+label[Math.floor((Math.random() * 2) + 0)]+'</span>\
					</label>\
				</div>'
	};
}( jQuery ));