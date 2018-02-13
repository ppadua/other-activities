$(document).ready(function(){

	$("input").each(function(){
		if($(this).attr("class") != undefined){
			switch($(this).attr("class")){
				case "hideo": $(this).hideo();break;
				case "haruki":$(this).haruki();break;
				case "hoshi":$(this).hoshi();break;
				case "juro":$(this).juro();break;
				case "madoka":$(this).madoka();break;
			}
		}
	})

    $( "#hideo" ).hideo();
    $( "#harukie" ).haruki();
    $( "#hoshi" ).hoshi({color : ""});
    $( "#juro" ).juro();
    $( "#madoka" ).madoka();
});
