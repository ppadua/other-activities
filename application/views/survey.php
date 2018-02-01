<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="utf-8">
	<title>Churvey</title>
	<link rel="stylesheet" href="/assets/survey/css/dashboard.css?<?= time()?>">
	<link rel="stylesheet" href="/assets/survey/css/global.css?<?= time()?>">
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
	<script src="/assets/survey/js/dashboard.js?<?= time()?>"></script>
	<script src="/assets/survey/js/jquery_serialize.js?<?= time()?>"></script>
</head>
<body>
	<div id="wrapper">
		<div id="content">
			<h1>Product Survey</h1>
			<ul id="breadcrumb">
				<li class="active_breadcrumb" id="general_info"><a href="javascript:void(0)">General Info</a></li>
				<li id="educational_info"><a href="javascript:void(0)">Educational Info</a></li>
				<li id="household_info"><a href="javascript:void(0)" >Household Info</a></li>
				<li id="employment_info"><a href="javascript:void(0)">Employment Info</a></li>
				<li id="other_info"><a href="javascript:void(0)">Other Info</a></li>
			</ul>
			<form action="#" id="user_info">
				<div id="general_info" class="user_info hidden">
					<div id="user_age">
						<span>1. What is your age?</span>
						<ul class="user_age">
							<li><input type="radio" name="user_age" value="17 or younger"><span>17 or younger</span></li>
							<li><input type="radio" name="user_age" value="18-24"><span>18-24</span></li>
							<li><input type="radio" name="user_age" value="25-34"><span>25-34</span></li>
							<li><input type="radio" name="user_age" value="35-44"><span>35-44</span></li>
							<li><input type="radio" name="user_age" value="45-49"><span>45-49</span></li>
							<li><input type="radio" name="user_age" value="50-64"><span>50-64</span></li>
							<li><input type="radio" name="user_age" value="65-80"><span>65-80</span></li>
							<li><input type="radio" name="user_age" value="81 or older"><span>81 or older</span></li>
						</ul>
					</div>
					<div id="user_gender">
						<span>2. What is your gender?</span>
						<ul class="user_gender">
							<li><input type="radio" name="user_gender" value="Male"><span>Male</span></li>
							<li><input type="radio" name="user_gender" value="Female"><span>Female</span></li>
						</ul>
					</div>
					<div id="user_ethinicity">
						<span>3. Please Specify your ethnicity.</span>
						<ul class="user_ethinicity">
							<li><input type="radio" name="user_ethinicity" value="White / Caucasian"><span>White / Caucasian</span></li>
							<li><input type="radio" name="user_ethinicity" value="Hispanic or Latino"><span>Hispanic or Latino</span></li>
							<li><input type="radio" name="user_ethinicity" value="Black or African American"><span>Black or African American</span></li>
							<li><input type="radio" name="user_ethinicity" value="Native American or American Indian"><span>Native American or American Indian</span></li>
							<li><input type="radio" name="user_ethinicity" value="Asian / Pacific Islander"><span>Asian / Pacific Islander</span></li>
							<li><input type="radio" name="user_ethinicity" data-show-hidden="mixed_ethnicity" value="Mixed"><span>Mixed</span></li>
						</ul>
					</div>
					<div class="hidden sub_form user_mixed_ethnicity">
						<span>3.a. Please specify your mixed ethnicity. Please select all that apply</span>
						<ul class="">
						   	<li><input type="checkbox" name="user_mixed_ethinicity[]" value="White / Caucasian"><span>White / Caucasian</span></li>
						   	<li><input type="checkbox" name="user_mixed_ethinicity[]" value="Hispanic or Latino"><span>Hispanic or Latino</span></li>
						   	<li><input type="checkbox" name="user_mixed_ethinicity[]" value="Black or African American"><span>Black or African American</span></li>
						   	<li><input type="checkbox" name="user_mixed_ethinicity[]" value="Native American or American Indian"><span>Native American or American Indian</span></li>
						   	<li><input type="checkbox" name="user_mixed_ethinicity[]" value="Asian / Pacific Islander"><span>Asian / Pacific Islander</span></li>
						</ul>
					</div>

					<div class="button_click">
						<button class="back_sub_form hidden">Back</button>
						<button class="continue_form">Continue</button>
					</div>
				</div>
				<div id="educational_info" class="user_info hidden">
					<div id="user_education">
						<span>1. Education: What is the highest degree or level of school you have completed? If currently enrolled, highest degree received.</span>
						<ul class="user_education">
							<li><input type="radio" name="user_education" data-terminate="true" value="No schooling completed"><span>No schooling completed</span></li>
							<li><input type="radio" name="user_education" value="Nursery school to 8th grade"><span>Nursery school to 8th grade</span></li>
							<li><input type="radio" name="user_education" value="Some high school, no diploma"><span>Some high school, no diploma</span></li>
							<li><input type="radio" name="user_education" value="High school graduate, diploma or the equivalent (for example: GED"><span>High school graduate, diploma or the equivalent (for example: GED)</span></li>
							<li><input type="radio" name="user_education" value="Some college credit, no degree"><span>Some college credit, no degree</span></li>
							<li><input type="radio" name="user_education" value="Trade/technical/vocational training"><span>Trade/technical/vocational training</span></li>
							<li><input type="radio" name="user_education" value="Associate degree"><span>Associate degree</span></li>
							<li><input type="radio" name="user_education" value="Bachelor’s degree"><span>Bachelor’s degree</span></li>
							<li><input type="radio" name="user_education" value="Master’s degree"><span>Master’s degree</span></li>
							<li><input type="radio" name="user_education" value="Professional degree"><span>Professional degree</span></li>
							<li><input type="radio" name="user_education" value="Doctorate degree"><span>Doctorate degree</span></li>
						</ul>
					</div>
					<div class="button_click">
						<button class="back_form">Back</button>
						<button class="continue_form">Continue</button>
					</div>
				</div>
				<div id="household_info"  class="user_info hidden">
					<div id="user_status_info">
						<span>1. Marital Status: What is your marital status?</span>
						<ul class="user_status_info">
							<li><input type="radio" name="user_status_info" value="Single, never married"><span>Single, never married</span></li>
							<li><input type="radio" name="user_status_info" data-show-hidden="married" value="Married or domestic partnership"><span>Married or domestic partnership</span></li>
							<li><input type="radio" name="user_status_info" data-show-hidden="widowed" value="Widowed"><span>Widowed</span></li>
							<li><input type="radio" name="user_status_info" value="Divorced"><span>Divorced</span></li>
							<li><input type="radio" name="user_status_info" value="Separated"><span>Separated</span></li>
						</ul>
					</div>
					<div id="user_count_children">
						<span>2.How many children under the age of 18 live in your household?</span>
						<ul class="user_count_children">
							<li><input type="radio" name="user_count_children" value="0, none"><span>0, none</span></li>
							<li><input type="radio" name="user_count_children" value="1"><span>1</span></li>
							<li><input type="radio" name="user_count_children" value="2"><span>2</span></li>
							<li><input type="radio" name="user_count_children" value="3"><span>3</span></li>
							<li><input type="radio" name="user_count_children" value="4 or more"><span>4 or more</span></li>
						</ul>
					</div>
					<div class="hidden sub_form user_married">
						<span>1.a. How many years have you been married?</span>
						<ul class="">
							<li><input type="radio" name="user_married" value="Less than a year"><span>Less than a year</span></li>
							<li><input type="radio" name="user_married" value="1-2"><span>1-2</span></li>
							<li><input type="radio" name="user_married" value="3-4"><span>3-4</span></li>
							<li><input type="radio" name="user_married" value="5 or more"><span>5 or more</span></li>
						</ul>
					</div>
					<div class="hidden sub_form user_widowed">
						<span>1.a. How many years have you been married?</span>
						<ul class="">
							<li><input type="radio" name="user_widowed" value="Less than a year"><span>Less than a year</span></li>
							<li><input type="radio" name="user_widowed" value="1-2"><span>1-2</span></li>
							<li><input type="radio" name="user_widowed" value="3-4"><span>3-4</span></li>
							<li><input type="radio" name="user_widowed" value="5 or more"><span>5 or more</span></li>
						</ul>
					</div>
					<div class="button_click">
						<button class="back_sub_form hidden">Back</button>
						<button class="back_form">Back</button>
						<button class="continue_form">Continue</button>
					</div>
				</div>
				<div id="employment_info"  class="user_info hidden">
					<div id="employement_status">
						<span>1. What is your employment status?</span>
						<ul class="employement_status">
							<li><input type="radio" name="employement_status" data-show-hidden="employed" value="Employed part-time, 1-39 hours/week"><span>Employed part-time, 1-39 hours/week</span></li>
							<li><input type="radio" name="employement_status" data-show-hidden="employed" value="Employed, working 40 or more hours/week"><span>Employed, working 40 or more hours/week</span></li>
							<li><input type="radio" name="employement_status" data-show-hidden="employed" value="Self-employed"><span>Self-employed</span></li>
							<li><input type="radio" name="employement_status" data-show-hidden="not_employed" value="Not employed, looking for work"><span>Not employed, looking for work</span></li>
							<li><input type="radio" name="employement_status" data-show-hidden="not_employed" value="Not employed, NOT currently looking for work"><span>Not employed, NOT currently looking for work</span></li>
							<li><input type="radio" name="employement_status" value="Student"><span>Student</span></li>
							<li><input type="radio" name="employement_status" value="Military"><span>Military</span></li>
							<li><input type="radio" name="employement_status" value="Retired"><span>Retired</span></li>
							<li><input type="radio" name="employement_status" value="Disabled, not able to work"><span>Disabled, not able to work</span></li>
						</ul>
					</div>
					<div id="" class="hidden sub_form user_employed">
						<span>1.a. Are you employed in any of the following industries? Please select all that apply</span>
						<ul class="">
							<li><input type="checkbox" name="user_employed[]" value="Advertising/Public Relations"><span>Advertising/Public Relations</span></li>
							<li><input type="checkbox" name="user_employed[]" value="Architecture"><span>Architecture</span></li>
							<li><input type="checkbox" name="user_employed[]" value="Automotive"><span>Automotive</span></li>
							<li><input type="checkbox" name="user_employed[]" value="Beauty/Cosmetics"><span>Beauty/Cosmetics</span></li>
							<li><input type="checkbox" name="user_employed[]" value="Education"><span>Education</span></li>
							<li><input type="checkbox" name="user_employed[]" value="Electronics/Computer/Software"><span>Electronics/Computer/Software</span></li>
							<li><input type="checkbox" name="user_employed[]" value="Entertainment/Art/Media/Publishing"><span>Entertainment/Art/Media/Publishing</span></li>
							<li><input type="checkbox" name="user_employed[]" value="Fashion/Clothing"><span>Fashion/Clothing</span></li>
							<li><input type="checkbox" name="user_employed[]" value="Financial Services/Insurance"><span>Financial Services/Insurance</span></li>
							<li><input type="checkbox" name="user_employed[]" value="Grocery/Food/Beverages"><span>Grocery/Food/Beverages</span></li>
							<li><input type="checkbox" name="user_employed[]" value="Government/Politics"><span>Government/Politics</span></li>
							<li><input type="checkbox" name="user_employed[]" value="Healthcare/Pharmaceuticals"><span>Healthcare/Pharmaceuticals</span></li>
							<li><input type="checkbox" name="user_employed[]" value="Internet/E-Commerce"><span>Internet/E-Commerce</span></li>
							<li><input type="checkbox" name="user_employed[]" value="Management Consulting"><span>Management Consulting</span></li>
							<li><input type="checkbox" name="user_employed[]" value="Market Research/Marketing Consulting"><span>Market Research/Marketing Consulting</span></li>
							<li><input type="checkbox" name="user_employed[]" value="Military"><span>Military</span></li>
							<li><input type="checkbox" name="user_employed[]" value="Real Estate/Construction"><span>Estate/Construction</span></li>
							<li><input type="checkbox" name="user_employed[]" value="Sales/Sales Promotion"><span>Sales/Sales Promotion</span></li>
							<li><input type="checkbox" name="user_employed[]" value="Sports"><span>Sports</span></li>
							<li><input type="checkbox" name="user_employed[]" value="Television (Studio/Network/Cable/Satellite)"><span>Television (Studio/Network/Cable/Satellite)</span></li>
							<li><input type="checkbox" name="user_employed[]" value="Transportation/Shipping"><span>Transportation/Shipping</span></li>
							<li><input type="checkbox" name="user_employed[]" value="Travel/Tourism"><span>Travel/Tourism</span></li>
						</ul>
					</div>
					<div id="" class="hidden sub_form user_not_employed">
						<span>1.a. Are you employed in any of the following industries? Please select all that apply</span>
						<ul class="">
							<li><input type="checkbox" name="user_not_employed[]" value="Advertising/Public Relations"><span>Advertising/Public Relations</span></li>
							<li><input type="checkbox" name="user_not_employed[]" value="Architecture"><span>Architecture</span></li>
							<li><input type="checkbox" name="user_not_employed[]" value="Automotive"><span>Automotive</span></li>
							<li><input type="checkbox" name="user_not_employed[]" value="Beauty/Cosmetics"><span>Beauty/Cosmetics</span></li>
							<li><input type="checkbox" name="user_not_employed[]" value="Education"><span>Education</span></li>
							<li><input type="checkbox" name="user_not_employed[]" value="Electronics/Computer/Software"><span>Electronics/Computer/Software</span></li>
							<li><input type="checkbox" name="user_not_employed[]" value="Entertainment/Art/Media/Publishing"><span>Entertainment/Art/Media/Publishing</span></li>
							<li><input type="checkbox" name="user_not_employed[]" value="Fashion/Clothing"><span>Fashion/Clothing</span></li>
							<li><input type="checkbox" name="user_not_employed[]" value="Financial Services/Insurance"><span>Financial Services/Insurance</span></li>
							<li><input type="checkbox" name="user_not_employed[]" value="Grocery/Food/Beverages"><span>Grocery/Food/Beverages</span></li>
							<li><input type="checkbox" name="user_not_employed[]" value="Government/Politics"><span>Government/Politics</span></li>
							<li><input type="checkbox" name="user_not_employed[]" value="Healthcare/Pharmaceuticals"><span>Healthcare/Pharmaceuticals</span></li>
							<li><input type="checkbox" name="user_not_employed[]" value="Internet/E-Commerce"><span>Internet/E-Commerce</span></li>
							<li><input type="checkbox" name="user_not_employed[]" value="Management Consulting"><span>Management Consulting</span></li>
							<li><input type="checkbox" name="user_not_employed[]" value="Market Research/Marketing Consulting"><span>Market Research/Marketing Consulting</span></li>
							<li><input type="checkbox" name="user_not_employed[]" value="Military"><span>Military</span></li>
							<li><input type="checkbox" name="user_not_employed[]" value="Real Estate/Construction"><span>Estate/Construction</span></li>
							<li><input type="checkbox" name="user_not_employed[]" value="Sales/Sales Promotion"><span>Sales/Sales Promotion</span></li>
							<li><input type="checkbox" name="user_not_employed[]" value="Sports"><span>Sports</span></li>
							<li><input type="checkbox" name="user_not_employed[]" value="Television (Studio/Network/Cable/Satellite)"><span>Television (Studio/Network/Cable/Satellite)</span></li>
							<li><input type="checkbox" name="user_not_employed[]" value="Transportation/Shipping"><span>Transportation/Shipping</span></li>
							<li><input type="checkbox" name="user_not_employed[]" value="Travel/Tourism"><span>Travel/Tourism</span></li>
						</ul>
					</div>
					<div id="" class="hidden sub_form user_employed">
						<span>1.b. What is your total household income?</span>
						<ul class="">
							<li><input type="checkbox" name="user_income[]" value="Less than $15,000"><span>Less than $15,000</span></li>
							<li><input type="checkbox" name="user_income[]" value="$15,000-$24,999"><span>$15,000-$24,999</span></li>
							<li><input type="checkbox" name="user_income[]" value="$25,000-$49,999"><span>$25,000-$49,999</span></li>
							<li><input type="checkbox" name="user_income[]" value="$50,000-$74,999"><span>$50,000-$74,999</span></li>
							<li><input type="checkbox" name="user_income[]" value="$75,000-$99,999"><span>$75,000-$99,999</span></li>
							<li><input type="checkbox" name="user_income[]" value="$100,000-$149,999"><span>$100,000-$149,999</span></li>
							<li><input type="checkbox" name="user_income[]" value="$150,000-$199,999"><span>$150,000-$199,999</span></li>
							<li><input type="checkbox" name="user_income[]" value="$200,000-$249,999"><span>$200,000-$249,999</span></li>
							<li><input type="checkbox" name="user_income[]" value="$250,000 or greater"><span>$250,000 or greater</span></li>
						</ul>
					</div>
					<div class="button_click">
						<button class="back_sub_form hidden">Back</button>
						<button class="back_form">Back</button>
						<button class="continue_form">Continue</button>
					</div>
				</div>
				<div id="other_info"  class="user_info hidden">
					<div id="other_info">
						<span>1. Using just a few phrases, please briefly describe yourself. Use at least three words.</span>
						<ul class="other_info">
							<li><textarea id="" cols="30" rows="10" name="other_info"></textarea></li>
						</ul>
					</div>
					<div class="button_click">
						<input type="submit" value="Complete Survey">
					</div>
				</div>
			</form>
		</div>
		<div id="terminate_content" class="hidden">
			We're sorry. You do not meet the qualifications for this survey. We sincereley thank you and appreciate your time, dedication, and continued participation in our online surveys.
		</div>
	</div>
</body>
</html>
