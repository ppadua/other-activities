<?php  if ( ! defined('BASEPATH')) exit('No direct script access allowed');
/*
| -------------------------------------------------------------------------
| URI ROUTING
| -------------------------------------------------------------------------
| This file lets you re-map URI requests to specific controller functions.
|
| Typically there is a one-to-one relationship between a URL string
| and its corresponding controller class/method. The segments in a
| URL normally follow this pattern:
|
|	example.com/class/method/id/
|
| In some instances, however, you may want to remap this relationship
| so that a different class/function is called than the one
| corresponding to the URL.
|
| Please see the user guide for complete details:
|
|	http://codeigniter.com/user_guide/general/routing.html
|
| -------------------------------------------------------------------------
| RESERVED ROUTES
| -------------------------------------------------------------------------
|
| There area two reserved routes:
|
|	$route['default_controller'] = 'welcome';
|
| This route indicates which controller class should be loaded if the
| URI contains no data. In the above example, the "welcome" class
| would be loaded.
|
|	$route['404_override'] = 'errors/page_missing';
|
| This route will tell the Router what URI segments to use if those provided
| in the URL cannot be matched to a valid route.
|
*/

$route['default_controller'] = "welcome";
$route['asana'] = "welcome/asana";
$route['textinput'] = "welcome/textinput";
$route['textinput2'] = "welcome/textinput2";
$route['survey'] = "welcome/survey";
$route['jquery_plugin'] = "welcome/jquery_plugin";
$route['card_motion'] = "welcome/card_motion";
$route['tower_defense'] = "welcome/tower_defense";

$route['animation_1'] = "welcome/animation_1";
$route['animation_2'] = "welcome/animation_2";
$route['animation_3'] = "welcome/animation_3";
$route['animation_4'] = "welcome/animation_4";
$route['animation_5'] = "welcome/animation_5";
$route['animation_6'] = "welcome/animation_6";
$route['animation_7'] = "welcome/animation_7";
$route['animation_8'] = "welcome/animation_8";
$route['animation_9'] = "welcome/animation_9";
$route['animation_10'] = "welcome/animation_10";
$route['animation_11'] = "welcome/animation_11";
$route['animation_12'] = "welcome/animation_12";
$route['animation_13'] = "welcome/animation_13";
$route['animation_14'] = "welcome/animation_14";
$route['animation_15'] = "welcome/animation_15";
$route['animation_16'] = "welcome/animation_16";
$route['animation_17'] = "welcome/animation_17";
$route['404_override'] = '';


/* End of file routes.php */
/* Location: ./application/config/routes.php */
