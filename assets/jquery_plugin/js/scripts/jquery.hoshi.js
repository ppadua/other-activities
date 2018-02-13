(function ( $ ) {
	$.fn.hoshi = function( options ) {
		var input = this;
		var selected_color = options != undefined && (options.color != undefined && options.color.trim() != "")? options.color: "#ff5500";

		input.wrap('<div class="hoshi_content">')
		input.closest(".hoshi_content").append(section_template(input))
		input.remove()

		$("body").on("click", ".hoshi_content", function(){
			if(!$(this).hasClass("hoshi_active")){
				move($(this).find(".hoshi_bar"), "add", 0, selected_color);
			}
		
			$(this).addClass("hoshi_active");
		})
		.on("blur", ".hoshi_content", function(){
			$(".hoshi_content.hoshi_active").each(function(){
				if($(this).find(".hoshi_input").val().trim() == ""){
					$(this).removeClass("hoshi_active");
					move($(this).find(".hoshi_bar"), "sub", 100, selected_color);
				}
			})
		});
	};

	function section_template(input){
		var template_id = "hoshi_"+ Math.floor((Math.random() * 10000) + 1);
		var active_id = (input.attr("id") != undefined ? input.attr("id") :  template_id)

		input.addClass("hoshi_input")
			 .attr("id", active_id)

		return  input[0].outerHTML+'<label for="'+active_id+'" class="hoshi_label"><span class="hoshi_span">Hoshi</span></label>\
						<div class="bar">\
							<div class="hidden_bar"></div>\
							<div class="hoshi_bar"></div>\
						</div>'
	};

	function move(elem, type, width_length, color) {
		var width = width_length;
		var id = setInterval(frame, 10);

		function frame() {
			if(type == "add"){
				elem.css("background-color", color); 

				if (width >= 100) {
					clearInterval(id);
				} 
				else {
					width = width + 4; 
					elem.css("width", width + '%'); 
				}
			}
			else{
				if (width < 0) {
					clearInterval(id);
				} 
				else {
					width = width - 4; 
					elem.css("width", width + '%'); 
				}
			}
		}
	}
}( jQuery ));