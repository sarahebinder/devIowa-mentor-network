{% extends 'layout.swig' %}

{%block content%}
	<form method="post" action="/login">
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
		<input type="submit" class="button-primary" value="go!">
	</form>
	<a href="/"><button>Just kidding, go back home...</button></a>
{%endblock%}