{% extends 'layout.swig' %}

{%block content%}

<!--<form method="post">
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
	<form method="get">
	<div class="row">
		<div class="six columns">
			<label for="username">Mentor's name:</label><input class="u-full-width" type="text" name="username" required>
		</div>
		<div class="six columns">
			<label for="email">Mentor's email:</label><input class="u-full-width" type="text" name="email">
		</div>
		</div>
			<label for="mentor_type" required>Mentor type</label><select class="u-full-width" name="mentor_type">
				<option>Mentor-in-residence</option>
				<option>Founder mentor</option>
				<option>Expert mentor</option>
			</select>
		<div class="row">
		<div class="six columns">
			<label for "twitter">Twitter username</label><input class="u-full-width" type="text" name="twitter" placeholder="without the @">
		</div>
		<div class="six columns">
			<label for "linkedin">LinkedIn ID</label><input class="u-full-width" type="text" name="linkedin" placeholder="linkedin.com/in/_______">
		</div>
		</div>
			<input type="submit" class="button-primary" value="go!">
	</div>
	</form>
	<a href="/"><button>Just kidding, go back home</button></a>

{%endblock%}