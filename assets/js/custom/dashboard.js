$(document).ready(function(){
	var index_count = 0;
	var is_counting = true;
	var compiled_to_be_saved = [];

	shuffled_tasks();

	setTimeout(function(){
		$(".sub_projects").first().click()
	}, 150)

	$("#main_assigning_to #assigned_to_select").empty().append(set_users());


	/* Left Content */
	$("body").on("click", ".sub_projects", function(){
		var project = $(this);
		var project_color = project.find(".project_color");

		$(".sub_projects").removeClass("active_project");
		$(project).addClass("active_project");
		$("#right_content").addClass("hidden");

		$("#title_and_filter_content h3").text(project.text()).css("color", project_color.attr("data-project-color"))
		$("#title_and_filter_content #task_details li").css("border-color",  project_color.attr("data-project-color"))
		$("#title_and_filter_content #task_details .task_detail_option").css("background-color",  project_color.attr("data-project-color"))

		show_main_tasks(project.attr("data-project-id"))
	});
	/* End of Left Content */


	/* Main Task Functions*/
	sorting_element("#sprint_cycle_sort, #product_backlog_sort");

	$("body").on("click", "#add_main_task input.btn-primary", function(){
		var id_generator = Math.floor((Math.random() * 10000000) + 21);
		var main_project = $("#main_projects li.active_project");
		var add_main_data = {
			index : 1,
			task_id : id_generator,
			is_checked : 0,
			estimated_points : 0,
			sub_task_assigned_ids : [],
			task_detail : 2,
			task_type : 1,
			task_title : "",
			task_description  : "",
			main_assigned_person_id : 1,
			main_assigned_person_image : "../assets/images/no_image.png",
			main_project_tag : [{project_id: main_project.attr("data-project-id"), project_name: main_project.find(".project_name").text(), project_color: main_project.find(".project_color").attr("data-project-color")}],
			sub_project_tag : [],
			sub_tasks : []
		}

		tasks.push(add_main_data)

		$("#product_backlog_sort").prepend(main_task_template(add_main_data));

		$(".main_task_status_select, .main_task_detail_select").selectpicker();
		$("#main_tasks li[data-task-id='"+id_generator+"'] .task_title input").trigger("click").focus();

		update_main_task_index(".main_sort");
	});

	$("body").on("click", "#main_tasks li", function(){
		var id_generator = Math.floor((Math.random() * 10000000) + 21);
		var selected_main_task = $(this);

		$("#main_tasks li").removeClass("active_main_task");
		selected_main_task.addClass("active_main_task");
		$("#right_content").removeClass("hidden");

		for (var i = 0; i < tasks.length; i++) {
			if(tasks[i].task_id == selected_main_task.attr("data-task-id")){
				var json_data = tasks[i];
				json_data.index 			= 1;
				json_data.estimated_points  = selected_main_task.find(".estimated_points input").val();
				json_data.task_detail 		= selected_main_task.find("div.main_task_status_select select.main_task_status_select option:selected").val();
				json_data.task_type 		= selected_main_task.find("div.main_task_detail_select select.main_task_detail_select option:selected").val();
				json_data.task_title 		= selected_main_task.find(".task_title input").val();
				json_data.is_checked 		= selected_main_task.find(".check_icon i").hasClass("fa-check-circle-o") ? 0 : 1;
				json_data.sub_task_assigned_ids = _.uniq(json_data.sub_tasks.map(a => a.main_assigned_to_id));
				json_data.sub_task_assigned_person = [];

				for (var k = 0; k < json_data.sub_task_assigned_ids.length; k++) {
					var user_id = users.map(a => a.value).indexOf(json_data.sub_task_assigned_ids[k]);

					if(user_id != -1)
						json_data.sub_task_assigned_person.push(users[user_id])
				}

				$("#right_content").attr("data-main-task-id", tasks[i].task_id).empty().append(main_details_template(json_data));
			}
		}

		$("#status_and_details .selectpicker").selectpicker();
		$("#sub_tasks_section .selectpicker").selectpicker();
		sorting_element("#remaining_task_sort, #done_task_sort");
		update_main_task_index(".subtask_sort");
	});

	$("body").on("click", ".mark_task, #sub_task_mark_task i", function(){
		var mark_task = $(this);
		var task_status = mark_task.closest(".check_icon").siblings(".main_task_status").find(".main_task_status_select");
		var task_id = tasks.map(a => a.task_id).indexOf(parseInt($(mark_task).closest("li").attr("data-task-id")));

		if(mark_task.hasClass("mark_task") && (mark_task.closest("#left_content").length == 1 || mark_task.closest("#sub_tasks_section").length == 1)){
			if(mark_task.hasClass("fa-check-circle-o")){
				if(mark_task.closest(".check_icon").siblings(".task_title").children("input").val().trim() != "" && mark_task.closest(".check_icon").siblings(".task_assigned_to").children("img").attr("src") != "../assets/images/no_image.png"){
					mark_task.removeClass("fa-check-circle-o").addClass("fa-check-circle");
					mark_task.closest(".check_icon").siblings(".main_task_status").find(".main_task_status_select").selectpicker("val", 3)
					
					if(mark_task.closest("#sub_tasks_section").length == 1){
						task_id = tasks.map(a => a.task_id).indexOf(parseInt($(mark_task).closest("#right_content").attr("data-main-task-id")));
						var sub_task_id = tasks[task_id].sub_tasks.map(a => a.sub_task_id).indexOf(parseInt(mark_task.closest("li").attr("data-sub-task-id")));
						tasks[task_id].sub_tasks[sub_task_id].is_checked = 1;
						tasks[task_id].sub_tasks[sub_task_id].task_detail = 3;

						if(task_status.find("option:selected").val() == 3 && task_status.closest("#remaining_task_sort").length == 1){
							$(task_status).selectpicker("destroy");
							var main_task_pending = $(task_status).closest("li").clone();
							$(task_status).closest("li").remove();	
							$("#done_task_sort").append($(task_status).closest("li").clone()).find(".main_task_status_select").selectpicker().selectpicker('val', 3);
						}


					}

					if(mark_task.closest("#product_backlog_sort") && task_status.find("option:selected").val() == 3 && task_status.closest("#product_backlog_sort").length == 1){
						$(task_status).selectpicker("destroy");
						var main_task_pending = $(task_status).closest("li").clone();
						$(task_status).closest("li").remove();	
						$("#sprint_cycle_sort").prepend($(task_status).closest("li").clone()).find(".main_task_status_select").selectpicker().selectpicker('val', 3);
						update_main_task_index(".main_sort");
					}
				}
			}
			else {
				mark_task.removeClass("fa-check-circle").addClass("fa-check-circle-o");

				if(mark_task.closest("#sub_tasks_section").length == 1){
					task_id = tasks.map(a => a.task_id).indexOf(parseInt($(mark_task).closest("#right_content").attr("data-main-task-id")));
					var sub_task_id = tasks[task_id].sub_tasks.map(a => a.sub_task_id).indexOf(parseInt(mark_task.closest("li").attr("data-sub-task-id")));
					tasks[task_id].sub_tasks[sub_task_id].is_checked = 0;
					tasks[task_id].sub_tasks[sub_task_id].task_detail = 1;


					if(task_status.closest("#done_task_sort").length == 1){
						$(task_status).selectpicker("destroy");
						var main_task_pending = $(task_status).closest("li").clone();

						$(task_status).closest("li").remove();	
						$("#remaining_task_sort").append(main_task_pending);
						$(main_task_pending).find(".main_task_status_select").selectpicker().selectpicker('val', 1);
					}

					update_main_task_index(".subtask_sort");
				}
				else if(mark_task.closest("#sprint_cycle_sort").length == 1){
					$(mark_task).closest(".check_icon").siblings(".main_task_status").find(".main_task_status_select").selectpicker("val", 1)
					update_main_task_index(".subtask_sort");
				}
			}
		}
		else if(mark_task.closest("#main_task_status_and_details").length == 1){
			$("#main_tasks li[data-task-id='"+mark_task.closest("#right_content").attr("data-main-task-id")+"'] .check_icon i").trigger("click");
		}

		save_changes(tasks[task_id]);
	});

	$("body").on("click", ".task_assigned_to img, .main_person_assigned", function(){
		var task_assigned = $(this);
		if(task_assigned.closest("div").hasClass("task_assigned_to") && task_assigned.closest("#sub_tasks_section").length == 0){
			$("#main_assigning_to").find("input[name=task_id]").val(task_assigned.closest("li").attr("data-task-id"));
			$("#main_assigning_to").find("input[name=sub_task_id]").val("");
		}
		else if(task_assigned.closest("#sub_tasks_section").length == 1){
			$("#main_assigning_to").find("input[name=sub_task_id]").val(task_assigned.closest("li").attr("data-sub-task-id"));
			$("#main_assigning_to").find("input[name=task_id]").val(task_assigned.closest("#right_content").attr("data-main-task-id"));
		}
		else {
			$("#main_assigning_to").find("input[name=task_id]").val(task_assigned.closest("#right_content").attr("data-main-task-id"));
			$("#main_assigning_to").find("input[name=sub_task_id]").val("");
		}

		setTimeout(function(){
			task_assigned.popover({
				html : true,
				placement: 'bottom',
				content: $("#main_assigning_to").html(),
				container: "body"
			});

			task_assigned.popover("show");
			$(".popover #assigned_to_select").selectpicker();
		}, 150);
	});

	$("body").on("changed.bs.select", "#assigned_to_select", function(){
		var assignee = $(this);

		for (var i = 0; i < tasks.length; i++) {
			if(tasks[i].task_id == assignee.closest(".header").find("input[name=task_id]").val()){
				if( assignee.closest(".header").find("input[name=sub_task_id]").val() == ""){
					tasks[i].main_assigned_person_image = "../assets/images/"+assignee.find("option:selected").attr("data-image-name")+".jpg";
					tasks[i].main_assigned_person_name = assignee.attr("data-assignee-name");
					tasks[i].main_assigned_person_id = assignee.val();

					$("#main_tasks li[data-task-id="+tasks[i].task_id+"] .task_assigned_to img").attr("src", tasks[i].main_assigned_person_image );
					$("#main_tasks li[data-task-id="+tasks[i].task_id+"]").trigger("click");
				}
				else{
					var subtask_index = tasks[i].sub_tasks.map(a => a.sub_task_id).indexOf(parseInt(assignee.closest(".header").find("input[name=sub_task_id]").val()));
					tasks[i].sub_tasks[subtask_index].main_assigned_to_img = "../assets/images/"+assignee.find("option:selected").attr("data-image-name")+".jpg";
					tasks[i].sub_tasks[subtask_index].main_assigned_to_name = assignee.find("option:selected").text();
					tasks[i].sub_tasks[subtask_index].main_assigned_to_id = parseInt(assignee.val());

					$("#main_tasks li[data-task-id="+tasks[i].task_id+"] .task_assigned_to img").attr("src", tasks[i].main_assigned_person_image );
					$("#main_tasks li[data-task-id="+tasks[i].task_id+"]").trigger("click");
					$("#main_tasks li[data-task-id="+tasks[i].task_id+"] .task_assigned_to span").text($("#add_sub_task_details .person_assigned_to").not(".main_person_assigned").length)
					break;
				}

				save_changes();
			}
		}
	});

	$("body").on("click", ".assigned_to_me", function(){
		var assignee = $(this);

		for (var i = 0; i < tasks.length; i++) {
			if(tasks[i].task_id == assignee.closest(".header").find("input[name=task_id]").val()){
				if( assignee.closest(".header").find("input[name=sub_task_id]").val() == ""){
					tasks[i].main_assigned_person_image = "../assets/images/"+assignee.attr("data-assignee-image")+".jpg";
					tasks[i].main_assigned_person_name = assignee.attr("data-assignee-name");
					tasks[i].main_assigned_person_id = assignee.attr("data-assignee-id");

					$("#main_tasks li[data-task-id="+tasks[i].task_id+"] .task_assigned_to img").attr("src", tasks[i].main_assigned_person_image );
					$("#main_tasks li[data-task-id="+tasks[i].task_id+"] .task_assigned_to img").attr("data-user-name", tasks[i].main_assigned_person_name);
					$("#main_tasks li[data-task-id="+tasks[i].task_id+"]").trigger("click");
				}
				else{
					var subtask_index = tasks[i].sub_tasks.map(a => a.sub_task_id).indexOf(parseInt(assignee.closest(".header").find("input[name=sub_task_id]").val()));
					tasks[i].sub_tasks[subtask_index].main_assigned_to_img = "../assets/images/"+assignee.attr("data-assignee-image")+".jpg";
					tasks[i].sub_tasks[subtask_index].main_assigned_to_name = assignee.attr("data-assignee-name");
					tasks[i].sub_tasks[subtask_index].main_assigned_to_id = parseInt( assignee.attr("data-assignee-id"));

					$("#main_tasks li[data-task-id="+tasks[i].task_id+"] .task_assigned_to img").attr("src", tasks[i].main_assigned_person_image );
					$("#main_tasks li[data-task-id="+tasks[i].task_id+"] .task_assigned_to img").attr("data-user-name", tasks[i].main_assigned_person_name);
					$("#main_tasks li[data-task-id="+tasks[i].task_id+"]").trigger("click");
					$("#main_tasks li[data-task-id="+tasks[i].task_id+"] .task_assigned_to span").text($("#add_sub_task_details .person_assigned_to").not(".main_person_assigned").length);

					break;
				}

				save_changes(tasks[i]);
			}
		}
	});

	$("body").on("keyup", ".estimated_points input, .task_title input, #main_task_title_and_description textarea:eq(0)", function(){
		var input_value = $(this);
		var task_id = tasks.map(a => a.task_id).indexOf(parseInt(input_value.closest("li").attr("data-task-id")));

		if(tasks[task_id].task_id == input_value.closest("li").attr("data-task-id")){
			if(input_value.closest(".estimated_points").length == 1)
				tasks[task_id].estimated_points = input_value.val();
			else
				tasks[task_id].task_title = input_value.val();


			$("#main_tasks li[data-task-id="+tasks[task_id].task_id+"]").trigger("click");
		}
		else if(tasks[task_id].task_id == input_value.closest("#right_content").attr("data-main-task-id") && input_value.closest("#sub_tasks_section").length == 1){
			var sub_task_id = tasks[task_id].sub_tasks.map(a => a.sub_task_id).indexOf(parseInt(input_value.closest("li").attr("data-sub-task-id")));

			if(input_value.closest(".estimated_points").length == 1)
				tasks[task_id].sub_tasks[sub_task_id].subtask_estimated_points = input_value.val();
			else
				tasks[task_id].sub_tasks[sub_task_id].subtask_title = input_value.val();
		}
		else if(tasks[task_id].task_id == input_value.closest("#right_content").attr("data-main-task-id") && input_value.closest("#main_task_title_and_description").length == 1){
			$("#main_tasks li[data-task-id="+tasks[task_id].task_id+"] .task_title input").val(input_value.val())
		}

		save_changes(tasks[task_id]);
	});

	$("body").on("keyup", "#main_task_title_and_description textarea:eq(1)", function(){
		var input_value = $(this);

		for (var i = 0; i < tasks.length; i++) {
			if(tasks[i].task_id == input_value.closest("#right_content").attr("data-main-task-id") && input_value.closest("#main_task_title_and_description").length == 1){
					tasks[i].task_description = input_value.val();
			}

			save_changes(tasks[i]);
		}
	});

	$("body").on("blur", ".task_title input", function(){
		var input_value = $(this);

		if(input_value.val().trim() == "")
			input_value.addClass("input_error");
		else
			input_value.removeClass("input_error");
	});

	/* End of Main Task Functions*/
	/* Subtask Task Functions*/
	$("body").on("click", "#crud_add_subtask button", function(){
		var crud_add_subtask = $(this);
		var id_generator = Math.floor((Math.random() * 10000000) + 21);
		var json_data = {
			"index" : 1,
			"is_done" : 0,
			"is_checked" : 0,
			"task_detail" : 2,
			"subtask_estimated_points": 0,
			"main_assigned_to_id" : 0,
			"main_assigned_to_img" : "../assets/images/no_image.png",
			"main_assigned_to_name" : "",
			"subtask_title" : "",
			"sub_task_id" : id_generator,
			"project_id" : 1,
			"project_color" : "blue" 
		}

		tasks[tasks.map(a => a.task_id).indexOf(parseInt(crud_add_subtask.closest("#right_content").attr("data-main-task-id")))].sub_tasks.push(json_data);
		save_changes(tasks.map(a => a.task_id).indexOf(parseInt(crud_add_subtask.closest("#right_content").attr("data-main-task-id"))));

		$("#remaining_task_sort").append(sub_task_template(json_data))
		$("#sub_tasks_section .selectpicker").selectpicker();
		update_main_task_index(".subtask_sort");
	});

	$("body").on("click", "#add_project_assigned_to", function(){
		var task_assigned = $(this); 
		var task_id = parseInt(task_assigned.closest("#right_content").attr("data-main-task-id"));
		var task = tasks.map(a => a.task_id).indexOf(task_id)
		var append_project = "";

		$("#assign_projects").find("input[name=task_id]").val(task_assigned.closest("#right_content").attr("data-main-task-id"));

		if(task != -1) {
			var project_ids = tasks[task].main_project_tag.map(a => a.project_id).concat(tasks[task].sub_project_tag.map(a => a.project_id));

			for (var i = 0; i < projects.length; i++) {
				if(_.difference(project_ids).indexOf(projects[i].value) == -1)
					append_project += '<option value="'+projects[i].value+'" data-color-tag="'+projects[i].color+'" data-content="<span data-option-color-tag='+projects[i].color+'></span><span>'+projects[i].name+'</span>"></option>';
			}

			$("#assign_projects select").empty().append(append_project)
		}


		setTimeout(function(){
			task_assigned.popover({
				html : true,
				placement: 'bottom',
				content: $("#assign_projects").html(),
				container: "body"
			});

			task_assigned.popover("show");
			$(".popover #assigned_project_select").selectpicker();
		}, 250);
	})

	$("body").on("changed.bs.select", "#assigned_project_select", function(){
		var assignee = $(this);

		for (var i = 0; i < tasks.length; i++) {
			var apps = tasks[i].sub_project_tag;
			var index = apps.map(function(item) {return item.project_id; });
			var is_show_tag = index.indexOf(parseInt(assignee.val())) != -1;

			if(is_show_tag === false){
				if(tasks[i].task_id == assignee.closest(".popover").find("input[name=task_id]").val()){
					if($("#main_tasks li[data-task-id="+tasks[i].task_id+"] .project_tags ul li").length != 0){
						tasks[i].sub_project_tag.push({
							project_id : parseInt(assignee.val()),
							project_color : assignee.children("option:selected").attr("data-color-tag"),
							project_name : assignee.children("option:selected").text(),
						});
					}
					else{
						tasks[i].main_project_tag.push({
							project_id : parseInt(assignee.val()),
							project_color : assignee.children("option:selected").attr("data-color-tag"),
							project_name : assignee.children("option:selected").text(),
						});
					}

					$("#main_tasks li[data-task-id="+tasks[i].task_id+"] .project_tags ul").empty().append(main_project_tag_template({sub_project_tag : tasks[i].sub_project_tag, main_project_tag : tasks[i].main_project_tag}));
					$("#main_tasks li[data-task-id="+tasks[i].task_id+"]").trigger("click");
					save_changes(tasks[i]);
				}
			}
		}
	});

	$("body").on("click", ".project_tag_see_more, .main_project_tag", function(){
		var project_tag = $(this); 
		var append_tags = "";
		
		$("#hidden_other_project ul").attr("data-task-id", project_tag.closest("#right_content").attr("data-main-task-id"));

		for (var i = 0; i < tasks.length; i++) {
			if(tasks[i].task_id == project_tag.closest("#right_content").attr("data-main-task-id") && project_tag.hasClass("project_tag_see_more")){
				for (var x = 0; x < tasks[i].sub_project_tag.length; x++) {
					if(x != 0){
						append_tags += '<li data-tag-id="'+tasks[i].sub_project_tag[x].project_id+'" data-tag-color="'+tasks[i].sub_project_tag[x].project_color+'" class=""><span style="color:white">'+tasks[i].sub_project_tag[x].project_name+'</span><span hidden="true" class="remove_project_tag glyphicon glyphicon-remove pull-right"></span></li>';
					}
				}
			}
			else if (tasks[i].task_id == project_tag.parents(".project_tags").closest("li").attr("data-task-id") && project_tag.hasClass("main_project_tag")){
				for (var x = 0; x < tasks[i].sub_project_tag.length; x++) {
					append_tags += '<li data-tag-id="'+tasks[i].sub_project_tag[x].project_id+'" data-tag-color="'+tasks[i].sub_project_tag[x].project_color+'" class=""><span style="color:white">'+tasks[i].sub_project_tag[x].project_name+'</span></li>';
				}
			}
		}

		$("#hidden_other_project ul").empty().append(append_tags);

		setTimeout(function(){
			project_tag.popover({
				html : true,
				placement: 'bottom',
				content: $("#hidden_other_project").html(),
				container: "body"
			});

			project_tag.popover("show");
		}, 250)
	});

	$("body").on("submit", "#delete_project_tag", function(){
		var project_tag = $(this);

		for (var i = 0; i < tasks.length; i++) {
			if(tasks[i].task_id == project_tag.find("input[name=main_task_id]").val() ){
				if(project_tag.find("input[name=is_main_tag]").val() != 1){
					for (var x = 0; x < tasks[i].sub_project_tag.length; x++) {
						if(tasks[i].sub_project_tag[x].project_id == project_tag.find("input[name=project_tag_id]").val()){
							var removeIndex = tasks[i].sub_project_tag.map(function(item) {return item.project_id; }).indexOf(parseInt(project_tag.find("input[name=project_tag_id]").val()));
							tasks[i].sub_project_tag.splice(removeIndex, 1);
						}
					}
				}
				else{
					if(tasks[i].sub_project_tag.length != 0){
						tasks[i].main_project_tag.splice(0, 1);
						tasks[i].main_project_tag.push(tasks[i].sub_project_tag[0]);
						tasks[i].sub_project_tag.splice(0, 1);
					}
				}


				$("#main_tasks li[data-task-id="+tasks[i].task_id+"] .project_tags ul").empty().append(main_project_tag_template(tasks[i]));
				$("#main_tasks li[data-task-id="+tasks[i].task_id+"]").trigger("click");
				$("#show_delete_project_tag_modal").modal('hide');
				save_changes(tasks[i]);
			}
		}


		return false;
	})

	$("body").on("click", "#crud_delete_subtask", function(){
		var confirmation = confirm("Are you sure to delete this task?");
		var task = tasks.map(a => a.task_id).indexOf(parseInt($(this).closest("#right_content").attr("data-main-task-id")))

		if (confirmation == true) {
			tasks.splice(task, 1);
			$("#right_content").addClass("hidden");
			show_main_tasks();
		} 
	})

	$("body").on("changed.bs.select", "#main_detail_project_tag", function(){
		var project_tag = $(this);
		var task_index = tasks.map(a => a.task_id).indexOf(parseInt(project_tag.closest("#right_content").attr("data-main-task-id")))
		var sub_task_index = tasks[task_index].sub_tasks.map(a => a.project_id).indexOf(parseInt(project_tag.closest("li").attr("data-sub-task-id")));
		var sub_task_id = tasks[task_index].sub_tasks.map(a => a.sub_task_id).indexOf(parseInt(project_tag.closest("li").attr('data-sub-task-id')));
		
		tasks[task_index].sub_tasks[sub_task_id].project_id = parseInt(project_tag.val());
		tasks[task_index].sub_tasks[sub_task_id].project_color = project_tag.find("option:selected").attr("data-color-option");

		var project_tags = _.union(tasks[task_index].sub_project_tag.map(a => a.project_id), tasks[task_index].main_project_tag.map(a => a.project_id));
		var sub_task_tags = tasks[task_index].sub_tasks.map(a => a.project_id);
		var remaining_need_tag = _.difference(sub_task_tags, project_tags);

		if(remaining_need_tag.length != 0){
			for (var i = 0; i < remaining_need_tag.length; i++) {
				tasks[task_index].sub_project_tag.push({
					project_id: remaining_need_tag[i], 
					project_name: project_tag.find("option:selected").attr("data-name-option"), 
					project_color: project_tag.find("option:selected").attr("data-color-option")
				})
			}

			$("#main_tasks li[data-task-id="+tasks[task_index].task_id+"] .project_tags ul").empty().append(main_project_tag_template({sub_project_tag : tasks[task_index].sub_project_tag, main_project_tag : tasks[task_index].main_project_tag}));
			$("#main_tasks li[data-task-id="+tasks[task_index].task_id+"]").trigger("click");
			save_changes(tasks[task_index]);
		}
	});

	$("body").on("click", ".task_assigned_to .glyphicon-trash", function(){
		var project_tag = $(this);
		var confirmation = confirm("Are you sure to delete this task?");

		if (confirmation == true) {
			var main_task_id = project_tag.closest("#right_content").attr("data-main-task-id")
			var task_index = tasks.map(a => a.task_id).indexOf(parseInt(project_tag.closest("#right_content").attr("data-main-task-id")))
			var sub_task_index = tasks[task_index].sub_tasks.map(a => a.project_id).indexOf(parseInt(project_tag.closest("li").attr("data-sub-task-id")));
			var sub_task_id = tasks[task_index].sub_tasks.map(a => a.sub_task_id).indexOf(parseInt(project_tag.closest("li").attr('data-sub-task-id')));

			tasks[task_index].sub_tasks.splice(sub_task_id, 1);
			$("#main_tasks li[data-task-id="+project_tag.closest("#right_content").attr("data-main-task-id")+"]").trigger("click");
			project_tag.closest("li").remove();

			setTimeout(function(){
				if($("#add_sub_task_details .person_assigned_to").not(".main_person_assigned").length == 0)
					$("#main_tasks li[data-task-id="+main_task_id+"] .task_assigned_to span").addClass("is_zero");
				else{
					$("#main_tasks li[data-task-id="+main_task_id+"] .task_assigned_to span").removeClass("is_zero").addClass("is_not_zero");
					$("#main_tasks li[data-task-id="+main_task_id+"] .task_assigned_to span").text($("#add_sub_task_details .person_assigned_to").not(".main_person_assigned").length);
				}
			}, 150)
		} 
	});

	$("body").on("click", ".task_assigned_to .is_not_zero", function(){
		var user_tag = $(this);
		var append_user = "";

		setTimeout(function(){
			$("#add_sub_task_details .person_assigned_to").not(".main_person_assigned").each(function(){
				append_user += "<li>"+$(this).find("img").attr("data-user-name")+"</li>";
			});

			$("#hidden_sub_user_assignee ul").empty().append(append_user);

			user_tag.popover({
				html : true,
				placement: 'bottom',
				content: $("#hidden_sub_user_assignee").html(),
				container: "body"
			});

			user_tag.popover("show");
		}, 150)	
	});

	$("body").on("click", ".remove_project_tag", function(){
		var project_tag = $(this)
		var is_alert = false;

		$(".popover").popover("destroy");

		$("#sub_tasks_section .task_assigned_to select").each(function(){
			if($(this).val() == project_tag.closest("li[data-tag-id]").attr("data-tag-id")) {
				is_alert = true;
				$("#show_alert").modal('show');
			}
		});

		if(project_tag.hasClass("remove_main_project_tag") && $("#add_sub_task_details .remove_project_tag").not(".remove_main_project_tag").length == 0){
			is_alert = true;
			$("#show_main_alert").modal('show');
		}

		if(is_alert === false){
			$("#show_delete_project_tag_modal form input[name=is_main_tag]").val(project_tag.hasClass("remove_main_project_tag") ? 1 : 0);
			$("#show_delete_project_tag_modal form input[name=main_task_id]").val(project_tag.closest("ul").attr("data-task-id"));
			$("#show_delete_project_tag_modal form input[name=project_tag_id]").val(project_tag.closest("li").attr("data-tag-id"));
			$("#show_delete_project_tag_modal").modal('show');
		}
	});

	/* End of Subtask Task Functions*/

	$("body").on("changed.bs.select", "#main_task_status_and_details .bootstrap-select.main_task_detail_select, #main_task_status_and_details .bootstrap-select.main_task_status_select", function(){
		if($(this).hasClass("main_task_detail_select"))
			$("#main_tasks li.active_main_task .main_task_detail .main_task_detail_select").selectpicker('val', $(this).find("option:selected").val());
		else{
			$("#main_tasks li.active_main_task .main_task_status .main_task_status_select").selectpicker('val', $(this).find("option:selected").val());
		}
	});

	$("body").on("changed.bs.select", "#main_tasks .bootstrap-select.main_task_status_select, #main_task_status_and_details .bootstrap-select.main_task_status_select", function(){
		var task_status = $(this);
		var task_value = $(this).val();
		var task_id = (task_status.closest("#right_content").length == 1) ? task_status.closest("#right_content").attr("data-main-task-id") : task_status.closest("li.active_main_task").attr("data-task-id");

		if(task_status.closest(".main_task_status").siblings(".task_title").children("input").val().trim() != "" && task_status.closest(".main_task_status").siblings(".task_assigned_to").children("img").attr("src") != "../assets/images/no_image.png"){
			if(task_status.find("option:selected").val() == 2 && ($("#main_tasks li[data-task-id="+task_id+"]").closest("#sprint_cycle_sort").length == 1)){
				$("#main_tasks li[data-task-id="+task_id+"]").find(".main_task_status_select").selectpicker("destroy");
				$("#main_tasks li[data-task-id="+task_id+"]").find(".main_task_detail_select").selectpicker("destroy");

				var main_task_pending = $("#main_tasks li[data-task-id="+task_id+"]").clone();
				$(main_task_pending).find(".check_icon .fa-check-circle").removeClass("fa-check-circle").addClass("fa-check-circle-o");
				$("#main_tasks li[data-task-id="+task_id+"]").remove();	
				$("#product_backlog_sort").append(main_task_pending);

				$(main_task_pending).addClass("unsortable");
				$(main_task_pending).find(".main_task_detail_select").selectpicker();
				$(main_task_pending).find(".main_task_status_select").selectpicker().selectpicker('val', 2);
			}
			else if(task_status.find("option:selected").val() == 1 && $("#main_tasks li[data-task-id="+task_id+"]").closest("#product_backlog_sort").length == 1){
				$("#main_tasks li[data-task-id="+task_id+"]").find(".main_task_status_select").selectpicker("destroy");
				$("#main_tasks li[data-task-id="+task_id+"]").find(".main_task_detail_select").selectpicker("destroy");
				
				var main_task_pending = $("#main_tasks li[data-task-id="+task_id+"]").clone();
				$(main_task_pending).find(".check_icon .fa-check-circle").removeClass("fa-check-circle").addClass("fa-check-circle-o");
				$("#main_tasks li[data-task-id="+task_id+"]").remove();	
				$("#sprint_cycle_sort").append(main_task_pending);

				$(main_task_pending).removeClass("unsortable");
				$(main_task_pending).find(".main_task_detail_select").selectpicker();
				$(main_task_pending).find(".main_task_status_select").selectpicker().selectpicker('val', 1);
			}
			else if(task_status.find("option:selected").val() == 3 && $("#main_tasks li[data-task-id="+task_id+"]").closest("#product_backlog_sort").length == 1){
				$("#main_tasks li[data-task-id="+task_id+"]").find(".main_task_status_select").selectpicker("destroy");
				$("#main_tasks li[data-task-id="+task_id+"]").find(".main_task_detail_select").selectpicker("destroy");
				
				var main_task_pending = $("#main_tasks li[data-task-id="+task_id+"]").clone();
				$("#main_tasks li[data-task-id="+task_id+"]").remove();	
				$("#sprint_cycle_sort").prepend(main_task_pending);

				$(main_task_pending).removeClass("unsortable");
				$(main_task_pending).find(".check_icon .fa-check-circle-o").removeClass("fa-check-circle-o").addClass("fa-check-circle");
				$(main_task_pending).find(".main_task_detail_select").selectpicker();
				$(main_task_pending).find(".main_task_status_select").selectpicker().selectpicker('val', 3);
				$(main_task_pending).click();
			}

			var id = tasks.map(a => a.task_id).indexOf(parseInt(task_id));

			main_task_pending = (main_task_pending != undefined) ? main_task_pending : task_status;

			if(tasks[id].task_id == task_id){
				tasks[id].task_detail = parseInt(main_task_pending.find("option:selected").val());

				if(main_task_pending.find("option:selected").val() == 3)
					tasks[id].is_checked = 1
				else
					tasks[id].is_checked = 0;

				var count_remaining_task = 0;
				var count_completed_task = 0;

				$("#main_tasks li .main_task_status select").each(function(){
					($(this).val() == 3) ? count_completed_task++ : count_remaining_task++;
				});

				$("#task_details li:eq(0) .task_detail_left").empty().text(count_remaining_task+" tasks");
				$("#task_details li:eq(1) .task_detail_left").empty().text(count_completed_task+" tasks");
			}

			save_changes(tasks[id]);
			update_main_task_index(".main_sort");
		}
		else{
			$("#main_tasks li[data-task-id="+task_id+"]").find(".main_task_status_select").selectpicker().selectpicker('val', 2);
		}
	});


	$("body").on("changed.bs.select", "#sub_tasks_section .bootstrap-select .main_task_status_select", function(){
		var task_status = $(this);

		if(task_status.closest(".main_task_status").siblings(".task_title").children("input").val().trim() != "" && task_status.closest(".main_task_status").siblings(".task_assigned_to").children("img").attr("src") != "../assets/images/no_image.png"){
			if(task_status.find("option:selected").val() == 3 && task_status.closest("#remaining_task_sort").length == 1){
				$(task_status).selectpicker("destroy");

				var main_task_pending = $(task_status).closest("li").clone();
				$(task_status).closest("li").remove();	
				$("#done_task_sort").append(main_task_pending);
				$(main_task_pending).find(".main_task_status_select").selectpicker().selectpicker('val', 3);
				main_task_pending.find(".check_icon").find(".mark_task.fa-check-circle-o").removeClass("fa-check-circle-o").addClass("fa-check-circle")
				$(main_task_pending).addClass("unsortable");
			}
			else if((task_status.find("option:selected").val() == 1 || task_status.find("option:selected").val() == 2) && task_status.closest("#done_task_sort").length == 1){
				$(task_status).selectpicker("destroy");
				var main_task_pending = $(task_status).closest("li").clone();

				$(task_status).closest("li").remove();	
				$("#remaining_task_sort").append(main_task_pending);
				$(main_task_pending).find(".main_task_status_select").selectpicker().selectpicker('val', task_status.find("option:selected").val());
				main_task_pending.find(".check_icon").find(".mark_task.fa-check-circle").removeClass("fa-check-circle").addClass("fa-check-circle-o")
			}

			main_task_pending = (main_task_pending != undefined) ? main_task_pending : task_status;
	 		var task_id = tasks.map(a => a.task_id).indexOf(parseInt(main_task_pending.closest("#right_content").attr("data-main-task-id")));

			if(tasks[task_id].task_id == main_task_pending.closest("#right_content").attr("data-main-task-id")){
				var sub_task_id = tasks[task_id].sub_tasks.map(a => a.sub_task_id).indexOf(parseInt(main_task_pending.closest("li").attr("data-sub-task-id")));
				tasks[task_id].sub_tasks[sub_task_id].task_detail = task_status.find("option:selected").val();

				if(task_status.find("option:selected").val() == 3){
					tasks[task_id].sub_tasks[sub_task_id].is_checked = 1
					$(main_task_pending).removeClass("unsortable");
				}
				else{
					tasks[task_id].sub_tasks[sub_task_id].is_checked = 0;
					$(main_task_pending).addClass("unsortable");
				}
			}

			save_changes(tasks[task_id]);
			update_main_task_index(".subtask_sort");
		}
		else{
			$(task_status).selectpicker().selectpicker('val', 2);
		}
	});

	$('body').on("submit", "#main_task_filters", function(){
        var searchText = $(this).find(".search_filter").val().toLowerCase();

		$('#main_tasks li .task_title input').each(function(){
			var currentLiText = $(this).val().toLowerCase();
			var showCurrentLi = currentLiText.indexOf(searchText) !== -1;
			$(this).closest('li').toggle(showCurrentLi);
		});

        return false;
    });

	$( "#dialog" ).dialog({
		autoOpen: false,
		open: function(event, ui) {
			var item = $(this);
			$(".ui-dialog-titlebar-close", ui.dialog | ui).hide();
			$(".ui-dialog-titlebar", ui.dialog | ui).hide();

			setTimeout(function() {
				item.dialog('close');
			}, 
			3000);
		},
		position: {
			my: 'left bottom',
			at: 'left bottom', of: window
		}
	});

	function save_changes(show_console){
		index_count = 0;
		compiled_to_be_saved.push(show_console)

		if(is_counting){
			is_counting = false;
			var countInterval = setInterval(function() {
				index_count++;
				if (index_count == 4) {
					index_count = 0;
					console.log(compiled_to_be_saved);
					is_counting = true;
					compiled_to_be_saved = [];
					$( "#dialog" ).dialog( "open" );
					clearInterval(countInterval)
				} 
			}, 1000);
		}
	}});

