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
    $( "#hideo" ).hideo("test").attr("name", "test");
    $( "#harukie" ).haruki();
    $( "#hoshi" ).hoshi();
    $( "#juro" ).juro();
    $( "#madoka" ).madoka();
});
