$(document).ready(function(){
	$("body").on("click", "#wrapper",function(){
		$(".popover").popover("destroy");
	});
});
	
var projects = [
	{
		"name" : "CD CRM",
		"value" : 1,
		"color" : "green",
	},
	{
		"name" : "CD WEBSITE",
		"value" : 2,
		"color" : "blue",
	},
	{
		"name" : "CODE GENERATION",
		"value" : 3,
		"color" : "pink",
	},
	{
		"name" : "FOCUS TRACKER",
		"value" : 4,
		"color" : "brown",
	},
	{
		"name" : "ALGORITHM APP",
		"value" : 5,
		"color" : "silver",
	},
	{
		"name" : "CD LEARN",
		"value" : 6,
		"color" : "violet",
	},
	{
		"name" : "TRAINING STAFF",
		"value" : 7,
		"color" : "orange",
	}
]

var users = [
	{
		"name" : "John Supsupin",
		"value" : 1,
		"image_name" : "john",
	},
	{
		"name" : "Noah Guillen",
		"value" : 2,
		"image_name" : "noah",
	},
	{
		"name" : "Mark Guillen",
		"value" : 3,
		"image_name" : "mark",
	},
	{
		"name" : "Erick Caccam",
		"value" : 4,
		"image_name" : "erick",
	},
	{
		"name" : "Jadee Ganggangan",
		"value" : 5,
		"image_name" : "jadee",
	},
	{
		"name" : "Jerwin Fernandez",
		"value" : 6,
		"image_name" : "jerwin",
	},
	{
		"name" : "Jessie De Leon",
		"value" : 7,
		"image_name" : "jessie",
	},
	{
		"name" : "Mario Narvaez",
		"value" : 8,
		"image_name" : "mario",
	},
	{
		"name" : "Christopher Padua",
		"value" : 9,
		"image_name" : "chris",
	},
	{
		"name" : "Jeric Cartas",
		"value" : 10,
		"image_name" : "jeric",
	},
	{
		"name" : "PJ Padua",
		"value" : 11,
		"image_name" : "pj",
	}
]