function set_users(){
	var append_users = "";
	for (var i = 0; i < users.length; i++) {
		append_users += '<option value="'+users[i].value+'" data-image-name="'+users[i].image_name+'">'+users[i].name+'</option>';	
	}

	return append_users;
}

function sorting_element(element){
	var connectwith = (element == "#sprint_cycle_sort, #product_backlog_sort") ? ".main_sort" : ".subtask_sort";
	$(element).sortable({
		handle:      'i.fa-sort',
		placeholder: 'sort-placeholder',
		connectWith: connectwith,
		receive: function(ev, ui) {
            if(ui.item.hasClass("unsortable"))
              ui.sender.sortable("cancel");
        },
		forcePlaceholderSize: true, 
		start: function( e, ui ){
       		ui.item.data( 'start-pos', ui.item.index()+1);
   		}, 
   		update: function( e, ui ) {
   			update_main_task_index(connectwith);
		}
	});

	$( element ).disableSelection();
}

function update_main_task_index(connectwith){
	if(connectwith == ".main_sort"){
		$.each($('#main_tasks .main_sort'), function(index, val) {
			var container = $(this); 

			$.each(container.find('>li'), function(index_cont, val) {
				$(this).find(".index_count").html(index_cont + 1)
			});
		});
	}
	else{
		$.each($('#sub_tasks_section .subtask_sort'), function(index, val) {
			var container = $(this); 

			$.each(container.find('>li'), function(index_cont, val) {
				$(this).find(".index_count").html(index_cont + 1)
			});
		});
	}
}

