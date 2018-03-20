$(document).ready(function(){
	$("#users").append(user_template(0))
	
	$("body").on("click", ".next, .prev", function(){
		var button = $(this);
		button.attr("href", "javascript:void(0)");

		if($(button).hasClass("next")){
			var user_top_length_0 = $(".users.page_0").css("top") != undefined ? parseInt($(".users.page_0").css("top").replace("px", "")) : "";
			var user_top_length_1 = $(".users.page_1").css("top") != undefined ? parseInt($(".users.page_1").css("top").replace("px", "")) : "";
			var user_top_length_2 = $(".users.page_2").css("top") != undefined ? parseInt($(".users.page_2").css("top").replace("px", "")) : "";
			var user_top_length_3 = $(".users.page_3").css("top") != undefined ? parseInt($(".users.page_3").css("top").replace("px", "")) : "";

	        if($(".users.page_0").prev().length != 0){
		        var first_page = setInterval(first_page_timer, 5);
		        var second_page = setInterval(second_page_timer, 10);
		        var third_page = setInterval(third_page_timer,15);
		        var fourth_page = setInterval(fourth_page_timer,20);

		        function first_page_timer(){
	        		user_top_length_0++;
	      		 	page_timer($(".users.page_0"), "page_0", user_top_length_0, 180, first_page);
	        	}

		        function second_page_timer(){
	        		user_top_length_1++;
	      		 	page_timer( $(".users.page_1"), "page_1", user_top_length_1, 120, second_page);
	        	}

		        function third_page_timer(){
	        		user_top_length_2++;
	      		 	page_timer($(".users.page_2"), "page_2", user_top_length_2, 110, third_page);
	        	}
		        function fourth_page_timer(){
	        		user_top_length_3++;
	      		 	page_timer($(".users.page_3"), "page_3", user_top_length_3, 100, fourth_page);
				    button.attr("href", "");
	        	}
        	}
		}
		else{
			var first_prev_page = $(".users.page_0");
	       	var user_top_length_0 = first_prev_page.next().css("top") != undefined ? parseInt(first_prev_page.next().css("top").replace("px", "")) : "";

	        if(first_prev_page.next().length != 0){
		        var first_page = setInterval(first_page_timer, 5)

		        function first_page_timer(){
		        	if(first_prev_page.next().length != 0){
	        			user_top_length_0--;

			        	if(first_prev_page.next().length == 1){
							first_prev_page.next()
			        					   .addClass("page_0")
										   .fadeIn()
										   .css("top", user_top_length_0);
			        		
			        		first_prev_page.css("top", 110)
							        	   .removeClass("page_0")
							        	   .addClass("page_1");
			        	}

			        	if(first_prev_page.prev().length == 1){
			        		first_prev_page.prev()
							        	   .css("top", 100)
							        	   .addClass("page_2")
							        	   .removeClass("page_1");
			        	}

			        	if(first_prev_page.prev().prev().length == 1){
			        		first_prev_page.prev()
								           .prev().css("top", 90)
								           .addClass("page_3")
								           .removeClass("page_2");
			        	}

			        	if(first_prev_page.prev().prev().prev().length == 1){
			        		first_prev_page.prev()
						        		   .prev()
						        		   .prev()
						        		   .addClass("hidden")
						        		   .removeClass("page_3");
			        	}
	        			
				        if(user_top_length_0 <= 120){
				      		clearInterval(first_page);
				      		button.attr("href", "");
				        }
			      	}
	        	}
        	}
		}
	})
});

function page_timer(element, page_name, expect_length, transition_length, clear_interval){
	if(page_name == "page_0")
		element.fadeOut().css("top", expect_length);
	else
		element.css("top", expect_length);


	if(expect_length > transition_length){
		if(element.prev().length == 1){
			element.prev().removeClass(page_name == "page_3" ? "hidden" : "").addClass(page_name);
			element.removeClass(page_name);
		}
		else
			element.removeClass(page_name);

		clearInterval(clear_interval);
	}
}


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
		"image" : "https://media.licdn.com/dms/image/C4E03AQECSY5XsOAaNA/profile-displayphoto-shrink_100_100/0?e=1524794400&v=alpha&t=6WGjjcA66e2yLzGgIBNhJYJyU-08kFOWCQUJLSLuFXI",
		"name" : "Paul John Padua",
		"company" : "Village88",
		"job_title" : "Software Engineer",
		"description" : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
	},
	{
		"id" : 2,
		"image" : "https://media.licdn.com/media/AAEAAQAAAAAAAArwAAAAJDYwZWU0OTE2LTRhNjgtNGVjMS04NGI2LTBiODk1MDllNGE5NA.jpg",
		"name" : "Noah Jerreel Guillen",
		"company" : "Village88",
		"job_title" : "Software Engineer",
		"description" : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
	},
	{
		"id" : 3,
		"image" : "https://media.licdn.com/media/p/5/005/03e/024/072de32.jpg",
		"name" : "Mark Abi Pogi Guillen",
		"company" : "Village88",
		"job_title" : "Software Engineer",
		"description" : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
	},
	{
		"id" : 4,
		"image" : "https://media.licdn.com/media/p/8/005/03d/320/1e01a8d.jpg",
		"name" : "Jan Dreau Ganggangan",
		"company" : "Village88",
		"job_title" : "Software Engineer",
		"description" : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
	},
	{
		"id" : 5,
		"image" : "http://www.4ye.co.uk/wp-content/uploads/2014/11/Stitch_by_cHaRiSmIc.jpg",
		"name" : "John David Supsupin",
		"company" : "Village88",
		"job_title" : "Chief Engineer",
		"description" : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
	},
	{
		"id" : 6,
		"image" : "http://www.4ye.co.uk/wp-content/uploads/2014/11/Stitch_by_cHaRiSmIc.jpg",
		"name" : "Michael Choi",
		"company" : "Village88",
		"job_title" : "CEO",
		"description" : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
	},
	{
		"id" : 7,
		"image" : "http://www.4ye.co.uk/wp-content/uploads/2014/11/Stitch_by_cHaRiSmIc.jpg",
		"name" : "Jeric Cartas",
		"company" : "Village88",
		"job_title" : "Software Engineer",
		"description" : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
	},
	{
		"id" : 8,
		"image" : "http://www.4ye.co.uk/wp-content/uploads/2014/11/Stitch_by_cHaRiSmIc.jpg",
		"name" : "Jerwin Fernandez",
		"company" : "Village88",
		"job_title" : "Software Engineer",
		"description" : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
	},
	{
		"id" : 9,
		"image" : "http://www.4ye.co.uk/wp-content/uploads/2014/11/Stitch_by_cHaRiSmIc.jpg",
		"name" : "Christopher Jon-Jon Padua",
		"company" : "Village88",
		"job_title" : "Software Engineer",
		"description" : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
	}
]
