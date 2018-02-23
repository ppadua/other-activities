$(document).ready(function(){
	var index_count = 0 ; 
	$("#users").append(user_template(index_count))

	$("body").on("click", ".next, .prev", function(){
		var button = $(this);

		if($(button).hasClass("next")){
			var user_top_length_0 = $(".users.page_0").css("top") != undefined ? parseInt($(".users.page_0").css("top").replace("px", "")) : "";
			var user_top_length_1 = $(".users.page_1").css("top") != undefined ? parseInt($(".users.page_1").css("top").replace("px", "")) : "";
			var user_top_length_2 = $(".users.page_2").css("top") != undefined ? parseInt($(".users.page_2").css("top").replace("px", "")) : "";
			var user_top_length_3 = $(".users.page_3").css("top") != undefined ? parseInt($(".users.page_3").css("top").replace("px", "")) : "";

	        if($(".users.page_0").prev().length != 0){
		        var first_page = setInterval(first_page_timer, 5)
		        var second_page = setInterval(second_page_timer, 10)
		        var third_page = setInterval(third_page_timer,20)
		        var fourth_page = setInterval(fourth_page_timer, 30)
		        function first_page_timer(){
					var page_0 = $(".users.page_0");

		    		if(page_0.prev().length != 0){
		      		  $(".users.page_0").fadeOut();

		    			$(".users.page_0").css("top", user_top_length_0);
		        		user_top_length_0++;

			        	if(user_top_length_0 > 180){
			        		user_top_length_0 = 180;
			    			if(page_0.prev().length == 1){
				    			page_0.prev().addClass("page_0");
				    			page_0.removeClass("page_0");
			    			}
			    			else
			    				page_0.removeClass("page_0");

			        		clearInterval(first_page);
			        	}
		        	}
	        	}
		        function second_page_timer(){
	        		user_top_length_1++;
		    		$(".users.page_1").css("top", user_top_length_1);

		        	if(user_top_length_1 >= 120){
		    			var page_1 = $(".users.page_1");
		    			if(page_1.prev().length == 1){
			    			page_1.prev().addClass("page_1");
			    			page_1.removeClass("page_1");
		    			}
		    			else
		    				page_1.removeClass("page_1");

		        		clearInterval(second_page);
		        	}
	        	}
		        function third_page_timer(){
	        		user_top_length_2++;
		    		$(".users.page_2").css("top", user_top_length_2);

		        	if(user_top_length_2 >= 110){
		    			var page_2 = $(".users.page_2");
		    			if(page_2.prev().length == 1){
			    			page_2.prev().addClass("page_2");
			    			page_2.removeClass("page_2");
			    		}
			    		else
		    				page_2.removeClass("page_2");

		        		clearInterval(third_page);
		        	}
	        	}
		        function fourth_page_timer(){
	        		user_top_length_3++;
		    		$(".users.page_3").css("top", user_top_length_3);

		        	if(user_top_length_3 >= 100){
		    			var page_3 = $(".users.page_3");
		    			if(page_3.prev().length == 1){
			    			page_3.prev().removeClass("hidden").addClass("page_3");
			    			page_3.removeClass("page_3");
		    			}
		    			else
		    				page_3.removeClass("page_3");

		        		clearInterval(fourth_page);
		        	}
	        	}
        	}
		}
		else{
			var first_prev_page = $(".users.page_0");
	       	var user_top_length_0 = first_prev_page.next().css("top") != undefined ? parseInt(first_prev_page.next().css("top").replace("px", "")) : "";
	        var first_page = setInterval(first_page_timer, 1)

	        function first_page_timer(){
	        	if(first_prev_page.next().length != 0){
        			user_top_length_0--;

		        	if(first_prev_page.next().length == 1){
		        		first_prev_page.css("top", "").removeClass("page_0").addClass("page_1").next().addClass("page_0").fadeIn();
	    				$(first_prev_page).next().css("top", user_top_length_0);
		        	}

		        	if(first_prev_page.prev().length == 1){
		        		first_prev_page.prev().css("top", "").removeClass("page_1").addClass("page_2");
	    				$(first_prev_page).css("top", 110);
	    				$(first_prev_page).prev().css("top", 100);
		        	}

		        	if(first_prev_page.prev().prev().length == 1){
		        		first_prev_page.prev().prev().css("top", "").removeClass("page_2").addClass("page_3").prev().removeClass("page_3").addClass("hidden");
    					$(first_prev_page).prev().prev().css("top", 90);
		        	}

			        if(user_top_length_0 == 120)
			      		clearInterval(first_page);
		      	}
        	}
		}
	})

});



function user_template(index){
	var template = "";
	for (var i = users.length - 1; i >= 0; i--) {
		template+= " <div class='users "+(i > 3 ? 'hidden' : 'page_'+i)+"' >\
			<div class='user_info'> \
				<img src='"+users[i].image+"' alt='' /> \
				<div class='user_name'>\
				<p>"+users[i].name+"</p> \
				<p>"+users[i].job_title+"</p> \
				<p>"+users[i].company+"</p> \
				</div>\
			</div> \
			<div class='user_description'>"+users[i].description+"</div> \
		</div>"
	}

	return template;
}

var users = [
	{
		"id" : 1,
		"image" : "/assets/card_motion/image/pj.jpg",
		"name" : "Paul John Padua",
		"company" : "Village88",
		"job_title" : "Software Engineer",
		"description" : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
	},
	{
		"id" : 2,
		"image" : "/assets/card_motion/image/noah.jpg",
		"name" : "Noah Jerreel Guillen",
		"company" : "Village88",
		"job_title" : "Software Engineer",
		"description" : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
	},
	{
		"id" : 3,
		"image" : "/assets/card_motion/image/mark.jpg",
		"name" : "Mark Abi Pogi Guillen",
		"company" : "Village88",
		"job_title" : "Software Engineer",
		"description" : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
	},
	{
		"id" : 4,
		"image" : "/assets/card_motion/image/jadee.jpg",
		"name" : "Jan Dreau Ganggangan",
		"company" : "Village88",
		"job_title" : "Software Engineer",
		"description" : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
	},
	{
		"id" : 5,
		"image" : "/assets/card_motion/image/john_s.jpg",
		"name" : "John David Supsupin",
		"company" : "Village88",
		"job_title" : "Chief Engineer",
		"description" : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
	},
	{
		"id" : 6,
		"image" : "/assets/card_motion/image/michael.jpg",
		"name" : "Michael Choi",
		"company" : "Village88",
		"job_title" : "CEO",
		"description" : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
	},
	{
		"id" : 7,
		"image" : "/assets/card_motion/image/jeric.jpg",
		"name" : "Jeric Cartas",
		"company" : "Village88",
		"job_title" : "Software Engineer",
		"description" : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
	},
	{
		"id" : 8,
		"image" : "/assets/card_motion/image/jerwin.jpg",
		"name" : "Jerwin Fernandez",
		"company" : "Village88",
		"job_title" : "Software Engineer",
		"description" : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
	},
	{
		"id" : 9,
		"image" : "/assets/card_motion/image/chris.jpg",
		"name" : "Christopher Jon-Jon Padua",
		"company" : "Village88",
		"job_title" : "Software Engineer",
		"description" : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
	}
]