function show_main_tasks(project_id){
	var append_current_task = "";
	var append_backlog_task = "";
	var append_done_subtask = "";
	var count_remaining_task = 0;
	var count_completed_task = 0;

	for (var i = 0; i < tasks.length; i++) {
		var json_data = tasks[i];

		// if( (json_data.task_detail == 1 && json_data.main_project_tag[0].project_id == parseInt(project_id) || (json_data.sub_project_tag.map(a => a.project_id).indexOf(parseInt(project_id)) != -1)) ||
		// 	(json_data.task_detail == 3 && json_data.main_project_tag[0].project_id == parseInt(project_id) || (json_data.sub_project_tag.map(a => a.project_id).indexOf(parseInt(project_id)) != -1)) 
		// ){

		if( (json_data.task_detail == 1 && json_data.main_project_tag[0].project_id == parseInt(project_id)) ||
			(json_data.task_detail == 3 && json_data.main_project_tag[0].project_id == parseInt(project_id)) 
		){
			append_current_task += main_task_template(json_data);
			console.log(json_data)

			if(json_data.task_detail == 3 && json_data.main_project_tag[0].project_id == parseInt(project_id)) 
				count_completed_task++;
			else
				count_remaining_task++;
		}
		else if( (json_data.task_detail == 2 && json_data.main_project_tag[0].project_id == parseInt(project_id))){
			append_backlog_task += main_task_template(json_data);
			console.log(json_data)
			count_remaining_task++;
		}

		$("#task_details li:eq(0) .task_detail_left").empty().text(count_remaining_task+" tasks");
		$("#task_details li:eq(1) .task_detail_left").empty().text(count_completed_task+" tasks");
	}

	$("#main_tasks #sprint_cycle_sort").empty().append(append_current_task)
	$("#main_tasks #product_backlog_sort").empty().append(append_backlog_task)
	$("#sub_tasks_section #remaining_task_sort").empty().append(append_done_subtask)
	update_main_task_index(".main_sort");
	$("#main_tasks .selectpicker").selectpicker();
}

