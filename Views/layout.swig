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
  	<div class="page-wrap container">

	<div id="maincontent"><!--main content container-->
	  <p><i class="fa fa-thumb-tack"></i> {{ pageSlug }}</p>
	  <h1>{{ pageTitle }}</h1>
	  <div><p>{%block content%}{%endblock%}</p></div>
	  	<form method="get">
	  	  <h3 align="center">Join the project</h3>
	  		<div class="row">
				<div class="six columns">
					<label for="fullname">Name:</label><input class="u-full-width" type="text" name="fullname" required autofocus></div>
					<div class="six columns"><label for="email">Email:</label><input class="u-full-width" type="email" required></div>
					</div>
					<div><label>How do you want to help?</label><select class="u-full-width" >
						<option>I want to be a mentor</option>
						<option>I can help with data collection</option>
						<option>I have mad JavaScript skills</option>
						<option>Other</option>
						</select>
					</div>	
			<label for="message">Message:</label><textarea class="u-full-width" placeholder="Hi, Sarah..."></textarea>
			<input type="submit" value="go!">
		</form>
	  </div>
    </div>

    <footer class="footer"><!--footer-->
    <div class="container">
        <div class="row">

    		<div class="four columns">
    			<div class="category"> 
					<h5>Priority booking</h5>
					<p>Iowa Startup Accelerator class of 2015</p>
				</div>
				<button class="button-primary"><i class="fa fa-rocket fa-2x"></i> book now</button>

    		</div>
    		<div class="four columns"> 
    			<div class="category">
					<h5>Corridor community members</h5>
					<p>Meet your mentor match</p>
				</div>
				<button class="button-primary"><i class="fa fa-bolt fa-2x"></i> open times</button>

    		</div> <!--is there a way to make the middle column go first in mobile?-->
    		<div class="four columns"> 
    			<div class="category">
    				<h5>Become a mentor</h5>
					<p>Share your skills</p>
				</div>	
				<button class="button-primary"><i class="fa fa-plug fa-2x"></i> learn more</button>
    		</div>
    </div>
    </div>
    <div class="row">



    </div>

    </footer>
   
    <script src="http://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script>
	<!--<script type="text/javascript" src="MY JS HERE"></script>-->
  </body>
   
</html>
