$(document).ready(function(){
	$("input").each(function(){
		if($(this).attr("class") != undefined){
			switch($(this).attr("class")){
				case "hideo": close_section = true; $(this).hideo();break;
				case "haruki":close_section = true;$(this).haruki();break;
				case "hoshi":close_section = true;$(this).hoshi();break;
				case "juro":close_section = true;$(this).juro();break;
				case "madoka":close_section = true;$(this).madoka();break;
			}
		}
	})
	
    $( "#hideo" ).hideo();
    $( "#harukie" ).haruki();
    $( "#hoshi" ).hoshi();
    $( "#juro" ).juro();
    $( "#madoka" ).madoka();
});
