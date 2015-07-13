{% extends 'layout.swig' %}

{%block content%}
<div>	
	<img src="images/teamwork.jpg" alt="startupstockphotos">
	<address>Teamwork makes the dream work. (<a href="http://startupstockphotos.com/" target="blank">startupstockphotos.com</a>)</address>
	<div>
		<h3><strong>100+ mentors to help you grow your ideas.</strong>The best-known founders, investors and industry experts. All ready to meet you in Iowa's Creative Corridor. </h3>
		<p><strong>Mentors in residence</strong> host weekly office hours in Iowa's hub for innovation, technology and creativity.</p>
		<p><strong>Founders</strong> who have been there, done that will share their experience.</p>
		<p><strong>Experts</strong> in finance, education, health and more, ready to coach you in some of Iowa's key industries. </p>
	</div>
	<div class="graphic">
		<p><em>Coming soon: Interactive directory of mentors</em></p>
		<i class="fa fa-cog fa-5x"></i>  <i class="fa fa-cog fa-4x"></i>  <i class="fa fa-cog fa-spin fa-5x"></i>  <i class="fa fa-cog fa-4x"></i> <i class="fa fa-cog fa-5x"></i> 
		<!--<p><em>Contact <a href="mailto:sarah.e.binder@gmail.com" target="blank">sarah.e.binder@gmail.com</a> to contribute data</em></p>-->
	</div>
</div>
<form method="get" action="/thankyou">
	  	  <h3 align="center">Join the project</h3>
	  		<div class="row">
				<div class="six columns">
					<label for="fullName">Name:</label><input class="u-full-width" type="text" name="fullName" required></div>
					<div class="six columns"><label for="email">Email:</label><input class="u-full-width" type="email" name="email" required></div>
					</div>
					<div><label for="how">How do you want to help?</label><select class="u-full-width" name="how" >
						<option>I want to be a mentor</option>
						<option>I can help with data collection</option>
						<option>I have mad JavaScript skills</option>
						<option>Other</option>
						</select>
					</div>	
			<label for="message">Message:</label><textarea class="u-full-width" placeholder="Hi, Sarah..." name="message"></textarea>
			<input type="submit" value="go!">
		</form>
{%endblock%}	
