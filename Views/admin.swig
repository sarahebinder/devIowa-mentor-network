{% extends 'layout.swig' %}

{%block content%}

<!--<form method="get" action="/admin">
	<div class="row">
		<div class="six columns">
			<label for "username">Username:</label><input class="u-full-width" type="text" name="username" required>
		</div>
		<div class="six columns">
			<label for "password">Password:</label><input class="u-full-width" type="password" name="password" required>
		</div>
	</div>
		<div class="u-full-width">
			<input type="submit" value="login">
		</div>
	</form>-->
	<form method="post">
	<div class="row">
		<div class="six columns">
			<label for="username">Mentor's name:</label><input class="u-full-width" type="text" name="username" required>
		</div>
		<div class="six columns">
			<label for="email">Mentor's email:</label><input class="u-full-width" type="text" name="email">
		</div>
		</div>
			<label for="mentor_type" required>Mentor type:</label><select class="u-full-width" name="mentor_type">
				<option>Mentor-in-residence</option>
				<option>Founder mentor</option>
				<option>Expert mentor</option>
			</select>
			<label for="bio">Brief bio:</label><input class="u-full-width" type="text" name="bio">
			<label for="skills" required>Skills:</label>
		<div class="row">
			<div class="four columns">
				<address>NOTE: Each mentor must have at least two skills</address>
				<input type="checkbox" name="skills" value="Agile and scrum"> Agile/scrum<br>
				<input type="checkbox" name="skills" value="Agriculture and food tech"> Agriculture and food tech<br>
				<input type="checkbox" name="skills" value="Culture and HR strategy"> Culture and HR strategy<br>
				<input type="checkbox" name="skills" value="Customer discovery"> Customer discovery<br>
				<input type="checkbox" name="skills" value="E-commerce"> E-Commerce<br>
				<input type="checkbox" name="skills" value="Education tech"> Education tech<br>
			</div>
			<div class="four columns"> 
				<input type="checkbox" name="skills" value="Finance and accounting"> Finance and accounting<br>
				<input type="checkbox" name="skills" value="Financial tech"> Financial tech<br>
				<input type="checkbox" name="skills" value="Green tech"> Green tech<br>
				<input type="checkbox" name="skills" value="Health tech"> Health tech<br>
				<input type="checkbox" name="skills" value="Investor"> Investor<br>
				<input type="checkbox" name="skills" value="Legal and intellectual property"> Legal and intellectual property<br>
			</div>
			<div class="four columns">
				<input type="checkbox" name="skills" value="Manufacturing tech"> Manufacutring tech<br>
				<input type="checkbox" name="skills" value="Real Estate tech"> Real Estate Tech<br>
				<input type="checkbox" name="skills" value="Sales and marketing"> Sales and marketing<br>
				<input type="checkbox" name="skills" value="Technology"> Technology<br>
				<input type="checkbox" name="skills" value="Transportation and logistics"> Transportation and logistics<br>
				<input type="checkbox" name="skills" value="UX and UI"> UX and UI<br>
			</div>
			</div>
		<div class="row">
		<div class="six columns">
			<label for "twitter">Twitter username:</label><input class="u-full-width" type="text" name="twitter" placeholder="without the @">
		</div>
		<div class="six columns">
			<label for "linkedin">LinkedIn ID:</label><input class="u-full-width" type="text" name="linkedin" placeholder="linkedin.com/in/_______">
		</div>
		</div>
		<label for "headshot">Mentor photo:</label><input type="file" name="img"><br>
		<input type="submit" class="button-primary" value="go!">
	</div>
	</form>
	<a href="/"><button>Just kidding, go back home</button></a>

{%endblock%}