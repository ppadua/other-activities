$(document).ready(function(){
	$("input").each(function(){
		if($(this).attr("class") != undefined){
			switch($(this).attr("class")){
				case "hideo":
					 $(this).hideo();
				break;
				case "haruki":
					$(this).haruki();
				break;
				case "hoshi":
					$(this).hoshi();
				break;
				case "juro":
					$(this).juro();
				break;
				case "madoka":
					$(this).madoka();
				break;
			}
		}
	})
	// console.log($( "#hideo" ).hideo())
    $( "#hideo" ).hideo();
    $( "#harukie" ).haruki();
    $( "#hoshi" ).hoshi();
    $( "#juro" ).juro();
    $( "#madoka" ).madoka();

    $( ".test1" ).input_style("hideo");
    $( ".test2" ).input_style("haruki");
    $( ".test3" ).input_style("hoshi");
    $( ".test4" ).input_style("juro");
    $( ".test5" ).input_style("madoka");

});