function shuffled_tasks(){
	for (var i = 0; i < tasks.length; i++) {
		var shuffled_task_id = Math.floor((Math.random() * 7) + 1);
		var json_data = tasks[i];
		var random_main_project_data = projects[projects.map(a => a.value).indexOf(parseInt(shuffled_task_id))];

		json_data.main_project_tag[0] = {"project_id" : random_main_project_data.value, "project_name" : random_main_project_data.name,"project_color" : random_main_project_data.color };
		json_data.index = i + 1 ;
		json_data.sub_task_assigned_ids = _.uniq(json_data.sub_tasks.map(a => a.main_assigned_to_id));
		json_data.task_title = shuffle_word(json_data.task_title);
		json_data.task_description = shuffle_word(json_data.task_description);
		json_data.sub_project_tag = [];

		for (var k = 0; k < projects.length; k++) {
			if(json_data.sub_project_tag.length != 3 && projects[k].value != shuffled_task_id){
				json_data.sub_project_tag.push({
					project_color : projects[k].color,
					project_id : projects[k].value,
					project_name : projects[k].name
				});
			}
		}


		for (var j = 0; j < json_data.sub_tasks.length; j++) {
			var shuffled_sub_project_id = Math.floor((Math.random() * parseInt(json_data.sub_project_tag.length)) + 0);
			var sub_tasks = json_data.sub_tasks;

			sub_tasks[j].project_id = json_data.sub_project_tag[shuffled_sub_project_id].project_id;
			sub_tasks[j].project_color = json_data.sub_project_tag[shuffled_sub_project_id].project_color;
		}
	}
}

