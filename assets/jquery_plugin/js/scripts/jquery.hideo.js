(function ( $ ) {
	$.fn.hideo = function( options ) {
		var input = this;
		var title =  input.attr("id")
		var section = plugin_section(this, title, options.content)

		for(var i = 0; i < options.content.length; i++){
			input.closest("section#"+input.attr("id")).append(section_template(i, options.content[i], title))
		}

		input.remove();
		
		// var input = this;
		// var title = (options.animation == undefined ? input.attr("id") : input.closest("section").attr("id"))

		// if(options.animation == undefined){
		// 	var title = input.attr("id");
		// 	var section = plugin_section(this, title, options.content);
		// 	var head_section = input.closest("section#"+title);

		// 	for(var i = 0; i < options.content.length; i++){
		// 		$(head_section).append(section_template(i, options.content[i], title))
		// 		$(head_section).css({
		// 			"background-color": "#f9f7f6",
		// 			"font-size": "150%"
		// 		}).find("."+ title +"_content").last().css({
		// 			"display": "inline-block",
		// 			"padding": "25px",
		// 			"width": "350px"
		// 		}).find("."+ title +"_input").css({
		// 			"vertical-align": "top",
		// 			"height": "70px",
		// 			"border": "none",
		// 			"outline": "none",
		// 			"font-size": "24px",
		// 			"font-weight": "bold",
		// 			"color": "#aaa",
		// 			"width": "72%",
		// 			"padding-left": "15px"
		// 		}).siblings("."+ title +"_label").css({
		// 			"height": "73px",
		// 			"width": "70px",
		// 			"background-color": "#899dda",
		// 			"display": "inline-block",
		// 			"transition": "width .3s",
		// 			"text-align": "center"
		// 		}).find("."+ title +"_span").css({
		// 			"text-align": "center",
		// 			"margin-top": "10%",
		// 			"line-height": "75px"
		// 		}).find("."+ title +"_icon").css({
		// 			"color": "white",
		// 		    "transform": "scale3d(1, 1, 1)",
		// 		    "transform-origin": "50% 50%",
		// 		    "transition": "transform 0.3s"
		// 		})
		// 	}

		// 	input.remove();
		// }
		// else if(options.animation){
		// 	$(input).find("."+title+"_label").css({
		// 		"width": "57px"
		// 	})
		// 	$(input).find("."+title+"_icon").css({
		// 		"transform": "scale3d(.6, .6, 1)"
		// 	})
		// }
		// else if(!options.animation){
		// 	$(input).find("."+title+"_label").css({
		// 		"width": "70px"
		// 	})
		// 	$(input).find("."+title+"_icon").css({
		// 		"transform": "scale3d(1, 1, 1)"
		// 	})
		// }
	};

	function section_template(index, data, title){
		var template_id = title +"_"+ index;

		return '<div class="'+title+'_content">\
					<label for="'+template_id+'" class="'+title+'_label"><span class="'+title+'_span"><i class="fa fa-'+data.label+' '+title+'_icon"></i></span></label>\
					<input type="text" id="'+template_id+'" class="'+title+'_input">\
				</div>';
	};
}( jQuery ));