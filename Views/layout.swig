<!DOCTYPE html>
<html>


  <head>
  	<meta charset="UTF-8">
  	<title>{{ title }} - A startup mentor network for Eastern Iowa</title>
  	<meta name="description" content="Accelerate Iowa maintains a network of mentors, all ready to help you grow your ideas.Founders, investors and industry experts. All ready to meet you in Iowa's Creative Corridor.">
  	<meta name="keywords" content="mentor,network,iowa,startup,entrepreneurship,cedar rapids,iowa startup accelerator">
	<link rel="stylesheet" href="http://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css">  
	<link rel="stylesheet" type="text/css" href="/css/normalize.css">
	<link rel="stylesheet" type="text/css" href="/css/skeleton.css">
	<link rel="stylesheet" type="text/css" href="/css/landingpage4.css">
  </head>


  <body>
	<div id="menubar"> <!--side menu-->
		<i id="toggle2" class="fa fa-align-justify fa-2x"></i>
		<div class="category"> 
			<h5>Pre-approved teams</h5>
			<p>Iowa Startup Accelerator class of 2015: Priority booking</p>
			<button class="button-primary"><i class="fa fa-rocket fa-2x"></i> book now</button>
		</div>
		<div class="category">
			<h5>Corridor community members</h5>
			<p>Meet your mentor match</p>
			<button class="button-primary"><i class="fa fa-bolt fa-2x"></i> open times</button>
		</div>
		<div class="category">
			<h5>Become a mentor</h5>
			<p>Everyone has a skill to share - learn about mentor expectations</p>
			<button class="button-primary"><i class="fa fa-plug fa-2x"></i> learn more</button>
		</div>	
		<address id="byline">made with <i class="fa fa-heart"></i> by @<a href="https://twitter.com/sarahebinder">sarahebinder</a></address>
		<address><a href="/admin">Login</a></address>
	</div>
	
	<div id="mobilemenu">
		<button class="button-primary">Book now</button>
	</div>

	<div class="container" id="maincontent"><!--main content container-->
		<p><i class="fa fa-thumb-tack" id="pageSlug"></i> {{ pageSlug }}</p>
		<h1>{{ pageTitle }}</h1>
		<div><p>{%block content%}{%endblock%}</p></div>
	</div>
   
    <script src="http://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script>
	<script type="text/javascript" src="controller/menuAnimation.js"></script> <!--is this the right way to do this? When I have multiple js files??-->
  </body>
   
</html>