function shuffle_word(paragraph){
		var sentenceToShuffle = paragraph,
	     shuffledSentence = "",
	                words = [],
	                match = [],
	                  reg = /\b([^\s]+)\b/gm;
	 
	while (!!(match = reg.exec(sentenceToShuffle))){
	  words[words.length] = match[1];
	}
	 
	while (!!words.length) {
	  shuffledSentence += " "+ words.splice(~~(Math.random()*words.length),1);
	}
	 
	return shuffledSentence.replace(/^\s+/, "");
}

var main_project_tag_template = _.template('<% if(main_project_tag.length != 0){ %>\
												<li data-tag-id="<%= main_project_tag[0]["project_id"]%>" data-tag-color="<%= main_project_tag[0]["project_color"]%>"><span ><%= main_project_tag[0]["project_name"] %></span></li>\
											<% } %> \
											<% if(sub_project_tag.length != 0){ %>\
												<% for(var i = 0; i < sub_project_tag.length; i++) {  %>\
													<% if (sub_project_tag.length <= 1) { %>\
														<li data-tag-id="<%= sub_project_tag[i]["project_id"]%>" data-tag-color="<%= sub_project_tag[i]["project_color"]%>"><span"><%= sub_project_tag[i]["project_name"] %></span></li>\
													<% }  else{ %>	\
														<li  data-tag-color="light_green" class="main_project_tag"><span ><%= sub_project_tag.length %> more</span></li>\
													<% break;} %>	\
												<% } %>\
											<% } %>');
												
