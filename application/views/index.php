<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Asana</title>
	<link rel="stylesheet" href="../assets/css/custom/dashboard.css">
	<link rel="stylesheet" href="../assets/css/custom/global.css">
	<link rel="stylesheet" href="../assets/css/vendor/bootstrap/bootstrap.min.css">
	<link rel="stylesheet" href="../assets/css/vendor/bootstrap-select/bootstrap-select.min.css">
	<link rel="stylesheet" href="../assets/css/vendor/font-awesome/font-awesome.min.css">
    <link rel="stylesheet" href="../assets/css/vendor/bootstrap-datetimepicker/bootstrap-datetimepicker.css">

	<script src="../assets/js/vendor/jquery/jquery-3.2.1.slim.min.js"></script>
	<script src="../assets/js/vendor/jquery/jquery.js"></script>
	<script src="../assets/js/vendor/jquery/jquery-ui.js"></script>
	<script src="../assets/js/vendor/bootstrap/bootstrap.min.js"></script>
	<script src="../assets/js/vendor/bootstrap-select/bootstrap-select.min.js"></script>
 	<script src="../assets/js/vendor/moment/moment.js"></script>
    <script src="../assets/js/vendor/bootstrap-datetimepicker/bootstrap-datetimepicker.min.js"></script>
 	<script src="../assets/js/vendor/underscore/underscore.min.js"></script>
	<script src="../assets/js/custom/global.js"></script>
	<script src="../assets/js/custom/dashboard.js"></script>
</head>
<body>
	<div id="wrapper">
		<div id="left_container">
			<div>
				<h2>FT ASANA</h2>
			</div>
			<ul id="main_projects">
				<li>
					<span>Coding Dojo</span>
					<ul>
						<li class="sub_projects" data-project-id="1"><a href="javascript:void(0)"><span class="project_color" data-project-color="green"></span><span class="project_name">CD CRM</span></a></li>
						<li class="sub_projects" data-project-id="2"><a href="javascript:void(0)"><span class="project_color" data-project-color="blue"></span><span class="project_name">CD Website</span></a></li>
						<li class="sub_projects" data-project-id="5"><a href="javascript:void(0)"><span class="project_color" data-project-color="silver"></span><span class="project_name">Algorith App</span></a></li>
						<li class="sub_projects" data-project-id="6"><a href="javascript:void(0)"><span class="project_color" data-project-color="violet"></span><span class="project_name">CD Learn</span></a></li>
					</ul>
				</li>
				<li>
					<span>Others</span>
					<ul>
						<li class="sub_projects" data-project-id="3"><a href="javascript:void(0)"><span class="project_color" data-project-color="pink"></span><span class="project_name">Code Generation</span></a></li>
						<li class="sub_projects" data-project-id="7"><a href="javascript:void(0)"><span class="project_color" data-project-color="orange"></span><span class="project_name">Training Staff</span></a></li>
						<li class="sub_projects" data-project-id="4"><a href="javascript:void(0)"><span class="project_color" data-project-color="brown"></span><span class="project_name">Focus Tracker</span></a></li>
					</ul>
				</li>
			</ul>
		</div>
		<div id="main_container">
			<div id="title_and_filter_content">
				<h3>CD CRM</h3>
				<ul id="task_details">
					<li>
						<span class="task_detail_option">Remaining</span>
						<span class="task_detail_left">0 tasks</span>
					</li>
					<li>
						<span class="task_detail_option">Completed</span>
						<span class="task_detail_left">0 tasks</span>
					</li>
				</ul>
				<form action="" id="main_task_filters" class="pull-right">
					<ul>
						<li>
							<input type="text" class="form-control search_filter" placeholder="Search">
						</li>
						<li>
							<input type="submit" class="btn btn-primary" value="Search">
						</li>
					</ul>
				</form>
				<div id="user_option">
					<img src="" alt="">
				</div>
			</div>
			<div id="main_content">
				<div id="left_content">
					<div id="add_main_task">
						<select class="selectpicker" name="" id="">
							<option value="">Created at</option>
							<option value="">Completed at</option>
						</select>
						<input type="button" class="btn btn-primary pull-right" value="+ Add Task">
					</div>	
					<div id="main_tasks">
						<span>Current Sprint Cycle</span>
						<ul id="sprint_cycle_sort" class="main_sort ui-sortable"></ul>
						<span>Product Backlog</span>
						<ul id="product_backlog_sort" class="main_sort ui-sortable"></ul>
						<div class="loading hidden"></div>
					</div>
				</div>
				<div id="right_content">
				</div>
			</div>
		</div>
	</div>

	<div id="main_assigning_to" class="hidden">
		<div class="header">
			<input type="hidden" name="task_id" value="">
			<input type="hidden" name="sub_task_id" value="">
			<p>Assignee</p>
			<select name="" id="assigned_to_select" class="" title="Select" data-live-search="true">
			</select>
			<span class="">or</span>
			<a href="#" class="assigned_to_me btn btn-primary" data-assignee-id="11" data-assignee-image="pj" data-assignee-name="Paul John Padua">Assign to me</a>
		</div>
	</div>

	<div id="assign_projects" class="hidden">
		<input type="hidden" name="task_id" value="">
		<select name="" id="assigned_project_select" class="" title='Select Project'>
		</select>
	</div>
	<div id="hidden_other_project" class="hidden">
		<input type="hidden" name="task_id" value="">
		<ul></ul>
	</div>

	<div id="hidden_sub_user_assignee" class="hidden">
		<ul></ul>
	</div>

	<!-- Modal -->
	<div class="modal fade" id="show_alert" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
		<div class="modal-dialog" role="document">
			<div class="modal-content">
				<div class="modal-header">
					ALERT!
				</div>
				<div class="modal-body">
					Not so fast buddy, this tag is still in the subtask.
				</div>
				<div class="modal-footer">
			        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
			  </div>
			</div>
		</div>
	</div>
	<!-- Modal -->
	<div class="modal fade" id="show_main_alert" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
		<div class="modal-dialog" role="document">
			<div class="modal-content">
				<div class="modal-header">
					ALERT!
				</div>
				<div class="modal-body">
					Not so fast buddy, this tag is only available and not to be deleted.
				</div>
				<div class="modal-footer">
			        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
			  </div>
			</div>
		</div>
	</div>
	<!-- Modal -->
	<div class="modal fade" id="show_delete_project_tag_modal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
	  <div class="modal-dialog" role="document">
	    <div class="modal-content">
	    	<form action="" id="delete_project_tag">
	    		<input type="hidden" name='main_task_id' value="">
	    		<input type="hidden" name='project_tag_id' value="">
	    		<input type="hidden" name='is_main_tag' value="">
	    		<input type="hidden" name='task_id' value="">

				<div class="modal-header">
					CONFIRMATION!
				</div>
				<div class="modal-body">
					Are you sure that you want to delete this tag?
				</div>
				<div class="modal-footer">
					<button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
					<input type="submit" class="btn btn-primary" value="Delete">
				</div>
	    	</form>
	    </div>
	  </div>
	</div>
	
	<div id="dialog" title="">
	  <p>Saved Changes!</p>
	</div>
</body>
</html>