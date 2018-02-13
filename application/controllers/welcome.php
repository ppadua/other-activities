<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class Welcome extends CI_Controller {
	public function index()
	{
		$this->load->view('index');
	}
	public function asana()
	{
		$this->load->view('asana');
	}
	public function survey()
	{
		$this->load->view('survey');
	}
	public function textinput()
	{
		$this->load->view('textinput');
	}
	
	public function jquery_plugin()
	{
		$this->load->view('jquery_plugin');
	}
}

/* End of file welcome.php */
/* Location: ./application/controllers/welcome.php */