var tasks = [
	{
		"task_id" : 1,
		"is_checked" : 0,
		"estimated_points" : 15,
		"task_detail" : 2,
		"task_type" : 3,
		"task_title" : "Add two other paragraphs using proper html syntax. Add whatever text you would like.",
		"task_description" : "test description here",
		"main_assigned_person_id" :  1,
		"main_assigned_person_image" : "../assets/images/john.jpg",
		"main_assigned_person_name" : "John Supsupin",
		"main_project_tag" : [
			{
				"project_id" : 1,
				"project_name" : "CD CRM",
				"project_color" : "green" 
			}
		],
		"sub_project_tag" : [
			{
				"project_id" : 2,
				"project_name" : "CD WEBSITE",
				"project_color" : "blue" 
			}
		],
		"sub_tasks" : [
			{
				"is_done" : 0,
				"is_checked" : 0,
				"task_detail" : 1,
				"subtask_estimated_points": 50,
				"main_assigned_to_id" : 1,
				"main_assigned_to_img" : "../assets/images/john.jpg",
				"main_assigned_to_name" : "John Supsupin",
				"subtask_title" : "test Add two other paragraphs using proper html syntax. Add whatever text you would like.",
				"sub_task_id" : 1,
				"project_id" : 2,
				"project_color" : "blue" 
			}
		]
	},
	{
		"task_id" : 2,
		"is_checked" :1,
		"estimated_points" : 10,
		"task_detail" : 3,
		"task_type" : 1,
		"task_title" : "Add two other paragraphs using proper html syntax. Add whatever text you would like.",
		"task_description" : "test description here",
		"main_assigned_person_id" :  1,
		"main_assigned_person_image" : "../assets/images/john.jpg",
		"main_assigned_person_name" : "John Supsupin",
		"main_project_tag" : [
			{
				"project_id" : 1,
				"project_name" : "CD CRM",
				"project_color" : "green" 
			}
		],
		"sub_project_tag" : [
			{
				"project_id" : 2,
				"project_name" : "CD WEBSITE",
				"project_color" : "blue" 
			},
			{
				"project_id" : 4,
				"project_name" : "FOCUS TRACKER",
				"project_color" : "brown" 
			},
			{
				"project_id" : 3,
				"project_name" : "CODE GENERATION",
				"project_color" : "pink" 
			}
		],
		"sub_tasks" : [
			{
				"is_checked" : 0,
				"subtask_estimated_points" : 110,
				"main_assigned_to_id" : 2,
				"main_assigned_to_img" : "../assets/images/noah.jpg",
				"main_assigned_to_name" : "Noah Guillen",
				"task_detail" : 3,
				"subtask_title" : "Add two other paragraphs using proper html syntax. Add whatever text you would like.",
				"sub_task_id" : 1,
				"project_id" : 2,
				"project_color" : "blue" 
			},
			{
				"is_done" : 0,
				"is_checked" : 0,
				"task_detail" : 1,
				"subtask_estimated_points": 50,
				"main_assigned_to_id" : 3,
				"main_assigned_to_img" : "../assets/images/mark.jpg",
				"main_assigned_to_name" : "Mark Guillen",
				"subtask_title" : "test Add two other paragraphs using proper html syntax. Add whatever text you would like.",
				"sub_task_id" : 2,
				"project_id" : 4,
				"project_color" : "pink" 
			}
		]
	},
	{
		"task_id" : 3,
		"is_checked" : 1,
		"estimated_points" : 10,
		"task_detail" : 3,
		"task_type" : 1,
		"task_title" : "Add two other paragraphs using proper html syntax. Add whatever text you would like.",
		"task_description" : "test description here",
		"main_assigned_person_id" :  1,
		"main_assigned_person_image" : "../assets/images/john.jpg",
		"main_assigned_person_name" : "John Supsupin",
		"main_project_tag" : [
			{
				"project_id" : 1,
				"project_name" : "CD CRM",
				"project_color" : "green" 
			}
		],
		"sub_project_tag" : [
			{
				"project_id" : 2,
				"project_name" : "CD WEBSITE",
				"project_color" : "blue" 
			},
			{
				"project_id" : 4,
				"project_name" : "FOCUS TRACKER",
				"project_color" : "brown" 
			}
		],
		"sub_tasks" : [
			{
				"is_checked" : 0,
				"subtask_estimated_points" : 100,
				"main_assigned_to_id" : 2,
				"main_assigned_to_img" : "../assets/images/noah.jpg",
				"main_assigned_to_name" : "Noah Guillen",
				"task_detail" : 2,
				"subtask_title" : "Add two other paragraphs using proper html syntax. Add whatever text you would like.",
				"sub_task_id" : 1,
				"project_id" : 2,
				"project_color" : "blue" 
			},
			{
				"is_done" : 0,
				"is_checked" : 0,
				"task_detail" : 1,
				"subtask_estimated_points": 50,
				"main_assigned_to_id" : 3,
				"main_assigned_to_img" : "../assets/images/mark.jpg",
				"main_assigned_to_name" : "Mark Guillen",
				"subtask_title" : "test Add two other paragraphs using proper html syntax. Add whatever text you would like.",
				"sub_task_id" : 2,
				"project_id" : 4,
				"project_color" : "pink" 
			}
		]
	},
	{
		"task_id" : 4,
		"is_checked" : 1,
		"estimated_points" : 101,
		"task_detail" : 3,
		"task_type" : 1,
		"task_title" : "Add two other paragraphs using proper html syntax. Add whatever text you would like.",
		"task_description" : "test description here",
		"main_assigned_person_id" :  1,
		"main_assigned_person_image" : "../assets/images/john.jpg",
		"main_assigned_person_name" : "John Supsupin",
		"main_project_tag" : [
			{
				"project_id" : 1,
				"project_name" : "CD CRM",
				"project_color" : "green" 
			}
		],
		"sub_project_tag" : [
			{
				"project_id" : 2,
				"project_name" : "CD WEBSITE",
				"project_color" : "blue" 
			},
			{
				"project_id" : 4,
				"project_name" : "FOCUS TRACKER",
				"project_color" : "brown" 
			}
		],
		"sub_tasks" : [
			{
				"is_checked" : 0,
				"subtask_estimated_points" : 100,
				"main_assigned_to_id" : 2,
				"main_assigned_to_img" : "../assets/images/noah.jpg",
				"main_assigned_to_name" : "Noah Guillen",
				"task_detail" : 2,
				"subtask_title" : "Add two other paragraphs using proper html syntax. Add whatever text you would like.",
				"sub_task_id" : 1,
				"project_id" : 2,
				"project_color" : "blue" 
			},
			{
				"is_done" : 0,
				"is_checked" : 0,
				"task_detail" : 1,
				"subtask_estimated_points": 50,
				"main_assigned_to_id" : 3,
				"main_assigned_to_img" : "../assets/images/mark.jpg",
				"main_assigned_to_name" : "Mark Guillen",
				"subtask_title" : "test Add two other paragraphs using proper html syntax. Add whatever text you would like.",
				"sub_task_id" : 2,
				"project_id" : 4,
				"project_color" : "pink" 
			}
		]
	},
	{
		"task_id" : 5,
		"is_checked" : 0,
		"estimated_points" : 10,
		"task_detail" : 2,
		"task_type" : 1,
		"task_title" : "Add two other paragraphs using proper html syntax. Add whatever text you would like.",
		"task_description" : "test description here",
		"main_assigned_person_id" :  1,
		"main_assigned_person_image" : "../assets/images/john.jpg",
		"main_assigned_person_name" : "John Supsupin",
		"main_project_tag" : [
			{
				"project_id" : 1,
				"project_name" : "CD CRM",
				"project_color" : "green" 
			}
		],
		"sub_project_tag" : [
			{
				"project_id" : 2,
				"project_name" : "CD WEBSITE",
				"project_color" : "blue" 
			},
			{
				"project_id" : 4,
				"project_name" : "FOCUS TRACKER",
				"project_color" : "brown" 
			}
		],
		"sub_tasks" : [
			{
				"is_checked" : 0,
				"subtask_estimated_points" : 100,
				"main_assigned_to_id" : 2,
				"main_assigned_to_img" : "../assets/images/noah.jpg",
				"main_assigned_to_name" : "Noah Guillen",
				"task_detail" : 2,
				"subtask_title" : "Add two other paragraphs using proper html syntax. Add whatever text you would like.",
				"sub_task_id" : 1,
				"project_id" : 2,
				"project_color" : "blue" 
			},
			{
				"is_done" : 0,
				"is_checked" : 0,
				"task_detail" : 1,
				"subtask_estimated_points": 50,
				"main_assigned_to_id" : 3,
				"main_assigned_to_img" : "../assets/images/mark.jpg",
				"main_assigned_to_name" : "Mark Guillen",
				"subtask_title" : "test Add two other paragraphs using proper html syntax. Add whatever text you would like.",
				"sub_task_id" : 2,
				"project_id" : 4,
				"project_color" : "pink" 
			}
		]
	},
	{
		"task_id" : 6,
		"is_checked" : 1,
		"estimated_points" : 10,
		"task_detail" : 3,
		"task_type" : 1,
		"task_title" : "Add two other paragraphs using proper html syntax. Add whatever text you would like.",
		"task_description" : "test description here",
		"main_assigned_person_id" :  1,
		"main_assigned_person_image" : "../assets/images/john.jpg",
		"main_assigned_person_name" : "John Supsupin",
		"main_project_tag" : [
			{
				"project_id" : 1,
				"project_name" : "CD CRM",
				"project_color" : "green" 
			}
		],
		"sub_project_tag" : [
			{
				"project_id" : 2,
				"project_name" : "CD WEBSITE",
				"project_color" : "blue" 
			},
			{
				"project_id" : 4,
				"project_name" : "FOCUS TRACKER",
				"project_color" : "brown" 
			}
		],
		"sub_tasks" : [
			{
				"is_checked" : 0,
				"subtask_estimated_points" : 100,
				"main_assigned_to_id" : 2,
				"main_assigned_to_img" : "../assets/images/noah.jpg",
				"main_assigned_to_name" : "Noah Guillen",
				"task_detail" : 2,
				"subtask_title" : "Add two other paragraphs using proper html syntax. Add whatever text you would like.",
				"sub_task_id" : 1,
				"project_id" : 2,
				"project_color" : "blue" 
			},
			{
				"is_done" : 0,
				"is_checked" : 0,
				"task_detail" : 1,
				"subtask_estimated_points": 50,
				"main_assigned_to_id" : 3,
				"main_assigned_to_img" : "../assets/images/mark.jpg",
				"main_assigned_to_name" : "Mark Guillen",
				"subtask_title" : "test Add two other paragraphs using proper html syntax. Add whatever text you would like.",
				"sub_task_id" : 2,
				"project_id" : 4,
				"project_color" : "pink" 
			}
		]
	},
	{
		"task_id" : 7,
		"is_checked" : 0,
		"estimated_points" : 10,
		"task_detail" : 1,
		"task_type" : 1,
		"task_title" : "Add two other paragraphs using proper html syntax. Add whatever text you would like.",
		"task_description" : "test description here",
		"main_assigned_person_id" :  1,
		"main_assigned_person_image" : "../assets/images/john.jpg",
		"main_assigned_person_name" : "John Supsupin",
		"main_project_tag" : [
			{
				"project_id" : 1,
				"project_name" : "CD CRM",
				"project_color" : "green" 
			}
		],
		"sub_project_tag" : [
			{
				"project_id" : 2,
				"project_name" : "CD WEBSITE",
				"project_color" : "blue" 
			},
			{
				"project_id" : 4,
				"project_name" : "FOCUS TRACKER",
				"project_color" : "brown" 
			}
		],
		"sub_tasks" : [
			{
				"is_checked" : 0,
				"subtask_estimated_points" : 100,
				"main_assigned_to_id" : 2,
				"main_assigned_to_img" : "../assets/images/noah.jpg",
				"main_assigned_to_name" : "Noah Guillen",
				"task_detail" : 2,
				"subtask_title" : "Add two other paragraphs using proper html syntax. Add whatever text you would like.",
				"sub_task_id" : 1,
				"project_id" : 2,
				"project_color" : "blue" 
			},
			{
				"is_done" : 0,
				"is_checked" : 0,
				"task_detail" : 1,
				"subtask_estimated_points": 50,
				"main_assigned_to_id" : 3,
				"main_assigned_to_img" : "../assets/images/mark.jpg",
				"main_assigned_to_name" : "Mark Guillen",
				"subtask_title" : "test Add two other paragraphs using proper html syntax. Add whatever text you would like.",
				"sub_task_id" : 2,
				"project_id" : 4,
				"project_color" : "pink" 
			}
		]
	},
	{
		"task_id" : 8,
		"is_checked" : 0,
		"estimated_points" : 10,
		"task_detail" : 1,
		"task_type" : 1,
		"task_title" : "Add two other paragraphs using proper html syntax. Add whatever text you would like.",
		"task_description" : "test description here",
		"main_assigned_person_id" :  1,
		"main_assigned_person_image" : "../assets/images/john.jpg",
		"main_assigned_person_name" : "John Supsupin",
		"main_project_tag" : [
			{
				"project_id" : 1,
				"project_name" : "CD CRM",
				"project_color" : "green" 
			}
		],
		"sub_project_tag" : [
			{
				"project_id" : 2,
				"project_name" : "CD WEBSITE",
				"project_color" : "blue" 
			},
			{
				"project_id" : 4,
				"project_name" : "FOCUS TRACKER",
				"project_color" : "brown" 
			}
		],
		"sub_tasks" : [
			{
				"is_checked" : 0,
				"subtask_estimated_points" : 100,
				"main_assigned_to_id" : 2,
				"main_assigned_to_img" : "../assets/images/noah.jpg",
				"main_assigned_to_name" : "Noah Guillen",
				"task_detail" : 2,
				"subtask_title" : "Add two other paragraphs using proper html syntax. Add whatever text you would like.",
				"sub_task_id" : 1,
				"project_id" : 2,
				"project_color" : "blue" 
			},
			{
				"is_done" : 0,
				"is_checked" : 0,
				"task_detail" : 1,
				"subtask_estimated_points": 50,
				"main_assigned_to_id" : 3,
				"main_assigned_to_img" : "../assets/images/mark.jpg",
				"main_assigned_to_name" : "Mark Guillen",
				"subtask_title" : "test Add two other paragraphs using proper html syntax. Add whatever text you would like.",
				"sub_task_id" : 2,
				"project_id" : 4,
				"project_color" : "pink" 
			}
		]
	},
	{
		"task_id" : 9,
		"is_checked" : 0,
		"estimated_points" : 10,
		"task_detail" : 1,
		"task_type" : 1,
		"task_title" : "Add two other paragraphs using proper html syntax. Add whatever text you would like.",
		"task_description" : "test description here",
		"main_assigned_person_id" :  1,
		"main_assigned_person_image" : "../assets/images/john.jpg",
		"main_assigned_person_name" : "John Supsupin",
		"main_project_tag" : [
			{
				"project_id" : 1,
				"project_name" : "CD CRM",
				"project_color" : "green" 
			}
		],
		"sub_project_tag" : [
			{
				"project_id" : 2,
				"project_name" : "CD WEBSITE",
				"project_color" : "blue" 
			},
			{
				"project_id" : 4,
				"project_name" : "FOCUS TRACKER",
				"project_color" : "brown" 
			}
		],
		"sub_tasks" : [
			{
				"is_checked" : 0,
				"subtask_estimated_points" : 100,
				"main_assigned_to_id" : 2,
				"main_assigned_to_img" : "../assets/images/noah.jpg",
				"main_assigned_to_name" : "Noah Guillen",
				"task_detail" : 2,
				"subtask_title" : "Add two other paragraphs using proper html syntax. Add whatever text you would like.",
				"sub_task_id" : 1,
				"project_id" : 2,
				"project_color" : "blue" 
			},
			{
				"is_done" : 0,
				"is_checked" : 0,
				"task_detail" : 1,
				"subtask_estimated_points": 50,
				"main_assigned_to_id" : 3,
				"main_assigned_to_img" : "../assets/images/mark.jpg",
				"main_assigned_to_name" : "Mark Guillen",
				"subtask_title" : "test Add two other paragraphs using proper html syntax. Add whatever text you would like.",
				"sub_task_id" : 2,
				"project_id" : 4,
				"project_color" : "pink" 
			}
		]
	},
	{
		"task_id" : 10,
		"is_checked" : 0,
		"estimated_points" : 10,
		"task_detail" : 1,
		"task_type" : 1,
		"task_title" : "Add two other paragraphs using proper html syntax. Add whatever text you would like.",
		"task_description" : "test description here",
		"main_assigned_person_id" :  1,
		"main_assigned_person_image" : "../assets/images/john.jpg",
		"main_assigned_person_name" : "John Supsupin",
		"main_project_tag" : [
			{
				"project_id" : 1,
				"project_name" : "CD CRM",
				"project_color" : "green" 
			}
		],
		"sub_project_tag" : [
			{
				"project_id" : 2,
				"project_name" : "CD WEBSITE",
				"project_color" : "blue" 
			},
			{
				"project_id" : 4,
				"project_name" : "FOCUS TRACKER",
				"project_color" : "brown" 
			}
		],
		"sub_tasks" : [
			{
				"is_checked" : 0,
				"subtask_estimated_points" : 100,
				"main_assigned_to_id" : 2,
				"main_assigned_to_img" : "../assets/images/noah.jpg",
				"main_assigned_to_name" : "Noah Guillen",
				"task_detail" : 2,
				"subtask_title" : "Add two other paragraphs using proper html syntax. Add whatever text you would like.",
				"sub_task_id" : 1,
				"project_id" : 2,
				"project_color" : "blue" 
			},
			{
				"is_done" : 0,
				"is_checked" : 0,
				"task_detail" : 1,
				"subtask_estimated_points": 50,
				"main_assigned_to_id" : 3,
				"main_assigned_to_img" : "../assets/images/mark.jpg",
				"main_assigned_to_name" : "Mark Guillen",
				"subtask_title" : "test Add two other paragraphs using proper html syntax. Add whatever text you would like.",
				"sub_task_id" : 2,
				"project_id" : 4,
				"project_color" : "pink" 
			}
		]
	},
	{
		"task_id" : 11,
		"is_checked" : 0,
		"estimated_points" : 10,
		"task_detail" : 1,
		"task_type" : 1,
		"task_title" : "Add two other paragraphs using proper html syntax. Add whatever text you would like.",
		"task_description" : "test description here",
		"main_assigned_person_id" :  1,
		"main_assigned_person_image" : "../assets/images/john.jpg",
		"main_assigned_person_name" : "John Supsupin",
		"main_project_tag" : [
			{
				"project_id" : 1,
				"project_name" : "CD CRM",
				"project_color" : "green" 
			}
		],
		"sub_project_tag" : [
			{
				"project_id" : 2,
				"project_name" : "CD WEBSITE",
				"project_color" : "blue" 
			},
			{
				"project_id" : 4,
				"project_name" : "FOCUS TRACKER",
				"project_color" : "brown" 
			}
		],
		"sub_tasks" : [
			{
				"is_checked" : 0,
				"subtask_estimated_points" : 100,
				"main_assigned_to_id" : 2,
				"main_assigned_to_img" : "../assets/images/noah.jpg",
				"main_assigned_to_name" : "Noah Guillen",
				"task_detail" : 2,
				"subtask_title" : "Add two other paragraphs using proper html syntax. Add whatever text you would like.",
				"sub_task_id" : 1,
				"project_id" : 2,
				"project_color" : "blue" 
			},
			{
				"is_done" : 0,
				"is_checked" : 0,
				"task_detail" : 1,
				"subtask_estimated_points": 50,
				"main_assigned_to_id" : 3,
				"main_assigned_to_img" : "../assets/images/mark.jpg",
				"main_assigned_to_name" : "Mark Guillen",
				"subtask_title" : "test Add two other paragraphs using proper html syntax. Add whatever text you would like.",
				"sub_task_id" : 2,
				"project_id" : 4,
				"project_color" : "pink" 
			}
		]
	},
	{
		"task_id" : 12,
		"is_checked" : 0,
		"estimated_points" : 10,
		"task_detail" : 1,
		"task_type" : 1,
		"task_title" : "Add two other paragraphs using proper html syntax. Add whatever text you would like.",
		"task_description" : "test description here",
		"main_assigned_person_id" :  1,
		"main_assigned_person_image" : "../assets/images/john.jpg",
		"main_assigned_person_name" : "John Supsupin",
		"main_project_tag" : [
			{
				"project_id" : 1,
				"project_name" : "CD CRM",
				"project_color" : "green" 
			}
		],
		"sub_project_tag" : [
			{
				"project_id" : 2,
				"project_name" : "CD WEBSITE",
				"project_color" : "blue" 
			},
			{
				"project_id" : 4,
				"project_name" : "FOCUS TRACKER",
				"project_color" : "brown" 
			}
		],
		"sub_tasks" : [
			{
				"is_checked" : 0,
				"subtask_estimated_points" : 100,
				"main_assigned_to_id" : 2,
				"main_assigned_to_img" : "../assets/images/noah.jpg",
				"main_assigned_to_name" : "Noah Guillen",
				"task_detail" : 2,
				"subtask_title" : "Add two other paragraphs using proper html syntax. Add whatever text you would like.",
				"sub_task_id" : 1,
				"project_id" : 2,
				"project_color" : "blue" 
			},
			{
				"is_done" : 0,
				"is_checked" : 0,
				"task_detail" : 1,
				"subtask_estimated_points": 50,
				"main_assigned_to_id" : 3,
				"main_assigned_to_img" : "../assets/images/mark.jpg",
				"main_assigned_to_name" : "Mark Guillen",
				"subtask_title" : "test Add two other paragraphs using proper html syntax. Add whatever text you would like.",
				"sub_task_id" : 2,
				"project_id" : 4,
				"project_color" : "pink" 
			}
		]
	},
	{
		"task_id" : 13,
		"is_checked" : 0,
		"estimated_points" : 10,
		"task_detail" : 1,
		"task_type" : 1,
		"task_title" : "Add two other paragraphs using proper html syntax. Add whatever text you would like.",
		"task_description" : "test description here",
		"main_assigned_person_id" :  1,
		"main_assigned_person_image" : "../assets/images/john.jpg",
		"main_assigned_person_name" : "John Supsupin",
		"main_project_tag" : [
			{
				"project_id" : 1,
				"project_name" : "CD CRM",
				"project_color" : "green" 
			}
		],
		"sub_project_tag" : [
			{
				"project_id" : 2,
				"project_name" : "CD WEBSITE",
				"project_color" : "blue" 
			},
			{
				"project_id" : 4,
				"project_name" : "FOCUS TRACKER",
				"project_color" : "brown" 
			}
		],
		"sub_tasks" : [
			{
				"is_checked" : 0,
				"subtask_estimated_points" : 100,
				"main_assigned_to_id" : 2,
				"main_assigned_to_img" : "../assets/images/noah.jpg",
				"main_assigned_to_name" : "Noah Guillen",
				"task_detail" : 2,
				"subtask_title" : "Add two other paragraphs using proper html syntax. Add whatever text you would like.",
				"sub_task_id" : 1,
				"project_id" : 2,
				"project_color" : "blue" 
			},
			{
				"is_done" : 0,
				"is_checked" : 0,
				"task_detail" : 1,
				"subtask_estimated_points": 50,
				"main_assigned_to_id" : 3,
				"main_assigned_to_img" : "../assets/images/mark.jpg",
				"main_assigned_to_name" : "Mark Guillen",
				"subtask_title" : "test Add two other paragraphs using proper html syntax. Add whatever text you would like.",
				"sub_task_id" : 2,
				"project_id" : 4,
				"project_color" : "pink" 
			}
		]
	},
	{
		"task_id" : 14,
		"is_checked" : 1,
		"estimated_points" : 10,
		"task_detail" : 3,
		"task_type" : 1,
		"task_title" : "Add two other paragraphs using proper html syntax. Add whatever text you would like.",
		"task_description" : "test description here",
		"main_assigned_person_id" :  1,
		"main_assigned_person_image" : "../assets/images/john.jpg",
		"main_assigned_person_name" : "John Supsupin",
		"main_project_tag" : [
			{
				"project_id" : 1,
				"project_name" : "CD CRM",
				"project_color" : "green" 
			}
		],
		"sub_project_tag" : [
			{
				"project_id" : 2,
				"project_name" : "CD WEBSITE",
				"project_color" : "blue" 
			},
			{
				"project_id" : 4,
				"project_name" : "FOCUS TRACKER",
				"project_color" : "brown" 
			}
		],
		"sub_tasks" : [
			{
				"is_checked" : 0,
				"subtask_estimated_points" : 100,
				"main_assigned_to_id" : 2,
				"main_assigned_to_img" : "../assets/images/noah.jpg",
				"main_assigned_to_name" : "Noah Guillen",
				"task_detail" : 2,
				"subtask_title" : "Add two other paragraphs using proper html syntax. Add whatever text you would like.",
				"sub_task_id" : 1,
				"project_id" : 2,
				"project_color" : "blue" 
			},
			{
				"is_done" : 0,
				"is_checked" : 0,
				"task_detail" : 1,
				"subtask_estimated_points": 50,
				"main_assigned_to_id" : 3,
				"main_assigned_to_img" : "../assets/images/mark.jpg",
				"main_assigned_to_name" : "Mark Guillen",
				"subtask_title" : "test Add two other paragraphs using proper html syntax. Add whatever text you would like.",
				"sub_task_id" : 2,
				"project_id" : 4,
				"project_color" : "pink" 
			}
		]
	},
	{
		"task_id" : 15,
		"is_checked" : 0,
		"estimated_points" : 10,
		"task_detail" : 1,
		"task_type" : 1,
		"task_title" : "Add two other paragraphs using proper html syntax. Add whatever text you would like.",
		"task_description" : "test description here",
		"main_assigned_person_id" :  1,
		"main_assigned_person_image" : "../assets/images/john.jpg",
		"main_assigned_person_name" : "John Supsupin",
		"main_project_tag" : [
			{
				"project_id" : 1,
				"project_name" : "CD CRM",
				"project_color" : "green" 
			}
		],
		"sub_project_tag" : [
			{
				"project_id" : 2,
				"project_name" : "CD WEBSITE",
				"project_color" : "blue" 
			},
			{
				"project_id" : 4,
				"project_name" : "FOCUS TRACKER",
				"project_color" : "brown" 
			}
		],
		"sub_tasks" : [
			{
				"is_checked" : 0,
				"subtask_estimated_points" : 100,
				"main_assigned_to_id" : 2,
				"main_assigned_to_img" : "../assets/images/noah.jpg",
				"main_assigned_to_name" : "Noah Guillen",
				"task_detail" : 2,
				"subtask_title" : "Add two other paragraphs using proper html syntax. Add whatever text you would like.",
				"sub_task_id" : 1,
				"project_id" : 2,
				"project_color" : "blue" 
			},
			{
				"is_done" : 0,
				"is_checked" : 0,
				"task_detail" : 1,
				"subtask_estimated_points": 50,
				"main_assigned_to_id" : 3,
				"main_assigned_to_img" : "../assets/images/mark.jpg",
				"main_assigned_to_name" : "Mark Guillen",
				"subtask_title" : "test Add two other paragraphs using proper html syntax. Add whatever text you would like.",
				"sub_task_id" : 2,
				"project_id" : 4,
				"project_color" : "pink" 
			}
		]
	},
	{
		"task_id" : 16,
		"is_checked" : 0,
		"estimated_points" : 10,
		"task_detail" : 1,
		"task_type" : 1,
		"task_title" : "Add two other paragraphs using proper html syntax. Add whatever text you would like.",
		"task_description" : "test description here",
		"main_assigned_person_id" :  1,
		"main_assigned_person_image" : "../assets/images/john.jpg",
		"main_assigned_person_name" : "John Supsupin",
		"main_project_tag" : [
			{
				"project_id" : 1,
				"project_name" : "CD CRM",
				"project_color" : "green" 
			}
		],
		"sub_project_tag" : [
			{
				"project_id" : 2,
				"project_name" : "CD WEBSITE",
				"project_color" : "blue" 
			},
			{
				"project_id" : 4,
				"project_name" : "FOCUS TRACKER",
				"project_color" : "brown" 
			}
		],
		"sub_tasks" : [
			{
				"is_checked" : 0,
				"subtask_estimated_points" : 100,
				"main_assigned_to_id" : 2,
				"main_assigned_to_img" : "../assets/images/noah.jpg",
				"main_assigned_to_name" : "Noah Guillen",
				"task_detail" : 2,
				"subtask_title" : "Add two other paragraphs using proper html syntax. Add whatever text you would like.",
				"sub_task_id" : 1,
				"project_id" : 2,
				"project_color" : "blue" 
			},
			{
				"is_done" : 0,
				"is_checked" : 0,
				"task_detail" : 1,
				"subtask_estimated_points": 50,
				"main_assigned_to_id" : 3,
				"main_assigned_to_img" : "../assets/images/mark.jpg",
				"main_assigned_to_name" : "Mark Guillen",
				"subtask_title" : "test Add two other paragraphs using proper html syntax. Add whatever text you would like.",
				"sub_task_id" : 2,
				"project_id" : 4,
				"project_color" : "pink" 
			}
		]
	},
	{
		"task_id" : 17,
		"is_checked" : 1,
		"estimated_points" : 10,
		"task_detail" : 3,
		"task_type" : 1,
		"task_title" : "Add two other paragraphs using proper html syntax. Add whatever text you would like.",
		"task_description" : "test description here",
		"main_assigned_person_id" :  1,
		"main_assigned_person_image" : "../assets/images/john.jpg",
		"main_assigned_person_name" : "John Supsupin",
		"main_project_tag" : [
			{
				"project_id" : 1,
				"project_name" : "CD CRM",
				"project_color" : "green" 
			}
		],
		"sub_project_tag" : [
			{
				"project_id" : 2,
				"project_name" : "CD WEBSITE",
				"project_color" : "blue" 
			},
			{
				"project_id" : 4,
				"project_name" : "FOCUS TRACKER",
				"project_color" : "brown" 
			}
		],
		"sub_tasks" : [
			{
				"is_checked" : 0,
				"subtask_estimated_points" : 100,
				"main_assigned_to_id" : 2,
				"main_assigned_to_img" : "../assets/images/noah.jpg",
				"main_assigned_to_name" : "Noah Guillen",
				"task_detail" : 2,
				"subtask_title" : "Add two other paragraphs using proper html syntax. Add whatever text you would like.",
				"sub_task_id" : 1,
				"project_id" : 2,
				"project_color" : "blue" 
			},
			{
				"is_done" : 0,
				"is_checked" : 0,
				"task_detail" : 1,
				"subtask_estimated_points": 50,
				"main_assigned_to_id" : 3,
				"main_assigned_to_img" : "../assets/images/mark.jpg",
				"main_assigned_to_name" : "Mark Guillen",
				"subtask_title" : "test Add two other paragraphs using proper html syntax. Add whatever text you would like.",
				"sub_task_id" : 2,
				"project_id" : 4,
				"project_color" : "pink" 
			}
		]
	},
	{
		"task_id" : 18,
		"is_checked" : 1,
		"estimated_points" : 10,
		"task_detail" : 3,
		"task_type" : 1,
		"task_title" : "Add two other paragraphs using proper html syntax. Add whatever text you would like.",
		"task_description" : "test description here",
		"main_assigned_person_id" :  1,
		"main_assigned_person_image" : "../assets/images/john.jpg",
		"main_assigned_person_name" : "John Supsupin",
		"main_project_tag" : [
			{
				"project_id" : 1,
				"project_name" : "CD CRM",
				"project_color" : "green" 
			}
		],
		"sub_project_tag" : [
			{
				"project_id" : 2,
				"project_name" : "CD WEBSITE",
				"project_color" : "blue" 
			},
			{
				"project_id" : 4,
				"project_name" : "FOCUS TRACKER",
				"project_color" : "brown" 
			}
		],
		"sub_tasks" : [
			{
				"is_checked" : 0,
				"subtask_estimated_points" : 100,
				"main_assigned_to_id" : 2,
				"main_assigned_to_img" : "../assets/images/noah.jpg",
				"main_assigned_to_name" : "Noah Guillen",
				"task_detail" : 2,
				"subtask_title" : "Add two other paragraphs using proper html syntax. Add whatever text you would like.",
				"sub_task_id" : 1,
				"project_id" : 2,
				"project_color" : "blue" 
			},
			{
				"is_done" : 0,
				"is_checked" : 0,
				"task_detail" : 1,
				"subtask_estimated_points": 50,
				"main_assigned_to_id" : 3,
				"main_assigned_to_img" : "../assets/images/mark.jpg",
				"main_assigned_to_name" : "Mark Guillen",
				"subtask_title" : "test Add two other paragraphs using proper html syntax. Add whatever text you would like.",
				"sub_task_id" : 2,
				"project_id" : 4,
				"project_color" : "pink" 
			}
		]
	},
	{
		"task_id" : 19,
		"is_checked" : 0,
		"estimated_points" : 10,
		"task_detail" : 2,
		"task_type" : 1,
		"task_title" : "Add two other paragraphs using proper html syntax. Add whatever text you would like.",
		"task_description" : "test description here",
		"main_assigned_person_id" :  1,
		"main_assigned_person_image" : "../assets/images/john.jpg",
		"main_assigned_person_name" : "John Supsupin",
		"main_project_tag" : [
			{
				"project_id" : 1,
				"project_name" : "CD CRM",
				"project_color" : "green" 
			}
		],
		"sub_project_tag" : [
			{
				"project_id" : 2,
				"project_name" : "CD WEBSITE",
				"project_color" : "blue" 
			},
			{
				"project_id" : 4,
				"project_name" : "FOCUS TRACKER",
				"project_color" : "brown" 
			}
		],
		"sub_tasks" : [
			{
				"is_checked" : 0,
				"subtask_estimated_points" : 100,
				"main_assigned_to_id" : 2,
				"main_assigned_to_img" : "../assets/images/noah.jpg",
				"main_assigned_to_name" : "Noah Guillen",
				"task_detail" : 2,
				"subtask_title" : "Add two other paragraphs using proper html syntax. Add whatever text you would like.",
				"sub_task_id" : 1,
				"project_id" : 2,
				"project_color" : "blue" 
			},
			{
				"is_done" : 0,
				"is_checked" : 0,
				"task_detail" : 1,
				"subtask_estimated_points": 50,
				"main_assigned_to_id" : 3,
				"main_assigned_to_img" : "../assets/images/mark.jpg",
				"main_assigned_to_name" : "Mark Guillen",
				"subtask_title" : "test Add two other paragraphs using proper html syntax. Add whatever text you would like.",
				"sub_task_id" : 2,
				"project_id" : 4,
				"project_color" : "pink" 
			}
		]
	},
	{
		"task_id" : 20,
		"is_checked" : 0,
		"estimated_points" : 10,
		"task_detail" : 2,
		"task_type" : 1,
		"task_title" : "Add two other paragraphs using proper html syntax. Add whatever text you would like.",
		"task_description" : "test description here",
		"main_assigned_person_id" :  1,
		"main_assigned_person_image" : "../assets/images/john.jpg",
		"main_assigned_person_name" : "John Supsupin",
		"main_project_tag" : [
			{
				"project_id" : 1,
				"project_name" : "CD CRM",
				"project_color" : "green" 
			}
		],
		"sub_project_tag" : [
			{
				"project_id" : 2,
				"project_name" : "CD WEBSITE",
				"project_color" : "blue" 
			},
			{
				"project_id" : 4,
				"project_name" : "FOCUS TRACKER",
				"project_color" : "brown" 
			}
		],
		"sub_tasks" : [
			{
				"is_checked" : 0,
				"subtask_estimated_points" : 100,
				"main_assigned_to_id" : 2,
				"main_assigned_to_img" : "../assets/images/noah.jpg",
				"main_assigned_to_name" : "Noah Guillen",
				"task_detail" : 2,
				"subtask_title" : "Add two other paragraphs using proper html syntax. Add whatever text you would like.",
				"sub_task_id" : 1,
				"project_id" : 2,
				"project_color" : "blue" 
			},
			{
				"is_done" : 0,
				"is_checked" : 0,
				"task_detail" : 1,
				"subtask_estimated_points": 50,
				"main_assigned_to_id" : 3,
				"main_assigned_to_img" : "../assets/images/mark.jpg",
				"main_assigned_to_name" : "Mark Guillen",
				"subtask_title" : "test Add two other paragraphs using proper html syntax. Add whatever text you would like.",
				"sub_task_id" : 2,
				"project_id" : 4,
				"project_color" : "pink" 
			}
		]
	}
];
