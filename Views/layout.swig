<!DOCTYPE html>
<html>


  <head>
  	<meta charset="UTF-8">
  	<title>{{ title }} - A startup mentor network for Eastern Iowa</title>
  	<meta name="description" content="Accelerate Iowa maintains a network of mentors, all ready to help you grow your ideas.Founders, investors and industry experts. All ready to meet you in Iowa's Creative Corridor.">
  	<meta name="keywords" content="mentor,network,iowa,startup,entrepreneurship,cedar rapids,iowa startup accelerator">
	<link rel="stylesheet" href="http://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css">  
	<!--<link rel="stylesheet" type="text/css" href="landingpage.scss">-->
	<link rel="stylesheet" type="text/css" href="/css/normalize.css">
	<link rel="stylesheet" type="text/css" href="/css/skeleton.css">
	<link rel="stylesheet" type="text/css" href="/css/landingpage4.css">
  </head>


  <body>

  	<div class="row">
	<div class="four columns" id="menubar"> <!--side menu-->
		<!--<i id="toggle2" class="fa fa-align-justify fa-2x"></i>-->
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
			<p>Everyone has a skill to share - learn about our mentor requirements</p>
			<button class="button-primary"><i class="fa fa-plug fa-2x"></i> learn more</button>
		</div>	
		<address>made with <i class="fa fa-heart"></i> by @<a href="https://twitter.com/sarahebinder">sarahebinder</a></address>

	</div>

	<div class="eight columns" id="maincontent"><!--main content column-->
	  <p><i class="fa fa-thumb-tack"></i>{{ pageSlug }}</p>
	  <h1 class="container">{{ pageTitle }}</h1>
	  <div id="textbox" class="container"><p>{%block content%}{%endblock%}</p></div>
	  	<form method="get" class="container">
	  	<h3 align="center">Join the project</h3>
	  		<div class="row">
				<div class="four columns">
					<label for="fullname">Name:</label><input type="text" name="fullname" required autofocus></div>
					<div class="four columns"><label for="email">Email:</label><input type="email" required></div>
					<div class="four columns"><label>How do you want to help?</label><select>
						<option>I want to be a mentor</option>
						<option>I can help with data collection</option>
						<option>I have mad JavaScript skills</option>
						<option>Other</option>
					</select>
					</div>
				</div>	
		<label for="message">Message:</label>
		<textarea class="u-full-width" placeholder="Hi, Sarah..."></textarea>
		<input type="submit" value="go!">
	</form>
	  </div>
    </div>
    <div class="row" id="footer"><!--footer-->
    		<div class="four columns"> some footer content </div>
    		<div class="four columns"> some additional footer content    		</div> <!--is there a way to make the middle column go first in mobile?-->
    		<div class="four columns"> a third column of content</div>


    </div>
    <script src="http://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script>
	<!--<script type="text/javascript" src="MY JS HERE"></script>-->
  </body>
</html>
