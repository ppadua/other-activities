function plugin_section(input, title){
	/* Create a section per */
	input.wrap("<section id='"+title+"'>");
	input.closest("section#"+input.attr("id")).prepend("<h3>"+title+"</h3>");

	return {title : title }
}