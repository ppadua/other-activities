$(document).ready(function(){
	
	$("body").on("click", "#ruri .ruri_content", function(){
			$(this).addClass("ruri_active");
	    $(this).find(".ruri_span").css("color", "#a3d39c")

	 	$(this).find(".ruri_span").animate({
				'opacity': '1'
			}, {
			step: function (now, fx) {
				$(this).css({"transform": "translate3d(0, 48px, 0) scale3d(0.655, 0.655, 1)"});
			},
		    easing: 'linear'
	    }, 'linear'); 
	})
	$("body").on("blur", "#ruri .ruri_content", function(){
		$("#ruri .ruri_content").each(function(){
    		var ruri_content = $(this);
			if($(ruri_content).find(".ruri_input").val().trim() == ""){
				$(ruri_content).removeClass("ruri_active");
		        $(ruri_content).find(".ruri_span").css("color", "#696969");
			    $(ruri_content).find(".ruri_span").animate({
			          'opacity': '1'
			        }, {
		        	step: function (now, fx) {
			            $(this).css({"transform": ""});
		       		},
			        easing: 'linear'
		        }, 'linear'); 
			}
		})
	});

	$("body").on("click", "#manami .manami_content", function(){
		$(this).addClass("manami_active")
	})
	.on("blur", "#manami .manami_content", function(){
		$("#manami .manami_content").each(function(){
			if($(this).find(".manami_input").val().trim() == "")
				$(this).removeClass("manami_active")
		})
	});

	$("body").on("click", "#chisato .chisato_content", function(){
		$(this).addClass("chisato_active")
	})
	.on("blur", "#chisato .chisato_content", function(){
		$("#chisato .chisato_content").each(function(){
			if($(this).find(".chisato_input").val().trim() == "")
				$(this).removeClass("chisato_active")
		})
	});

	$("body").on("click", "#kohana .kohana_content", function(){
		$(this).addClass("kohana_active")
	})
	.on("blur", "#kohana .kohana_content", function(){
		$("#kohana .kohana_content").each(function(){
			if($(this).find(".kohana_input").val().trim() == "")
				$(this).removeClass("kohana_active")
		})
	});

	$("body").on("click", "#fumi .fumi_content", function(){
		$(this).addClass("fumi_active")
	})
	.on("blur", "#fumi .fumi_content", function(){
		$("#fumi .fumi_content").each(function(){
			if($(this).find(".fumi_input").val().trim() == "")
				$(this).removeClass("fumi_active")
		})
	});
});

