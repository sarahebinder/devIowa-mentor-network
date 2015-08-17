<!DOCTYPE html>
<html>


  <head>
  	<!--meta data-->
  	<meta charset="UTF-8">
  	<title>{{ title }} - A startup mentor network for Eastern Iowa</title>
  	<meta name="description" content="Accelerate Iowa maintains a network of mentors, all ready to help you grow your ideas.Founders, investors and industry experts. All ready to meet you in Iowa's Creative Corridor.">
  	<meta name="keywords" content="mentor,network,iowa,startup,entrepreneurship,cedar rapids,iowa startup accelerator">
  	<!--css-->
	<link rel="stylesheet" href="http://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css">  
	<link rel="stylesheet" type="text/css" href="/css/normalize.css">
	<link rel="stylesheet" type="text/css" href="/css/skeleton.css">
	<link rel="stylesheet" type="text/css" href="/css/landingpage4.css">
  </head>

  <body>
	<div id="menubar"> <!--side menu-->
		<a href="/"><img src="images/network.png" id="logo"></a>
		<div class="category">
			<p><strong>Corridor community members: </strong>Meet your mentor match</p>
			<a href="http://www.eventbrite.com/o/jessalyn-holdcraft-iowa-startup-accelerator-8342841936" target="blank"><button class="button-primary"><i class="fa fa-bolt fa-2x"></i> open times</button></a>
		</div>
		<div class="category">
			<p><strong>Become a mentor: </strong>Everyone has a skill to share </p>
			<a href="http://iowastartup.wpengine.com/accelerator/mentors/mentor-expectations/" target="blank"><button class="button-primary"><i class="fa fa-plug fa-2x"></i> learn more</button></a>
		</div>	
		<div class="category">
			<p><strong>Join the project: </strong>Make this page more awesome</p>
			<a href="/join"><button class="button-primary" id="formPopup"><i class="fa fa-link fa-2x"></i> connect</button></a>
		</div>	
		<div class="notes">
			<address>made with <i class="fa fa-heart"></i> by @<a href="https://twitter.com/sarahebinder" target="blank">sarahebinder</a></address>
			<address>Dev/Iowa Summer Series 2015</address>
			<address><a href="/admin">Login</a></address>
		</div>
	</div>
	<div id="mobilemenu">
		<button class="button-primary" id="mobileButton">Menu</button>
	</div>

	<div class="container" id="maincontent"><!--main content container-->
		<p><i class="fa fa-thumb-tack" id="pageSlug"></i> {{ pageSlug }}</p>
		<h1>{{ pageTitle }}</h1>
		<div><p>{%block content%}{%endblock%}</p></div>
	</div>
   
<!--external js files -->
<script src="http://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/d3/3.5.5/d3.min.js"></script>
<script type="text/javascript" src="/js/buttons.js"></script>
<script type="text/javascript" src="/js/dataviz.js"></script>
<!--<script type="text/javascript" src="/js/tinynodes.js"></script>-->
  
</body>
   
</html>