var main_task_template = _.template('<li data-task-id="<%= task_id %>" class="<%= task_detail == 2 ? "unsortable" : "" %>">\
								<form action="">\
									<div class="task_container">\
										<div class="task_index">\
											<span class="index_count"><%= index %></span>\
										</div>\
										<div class="dragged_icon">\
											<i class="fa fa-sort" aria-hidden="true"></i>\
										</div>\
										<div class="check_icon">\
											<i class="fa fa-check-circle<%= is_checked == 1 ? "" : "-o" %> fa-lg mark_task" aria-hidden="true" ></i>\
										</div>\
										<div class="estimated_points">\
											<input type="text" class="form-control" value="<%= estimated_points %>" placeholder="EP">\
										</div>\
										<div class="main_task_status">\
											<select name="" id="" class="selectpicker main_task_status_select">\
												<option value="1" <%= task_detail == 1 ? "selected" : "" %> data-content="<span class='+"'status_option_style status_option_ongoing'"+'><span class='+"'color'"+'>O</span> <span class='+"'text'"+'>Ongoing</span></span>"></option>\
												<option value="2" <%= task_detail == 2 ? "selected" : "" %> data-content="<span class='+"'status_option_style status_option_pending'"+'><span class='+"'color'"+'>P</span> <span class='+"'text'"+'>Pending</span></span>"></option>\
												<option value="3" <%= task_detail == 3 ? "selected" : "" %> data-content="<span class='+"'status_option_style status_option_done'"+'><span class='+"'color'"+'>D</span> <span class='+"'text'"+'>Done</span></span>"></option>\
											</select>\
										</div>\
										<div class="main_task_detail">\
											<select name="" id="" class="selectpicker main_task_detail_select">\
												<option value="1" <%= task_type == 1 ? "selected" : "" %>>Planning</option>\
												<option value="2" <%= task_type == 2 ? "selected" : "" %>>Wireframe</option>\
												<option value="3" <%= task_type == 3 ? "selected" : "" %>>Mockup</option>\
												<option value="4" <%= task_type == 4 ? "selected" : "" %>>Protoype</option>\
											</select>\
										</div>\
										<div class="task_title">\
											<input type="text" class="form-control" value="<%= task_title %>">\
										</div>\
										<div class="project_tags">\
											<ul>\
											<% if(main_project_tag.length != 0){ %>\
												<li data-toggle="tooltip" data-placement="top" title="<%= main_project_tag[0]["project_name"] %>" data-tag-id="<%= main_project_tag[0]["project_id"]%>" data-tag-color="<%= main_project_tag[0]["project_color"]%>"><span ><%= main_project_tag[0]["project_name"] %></span></li>\
												<% for(var i = 0; i < sub_project_tag.length; i++) {  %>\
													<% if (sub_project_tag.length <= 1) { %>\
													<li data-toggle="tooltip" data-placement="top" title="<%= sub_project_tag[i]["project_name"] %>" data-tag-id="<%= sub_project_tag[i]["project_id"]%>"  data-tag-color="<%= sub_project_tag[i]["project_color"]%>"><span"><%= sub_project_tag[i]["project_name"] %></span></li>\
													<% }  else{ %>	\
														<li  data-tag-color="light_green" class="main_project_tag" ><span ><%= sub_project_tag.length %> more</span></li>\
													<% break;} %>	\
												<% } %>	\
											<% } %>	\
											</ul>\
										</div>\
										<div class="task_assigned_to pull-right">\
											<img src="<%= main_assigned_person_image %>" alt="">\
											<%\
											var index_count = 0;\
											for (var i = 0; i < sub_task_assigned_ids.length; i++) {\
												if(sub_task_assigned_ids[i] != main_assigned_person_id)\
													index_count++\
											}\
											%>\
											<span class="<%= index_count == 0 ? "is_zero" : "is_not_zero"  %>">\
											<%= index_count == 0 ? "" : index_count %>\
											</span>\
										</div>\
									</div>\
								</form>\
							</li>');

