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
				<input type="checkbox" name="skills" value="Agile"> Agile/scrum<br>
				<input type="checkbox" name="skills" value="ag"> Agriculture and food tech<br>
				<input type="checkbox" name="skills" value="culture"> Culture and HR strategy<br>
				<input type="checkbox" name="skills" value="customer"> Customer discovery<br>
				<input type="checkbox" name="skills" value="ecommerce"> E-Commerce<br>
				<input type="checkbox" name="skills" value="ed"> Education tech<br>
			</div>
			<div class="four columns">
				<input type="checkbox" name="skills" value="finance"> Finance and accounting<br>
				<input type="checkbox" name="skills" value="fintech"> Financial tech<br>
				<input type="checkbox" name="skills" value="green"> Green tech<br>
				<input type="checkbox" name="skills" value="health"> Health tech<br>
				<input type="checkbox" name="skills" value="investor"> Investor<br>
				<input type="checkbox" name="skills" value="legal"> Legal and intellectual property<br>
			</div>
			<div class="four columns">
				<input type="checkbox" name="skills" value="manufacturing"> Manufacutring tech<br>
				<input type="checkbox" name="skills" value="realestate"> Real Estate Tech<br>
				<input type="checkbox" name="skills" value="sales"> Sales and marketing<br>
				<input type="checkbox" name="skills" value="tech"> Technology<br>
				<input type="checkbox" name="skills" value="transportation"> Transportation and logistics<br>
				<input type="checkbox" name="skills" value="ux"> UX and UI<br>
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