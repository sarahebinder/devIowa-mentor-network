{% extends 'layout.swig' %}

{%block content%}

<form method="post">
	<div class="row">
	<div class="six columns">
		<label for="username">Username:</label><input class="u-full-width" type="text" name="fullName" placeholder="email@example.co" required>
	</div>
	<div class="six columns">
		<label for="Password">Password:</label><input class="u-full-width" type="password" name="fullName" placeholder="Password" required>
	</div>
	<input type="submit" class="button-primary" value="go!">
	<a href="/"><button>Just kidding, go back home...</button></a>
	</div>
</form>


{%endblock%}