var sub_task_template = _.template('<li data-sub-task-id="<%= sub_task_id %>" class="<%= sub_task_id != 3 ? "unsortable" : "" %>">\
								<form action="">\
									<div class="task_container">\
										<div class="task_index">\
											<span class="index_count"><%= index %></span>\
										</div>\
										<div class="dragged_icon">\
											<i class="fa fa-sort" aria-hidden="true"></i>\
										</div>\
										<div class="check_icon">\
											<i class="fa fa-check-circle<%= is_checked == 1 ? "" : "-o" %> fa-lg mark_task" aria-hidden="true" ></i>\
										</div>\
										<div class="estimated_points">\
											<input type="text" class="form-control" value="<%= subtask_estimated_points %>" placeholder="EP">\
										</div>\
										<div class="main_task_status">\
											<select name="" id="" class="selectpicker main_task_status_select">\
												<option value="1" <%= task_detail == 1 ? "selected" : "" %> data-content="<span class='+"'status_option_style status_option_ongoing'"+'><span class='+"'color'"+'>O</span> <span class='+"'text'"+'>Ongoing</span></span>"></option>\
												<option value="2" <%= task_detail == 2 ? "selected" : "" %> data-content="<span class='+"'status_option_style status_option_pending'"+'><span class='+"'color'"+'>P</span> <span class='+"'text'"+'>Pending</span></span>"></option>\
												<option value="3" <%= task_detail == 3 ? "selected" : "" %> data-content="<span class='+"'status_option_style status_option_done'"+'><span class='+"'color'"+'>D</span> <span class='+"'text'"+'>Done</span></span>"></option>\
											</select>\
										</div>\
										<div class="task_title">\
											<input type="text" class="form-control" value="<%= subtask_title %>">\
										</div>\
										<div class="task_assigned_to pull-right">\
											<select name="" id="main_detail_project_tag" class="selectpicker" name=""> \
												<option data-color-option="green" data-name-option="CD CRM" value="1" data-content="<span data-option-color-tag='+"'green'"+'><span>CD CRM</span></span>"></option>\
												<option data-color-option="blue" data-name-option="CD WEBSITE" value="2" data-content="<span data-option-color-tag='+"'blue'"+'><span>CD WEBSITE</span></span>"></option>\
												<option data-color-option="pink" data-name-option="CODE GENERATION" value="3" data-content="<span data-option-color-tag='+"'pink'"+'><span>CODE GENERATION</span></span>"></option>\
												<option data-color-option="brown" data-name-option="FOCUS TRACKER" value="4" data-content="<span data-option-color-tag='+"'brown'"+'><span>FOCUS TRACKER</span></span>"></option>\
												<option data-color-option="silver" data-name-option="ALGORITHM APP" value="5" data-content="<span data-option-color-tag='+"'silver'"+'><span>ALGORITHM APP</span></span>"></option>\
												<option data-color-option="violet" data-name-option="CD LEARN" value="6" data-content="<span data-option-color-tag='+"'violet'"+'><span>CD LEARN</span></span>"></option>\
												<option data-color-option="orange" data-name-option="TRAINING STAFF" value="7" data-content="<span data-option-color-tag='+"'orange'"+'><span>TRAINING STAFF</span></span>"></option>\
											</select>\
											<img src="<%= main_assigned_to_img %>" alt="">\
											<span class="glyphicon glyphicon-trash" aria-hidden="true"></span>\
										</div>\
									</div>\
								</form>\
							</li>');

var main_details_template = _.template('<div id="add_sub_task">\
						<div id="add_sub_task_details"> \
							<div class="person_assigned_to main_person_assigned">\
								<img src="<%= main_assigned_person_image %>" alt="">\
							</div>\
							<% for(var i = 0; i < sub_task_assigned_person.length; i++) {  %>\
								<div class="person_assigned_to">\
									<img src="../assets/images/<%= sub_task_assigned_person[i].image_name %>.jpg" data-user-name="<%= sub_task_assigned_person[i].name %>" alt="">\
								</div>\
							<% } %>	\
							<div id="project_assigned_to">\
								<ul data-task-id="<%= task_id %>">\
									<% if(main_project_tag.length != 0){ %>\
										<% if(main_project_tag.length != 0){ %>\
										<li data-toggle="tooltip" data-placement="top" title="<%= main_project_tag[0]["project_name"] %>" data-tag-id="<%= main_project_tag[0]["project_id"]%>" data-tag-color="<%= main_project_tag[0]["project_color"]%>"><span ><%= main_project_tag[0]["project_name"] %></span><span hidden="true" class="remove_project_tag remove_main_project_tag glyphicon glyphicon-remove"></span></li>\
										<% } %>	\
										<% if(sub_project_tag.length != 0){ %>\
											<li data-toggle="tooltip" data-placement="top" title="<%= sub_project_tag[0]["project_name"] %>" data-tag-id="<%= sub_project_tag[0]["project_id"]%>" data-tag-color="<%= sub_project_tag[0]["project_color"]%>"><span><%= sub_project_tag[0]["project_name"] %></span><span hidden="true" class="remove_project_tag glyphicon glyphicon-remove"></span></li>\
											<% for(var i = 0; i < sub_project_tag.length; i++) {  %>\
												<% if (i != 0) { %>\
													<% if (sub_project_tag.length <= 2) { %>\
														<li data-toggle="tooltip" data-placement="top" title="<%= sub_project_tag[i]["project_name"] %>"  data-tag-id="<%= sub_project_tag[i]["project_id"]%>" data-tag-color="<%= sub_project_tag[i]["project_color"]%>"><span><%= sub_project_tag[i]["project_name"] %></span><span hidden="true" class="remove_project_tag glyphicon glyphicon-remove"></span></li>\
													<% }  else{ %>	\
														<li class="project_tag_see_more" data-tag-color="light_green" style="text-align:center;"><span>. . .</span></li>\
													<% break;} %>	\
												<% } %>	\
											<% } %>	\
										<% } %>	\
									<% } %>	\
								</ul>\
							</div>\
							<div id="add_project_assigned_to">\
								<a href="#" id="add_project_btn">\
									<span class="glyphicon glyphicon-plus-sign" aria-hidden="true"></span>\
								</a>\
							</div>\
						</div>\
						<div id="crud_subtask" class="pull-right">\
							<div id="crud_add_subtask">\
								<button class="btn btn-primary">Add Subtask</button>\
							</div>\
							<div id="crud_delete_subtask">\
								<span class="glyphicon glyphicon-trash" aria-hidden="true"></span>\
							</div>\
						</div>\
					</div>\
					<div id="main_task_status_and_details">\
						<div id="sub_task_mark_task">\
							<i class="fa fa-check-circle<%= is_checked == 1 ? "" : "-o" %> fa-2x mark_task" aria-hidden="true" ></i>\
						</div>\
						<div id="status_and_details">\
							<input type="text" class="form-control" value="<%= estimated_points %>" placeholder="EP">\
							<select name="" id="" class="selectpicker main_task_status_select">\
								<option value="1" <%= task_detail == 1 ? "selected" : "" %> >Ongoing</option>\
								<option value="2" <%= task_detail == 2 ? "selected" : "" %> >Pending</option>\
								<option value="3" <%= task_detail == 3 ? "selected" : "" %> >Done</option>\
							</select>\
							<select name="" id="" class="selectpicker main_task_detail_select">\
								<option value="1" <%= task_type == 1 ? "selected" : "" %>>Planning</option>\
								<option value="2" <%= task_type == 2 ? "selected" : "" %>>Wireframe</option>\
								<option value="3" <%= task_type == 3 ? "selected" : "" %>>Mockup</option>\
								<option value="4" <%= task_type == 4 ? "selected" : "" %>>Protoype</option>\
							</select>\
						</div>\
						<div id="main_task_title_and_description">\
							<textarea name="" id="" class="form-control"><%= task_title %></textarea>\
							<textarea name="" id="" class="form-control"><%= task_description %></textarea>\
						</div>\
					</div>\
					<div id="sub_tasks_section">\
						<span class="main_task_tile">Remaining Tasks</span>\
						<ul class="sortable ui-sortable subtask_sort" id="remaining_task_sort">\
							<% for(var i = 0; i < sub_tasks.length; i++) {  %>\
								<% if(sub_tasks[i].task_detail != 3){  %>\
									<li data-sub-task-id="<%= sub_tasks[i].sub_task_id %>" class="<%= sub_tasks[i].task_detail != 3 ? "unsortable" : "" %>">\
										<form action="">\
											<div class="task_container">\
												<div class="task_index">\
													<span class="index_count"><%= sub_tasks[i].index %></span>\
												</div>\
												<div class="dragged_icon">\
													<i class="fa fa-sort" aria-hidden="true"></i>\
												</div>\
												<div class="check_icon">\
													<i class="fa fa-check-circle<%= sub_tasks[i].is_checked == 1 ? "" : "-o" %> fa-lg mark_task" aria-hidden="true" ></i>\
												</div>\
												<div class="estimated_points">\
													<input type="text" class="form-control" value="<%=sub_tasks[i].subtask_estimated_points%>"  placeholder="EP">\
												</div>\
												<div class="main_task_status">\
													<select name="" id="" class="selectpicker main_task_status_select">\
														<option value="1" <%= sub_tasks[i].task_detail == 1 ? "selected" : "" %> data-content="<span class='+"'status_option_style status_option_ongoing'"+'><span class='+"'color'"+'>O</span> <span class='+"'text'"+'>Ongoing</span></span>"></option>\
														<option value="2" <%= sub_tasks[i].task_detail == 2 ? "selected" : "" %> data-content="<span class='+"'status_option_style status_option_pending'"+'><span class='+"'color'"+'>P</span> <span class='+"'text'"+'>Pending</span></span>"></option>\
														<option value="3" <%= sub_tasks[i].task_detail == 3 ? "selected" : "" %> data-content="<span class='+"'status_option_style status_option_done'"+'><span class='+"'color'"+'>D</span> <span class='+"'text'"+'>Done</span></span>"></option>\
													</select>\
												</div>\
												<div class="task_title">\
													<input type="text" class="form-control" value="<%= sub_tasks[i].subtask_title  %>">\
												</div>\
												<div class="task_assigned_to pull-right">\
													<select name="" id="main_detail_project_tag" class="selectpicker"> \
														<option data-name-option="CD CRM" <%= parseInt(sub_tasks[i].project_id) == 1 ? "selected" :"" %> data-color-option="green" value="1" data-content="<span data-option-color-tag='+"'green'"+'><span>CD CRM</span></span>"></option>\
														<option data-name-option="CD WEBSITE" <%= parseInt(sub_tasks[i].project_id) == 2 ? "selected" :"" %> data-color-option="blue" value="2" data-content="<span data-option-color-tag='+"'blue'"+'><span>CD WEBSITE</span></span>"></option>\
														<option data-name-option="CODE GENERATION" <%= parseInt(sub_tasks[i].project_id) == 3 ? "selected" :"" %> data-color-option="pink" value="3" data-content="<span data-option-color-tag='+"'pink'"+'><span>CODE GENERATION</span></span>"></option>\
														<option data-name-option="FOCUS TRACKER" <%= parseInt(sub_tasks[i].project_id) == 4 ? "selected" :"" %> data-color-option="brown" value="4" data-content="<span data-option-color-tag='+"'brown'"+'><span>FOCUS TRACKER</span></span>"></option>\
														<option data-name-option="ALGORITHM APP" <%= parseInt(sub_tasks[i].project_id) == 5 ? "selected" :"" %> data-color-option="silver" value="5" data-content="<span data-option-color-tag='+"'silver'"+'><span>ALGORITHM APP</span></span>"></option>\
														<option data-name-option="CD LEARN" <%= parseInt(sub_tasks[i].project_id) == 6 ? "selected" :"" %> data-color-option="violet" value="6" data-content="<span data-option-color-tag='+"'violet'"+'><span>CD LEARN</span></span>"></option>\
														<option data-name-option="TRAINING STAFF" <%= parseInt(sub_tasks[i].project_id) == 7 ? "selected" :"" %> data-color-option="orange" value="7" data-content="<span data-option-color-tag='+"'orange'"+'><span>TRAINING STAFF</span></span>"></option>\
													</select>\
													<img src="<%=sub_tasks[i].main_assigned_to_img%>" alt="">\
													<span class="glyphicon glyphicon-trash" aria-hidden="true"></span>\
												</div>\
											</div>\
										</form>\
									</li>\
								<% } %>	\
							<% } %>	\
						</ul>\
						<span class="main_task_tile">Done Tasks</span>\
						<ul class="sortable ui-sortable subtask_sort" id="done_task_sort">\
							<% for(var i = 0; i < sub_tasks.length; i++) {  %>\
								<% if(sub_tasks[i].task_detail == 3){  %>\
									<li data-sub-task-id="<%= sub_tasks[i].sub_task_id %>" class="<%= sub_tasks[i].task_detail != 3 ? "unsortable" : "" %>">\
										<form action="">\
											<div class="task_container">\
												<div class="task_index">\
													<span class="index_count"><%= sub_tasks[i].index %></span>\
												</div>\
												<div class="dragged_icon">\
													<i class="fa fa-sort" aria-hidden="true"></i>\
												</div>\
												<div class="check_icon">\
													<i class="fa fa-check-circle<%= sub_tasks[i].is_checked == 1 ? "" : "-o" %> fa-lg mark_task" aria-hidden="true" ></i>\
												</div>\
												<div class="estimated_points">\
													<input type="text" class="form-control" value="<%=sub_tasks[i].subtask_estimated_points%>"  placeholder="EP">\
												</div>\
												<div class="main_task_status">\
													<select name="" id="" class="selectpicker main_task_status_select">\
														<option value="1" <%= sub_tasks[i].task_detail == 1 ? "selected" : "" %> data-content="<span class='+"'status_option_style status_option_ongoing'"+'><span class='+"'color'"+'>O</span> <span class='+"'text'"+'>Ongoing</span></span>"></option>\
														<option value="2" <%= sub_tasks[i].task_detail == 2 ? "selected" : "" %> data-content="<span class='+"'status_option_style status_option_pending'"+'><span class='+"'color'"+'>P</span> <span class='+"'text'"+'>Pending</span></span>"></option>\
														<option value="3" <%= sub_tasks[i].task_detail == 3 ? "selected" : "" %> data-content="<span class='+"'status_option_style status_option_done'"+'><span class='+"'color'"+'>D</span> <span class='+"'text'"+'>Done</span></span>"></option>\
													</select>\
												</div>\
												<div class="task_title">\
													<input type="text" class="form-control" value="<%= sub_tasks[i].subtask_title %>">\
												</div>\
												<div class="task_assigned_to pull-right">\
												<% if(main_project_tag.length != 0){ %>\
														<select name="" id="main_detail_project_tag" class="selectpicker"> \
															<option data-name-option="CD CRM" <%= parseInt(sub_tasks[i].project_id) == 1 ? "selected" :"" %> data-color-option="green" value="1" data-content="<span data-option-color-tag='+"'green'"+'><span>CD CRM</span></span>"></option>\
															<option data-name-option="CD WEBSITE" <%= parseInt(sub_tasks[i].project_id) == 2 ? "selected" :"" %> data-color-option="blue" value="2" data-content="<span data-option-color-tag='+"'blue'"+'><span>CD WEBSITE</span></span>"></option>\
															<option data-name-option="CODE GENERATION" <%= parseInt(sub_tasks[i].project_id) == 3 ? "selected" :"" %> data-color-option="pink" value="3" data-content="<span data-option-color-tag='+"'pink'"+'><span>CODE GENERATION</span></span>"></option>\
															<option data-name-option="FOCUS TRACKER" <%= parseInt(sub_tasks[i].project_id) == 4 ? "selected" :"" %> data-color-option="brown" value="4" data-content="<span data-option-color-tag='+"'brown'"+'><span>FOCUS TRACKER</span></span>"></option>\
															<option data-name-option="ALGORITHM APP" <%= parseInt(sub_tasks[i].project_id) == 5 ? "selected" :"" %> data-color-option="silver" value="5" data-content="<span data-option-color-tag='+"'silver'"+'><span>ALGORITHM APP</span></span>"></option>\
															<option data-name-option="CD LEARN" <%= parseInt(sub_tasks[i].project_id) == 6 ? "selected" :"" %> data-color-option="violet" value="6" data-content="<span data-option-color-tag='+"'violet'"+'><span>CD LEARN</span></span>"></option>\
															<option data-name-option="TRAINING STAFF" <%= parseInt(sub_tasks[i].project_id) == 7 ? "selected" :"" %> data-color-option="orange" value="7" data-content="<span data-option-color-tag='+"'orange'"+'><span>TRAINING STAFF</span></span>"></option>\
														</select>\
													<% } %>	\
													<img src="<%=sub_tasks[i].main_assigned_to_img%>" alt="">\
													<span class="glyphicon glyphicon-trash" aria-hidden="true"></span>\
												</div>\
											</div>\
										</form>\
									</li>\
								<% } %>	\
							<% } %>	\
						</ul>\
					</div>')
